const router = require('express').Router();
const userRoutes = require('./userRoutes');  
const articleRoutes = require('./article-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);  
router.use('/article', articleRoutes);
router.use('/comment', commentRoutes);

module.exports = router;