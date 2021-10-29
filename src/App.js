import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super()

    this.state = {
      name: "Ashley",
      string: "Test Me:"
    }

  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, {this.state.name},<br />Edit <code>src/App.js</code> and save to reload, please. And thank you!
        </p>
        <button onClick={() => this.setState({ name: "Ash Thomas", string: "Success!" })}>{this.state.string}</button>
        
      </header>
      </div>

    )
  }





}

export default App;
