const { Favorite } = require("../Database/DB_connection.js");
const { User } = require("../Database/DB_connection.js");

const findFavorites = async (nickName) => {
  const allFavs = await Favorite.findAll({
    include: [{ model: User, where: { nickName } }],
  });

  return allFavs;
};

module.exports = findFavorites;
