const { Character } = require("../Database/DB_connection.js");
const { User } = require("../Database/DB_connection.js");

const charactersCreatedController = async (userId) => {
  let response = await Character.findAll({
    where: { created: true },
    include: [{ model: User, where: { id: userId } }],
  });
  return response;
};

module.exports = charactersCreatedController;
