import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import CreateTransaction from '../pages/CreateTransaction'

const AppStack = createStackNavigator()

const AppRoutes: FC = () => (
  <AppStack.Navigator headerMode='none'>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Create" component={CreateTransaction} />
  </AppStack.Navigator>
)

export default AppRoutes;