const { Router } = require("express");
const {
  handlerCharacter,
  handlerCharacterDetail,
  handlerSaveCharacters,
  handlerPostCharacter
} = require("../handlers/rickAndMortyHandler");

const rickAndMortyRoutes = Router();
rickAndMortyRoutes.get("/saveCharacters", handlerSaveCharacters);
rickAndMortyRoutes.get("/characters?", handlerCharacter);
rickAndMortyRoutes.get("/detail/:detailId", handlerCharacterDetail);
rickAndMortyRoutes.post("/characters",handlerPostCharacter)

module.exports = rickAndMortyRoutes;
