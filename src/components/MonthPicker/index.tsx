import React, { FC, useRef, useCallback, useEffect } from "react"
import { View, Text, TouchableOpacity, Animated } from "react-native"

import { useMonth } from '../../hooks/Month';

import { Feather } from '@expo/vector-icons'
import styles from "./styles"

type MonthPickerProps = {
  toggle: boolean;
  setToggle(arg: boolean): void;
  fetchTransactionsAndBalance(monthNumber?: number): void;
}

const MonthPicker: FC<MonthPickerProps> = ({ 
  toggle, setToggle, fetchTransactionsAndBalance 
}) => {
  const monthPickerAnimation = useRef(new Animated.Value(-350)).current;
  const { selectedMonthNumber, setSelectedMonthNumber, setSelectedMonthName, months } = useMonth();

  const handleSelectMonth = useCallback(async (monthNumber: number) => {
    await fetchTransactionsAndBalance(monthNumber);
    
    setSelectedMonthNumber(monthNumber);
    setSelectedMonthName(months[monthNumber - 1]);
    fadeOut();
  }, []);
  
  const fadeIn = useCallback(() => {
    // accountViewFadeOut();

    Animated.timing(monthPickerAnimation, {
      toValue: 0,
      duration: 350
    }).start();
  }, []);

  const fadeOut = useCallback(() => {
    Animated.timing(monthPickerAnimation, {
      toValue: -350,
      duration: 350
    }).start();

    setToggle(false);
  }, []);

  useEffect(() => {
    if(toggle) fadeIn();
    else fadeOut();

  }, [toggle]);

  return (
    <Animated.View
        style={[styles.monthPicker,
          {
            bottom: monthPickerAnimation,
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
              onPress={() => handleSelectMonth(index+1)}
            >
              <View 
                style={[
                  styles.monthButton, selectedMonthNumber === (index + 1) &&
                  styles.activeMonth
                ]}
              >
                <Text style={[
                    styles.monthName, selectedMonthNumber === (index + 1) &&
                    styles.activeMonthName
                  ]}
                >
                    {month}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
  );
}

export default MonthPicker
