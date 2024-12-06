/* la barra de navegacion general  */
import React from 'react';
/* importamos el router */
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">

    <div className="container">
      <NavLink className="navbar-brand" to="/">
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Acerca
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/photos">
              Galería
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/news">
              Noticias
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}
