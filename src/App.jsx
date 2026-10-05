import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";

// todas las rutas comparten el Layout (navbar + footer)
const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: "galeria", element: <Galeria /> },
      { path: "contacto", element: <Contacto /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={rutas} />;
}

export default App;
