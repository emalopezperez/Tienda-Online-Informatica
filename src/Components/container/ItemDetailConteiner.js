import React, { useState, useEffect } from "react";
import ItemDetail from "../presentational/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../db/Firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailConteiner = () => {
  const [products, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const referencia = doc(productosCollection, id);
    const consulta = getDoc(referencia);

    consulta
      .then((res) => {
        setProduct(res.data());
      })

      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <ItemDetail products={products} />
    </>
  );
};

export default ItemDetailConteiner;
