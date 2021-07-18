async function newFormHandler(event) {
  event.preventDefault();

  const article_title = document.querySelector('#article_name').value;
  const article_content = document.querySelector('#article_content').value;

  const response = await fetch(`/api/article`, {
    method: 'POST',
    body: JSON.stringify({
      article_title,
      article_content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add blog post');
  }
}

document
  .querySelector('.new-article-form')
  .addEventListener('submit', newFormHandler);
