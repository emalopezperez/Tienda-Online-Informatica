import React, { useState } from "react";

function ItemCount({ onAdd }) {
  const [numero, setNumero] = useState(1);

  const aumentar = () => {
    setNumero(numero + 1);
  };
  const disminuir = () => {
    setNumero(numero - 1);

    if (numero <= 1) {
      setNumero(1);
    }
  };

  const confirmar = () => {
    onAdd(numero);
  };

  return (
    <>
      <div className="Conteiner-BtnCard lg:mt-8 mt-3 ">
        <div className="Conteiner-BtnCardAumDismi">
          <button className="Btn-Disminuir " onClick={disminuir}>
            -
          </button>
          <h3 className="Resultado-Aumentador">{numero}</h3>
          <button className="Btn-Aumentar" onClick={aumentar}>
            +
          </button>
        </div>
        <button className="bg-red-900 rounded-full  text-lg text-white lg:m-8 m-3 px-12 " onClick={confirmar}>
          Comprar
        </button>
      </div>
    </>
  );
}

export default ItemCount;
