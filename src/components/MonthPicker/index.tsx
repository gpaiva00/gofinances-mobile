import React, { FC, useEffect, useRef } from "react"
import { View, Text, TouchableOpacity, Animated } from "react-native"

import { Feather } from '@expo/vector-icons'
import styles from "./styles"

type MonthPickerProps = {
  show: boolean;
  handleHidePanel(): void;
}

const MonthPicker: FC<MonthPickerProps> = ({ show, handleHidePanel }) => {
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

  const heightAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(heightAnimation, {
      toValue: 1,
      duration: 2000
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(heightAnimation, {
      toValue: 0,
      duration: 2000
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, [show]);

  if (!show) return <></>

  return (
    <Animated.View
      style={[styles.Container,
        {
          height: heightAnimation
        }
      ]}
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
            onPress={() => console.log(index)}
          >
            <Text style={styles.monthName}>{month}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  )
}

export default MonthPicker
