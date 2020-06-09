import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import MainProvider from './src/hooks';

import Routes from './src/routes/';

const App: FC = () => {
  let [fontsLoaded] = useFonts({
    'Helvetica-Regular': require('./assets/fonts/HelveticaNowDisplay-Regular.otf'),
    'Helvetica-Medium': require('./assets/fonts/HelveticaNowDisplay-Medium.otf'),
    'Helvetica-Bold': require('./assets/fonts/HelveticaNowDisplay-Bold.otf'),
    'Helvetica-Light': require('./assets/fonts/HelveticaNowDisplay-Light.otf'),
    'Helvetica-ExtraBold': require('./assets/fonts/HelveticaNowDisplay-ExtraBold.otf'),
  });

  if (!fontsLoaded) return <AppLoading />
  
  return (
    <NavigationContainer>
      <MainProvider>
        <Routes />
      </MainProvider>
    </NavigationContainer>
  )
}

export default App;