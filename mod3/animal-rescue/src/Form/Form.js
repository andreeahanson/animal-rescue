import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      nameInput: '',
      donationIput: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
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
        <button>Donate!</button>
      </form>
    )
  }
}

export default Form;