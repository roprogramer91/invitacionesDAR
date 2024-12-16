import React from "react";
import PropTypes from "prop-types";
import "./Popup.css";

const Popup = ({ titulo, texto, imagen, onClose, colorFondo = "#fff", colorTexto = "#000" }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-contenido" style={{ backgroundColor: colorFondo, color: colorTexto }}>
        <button className="popup-cerrar" onClick={onClose}>
          ×
        </button>
        {imagen && <img src={imagen} alt={titulo} className="popup-imagen" />}
        {titulo && <h2 className="popup-titulo">{titulo}</h2>}
        {texto && <p className="popup-texto">{texto}</p>}
      </div>
    </div>
  );
};

Popup.propTypes = {
  titulo: PropTypes.string,
  texto: PropTypes.string,
  imagen: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  colorFondo: PropTypes.string,
  colorTexto: PropTypes.string,
};

export default Popup;
