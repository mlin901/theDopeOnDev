const router = require('express').Router();
const Article = require('../models/Article');

// route to get all articles
router.get('/', async (req, res) => {
    const articleData = await Article.findAll().catch((err) => { 
        res.json(err);
      });
        const articles = articleData.map((article) => article.get({ plain: true }));
        res.render('all', { articles });
      });
  
  // route to get one article
  router.get('/article/:id', async (req, res) => {
    try{ 
        const articleData = await Article.findByPk(req.params.id);
        if(!articleData) {
            res.status(404).json({message: 'No article with this id!'});
            return;
        }
        const article = articleData.get({ plain: true });
        res.render('article', article);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;
