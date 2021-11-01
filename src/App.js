import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchField } from "./components/search-field/search-field.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
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

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchField
          handleChange={(e) => this.setState({ searchField: e.target.value })}
          placeHolder="search monsters"
        />
        {/* <p>{this.state.searchField}</p> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
