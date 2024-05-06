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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./js/form.js");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results */ "./js/results.js");





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
  (0,_results__WEBPACK_IMPORTED_MODULE_3__.hideResults)();
  // To do: scroll to
});
_variables__WEBPACK_IMPORTED_MODULE_0__.to.addEventListener('click', () => {
  _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.direction = 'to';
  (0,_results__WEBPACK_IMPORTED_MODULE_3__.hideResults)();
  // To do: scroll to
});

_variables__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener('submit', _form__WEBPACK_IMPORTED_MODULE_2__.onFormSubmit);

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onFormSubmit: () => (/* binding */ onFormSubmit)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./js/variables.js");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results */ "./js/results.js");



const isFormValid = () => {
  return _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.from === _variables__WEBPACK_IMPORTED_MODULE_0__.from.value && _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.from !== '' && _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.to === _variables__WEBPACK_IMPORTED_MODULE_0__.to.value && _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.to !== '';
};

const disableForm = () => {
  _variables__WEBPACK_IMPORTED_MODULE_0__.from.disabled = true;
  _variables__WEBPACK_IMPORTED_MODULE_0__.to.disabled = true;
  _variables__WEBPACK_IMPORTED_MODULE_0__.searchIcon.style.display = 'none';
  _variables__WEBPACK_IMPORTED_MODULE_0__.loader.style.display = 'inline-block';
};

const enableForm = () => {
  _variables__WEBPACK_IMPORTED_MODULE_0__.from.disabled = false;
  _variables__WEBPACK_IMPORTED_MODULE_0__.to.disabled = false;
  _variables__WEBPACK_IMPORTED_MODULE_0__.searchIcon.style.display = 'inline';
  _variables__WEBPACK_IMPORTED_MODULE_0__.loader.style.display = 'none';
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (!isFormValid()) {
    alert('Выберите город из списка');
  } else {
    disableForm();
    setTimeout(() => {
      (0,_results__WEBPACK_IMPORTED_MODULE_1__.showResults)();
      enableForm();
    }, 1000);
  }
};

/***/ }),

/***/ "./js/results.js":
/*!***********************!*\
  !*** ./js/results.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideResults: () => (/* binding */ hideResults),
/* harmony export */   showResults: () => (/* binding */ showResults)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./js/variables.js");


const showResults = () => {
  _variables__WEBPACK_IMPORTED_MODULE_0__.results.style.display = 'flex';
  _variables__WEBPACK_IMPORTED_MODULE_0__.searchImage.style.display = 'none';
};

