import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Amoma</h1>
      <p>Casero y hecho con amor</p>
      <Link to="/contacto">Hacé tu pedido</Link>
    </section>
  );
}

export default Hero;
