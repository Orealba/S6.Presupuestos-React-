import { useContext } from 'react';
import { TotalContext } from '../Context/TotalProvider';
import './styles/DatosPresupuestoCard.css';

function DatosPresupuestoCard({
  formData,
}: {
  formData: { nombre: string; telefono: string; email: string } | null;
}) {
  const totalContext = useContext(TotalContext);

  if (!totalContext) {
    throw new Error(
      'DatosPresupuestoCard debe estar dentro de un TotalProvider',
    );
  }

  const { savedPresupuestos } = totalContext;

  if (!savedPresupuestos || savedPresupuestos.length === 0) {
    return null;
  }
  return (
    <div className="container">
      <h2 className="text-xl text-gray-900 font-bold  DatosPresupuestoCard-styles-title">
        Resumen del Presupuesto:
      </h2>

      {savedPresupuestos.map(
        (presupuesto, index) =>
          presupuesto.formData &&
          presupuesto.formData.nombre && (
            <div
              key={index}
              className=" text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xl  DatosPresupuestoCard-styles">
              {/* Información del formulario */}
              <div className=" DatosPresupuestoCard-styles-primerDiv">
                <p className="font-bold">{presupuesto.formData.nombre}</p>
                <p>{presupuesto.formData.telefono}</p>
                <p>{presupuesto.formData.email}</p>
              </div>

              {/* Títulos de los servicios seleccionados */}
              <div className="mb-4">
                <h3 className="text-sm font-bold">Servicios contratados:</h3>
                {presupuesto.selectedCards &&
                presupuesto.selectedCards.length > 0 ? (
                  <ul>
                    {presupuesto.selectedCards.map((card) => (
                      <li
                        key={card.id}
                        className="text-gray-700">
                        {card.title === 'Web'
                          ? `Web (${presupuesto.paginas} páginas, ${presupuesto.lenguajes} lenguajes)`
                          : card.title}
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
                <p className="text-gray-900 text-xl font-bold">
                  {presupuesto.total}€
                </p>
              </div>
            </div>
          ),
      )}
    </div>
  );
}

export default DatosPresupuestoCard;
