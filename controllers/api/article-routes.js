const router = require('express').Router();
const Article = require('../../models/Article');
const withAuth = require('../../utils/auth');

// route to create/add an article
router.post('/', withAuth, async (req, res) => {
  try {
    const articleData = await Article.create({
      article_title: req.body.article_title,
      article_content: req.body.article_content,
      user_id: req.session.user_id,   
    });
    res.status(200).json(articleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const article = await Article.update({
        article_title: req.body.article_title,
        article_content: req.body.article_content,
        user_id: req.session.user_id,           
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const articleData = await Article.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!articleData) {
      res.status(404).json({ message: 'No article found with this id!' });
      return;
    }

    res.status(200).json(articleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
