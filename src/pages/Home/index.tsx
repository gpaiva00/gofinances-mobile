import React, { FC, useState, useEffect, useContext } from "react"
import { View, Text } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContext } from '../../contexts/AppContext'

import api from "../../services/api"

import styles from "./styles"

import HomeHeader from "../../components/HomeHeader"
import TransactionsList from "../../components/TransactionsList"
import BalanceTile from '../../components/BalanceTile';

type Transaction = {
  id: string;
  title: string;
  value: number;
  category_id: string;
  type: string;
  category: Category;
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
  const { refresh, setRefresh } = useContext(AppContext);

  async function fetchTransactionsAndBalance() {
    const {
      data: { transactions, balance },
    } = await api.get("transactions")

    setTransactions(transactions);
    setBalance(balance);
    setRefresh(false);
  }

  useEffect(() => {
    fetchTransactionsAndBalance();
  }, [refresh]);

  return (
    <>
      <HomeHeader 
        balance={balance} 
        goToCreateScreen={() => navigation.navigate('Create')}
      />

      <View style={styles.container}>
        <View style={styles.pageTitles}>
          <Text style={styles.transactionsTitle}>Transações</Text>
          <Text style={styles.currentMonthLabel}>Maio</Text>
        </View>

      <View style={styles.tilesContainer}>
        <BalanceTile
          title="Entradas"
          value={balance?.income}
          type="income"
        />

        <BalanceTile
          title="Saídas"
          value={balance?.outcome}
          type="outcome"
        />
      </View>

        <TransactionsList transactions={transactions} />
      </View>
    </>
  )
}

export default Home
