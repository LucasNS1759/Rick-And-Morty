const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Gender",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
