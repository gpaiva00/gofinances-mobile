import React, { FC, useState, useContext, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ToastAndroid, 
  KeyboardAvoidingView, Platform, FlatList } from 'react-native';

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
  const [categories, setCategories] = useState([] as Category[]);
  const [suggestions, setSuggestions] = useState([] as Category[]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [type, setType] = useState('');
  const { refresh, setRefresh } = useContext(AppContext);

  
  async function fetchCategories() {
    const response = await api.get('categories');
    setCategories(response.data);
  }

  async function handleSave() {

    if (!title || !value || !categoryName) {
      return ToastAndroid.show('Por favor, preencha todos os campos', ToastAndroid.SHORT);
    }

   try {
    const response = await api.post('transactions', {
      title,
      value,
      category: categoryName,
      type
    });

    if (response.status === 200) {
      setRefresh(true);
      navigation.goBack()
    }
   } catch (error) {
    Alert.alert('Erro', 'Desculpe, houve um erro ao salvar. Tente mais tarde');
    console.log(error);
   }
  }

  function handleSearchCategories(value: string): void {
    const newValue = value.trim().toLowerCase();

    const filtered = categories.filter(
      (category) =>
        category.title.toLowerCase().slice(0, newValue.length) ===
        newValue
    );
    
    setSuggestions(filtered);
    setCategoryName(value);
  }


  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <>
      <CreateHeader 
        handleSave={handleSave} 
        handleGoBack={() => navigation.goBack()}
      />
      
      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          android: 'height',
          web: 'position'
        })}
        style={styles.container}
        >

        <View style={styles.content}>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Título</Text>
            <TextInput 
              autoFocus={true}
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
            <TextInput 
              style={[styles.input]}
              onChangeText={handleSearchCategories}
              value={categoryName}
              placeholder='Contas, Alimentação...'
              clearButtonMode="always"
              // onBlur={() => setShowSuggestions(false)}
              onFocus={() => setShowSuggestions(true)}
              onSubmitEditing={() => setShowSuggestions(false)}
            />

            {
              showSuggestions && (
                <FlatList
                  data={suggestions}
                  style={styles.autocompleteContainer}
                  renderItem={({ item }) => (
                    <TouchableOpacity 
                      onPress={() => {
                        setCategoryName(item.title);
                        setShowSuggestions(false);
                      }}
                      style={styles.suggestionItem}>
                        <Text style={styles.suggestionText}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                />
              )
            }
          </View>

          <View style={[styles.inputGroup]}>
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
                style={[styles.button, type === 'income' && styles.incomeButtonActive]}
              >
                <Text style={styles.buttonText}>Entrada</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setType('outcome')}
                style={[styles.button, type === 'outcome' && styles.outcomeButtonActive]}
              >
                <Text style={styles.buttonText}>Saída</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default CreateTransaction;