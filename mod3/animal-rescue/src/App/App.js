import React, { Component } from 'react';
import './App.css';
import { fetchAnimals, fetchDonations } from '../apiCalls'
import { connect } from 'react-redux';
import { loadAnimals, Loading, hasErrored, loadDonations } from  '../actions';
import CardField from '../CardField/CardField';
import DonationField from '../DonationField/DonationField';
import Form from '../Form/Form';

class App extends Component{ 
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount = async () => {
    this.props.Loading(true);
    try{
      const animals = await fetchAnimals();
      const donations = await fetchDonations();
      await console.log(animals)
      await console.log('DONATIONS', donations)
      this.props.Loading(false);
      this.props.loadAnimals(animals);
      this.props.loadDonations(donations);
    } catch(error) {
      this.props.error(error)
    }
  }

  render(){
    return(
      <main>
        <Form />
          <h2>Animals: </h2>
        <section className="card-field">
          {this.props.isLoading && <h1>isLoading</h1>}
          <CardField />
        </section>
          <h2>Donations:</h2>
        <section className="donation-field">
          <DonationField />
        </section>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  animals: state.animals,
  donations: state.donations,
  isLoading: state.isLoading,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  loadAnimals: animals => dispatch(loadAnimals(animals)),
  loadDonations: donations => dispatch(loadDonations(donations)),
  Loading: isLoading => dispatch(Loading(isLoading)),
  hasErrored: error => dispatch(hasErrored(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
