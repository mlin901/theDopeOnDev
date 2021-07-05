const router = require('express').Router();
const userRoutes = require('./userRoutes');  
const articleRoutes = require('./article-routes');

router.use('/users', userRoutes);  
router.use('/article', articleRoutes);

module.exports = router;