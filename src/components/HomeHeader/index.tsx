import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import NumberFormat from 'react-number-format';


import styles from './styles'

type Balance = {
  income: number;
  outcome: number;
  total: number;
}

type AppProps = {
  balance: Balance | undefined;
  goToCreateScreen: Function;
}


const HomeHeader: FC<AppProps> = ({ balance, goToCreateScreen }) => (
  <View style={styles.header}>
    
    <View style={styles.balanceContent}>
      <Text style={styles.balanceLabel}>Balanço Total</Text>
      <Text style={styles.balanceValueContent}>
        <Text style={styles.balanceCurrency}>R$ </Text>
        <NumberFormat
          value={balance?.total}
          displayType={'text'}
          decimalSeparator=','
          thousandSeparator='.'
          renderText={(value) => <Text style={styles.balanceValue}> {value}</Text>}
        />
      </Text>
    </View>

    <TouchableOpacity
      onPress={() => goToCreateScreen()}
      style={styles.addButton}>
        <MaterialIcons name='add-circle' size={45}></MaterialIcons>
    </TouchableOpacity>
  </View>
)

export default HomeHeader;