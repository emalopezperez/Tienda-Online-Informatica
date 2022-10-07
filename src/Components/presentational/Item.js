import React from "react";
import "../../App.css";
import "../../index.css";
import "./ItemCount";
import "./Cart";
import "../styles/item.css";
import { Link } from "react-router-dom";

function Item({ producto }) {
  const { img, nombre, id, precio, descripcion } = producto;

  return (
    <div className="bg-white  rounded-3xl">
      <div className="Info">
        <div className="bg-white">
          <img className="w-full rounded-xl" src={img} alt={img} />
        </div>
        <h1 className=" m-4  text-black font-semibold text-2xl"  key={nombre}>
          {nombre}
        </h1>
        <p className="descripcion text-black/60">
          {descripcion}
        </p>
        <div className="Price-Card">
          <span>
            <li key={precio}>$ {precio}</li>
          </span>
        </div>
        <div className=" flex justify-center bg-black rounded-full p-1 mb-3 m-6">
          <Link to={`/detalle/${id}`}>
            <button className="font-bold  text-white">Ver mas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
