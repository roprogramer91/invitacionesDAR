import React, { useState } from "react";
import SeccionPresentacion from "./secciones/SeccionPresentacion";
import SeccionFecha from "./secciones/SeccionFecha";
import SeccionUbicaciones from "./secciones/SeccionUbicaciones";
import SeccionHistoria from "./secciones/SeccionHistoria";
import SeccionAlbum from "./secciones/SeccionAlbum";
import SeccionInfo from "./secciones/SeccionInfo";
import ConfirmarAsistencia from "./elementos/confirmarAsistencia/confirmarAsistencia";
import Formulario from "./elementos/formulario/formulario";
import Separador from "./elementos/separador/separador";
import "./App.css";

const App = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  // Manejar el envío de datos del formulario
  const manejarConfirmacion = (datos) => {
    console.log("Datos enviados:", datos);
    setMostrarFormulario(false); // Cierra el formulario
    setMensajeConfirmacion("¡Tu asistencia ha sido confirmada! Gracias.");

    // Borra el mensaje después de 5 segundos
    setTimeout(() => setMensajeConfirmacion(""), 5000);
  };

  return (
    <div className="App">
      {/* Sección Presentación (Encabezado + Portada) */}
      <SeccionPresentacion />

      {/* Sección Fecha */}
      <SeccionFecha fechaEvento="2024-12-22T00:00:00" />

      {/* Separador */}
      <Separador icono="fas fa-heart" />

      {/* Sección Ubicaciones */}
      <SeccionUbicaciones />

      {/* Historia */}
      <SeccionHistoria />

      {/* Álbum de Fotos */}
      <SeccionAlbum
        titulo="Momentos únicos"
        imagenes={[
          "https://invitacionesdar.store/wp-content/uploads/2024/05/bd1802af-00fa-4c62-9bbd-f994472638f5.jpg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/IMG_3096-scaled.jpg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/IMG_3169.jpg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/IMG_4199.jpg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/FaceApp_1611404288006-01-e1717177703697.jpeg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/IMG_0468-e1717177630462.jpg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/IMG_1940.jpg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/IMG-20210101-WA0025-01.jpeg",
        ]}
      />

      {/* Separador */}
      <Separador texto="Momentos Únicos" />

      {/* Sección Info */}
      <SeccionInfo />

      {/* Sección Confirmar Asistencia */}
      <div className="seccion-confirmar-asistencia">
        <ConfirmarAsistencia onClick={() => setMostrarFormulario(true)} />
      </div>

      {/* Formulario como popup */}
      {mostrarFormulario && (
        <Formulario
          campos={[
            { nombre: "nombre", label: "Nombre", tipo: "text", requerido: true },
            { nombre: "email", label: "Email", tipo: "email", requerido: true },
            { nombre: "asistentes", label: "Acompañantes", tipo: "number", requerido: false },
            { nombre: "menu", label: "Menú especial", tipo: "text", requerido: false },
          ]}
          onSubmit={manejarConfirmacion}
          onClose={() => setMostrarFormulario(false)} // Cierra el formulario
          estilos={{
            contenedor: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
            formulario: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px" },
            boton: { backgroundColor: "#c79f5c", color: "#fff" },
          }}
        />
      )}

      {/* Mensaje de confirmación */}
      {mensajeConfirmacion && (
        <div className="mensaje-confirmacion">{mensajeConfirmacion}</div>
      )}
    </div>
  );
};

export default App;
