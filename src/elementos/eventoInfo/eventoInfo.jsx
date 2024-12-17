import React, { useState } from "react";
import PropTypes from "prop-types";
import Boton from "../boton/boton";
import Popup from "../popup/popup"; // Asegúrate de tener el componente Popup
import "./EventoInfo.css";

const EventoInfo = ({ icono, titulo, descripcion, botonTexto, botonTipo, botonParametros }) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  // Cierra el popup
  const manejarCerrarPopup = () => setMostrarPopup(false);

  return (
    <div className="evento-info">
      <div className="evento-icono">
        <i className={icono}></i>
      </div>
      <h3 className="evento-titulo">{titulo}</h3>
      <p className="evento-descripcion">{descripcion}</p>

      {/* Botón Opcional */}
      {botonTexto && (
        <Boton
          texto={botonTexto}
          tipo={botonTipo}
          parametros={botonParametros}
          onClick={() => botonTipo === "informacion" && setMostrarPopup(true)} // Abre el popup si el tipo es "informacion"
          clase="evento-boton"
        />
      )}

      {/* Popup de Información */}
      {mostrarPopup && botonParametros?.mensaje && (
        <Popup
          titulo={titulo}
          texto={botonParametros.mensaje}
          onClose={manejarCerrarPopup}
          colorFondo="#fdf8f1"
          colorTexto="#333"
        />
      )}
    </div>
  );
};

EventoInfo.propTypes = {
  icono: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  botonTexto: PropTypes.string, // Texto opcional del botón
  botonTipo: PropTypes.oneOf(["agenda", "maps", "link", "informacion"]), // Tipo del botón
  botonParametros: PropTypes.object, // Parámetros adicionales para el botón
};

export default EventoInfo;
