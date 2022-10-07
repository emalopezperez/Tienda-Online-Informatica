import React from "react";
import "../../index.css";
import Item from "./Item";

function ItemList({ porducts }) {
  return (
    <main className="contenedor">
      <div className="content-grid">
        {porducts.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </main>
  );
}

export default ItemList;
