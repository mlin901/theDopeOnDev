
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    console.log(`*****************************${id}`);

    const response = await fetch(`/api/article/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete article');
    }
  }
};

document
  .querySelector('#delete-article')
  .addEventListener('click', delButtonHandler);