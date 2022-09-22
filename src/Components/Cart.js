import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./MyProvider ";
import CartVcio from "./CartVcio";

const Cart = () => {
  const { cartList, vaciarCarrito, borrarItem } = useContext(context);
  const vaciar = () => vaciarCarrito();

  if (cartList.length > 0) {
    return (
      <div>
        <div className="Informacion-Cart">
          <h2 className="h2">Informacion importante</h2>
          <p className="p">
            los medios de pagos con los que trabajamos son mediante Mercado de
            Pago, Trasferencia Bancaria o Efectivo.
          </p>
        </div>

        <div className=" flex justify-end m-10 ">
          <button
            className=" m-3 px-2 btn-Limpiar bg-teal-900 "
            onClick={vaciar}
          >
            Vaciar carrito
          </button>
        </div>

        {cartList.map((elemento, index) => {
          return (
            <div
              key={index}
              className="grid sm:grid-cols-4 lg:grid-cols-4  p-1 text-black"
            >
              <div className="text-black m-1 p-2">
                <div className="font-bold py-4">Nombre </div>
                {elemento.nombre}
              </div>
              <div className="text-black m-1 p-2">
                <div className="font-bold py-4">Precio </div>
                {elemento.precio}
              </div>
              <div className="text-black m-1 p-2">
                <div className="font-bold py-4">Cantidad </div>
                {elemento.cantidad}
              </div>
              <div className="lg:flex justify-center py-2">
                <button
                  className="Btn-Eliminar  mt-12"
                  onClick={() => borrarItem(elemento.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center mt-10 py-2">
          <Link to={"/formulario"}>
            <button className="btn-finalizarCompra">Finalizar Compra</button>
          </Link>
        </div>
      </div>
    );
  }

  return <CartVcio />;
};

export default Cart;
