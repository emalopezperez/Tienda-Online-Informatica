import React, { useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import CartWidget from "../presentational/CartWidget";
import { context } from "../provider/MyProvider ";
import { useContext } from "react";

function Nav() {
  const { obtenerCantidad } = useContext(context);
  const [menu, setMenu] = useState(false);

  const menuHamburger = () => {
    setMenu(!menu);
  };
  return (
    <header className="  Header ">
      <Link to="/">
        <h1 className="H1-Nav italic ">Hering</h1>
      </Link>
      <button className="Btn-Svg" onClick={menuHamburger}>
        <svg
          className="Svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <nav className={`Nav ${menu ? "Active" : ""}`}>
        <ul className="Ul-Nav">
          <Link className="Li-Nav" to="/">
            Home
          </Link>
          <Link className="Li-Nav" to="/category/netbook">
            Netbook
          </Link>
          <Link className="Li-Nav" to="/category/periferico">
            Perifericos
          </Link>
          <Link className="Li-Nav" to="/contacto">
            Contact
          </Link>
          <CartWidget />
          <div className="lg:pl-3 sm:pl-0">{obtenerCantidad()}</div>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
