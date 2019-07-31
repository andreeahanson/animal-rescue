import React from 'react';
import './Card.css'

const Card = ({img, name, species, description}) => {
  return(
    <article>
      <img alt='animal' src={img} />
      <h3>{name}</h3>
      <h5>{species}</h5>
      <p>{description}</p>
    </article>
  )
}

export default Card;