import { useNavigate } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate('/');
  };

  return (
    <div className="navbar-name flex justify-between items-center w-full px-4   py-2 container">
      <h1 className="app-namePage text-gray-900 text-sm font-bold">
        Frontender.itacademy
      </h1>
      <button
        onClick={handleHomeNavigation}
        className="bg-red-400 px-4 font-bold text-gray-800  py-2 rounded-lg  shadow mt-3 mr-5">
        Home
      </button>
    </div>
  );
};

export default Navbar;
