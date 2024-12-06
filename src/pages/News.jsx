// src/pages/News.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function News() {
  return (
    <div>
      <h1>Noticias</h1>
      <nav>

        {/* saldra error 404 por que no existe la pagina jefatura */}
        <Link to="leadership">Contacto</Link> |{" "}
       
      </nav>
      <Outlet />
    </div>
  );
}
