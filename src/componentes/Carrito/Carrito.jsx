import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>El carrito esta vacio...</h2>
        <p>Una vez que añadas algo a tu carrito, aparecerá acá.</p>
        <Link className="boton" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <h3>Tu carrito:</h3>
      <ul className="lista">
        {carrito.map((producto) => (
          <li className="producto" key={producto.id}>
            <img
              className="imagen"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <p className="texto nombre">{producto.nombre}</p>
            <p className="texto">Cantidad: {producto.cantidad}</p>
            <p className="texto">Precio por unidad: ${producto.precio}</p>
            <p className="borrar"
              onClick={() => borrarProducto(producto.id)}
              size={25}
            >Borrar producto</p>
          </li>
        ))}
      </ul>
      <h3>Total a pagar: ${totalPrecio()}</h3>
      <div className="botones-carrito">
        <div className="botones-carrito-borrar" onClick={borrarCarrito}>
          <p>Vaciar carrito</p>
          <FaTrashAlt size={25} />
        </div>
        <Link className="botones-carrito-terminar" to="/checkout">
          <p>Terminar compra</p>
        </Link>
      </div>
    </div>
  );
};
export default Carrito;
