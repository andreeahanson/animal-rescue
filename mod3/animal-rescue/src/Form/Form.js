import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { loadDonations, addDonation } from '../actions';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      nameInput: '',
      donationInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  clearInputs = () => {
    this.setState({
      nameInput: '',
      donationInput: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newDonation = {
      id: Date.now(),
      name: this.state.nameInput,
      donation: this.state.donationInput,
    }
    this.props.addDonation(newDonation);
    this.clearInputs();
  }

  render() {
    return(
      <form>
        <input 
        type="text"
        placeholder="donor name"
        name="nameInput"
        value={this.state.nameInput}
        onChange = {this.handleChange}
        />
        <input 
        type="text"
        placeholder="donation"
        name="donationInput"
        value={this.state.donationInput}
        onChange= {this.handleChange}
        />
        <button onClick={(event)=>this.handleSubmit(event)}>Donate!</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  donations: state.donations
})

const mapDispatchToProps = dispatch => ({
  loadDonations: donations => dispatch(loadDonations(donations)),
  addDonation: newDonation => dispatch(addDonation(newDonation))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);