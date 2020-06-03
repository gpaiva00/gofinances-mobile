import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes: FC = () => (
  <AuthStack.Navigator headerMode='none'>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
)

export default AuthRoutes;