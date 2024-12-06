/* aqui contenemos todas las tarjetas */
import React from 'react';
import Card from './Card';
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';

const cards = [
  {
    id: 1,
    title: 'Soporte Ti',
    image: imagen1,
    url: 'https://fcconislla.com/',
  },
  {
    id: 2,
    title: 'IES Cura Valera',
    image: imagen2,
    url: 'https://iescuravalera.fcconislla.com/',
  },
  {
    id: 3,
    title: 'Moodle',
    image: imagen3,
    url: 'http://educacionfcc.fcconislla.com/',
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
           {/*  podemos usar cada detalle para mostrar, como titulo, imagen */}
            <Card title={card.title} imageSource={card.image} url={card.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
