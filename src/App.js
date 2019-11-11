import React, { Component } from "react";
import CreateBoard from "./CreateBoard";
import { connect } from "react-redux";
import "./App.css";
import * as actionCreators from "./redux/actions/fetchAction.js";
import Test from "./Test";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.addCharacters();
  }

  render() {
    return (
      <div className="App">
        <CreateBoard />
        <Test />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
