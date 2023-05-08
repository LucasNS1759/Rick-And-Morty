const { Character } = require("../Database/DB_connection.js");

const characterControllerPost = async (
  name,
  status,
  species,
  gender,
  origin,
  location,
  image
) => {
  const response = await Character.create({
    name,
    status,
    species,
    gender,
    origin,
    location,
    image,
    created: true,
  });

  return response;
};

module.exports = characterControllerPost;
