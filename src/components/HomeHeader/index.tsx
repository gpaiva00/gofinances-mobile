import React, { FC } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
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
  const { signOut, user } = useAuth();
  
  function returnUserAvatar() {
    if(user.avatar)
      return (<Image source={{ uri: user.avatar }} width={50} />);
    
    return (<MaterialIcons name="account-circle" size={50}/>);
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.userInfoButton}
        onPress={() => {}}
      >
        {returnUserAvatar()}
        
        <Text style={styles.userName}>{user.name.split(' ')[0]}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => goToCreateScreen()} style={styles.addButton}>
        <MaterialIcons name="add-circle" size={50}></MaterialIcons>
      </TouchableOpacity>
    </View>
  )
}
export default HomeHeader
