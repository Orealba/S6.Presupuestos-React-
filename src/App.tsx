import './App.css';
import Cards from './Components/Cards';

import HeaderBox from './Components/HeaderBox';
import Navbar from './Components/Navbar';
import PrecioTotal from './Components/precioTotal';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeaderBox></HeaderBox>
      <Cards></Cards>
      <PrecioTotal></PrecioTotal>
    </>
  );
}

export default App;
