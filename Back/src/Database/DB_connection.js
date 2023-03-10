require("dotenv").config();
const { Sequelize } = require("sequelize");
// const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME } = process.env;
const CharacterModel = require("./models/Character");
const FavoriteModel = require("./models/Favorite");

const DB_USER = "postgres";
const DB_PASSWORD = "38893461";
const DB_HOST = "localhost:5432";
const DB_NAME = "rickandmorty";

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
const {Character} = database.models

CharacterModel(database);
FavoriteModel(database);

module.exports = {
  ...database.models,
  database,
};
