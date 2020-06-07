import React, { FC, useState, useEffect, useCallback, useRef } from "react"
import { View, Text, TouchableOpacity, Animated } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack'
import { useApp } from '../../hooks/App'
import { useAuth } from "../../hooks/Auth"


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
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<Balance>(() => {
    return {
      total: 0,
      income: 0,
      outcome: 0
    }
  });
  const [selectedMonth, setSelectedMonth] = useState(() => {
    return new Date().getMonth() + 1;
  });
  const monthPickerAnimation = useRef(new Animated.Value(-350)).current;
  const accountAnimation = useRef(new Animated.Value(-150)).current;
  
  const { refresh, setRefresh } = useApp();
  const { signOut } = useAuth();

  const fetchTransactionsAndBalance = useCallback(async (month?: number) => {
    setLoading(true);
    
    if (!month) month = selectedMonth;

    const {
      data: { transactions, balance },
    } = await api.get(`transactions?month=${String(month)}`)

    setTransactions(transactions);
    setBalance(balance);
    setRefresh(false);
    setLoading(false);
  }, []);

  const handleSelectMonth = useCallback(async (index: number) => {
    const monthNumber = index+1;
    await fetchTransactionsAndBalance(monthNumber);

    setSelectedMonth(monthNumber);
    monthPickerFadeOut();
  }, []);

  const monthPickerFadeIn = useCallback(() => {
    accountViewFadeOut();

    Animated.timing(monthPickerAnimation, {
      toValue: 0,
      duration: 350
    }).start();
  }, []);

  const accountViewFadeIn = useCallback(() => {
    monthPickerFadeOut();

    Animated.timing(accountAnimation, {
      toValue: 0,
      duration: 350
    }).start();
  }, []);

  const monthPickerFadeOut = useCallback(() => {
    Animated.timing(monthPickerAnimation, {
      toValue: -350,
      duration: 350
    }).start();
  }, []);

  const accountViewFadeOut = useCallback(() => {
    Animated.timing(accountAnimation, {
      toValue: -150,
      duration: 350
    }).start();
  }, []);

  useEffect(() => {
    fetchTransactionsAndBalance();
  }, [refresh]);

  return (
    <>
      <HomeHeader
        goToCreateScreen={() => navigation.navigate('Create')}
        accountViewFadeIn={accountViewFadeIn}
        selectedMonth={selectedMonth}
      />

      <View style={styles.container}>
        <View style={styles.pageTitles}>
          <Text style={styles.transactionsTitle}>Transações</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', }}
            onPress={monthPickerFadeIn}
          >
            <Text style={styles.currentMonthLabel}>
              {months[selectedMonth - 1]}
            </Text>
            <Feather name="calendar" size={15} />
          </TouchableOpacity>
        </View>

        <TilesList balance={balance} />

        <TransactionsList loading={loading} transactions={transactions} />

      </View>

      {/* Month Picker */}
      <Animated.View
        style={[styles.monthPicker,
          {
            bottom: monthPickerAnimation,
          }
        ]}
      >
        <TouchableOpacity
          onPress={monthPickerFadeOut}
          style={styles.hidePanelButton}
        >
          <Feather name="x" size={20} color="#878787" />
        </TouchableOpacity>
        <View style={styles.monthsContent}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectMonth(index)}
            >
              <View style={[styles.monthButton, selectedMonth === (index + 1) && styles.activeMonth]}>
                <Text style={[styles.monthName, selectedMonth === (index + 1) && styles.activeMonthName]}>{month}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
      
      {/* Account View */}
      <Animated.View
        style={[styles.accountView,
          {
            bottom: accountAnimation,
          }
        ]}
      >
        <View style={styles.accountViewHeader}>
          <Text style={styles.accountViewTitle}>Sua conta</Text>
          <TouchableOpacity
            onPress={accountViewFadeOut}
            style={styles.hidePanelButton}
          >
            <Feather name="x" size={20} color="#878787" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          onPress={signOut}
          style={styles.accountViewOption}
        >
          <Feather name="log-out" size={30} color="#c53030"/>
          <Text style={styles.accountViewOptionText}>Sair da minha conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  )
}

export default Home
