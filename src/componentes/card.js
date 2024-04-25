import React from 'react';
import './card.css'; // Asegúrate de migrar y ajustar los estilos relevantes

function Card({ title, onButtonClick }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <button onClick={onButtonClick}>Ir a {title}</button>
    </div>
  );
}

export default Card;