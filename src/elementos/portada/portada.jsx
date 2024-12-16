import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./portada.css";

const Portada = ({ imagenes, titulo, subtitulo }) => {
  return (
    <div className="portada">
      {/* Swiper para el slideshow */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 5000, // Duración de cada slide (5 segundos)
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000} // Transición suave de 2 segundos
        className="swiper-portada"
      >
        {imagenes.map((imagen, index) => (
          <SwiperSlide key={index}>
            <div
              className="portada-imagen ken-burns"
              style={{ backgroundImage: `url(${imagen})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto superpuesto */}
      <div className="texto-superpuesto">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>

      {/* Flecha animada */}
      <div className="flecha">
        <i className="fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
};

export default Portada;
