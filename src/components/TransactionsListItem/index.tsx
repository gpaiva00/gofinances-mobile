import React, { FC, useCallback } from "react"
import NumberFormat from 'react-number-format';
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native"
import { useApp } from '../../hooks/App';
import CategoryIcon from '../CategoryIcon';
import formatDate from '../../utils/formatDate';

import api from  '../../services/api'

import styles from './styles';

type Transaction = {
  id: string;
  title: string;
  value: number;
  type: string;
  category: Category;
  created_at: Date;
}

type Category = {
  title: string;
}

type AppProps = {
  transaction: Transaction;
}

const TransactionsListItem: FC<AppProps> = ({ transaction }) => {
  const { setRefresh } = useApp();

  const handleDeleteTransaction = useCallback(async () => {
    await api.delete(`/transactions/${transaction.id}`);
    
    setRefresh(true);
  }, []);

  const showAlert = useCallback(() => {
    return Alert.alert(
      'Excluir',
      'Deseja excluir essa transação?',
      [
        {
          text: 'Cancelar',
          onPress: () => {}
        },
        {
          text: 'Sim',
          onPress: handleDeleteTransaction
        }
      ]
    )
  }, []);
   
  return (
    <TouchableWithoutFeedback
      onLongPress={showAlert}
      >
      <View style={styles.item}>
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
          <CategoryIcon title={transaction.category.title} />
          <View style={styles.itemTextContent}>
            <Text style={styles.itemTitle}>{transaction.title}</Text>
            <Text style={styles.itemCategory}>{transaction.category.title}</Text>
          </View>
        </View>

        <View style={styles.itemValueContent}>
          <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 5 }}>
            <Text style={styles.itemCurrency}>R$ </Text>
            <Text style={styles.itemValue}>
              <NumberFormat
                value={Number(transaction.value)}
                displayType={'text'}
                decimalSeparator=','
                thousandSeparator='.'
                decimalScale={2}
                fixedDecimalScale={true}
                renderText={value => (
                  <Text>
                    {transaction.type === 'outcome' && '- '}
                    {value}
                  </Text>
                )}
              />
            </Text>
          </View>
        
          <Text style={styles.itemDate}>{formatDate(new Date(transaction.created_at))}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TransactionsListItem
