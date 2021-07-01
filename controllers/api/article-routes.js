const router = require('express').Router();
const Article = require('../../models/Article');

// route to create/add an article
router.post('/', async (req, res) => {
  try {
    const articleData = await Article.create({
      article_title: req.body.article_title,
      article_content: req.body.article_content,
      article_author: req.body.article_author,
      article_createDate: req.body.article_createDate,
    });
    res.status(200).json(articleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// This action method is the Controller. It accepts input and sends data to the Model and the View. // *************
router.put('/:id', async (req, res) => {
  // Sending the data to the Model so that one article can be updated with new data in the database.
  try {
    const dish = await Article.update(
      {
        article_title: req.body.article_title,
        article_content: req.body.article_content,
        article_author: req.body.article_author,
        article_createDate: req.body.article_createDate,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // The updated data (article) is then sent back to handler that dispatched the fetch request.  // ***********
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
