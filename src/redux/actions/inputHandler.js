export const inputHandler = value => {
  return {
    type: "INPUT_VALUE",
    payload: value
  };
};
export const revealTile = id => {
  return {
    type: "REVEAL_TILE",
    payload: id
  };
};
