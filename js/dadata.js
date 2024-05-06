import { url, token, form, from, to } from './variables';
import { renderSuggestions } from './suggestions';

const getSuggestions = (query) => {
  const options = {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token ' + token
    },
    body: JSON.stringify({query: query})
  };

  // To do: debounce
  fetch(url, options)
  .then(response => response.text())
  .then(result => renderSuggestions(JSON.parse(result)))
  .catch(error => console.log('error', error));
};

const fromInput = (evt) => {
  form.dataset.direction = 'from';
  getSuggestions(evt.target.value);
};

const toInput = (evt) => {
  getSuggestions(evt.target.value);
};

from.addEventListener('input', fromInput);
to.addEventListener('input', toInput);

from.addEventListener('click', () => {
  form.dataset.direction = 'from';
  // To do: scroll to
});
to.addEventListener('click', () => {
  form.dataset.direction = 'to';
  // To do: scroll to
});