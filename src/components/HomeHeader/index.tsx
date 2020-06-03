import React, { FC } from "react"
import { View, Text, Button, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import NumberFormat from "react-number-format"
import { useAuth } from "../../hooks/Auth"

import styles from "./styles"

type Balance = {
  income: number
  outcome: number
  total: number
}

type AppProps = {
  balance: Balance | undefined
  goToCreateScreen: Function
}

const HomeHeader: FC<AppProps> = ({ balance, goToCreateScreen }) => {
  const { signOut } = useAuth()

  return (
    <View style={styles.header}>
      <Button title="Sair" onPress={signOut}></Button>

      <View style={styles.balanceContent}>
        <Text style={styles.balanceLabel}>Balanço Total</Text>
        <Text style={styles.balanceValueContent}>
          <Text style={styles.balanceCurrency}>R$ </Text>
          <NumberFormat
            value={balance?.total}
            displayType={"text"}
            decimalSeparator=","
            thousandSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            renderText={(value) => <Text style={styles.balanceValue}> {value}</Text>}
          />
        </Text>
      </View>

      <TouchableOpacity onPress={() => goToCreateScreen()} style={styles.addButton}>
        <MaterialIcons name="add-circle" size={50}></MaterialIcons>
      </TouchableOpacity>
    </View>
  )
}
export default HomeHeader
