import React from "react";
import AlbumFotos from "../elementos/albumFotos/albumFotos";

const SeccionAlbum = ({ titulo, imagenes }) => {
  return (
    <div className="seccion-album">
      <AlbumFotos titulo={titulo} imagenes={imagenes} />
    </div>
  );
};

export default SeccionAlbum;
