
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    if (confirm('Are you sure you want to delete this article?')) {
      console.log('Article deleted.');
      const response = await fetch(`/api/article/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete article');
      }
    } 
  } else {
    console.log('The article was not deleted.');
  }
};

document
  .querySelector('#delete-article')
  .addEventListener('click', delButtonHandler);