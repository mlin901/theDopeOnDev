console.log("Lazy cats"); //****************** */

async function editFormHandler(event) {
  event.preventDefault();
  const article_title = document.querySelector('#article_title').value;
  const article_content = document.querySelector('#article_content').value;
  const article_createdate = document.querySelector('#create-date').innerHTML;
  
  // What will the value of has_nuts be if the box in the form is checked? 
  // The value of has_nuts will be true if the box is checked. 
  // What do we call this kind of operator?
  // We call this a ternary operator. It begins with a condition followed by a question mark and two code blocks separated by a :.
  // const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // What part of our application will handle this 'put' request?
  // The Controller will handle this 'put' request.

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

  // What happens if the response is ok?
  // If the response is ok, that means that the article was updated successfully. 
  if (response.ok) {
    document.location.replace(`/article/${id}`);
  } else {
    alert('Failed to edit article');
  }
}

document
  .querySelector('.edit-article-form')
  .addEventListener('submit', editFormHandler);
