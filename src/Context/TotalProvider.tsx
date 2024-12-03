import { createContext, ReactNode, useState } from 'react';

export const TotalContext = createContext<number | null>(null);

type TotalProviderProps = {
  children: ReactNode;
};
const TotalProvider: React.FC<TotalProviderProps> = ({ children }) => {
  const [total, setTotal] = useState([]);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export default TotalProvider;
