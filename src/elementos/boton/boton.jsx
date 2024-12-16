import React, { useState } from "react";
import PropTypes from "prop-types";
import Popup from "../popup/popup";
import "./boton.css";

const Boton = ({
  texto,
  tipo,
  parametros = {},
  icono,
  clase = "",
  onClick,
  popupData = null, // Datos del popup, si el botón debe abrir uno
}) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  // Cerrar el popup
  const manejarCerrarPopup = () => setMostrarPopup(false);

  // Configuración del enlace o función
  let enlace = "#";
  let handleClick = onClick;

  if (tipo === "agenda") {
    const { fechaInicio, fechaFin, titulo, descripcion, ubicacion } = parametros;
    enlace = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      titulo
    )}&dates=${fechaInicio}/${fechaFin}&details=${encodeURIComponent(
      descripcion
    )}&location=${encodeURIComponent(ubicacion)}`;
  } else if (tipo === "maps") {
    enlace = parametros.url || "#";
  } else if (tipo === "link") {
    enlace = parametros.url || "#";
  } else if (tipo === "informacion" && popupData) {
    enlace = "#";
    handleClick = (e) => {
      e.preventDefault();
      setMostrarPopup(true);
    };
  }

  return (
    <>
      <a
        href={tipo !== "informacion" ? enlace : undefined}
        className={`boton ${clase}`}
        target={tipo === "link" || tipo === "maps" || tipo === "agenda" ? "_blank" : undefined}
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {icono && <i className={icono} style={{ marginRight: "8px" }}></i>}
        {texto}
      </a>
      {/* Popup */}
      {mostrarPopup && popupData && (
        <Popup
          titulo={popupData.titulo}
          texto={popupData.texto}
          imagen={popupData.imagen}
          onClose={manejarCerrarPopup}
          colorFondo={popupData.colorFondo}
          colorTexto={popupData.colorTexto}
        />
      )}
    </>
  );
};

Boton.propTypes = {
  texto: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(["agenda", "maps", "link", "informacion"]),
  parametros: PropTypes.object,
  icono: PropTypes.string,
  clase: PropTypes.string,
  onClick: PropTypes.func,
  popupData: PropTypes.shape({
    titulo: PropTypes.string,
    texto: PropTypes.string,
    imagen: PropTypes.string,
    colorFondo: PropTypes.string,
    colorTexto: PropTypes.string,
  }),
};

export default Boton;
