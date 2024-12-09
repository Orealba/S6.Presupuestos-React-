import '../Components/styles/Card.css';
import { ChangeEvent, useContext, useState, useEffect } from 'react';
import { TotalContext } from '../Context/TotalProvider';
import { InputNumber } from './InputNumber';

type CardsProps = {
  id: number;
  title: string;
  text: string;
  price: number;
};

export const Card: React.FunctionComponent<CardsProps> = ({
  id,
  title,
  text,
  price,
}) => {
  const [checkboxState, setCheckboxState] = useState<boolean>(false);
  const [pages, setPages] = useState<number>(0);
  const [languages, setLanguages] = useState<number>(0);
  const [additionalCost, setAdditionalCost] = useState<number>(0); // Estado para el costo adicional
  const totalContext = useContext(TotalContext);

  if (!totalContext) {
    throw new Error('Card debe estar dentro de un TotalProvider');
  }
  const { total, setTotal } = totalContext;

  // Calcula el costo adicional cada vez que cambian páginas o lenguajes
  useEffect(() => {
    const newAdditionalCost = (pages + languages) * 30;
    setAdditionalCost(newAdditionalCost);

    // Si el checkbox está activo, actualiza el total general
    if (checkboxState) {
      setTotal((prevTotal) => prevTotal + newAdditionalCost - additionalCost);
    }
  }, [pages, languages]);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCheckboxState(isChecked);

    if (isChecked) {
      setTotal((prevTotal) => prevTotal + price + additionalCost);
    } else {
      setTotal((prevTotal) => prevTotal - (price + additionalCost));
    }
  };

  const handlePagesChange = (value: number) => {
    setPages(value); // Actualiza páginas
  };

  const handleLanguagesChange = (value: number) => {
    setLanguages(value); // Actualiza lenguajes
  };

  return (
    <div className="mt-8 text-left bg-white border border-gray-200 rounded-xl shadow-xl p-6">
      <h5 className="mb-2 text-3xl font-bold text-gray-900">{title}</h5>
      <div className="flex d-flex">
        <p className="mb-5 pr-5 text-gray-800 text-lg text-left font-bold">
          {text}
        </p>
        <p className="pl-11 font-bold text-gray-800 text-3xl">{price}€</p>
        <div className="flex items-center mb-10 pl-8">
          <input
            id={`checkbox-${id}`}
            type="checkbox"
            checked={checkboxState}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor={`checkbox-${id}`}
            className="ms-2 text-sm font-medium text-gray-900">
            Añadir
          </label>
        </div>
      </div>
      {id === 3 && checkboxState && (
        <div className="mt-2 space-y-4">
          <div className="flex justify-end">
            <label
              htmlFor="pages-input"
              className="block text-sm font-bold text-gray-900 my-2 mr-2">
              Número de páginas:
            </label>
            <InputNumber onChange={handlePagesChange} />
          </div>
          <div className="flex justify-end">
            <label
              htmlFor="languages-input"
              className="block text-sm font-bold text-gray-900 my-2 mr-2">
              Número de lenguajes:
            </label>
            <InputNumber onChange={handleLanguagesChange} />
          </div>
        </div>
      )}
    </div>
  );
};
