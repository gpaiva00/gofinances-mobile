import React, { FC } from "react"
import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import styles from './styles';

type Transaction = {
  id: string;
  title: string;
  value: number;
  category_id: string;
  type: string;
}

type Category = {
  name: string;
  iconName: string;
}

type AppProps = {
  transaction: Transaction;
  category: Category;
}

const TransactionsListItem: FC<AppProps> = ({ transaction, category }) => {
  
  return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          name={category.iconName}
          size={40}
        />
        <View style={styles.itemTextContent}>
          <Text style={styles.itemTitle}>{transaction.title}</Text>
          <Text style={styles.itemCategory}>{category.name}</Text>
        </View>
      </View>

      <View style={styles.itemValueContent}>
        <Text style={styles.itemCurrency}>R$ </Text>
        <Text style={styles.itemValue}>
          {transaction.type === 'outcome' && '-'}
          {transaction.value}
        </Text>
      </View>
    </View>
  )
}

export default TransactionsListItem
