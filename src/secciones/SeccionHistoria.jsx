import React from "react";
import Historia from "../elementos/historia/historia";
import "./SeccionInfo.css";

const SeccionHistoria = () => {
  return (
    <div className="seccion-historia">
      <Historia
        imagen="https://invitacionesdar.store/wp-content/uploads/2024/05/326055577_566879291697099_4609074094459329153_n-1536x1025.jpg"
        titulo="Nuestra Historia"
        historia="Dicen que el tiempo lo cura todo, pero también es el único testigo de los amores más profundos."
      />
    </div>
  );
};

export default SeccionHistoria;
