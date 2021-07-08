const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}

Comment.init(   // *****Need to add foreign key stuff
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_content: {
      type: DataTypes.STRING,  // ******Is STRING good enough?
      allowNull: true,
    },
    comment_createDate: {    // ******Needs some sort of date format
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    article_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'article',
        key: 'id',
      },
    },
    user_id: {                 
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
