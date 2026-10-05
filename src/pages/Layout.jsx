import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// estructura que comparten todas las páginas
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        {/* acá se muestra la página de la ruta actual */}
        <Outlet />
      </main>
      <Footer />
      {/* vuelve arriba de todo al cambiar de página */}
      <ScrollRestoration />
    </>
  );
}

export default Layout;
