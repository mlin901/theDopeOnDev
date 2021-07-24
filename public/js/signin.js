// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   console.log('yyyyyyyyyyyyyyyyy');
//   console.log(event);

//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in.');
//     }
//   }
// };

const signupFormHandler = async (event) => {
  event.preventDefault();

  // console.log('vvvvvvvvvvvvvvvvv');
  // console.log(event);

  const name = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // console.log('>>>>>>>>');
  // console.log(name);
  // console.log(email);
  // console.log(password);

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Signed up!')
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

// console.log('wwwwwwwwwwwwwww');
// console.log(document);
// console.log('********sign-up form');
// console.log(document.querySelector('.signup-form'))

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
