// const router = require('express').Router();
// const Article = require('../models/Article');
const router = require('express').Router();
const { Article, User, Comment } = require('../models');
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
      {                                         
      include: [  
        {
          model: User,
          attributes: ['id'],  
        },
      ], 
    }
    );
    // Serialize data so the template can read it
    const articles = articleData.map((article) => article.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('all', { 
      articles,
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
        // const articleData = await Article.findByPk(req.params.id);
      const articleData = await Article.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: [
              'id',
              'comment_content',
              'comment_createDate',
              'article_id',
              'user_id',
            ],
          }, 
          {
            model: User,
            attributes: [
              'id',
              'name',
              'email',
            ]
          },
        ],
      });

      if(!articleData) {
          res.status(404).json({message: 'No article with this ID!'});
          return;
      }

      const article = articleData.get({ plain: true });
      
      // console.log('::::::::');
      // console.log(article);
      // console.log(';;;;;;;;');
      // console.log(article.user.name);

      let articleAuthor = false;
      if (req.session.user_id === article.user_id) {
        articleAuthor = true;
      };
      res.render('article', { 
        article, 
        articleAuthor, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };     
  });

  router.get('/create', withAuth, (req, res) => {
    // if (!req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('create', {logged_in: req.session.logged_in});
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });


  router.get('/addcomment/:id', withAuth, withAuth, (req, res) => {
    // if (!req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
    const article = {articleId: req.params.id};
    res.render('createcomment', {
      article, 
      logged_in: req.session.logged_in
    });
  });


  router.get('/article/edit/:id', withAuth, async (req, res) => {
    try{ 
        const articleData = await Article.findByPk(req.params.id);
        if(!articleData) {
            res.status(404).json({message: 'No article with this id!'});
            return;
        }
        const article = articleData.get({ plain: true });
        res.render('editArticle', {
          article, 
          logged_in: req.session.logged_in
        });
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
