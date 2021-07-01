const User = require('./User');
const Article = require('./Article');

// User.hasMany(Project, {   // ******** will need to add this stuff back in in one form or another
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Article };
