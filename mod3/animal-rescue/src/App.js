import React, { Component } from 'react';
import './App.css';
import { fetchAnimals } from './apiCalls'

class App extends Component{ 
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount = async () => {
    const animals = await fetchAnimals();
    await console.log(animals)
  }

  render(){
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

export default App;
