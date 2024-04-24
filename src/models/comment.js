"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Post, {
        foreignKey: "postid",
      }),
        Comment.belongsTo(models.User, {
          foreignKey: "account",
        }),
        Comment.hasMany(models.Reply, {
          foreignKey: "reply",
        });
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
      account: DataTypes.INTEGER,
      postid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
