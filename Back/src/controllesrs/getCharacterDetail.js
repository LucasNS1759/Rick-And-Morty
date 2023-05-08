
const { Character } = require("../Database/DB_connection.js");

const getCharacterDetail = async (detailId) => {
  let response = await Character.findByPk(detailId);

  return response;
};
module.exports = getCharacterDetail;


