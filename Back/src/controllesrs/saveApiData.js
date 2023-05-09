const axios = require("axios");
const { Character } = require("../Database/DB_connection.js");

const getApiData = async () => {
  try {
    let page = 1;
    let characters = [];
    while (page < 43) {
      let response = await axios(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );

      characters.push(response.data);
      page++;
    }

    characters = (await Promise.all(characters)).map((res) =>
      res.results.map((char) => {
      console.log(char.status)
        return {
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name,
          image: char.image,
          location: char.location.name,
        };
      })
    );

    let allCharacters = [];
    characters.map((char) => {
      allCharacters = allCharacters.concat(char);
    });

    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  // if(await Character.count() >0) return
  

  const allCharacters = await getApiData();

  allCharacters.forEach(async (char) => {
    await Character.findOrCreate({
      where: {
        
        name: char.name,
        status: char.status,
        species: char.species,
        origin: char.origin,
        image: char.image,
        location: char.location,
        gender:char.gender
      },
    });
  });

  // allCharacters.map(async (char) => {
  //   await Character.findOrCreate({
  //     where: {
  //       id: char.id,
  //       name: char.name,
  //       status: char.status,
  //       species: char.species,
  //       gender: char.gender,
  //       origin: char.origin.name? char.origin.name : "unknown",
  //       image: char.image,
  //       location: char.location.name?char.location.name : "unknown",
  //     },
  //   });
  // });
};

module.exports = { saveApiData, getApiData };
