import React, { FC } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native'

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
  loading: boolean;
}

const TransactionsList: FC<AppProps> = ({ loading, transactions }) => {

  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        {loading && 
          <ActivityIndicator color="#000" size={30} style={{ marginTop: 40 }} /> 
        }
        
        {!loading && !transactions?.length &&
        
          <Text
            style={{
              color: '#878787',
              fontSize: 16,
              marginTop: 80,
            }}
          >
            Suas transações aparecerão aqui
          </Text>
        }
      
      </View>

      <FlatList
        data={transactions}
        style={{ marginTop: 10, }}
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
