import axios from "axios";

//rickandmortyapi.com/api/character/1,2,3,4,5,6

//get RickAndMorty API characters card and void characters function get random characters
export function addCharacters() {
  let arr = [];
  for (let i = 0; arr.length < 6; i++) {
    const number = Math.floor(Math.random() * 30 + 1);
    let check = arr.filter(item => item === number);
    if (check.length === 0) {
      arr.push(number);
    }
  }

  return dispatch => {
    return axios
      .get(`https://rickandmortyapi.com/api/character/${arr}`)
      .then(response => {
        dispatch(characters(response.data));
      });
  };
}

//take random
// export function characters(data) {
//   function prepareArray(data) {
//     data = data.concat(data);
//     data = data.map((el, i) => ({ id: i, image: el.image }));

//     return data;
//   }

//   return {
//     type: "ADD_CHARACTERS",
//     payload: prepareArray(data)
//   };
// }

export function characters(data) {
  data = data.concat(data);
  data = data.map((el, i) => ({ id: i, image: el.image }));

  return {
    type: "ADD_CHARACTERS",
    payload: data
  };
}
