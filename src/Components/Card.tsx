import '../Components/styles/Card.css';

type CardsProps = {
  title: string;
  text: string;
  price: number;
};
export const Card: React.FC<CardsProps> = ({ title, text, price }) => {
  return (
    <div className=" mt-8 text-left bg-white border border-gray-200 rounded-xl shadow-xl sm:p-6  card-component ">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 ">{title}</h5>
      <div className="row flex d-flex">
        <div className="col-md-4 ">
          <p className="mb-5 pr-5 text-gray-800 sm:text-lg  text-left">
            dangerouslySetInnerHTML={{ __html: text }}
          </p>
        </div>
        <div className="col-md-4">
          <p className="pl-11 font-bold text-gray-800 text-3xl card-component-price">
            {price}€
          </p>
        </div>
        <div className="col-md-4 flex items-center mb-10 pl-8 card-component-checkbox">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 ">
            Añadir
          </label>
        </div>
      </div>
    </div>
  );
};
