import IMask from 'imask';
import { callManagerPhoneInput, callManagerButton, maskOptions } from './variables';

const mask = IMask(callManagerPhoneInput, maskOptions);

mask.on('accept', () => {
  callManagerButton.disabled = true;
});

mask.on('complete', () => {
  callManagerButton.disabled = false;
});