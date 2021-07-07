const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

// route to create/add a comment
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_content: req.body.comment_content,
      comment_createDate: req.body.comment_createDate,
      article_id: req.body.article_id, // ******  
      user_name: req.body.user_name,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// This action method is the Controller. It accepts input and sends data to the Model and the View. // *************
router.put('/:id', withAuth, async (req, res) => {
  // Sending the data to the Model so that one article can be updated with new data in the database.
  try {
    const comment = await Comment.update(
      {
        comment_content: req.body.comment_content,
        // article_content: req.body.article_content,
        // user_id: req.body.user_id,      
        // article_createDate: req.body.article_createDate,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // The updated data (comment) is then sent back to handler that dispatched the fetch request.  // ***********
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
