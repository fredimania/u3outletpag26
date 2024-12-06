/* agregamos las cards en la pagina home
 */
import React from 'react';
/* previamente se tube que instalar antes react route */
import { Outlet } from 'react-router-dom';
/* esta es la ruta para agregar cards en la pagina principal */
import Cards from '../components/Cards';

export default function Home() {
  return (
    /* agregamos centrado y texto, margen y color azul al texto */
    <div className="container text-center">
    <h1> Bienvenido a Mi Proyecto React de fcc</h1>
    <Cards />
    <Outlet />
  </div>

   /*  <div>
      <h1>Inicio</h1>
      <Cards />
      <Outlet />
    </div> */
  );
}
