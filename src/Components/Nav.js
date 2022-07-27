import React, { useState } from 'react';
import '../App.css';
import '../index.css'



function Nav() {

const[menu, setMenu]= useState(false)

const menuHamburger=()=>{
  setMenu(!menu);
}

  return (

    <header className="Header">

      <h1 className="H1-Nav">
        <a href="asa" className='A-Logo'>Hering</a>
      </h1>

      <button className="Btn-Svg" onClick={menuHamburger}>
        <svg className='Svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>

      <nav className={`Nav ${ menu ? 'Active' : ''}` }>
        <ul className="Ul-Nav">
          <li className="Li-Nav"><a href="sasa" clasName="A-Nav">Home</a></li>
          <li className="Li-Nav"><a href="sasa" clasName="A-Nav">Shop</a></li>
          <li className="Li-Nav"><a href="sasa" clasName="A-Nav">Blog</a></li>
          <li className="Li-Nav"><a href="sasa" clasName="A-Nav">Contact</a></li>

          <button className="Btn-Carrito">
            <svg className="Svg-Carrito" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
          </button>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;
