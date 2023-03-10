const axios = require("axios");
const { Character } = require("../Database/DB_connection");

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
        return {
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name,
          image: char.image,
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
  try {
    const allCharacters = await getApiData();
   
    
    await Character.bulkCreate(allCharacters);
    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {saveApiData,getApiData}
