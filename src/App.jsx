/* instalamos bootstrap, react-router-dom:  */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
/* aqui verificamos las rutas y dentro de home tenemos las (cards) */
import Home from './pages/Home';
import About from './pages/About';
/* error 404 cuando no se encuentra la pagina, en content aparece */
import NoPage from './pages/NoPage';
import News from './pages/News';
import Photos from './pages/Photos';

export default function App() {
  return (
    <div className="layout">
      <header className="header">
        <Navbar />
      </header>
     {/*  tenemos las lista de menus  */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
         {/*  tenemos el menu acerca */}
          <Route path="/about" element={<About />} />
       {/*    galeria */}
          <Route path="/photos" element={<Photos />} />
          {/* noticias */}
          <Route path="/news" element={<News />}>
          </Route>

          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>

      {/* Aside con color morado */}
      <aside className="aside">
        <p>Enlaces útiles o información adicional lo ultimo en computadoras</p>
      </aside>

      {/* Footer con color verde */}
      <footer className="footer">
        <p>Fcconislla.com © 2024</p>
      </footer>
    </div>
  );
}
