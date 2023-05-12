const {Router} = require("express")
const {userGetHandler,userPostHandler,loginUserHandler} = require("../handlers/userGetHandler")
const {validateJWT} = require("../middleWare/verificarToken")


const userRoutes = Router()

userRoutes.get("/",userGetHandler)
userRoutes.post("/login",loginUserHandler)
userRoutes.post("/",userPostHandler)


module.exports = userRoutes