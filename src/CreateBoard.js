import React from "react";
import "./App.css";
import { connect } from "react-redux";

const CreateBoard = ({ characters }) => {
  const createBoardTiles = characters.map(char => (
    <div className="board__tile" key={char.id}>
      <img src={char.image} alt="" />
    </div>
  ));
  return <div className="board">{createBoardTiles}</div>;
};

const mapStateToProps = state => {
  return {
    characters: state.memoryReducer.characters
  };
};

export default connect(mapStateToProps)(CreateBoard);
