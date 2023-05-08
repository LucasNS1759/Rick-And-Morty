const { Favorite } = require("../Database/DB_connection.js");
const { User } = require("../Database/DB_connection.js");

const saveFavorites = async (name, species, image, nickName) => {
  let newFav = await Favorite.create({ name, species, image });
  console.log(newFav.__proto__);
  let user = await User.findAll({ where: { nickName } });

  await newFav.addUser(user);

  const favUser = await Favorite.findByPk(newFav.id, {
    include: [{ model: User }],
  });

  return favUser;
};

module.exports = saveFavorites;
