const initialState = {
  boardSize: "",
  playWithCPU: true,
  characters: []
};

const memoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TILES":
      return state;
    case "ADD_CHARACTERS":
      return {
        ...state,
        characters: action.payload
      };
    case "INPUT_VALUE":
      return {
        ...state,
        boardSize: action.payload
      };
    default:
      return state;
  }
};

export default memoryReducer;
