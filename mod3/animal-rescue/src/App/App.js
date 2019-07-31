import React, { Component } from 'react';
import './App.css';
import { fetchAnimals } from '../apiCalls'
import { connect } from 'react-redux';
import { loadAnimals, Loading, hasErrored } from  '../actions';
import CardField from '../CardField/CardField';

class App extends Component{ 
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount = async () => {
    this.props.Loading(true);
    try{
      const animals = await fetchAnimals();
      await console.log(animals)
      this.props.Loading(false);
      this.props.loadAnimals(animals);
    } catch(error) {
      this.props.error(error)
    }
  }

  render(){
    return(
      <div>
        <h1>hello</h1>
        <section className="card-field">
          {this.props.isLoading && <h1>isLoading</h1>}
          <CardField />
        </section>
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
  loadAnimals: animals => dispatch(loadAnimals(animals)),
  Loading: isLoading => dispatch(Loading(isLoading)),
  hasErrored: error => dispatch(hasErrored(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
