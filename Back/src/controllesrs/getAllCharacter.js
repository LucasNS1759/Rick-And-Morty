const {Character} = require("../Database/DB_connection.js")


const getAllCharacter =async () =>{
   let allCharacters = await Character.findAll()
   return allCharacters
}
module.exports = getAllCharacter