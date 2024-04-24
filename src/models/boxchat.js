"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Boxchat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Boxchat.init(
    {
      avatar1: DataTypes.STRING,
      avatar2: DataTypes.STRING,
      host: DataTypes.STRING,
      isGroupchat: DataTypes.BOOLEAN,
      member: DataTypes.STRING,
      groupava: DataTypes.STRING,
      groupname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Boxchat",
    }
  );
  return Boxchat;
};
