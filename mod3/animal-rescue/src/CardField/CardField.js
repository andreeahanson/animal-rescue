import React from 'react';
import './CardField.css';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const CardField = ({animals}) => {
  const allAnimals = animals.map(animal => {
    return (
      <Card 
      img={animal.img}
      name={animal.name}
      species={animal.species}
      description={animal.description}
      />
    )
  })
  return allAnimals
}

const mapStateToProps = state => ({
  animals: state.animals
})

export default connect(mapStateToProps)(CardField)