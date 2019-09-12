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
    const getData = async(fetch_url) => {
      let response = await fetch(fetch_url)
                            .then(responses => responses.json())
      let characters = await response.results
      this.setState({charactersList: characters})
      console.log(typeof(characters))
    }
    getData(url)
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
