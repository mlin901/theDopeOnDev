const router = require('express').Router();
// const Comment = require('../../models/Comment');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create/add a comment
router.post('/', withAuth, async (req, res) => {
  console.log('Things should be better in all regards!!!')
  console.log('- - - - -     - - - - -     - - - - - ');
  console.log(req.body);
  try {
    const commentData = await Comment.create({
      comment_content: req.body.comment_content,
      article_id: req.body.article_id, 
      user_id: req.session.user_id,
    });
    console.log('.... ..... ...... ...... .... .... ');
    console.log(`user id: ${req.session.user_id}`);
    res.status(200).json(commentData);
  } catch (err) {
    console.log(`value---->`);
    console.log(req.body.article_id);
    console.log('error below =======');
    console.log(err);
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
