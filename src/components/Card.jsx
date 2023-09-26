import React from 'react';
import "./Card.css";

function Card({title="", description=""}) {
  return (
    <div className='Card'>
        <h2>{title}</h2>
        <h3>{description}</h3>
    </div>
  )
}

export default Card;