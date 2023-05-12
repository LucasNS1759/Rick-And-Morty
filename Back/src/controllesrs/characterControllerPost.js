const { Character } = require("../Database/DB_connection.js");
const { User } = require("../Database/DB_connection.js");

const characterControllerPost = async (
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
  userId
) => {
  const character = await Character.create({
    name,
    status,
    species,
    gender,
    origin,
    location,
    image,
    created: true,
  });
  console.log(character);
  let user = await User.findByPk(userId);


  await character.addUser(user);

  const newCharacter = await Character.findByPk(character.id, {
    include: [{ model: User }],
  });

 
  return newCharacter;
};

module.exports = characterControllerPost;
