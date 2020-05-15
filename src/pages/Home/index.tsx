import React, { FC, useState, useEffect } from "react"
import { View, Text } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack'

import api from "../../services/api"

import styles from "./styles"

import HomeHeader from "../../components/HomeHeader"
import TransactionsList from "../../components/TransactionsList"

type Transaction = {
  id: string;
  title: string;
  value: number;
  category_id: string;
  type: string;
}

type Balance = {
  income: number;
  outcome: number;
  total: number;
}

type Category = {
  id: string;
  title: string;
}

type AppProps = {
  navigation: StackNavigationProp<any>
}

const Home: FC<AppProps> = ({ navigation }) => {
  const [transactions, setTransactions] = useState<[Transaction]>();
  const [balance, setBalance] = useState<Balance>();
  const [categories, setCategories] = useState<[Category]>();


  async function fetchTransactionsAndBalance() {
    const {
      data: { transactions, balance },
    } = await api.get("transactions")

    setTransactions(transactions);
    setBalance(balance);
  }

  async function fetchCategories() {
    const response = await api.get('categories');
    setCategories(response.data);
  }

  function goToCreateScreen() {
    navigation.navigate('Create');
  }

  useEffect(() => {
    fetchTransactionsAndBalance();
    fetchCategories();
  }, [])
  return (
    <>
      <HomeHeader balance={balance} goToCreateScreen={goToCreateScreen}/>

      <View style={styles.container}>
        <View style={styles.pageTitles}>
          <Text style={styles.transactionsTitle}>Transações</Text>
          <Text style={styles.currentMonthLabel}>Maio</Text>
        </View>

        <TransactionsList transactions={transactions} categories={categories} />
      </View>
    </>
  )
}

export default Home
