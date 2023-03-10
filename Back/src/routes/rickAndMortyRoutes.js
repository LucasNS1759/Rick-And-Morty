const { Router } = require("express");
const {handlerCharacter,handlerCharacterId,handlerCharacterDetail,handlerGetCharactersFav,handlerPostCharactersFav,handlerDeleteCharactersFav} = require("../handlers/rickAndMortyHandler")


const rickAndMortyRoutes = Router();
rickAndMortyRoutes.get("/character/name?",handlerCharacter)
rickAndMortyRoutes.get("/character/:id",handlerCharacterId)
rickAndMortyRoutes.get("/detail/:detailId",handlerCharacterDetail)
rickAndMortyRoutes.get("/fav",handlerGetCharactersFav)
rickAndMortyRoutes.post("/fav",handlerPostCharactersFav)
rickAndMortyRoutes.delete("/fav/:id",handlerDeleteCharactersFav)


module.exports = rickAndMortyRoutes;
