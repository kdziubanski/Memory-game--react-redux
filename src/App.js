import React, { Component } from "react";

import CreateBoard from "./CreateBoard";
import "./App.css";

class App extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    fetch("https://dragon-ball-api.herokuapp.com/api/character")
      // .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          characters: data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <CreateBoard />
      </div>
    );
  }
}

export default App;