const hideResults = () => {
  _variables__WEBPACK_IMPORTED_MODULE_0__.results.style.display = 'none';
  _variables__WEBPACK_IMPORTED_MODULE_0__.searchImage.style.display = 'block';
};

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
    _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.from = evt.target.textContent;
    suggestionsWrapper.innerHTML = '';
    return;
  }
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.direction === 'to') {
    _variables__WEBPACK_IMPORTED_MODULE_0__.to.value = evt.target.textContent;
    _variables__WEBPACK_IMPORTED_MODULE_0__.form.dataset.to = evt.target.textContent;
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
/* harmony export */   loader: () => (/* binding */ loader),
/* harmony export */   results: () => (/* binding */ results),
/* harmony export */   searchIcon: () => (/* binding */ searchIcon),
/* harmony export */   searchImage: () => (/* binding */ searchImage),
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
const loader = form.querySelector('.js-loader');
const searchIcon = form.querySelector('.js-search-icon');
// Search results
const results = document.querySelector('.js-search-results');
const searchImage = document.querySelector('.js-search-image');


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDUDtBQUNaO0FBQ0U7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUFLO0FBQ3ZDLEtBQUs7QUFDTCwwQkFBMEIsYUFBYTtBQUN2Qzs7QUFFQTtBQUNBLFFBQVEsMkNBQUc7QUFDWDtBQUNBLGtCQUFrQiwrREFBaUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNENBQUk7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBSTtBQUNKLDBDQUFFOztBQUVGLDRDQUFJO0FBQ0osRUFBRSw0Q0FBSTtBQUNOLEVBQUUscURBQVc7QUFDYjtBQUNBLENBQUM7QUFDRCwwQ0FBRTtBQUNGLEVBQUUsNENBQUk7QUFDTixFQUFFLHFEQUFXO0FBQ2I7QUFDQSxDQUFDOztBQUVELDRDQUFJLDRCQUE0QiwrQ0FBWTs7Ozs7Ozs7Ozs7Ozs7OztBQy9DcUI7QUFDekI7O0FBRXhDO0FBQ0EsU0FBUyw0Q0FBSSxrQkFBa0IsNENBQUksVUFBVSw0Q0FBSSx3QkFBd0IsNENBQUksZ0JBQWdCLDBDQUFFLFVBQVUsNENBQUk7QUFDN0c7O0FBRUE7QUFDQSxFQUFFLDRDQUFJO0FBQ04sRUFBRSwwQ0FBRTtBQUNKLEVBQUUsa0RBQVU7QUFDWixFQUFFLDhDQUFNO0FBQ1I7O0FBRUE7QUFDQSxFQUFFLDRDQUFJO0FBQ04sRUFBRSwwQ0FBRTtBQUNKLEVBQUUsa0RBQVU7QUFDWixFQUFFLDhDQUFNO0FBQ1I7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU0scURBQVc7QUFDakI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDbUQ7O0FBRTVDO0FBQ1AsRUFBRSwrQ0FBTztBQUNULEVBQUUsbURBQVc7QUFDYjs7QUFFTztBQUNQLEVBQUUsK0NBQU87QUFDVCxFQUFFLG1EQUFXO0FBQ2I7Ozs7Ozs7Ozs7Ozs7OztBQ1YyQzs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLFdBQVc7QUFDbkcsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0Q0FBSTtBQUNWLElBQUksNENBQUk7QUFDUixJQUFJLDRDQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0Q0FBSTtBQUNWLElBQUksMENBQUU7QUFDTixJQUFJLDRDQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNPO0FBQ0E7QUFDUDtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNPO0FBQ0E7Ozs7Ozs7VUNYUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL25lYXJfcG9pbnQvLi9qcy9kYWRhdGEuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL2pzL3Jlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL2pzL3N1Z2dlc3Rpb25zLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9qcy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZWFyX3BvaW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZWFyX3BvaW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVybCwgdG9rZW4sIGZvcm0sIGZyb20sIHRvIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgcmVuZGVyU3VnZ2VzdGlvbnMgfSBmcm9tICcuL3N1Z2dlc3Rpb25zJztcbmltcG9ydCB7IG9uRm9ybVN1Ym1pdCB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBoaWRlUmVzdWx0cyB9IGZyb20gJy4vcmVzdWx0cyc7XG5cbmNvbnN0IGdldFN1Z2dlc3Rpb25zID0gKHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnVG9rZW4gJyArIHRva2VuXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7cXVlcnk6IHF1ZXJ5fSlcbiAgfTtcblxuICAvLyBUbyBkbzogZGVib3VuY2VcbiAgZmV0Y2godXJsLCBvcHRpb25zKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gIC50aGVuKHJlc3VsdCA9PiByZW5kZXJTdWdnZXN0aW9ucyhKU09OLnBhcnNlKHJlc3VsdCkpKVxuICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKTtcbn07XG5cbmNvbnN0IGZyb21JbnB1dCA9IChldnQpID0+IHtcbiAgZm9ybS5kYXRhc2V0LmRpcmVjdGlvbiA9ICdmcm9tJztcbiAgZ2V0U3VnZ2VzdGlvbnMoZXZ0LnRhcmdldC52YWx1ZSk7XG59O1xuXG5jb25zdCB0b0lucHV0ID0gKGV2dCkgPT4ge1xuICBnZXRTdWdnZXN0aW9ucyhldnQudGFyZ2V0LnZhbHVlKTtcbn07XG5cbmZyb20uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmcm9tSW5wdXQpO1xudG8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0b0lucHV0KTtcblxuZnJvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9ybS5kYXRhc2V0LmRpcmVjdGlvbiA9ICdmcm9tJztcbiAgaGlkZVJlc3VsdHMoKTtcbiAgLy8gVG8gZG86IHNjcm9sbCB0b1xufSk7XG50by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9ybS5kYXRhc2V0LmRpcmVjdGlvbiA9ICd0byc7XG4gIGhpZGVSZXN1bHRzKCk7XG4gIC8vIFRvIGRvOiBzY3JvbGwgdG9cbn0pO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uRm9ybVN1Ym1pdCk7IiwiaW1wb3J0IHsgZm9ybSwgZnJvbSwgdG8sIGxvYWRlciwgc2VhcmNoSWNvbiB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IHNob3dSZXN1bHRzIH0gZnJvbSAnLi9yZXN1bHRzJztcblxuY29uc3QgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gIHJldHVybiBmb3JtLmRhdGFzZXQuZnJvbSA9PT0gZnJvbS52YWx1ZSAmJiBmb3JtLmRhdGFzZXQuZnJvbSAhPT0gJycgJiYgZm9ybS5kYXRhc2V0LnRvID09PSB0by52YWx1ZSAmJiBmb3JtLmRhdGFzZXQudG8gIT09ICcnO1xufTtcblxuY29uc3QgZGlzYWJsZUZvcm0gPSAoKSA9PiB7XG4gIGZyb20uZGlzYWJsZWQgPSB0cnVlO1xuICB0by5kaXNhYmxlZCA9IHRydWU7XG4gIHNlYXJjaEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbn07XG5cbmNvbnN0IGVuYWJsZUZvcm0gPSAoKSA9PiB7XG4gIGZyb20uZGlzYWJsZWQgPSBmYWxzZTtcbiAgdG8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgc2VhcmNoSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChldnQpID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICghaXNGb3JtVmFsaWQoKSkge1xuICAgIGFsZXJ0KCfQktGL0LHQtdGA0LjRgtC1INCz0L7RgNC+0LQg0LjQtyDRgdC/0LjRgdC60LAnKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNhYmxlRm9ybSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd1Jlc3VsdHMoKTtcbiAgICAgIGVuYWJsZUZvcm0oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufTsiLCJpbXBvcnQgeyByZXN1bHRzLCBzZWFyY2hJbWFnZSB9IGZyb20gJy4vdmFyaWFibGVzJztcblxuZXhwb3J0IGNvbnN0IHNob3dSZXN1bHRzID0gKCkgPT4ge1xuICByZXN1bHRzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIHNlYXJjaEltYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5leHBvcnQgY29uc3QgaGlkZVJlc3VsdHMgPSAoKSA9PiB7XG4gIHJlc3VsdHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgc2VhcmNoSW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59OyIsImltcG9ydCB7Zm9ybSwgZnJvbSwgdG99IGZyb20gJy4vdmFyaWFibGVzJztcblxuY29uc3Qgc3VnZ2VzdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN1Z2dlc3Rpb25zJyk7XG5cbmNvbnN0IHJlbmRlclN1Z2dlc3Rpb25zID0gKGRhdGEpID0+IHtcbiAgc3VnZ2VzdGlvbnNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICBkYXRhLnN1Z2dlc3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBzdWdnZXN0aW9uc1dyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGxpIGNsYXNzPVwic3VnZ2VzdGlvbnNfX2l0ZW1cIj4ke2l0ZW0udmFsdWV9PC9saT5gKTtcbiAgfSk7XG59O1xuXG5jb25zdCBvblN1Z2dlc3Rpb25zV3JhcHBlckNsaWNrID0gKGV2dCkgPT4ge1xuICBpZiAoIWV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWdnZXN0aW9uc19faXRlbScpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmb3JtLmRhdGFzZXQuZGlyZWN0aW9uID09PSAnZnJvbScpIHtcbiAgICBmcm9tLnZhbHVlID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBmb3JtLmRhdGFzZXQuZnJvbSA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgc3VnZ2VzdGlvbnNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZm9ybS5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gJ3RvJykge1xuICAgIHRvLnZhbHVlID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBmb3JtLmRhdGFzZXQudG8gPSBldnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbnN1Z2dlc3Rpb25zV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uU3VnZ2VzdGlvbnNXcmFwcGVyQ2xpY2spO1xuXG5leHBvcnQgeyByZW5kZXJTdWdnZXN0aW9ucyB9OyIsIi8vIERhZGF0YVxuZXhwb3J0IGNvbnN0IHVybCA9ICdodHRwOi8vc3VnZ2VzdGlvbnMuZGFkYXRhLnJ1L3N1Z2dlc3Rpb25zL2FwaS80XzEvcnMvc3VnZ2VzdC9hZGRyZXNzJztcbmV4cG9ydCBjb25zdCB0b2tlbiA9ICcwMGIyZmFmNTk1MWVlZWMzMjY1OGQwNzEwNjg3YzE5ZTJkZjEwZTRiJztcbi8vIFNlYXJjaCBmb3JtXG5leHBvcnQgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtZm9ybScpO1xuZXhwb3J0IGNvbnN0IGZyb20gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1mcm9tJyk7XG5leHBvcnQgY29uc3QgdG8gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5qcy10bycpO1xuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmpzLWxvYWRlcicpO1xuZXhwb3J0IGNvbnN0IHNlYXJjaEljb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtaWNvbicpO1xuLy8gU2VhcmNoIHJlc3VsdHNcbmV4cG9ydCBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlYXJjaC1yZXN1bHRzJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2VhcmNoLWltYWdlJyk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==