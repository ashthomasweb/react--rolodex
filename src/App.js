import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((orcs) => {
        console.log(orcs);
        this.setState({ monsters: orcs });
      });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.setState({ searchField: e.target.value })} type='search' placeholder='search monsters' />
        <p>{this.state.searchField}</p>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
