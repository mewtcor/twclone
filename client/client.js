console.log('Hello World!');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('form was submitted');
});