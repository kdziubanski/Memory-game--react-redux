import { game } from "../actions/gameActions";

const initialState = {
  boardSize: "12",
  playWithCPU: true,
  characters: [],
  actualClick: []
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
    case "REVEAL_TILE":
      let newCharacters = [];
      //first click
      if (state.actualClick.length === 0) {
        newCharacters = state.characters.map((item, i) => {
          if (action.payload === i) {
            item.className = "board__image reveal";
            state.actualClick.push(item);
            return item;
          } else return item;
        });

        //second click
      } else if (state.actualClick.length === 1) {
        newCharacters = state.characters.map((item, i) => {
          if (action.payload === i) {
            item.className = "board__image reveal";
            state.actualClick.push(item);
            return item;
          } else return item;
        });
        checkWin();
      }
      function checkWin() {
        if (state.actualClick[0].image === state.actualClick[1].image) {
          setTimeout(() => {
            state.actualClick = [];
            alert("Wygrales");
          }, 1000);
        } else {
          setTimeout(() => {
            newCharacters = state.characters.map((item, i) => {
              if (item.className === "board__image reveal") {
                item.className = "board__image hidden";
                state.actualClick = [];
                return item;
              } else return item;
            });
          }, 1000);
          state.characters = newCharacters;
        }
      }
      console.log(newCharacters);

      return {
        ...state,
        characters: newCharacters
      };
    default:
      return state;
  }
};

export default memoryReducer;
