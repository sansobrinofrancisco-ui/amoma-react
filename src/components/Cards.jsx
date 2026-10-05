import Card from "./Card";
import tortas from "../assets/img/card-1.jpg";
import postres from "../assets/img/card-2.jpg";
import personalizadas from "../assets/img/card-3.jpg";
import "../styles/Cards.css";

function Cards() {
  return (
    <section>
      <h2>Nuestras Especialidades</h2>
      <div className="cards">
        <Card
          imagen={tortas}
          titulo="Tortas"
          descripcion="Hechas con ingredientes de primera calidad."
          textoBoton="Ver galería"
          enlace="/galeria"
        />
        <Card
          imagen={postres}
          titulo="Postres individuales"
          descripcion="Cupcakes, cheesecake, volcán y porciones listas para disfrutar."
          textoBoton="Ver galería"
          enlace="/galeria"
        />
        <Card
          imagen={personalizadas}
          titulo="Tortas personalizadas"
          descripcion="Las diseñamos a tu gusto para cumpleaños, casamientos y eventos especiales."
          textoBoton="Hacé tu pedido"
          enlace="/contacto"
        />
      </div>
    </section>
  );
}

export default Cards;
