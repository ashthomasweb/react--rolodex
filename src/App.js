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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField
          handleChange={ this.handleChange }
          placeHolder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
