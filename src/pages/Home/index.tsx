import React, { FC, useState, useEffect, useContext, useRef } from "react"
import { View, Text, TouchableOpacity, Animated } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack'
import { useApp } from '../../hooks/App'

import api from "../../services/api"

import { Feather } from '@expo/vector-icons'
import styles from "./styles"

import HomeHeader from "../../components/HomeHeader"
import TilesList from '../../components/TilesList';
import TransactionsList from "../../components/TransactionsList"

// import MonthPicker from '../../components/MonthPicker';

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
  const bottomAnimation = useRef(new Animated.Value(0)).current;
  const { refresh, setRefresh } = useApp();

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
    Animated.timing(bottomAnimation, {
      toValue: 0,
      duration: 350
    }).start();
  };

  function fadeOut() {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(bottomAnimation, {
      toValue: -350,
      duration: 350
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

        <TilesList balance={balance} />

        <TransactionsList transactions={transactions} />

      </View>

      <Animated.View
        style={[styles.monthPicker,
          {
            bottom: bottomAnimation,
          }
        ]}
      >
        <TouchableOpacity
          onPress={fadeOut}
          style={styles.hidePanelButton}
        >
          <Feather name="x" size={20} color="#878787" />
        </TouchableOpacity>
        <View style={styles.monthsContent}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectMonth(month, index)}
            >
              <View style={[styles.monthButton, currentMonth === month && styles.activeMonth]}>
                <Text style={[styles.monthName, currentMonth === month && styles.activeMonthName]}>{month}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </>
  )
}

export default Home
