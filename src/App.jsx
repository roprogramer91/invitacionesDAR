import React, { useState } from "react";
import Encabezado from "./elementos/encabezado/encabezado";
import Portada from "./elementos/portada/portada";
import Contador from "./elementos/contador/contador";
import EventoInfo from "./elementos/eventoInfo/eventoInfo";
import Historia from "./elementos/historia/historia";
import AlbumFotos from "./elementos/albumFotos/albumFotos";
import ConfirmarAsistencia from "./elementos/confirmarAsistencia/confirmarAsistencia";
import Formulario from "./elementos/formulario/formulario";
import Separador from "./elementos/separador/separador";
import Boton from "./elementos/boton/boton";
import "./App.css";

const App = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  const manejarConfirmacion = (datos) => {
    console.log("Datos enviados:", datos);
    setMostrarFormulario(false);
    setMensajeConfirmacion("¡Tu asistencia ha sido confirmada! Gracias.");
    setTimeout(() => setMensajeConfirmacion(""), 5000);
  };

  const camposFormulario = [
    { nombre: "nombre", label: "Nombre", tipo: "text", placeholder: "Tu nombre", requerido: true },
    { nombre: "email", label: "Email", tipo: "email", placeholder: "Tu correo", requerido: true },
    { nombre: "asistentes", label: "Acompañantes", tipo: "number", placeholder: "Cantidad", requerido: false },
    { nombre: "menu", label: "Menú especial", tipo: "text", placeholder: "Celiaco, vegetariano...", requerido: false },
  ];

  return (
    <div className="App">
      {/* Encabezado */}
      <Encabezado nombres="Adri y Ro" claseTipografia="tipografia-script" />

      {/* Portada */}
      <Portada
        imagenes={[
          "https://invitacionesdar.store/wp-content/uploads/2024/05/326074302_1348800732328746_8919764317576067266_n.jpg",
          "https://invitacionesdar.store/wp-content/uploads/2024/05/326194608_1601467676961271_4060595714253651537_n.jpg",
        ]}
        titulo="¡Nos Casamos!"
        subtitulo="y queremos compartirlo con vos"
      />

      {/* Contador */}
      <div className="contador-seccion">
        <Contador fechaEvento="2024-12-22T00:00:00" />
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
            clase="boton-agendar"
          />
        </div>
      </div>

      {/* Separador */}
      <Separador icono="fas fa-heart" />

      {/* Información del Evento */}
      <div className="seccion-eventos">
        <EventoInfo
          icono="fas fa-landmark"
          titulo="Civil"
          descripcion="Registro Civil. Alberdi 500 - Escobar, BsAs. 22 de Diciembre, 14:00"
          botonTexto="CÓMO LLEGAR"
          botonTipo="maps"
          botonParametros={{ url: "https://maps.google.com" }}
        />
        <EventoInfo
          icono="fas fa-church"
          titulo="Ceremonia"
          descripcion="Natividad del Señor. Eugenia T. de Cruz 524, BsAs. 22 de Diciembre, 17:00"
          botonTexto="CÓMO LLEGAR"
          botonTipo="maps"
          botonParametros={{ url: "https://maps.google.com" }}
        />
        <EventoInfo
          icono="fas fa-glass-cheers"
          titulo="Festejo"
          descripcion="Janos Eventos. Av. Sarmiento 1131 - Matheu, BsAs. 04 de Abril, 19:00"
          botonTexto="CÓMO LLEGAR"
          botonTipo="maps"
          botonParametros={{ url: "https://maps.google.com" }}
        />
      </div>

      {/* Historia */}
      <Historia
        imagen="https://via.placeholder.com/600x400"
        titulo="Nuestra Historia"
        historia="Dicen que el tiempo lo cura todo, pero también es testigo de los amores más profundos..."
      />

      {/* Álbum de Fotos */}
      <AlbumFotos
        titulo="Momentos únicos"
        imagenes={[
          "https://via.placeholder.com/300x250/000000/FFFFFF?text=Foto+1",
          "https://via.placeholder.com/300x250/111111/FFFFFF?text=Foto+2",
          "https://via.placeholder.com/300x250/222222/FFFFFF?text=Foto+3",
          "https://via.placeholder.com/300x250/333333/FFFFFF?text=Foto+4",
          "https://via.placeholder.com/300x250/444444/FFFFFF?text=Foto+5",
          "https://via.placeholder.com/300x250/555555/FFFFFF?text=Foto+6",
          "https://via.placeholder.com/300x250/666666/FFFFFF?text=Foto+7",
          "https://via.placeholder.com/300x250/777777/FFFFFF?text=Foto+8",
        ]}
      />

      {/* Separador */}
      <Separador texto="Momentos Únicos" />

      {/* Información Adicional */}
      <div className="seccion-info">
        <EventoInfo
          icono="fas fa-hashtag"
          titulo="#AdriYRo"
          descripcion="Únete al evento compartiendo contenido con nuestro hashtag."
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
          descripcion="Ayúdanos con nuestra luna de miel. Más información aquí."
          botonTexto="MÁS INFORMACIÓN"
          botonTipo="informacion"
          botonParametros={{ mensaje: "Puedes hacernos un regalo mediante depósito bancario." }}
        />
      </div>

      {/* Confirmación de Asistencia */}
      <ConfirmarAsistencia onClick={() => setMostrarFormulario(true)} />

      {/* Formulario como popup */}
      {mostrarFormulario && (
        <Formulario
          campos={camposFormulario}
          onSubmit={manejarConfirmacion}
          onClose={() => setMostrarFormulario(false)}
          estilos={{
            contenedor: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
            formulario: { backgroundColor: "#fff" },
            boton: { backgroundColor: "#c79f5c" },
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
