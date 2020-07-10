import React, { createContext, useState, useContext, FC } from "react"

interface AppProps {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  initDatabase: boolean;
  setInitDatabase: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext({} as AppProps)

const AppProvider: FC = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [initDatabase, setInitDatabase] = useState(false);

  const providerValue = { 
    refresh, 
    setRefresh,
    initDatabase,
    setInitDatabase,
  }

  return <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
}

function useApp() {
  const context = useContext(AppContext)

  if (!context) throw new Error("useApp must be used whithin an AppProvider")

  return context
}

export { useApp, AppProvider }
