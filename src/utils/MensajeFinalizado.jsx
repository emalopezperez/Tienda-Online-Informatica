import { Link } from "react-router-dom";

const MensajeFinalizado = ({ informacionFinal }) => {
  return (
    <div>
      <div className=" mt-20 mb-0">
        <p className="text-black text-2xl italic">Orden de compra:</p>
      </div>
      {informacionFinal.map((producto, index) => (
        <div
          key={index}
          className="grid sm:grid-cols-3 lg:grid-cols-3 gap-1 m-10 mb-20 p-3 bg-black  "
        >
          <div className="text-white m-1 p-2">
            <div>Nombre </div>
            {producto.nombre}
          </div>
          <div className="text-white m-1 p-2">
            <div>Apellido </div> {producto.apellido}
          </div>
          <div className="text-white m-1 p-2">
            <div>Total</div> <span>$</span>
            {producto.gastoTotal}
          </div>
        </div>
      ))}
      <div className="flex justify-center flex-col text-center">
        <p className="text-red-900 text-2xl italic">
          Gracias por confiar en nosotros, lo esperamos pronto!
        </p>
        <Link to={"/"}>
          <button className="justify-center bg-cyan-900 rounded-full p-1 mb-3 m-10 font-bold px-7 text-white">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MensajeFinalizado;
