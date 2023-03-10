const axios = require("axios");

const getCharacterId = async (id) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  const data = response.data;

  return {
    id: data.id,
    name: data.name,
    species: data.species,
    gender: data.gender,
    image: data.image,
  };
};

module.exports = getCharacterId;
