const {Router} = require("express")
const rickAndMortyRoutes = require("./rickAndMortyRoutes.js")

const mainRouter = Router()

mainRouter.use("/rickandmorty", rickAndMortyRoutes)

module.exports = mainRouter