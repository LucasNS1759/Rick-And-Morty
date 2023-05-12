const saveFavorites = require("../controllesrs/saveFavorites.js");
const findFavorites = require("../controllesrs/findFavorites.js");
const deleteControler = require("../controllesrs/deleteControler.js");

const handlerGetCharactersFav = async (req, res) => {
  const { nickName } = req.query;
console.log(nickName);
 
  try {
    const charactersFavs = await findFavorites(nickName);
    res.status(200).json(charactersFavs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPostCharactersFav = async (req, res) => {
  const { name, species, image, nickName } = req.body;

  try {
    const result = await saveFavorites(name, species, image, nickName);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const handlerDeleteCharactersFav = async (req, res) => {
  const { id } = req.query;
  try {
    await deleteControler(id);
    res.status(200).send("favorito eliminado con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerDeleteCharactersFav,
  handlerPostCharactersFav,
  handlerGetCharactersFav,
};
