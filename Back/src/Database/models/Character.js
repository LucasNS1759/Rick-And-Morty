const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Character", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      isUnique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Alive", "Dead", "unknown"),
      allowNull: false,
    },
    species: {
      type: DataTypes.ENUM(
        "Human",
        "Alien",
        "Humanoid",
        "Poopybuuhole",
        "Mythological Creature",
        "Animal",
        "Robot",
        "Cronenberg",
        "Disease",
        "unknown"
      ),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Male", "Female", "unknown", "Genderless"),
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
