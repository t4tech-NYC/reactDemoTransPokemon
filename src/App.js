import React, { Component } from 'react';
import './App.css';
import Search from './Search'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      pokemonResults: 'torchic'
    }
  }

  render() {
    return (
      <div className="App">
        <h1 class="transHeader">are all pokemon <em class="transText">trans?</em> </h1>
        <Search />
      </div>
    );
  }
}

export default App;
