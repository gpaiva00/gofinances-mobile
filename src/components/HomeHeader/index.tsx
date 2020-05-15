import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

type Balance = {
  income: number;
  outcome: number;
  total: number;
}

type AppProps = {
  balance: Balance | undefined;
}

const HomeHeader: FC<AppProps> = ({ balance }) => (
  <View style={styles.header}>
    
    <View style={styles.balanceContent}>
      <Text style={styles.balanceLabel}>Balanço Total</Text>
      <Text style={styles.balanceValueContent}>
        <Text style={styles.balanceCurrency}>R$ </Text>
        <Text style={styles.balanceValue}>{balance?.total}</Text>
      </Text>
    </View>

    <TouchableOpacity
      onPress={() => {}}
      style={styles.addButton}>
        <MaterialIcons name='add-circle-outline' size={35}></MaterialIcons>
    </TouchableOpacity>
  </View>
)

export default HomeHeader;