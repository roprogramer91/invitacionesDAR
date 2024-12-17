import React from "react";
import EventoInfo from "../elementos/eventoInfo/eventoInfo";
import "./seccionUbicaciones.css";

const SeccionUbicaciones = () => {
  return (
    <div className="seccion-ubicaciones">
      <EventoInfo
        icono="fas fa-landmark"
        titulo="Civil"
        descripcion="Registro Civil. Alberdi 500 - Escobar, BsAs. 22 de Diciembre, 14:00"
        botonTexto="CÓMO LLEGAR"
        botonTipo="maps"
        botonParametros={{ url: "https://maps.google.com" }}
      />
      <EventoInfo
        icono="fas fa-church"
        titulo="Ceremonia"
        descripcion="Natividad del Señor. Eugenia T. de Cruz 524, BsAs. 22 de Diciembre, 17:00"
        botonTexto="CÓMO LLEGAR"
        botonTipo="maps"
        botonParametros={{ url: "https://maps.google.com" }}
      />
      <EventoInfo
        icono="fas fa-glass-cheers"
        titulo="Festejo"
        descripcion="Janos Eventos. Av. Sarmiento 1131 - Matheu, BsAs. 04 de Abril, 19:00"
        botonTexto="CÓMO LLEGAR"
        botonTipo="maps"
        botonParametros={{ url: "https://maps.google.com" }}
      />
    </div>
  );
};

export default SeccionUbicaciones;
