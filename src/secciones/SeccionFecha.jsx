import React from "react";
import Contador from "../elementos/contador/contador";
import Boton from "../elementos/boton/boton";

const SeccionFecha = ({ fechaEvento }) => {
  return (
    <div className="seccion-fecha">
      <Contador fechaEvento={fechaEvento} />
      <div className="boton-agendar">
        <Boton
          texto="AGENDAR FECHA"
          tipo="agenda"
          parametros={{
            fechaInicio: "20241222T000000Z",
            fechaFin: "20241222T040000Z",
            titulo: "¡Nos Casamos!",
            descripcion: "Únete a nuestro día especial para celebrar juntos.",
            ubicacion: "Registro Civil, Av. Rivadavia 123, Ciudad.",
          }}
          icono="fas fa-calendar-check"
        />
      </div>
    </div>
  );
};

export default SeccionFecha;
