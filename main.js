/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/dadata.js":
/*!**********************!*\
  !*** ./js/dadata.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./js/variables.js");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggestions */ "./js/suggestions.js");



const getSuggestions = (query) => {
  const options = {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token ' + _variables__WEBPACK_IMPORTED_MODULE_0__.token
    },
    body: JSON.stringify({query: query})
  };

  // To do: debounce
  fetch(_variables__WEBPACK_IMPORTED_MODULE_0__.url, options)
  .then(response => response.text())
  .then(result => (0,_suggestions__WEBPACK_IMPORTED_MODULE_1__.renderSuggestions)(JSON.parse(result)))
  .catch(error => console.log('error', error));
};

const fromInput = (evt) => {
  _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.direction = 'from';
  getSuggestions(evt.target.value);
};

const toInput = (evt) => {
  getSuggestions(evt.target.value);
};

_variables__WEBPACK_IMPORTED_MODULE_0__.from.addEventListener('input', fromInput);
_variables__WEBPACK_IMPORTED_MODULE_0__.to.addEventListener('input', toInput);

_variables__WEBPACK_IMPORTED_MODULE_0__.from.addEventListener('click', () => {
  _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.direction = 'from';
  // To do: scroll to
});
_variables__WEBPACK_IMPORTED_MODULE_0__.to.addEventListener('click', () => {
  _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.direction = 'to';
  // To do: scroll to
});

/***/ }),

/***/ "./js/suggestions.js":
/*!***************************!*\
  !*** ./js/suggestions.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSuggestions: () => (/* binding */ renderSuggestions)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./js/variables.js");


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
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.direction === 'from') {
    _variables__WEBPACK_IMPORTED_MODULE_0__.from.value = evt.target.textContent;
    suggestionsWrapper.innerHTML = '';
    return;
  }
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.direction === 'to') {
    _variables__WEBPACK_IMPORTED_MODULE_0__.to.value = evt.target.textContent;
    suggestionsWrapper.innerHTML = '';
    return;
  }
};

suggestionsWrapper.addEventListener('click', onSuggestionsWrapperClick);



/***/ }),

/***/ "./js/variables.js":
/*!*************************!*\
  !*** ./js/variables.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   to: () => (/* binding */ to),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   url: () => (/* binding */ url)
