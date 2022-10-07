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
    <div className="">
      <div className="Info">
        <li>
          <img src={img} alt={img} />
        </li>
        <h1 className="Title-product">
          <li key={nombre}>{nombre}</li>
        </h1>
        <p className="descripcion">{descripcion}</p>
        <div className="Price-Card">
          <span>
            <li key={precio}>$ {precio}</li>
          </span>
        </div>
        <div className="Contenedor-Btn-Comprar">
          <Link to={`/detalle/${id}`}>
            <button className="Btn-Detalles">Ver mas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
