import React from "react";
import PropTypes from "prop-types";
import "./boton.css";

const Boton = ({ texto, tipo, parametros = {}, icono, clase = "", onClick }) => {
  let enlace = "#"; // Enlace predeterminado para botones con `tipo` de enlace

  // Configuración del enlace según el tipo
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
  }

  // Renderiza como un enlace si el tipo es de enlace, de lo contrario como un botón
  return tipo === "agenda" || tipo === "maps" || tipo === "link" ? (
    <a
      href={enlace}
      className={`boton ${clase}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icono && <i className={icono} style={{ marginRight: "8px" }}></i>}
      {texto}
    </a>
  ) : (
    <button className={`boton ${clase}`} onClick={onClick}>
      {icono && <i className={icono} style={{ marginRight: "8px" }}></i>}
      {texto}
    </button>
  );
};

Boton.propTypes = {
  texto: PropTypes.string.isRequired, // Texto del botón
  tipo: PropTypes.oneOf(["agenda", "maps", "link", "informacion"]), // Tipo del botón
  parametros: PropTypes.object, // Parámetros adicionales para enlaces
  icono: PropTypes.string, // Clase del ícono (e.g., FontAwesome)
  clase: PropTypes.string, // Clases adicionales para estilos
  onClick: PropTypes.func, // Función personalizada para `informacion`
};

export default Boton;
