import React from "react";
import EventoInfo from "../elementos/eventoInfo/eventoInfo";

const SeccionInfo = () => {
  return (
    <div className="seccion-info">
      <EventoInfo
        icono="fab fa-instagram"
        titulo="#AdriYRo"
        descripcion="¡Únete al evento compartiendo contenido con nuestro hashtag!"
        botonTexto="VER EN INSTAGRAM"
        botonTipo="link"
        botonParametros={{ url: "https://instagram.com" }}
      />
      <EventoInfo
        icono="fas fa-tshirt"
        titulo="CodeDress"
        descripcion="Ven elegante y cómodo."
      />
      <EventoInfo
        icono="fas fa-gift"
        titulo="Regalos"
        descripcion="¿Quieres hacernos un regalo? Más información aquí."
        botonTexto="MÁS INFORMACIÓN"
        botonTipo="informacion"
        botonParametros={{
          mensaje: "Nos encantaría que nos ayudes con nuestra luna de miel. IBAN: XXXX-XXXX-XXXX.",
        }}
      />
    </div>
  );
};

export default SeccionInfo;
