import React from "react";
import PropTypes from "prop-types";
import "./Boton.css";

const Boton = ({ texto, tipo = "link", parametros = {}, icono, clase = "", onClick }) => {
  let enlace = "#"; // Enlace por defecto
  let handleClick = onClick; // Manejador de eventos personalizado

  // Configurar enlace o manejador según el tipo
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
  } else if (tipo === "informacion") {
    enlace = "#";
    handleClick = () => alert(parametros.mensaje || "Información no disponible.");
  }

  // Clases dinámicas para el botón
  const claseBase = `boton ${clase}`;

  return (
    <a
      href={tipo !== "informacion" ? enlace : undefined}
      className={claseBase}
      target={tipo === "link" || tipo === "maps" || tipo === "agenda" ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {icono && <i className={icono} style={{ marginRight: "8px" }}></i>}
      {texto}
    </a>
  );
};

// Definición de propiedades
Boton.propTypes = {
  texto: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(["agenda", "maps", "link", "informacion"]),
  parametros: PropTypes.object,
  icono: PropTypes.string,
  clase: PropTypes.string,
  onClick: PropTypes.func,
};

export default Boton;
