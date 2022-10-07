import "./App.css";
import Nav from "./Components/layout/Nav";
import ItemConteiner from "./Components/container/ItemConteiner";
import ItemDetailConteiner from "./Components/container/ItemDetailConteiner";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/presentational/Cart";
import MyProvider from "./Components/provider/MyProvider ";
import "./Components/db/Firebase";
import Banners from "../src/utils/Banners";
import { Footer } from "./Components/layout/Footer";
import Formulario from "./Components/layout/Formulario";
import Contacto from "./Components/layout/Contacto";

function App() {
  return (
    <>
      <MyProvider>
        <header>
          <Nav />
        </header>
        <main className="felx flex-wrap">
          <Routes>
            <Route exact path="/" element={<ItemConteiner />} />
            <Route
              exact
              path="/category/:category"
              element={<ItemConteiner />}
            />
            <Route
              exact
              path="/detalle/:id"
              element={<ItemDetailConteiner />}
            />
            <Route exact path="/category/Cart" element={<Cart />} />
            <Route exact path="/formulario" element={<Formulario />} />
            <Route exact path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </MyProvider>

      <article>
        <Banners />
      </article>
      <Footer />
    </>
  );
}

export default App;
