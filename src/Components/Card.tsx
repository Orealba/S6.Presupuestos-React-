import '../Components/styles/Card.css';

export const Card = () => {
  return (
    <div className=" mt-8 text-left bg-white border border-gray-200 rounded-xl shadow-xl sm:p-6  card-component">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 ">Seo</h5>
      <div className="row flex d-flex">
        <div className="col-md-4 ">
          <p className="mb-5 pr-5 text-gray-800 sm:text-lg  text-left">
            Programación de una web responsive <br />
            completa
          </p>
        </div>
        <div className="col-md-4">
          <p className="pl-11 font-bold text-gray-800 text-3xl card-component-price">
            300 €
          </p>
        </div>
        <div className="col-md-4 flex items-center mb-10 pl-8 card-component-checkbox">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Añadir
          </label>
        </div>
      </div>
    </div>
  );
};
