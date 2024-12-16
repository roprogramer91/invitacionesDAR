import React from "react";
import Encabezado from "./elementos/encabezado/encabezado";
import Portada from "./elementos/portada/portada";
import Contador from "./elementos/contador/contador";
import EventoInfo from "./elementos/eventoInfo/eventoInfo";
import Historia from "./elementos/historia/historia";
import AlbumFotos from "./elementos/albumFotos/albumFotos";
import ConfirmarAsistencia from "./elementos/confirmarAsistencia/confirmarAsistencia";
import Boton from "./elementos/boton/boton"; // Importar el botón reutilizable
import "./App.css";

const App = () => {
  const portadaConfig = {
    imagenes: [
      "https://invitacionesdar.store/wp-content/uploads/2024/05/326074302_1348800732328746_8919764317576067266_n.jpg",
      "https://invitacionesdar.store/wp-content/uploads/2024/05/326194608_1601467676961271_4060595714253651537_n.jpg",
    ],
    titulo: "¡Nos Casamos!",
    subtitulo: "y queremos compartirlo con vos",
  };

  const fechaDelEvento = "2024-12-22T00:00:00";
  const nombresNovios = "Adri y Ro";

  const imagenesAlbum = [
    "https://via.placeholder.com/300x250/000000/FFFFFF?text=Foto+1",
    "https://via.placeholder.com/300x250/111111/FFFFFF?text=Foto+2",
    "https://via.placeholder.com/300x250/222222/FFFFFF?text=Foto+3",
    "https://via.placeholder.com/300x250/333333/FFFFFF?text=Foto+4",
    "https://via.placeholder.com/300x250/444444/FFFFFF?text=Foto+5",
    "https://via.placeholder.com/300x250/555555/FFFFFF?text=Foto+6",
    "https://via.placeholder.com/300x250/666666/FFFFFF?text=Foto+7",
    "https://via.placeholder.com/300x250/777777/FFFFFF?text=Foto+8",
  ];

  const historiaTexto = `
    Dicen que el tiempo lo cura todo, pero también es el único testigo de los amores más profundos. 
    Como el nuestro, que comenzó con una mirada fugaz y una conversación inesperada en un día cualquiera.
  `;

  return (
    <div className="App">
      {/* Encabezado Sticky */}
      <Encabezado nombres={nombresNovios} claseTipografia="tipografia-script" />

      {/* Portada */}
      <Portada
        imagenes={portadaConfig.imagenes}
        titulo={portadaConfig.titulo}
        subtitulo={portadaConfig.subtitulo}
      />

      {/* Contador */}
      <div className="contador-seccion">
        <Contador fechaEvento={fechaDelEvento} />
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

      {/* Sección de Información de Eventos */}
      <div className="seccion-eventos">
        <EventoInfo
          icono="fas fa-gavel"
          titulo="Civil"
          descripcion="Registro Civil. Av. Rivadavia 123, Ciudad."
          botonTexto="CÓMO LLEGAR"
          botonTipo="maps"
          botonParametros={{ url: "https://maps.google.com" }}
          botonIcono="fas fa-map-marker-alt"
        />
        <EventoInfo
          icono="fas fa-church"
          titulo="Ceremonia"
          descripcion="Iglesia Nuestra Señora. Calle Falsa 123, Ciudad."
          botonTexto="CÓMO LLEGAR"
          botonTipo="maps"
          botonParametros={{ url: "https://maps.google.com" }}
          botonIcono="fas fa-map-marker-alt"
        />
        <EventoInfo
          icono="fas fa-glass-cheers"
          titulo="Festejo"
          descripcion="Salón de Eventos. Av. Siempre Viva 456, Ciudad."
          botonTexto="CÓMO LLEGAR"
          botonTipo="maps"
          botonParametros={{ url: "https://maps.google.com" }}
          botonIcono="fas fa-map-marker-alt"
        />
      </div>

      {/* Historia */}
      <Historia
        imagen="https://via.placeholder.com/600x400"
        titulo="Nuestra Historia"
        historia={historiaTexto}
      />

      {/* Álbum de Fotos */}
      <AlbumFotos titulo="Momentos únicos" imagenes={imagenesAlbum} />

      {/* Confirmación de Asistencia */}
      <ConfirmarAsistencia />
    </div>
  );
};

export default App;
