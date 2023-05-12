const getCharacterDetail = require("../controllesrs/getCharacterDetail");
const getAllCharacter = require("../controllesrs/getAllCharacter");
const getCharacterByName = require("../controllesrs/getCharacterByName");
const { saveApiData } = require("../controllesrs/saveApiData.js");
const characterControllerPost = require("../controllesrs/characterControllerPost")
const uploadImage = require("../utils/cloudinary.js");

const handlerCharacter = async (req, res) => {
  let querys = req.query;
  let params =req.query;
  let { page = 0, pageSize = 8 } = req.query;

  try {
    const response = await getAllCharacter(querys, page, pageSize,params);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerCharacterDetail = async (req, res, next) => {
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
  const { name, status, species, gender, origin, location,userId } = req.body;
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
    res.status(200).json(response)
  } catch (error) {
   res.status(400).json({error:error.message})
  }
};

module.exports = {
  handlerCharacter,
  handlerCharacterDetail,
  handlerSaveCharacters,
  handlerPostCharacter,
};
