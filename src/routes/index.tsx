import React, { FC } from 'react';
import { AppLoading } from 'expo'

// import { useAuth } from '../hooks/Auth'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes: FC = () => {
  // const { signed, loading } = useAuth();

  // if (loading) return <AppLoading />

  return <AppRoutes />
}

export default Routes;