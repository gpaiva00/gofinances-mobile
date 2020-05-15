import React, { createContext, useState } from 'react'

type PageOptions = {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<PageOptions>({ 
  refresh: false,
  setRefresh: () => {}
 });

function AppProvider(props: { children: React.ReactNode; }) {
  const [refresh, setRefresh] = useState(false);

  const providerValue = { refresh, setRefresh };

  return (
    <AppContext.Provider value={providerValue}>
      { props.children }
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };