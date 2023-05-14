const getCharacterDetail = require("../controllesrs/getCharacterDetail");
const getAllCharacter = require("../controllesrs/getAllCharacter");
const getCharacterByName = require("../controllesrs/getCharacterByName");
const { saveApiData } = require("../controllesrs/saveApiData.js");
const characterControllerPost = require("../controllesrs/characterControllerPost");
const charactersCreatedController = require("../controllesrs/charactersCreatedController");
const characterUpdateController = require("../controllesrs/characterUpdateController.js");
const uploadImage = require("../utils/cloudinary.js");

const handlerCharacter = async (req, res) => {
  let querys = req.query;
  let params = req.query;
  let { page = 0, pageSize = 8 } = req.query;

  try {
    const response = await getAllCharacter(querys, page, pageSize, params);

    res.status(200).json(response);
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
    //  res.status(500)
    //  return next(error.message)
  }
};

const handlerSaveCharacters = async (req, res) => {
  try {
    const result = await saveApiData();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPostCharacter = async (req, res) => {
  const { name, status, species, gender, origin, location, userId } = req.body;
  const image = await uploadImage(req.body.image);
  try {
    const response = await characterControllerPost(
      name,
      status,
      species,
      gender,
      origin,
      location,
      image,
      userId
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetCharactersCreated = async (req, res) => {
  const { userId } = req.query;

  try {
    const characters = await charactersCreatedController(userId);
    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPutCharactersCreated = async (req, res) => {
  let { name, status, gender, origin, species, location,id,nickName,created } = req.body;
  // console.log(name, status, gender, origin, species, location,image,id,nickName,created);

  const image = await uploadImage(req.body.image);

  try {
    const characterUpdate = await characterUpdateController(name, status, gender, origin, species, location,image,id,nickName,created );
    res.status(200).json(characterUpdate);
  } catch (error) {
  console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const handlerDeleteCharactersCreated = async (req, res) => {};

module.exports = {
  handlerCharacter,
  handlerCharacterDetail,
  handlerSaveCharacters,
  handlerPostCharacter,
  handlerGetCharactersCreated,
  handlerPutCharactersCreated,
  handlerDeleteCharactersCreated,
};
