// src/pages/Photos.jsx
import React from 'react';
import imagen1 from '../assets/imagen4.jpg';
import imagen2 from '../assets/imagen5.jpg';
import imagen3 from '../assets/imagen6.jpg';

export default function Photos() {
  const images = [imagen1, imagen2, imagen3];

  return (
    <div className="container">
      <h1 className="text-center my-4 text-primary">Galería de Fotos</h1>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4">
            <div className="card">
              <img src={image} alt={`Imagen ${index + 1}`} className="card-img-top" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
