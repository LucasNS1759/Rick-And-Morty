const { User } = require("../Database/DB_connection");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const loginUserControler = async (nickName, email, password) => {
  let user = await User.findOne({ where: { nickName, email } });
  if (!user) {
    return { message: "Usuario no encontrado" };
  }
  if (!(await user.validPassword(password))) {
    return { message: "Contraseña incorrecta" };
  }
  // Generar y enviar el token JWT
  const token = jwt.sign({ id: user.id, nickName: user.nickName }, SECRET_KEY);

  return {
    success: true,
    data: {
      userId: user.id,
      nickName: user.nickName,
      token: token,
    },
  };
};

module.exports = loginUserControler;
