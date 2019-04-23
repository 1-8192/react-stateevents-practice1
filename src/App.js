import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from './Containers/DogsList'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App-logo">SLAYERS</h1>
        <DogsList />
      </div>
    )
  }
}

export default App;
