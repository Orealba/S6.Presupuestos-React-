import { useState } from 'react';

type InputNumberProps = {
  onChange: (value: number) => void;
};

export const InputNumber: React.FC<InputNumberProps> = ({ onChange }) => {
  const [value, setValue] = useState<number>(0);

  const handleDecrement = () => {
    setValue((prev) => {
      const newValue = Math.max(0, prev - 1);
      onChange(newValue);
      return newValue;
    });
  };

  const handleIncrement = () => {
    setValue((prev) => {
      const newValue = prev + 1;
      onChange(newValue);
      return newValue;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div>
      <form className="max-w-xs mx-auto">
        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            onClick={handleDecrement}
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg
              className="w-3 h-3 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="0"
            required
          />
          <button
            type="button"
            onClick={handleIncrement}
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg
              className="w-3 h-3 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
