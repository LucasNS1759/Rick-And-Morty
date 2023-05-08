const { User } = require("../Database/DB_connection.js");

const getAllUsersControllers = async () => {
  let response = await User.findAll();
  return response;
};

module.exports = getAllUsersControllers;
