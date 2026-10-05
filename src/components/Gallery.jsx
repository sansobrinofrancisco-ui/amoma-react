import { useState } from "react";
import torta1 from "../assets/img/torta-1.jpeg";
import torta2 from "../assets/img/torta-2.jpeg";
import torta3 from "../assets/img/torta-3.jpeg";
import torta4 from "../assets/img/torta-4.jpeg";
import torta5 from "../assets/img/torta-5.jpeg";
import torta6 from "../assets/img/torta-6.jpeg";
import torta7 from "../assets/img/torta-7.jpeg";
import torta8 from "../assets/img/torta-8.jpeg";
import torta9 from "../assets/img/torta-9.jpeg";
import torta10 from "../assets/img/torta-10.jpeg";
import "../styles/Gallery.css";

const fotos = [
  {
    id: 1,
    imagen: torta1,
    descripcion: "Torta de chocolate con rosetas de crema",
  },
  { id: 2, imagen: torta2, descripcion: "Tarta de dulce de leche con crumble" },
  { id: 3, imagen: torta3, descripcion: "Tortas con crema y frutos rojos" },
  {
    id: 4,
    imagen: torta4,
    descripcion: "Charlotte de vainillas con moño azul",
  },
  { id: 5, imagen: torta5, descripcion: "Torta con crema y arándanos" },
  { id: 6, imagen: torta6, descripcion: "Torta arcoíris con flores" },
  { id: 7, imagen: torta7, descripcion: "Torta temática de surf" },
  { id: 8, imagen: torta8, descripcion: "Torta calabaza de Halloween" },
  { id: 9, imagen: torta9, descripcion: "Caja de tartitas de Halloween" },
  { id: 10, imagen: torta10, descripcion: "Lemon pie con merengue" },
];

function Gallery() {
  // foto que se muestra en grande (null = ninguna)
  const [fotoGrande, setFotoGrande] = useState(null);

  return (
    <section>
      <h2>Galería</h2>
      <div className="galeria">
        {fotos.map((foto) => (
          // el id sirve de key para identificar cada foto
          <button
            key={foto.id}
            type="button"
            className="galeria-foto"
            onClick={() => setFotoGrande(foto)}
          >
            <img src={foto.imagen} alt={foto.descripcion} />
          </button>
        ))}
      </div>

      {fotoGrande && (
        <div className="foto-ampliada" onClick={() => setFotoGrande(null)}>
          <img src={fotoGrande.imagen} alt={fotoGrande.descripcion} />
          <p>{fotoGrande.descripcion}</p>
          <button type="button" autoFocus>
            Cerrar
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
