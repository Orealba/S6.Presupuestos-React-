import { useNavigate } from 'react-router-dom';
import background from '../assets/Background.jpg';

const Bienvenida = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/presupuestos');
  };

  return (
    <div
      className="flex items-center justify-center  rounded-lg shadow bg-cover "
      style={{
        backgroundImage: `url(${background})`,
      }}>
      <div className="bg-white/80 p-8 mt-8 rounded-lg shadow-lg text-center">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">Bienvenidos</h1>
        <h2 className="text-gray-700 mb-8 mt-8 font-bold text-2xl">
          Aquí podrás hacer los cálculos para el presupuesto de un sitio web de
          tu preferencia.
        </h2>
        <button
          onClick={handleNavigate}
          className="px-6 py-3 mb-8 bg-red-400  text-gray-800 font-bold text-lg rounded-lg shadow-md ">
          Ir a presupuestos
        </button>
      </div>
    </div>
  );
};

export default Bienvenida;
