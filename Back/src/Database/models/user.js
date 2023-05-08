const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
      type :DataTypes.STRING,
      allowNull:false,
      unique:true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      google: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
      
    },
    { timestamps: false }
  );
};
