import { results, searchImage } from './variables';

export const showResults = () => {
  results.style.display = 'flex';
  searchImage.style.display = 'none';
};

export const hideResults = () => {
  results.style.display = 'none';
  searchImage.style.display = 'block';
};