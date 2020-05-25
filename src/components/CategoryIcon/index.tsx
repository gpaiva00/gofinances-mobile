import React, { FC } from 'react';
import {View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface CategoryProps {
  title: string
}

const CategoryIcon: FC<CategoryProps> = ({ title }) => {
  function returnCategoryIcon(title: string) {
    switch (title) {
      case 'Compras':
        return (<FontAwesome5 name="shopping-bag" size={30} />)
      
      case 'Vendas':
        return (<FontAwesome5 name="handshake" size={30} />)
  
      case 'Celular':
      case 'Tecnologia':
        return (<FontAwesome5 name="mobile-alt" size={40} />)
  
      case 'Casa':
        return (<FontAwesome5 name="home" size={30} />)
  
      case 'Food':
      case 'Comida':
      case 'Alimentação':
          return (<FontAwesome5 name="utensils" size={30} />)
  
      default:
        return (<FontAwesome5 name="credit-card" size={30} />)
    }
  }
    
  

  return (
    <View style={{
      // alignItems: 'center',
      width: 40
    }}>
      {returnCategoryIcon(title)}
    </View>
  )
}

export default CategoryIcon;