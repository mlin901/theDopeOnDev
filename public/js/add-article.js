async function newFormHandler(event) {
  event.preventDefault();

  const article_title = document.querySelector('#article_name').value;
  const article_content = document.querySelector('#article_content').value;
  const article_author = document.querySelector('#article_author').value;
  const article_createDate = document.querySelector('#article_createDate').value;

  const response = await fetch(`/api/article`, {
    method: 'POST',
    body: JSON.stringify({
      article_title,
      article_content,
      article_author,
      article_createDate,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add blog post');
  }
}
// console.log('********');
// console.log(document);

document
  .querySelector('.new-article-form')
  .addEventListener('submit', newFormHandler);
