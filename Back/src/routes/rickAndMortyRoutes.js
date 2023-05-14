const { Router } = require("express");
const {
  handlerCharacter,
  handlerCharacterDetail,
  handlerSaveCharacters,
  handlerPostCharacter,
  handlerGetCharactersCreated,
  handlerPutCharactersCreated,
  handlerDeleteCharactersCreated
} = require("../handlers/rickAndMortyHandler");

const rickAndMortyRoutes = Router();
rickAndMortyRoutes.get("/saveCharacters", handlerSaveCharacters);
rickAndMortyRoutes.get("/characters?", handlerCharacter);
rickAndMortyRoutes.get("/detail/:detailId", handlerCharacterDetail);
rickAndMortyRoutes.post("/characters",handlerPostCharacter)
rickAndMortyRoutes.get("/charactersCreated", handlerGetCharactersCreated)
rickAndMortyRoutes.put("/charactersCreated", handlerPutCharactersCreated)
rickAndMortyRoutes.delete("/charactersCreated", handlerDeleteCharactersCreated)

module.exports = rickAndMortyRoutes;
