import '../Components/styles/Card.css';
import { ChangeEvent, useContext, useState } from 'react';
import { TotalContext } from '../Context/TotalProvider';
import { InputNumber } from './InputNumber';
type CardsProps = {
  id: number;
  title: string;
  text: string;
  price: number;
};
export const Card: React.FC<CardsProps> = ({ id, title, text, price }) => {
  const [checkboxState, setCheckboxState] = useState<boolean>(false);
  const totalContext = useContext(TotalContext);

  if (!totalContext) {
    throw new Error('Card debe estar de un TotalProvider');
  }
  const { total, setTotal } = totalContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCheckboxState(isChecked);
    if (isChecked) {
      setTotal((prevTotal) => prevTotal + price);
    } else {
      setTotal((prevtTotal) => prevtTotal - price);
    }
  };

  return (
    <div className=" mt-8 text-left bg-white border border-gray-200 rounded-xl shadow-xl p-6  card-component ">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 ">{title}</h5>
      <div className="flex d-flex">
        <div>
          <p className="mb-5 pr-5 text-gray-800 text-lg  text-left font-bold">
            {text}
          </p>
        </div>
        <div>
          <p className="pl-11 font-bold text-gray-800 text-3xl card-component-price">
            {price}€
          </p>
        </div>
        {/* checkboxes */}
        <div className=" flex items-center mb-10 pl-8 card-component-checkbox">
          <input
            id={`checkbox-${id}`}
            type="checkbox"
            checked={checkboxState}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
          />
          <label
            htmlFor={`checkbox-${id}`}
            className="ms-2 text-sm font-medium text-gray-900 ">
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
            <InputNumber />
          </div>
          <div className="flex justify-end">
            <label
              htmlFor="languages-input"
              className="block text-sm font-bold text-gray-900 my-2 mr-2">
              Número de lenguajes:
            </label>
            <InputNumber />
          </div>
        </div>
      )}
    </div>
  );
};
