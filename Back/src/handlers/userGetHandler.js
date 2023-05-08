const userPostController = require("../controllesrs/userPostController")
const getAllUsersControllers = require("../controllesrs/getAllUsersControllers")





const userGetHandler = async (req, res) => {
 try {
    let response = await getAllUsersControllers()
    res.status(200).json(response)
 } catch (error) {
    res.status(400).json({error:error.message})
 }
};

const userPostHandler = async (req, res) => {
  const { nickName, email, password } = req.body;

  try {
  let response = await userPostController(nickName,email,password)
  res.status(200).json(response)
  } catch (error) {
  res.status(400).json(error.message)
  }
};

const getUserByIdHandler = async(req,res)=>{

}

module.exports = { userGetHandler, userPostHandler,getUserByIdHandler };
