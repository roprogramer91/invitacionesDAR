import React from "react";
import Boton from "../boton/boton";
import "./eventoInfo.css";

const EventoInfo = ({ icono, titulo, descripcion, botonTexto, botonEnlace }) => {
  return (
    <div className="evento-info">
      <div className="evento-icono">
        <i className={icono}></i>
      </div>
      <h3 className="evento-titulo">{titulo}</h3>
      <p className="evento-descripcion">{descripcion}</p>
      {botonTexto && botonEnlace && (
        <Boton texto={botonTexto} enlace={botonEnlace} />
      )}
    </div>
  );
};

export default EventoInfo;
