import React, { Component } from 'react';
import '../containers/App';
import CardList from '../components/CardList'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'

const url = "https://swapi.co/api/people/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      charactersList: {},
      searchField: "",
    }
  }

  componentDidMount() {
    const getData = async(fetch_url) => {
      let response = await fetch(fetch_url)
                            .then(responses => responses.json())
      let characters = await response.results
      this.setState({charactersList: characters})
    }
    getData(url)
  }

  onSearch = (event) => {
    this.setState({
      searchField: event.target.value.toLowerCase()
    })
  }

  render() {
    return (
      <div className="App">
          <NavBar/>
          <SearchBox onSearch={this.onSearch}/>
          <CardList characterList={this.state.charactersList} searchValue={this.state.searchField}/>
          <Footer/>
      </div>
    )
  }
}

export default App;
