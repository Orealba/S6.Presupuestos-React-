import './styles/GenerarPresupuestoCard.css';

function GenerarPresupuestoCard() {
  return (
    <div className="container   bg-white border border-gray-200 rounded-lg shadow-xl generar-presupuestos-box-styles">
      <h4 className="text-gray-900  font-bold text-xl generar-presupuestos-box-styles-title">Solicitar presupuesto</h4>
      <form className="  items-center mx-auto flex d-flex generar-presupuestos-box-styles-form">
        <div className="  generar-presupuestos-box-styles-form-divs">
          <label
            htmlFor="nombre"
            className="block  text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="nombre"
            id="nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   w-full p-2 mr-5"
            placeholder="Nombre"
            required
          />
        </div>
        <div className=" generar-presupuestos-box-styles-form-divs">
          <label
            htmlFor="telefono"
            className="block  text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="telefono"
            id="telefono"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   w-full p-2 mr-3"
            placeholder="Teléfono"
            required
          />
        </div>
        <div className=" generar-presupuestos-box-styles-form-divs">
          <label
            htmlFor="email"
            className="block  text-sm font-medium text-gray-900 dark:text-white"></label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full "
            placeholder="Email"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-400 text-sm font-bold text-white   shadow  generar-presupuestos-box-styles-button">
          Solicitar presupuesto →
        </button>
      </form>
    </div>
  );
}

export default GenerarPresupuestoCard;
