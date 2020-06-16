import React, { FC } from 'react';

// import { AuthProvider } from './Auth';
import { AppProvider } from './App';
import { MonthProvider } from './Month';

const MainProvider: FC = ({ children }) => (
  // <AuthProvider>
  <AppProvider>
    <MonthProvider>
      {children}
    </MonthProvider>
  </AppProvider>
  // </AuthProvider>
)

export default MainProvider;
