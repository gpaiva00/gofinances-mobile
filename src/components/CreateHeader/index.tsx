import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles';

type AppProps = {
  handleSave: Function;
  handleGoBack: Function;
}

const CreateHeader: FC<AppProps> = ({ handleSave, handleGoBack }) => {

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => handleGoBack()}
      >
        <MaterialIcons name='chevron-left' size={30}></MaterialIcons>
      </TouchableOpacity>
      
      <Text style={styles.title}>Adicionar</Text>
      
      <TouchableOpacity
        onPress={() => handleSave()}
      >
          <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateHeader;