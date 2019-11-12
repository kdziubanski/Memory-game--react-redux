const initialState = {
  boardSize: 12,
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
    default:
      return state;
  }
};

export default memoryReducer;
