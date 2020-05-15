import React, { FC, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
import { RouteProp } from '@react-navigation/native'

import styles from './styles';

import CreateHeader from '../../components/CreateHeader';

type RootStackParamList = {
  Profile: { categories: [] };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type AppProps = {
  route: ProfileScreenRouteProp;
}

const CreateTransaction: FC<AppProps> = ({ route }) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  return (
    <>
      <CreateHeader />
      
      <View style={styles.container}>

        <View style={styles.content}>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Título</Text>
            <TextInput 
              style={[styles.input]}
              onChangeText={(text) => setTitle(text) }
              value={title}
              placeholder='Salário, Padaria, Mercado...'
              // maxLength={30}
              clearButtonMode="always"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Categoria</Text>
            <Autocomplete 
              data={route.params.categories}
              textInputStyle={[styles.input]}
              displayKey='title'
              placeholder='Contas, Alimentação'
              onSelect={console.log}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Valor</Text>
            <TextInput 
              style={[styles.input]}
              onChangeText={(text) => setValue(text) }
              keyboardType="numeric"
              value={value}
              placeholder='R$'
              maxLength={10}
              clearButtonMode="always"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo</Text>
            
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                onPress={() => {}}
                style={[styles.button, styles.incomeButton]}
              >
                <Text style={styles.buttonText}>Entrada</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                style={[styles.button, styles.outcomeButton]}
              >
                <Text style={styles.buttonText}>Saída</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default CreateTransaction;