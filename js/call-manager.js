import IMask from 'imask';
import { callManagerForm, callManagerPhoneInput, maskOptions } from './variables';

const mask = IMask(callManagerPhoneInput, maskOptions);

const onCallManagerFormSubmit = (evt) => {
  evt.preventDefault();
  callManagerPhoneInput.value = '';
  alert('Спасибо за заявку! В ближайшее время наш менеджер свяжется с вами.');
};

callManagerForm.addEventListener('submit', onCallManagerFormSubmit);