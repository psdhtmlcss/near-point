import { renderResults } from './suggestions';

// Dadata
const url = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = '00b2faf5951eeec32658d0710687c19e2df10e4b';
// Search form
const form = document.querySelector('.js-search-form');
const from = form.querySelector('.js-from');
const to = form.querySelector('.js-to');

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

  fetch(url, options)
  .then(response => response.text())
  .then(result => renderResults(JSON.parse(result)))
  .catch(error => console.log('error', error));
};

const fromInput = (evt) => {
  getSuggestions(evt.target.value);
};

const toInput = (evt) => {
  getSuggestions(evt.target.value);
};

from.addEventListener('input', fromInput);
to.addEventListener('input', toInput);