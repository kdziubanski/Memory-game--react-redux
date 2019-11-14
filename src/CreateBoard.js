import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./redux/actions/fetchAction.js";
// import { revealTile } from "./redux/actions/inputHandler";

const CreateBoard = ({ characters, boardSize, addCharacters, revealTile }) => {
  const createBoardTiles = characters.map(char => (
    <div className="board__tile" key={char.id}>
      <img
        className={char.className}
        src={char.image}
        alt=""
        onClick={() => revealTile(char.id)}
      />
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
