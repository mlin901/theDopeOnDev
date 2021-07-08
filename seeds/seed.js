// Adapted from ucd-sac-fsf-pt-03-2021-u-c/14-MVC/01-Activities/28-Stu_Mini-Project

const sequelize = require('../config/connection');
const { User, Article, Comment } = require('../models');

const userData = require('./userData.json');
const articleData = require('./articleData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const article of articleData) {   // *************** Can't this be removed?
    await Article.create({
      ...article,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData);


  process.exit(0);
};

seedDatabase();
