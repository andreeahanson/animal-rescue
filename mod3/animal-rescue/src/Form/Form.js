import React, { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { loadDonations, addDonation } from '../actions';

class Form extends Component {
  constructor(props){
    super(props);
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const newDonation = {
      id: Date.now(),
      name: this.state.nameInput,
      donation: parseInt(this.state.donationInput),
    }
    await this.props.processDonation(newDonation);
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