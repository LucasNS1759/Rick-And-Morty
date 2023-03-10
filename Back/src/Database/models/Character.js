const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Character", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.CITEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Alive", "Dead", "unknown"),
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
