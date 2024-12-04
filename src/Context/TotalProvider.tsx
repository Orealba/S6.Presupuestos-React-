import { createContext, ReactNode, useState } from 'react';

type TotalContextType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>; // Función de actualización
};

export const TotalContext = createContext<TotalContextType | null>(null);

type TotalProviderProps = {
  children: ReactNode;
};
const TotalProvider: React.FC<TotalProviderProps> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export default TotalProvider;
