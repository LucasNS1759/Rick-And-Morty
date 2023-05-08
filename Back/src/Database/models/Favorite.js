const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Favorite",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        isUnique: true,
        allowNull:false,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
