import React, { FC, useCallback } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
// import { useAuth } from "../../hooks/Auth"

import styles from "./styles"

type AppProps = {
  goToCreateScreen(): void;
  accountViewFadeIn(): void;
  selectedMonth: number;
}

const HomeHeader: FC<AppProps> = ({ goToCreateScreen, accountViewFadeIn, selectedMonth }) => {
  // const { user } = useAuth();
  const currentMonth = new Date().getMonth() + 1;
  const isCurrentMonth = selectedMonth === currentMonth;
  
  // const returnUserAvatar = useCallback(() => {
  //   if(user.avatar)
  //     return (<Image source={{ uri: user.avatar }} style={styles.userAvatar} />);
    
  //   return (<MaterialIcons name="account-circle" size={50}/>);
  // }, []);

  return (
    <View style={styles.header}>
      {/* <TouchableOpacity
        style={styles.userInfoButton}
        onPress={accountViewFadeIn}
      >
        {returnUserAvatar()}
        
        <Text style={styles.userName}>Olá, {user.name.split(' ')[0]}</Text>
      </TouchableOpacity> */}
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.go}>Go</Text><Text style={styles.finances}>Finances</Text>
      </View>

      {
        isCurrentMonth && (
          <TouchableOpacity onPress={() => goToCreateScreen()} style={styles.addButton}>
            <MaterialIcons name="add-circle" size={50}></MaterialIcons>
          </TouchableOpacity>
        )
      }
    </View>
  )
}
export default HomeHeader
