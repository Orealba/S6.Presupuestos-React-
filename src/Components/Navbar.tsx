import { useNavigate } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate('/');
  };

  return (
    <div className="navbar-name flex justify-between items-center w-full px-4   py-2">
      <h1 className="app-namePage text-gray-900 text-sm font-bold">
        Frontender.itacademy
      </h1>
      <button
        onClick={handleHomeNavigation}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-600 ml-auto">
        Ir a Home
      </button>
    </div>
  );
};

export default Navbar;
