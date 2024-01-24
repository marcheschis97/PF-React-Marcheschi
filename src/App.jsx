import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./componentes/Error/Error";
import { CartProvider } from "./context/CartContext";
import Carrito from "./componentes/Carrito/Carrito";
import Checkout from "./componentes/Checkout/Checkout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="Seleccione la prenda de su interes, y comprela en tan solo un click." />}
          />
          <Route
            path="/categorias/:categoria"
            element={<ItemListContainer saludo="Productos:" />}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
