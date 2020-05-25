import React, { FC } from 'react';
import { FlatList, View, Text } from 'react-native'

import TransactionsListItem from '../TransactionsListItem';

type Transaction = {
  id: string;
  title: string;
  value: number;
  type: string;
  category: Category;
  created_at: Date;
}

type Category = {
  id: string;
  title: string;
}

type AppProps = {
  transactions: [Transaction] | undefined;
}

const TransactionsList: FC<AppProps> = ({ transactions }) => {
  
  return (
    <>
      {!transactions?.length && 
        <View style={{ 
            flex:1, 
            alignItems: 'center', 
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#878787',
              fontSize: 16
            }}
          >
            Suas transações aparecerão aqui
          </Text>
        </View>
      }

      <FlatList
        data={transactions}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: transaction }) => 
          <TransactionsListItem transaction={transaction}/>
        }
      />      
    </>
  )
}

export default TransactionsList;