import React, { Component } from 'react';
import './App.css';
import { fetchAnimals } from './apiCalls'
import { connect } from 'react-redux';
import { loadAnimals } from  './actions';

class App extends Component{ 
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount = async () => {
    const animals = await fetchAnimals();
    await console.log(animals)
    this.props.loadAnimals(animals);
  }

  render(){
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  animals: state.animals,
  isLoading: state.isLoading,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  loadAnimals: animals => dispatch(loadAnimals(animals))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
