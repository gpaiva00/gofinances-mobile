import React, { createContext, useCallback, useState, useContext, useEffect, FC } from 'react';
import asyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface SignInCredentialsProps {
  email: string;
}

interface AuthContextProps {
  user: User;
  signUp(credentials: User): Promise<void>;
  signIn(credentials: SignInCredentialsProps): Promise<void>;
  signOut(): void;
  signed: boolean;
  loading: boolean;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

interface SignInData {
  user: User;
  token: string;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: FC = ({ children }) => {
  const [signInData, setSignInData] = useState<SignInData>({} as SignInData);
  const [loading, setLoading] = useState(true);

  const signUp = useCallback(async ({ email, name, avatar }) => {
    try {
      await api.post('users', { email, name, avatar });

      await signIn({ email });
    } catch(error) {
      console.log('error during signUp', error);
    }


  }, []);

  const signIn = useCallback(async ({ email }) => {
    const response = await api.post('sessions', {
      email,
    });

    const { user, token } = response.data;
    
    api.defaults.headers.authorization = `Bearer ${token}`;
    
    setSignInData({ user, token });

    await asyncStorage.setItem('@GoFinances:user', JSON.stringify(user));
    await asyncStorage.setItem('@GoFinances:token', token);
  }, []);

  const signOut = useCallback(() => {
    asyncStorage.clear().then(() => setSignInData({} as SignInData));
  }, []);

  useEffect(() => {
    async function loadStoragedData() {
      const [userItem, tokenItem] = await asyncStorage
        .multiGet(['@GoFinances:user', '@GoFinances:token']);

      const [,user] = userItem;
      const [,token] = tokenItem;

      api.defaults.headers.authorization = `Bearer ${token}`;

      if (token && user) {
        setSignInData({ token, user: JSON.parse(user) });
      };

      setLoading(false);
    }

    loadStoragedData();
  }, [])

  const providerValue = {
    user: signInData.user,
    signUp,
    signIn,
    signOut,
    signed: !!signInData.user,
    loading,
  };

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
