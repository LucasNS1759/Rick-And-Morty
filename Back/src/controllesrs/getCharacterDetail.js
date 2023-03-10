// const axios = require("axios");
const { Character } = require("../Database/DB_connection.js");

const getCharacterDetail = async (detailId) => {
  let response = await Character.findByPk(detailId);

  return response;
};
module.exports = getCharacterDetail;

// const response = await (
//   await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
// ).data;

// return {
//   name: response.name,
//   status: response.status,
//   species: response.species,
//   gender: response.gender,
//   origin: response.origin.name,
//   image: response.image,
// };
