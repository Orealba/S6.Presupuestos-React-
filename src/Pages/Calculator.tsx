import Cards from '../Components/Cards';
import DatosPresupuestoCard from '../Components/DatosPresupuestoCard';
import GenerarPresupuestoCard from '../Components/GenerarPresupuestoCard';
import HeaderBox from '../Components/HeaderBox';
import Navbar from '../Components/Navbar';
import PrecioTotal from '../Components/PrecioTotal';
import TotalProvider from '../Context/TotalProvider';

export const Calculator = () => {
  return (
    <>
      <TotalProvider>
        <Navbar></Navbar>
        <HeaderBox></HeaderBox>
        <Cards></Cards>
        <PrecioTotal></PrecioTotal>
        <GenerarPresupuestoCard></GenerarPresupuestoCard>
      <DatosPresupuestoCard></DatosPresupuestoCard>
      </TotalProvider>
      
    </>
  );
};
