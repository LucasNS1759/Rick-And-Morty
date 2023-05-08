const { Router } = require("express");
const {
  handlerGetCharactersFav,
  handlerPostCharactersFav,
  handlerDeleteCharactersFav,
} = require("../handlers/favoriteHandler");

const favoritesRoutes = Router();

favoritesRoutes.get("/?", handlerGetCharactersFav);
favoritesRoutes.post("/", handlerPostCharactersFav);
favoritesRoutes.delete("/", handlerDeleteCharactersFav);

module.exports = favoritesRoutes;
