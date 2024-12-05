import Cards from '../Components/Cards';
import HeaderBox from '../Components/HeaderBox';
import Navbar from '../Components/Navbar';
import PrecioTotal from '../Components/PrecioTotal';
import TotalProvider from '../Context/TotalProvider';

export const Calculator = () => {
  return (
    <TotalProvider>
      <Navbar></Navbar>
      <HeaderBox></HeaderBox>
      <Cards></Cards>
      <PrecioTotal></PrecioTotal>
    </TotalProvider>
  );
};
