import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Formulario.css";

const Formulario = ({ campos, onSubmit, onClose, estilos }) => {
  const [formData, setFormData] = useState(
    campos.reduce((acc, campo) => ({ ...acc, [campo.nombre]: "" }), {})
  );

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envía los datos al backend o función definida
    onClose(); // Cierra el formulario después del envío
  };

  return (
    <div className="formulario-overlay">
      <div className="formulario-popup" style={estilos.formulario}>
        <button className="formulario-cerrar" onClick={onClose}>
          ×
        </button>
        <form onSubmit={manejarEnvio}>
          {campos.map((campo) => (
            <div key={campo.nombre} className="formulario-campo" style={estilos.campo}>
              <label htmlFor={campo.nombre} style={estilos.label}>
                {campo.label}
              </label>
              <input
                type={campo.tipo}
                id={campo.nombre}
                name={campo.nombre}
                value={formData[campo.nombre]}
                onChange={manejarCambio}
                placeholder={campo.placeholder}
                required={campo.requerido}
                style={estilos.input}
              />
            </div>
          ))}
          <button type="submit" className="formulario-boton" style={estilos.boton}>
            Confirmar
          </button>
          <button type="button" className="formulario-boton-cancelar" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  campos: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      tipo: PropTypes.string, // Ej: text, number, email
      placeholder: PropTypes.string,
      requerido: PropTypes.bool,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  estilos: PropTypes.shape({
    formulario: PropTypes.object,
    campo: PropTypes.object,
    label: PropTypes.object,
    input: PropTypes.object,
    boton: PropTypes.object,
  }),
};

export default Formulario;
