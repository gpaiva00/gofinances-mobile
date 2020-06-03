import React, { FC } from 'react';

import { AuthProvider } from './Auth';
import { AppProvider } from './App';

const MainProvider: FC = ({ children }) => (
  <AuthProvider>
    <AppProvider>
      {children}
    </AppProvider>
  </AuthProvider>
)

export default MainProvider;
