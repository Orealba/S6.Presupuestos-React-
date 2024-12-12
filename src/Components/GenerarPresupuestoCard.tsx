import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { TotalContext } from '../Context/TotalProvider';
import './styles/GenerarPresupuestoCard.css';

interface GenerarPresupuestoCardProps {
  onSubmitPresupuesto: (data: FormData) => void;
}

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
}

function GenerarPresupuestoCard({
  onSubmitPresupuesto,
}: GenerarPresupuestoCardProps) {
  const totalContext = useContext(TotalContext);

  const initialFormState: FormData = {
    nombre: '',
    telefono: '',
    email: '',
  };
  const [formData, setFormData] = useState<FormData>(initialFormState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (totalContext) {
      const presupuestoData = {
        formData,
        selectedCards: totalContext.selectedCards,
        total: totalContext.total,
        paginas: totalContext.paginas,
        lenguajes: totalContext.lenguajes,
      };

      totalContext.savePresupuesto(presupuestoData);
      onSubmitPresupuesto(formData);
      setFormData(initialFormState);
    }
  };
  return (
    <div className="container bg-white border border-gray-200 rounded-lg shadow-xl generar-presupuestos-box-styles">
      <h4 className="text-gray-900 font-bold text-xl generar-presupuestos-box-styles-title">
        Solicitar presupuesto
      </h4>
      <form
        onSubmit={handleSubmit}
        className="items-center mx-auto flex d-flex generar-presupuestos-box-styles-form">
        <div className="generar-presupuestos-box-styles-form-divs">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 mr-5"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="generar-presupuestos-box-styles-form-divs">
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="tel"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 mr-3"
            placeholder="Teléfono"
            required
          />
        </div>
        <div className="generar-presupuestos-box-styles-form-divs">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
            placeholder="Email"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-400 text-sm font-bold text-white shadow generar-presupuestos-box-styles-button">
          Solicitar presupuesto →
        </button>
      </form>
    </div>
  );
}

export default GenerarPresupuestoCard;
