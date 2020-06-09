import React, { FC, useRef, useCallback, useEffect } from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import { useAuth } from "../../hooks/Auth"

import { Feather } from '@expo/vector-icons'
import styles from './styles';

type AccountPanelProps = {
  toggle: boolean;
  setToggle(arg: boolean): void;
}

const AccountPanel: FC<AccountPanelProps> = ({ toggle, setToggle }) => {
  const accountAnimation = useRef(new Animated.Value(-150)).current;
  
  const { signOut } = useAuth();

  const fadeIn = useCallback(() => {
    Animated.timing(accountAnimation, {
      toValue: 0,
      duration: 350
    }).start();
  }, []);

  const fadeOut = useCallback(() => {
    Animated.timing(accountAnimation, {
      toValue: -150,
      duration: 350
    }).start();

    setToggle(false);
  }, []);

  useEffect(() => {
    if (toggle) fadeIn();
    else fadeOut();
  }, [toggle]);

  return (
    <>
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
            onPress={fadeOut}
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
  );
}

export default AccountPanel;