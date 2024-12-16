import React from "react";
import Boton from "../boton/boton";
import "./ConfirmarAsistencia.css";

const ConfirmarAsistencia = ({ onClick }) => {
  return (
    <div className="confirmar-asistencia">
      <div className="asistencia-icono">
        <i className="fas fa-check-circle"></i>
      </div>
      <h2 className="asistencia-titulo">Confirmación de asistencia</h2>
      <p className="asistencia-subtitulo">¡Esperamos tu confirmación!</p>
      <div className="asistencia-linea">
        <span>♥</span>
      </div>
      <Boton
        texto="CONFIRMAR ASISTENCIA"
        tipo="informacion"
        onClick={onClick}
        clase="boton-confirmar"
      />
    </div>
  );
};

export default ConfirmarAsistencia;
