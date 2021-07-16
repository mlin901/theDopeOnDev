// const session = require("express-session");

async function newCommentFormHandler(event) {
  event.preventDefault();

  // const comment_article_id = document.querySelector('#article_id').value;
  const comment_article_id = document.querySelector('#article_id').innerHTML;
  const comment_content = document.querySelector('#comment_content').value;
  // const user_id = document.querySelector('#user_id').value;                   
  // const comment_createDate = document.querySelector('#comment_createDate').value;
 
  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({
      comment_content,
      article_id: comment_article_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/article/${comment_article_id}`);
  } else {
    alert('Failed to add blog post');
  }
}
// console.log('********');
// console.log(document);

document
  .querySelector('.new-comment-form')   
  .addEventListener('submit', newCommentFormHandler);
