import React, { createContext, ReactNode, useState, useContext } from 'react';

// Tipo del contexto
type CardType = {
  id: number;
  title: string;
  price: number;
};

type TotalContextType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  selectedCards: CardType[];
  setSelectedCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

// Creación del contexto
export const TotalContext = createContext<TotalContextType | null>(null);

type TotalProviderProps = {
  children: ReactNode;
};

// Proveedor del contexto
const TotalProvider: React.FC<TotalProviderProps> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<CardType[]>([]);

  return (
    <TotalContext.Provider
      value={{ total, setTotal, selectedCards, setSelectedCards }}>
      {children}
    </TotalContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useTotal = (): TotalContextType => {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error('useTotal debe ser usado dentro de un TotalProvider');
  }
  return context;
};

export default TotalProvider;
