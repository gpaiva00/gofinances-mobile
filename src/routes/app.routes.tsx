import React, { FC } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

type AppStackParamList = {
  Home: undefined;
  Create: undefined;
}

// type HomeScreenNavigationProp = StackNavigationProp<AppStackParamList, 'Home'>

import Home from '../pages/Home'
import CreateTransaction from '../pages/CreateTransaction'

const AppStack = createStackNavigator<AppStackParamList>()

const AppRoutes: FC = () => (
  <AppStack.Navigator headerMode='none' screenOptions={
      {cardStyle: {backgroundColor: '#fff'}}}
    >
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Create" component={CreateTransaction} />
  </AppStack.Navigator>
)

export default AppRoutes;
