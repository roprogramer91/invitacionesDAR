import React from "react";
import Boton from "../elementos/boton/boton";

const SeccionConfirmarAsistencia = ({ onAbrirFormulario }) => {
  return (
    <div className="seccion-confirmar-asistencia">
      <Boton
        texto="CONFIRMAR ASISTENCIA"
        tipo="informacion"
        onClick={onAbrirFormulario}
        icono="fas fa-calendar-check"
      />
    </div>
  );
};

export default SeccionConfirmarAsistencia;
