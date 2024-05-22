import { callManagerForm } from './variables';

const couirerButtons = Array.from(document.querySelectorAll('.card-result__call-courier'));
const pointButtons = Array.from(document.querySelectorAll('.search-results__button'));

const onButtonClick = (evt) => {
  evt.preventDefault();
  callManagerForm.scrollIntoView({
    behavior: 'smooth'
  });
};

couirerButtons.forEach((button) => {
  button.addEventListener('click', onButtonClick);
})

pointButtons.forEach((button) => {
  button.addEventListener('click', onButtonClick);
})

