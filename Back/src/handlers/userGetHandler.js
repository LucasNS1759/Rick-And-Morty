const userPostController = require("../controllesrs/userPostController");
const getAllUsersControllers = require("../controllesrs/getAllUsersControllers");
const loginUserControler = require("../controllesrs/loginUserControler");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const userGetHandler = async (req, res) => {
  try {
    let response = await getAllUsersControllers();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUserHandler = async (req, res) => {
  const { nickName, email, password } = req.body;

  try {
    let response = await loginUserControler(nickName, email, password);
    // console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userPostHandler = async (req, res) => {
  const { nickName, email, password } = req.body;

  try {
    let response = await userPostController(nickName, email, password);
    if (!response) {
      throw new Error({ error: "algo salio mal" });
    }
    token = jwt.sign(
      { userId: response.id, email: response.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      success: true,
      data: {
        userId: response.id,
        email: response.email,
        token: token,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { userGetHandler, userPostHandler, loginUserHandler };
