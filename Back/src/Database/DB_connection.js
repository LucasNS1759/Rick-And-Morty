require("dotenv").config();
const { Sequelize } = require("sequelize");
// const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME } = process.env;
const CharacterModel = require("./models/Character");
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/user");

const {DB_USER,DB_PASSWORD,DB_HOST ,DB_NAME} = process.env 

//no me anda la verga de .env

// EJERCICIO 01
// A la instancia de Sequelize le falta la URL de conexión.
// Recuerda pasarle la información de tu archivo '.env'.

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

// EJERCICIO 03
// Debajo de este comentario puedes ejecutar la función de los modelos.

CharacterModel(database);
FavoriteModel(database);
UserModel(database);


const { Character } = database.models;
const { Favorite } = database.models;
const { User } = database.models;

Favorite.belongsToMany(
  User,
  { through: "user_favorite" },
  { timestamps: false }
);

User.belongsToMany(
  Favorite,
  { through: "user_favorite" },
  { timestamps: false }
);


module.exports = {
  ...database.models,
  database,
};
