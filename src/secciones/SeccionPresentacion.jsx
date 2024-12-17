import React from "react";
import Encabezado from "../elementos/encabezado/encabezado";
import Portada from "../elementos/portada/portada";

const SeccionPresentacion = () => {
  return (
    <div className="seccion-presentacion">
      <Encabezado nombres="Adri y Ro" claseTipografia="tipografia-script" />
      <Portada
        imagenes={[
          "https://invitacionesdar.store/wp-content/uploads/2024/05/326074302_1348800732328746_8919764317576067266_n.jpg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/326194608_1601467676961271_4060595714253651537_n.jpg",
        ]}
        titulo="¡Nos Casamos!"
        subtitulo="y queremos compartirlo con vos"
      />
    </div>
  );
};

export default SeccionPresentacion;
