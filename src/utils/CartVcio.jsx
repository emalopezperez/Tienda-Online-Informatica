import React from "react";
import { Link } from "react-router-dom";
const CartVcio = () => {
return (
    <section className="text-white bg-gray-300">
      <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabol sm:text-3xl text-black bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Su carrito de compras esta vacio
          </h1>

          <span className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            Ingrese a la Home para realizar sus compras!
          </span>

          <div className="flex flex-wrap justify-center mt-8 gap-4">
            <Link to={"/"}>
              <button className="bg-black p-2 rounded-lg">
                Volver a la Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartVcio;
