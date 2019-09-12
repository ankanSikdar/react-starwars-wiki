import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'


class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div className="App">
          <CardList/>
      </div>
    ); 
  }
}

export default App;
