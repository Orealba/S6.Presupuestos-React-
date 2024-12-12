import Cards from '../Components/Cards';
import DatosPresupuestoCard from '../Components/DatosPresupuestoCard';
import GenerarPresupuestoCard from '../Components/GenerarPresupuestoCard';
import HeaderBox from '../Components/HeaderBox';
import Navbar from '../Components/Navbar';
import PrecioTotal from '../Components/PrecioTotal';
import TotalProvider from '../Context/TotalProvider';
import { useState } from 'react';

export const Calculator = () => {
  const [formData, setFormData] = useState<{
    nombre: string;
    telefono: string;
    email: string;
  } | null>(null);

  const handleSubmitPresupuesto = (data: {
    nombre: string;
    telefono: string;
    email: string;
  }) => {
    setFormData(data);
  };

  return (
    <>
      <TotalProvider>
        <Navbar />
        <HeaderBox />
        <Cards />
        <PrecioTotal />

        <GenerarPresupuestoCard onSubmitPresupuesto={handleSubmitPresupuesto} />
        {formData && <DatosPresupuestoCard formData={formData} />}
      </TotalProvider>
    </>
  );
};
