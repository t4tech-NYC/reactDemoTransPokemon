import React, { Component } from 'react';
import './App.css';
import Search from './Search'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
     
    }
  }

  render() {
    return (
      <div className="App">
        <h1>are all pokemon trans?</h1>
        <Search />
      </div>
    );
  }
}

export default App;
