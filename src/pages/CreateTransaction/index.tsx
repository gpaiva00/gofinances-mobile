import React, { FC, useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
import { RouteProp } from '@react-navigation/native'
import api from '../../services/api';

import { AppContext } from '../../contexts/AppContext';

import styles from './styles';

import CreateHeader from '../../components/CreateHeader';
import { StackNavigationProp } from '@react-navigation/stack';

type Category = {
  title: string;
  id: string;
}

type RootStackParamList = {
  Profile: { categories: [] };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type AppProps = {
  route: ProfileScreenRouteProp;
  navigation: StackNavigationProp<any>
}

const CreateTransaction: FC<AppProps> = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const [type, setType] = useState('');
  const { refresh, setRefresh } = useContext(AppContext);

  async function handleSave() {
    const response = await api.post('transactions', {
      title,
      value,
      category: categoryName,
      type
    });

    if (response.status === 200) {
      setRefresh(true);
      navigation.goBack()
    };
  }

  return (
    <>
      <CreateHeader 
        handleSave={handleSave} 
        handleGoBack={() => navigation.goBack()}
      />
      
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
              onSelect={(value: Category) => setCategoryName(value.title)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Valor</Text>
            <TextInput 
              style={[styles.input]}
              onChangeText={(text) => setValue(Number(text)) }
              keyboardType="numeric"
              // value={String(value)}
              placeholder='R$'
              maxLength={10}
              clearButtonMode="always"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo</Text>
            
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                onPress={() => setType('income')}
                style={[styles.button, styles.incomeButton]}
              >
                <Text style={styles.buttonText}>Entrada</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setType('outcome')}
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