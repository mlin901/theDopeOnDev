const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// From ucd-sac-fsf-pt-03-2021-u-c/14-MVC/01-Activities/28-Stu_Mini-Project
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
    // article_author: {      
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    article_createDate: {    // ******Needs some sort of date format
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
    modelName: 'article',
  }
);

module.exports = Article;
