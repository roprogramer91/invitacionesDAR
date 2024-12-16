import React from "react";
import "./encabezado.css";

const Encabezado = ({ nombres, claseTipografia }) => {
  return (
    <div className="encabezado sticky-header">
      <div className="contenedor-encabezado">
        <h1 className={`titulo-encabezado ${claseTipografia}`}>{nombres}</h1>
      </div>
    </div>
  );
};

export default Encabezado;
