import React from "react";
import Boton from "../boton/boton";
import "./eventoInfo.css";

const EventoInfo = ({ icono, titulo, descripcion, botonTexto, botonTipo, botonParametros, botonIcono }) => {
  return (
    <div className="evento-info">
      <div className="evento-icono">
        <i className={icono}></i>
      </div>
      <h3 className="evento-titulo">{titulo}</h3>
      <p className="evento-descripcion">{descripcion}</p>
      {botonTexto && (
        <Boton
          texto={botonTexto}
          tipo={botonTipo}
          parametros={botonParametros}
          icono={botonIcono}
          clase="evento-boton"
        />
      )}
    </div>
  );
};

export default EventoInfo;
