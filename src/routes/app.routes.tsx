import React, { FC } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

type AppStackParamList = {
  Home: undefined;
  Create: undefined;
}

import Home from '../pages/Home'
import CreateTransaction from '../pages/CreateTransaction'

const AppStack = createStackNavigator<AppStackParamList>()

const AppRoutes: FC = () => (
  <AppStack.Navigator 
    headerMode='none' 
    screenOptions={{
      cardStyle: {backgroundColor: '#fff'}
    }}>
    
    <AppStack.Screen 
      name="Home" 
      component={Home}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }} 
    />
    
    <AppStack.Screen 
      name="Create"
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }} 
      component={CreateTransaction}
    />
  </AppStack.Navigator>
)

export default AppRoutes;
