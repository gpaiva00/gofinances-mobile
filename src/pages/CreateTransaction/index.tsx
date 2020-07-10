import React, { FC, useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ToastAndroid, 
  KeyboardAvoidingView, Platform, FlatList, Animated } from 'react-native';

import { RouteProp } from '@react-navigation/native'

import TransactionService from '../../services/TransactionService';
import CategoryService from '../../services/CategoryService';

import { useApp } from '../../hooks/App';

import styles from './styles';

import CreateHeader from '../../components/CreateHeader';
import { StackNavigationProp } from '@react-navigation/stack';
import { AxiosError } from 'axios';

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

type ServerError = {
  message: string;
  status: string;
}

const CreateTransaction: FC<AppProps> = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([] as Category[]);
  const [suggestions, setSuggestions] = useState([] as Category[]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const switchAnimation = useRef(new Animated.Value(0)).current;
  const [type, setType] = useState('income');
  const { refresh, setRefresh } = useApp();
  
  async function fetchCategories() {
    const categoryService = new CategoryService();
    const response = await categoryService.findAll();
    console.log('fetchCategories', response._array);
    setCategories(response._array as Category[]);
  }

  async function handleSave() {
    console.log({title, value, categoryName})

    if (!title || value === 0 || !categoryName) {
      return ToastAndroid.show('Por favor, preencha todos os campos', ToastAndroid.SHORT);
    }

   try {
    // const response = await api.post('transactions', {
    //   title,
    //   value,
    //   category: categoryName,
    //   type
    // });
    const transactionService = new TransactionService();

    const response = await transactionService.create({
      title,
      value,
      categoryName,
      type
    });

    // console.log('create', response);

    // if (response.status === 400) throw new Error(response)

    // if (response.status === 200) {
    //   setRefresh(true);
    //   navigation.goBack()
    // }
   } catch (error) {
    //  const axiosError = error as AxiosError<ServerError>
    //  const errorMessage = axiosError.response?.data.message 
    //   || 'Houve um erro. Tente mais tarde';
    console.error(error);
      
     ToastAndroid.show('Não foi possível criar sua transação', ToastAndroid.SHORT);
   }
  };

  function handleSearchCategories(value: string) {
    const newValue = value.trim().toLowerCase();

    const filtered = categories.filter(
      (category) =>
        category.title.toLowerCase().slice(0, newValue.toLocaleLowerCase().length) ===
        newValue
    );

    // const newCategoryName = value.charAt(0).toUpperCase() + value.slice(1);
    
    setSuggestions(filtered);
    setCategoryName(value);
  };

  function toggleSwitchAnimation(transactionType: string) {
    const toValue = transactionType === 'income' ? 0 : 1;
    // console.log('value', toValue);

    Animated.timing(switchAnimation, {
      toValue,
      duration: 500
    }).start();
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
          android: 'padding',
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
              onChangeText={(text) => 
                setValue(Number(text.replace(',', '.')))
              }
              keyboardType="numeric"
              placeholder='R$'
              maxLength={10}
              clearButtonMode="always"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo</Text>
            
            <View style={styles.buttonGroup}>
              <Animated.View style={[
                styles.switchSlide, 
                { left: switchAnimation.interpolate({
                  inputRange: [0,1],
                  outputRange: ['0%', '50%']
                }) 
                }]} 
              />
              
              <TouchableOpacity
                onPress={() => {
                  setType('income')
                  toggleSwitchAnimation('income')
                }}
                style={styles.button}
              >
                <Text 
                  style={[styles.buttonText, type === 'income' && 
                  styles.activeButton]}
                >
                    Entrada
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setType('outcome')
                  toggleSwitchAnimation('outcome')
                }}
                style={styles.button}
              >
                <Text 
                  style={[styles.buttonText, type === 'outcome' && 
                  styles.activeButton]}
                >
                    Saída
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default CreateTransaction;