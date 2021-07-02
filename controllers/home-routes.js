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

// GET one article
// router.get('/article/:id', withAuth, async (req, res) => {
//   try {
//     const dbArticleData = await Article.findByPk(req.params.id, {
//       include: [
//         {
//           model: Article,
//           attributes: [
//             'id',
//             'article_title',
//             'article_content',
//             'article_author',
//             'article_createDate',
//           ],
//         },
//       ],
//     });

//     const article = dbArticleData.get({ plain: true });
//     res.render('article', { article, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// *******
// route to get one article
  router.get('/article/:id', async (req, res) => {
    try{ 
        const articleData = await Article.findByPk(req.params.id);
        if(!articleData) {
            res.status(404).json({message: 'No article with this id!'});
            return;
        }
        const article = articleData.get({ plain: true });
        res.render('article', { article });
      } catch (err) {
          res.status(500).json(err);
      };     
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;