/* harmony export */ });
// Dadata
const url = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = '00b2faf5951eeec32658d0710687c19e2df10e4b';
// Search form
const form = document.querySelector('.js-search-form');
const from = form.querySelector('.js-from');
const to = form.querySelector('.js-to');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dadata */ "./js/dadata.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ1A7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUFLO0FBQ3ZDLEtBQUs7QUFDTCwwQkFBMEIsYUFBYTtBQUN2Qzs7QUFFQTtBQUNBLFFBQVEsMkNBQUc7QUFDWDtBQUNBLGtCQUFrQiwrREFBaUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNENBQUk7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBSTtBQUNKLDBDQUFFOztBQUVGLDRDQUFJO0FBQ0osRUFBRSw0Q0FBSTtBQUNOO0FBQ0EsQ0FBQztBQUNELDBDQUFFO0FBQ0YsRUFBRSw0Q0FBSTtBQUNOO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekMwQzs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLFdBQVc7QUFDbkcsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0Q0FBSTtBQUNWLElBQUksNENBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNLDRDQUFJO0FBQ1YsSUFBSSwwQ0FBRTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNPO0FBQ0E7QUFDUDtBQUNPO0FBQ0E7QUFDQTs7Ozs7O1VDTlA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWFyX3BvaW50Ly4vanMvZGFkYXRhLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9qcy9zdWdnZXN0aW9ucy5qcyIsIndlYnBhY2s6Ly9uZWFyX3BvaW50Ly4vanMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25lYXJfcG9pbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cmwsIHRva2VuLCBmb3JtLCBmcm9tLCB0byB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IHJlbmRlclN1Z2dlc3Rpb25zIH0gZnJvbSAnLi9zdWdnZXN0aW9ucyc7XG5cbmNvbnN0IGdldFN1Z2dlc3Rpb25zID0gKHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnVG9rZW4gJyArIHRva2VuXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7cXVlcnk6IHF1ZXJ5fSlcbiAgfTtcblxuICAvLyBUbyBkbzogZGVib3VuY2VcbiAgZmV0Y2godXJsLCBvcHRpb25zKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gIC50aGVuKHJlc3VsdCA9PiByZW5kZXJTdWdnZXN0aW9ucyhKU09OLnBhcnNlKHJlc3VsdCkpKVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKTtcbn07XG5cbmNvbnN0IGZyb21JbnB1dCA9IChldnQpID0+IHtcbiAgZm9ybS5kYXRhc2V0LmRpcmVjdGlvbiA9ICdmcm9tJztcbiAgZ2V0U3VnZ2VzdGlvbnMoZXZ0LnRhcmdldC52YWx1ZSk7XG59O1xuXG5jb25zdCB0b0lucHV0ID0gKGV2dCkgPT4ge1xuICBnZXRTdWdnZXN0aW9ucyhldnQudGFyZ2V0LnZhbHVlKTtcbn07XG5cbmZyb20uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmcm9tSW5wdXQpO1xudG8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0b0lucHV0KTtcblxuZnJvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9ybS5kYXRhc2V0LmRpcmVjdGlvbiA9ICdmcm9tJztcbiAgLy8gVG8gZG86IHNjcm9sbCB0b1xufSk7XG50by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9ybS5kYXRhc2V0LmRpcmVjdGlvbiA9ICd0byc7XG4gIC8vIFRvIGRvOiBzY3JvbGwgdG9cbn0pOyIsImltcG9ydCB7Zm9ybSwgZnJvbSwgdG99IGZyb20gJy4vdmFyaWFibGVzJztcblxuY29uc3Qgc3VnZ2VzdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN1Z2dlc3Rpb25zJyk7XG5cbmNvbnN0IHJlbmRlclN1Z2dlc3Rpb25zID0gKGRhdGEpID0+IHtcbiAgc3VnZ2VzdGlvbnNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICBkYXRhLnN1Z2dlc3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBzdWdnZXN0aW9uc1dyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGxpIGNsYXNzPVwic3VnZ2VzdGlvbnNfX2l0ZW1cIj4ke2l0ZW0udmFsdWV9PC9saT5gKTtcbiAgfSk7XG59O1xuXG5jb25zdCBvblN1Z2dlc3Rpb25zV3JhcHBlckNsaWNrID0gKGV2dCkgPT4ge1xuICBpZiAoIWV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWdnZXN0aW9uc19faXRlbScpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmb3JtLmRhdGFzZXQuZGlyZWN0aW9uID09PSAnZnJvbScpIHtcbiAgICBmcm9tLnZhbHVlID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBzdWdnZXN0aW9uc1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmb3JtLmRhdGFzZXQuZGlyZWN0aW9uID09PSAndG8nKSB7XG4gICAgdG8udmFsdWUgPSBldnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbnN1Z2dlc3Rpb25zV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uU3VnZ2VzdGlvbnNXcmFwcGVyQ2xpY2spO1xuXG5leHBvcnQgeyByZW5kZXJTdWdnZXN0aW9ucyB9OyIsIi8vIERhZGF0YVxuZXhwb3J0IGNvbnN0IHVybCA9ICdodHRwOi8vc3VnZ2VzdGlvbnMuZGFkYXRhLnJ1L3N1Z2dlc3Rpb25zL2FwaS80XzEvcnMvc3VnZ2VzdC9hZGRyZXNzJztcbmV4cG9ydCBjb25zdCB0b2tlbiA9ICcwMGIyZmFmNTk1MWVlZWMzMjY1OGQwNzEwNjg3YzE5ZTJkZjEwZTRiJztcbi8vIFNlYXJjaCBmb3JtXG5leHBvcnQgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtZm9ybScpO1xuZXhwb3J0IGNvbnN0IGZyb20gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1mcm9tJyk7XG5leHBvcnQgY29uc3QgdG8gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5qcy10bycpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9