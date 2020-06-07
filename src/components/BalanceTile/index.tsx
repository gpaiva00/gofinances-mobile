import React, { FC, useCallback } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import NumberFormat from 'react-number-format';

import styles from './styles';

interface BalanceProps {
  title: string;
  value: number | undefined;
  type: "income" | "outcome" | "total";
}

const BalanceTile: FC<BalanceProps> = ({ title, value, type }) => {

  const returnTileIcon = useCallback((type: string) => {
    let name, color;

    switch(type) {
      case 'income':
       name = 'arrow-circle-up';
       color = "#37C988";
       break;
      case 'outcome':
        name = 'arrow-circle-down';
        color = "#c53030";
        break;
      
      default:
        name = 'coins';
        color = '#000';
        break;
    }


    return (
      <FontAwesome5 
        name={name}
        size={20}
        color={color}
      />
    );
  }, []);

  return (
    <View style={styles.tile}>
      <View style={styles.tileHeader}>
        <Text style={styles.tileTitle}>{title}</Text>   
        
        {returnTileIcon(type)}
      </View>
      
      <NumberFormat
        value={value}
        displayType={'text'}
        decimalSeparator=','
        thousandSeparator='.'
        decimalScale={2}
        fixedDecimalScale={true}
        renderText={value => (
          <Text style={styles.tileValue}>
            R$ {value}
          </Text>
        )}
      />
    </View>
  )
}

export default BalanceTile;