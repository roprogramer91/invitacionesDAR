import React from "react";
import PropTypes from "prop-types";
import "./separador.css";

const Separador = ({ icono, texto, clase }) => {
  return (
    <div className={`separador ${clase}`}>
      <div className="separador-linea"></div>
      {icono && <i className={`separador-icono ${icono}`}></i>}
      {texto && <span className="separador-texto">{texto}</span>}
      <div className="separador-linea"></div>
    </div>
  );
};

Separador.propTypes = {
  icono: PropTypes.string, // Clase del ícono (ej: "fas fa-heart")
  texto: PropTypes.string, // Texto opcional
  clase: PropTypes.string, // Clase adicional para estilos personalizados
};

export default Separador;
