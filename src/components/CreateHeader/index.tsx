import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles';

const CreateHeader: FC = () => {

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {}}
      >
        <MaterialIcons name='chevron-left' size={30}></MaterialIcons>
      </TouchableOpacity>
      
      <Text style={styles.title}>Adicionar</Text>
      
      <TouchableOpacity
        onPress={() => {}}
      >
          <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateHeader;