const { Character } = require("../Database/DB_connection");

const characterDeleteController = async (id) => {
  await Character.destroy({ where: { id } });
};

module.exports = characterDeleteController;
