import React from "react";
import "./boton.css";

const Boton = ({ texto, enlace, onClick, estilo }) => {
  // Si hay un enlace, renderiza un botón como <a>; de lo contrario, como <button>
  return enlace ? (
    <a
      href={enlace}
      target="_blank"
      rel="noopener noreferrer"
      className={`boton ${estilo}`}
    >
      {texto}
    </a>
  ) : (
    <button className={`boton ${estilo}`} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
