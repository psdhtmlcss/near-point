import { form, from, to, loader, searchIcon } from './variables';
import { showResults } from './results';

const isFormValid = () => {
  return form.dataset.from === from.value && form.dataset.from !== '' && form.dataset.to === to.value && form.dataset.to !== '';
};

const disableForm = () => {
  from.disabled = true;
  to.disabled = true;
  searchIcon.style.display = 'none';
  loader.style.display = 'inline-block';
};

const enableForm = () => {
  from.disabled = false;
  to.disabled = false;
  searchIcon.style.display = 'inline';
  loader.style.display = 'none';
};

export const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (!isFormValid()) {
    alert('Выберите город из списка');
  } else {
    disableForm();
    setTimeout(() => {
      showResults();
      enableForm();
    }, 1000);
  }
};