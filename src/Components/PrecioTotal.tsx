import { useContext } from 'react';
import './styles/precioTotal.css';
import { TotalContext } from '../Context/TotalProvider';

const PrecioTotal = () => {
  const totalContext = useContext(TotalContext);

  if (!totalContext) {
    throw new Error('PrecioTotal debe estar dentro de un TotalProvider');
  }
  const { total } = totalContext;
  return (
    <div>
      <p className="text-gray-900  font-bold text-right text-2xl precioTotal-texto">
        Precio presupuesto: {total} €
      </p>
    </div>
  );
};

export default PrecioTotal;
