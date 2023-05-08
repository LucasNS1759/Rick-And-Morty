const { Favorite } = require("../Database/DB_connection.js");

const deleteControler = async (id) => {
 

  await Favorite.destroy({ where: { id } });



 
};

module.exports = deleteControler;

