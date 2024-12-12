import React, { createContext, ReactNode, useState, useContext } from 'react';

type CardType = {
  id: number;
  title: string;
  price: number;
};

type FormData = {
  nombre: string;
  telefono: string;
  email: string;
};
type PresupuestoData = {
  formData: {
    nombre: string;
    telefono: string;
    email: string;
  };
  selectedCards: CardType[];
  total: number;
  paginas: number;
  lenguajes: number;
};

type TotalContextType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  selectedCards: CardType[];
  setSelectedCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  savedPresupuestos: PresupuestoData[];
  savePresupuesto: (presupuesto: PresupuestoData) => void;
  paginas: number;
  lenguajes: number;
  setPaginas: React.Dispatch<React.SetStateAction<number>>;
  setLenguajes: React.Dispatch<React.SetStateAction<number>>;
};

export const TotalContext = createContext<TotalContextType | null>(null);

type TotalProviderProps = {
  children: ReactNode;
};

const TotalProvider: React.FC<TotalProviderProps> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<CardType[]>([]);
  const [savedPresupuestos, setSavedPresupuestos] = useState<PresupuestoData[]>(
    [],
  );
  const [paginas, setPaginas] = useState<number>(0);
  const [lenguajes, setLenguajes] = useState<number>(0);

  const savePresupuesto = (presupuesto: PresupuestoData) => {
    setSavedPresupuestos([...savedPresupuestos, presupuesto]);
  };

  return (
    <TotalContext.Provider
      value={{
        total,
        setTotal,
        selectedCards,
        setSelectedCards,
        savedPresupuestos,
        savePresupuesto,
        paginas,
        lenguajes,
        setPaginas,
        setLenguajes,
      }}>
      {children}
    </TotalContext.Provider>
  );
};

export const useTotal = (): TotalContextType => {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error('useTotal debe ser usado dentro de un TotalProvider');
  }
  return context;
};

export default TotalProvider;
