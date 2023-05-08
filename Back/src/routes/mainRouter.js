const {Router} = require("express")
const rickAndMortyRoutes = require("./rickAndMortyRoutes.js")
const userRoutes = require("./userRoutes.js")
const favoritesRoutes = require("./FavoritesRoutes.js")

const mainRouter = Router()
console.log();
mainRouter.use("/rickandmorty", rickAndMortyRoutes)
mainRouter.use("/user", userRoutes)
mainRouter.use("/favorites",favoritesRoutes )

module.exports = mainRouter