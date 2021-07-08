// const router = require('express').Router();
// const Article = require('../models/Article');
const router = require('express').Router();
const { Article, User } = require('../models');
const withAuth = require('../utils/auth');

// route to get all articles      // ~~~~~~~~~~~~~~~~This is what the following replaced
// router.get('/', async (req, res) => {
//   const articleData = await Article.findAll().catch((err) => { 
//     res.json(err);
//   });
//     const articles = articleData.map((article) => article.get({ plain: true }));
//     res.render('all', { articles });
// });

router.get('/', async (req, res) => {
  try {
    // Get all articles and JOIN with user data
    const articleData = await Article.findAll(
      {                                          // ~~~~~~~~~~~~Need to figure out how to add this back in
      include: [    // &&&&&&&&&&&&&&&&& begin
        {
          model: User,
          attributes: ['id'],  
        },
        // {
        //   model: Comment,
        //   attributes: ['id'],
        // }
      ],    // &&&&&&&&&&&&&&&& end
    }
    );
    const commentData = await Comment.findAll(); // &&&&&&&&&&&&&&&&&

    // Serialize data so the template can read it
    const articles = articleData.map((article) => article.get({ plain: true }));
    const comments = commentData.map((comment) => comment.get({ plain: true })); // &&&&&&&&&&&&&&&&&

    // Pass serialized data and session flag into template
    res.render('all', { 
      articles,
      comments,  // &&&&&&&&&&&&&&&&& 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const articleData = await Article.findAll({
      where: {
        user_id: req.session.user_id,
      },
  });

    // Serialize data so the template can read it
    const articles = articleData.map((article) => article.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      articles, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});






// route to get one article
  router.get('/article/:id', withAuth, async (req, res) => {
    try{ 
        const articleData = await Article.findByPk(req.params.id);
        if(!articleData) {
            res.status(404).json({message: 'No article with this ID!'});
            return;
        }
        const article = articleData.get({ plain: true });
        res.render('article', { article });
      } catch (err) {
          res.status(500).json(err);
      };     
  });

  router.get('/create', withAuth, (req, res) => {
    // if (!req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('create');
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/article/edit/:id', withAuth, async (req, res) => {
    try{ 
        const articleData = await Article.findByPk(req.params.id);
        if(!articleData) {
            res.status(404).json({message: 'No article with this id!'});
            return;
        }
        const article = articleData.get({ plain: true });
        res.render('editArticle', article);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;
