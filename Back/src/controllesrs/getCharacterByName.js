const { Character } = require("../Database/DB_connection.js");

const { Op } = require("sequelize");

const getCharacterByName = async (name) => {

   const searchByName = await Character.findAll({
    where: {
      name: {
        [Op.match]: name,
      },
    },
  });
  if(searchByName.length === 0) return 
  
  return searchByName;
};

module.exports = getCharacterByName;


