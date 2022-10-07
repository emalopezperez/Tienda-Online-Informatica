import React from "react";
import { Link } from "react-router-dom";
const CartVcio = () => {
return (
    <section className="text-white bg-gray-300">
      <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabol sm:text-3xl text-black bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-12 italic">
            Su carrito de compras se encuentra vacio!
          </h1>

          <span className="max-w-xl m-3  mt-4 sm:leading-relaxed  text-black text-lg">
            Ingrese a la Home para realizar sus compras!
          </span>

          
          <div className=" flex justify-center bg-cyan-900 rounded-full p-1 mb-3 m-10">
            <Link to={"/"}>
              <button className="font-bold  text-white">Home</button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CartVcio;
