import axios from "axios";

// export function addCharacters() {
//   // const request = axios.get("https://rickandmortyapi.com/api/character");
//   return dispatch => {
//     return (
//       fetch("https://rickandmortyapi.com/api/character")
//         // request
//         .then(response => response.json())
//         .then(data => {
//           dispatch(characters(data));
//         })
//     );
//   };
// }

export function addCharacters() {
  console.log("dziala");
  // const request = axios.get("https://rickandmortyapi.com/api/character");
  return dispatch => {
    return (
      axios
        .get("https://rickandmortyapi.com/api/character")
        // request
        .then(response => {
          dispatch(characters(response.data.results));
        })
    );
  };
}

export function characters(data) {
  console.log(data);
  return {
    type: "ADD_CHARACTERS",
    payload: data
  };
}
