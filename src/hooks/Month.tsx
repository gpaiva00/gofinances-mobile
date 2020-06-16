import React, { createContext, useState, useContext, FC } from "react"

interface MonthProps {
  months: string[];
  selectedMonthName: string;
  setSelectedMonthName: React.Dispatch<React.SetStateAction<string>>;
  selectedMonthNumber: number;
  setSelectedMonthNumber: React.Dispatch<React.SetStateAction<number>>;
}

const MonthContext = createContext({} as MonthProps)

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const MonthProvider: FC = ({ children }) => {
  const [selectedMonthNumber, setSelectedMonthNumber] = useState(() =>
    new Date().getMonth() + 1
  );
  const [selectedMonthName, setSelectedMonthName] = useState(() => 
    months[selectedMonthNumber - 1]
  );

  const providerValue = { 
    months,
    selectedMonthName,
    setSelectedMonthName,
    selectedMonthNumber, 
    setSelectedMonthNumber 
  }

  return <MonthContext.Provider value={providerValue}>{children}</MonthContext.Provider>
}

function useMonth() {
  const context = useContext(MonthContext)

  if (!context) throw new Error("useMonth must be used whithin an MonthProvider")

  return context
}

export { useMonth, MonthProvider }
