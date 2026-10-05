import { Link } from "react-router-dom";
import "../styles/Card.css";

// molde reutilizable, recibe por props los datos de cada especialidad
function Card({ imagen, titulo, descripcion, textoBoton, enlace }) {
  return (
    <article className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <Link to={enlace}>{textoBoton}</Link>
    </article>
  );
}

export default Card;
