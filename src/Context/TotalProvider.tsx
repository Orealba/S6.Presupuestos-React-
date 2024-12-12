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
  formData: {
    nombre: string;
    telefono: string;
    email: string;
  };
  selectedCards: CardType[];
  total: number;
  paginas: number; // Nuevo
  lenguajes: number; // Nuevo
};

type TotalContextType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  selectedCards: CardType[];
  setSelectedCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  savedPresupuestos: PresupuestoData[];
  savePresupuesto: (presupuesto: PresupuestoData) => void;
  paginas: number; // Nuevo
  lenguajes: number; // Nuevo
  setPaginas: React.Dispatch<React.SetStateAction<number>>; // Nuevo
  setLenguajes: React.Dispatch<React.SetStateAction<number>>; // Nuevo
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
    [],
  );
  const [paginas, setPaginas] = useState<number>(0); // Nuevo
  const [lenguajes, setLenguajes] = useState<number>(0); // Nuevo

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
        paginas, // Nuevo
        lenguajes, // Nuevo
        setPaginas, // Nuevo
        setLenguajes, // Nuevo
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
