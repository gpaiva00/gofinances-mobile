import React, { FC } from 'react';
import { View, Text, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

type Transactions = {
  id: string
  title: string
  value: number
  category_id: string
}

type Category = {
  id: string;
  title: string;
}

type AppProps = {
  transactions: [Transactions] | undefined;
  categories: [Category] | undefined;
}

const categoryIcons = [
  {name: 'Alimentação', icon: 'restaurant'},
  {name: 'Recebimentos', icon: 'credit-card'},
]

const TransactionsList: FC<AppProps> = ({ transactions, categories }) => {

  const returnCategory = (id: string) =>
    categories?.find(category => category.id === id)?.title || '';
  
  const returnCategoryIcon = (name: string) => 
    categoryIcons.find(item => item.name === name)?.icon || 'category'

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: transaction }) => (
        <View style={styles.item}>
          
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons 
              name={returnCategoryIcon(returnCategory(transaction.category_id))}
              size={40}
            />
            <View style={styles.itemTextContent}>
              <Text style={styles.itemTitle}>{transaction.title}</Text>
              <Text style={styles.itemCategory}>{returnCategory(transaction.category_id)}</Text>
            </View>
          </View>

          <View style={styles.itemValueContent}>
            <Text style={styles.itemCurrency}>R$ </Text>
            <Text style={styles.itemValue}>{transaction.value}</Text>
          </View>          
        </View>
      )}
    />
  )
}

export default TransactionsList;