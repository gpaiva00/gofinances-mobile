import React, { FC, useContext } from "react"
import NumberFormat from 'react-number-format';
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native"
import { AppContext } from '../../contexts/AppContext';
import CategoryIcon from '../CategoryIcon';

import api from  '../../services/api'

import styles from './styles';

type Transaction = {
  id: string;
  title: string;
  value: number;
  category_id: string;
  type: string;
  category: Category;
}

type Category = {
  title: string;
}

type AppProps = {
  transaction: Transaction;
}

const TransactionsListItem: FC<AppProps> = ({ transaction }) => {
  const { setRefresh } = useContext(AppContext);

  async function handleDeleteTransaction() {
    await api.delete(`/transactions/${transaction.id}`);
    
    setRefresh(true);
  }

  function showAlert() {
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
  }
   
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
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TransactionsListItem
