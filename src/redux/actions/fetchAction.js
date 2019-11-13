import axios from "axios";

//get RickAndMorty API characters card and void characters function get random characters
export function addCharacters(boardSize) {
  const size = parseInt(boardSize) / 2;
  let arr = [];
  for (let i = 0; arr.length < size; i++) {
    const number = Math.floor(Math.random() * 30 + 1);
    console.log(number);
    let check = arr.filter(item => item === number);
    if (check.length === 0) {
      arr.push(number);
    }
  }

  return dispatch => {
    return axios
      .get(`https://rickandmortyapi.com/api/character/${arr}`)
      .then(response => {
        dispatch(addCharactersToArray(response.data));
      });
  };
}

export function addCharactersToArray(data) {
  data = data.concat(data);
  data = data.map((el, i) => ({ id: i, image: el.image }));

  return {
    type: "ADD_CHARACTERS",
    payload: data
  };
}
