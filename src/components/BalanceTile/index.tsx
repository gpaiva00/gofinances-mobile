import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import NumberFormat from 'react-number-format';

import styles from './styles';

interface BalanceProps {
  title: string;
  value: number | undefined;
  type: "income" | "outcome";
}

const BalanceTile: FC<BalanceProps> = ({ title, value, type }) => {

  return (
    <View style={styles.tile}>
      <View style={styles.tileHeader}>
        <Text style={styles.tileTitle}>{title}</Text>   
        <FontAwesome5 
          name={ type === 'income' ? "arrow-circle-up" : "arrow-circle-down" }
          size={20}
          color={ type === 'income' ? "#37C988" : "#c53030" }
          />
      </View>
      
      <NumberFormat
        value={value}
        displayType={'text'}
        decimalSeparator=','
        thousandSeparator='.'
        decimalScale={2}
        fixedDecimalScale={true}
        renderText={value => (
          <Text>
            R$ {value}
          </Text>
        )}
      />
    </View>
  )
}

export default BalanceTile;