import React, { createContext, useState, useContext, FC } from 'react'

interface PageOptions {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext({} as PageOptions);

const AppProvider: FC = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  
  const providerValue = { refresh, setRefresh };

  return (
    <AppContext.Provider value={providerValue}>
      { children }
    </AppContext.Provider>
  )
}

function useApp() {
  const context = useContext(AppContext);

  if (!context) throw new Error('useAuth must be used whithin an AuthProvider');

  return context;
}



export { useApp, AppProvider };