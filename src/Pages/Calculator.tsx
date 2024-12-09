
import Cards from '../Components/Cards';
import DatosPresupuestoCard from '../Components/DatosPresupuestoCard';
import GenerarPresupuestoCard from '../Components/GenerarPresupuestoCard';
import HeaderBox from '../Components/HeaderBox';
import Navbar from '../Components/Navbar';
import PrecioTotal from '../Components/PrecioTotal';
import TotalProvider from '../Context/TotalProvider';

export const Calculator = () => {

  const handleSubmitPresupuesto = (data: {
    nombre: string;
    telefono: string;
    email: string;
  }) => {
    console.log('Datos del presupuesto:', data);
    
  };

  return (
    <>
      <TotalProvider>
        <Navbar />
        <HeaderBox />
        <Cards />
        <PrecioTotal />

        <GenerarPresupuestoCard onSubmitPresupuesto={handleSubmitPresupuesto} />
        <DatosPresupuestoCard />
      </TotalProvider>
    </>
  );
};
