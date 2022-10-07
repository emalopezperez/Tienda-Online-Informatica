import React, { useState, useEffect } from "react";
import ItemList from "../presentational/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../db/Firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

function ItemConteiner() {
  const { category } = useParams();
  const [porducts, setProducts] = useState([]);

  useEffect(() => {
    if (!category) {
      const productosCollection = collection(db, "productos");
      const consulta = getDocs(productosCollection);

      consulta
        .then((snapshot) => {
          const productos = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setProducts(productos);
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      const productosCollection = collection(db, "productos");
      const filtro = query(
        productosCollection,
        where("category", "==", category)
      );
      const consulta = getDocs(filtro);

      consulta
        .then((snapshot) => {
          const productos = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          setProducts(productos);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, [category]);

  if (porducts.length === 0) {
    return <h1 className="h1">Cargando...</h1>;
  } else {
    return (
      <>
        <ItemList porducts={porducts} />
      </>
    );
  }
}

export default ItemConteiner;
