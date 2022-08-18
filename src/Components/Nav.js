import React, { useState } from 'react';
import '../App.css';
import '../index.css'
import { Link } from 'react-router-dom';

function Nav() {

  const[menu, setMenu]= useState(false)

  const menuHamburger=()=>{
    setMenu(!menu);
}

  return (

    <header className="Header">
    <Link to= "/">
      <h1 className="H1-Nav">
        <a href="asa" className='A-Logo'>Hering</a>
      </h1>
    </Link>
      <button className="Btn-Svg" onClick={menuHamburger}>
        <svg className='Svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      
        </button>

      <nav className={`Nav ${ menu ? 'Active' : ''}` }>
        <ul className="Ul-Nav">
        <Link to="/">
          <li className="Li-Nav"><a href="sasa" clasName="A-Nav">Home</a></li>
        </Link>
        <Link to="/category/netbook">
          <li className="Li-Nav"><a href="sasa" clasName="A-Nav">Netbook</a></li>
        </Link>
        <Link to="/category/periferico">
          <li className="Li-Nav"><a href="sasa" clasName="A-Nav">Perifericos</a></li>
        </Link>
        <Link to="/contacto">
          <li className="Li-Nav"><a href="sasa" clasName="A-Nav">Contact</a></li>
        </Link>

          <button className="Btn-Carrito">
          <Link to='/category/Cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
          </Link>
          </button>

        </ul>
      </nav>
    </header>
  )
}

export default Nav;
