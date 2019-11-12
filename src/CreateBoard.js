import React from "react";
import "./App.css";
import { connect } from "react-redux";

const CreateBoard = ({ characters }) => {
  const createBoardTiles = characters.map(char => (
    <div className="board__tile" key={char.id}>
      <img src={char.image} alt="" />
    </div>
  ));
  return (
    <>
      <div className="board__input">
        <span>Board Size</span>
        <select name="board size" onChange={selectHandler}>
          <option value="">Board size</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
          <option value="24">24</option>
        </select>
        <br />
        <input type="checkbox" />
        <span>Play with CPU</span>
        <br />
        <button>Create board</button>
      </div>
      <div className="board">{createBoardTiles}</div>
    </>
  );
};

const selectHandler = e => {
  console.log(typeof e.target.value);
};

const mapStateToProps = state => {
  return {
    characters: state.memoryReducer.characters
  };
};
const mapDispatchToProps = dispatch => {
  return {
    selectHandler: e => {
      const value = e.target.value;
      dispatch({ type: "SELECT_VALUE", value });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
