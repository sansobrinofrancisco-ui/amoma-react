import { Link } from "react-router-dom";
import "../styles/Error404.css";

// se muestra con cualquier dirección que no exista (ruta "*")
function Error404() {
  return (
    <section className="error-404">
      <p className="error-numero">404</p>
      <h2>¡Ups! Esta torta no está en el menú 🍰</h2>
      <p>La página que buscás no existe o cambió de lugar.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default Error404;
