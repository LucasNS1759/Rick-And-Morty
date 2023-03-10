const getCharacterId = require("../controllesrs/getCharacterId.js");
const getCharacterDetail = require("../controllesrs/getCharacterDetail");
const getAllCharacter = require("../controllesrs/getAllCharacter")
const getCharacterByName = require("../controllesrs/getCharacterByName")

const handlerCharacter =async (req,res)=>{
let {name} = req.query;

try {
  const resolve= name? await getCharacterByName(name) : await getAllCharacter()
  res.status(200).json(resolve)
} catch (error) {
  res.status(400).json({error: error.message})
}
}


const handlerCharacterId = async (req, res) => {
  const { id } = req.params;
  try {
    const characterId = await getCharacterId(id);
    res.status(200).json(characterId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerCharacterDetail = async (req, res) => {
  const { detailId } = req.params;
  try {
    const characterDetail = await getCharacterDetail(detailId);
    res.status(200).json(characterDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetCharactersFav = async (req, res) => {};

const handlerPostCharactersFav = async (req, res) => {};

const handlerDeleteCharactersFav = async (req, res) => {};

module.exports = {
  handlerCharacter,
  handlerCharacterId,
  handlerCharacterDetail,
  handlerGetCharactersFav,
  handlerPostCharactersFav,
  handlerDeleteCharactersFav
};
