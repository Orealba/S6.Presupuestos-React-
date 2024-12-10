import { useContext } from 'react';
import { TotalContext } from '../Context/TotalProvider';
import './styles/DatosPresupuestoCard.css';

function DatosPresupuestoCard({
  formData,
}: {
  formData: { nombre: string; telefono: string; email: string };
}) {
  const totalContext = useContext(TotalContext);

  if (!totalContext) {
    throw new Error(
      'DatosPresupuestoCard debe estar dentro de un TotalProvider',
    );
  }

  const { total, selectedCards } = totalContext;

  return (
    <div className="container">
      <h2 className="text-xl text-gray-900 font-bold  DatosPresupuestoCard-styles-title">
        Resumen del Presupuesto:
      </h2>
      <div className=" text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xl  DatosPresupuestoCard-styles">
        {/* Información del formulario */}
        <div className=" DatosPresupuestoCard-styles-primerDiv">
          <p className="font-bold"> {formData?.nombre}</p>
          <p>{formData?.telefono}</p>
          <p>{formData?.email}</p>
        </div>

        {/* Títulos de los servicios seleccionados */}
        <div className="mb-4">
          <h3 className="text-sm font-bold">
            Servicios contratados:
          </h3>
          {selectedCards.length > 0 ? (
            <ul>
              {selectedCards.map((card) => (
                <li
                  key={card.id}
                  className="text-gray-700">
                  {card.title} - {card.price}€
                </li>
              ))}
            </ul>
          ) : (
            <p>No se han seleccionado servicios.</p>
          )}
        </div>

        {/* Total acumulado */}
        <div className="DatosPresupuestoCard-styles-segundoDiv">
          <h3 className="text-lg font-bold ">Total</h3>
          <p className="text-gray-900 text-xl font-bold">{total}€</p>
        </div>
      </div>
    </div>
  );
}

export default DatosPresupuestoCard;
