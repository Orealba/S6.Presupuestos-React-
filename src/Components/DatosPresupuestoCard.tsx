import { useContext } from 'react';
import { TotalContext } from '../Context/TotalProvider';

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
    <div className="container text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xl p-6">
      <h2 className="text-xl font-bold mb-4">Resumen del Presupuesto</h2>

      {/* Información del formulario */}
      <div className="mb-4">
        <h3 className="text-lg font-bold">Información del cliente</h3>
        <p>Nombre: {formData?.nombre}</p>
        <p>Teléfono: {formData?.telefono}</p>
        <p>Email: {formData?.email}</p>
      </div>

      {/* Títulos de los servicios seleccionados */}
      <div className="mb-4">
        <h3 className="text-lg font-bold">Servicios contratados</h3>
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
      <div>
        <h3 className="text-lg font-bold">Total</h3>
        <p className="text-gray-900 text-xl font-bold">{total}€</p>
      </div>
    </div>
  );
}

export default DatosPresupuestoCard;
