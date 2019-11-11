import axios from "axios";

//rickandmortyapi.com/api/character/1,2,3,4,5,6

//get RickAndMorty API characters card and void characters function
export function addCharacters() {
  let arr = [];
  for (let i = 0; arr.length < 6; i++) {
    const number = Math.floor(Math.random() * 19);
    let check = arr.filter(item => item === number);
    if (check.length === 0) {
      console.log(typeof check[0]);
      arr.push(number);
    }
    console.log(arr);
  }
  return dispatch => {
    return axios
      .get(
        `https://rickandmortyapi.com/api/character/${arr[0]},${arr[1]},${
          arr[2]
        },${arr[3]},${arr[4]},${arr[5]}`
      )
      .then(response => {
        dispatch(characters(response.data));
      });
  };
}

//take random
export function characters(data) {
  return {
    type: "ADD_CHARACTERS",
    payload: data
  };
}
