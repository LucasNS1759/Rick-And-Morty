const { User } = require("../Database/DB_connection.js");

const userPostController = async (nickName, email, password) => {
console.log(nickName, email, password);

  let response = await User.create({nickName,email,password});
  if (response) {
    return { ok: "usuario creado con exito" };
  } else {
    return {
      error: `el usuario con nickName ${nickName} o email ${email} ya exite por favor cree otro distinto`,
    };
  }
};

module.exports = userPostController;
