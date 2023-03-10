const { Character } = require("../Database/DB_connection.js");
const { database } = require("../Database/DB_connection.js");

const getCharacterByName = async (name) => {
  const response = await Character.findAll({
    where: database.where(
      database.fn("lower", database.col("name")),
      database.fn("lower", name)
    ),
  });
  return response;
};

module.exports = getCharacterByName;


