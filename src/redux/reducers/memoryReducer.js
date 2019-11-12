const initialState = {
  characters: []
};

const memoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TILES":
      return state;
    case "ADD_CHARACTERS":
      console.log(action.payload);
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};

export default memoryReducer;
