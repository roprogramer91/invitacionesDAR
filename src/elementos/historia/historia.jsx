import React from "react";
import "./historia.css"; // Archivo de estilos

const Historia = ({ imagen, titulo, historia }) => {
  return (
    <div className="historia">
      <div className="historia-imagen">
        <img src={imagen} alt="Nuestra Historia" />
      </div>
      <div className="historia-texto">
        <h2>{titulo}</h2>
        <p>{historia}</p>
      </div>
    </div>
  );
};

export default Historia;
