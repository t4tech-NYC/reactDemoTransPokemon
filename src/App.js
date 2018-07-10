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
        <h1>trans pokemon app!!!!</h1>
        <Search />
      </div>
    );
  }
}

export default App;
