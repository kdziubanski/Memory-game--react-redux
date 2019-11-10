const initialState = {
  tiles: []
};

const memoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TILES":
      return state;
    default:
      return state;
  }
};

export default memoryReducer;
