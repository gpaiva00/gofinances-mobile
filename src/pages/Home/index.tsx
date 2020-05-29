import React, { FC, useState, useEffect, useContext, useRef } from "react"
import { View, Text, TouchableOpacity, Animated } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContext } from '../../contexts/AppContext'

import api from "../../services/api"

import { Feather } from '@expo/vector-icons'
import styles from "./styles"

import HomeHeader from "../../components/HomeHeader"
import TransactionsList from "../../components/TransactionsList"
import BalanceTile from '../../components/BalanceTile';
import MonthPicker from '../../components/MonthPicker';

type Transaction = {
  id: string;
  title: string;
  value: number;
  type: string;
  category: Category;
  created_at: Date;
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

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
]

const Home: FC<AppProps> = ({ navigation }) => {
  const [transactions, setTransactions] = useState<[Transaction]>();
  const [balance, setBalance] = useState<Balance>(() => {
    return {
      total: 0,
      income: 0,
      outcome: 0
    }
  });
  const [currentMonth, setCurrentMonth] = useState(() => {
    const month = new Date().getMonth();
    return months[month];
  });
  const heightAnimation = useRef(new Animated.Value(0)).current;
  const { refresh, setRefresh } = useContext(AppContext);

  async function fetchTransactionsAndBalance(month?: number) {
    if (!month) month = months.findIndex(item => item === currentMonth) + 1;
    const {
      data: { transactions, balance },
    } = await api.get(`transactions?month=${String(month)}`)

    setTransactions(transactions);
    setBalance(balance);
    setRefresh(false);
  }

  async function handleSelectMonth(month: string, index: number) {
    const calcIndex = index+1;
    await fetchTransactionsAndBalance(calcIndex);

    setCurrentMonth(month);
    fadeOut();
  }

  function fadeIn() {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(heightAnimation, {
      toValue: 0,
      duration: 300
    }).start();
  };

  function fadeOut() {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(heightAnimation, {
      toValue: -300,
      duration: 300
    }).start();
  };

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
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', }}
            onPress={fadeIn}
          >
            <Text style={styles.currentMonthLabel}>{currentMonth}</Text>
            <Feather name="chevron-down" size={15} />
          </TouchableOpacity>
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

      <Animated.View
        style={
          {
            position: 'absolute',
            width: '100%',
            height: 300,
            left: 0,
            bottom: heightAnimation,
            flexDirection: 'column',
            backgroundColor: '#fff',
          }
        }
      >
        <TouchableOpacity
          onPress={fadeOut}
        >
          <Feather style={styles.chevDown} name="chevron-down" size={20} />
        </TouchableOpacity>
        <View style={styles.monthsContent}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectMonth(month, index)}
            >
              <Text style={styles.monthName}>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </>
  )
}

export default Home
