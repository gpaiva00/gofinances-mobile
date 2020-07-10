import React, { FC, useState, useEffect, useCallback, useRef } from "react"
import { View, Text, TouchableOpacity, Animated } from "react-native"
import { StackNavigationProp } from '@react-navigation/stack'
import { useApp } from '../../hooks/App'
import { useMonth } from '../../hooks/Month';

import DatabaseInitialize from '../../database/initialize';
import TransactionService from "../../services/TransactionService"

import { Feather } from '@expo/vector-icons'
import styles from "./styles"

import HomeHeader from "../../components/HomeHeader"
import TilesList from '../../components/TilesList';
import TransactionsList from "../../components/TransactionsList"
import MonthPicker from '../../components/MonthPicker';
import AccountPanel from "../../components/accountPanel";

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


const Home: FC<AppProps> = ({ navigation }) => {
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<Balance>(() => {
    return {
      total: 0,
      income: 0,
      outcome: 0
    }
  });

  const [toggleMonthPicker, setToggleMonthPicker] = useState(false);
  const [toggleAccountPanel, setToggleAccountPanel] = useState(false);
  
  const { selectedMonthName, selectedMonthNumber } = useMonth();
  const { refresh, setRefresh, initDatabase, setInitDatabase } = useApp();

  const fetchTransactionsAndBalance = useCallback(async (month?: number) => {
    setLoading(true);
    
    if (!month) month = selectedMonthNumber;

    // const {
    //   data: { transactions, balance },
    // } = await api.get(`transactions?month=${String(month)}`)
    const result = await TransactionService.find();
    console.log(result);

    setTransactions(result);
    // setBalance(balance);
    setRefresh(false);
    setLoading(false);
  }, []);

  function fadeOutAllPanels() {
    setToggleAccountPanel(false);
    setToggleMonthPicker(false);
  }
  
  useEffect(() => {
    if (!initDatabase) {
      new DatabaseInitialize();
      setInitDatabase(true);
    }
  }, []);

  useEffect(() => {
    fetchTransactionsAndBalance();
  }, [refresh]);


  return (
    <>      
      <HomeHeader
        goToCreateScreen={() => navigation.navigate('Create')}
        accountViewFadeIn={() => {
          fadeOutAllPanels();
          setToggleAccountPanel(true)
        }}
        selectedMonth={selectedMonthNumber}
      />

      <View style={styles.container}>
        <View style={styles.pageTitles}>
          <Text style={styles.transactionsTitle}>Transações</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', }}
            onPress={() => {
              fadeOutAllPanels();
              setToggleMonthPicker(true)
            }}
          >
            <Text style={styles.currentMonthLabel}>
              {selectedMonthName}
            </Text>
            <Feather name="calendar" size={15} />
          </TouchableOpacity>
        </View>

        <TilesList balance={balance} />

        <TransactionsList loading={loading} transactions={transactions} />

      </View>

      { (toggleAccountPanel || toggleMonthPicker) && 
        <View style={styles.overlay} /> 
      }
      
      <MonthPicker 
        toggle={toggleMonthPicker}
        setToggle={setToggleMonthPicker}
        fetchTransactionsAndBalance={fetchTransactionsAndBalance} 
      />
      
    </>
  )
}

export default Home
