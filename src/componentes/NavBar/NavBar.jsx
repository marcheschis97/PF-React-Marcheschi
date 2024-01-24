import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
      <img src="/img/multimarca-logo.png" alt="logo multimarca" />
      </Link>
      <ul>
        <li>
          <Link to="/categorias/Mujeres">Mujeres</Link>
        </li>
        <li>
          <Link to="/categorias/Hombres">Hombres</Link>
        </li>
        <li>
          <Link to="/categorias/Niños">Niños</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
