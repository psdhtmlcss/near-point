import IMask from 'imask';
import { callManagerForm, callManagerPhoneInput, maskOptions } from './variables';

const mask = IMask(callManagerPhoneInput, maskOptions);

// const onCallManagerFormSubmit = (evt) => {
//   evt.preventDefault();
//   callManagerForm.submit();
// };

// callManagerForm.addEventListener('submit', onCallManagerFormSubmit);