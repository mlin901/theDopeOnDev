async function editFormHandler(event) {
  event.preventDefault();
  const article_title = document.querySelector('#article_title').value;
  const article_content = document.querySelector('#article_content').value;
  const article_createdate = document.querySelector('#create-date').innerHTML;
  
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/article/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      article_title,
      article_content,
      article_createDate: article_createdate,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/article/${id}`);
  } else {
    alert('Failed to edit article');
  }
}

document
  .querySelector('.edit-article-form')
  .addEventListener('submit', editFormHandler);
