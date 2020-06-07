import React, { FC, useCallback } from 'react';
import {View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface CategoryProps {
  title: string
}

const CategoryIcon: FC<CategoryProps> = ({ title }) => {
  const returnCategoryIcon = useCallback((title: string) => {
    const iconSize = 24;
    switch (title) {
      case 'Vestimentas':
      case 'Roupas':
        return (<FontAwesome5 name="tshirt" size={iconSize} />)

      case 'Estudos':
        return (<FontAwesome5 name="book-reader" size={iconSize} />)
      
      case 'Compras':
        return (<FontAwesome5 name="shopping-bag" size={iconSize} />)
      
      case 'Vendas':
        return (<FontAwesome5 name="handshake" size={iconSize} />)
      
      case 'Transferências':
        return (<FontAwesome5 name="exchange-alt" size={iconSize} />)

      case 'Contas':
        return (<FontAwesome5 name="scroll" size={iconSize} />)
  
      case 'Celular':
      case 'Tecnologia':
      case 'Tecnologias':
        return (<FontAwesome5 name="mobile-alt" size={iconSize} />)

      case 'Spotify':
        return <FontAwesome5 name="spotify" size={iconSize} />
  
      case 'Casa':
        return (<FontAwesome5 name="home" size={iconSize} />)
  
      case 'Food':
      case 'Comida':
      case 'Alimentação':
        return (<FontAwesome5 name="utensils" size={iconSize} />)

      case 'Recebimentos':
        return (<FontAwesome5 name="hand-holding-usd" size={iconSize} />)
  
      default:
        return (<FontAwesome5 name="dollar-sign" size={iconSize} />)
    }
  }, []);
    
  return (
    <View style={{
      backgroundColor: '#ebebeb',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: 45,
      height: 45,
    }}>
      {returnCategoryIcon(title)}
    </View>
  )
}

export default CategoryIcon;