import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./redux/actions/fetchAction.js";

const CreateBoard = ({ characters, boardSize, addCharacters }) => {
  const createBoardTiles = characters.map(char => (
    <div className="board__tile" key={char.id}>
      <img src={char.image} alt="" />
    </div>
  ));
  return (
    <>
      <div className="board__input">
        <br />
        <button onClick={() => addCharacters(boardSize)}>Create board</button>
      </div>
      <div className="board">{createBoardTiles}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.memoryReducer.characters,
    boardSize: state.memoryReducer.boardSize
  };
};

export default connect(mapStateToProps, actionCreators)(CreateBoard);
