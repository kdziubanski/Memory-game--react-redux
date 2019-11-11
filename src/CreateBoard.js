import React from "react";
import { connect } from "react-redux";

const CreateBoard = ({ characters }) => {
  const arr = characters.map(char => <div key={char.id}>{char.name}</div>);
  return <div>{arr}</div>;
};

const mapStateToProps = state => {
  return {
    characters: state.memoryReducer.characters
  };
};

export default connect(mapStateToProps)(CreateBoard);
