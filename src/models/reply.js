"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reply.belongsTo(models.Comment, {
        foreignKey: "reply",
      }),
        Reply.belongsTo(models.User, {
          foreignKey: "account",
        });
    }
  }
  Reply.init(
    {
      content: DataTypes.STRING,
      account: DataTypes.INTEGER,
      reply: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reply",
    }
  );
  return Reply;
};
