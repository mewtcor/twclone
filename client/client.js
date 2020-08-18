console.log('Hello World!');

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/mews';

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  // grab contents
  const mew = {
    name,
    content
  };
  console.log(mew)
  form.style.display = 'none'; // hide form
  loadingElement.style.display = ''; // display loading gif

  // send data(json) to the server
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(mew),
    headers: {
      'content-type': 'application/json'
    }
  });
});