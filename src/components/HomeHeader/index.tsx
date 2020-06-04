import React, { FC } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useAuth } from "../../hooks/Auth"

import styles from "./styles"

type AppProps = {
  goToCreateScreen(): void;
  accountViewFadeIn(): void;
  selectedMonth: number;
}

const HomeHeader: FC<AppProps> = ({ goToCreateScreen, accountViewFadeIn, selectedMonth }) => {
  const { user } = useAuth();
  const currentMonth = new Date().getMonth() + 1;
  const isCurrentMonth = selectedMonth === currentMonth;

  console.log('isCurrentMonth', currentMonth);
  console.log('selectedMonth', selectedMonth);
  
  function returnUserAvatar() {
    if(user.avatar)
      return (<Image source={{ uri: user.avatar }} width={50} />);
    
    return (<MaterialIcons name="account-circle" size={50}/>);
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.userInfoButton}
        onPress={accountViewFadeIn}
      >
        {returnUserAvatar()}
        
        <Text style={styles.userName}>{user.name.split(' ')[0]}</Text>
      </TouchableOpacity>

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
