import {form, from, to} from './variables';

const suggestionsWrapper = document.querySelector('.js-suggestions');

const renderSuggestions = (data) => {
  suggestionsWrapper.innerHTML = '';
  data.suggestions.forEach((item) => {
    suggestionsWrapper.insertAdjacentHTML('beforeend', `<li class="suggestions__item">${item.value}</li>`);
  });
};

const onSuggestionsWrapperClick = (evt) => {
  if (!evt.target.classList.contains('suggestions__item')) {
    return;
  }
  if (form.dataset.direction === 'from') {
    from.value = evt.target.textContent;
    suggestionsWrapper.innerHTML = '';
    return;
  }
  if (form.dataset.direction === 'to') {
    to.value = evt.target.textContent;
    suggestionsWrapper.innerHTML = '';
    return;
  }
};

suggestionsWrapper.addEventListener('click', onSuggestionsWrapperClick);

export { renderSuggestions };