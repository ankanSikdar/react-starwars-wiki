import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'

const url = "https://swapi.co/api/people/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      charactersList: {},
    }
  }

  componentDidMount() {
    const getData = async() => {
      let response = await fetch(url)
                            .then(responses => responses.json())
      let characters = await response.results
      this.setState({charactersList: characters})
      console.log(response.next)
    }
    getData()
  }

  render() {
    return (
      <div className="App">
          <CardList characterList={this.state.charactersList}/>
      </div>
    )
  }
}

export default App;
