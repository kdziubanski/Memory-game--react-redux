import React from "react";
import { connect } from "react-redux";
import { inputHandler } from "./redux/actions/inputHandler";

const BoardSettings = ({ selectHandler, boardSize }) => {
  return (
    <div className="board__input">
      <select onChange={selectHandler} name="board size">
        {/* <option value={boardSize}>Board size</option> */}
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="20">20</option>
        <option value="24">24</option>
      </select>
      <span>Board size</span>
      <br />
      <input type="checkbox" />
      <span>Play with CPU</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    boardSize: state.memoryReducer.boardSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectHandler: e => {
      const value = e.target.value;
      dispatch(inputHandler(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardSettings);
