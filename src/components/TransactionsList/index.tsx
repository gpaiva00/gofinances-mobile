import React, { FC } from 'react';
import { FlatList } from 'react-native'

import TransactionsListItem from '../TransactionsListItem';

type Transaction = {
  id: string;
  title: string;
  value: number;
  category_id: string;
  type: string;
}

type Category = {
  id: string;
  title: string;
}

type AppProps = {
  transactions: [Transaction] | undefined;
  categories: [Category] | undefined;
}

const categoryIcons = [
  {name: 'Alimentação', icon: 'restaurant'},
  {name: 'Recebimentos', icon: 'credit-card'},
  {name: 'Celular', icon: 'smartphone'},
  {name: 'Contas', icon: 'receipt'},
  {name: 'Transferências', icon: 'forward'},
]

const TransactionsList: FC<AppProps> = ({ transactions, categories }) => {

  const returnCategory = (transactionId: string) => {
    const name = categories?.find((category) => category.id === transactionId)?.title || ''
    const iconName = categoryIcons.find((item) => item.name === name)?.icon || "credit-card"
    return { name, iconName };
  }
  
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: transaction }) => 
        <TransactionsListItem 
          transaction={transaction}
          category={returnCategory(transaction.category_id)} 
        />
      }
    />
  )
}

export default TransactionsList;