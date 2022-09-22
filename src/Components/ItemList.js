import React from "react";
import "../index.css";
import "./Item";
import Item from "./Item";

function ItemList({ porducts }) {
  return (
    <>
      {porducts.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </>
  );
}

export default ItemList;
