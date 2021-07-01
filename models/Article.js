const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Article extends Model {}

Article.init(   // *****Need to add foreign key stuff
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    article_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article_content: {
      type: DataTypes.STRING,  // ******Is STRING good enough?
      allowNull: true,
    },
    article_author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article_createDate: {    // ******Needs some sort of date format
      type: DataTypes.STRING,
      allowNull: false,    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'article',
  }
);

module.exports = Article;
