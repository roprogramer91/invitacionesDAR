import React from "react";
import "./albumFotos.css";

const AlbumFotos = ({ titulo, imagenes }) => {
  return (
    <div className="album-fotos">
      <h2 className="album-titulo">{titulo}</h2>
      <div className="album-grid">
        {imagenes.map((imagen, index) => (
          <div key={index} className="album-item">
            <img src={imagen} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumFotos;
