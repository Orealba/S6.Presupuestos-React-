import React, { createContext, ReactNode, useState, useContext } from 'react';

// Tipo del contexto
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
  formData: FormData;
  selectedCards: CardType[];
  total: number;
};

type TotalContextType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  selectedCards: CardType[];
  setSelectedCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  savedPresupuestos: PresupuestoData[];
  savePresupuesto: (presupuesto: PresupuestoData) => void;
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
  const [savedPresupuestos, setSavedPresupuestos] = useState<PresupuestoData[]>(
    () => {
      const saved = localStorage.getItem('presupuestos');
      return saved ? JSON.parse(saved) : [];
    },
  );
  const savePresupuesto = (presupuesto: PresupuestoData) => {
    const newPresupuestos = [...savedPresupuestos, presupuesto];
    setSavedPresupuestos(newPresupuestos);
    localStorage.setItem('presupuestos', JSON.stringify(newPresupuestos));
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
      }}>
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
