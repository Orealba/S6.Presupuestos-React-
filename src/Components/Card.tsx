export const Card = () => {
  return (
    <div>
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Seo
        </h5>

        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <p>Programación de una web responsive completa</p>
          <h4>300€</h4>
        </div>
      </div>
    </div>
  );
};
