/* estas son tarjetas individuales card */
import React from 'react';
function Card({ title, imageSource, url }) {
  return (
    <div className="card text-center bg-dark">
      <img src={imageSource} alt="" className="card-img-top" />
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        {/* este texto se repite en las 3 cards */}
        <p className="card-text text-secondary">
          ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web.
        </p>
        {/* de aqui te redireccionamos mis webs creadas */}
        <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank" rel="noopener noreferrer">
          Presiona aquí
        </a>
      </div>
    </div>
  );
}

export default Card;
