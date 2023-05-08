const {Router} = require("express")
const {userGetHandler,userPostHandler,getUserByIdHandler} = require("../handlers/userGetHandler")


const userRoutes = Router()

userRoutes.get("/",userGetHandler)
userRoutes.get("/:id",getUserByIdHandler)
userRoutes.post("/",userPostHandler)


module.exports = userRoutes