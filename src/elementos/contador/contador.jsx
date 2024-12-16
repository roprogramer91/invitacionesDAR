import React, { useState, useEffect } from "react";
import "./contador.css"; // Archivo de estilos

// Función para convertir la fecha en letras
const formatearFechaEnLetras = (fecha) => {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];

  const fechaObj = new Date(fecha);
  const dia = fechaObj.getDate();
  const mes = meses[fechaObj.getMonth()];
  const anio = fechaObj.getFullYear();

  return `${dia} de ${mes} de ${anio}`;
};

const Contador = ({ fechaEvento }) => {
  // Función para calcular el tiempo restante
  const calcularTiempoRestante = () => {
    const fechaObjetivo = new Date(fechaEvento).getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
  };

  // Estado para el tiempo restante
  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

  // Actualiza el contador cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempoRestante());
    }, 1000);

    return () => clearInterval(intervalo); // Limpia el intervalo
  }, [fechaEvento]);

  return (
    <div className="contador">
      <h3 className="contador-titulo">AGENDA LA FECHA</h3>
      <h2 className="contador-fecha">{formatearFechaEnLetras(fechaEvento)}</h2>
      <div className="contador-numeros">
        <div className="contador-item">
          <span>{tiempoRestante.dias}</span>
          <p>DÍAS</p>
        </div>
        <div className="contador-item">
          <span>{tiempoRestante.horas}</span>
          <p>HORAS</p>
        </div>
        <div className="contador-item">
          <span>{tiempoRestante.minutos}</span>
          <p>MIN</p>
        </div>
        <div className="contador-item">
          <span>{tiempoRestante.segundos}</span>
          <p>SEG</p>
        </div>
      </div>
    </div>
  );
};

export default Contador;
