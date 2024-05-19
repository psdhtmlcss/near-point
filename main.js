/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/call-manager.js":
/*!****************************!*\
  !*** ./js/call-manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./js/variables.js");



const mask = (0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(_variables__WEBPACK_IMPORTED_MODULE_1__.callManagerPhoneInput, _variables__WEBPACK_IMPORTED_MODULE_1__.maskOptions);

const onCallManagerFormSubmit = (evt) => {
  evt.preventDefault();
  _variables__WEBPACK_IMPORTED_MODULE_1__.callManagerPhoneInput.value = '';
  alert('Спасибо за заявку! В ближайшее время наш менеджер свяжется с вами.');
};

_variables__WEBPACK_IMPORTED_MODULE_1__.callManagerForm.addEventListener('submit', onCallManagerFormSubmit);

/***/ }),

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
/* harmony export */   callManagerForm: () => (/* binding */ callManagerForm),
/* harmony export */   callManagerPhoneInput: () => (/* binding */ callManagerPhoneInput),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   loader: () => (/* binding */ loader),
/* harmony export */   maskOptions: () => (/* binding */ maskOptions),
/* harmony export */   results: () => (/* binding */ results),
/* harmony export */   searchIcon: () => (/* binding */ searchIcon),
/* harmony export */   searchImage: () => (/* binding */ searchImage),
/* harmony export */   to: () => (/* binding */ to),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   url: () => (/* binding */ url)
/* harmony export */ });
// Dadata
const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
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
// Call manager
const callManagerForm = document.querySelector('.js-call-manager-form');
const callManagerPhoneInput = callManagerForm.querySelector('.js-call-manager-phone-input');
// Mask options
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};


/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLContenteditableMaskElement)
/* harmony export */ });
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");




class HTMLContenteditableMaskElement extends _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    const anchorOffset = selection && selection.anchorOffset;
    const focusOffset = selection && selection.focusOffset;
    if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
      return anchorOffset;
    }
    return focusOffset;
  }

  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    const anchorOffset = selection && selection.anchorOffset;
    const focusOffset = selection && selection.focusOffset;
    if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
      return anchorOffset;
    }
    return focusOffset;
  }

  /** Sets HTMLElement selection */
  _unsafeSelect(start, end) {
    if (!this.rootElement.createRange) return;
    const range = this.rootElement.createRange();
    range.setStart(this.input.firstChild || this.input, start);
    range.setEnd(this.input.lastChild || this.input, end);
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  /** HTMLElement value */
  get value() {
    return this.input.textContent || '';
  }
  set value(value) {
    this.input.textContent = value;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-input-mask-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-input-mask-element.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLInputMaskElement)
/* harmony export */ });
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");




/** Bridge between InputElement and {@link Masked} */
class HTMLInputMaskElement extends _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** InputElement to use mask on */

  constructor(input) {
    super(input);
    this.input = input;
  }

  /** Returns InputElement selection start */
  get _unsafeSelectionStart() {
    return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
  }

  /** Returns InputElement selection end */
  get _unsafeSelectionEnd() {
    return this.input.selectionEnd;
  }

  /** Sets InputElement selection */
  _unsafeSelect(start, end) {
    this.input.setSelectionRange(start, end);
  }
  get value() {
    return this.input.value;
  }
  set value(value) {
    this.input.value = value;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLMaskElement = _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"];




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLMaskElement)
/* harmony export */ });
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



const KEY_Z = 90;
const KEY_Y = 89;

/** Bridge between HTMLElement and {@link Masked} */
class HTMLMaskElement extends _mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** HTMLElement to use mask on */

  constructor(input) {
    super();
    this.input = input;
    this._onKeydown = this._onKeydown.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onBeforeinput = this._onBeforeinput.bind(this);
    this._onCompositionEnd = this._onCompositionEnd.bind(this);
  }
  get rootElement() {
    var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
    return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
  }

  /** Is element in focus */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }

  /** Binds HTMLElement events to mask internal events */
  bindEvents(handlers) {
    this.input.addEventListener('keydown', this._onKeydown);
    this.input.addEventListener('input', this._onInput);
    this.input.addEventListener('beforeinput', this._onBeforeinput);
    this.input.addEventListener('compositionend', this._onCompositionEnd);
    this.input.addEventListener('drop', handlers.drop);
    this.input.addEventListener('click', handlers.click);
    this.input.addEventListener('focus', handlers.focus);
    this.input.addEventListener('blur', handlers.commit);
    this._handlers = handlers;
  }
  _onKeydown(e) {
    if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
      e.preventDefault();
      return this._handlers.redo(e);
    }
    if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      return this._handlers.undo(e);
    }
    if (!e.isComposing) this._handlers.selectionChange(e);
  }
  _onBeforeinput(e) {
    if (e.inputType === 'historyUndo' && this._handlers.undo) {
      e.preventDefault();
      return this._handlers.undo(e);
    }
    if (e.inputType === 'historyRedo' && this._handlers.redo) {
      e.preventDefault();
      return this._handlers.redo(e);
    }
  }
  _onCompositionEnd(e) {
    this._handlers.input(e);
  }
  _onInput(e) {
    if (!e.isComposing) this._handlers.input(e);
  }

  /** Unbinds HTMLElement events to mask internal events */
  unbindEvents() {
    this.input.removeEventListener('keydown', this._onKeydown);
    this.input.removeEventListener('input', this._onInput);
    this.input.removeEventListener('beforeinput', this._onBeforeinput);
    this.input.removeEventListener('compositionend', this._onCompositionEnd);
    this.input.removeEventListener('drop', this._handlers.drop);
    this.input.removeEventListener('click', this._handlers.click);
    this.input.removeEventListener('focus', this._handlers.focus);
    this.input.removeEventListener('blur', this._handlers.commit);
    this._handlers = {};
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLMaskElement = HTMLMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input-history.js":
/*!**********************************************************!*\
  !*** ./node_modules/imask/esm/controls/input-history.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputHistory)
/* harmony export */ });
class InputHistory {
  constructor() {
    this.states = [];
    this.currentIndex = 0;
  }
  get currentState() {
    return this.states[this.currentIndex];
  }
  get isEmpty() {
    return this.states.length === 0;
  }
  push(state) {
    // if current index points before the last element then remove the future
    if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
    this.states.push(state);
    if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
    this.currentIndex = this.states.length - 1;
  }
  go(steps) {
    this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
    return this.currentState;
  }
  undo() {
    return this.go(-1);
  }
  redo() {
    return this.go(+1);
  }
  clear() {
    this.states.length = 0;
    this.currentIndex = 0;
  }
}
InputHistory.MAX_LENGTH = 100;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputMask)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-input-mask-element.js */ "./node_modules/imask/esm/controls/html-input-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _input_history_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-history.js */ "./node_modules/imask/esm/controls/input-history.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");










/** Listens to element events and controls changes between element and {@link Masked} */
class InputMask {
  /**
    View element
  */

  /** Internal {@link Masked} model */

  constructor(el, opts) {
    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"](el) : new _html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_4__["default"](el);
    this.masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._rawInputValue = '';
    this.history = new _input_history_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onUndo = this._onUndo.bind(this);
    this._onRedo = this._onRedo.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
    this._bindEvents();

    // refresh
    this._onChange();
  }
  maskEquals(mask) {
    var _this$masked;
    return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
  }

  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(mask) {
    if (this.maskEquals(mask)) return;
    if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].Masked) && this.masked.constructor === (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__.maskedClass)(mask)) {
      // TODO "any" no idea
      this.masked.updateOptions({
        mask
      });
      return;
    }
    const masked = mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].Masked ? mask : (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      mask
    });
    masked.unmaskedValue = this.masked.unmaskedValue;
    this.masked = masked;
  }

  /** Raw value */
  get value() {
    return this._value;
  }
  set value(str) {
    if (this.value === str) return;
    this.masked.value = str;
    this.updateControl('auto');
  }

  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(str) {
    if (this.unmaskedValue === str) return;
    this.masked.unmaskedValue = str;
    this.updateControl('auto');
  }

  /** Raw input value */
  get rawInputValue() {
    return this._rawInputValue;
  }
  set rawInputValue(str) {
    if (this.rawInputValue === str) return;
    this.masked.rawInputValue = str;
    this.updateControl();
    this.alignCursor();
  }

  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(val) {
    if (this.masked.typedValueEquals(val)) return;
    this.masked.typedValue = val;
    this.updateControl('auto');
  }

  /** Display value */
  get displayValue() {
    return this.masked.displayValue;
  }

  /** Starts listening to element events */
  _bindEvents() {
    this.el.bindEvents({
      selectionChange: this._saveSelection,
      input: this._onInput,
      drop: this._onDrop,
      click: this._onClick,
      focus: this._onFocus,
      commit: this._onChange,
      undo: this._onUndo,
      redo: this._onRedo
    });
  }

  /** Stops listening to element events */
  _unbindEvents() {
    if (this.el) this.el.unbindEvents();
  }

  /** Fires custom event */
  _fireEvent(ev, e) {
    const listeners = this._listeners[ev];
    if (!listeners) return;
    listeners.forEach(l => l(e));
  }

  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }

  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(pos) {
    if (!this.el || !this.el.isActive) return;
    this.el.select(pos, pos);
    this._saveSelection();
  }

  /** Stores current selection */
  _saveSelection( /* ev */
  ) {
    if (this.displayValue !== this.el.value) {
      console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
    }
    this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }

  /** Syncronizes model value from view */
  updateValue() {
    this.masked.value = this.el.value;
    this._value = this.masked.value;
    this._unmaskedValue = this.masked.unmaskedValue;
    this._rawInputValue = this.masked.rawInputValue;
  }

  /** Syncronizes view from model value, fires change events */
  updateControl(cursorPos) {
    const newUnmaskedValue = this.masked.unmaskedValue;
    const newValue = this.masked.value;
    const newRawInputValue = this.masked.rawInputValue;
    const newDisplayValue = this.displayValue;
    const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
    this._unmaskedValue = newUnmaskedValue;
    this._value = newValue;
    this._rawInputValue = newRawInputValue;
    if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
    if (cursorPos === 'auto') this.alignCursor();else if (cursorPos != null) this.cursorPos = cursorPos;
    if (isChanged) this._fireChangeEvents();
    if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
      unmaskedValue: newUnmaskedValue,
      selection: {
        start: this.selectionStart,
        end: this.cursorPos
      }
    });
  }

  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(opts) {
    const {
      mask,
      ...restOpts
    } = opts; // TODO types, yes, mask is optional

    const updateMask = !this.maskEquals(mask);
    const updateOpts = this.masked.optionsIsChanged(restOpts);
    if (updateMask) this.mask = mask;
    if (updateOpts) this.masked.updateOptions(restOpts); // TODO

    if (updateMask || updateOpts) this.updateControl();
  }

  /** Updates cursor */
  updateCursor(cursorPos) {
    if (cursorPos == null) return;
    this.cursorPos = cursorPos;

    // also queue change cursor for mobile browsers
    this._delayUpdateCursor(cursorPos);
  }

  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(cursorPos) {
    this._abortUpdateCursor();
    this._changingCursorPos = cursorPos;
    this._cursorChanging = setTimeout(() => {
      if (!this.el) return; // if was destroyed
      this.cursorPos = this._changingCursorPos;
      this._abortUpdateCursor();
    }, 10);
  }

  /** Fires custom events */
  _fireChangeEvents() {
    this._fireEvent('accept', this._inputEvent);
    if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
  }

  /** Aborts delayed cursor update */
  _abortUpdateCursor() {
    if (this._cursorChanging) {
      clearTimeout(this._cursorChanging);
      delete this._cursorChanging;
    }
  }

  /** Aligns cursor to nearest available position */
  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT));
  }

  /** Aligns cursor only if selection is empty */
  alignCursorFriendly() {
    if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
    this.alignCursor();
  }

  /** Adds listener on custom event */
  on(ev, handler) {
    if (!this._listeners[ev]) this._listeners[ev] = [];
    this._listeners[ev].push(handler);
    return this;
  }

  /** Removes custom event listener */
  off(ev, handler) {
    if (!this._listeners[ev]) return this;
    if (!handler) {
      delete this._listeners[ev];
      return this;
    }
    const hIndex = this._listeners[ev].indexOf(handler);
    if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
    return this;
  }

  /** Handles view input event */
  _onInput(e) {
    this._inputEvent = e;
    this._abortUpdateCursor();
    const details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    });
    const oldRawValue = this.masked.rawInputValue;
    const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
      input: true,
      raw: true
    }).offset;

    // force align in remove direction only if no input chars were removed
    // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
    const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE;
    let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
    if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
    this.updateControl(cursorPos);
    delete this._inputEvent;
  }

  /** Handles view change event and commits model value */
  _onChange() {
    if (this.displayValue !== this.el.value) this.updateValue();
    this.masked.doCommit();
    this.updateControl();
    this._saveSelection();
  }

  /** Handles view drop event, prevents by default */
  _onDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  /** Restore last selection on focus */
  _onFocus(ev) {
    this.alignCursorFriendly();
  }

  /** Restore last selection on focus */
  _onClick(ev) {
    this.alignCursorFriendly();
  }
  _onUndo() {
    this._applyHistoryState(this.history.undo());
  }
  _onRedo() {
    this._applyHistoryState(this.history.redo());
  }
  _applyHistoryState(state) {
    if (!state) return;
    this._historyChanging = true;
    this.unmaskedValue = state.unmaskedValue;
    this.el.select(state.selection.start, state.selection.end);
    this._saveSelection();
    this._historyChanging = false;
  }

  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents();
    this._listeners.length = 0;
    delete this.el;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].InputMask = InputMask;




/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskElement)
/* harmony export */ });
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");


/**  Generic element API to use with mask */
class MaskElement {
  /** */

  /** */

  /** */

  /** Safely returns selection start */
  get selectionStart() {
    let start;
    try {
      start = this._unsafeSelectionStart;
    } catch {}
    return start != null ? start : this.value.length;
  }

  /** Safely returns selection end */
  get selectionEnd() {
    let end;
    try {
      end = this._unsafeSelectionEnd;
    } catch {}
    return end != null ? end : this.value.length;
  }

  /** Safely sets element selection */
  select(start, end) {
    if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
    try {
      this._unsafeSelect(start, end);
    } catch {}
  }

  /** */
  get isActive() {
    return false;
  }
  /** */

  /** */

  /** */
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_0__["default"].MaskElement = MaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionDetails)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");


/** Provides details of changing input */
class ActionDetails {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */

  constructor(opts) {
    Object.assign(this, opts);

    // double check if left part was changed (autofilling, other non-standard input triggers)
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
    if (this.insertedCount) {
      // double check right part
      while (this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end)) {
        if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end;else ++this.cursorPos;
      }
    }
  }

  /** Start changing position */
  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }

  /** Inserted symbols count */
  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }

  /** Inserted symbols */
  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }

  /** Removed symbols count */
  get removedCount() {
    // Math.max for opposite operation
    return Math.max(this.oldSelection.end - this.startChangePos ||
    // for Delete
    this.oldValue.length - this.value.length, 0);
  }

  /** Removed symbols */
  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }

  /** Unchanged head symbols */
  get head() {
    return this.value.substring(0, this.startChangePos);
  }

  /** Unchanged tail symbols */
  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }

  /** Remove direction */
  get removeDirection() {
    if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE;

    // align right if delete at right
    return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
    // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT;
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeDetails)
/* harmony export */ });
/* harmony import */ var _holder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holder.js */ "./node_modules/imask/esm/core/holder.js");


/** Provides details of changing model value */
class ChangeDetails {
  /** Inserted symbols */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */

  /** Can skip chars */

  static normalize(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  }
  constructor(details) {
    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      tailShift: 0,
      skip: false
    }, details);
  }

  /** Aggregate changes */
  aggregate(details) {
    this.inserted += details.inserted;
    this.rawInserted += details.rawInserted;
    this.tailShift += details.tailShift;
    this.skip = this.skip || details.skip;
    return this;
  }

  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
  get consumed() {
    return Boolean(this.rawInserted) || this.skip;
  }
  equals(details) {
    return this.inserted === details.inserted && this.tailShift === details.tailShift && this.rawInserted === details.rawInserted && this.skip === details.skip;
  }
}
_holder_js__WEBPACK_IMPORTED_MODULE_0__["default"].ChangeDetails = ChangeDetails;




/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContinuousTailDetails)
/* harmony export */ });
/** Provides details of continuous extracted tail */
class ContinuousTailDetails {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */

  constructor(value, from, stop) {
    if (value === void 0) {
      value = '';
    }
    if (from === void 0) {
      from = 0;
    }
    this.value = value;
    this.from = from;
    this.stop = stop;
  }
  toString() {
    return this.value;
  }
  extend(tail) {
    this.value += String(tail);
  }
  appendTo(masked) {
    return masked.append(this.toString(), {
      tail: true
    }).aggregate(masked._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(state) {
    Object.assign(this, state);
  }
  unshift(beforePos) {
    if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
    const shiftChar = this.value[0];
    this.value = this.value.slice(1);
    return shiftChar;
  }
  shift() {
    if (!this.value.length) return '';
    const shiftChar = this.value[this.value.length - 1];
    this.value = this.value.slice(0, -1);
    return shiftChar;
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IMask)
/* harmony export */ });
/** Applies mask on element */
function IMask(el, opts) {
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}




/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIRECTION: () => (/* binding */ DIRECTION),
/* harmony export */   escapeRegExp: () => (/* binding */ escapeRegExp),
/* harmony export */   forceDirection: () => (/* binding */ forceDirection),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   objectIncludes: () => (/* binding */ objectIncludes),
/* harmony export */   pick: () => (/* binding */ pick)
/* harmony export */ });
/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

/** Checks if value is object */
function isObject(obj) {
  var _obj$constructor;
  return typeof obj === 'object' && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === 'Object';
}
function pick(obj, keys) {
  if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
  return Object.entries(obj).reduce((acc, _ref) => {
    let [k, v] = _ref;
    if (keys(v, k)) acc[k] = v;
    return acc;
  }, {});
}

/** Direction */
const DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};

/** Direction */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;
    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;
    default:
      return direction;
  }
}

/** Escapes regular expression control chars */
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
}

// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
  if (a === b) return true;
  const arrA = Array.isArray(a),
    arrB = Array.isArray(b);
  let i;
  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
    return true;
  }
  if (arrA != arrB) return false;
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const dateA = a instanceof Date,
      dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    const regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    const keys = Object.keys(a);
    // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }
  return false;
}

/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeDetails: () => (/* reexport safe */ _core_change_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   ChunksTailDetails: () => (/* reexport safe */ _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   DIRECTION: () => (/* reexport safe */ _core_utils_js__WEBPACK_IMPORTED_MODULE_7__.DIRECTION),
/* harmony export */   HTMLContenteditableMaskElement: () => (/* reexport safe */ _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   HTMLInputMaskElement: () => (/* reexport safe */ _controls_html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   HTMLMaskElement: () => (/* reexport safe */ _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   InputMask: () => (/* reexport safe */ _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   MaskElement: () => (/* reexport safe */ _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Masked: () => (/* reexport safe */ _masked_base_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   MaskedDate: () => (/* reexport safe */ _masked_date_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   MaskedDynamic: () => (/* reexport safe */ _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   MaskedEnum: () => (/* reexport safe */ _masked_enum_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   MaskedFunction: () => (/* reexport safe */ _masked_function_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   MaskedNumber: () => (/* reexport safe */ _masked_number_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   MaskedPattern: () => (/* reexport safe */ _masked_pattern_js__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   MaskedRange: () => (/* reexport safe */ _masked_range_js__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   MaskedRegExp: () => (/* reexport safe */ _masked_regexp_js__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   PIPE_TYPE: () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.PIPE_TYPE),
/* harmony export */   PatternFixedDefinition: () => (/* reexport safe */ _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   PatternInputDefinition: () => (/* reexport safe */ _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   RepeatBlock: () => (/* reexport safe */ _masked_repeat_js__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   createMask: () => (/* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   createPipe: () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.createPipe),
/* harmony export */   "default": () => (/* reexport safe */ _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   forceDirection: () => (/* reexport safe */ _core_utils_js__WEBPACK_IMPORTED_MODULE_7__.forceDirection),
/* harmony export */   normalizeOpts: () => (/* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__.normalizeOpts),
/* harmony export */   pipe: () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.pipe)
/* harmony export */ });
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _controls_html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/html-input-mask-element.js */ "./node_modules/imask/esm/controls/html-input-mask-element.js");
/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_repeat_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/repeat.js */ "./node_modules/imask/esm/masked/repeat.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _controls_input_history_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./controls/input-history.js */ "./node_modules/imask/esm/controls/input-history.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");




























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch {}




/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Masked)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





/** Append flags */

/** Extract flags */

// see https://github.com/microsoft/TypeScript/issues/6223

/** Provides common masking stuff */
class Masked {
  /** */

  /** */

  /** Transforms value before mask processing */

  /** Transforms each char before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing at the end of editing */

  /** Format typed value to string */

  /** Parse string to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    this._value = '';
    this._update({
      ...Masked.DEFAULTS,
      ...opts
    });
    this._initialized = true;
  }

  /** Sets and applies new options */
  updateOptions(opts) {
    if (!this.optionsIsChanged(opts)) return;
    this.withValueRefresh(this._update.bind(this, opts));
  }

  /** Sets new options */
  _update(opts) {
    Object.assign(this, opts);
  }

  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(state) {
    this._value = state._value;
  }

  /** Resets value */
  reset() {
    this._value = '';
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.resolve(value, {
      input: true
    });
  }

  /** Resolve new value */
  resolve(value, flags) {
    if (flags === void 0) {
      flags = {
        input: true
      };
    }
    this.reset();
    this.append(value, flags, '');
    this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(value) {
    this.resolve(value, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(value) {
    if (this.format) {
      this.value = this.format(value, this);
    } else {
      this.unmaskedValue = String(value);
    }
  }

  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: true
    });
  }
  set rawInputValue(value) {
    this.resolve(value, {
      raw: true
    });
  }
  get displayValue() {
    return this.value;
  }
  get isComplete() {
    return true;
  }
  get isFilled() {
    return this.isComplete;
  }

  /** Finds nearest input position in direction */
  nearestInputPos(cursorPos, direction) {
    return cursorPos;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return Math.min(this.displayValue.length, toPos - fromPos);
  }

  /** Extracts value in range considering flags */
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return this.displayValue.slice(fromPos, toPos);
  }

  /** Extracts tail in range */
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.extractInput(fromPos, toPos), fromPos);
  }

  /** Appends tail */
  appendTail(tail) {
    if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](String(tail));
    return tail.appendTo(this);
  }

  /** Appends char */
  _appendCharRaw(ch, flags) {
    if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._value += ch;
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      inserted: ch,
      rawInserted: ch
    });
  }

  /** Appends char */
  _appendChar(ch, flags, checkTail) {
    if (flags === void 0) {
      flags = {};
    }
    const consistentState = this.state;
    let details;
    [ch, details] = this.doPrepareChar(ch, flags);
    if (ch) {
      details = details.aggregate(this._appendCharRaw(ch, flags));

      // TODO handle `skip`?

      // try `autofix` lookahead
      if (!details.rawInserted && this.autofix === 'pad') {
        const noFixState = this.state;
        this.state = consistentState;
        let fixDetails = this.pad(flags);
        const chDetails = this._appendCharRaw(ch, flags);
        fixDetails = fixDetails.aggregate(chDetails);

        // if fix was applied or
        // if details are equal use skip restoring state optimization
        if (chDetails.rawInserted || fixDetails.equals(details)) {
          details = fixDetails;
        } else {
          this.state = noFixState;
        }
      }
    }
    if (details.inserted) {
      let consistentTail;
      let appended = this.doValidate(flags) !== false;
      if (appended && checkTail != null) {
        // validation ok, check tail
        const beforeTailState = this.state;
        if (this.overwrite === true) {
          consistentTail = checkTail.state;
          for (let i = 0; i < details.rawInserted.length; ++i) {
            checkTail.unshift(this.displayValue.length - details.tailShift);
          }
        }
        let tailDetails = this.appendTail(checkTail);
        appended = tailDetails.rawInserted.length === checkTail.toString().length;

        // not ok, try shift
        if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
          this.state = beforeTailState;
          consistentTail = checkTail.state;
          for (let i = 0; i < details.rawInserted.length; ++i) {
            checkTail.shift();
          }
          tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted.length === checkTail.toString().length;
        }

        // if ok, rollback state after tail
        if (appended && tailDetails.inserted) this.state = beforeTailState;
      }

      // revert all if something went wrong
      if (!appended) {
        details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.state = consistentState;
        if (checkTail && consistentTail) checkTail.state = consistentTail;
      }
    }
    return details;
  }

  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Appends symbols considering flags */
  append(str, flags, tail) {
    if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(str)) throw new Error('value should be string');
    const checkTail = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](String(tail)) : tail;
    if (flags != null && flags.tail) flags._beforeTailState = this.state;
    let details;
    [str, details] = this.doPrepare(str, flags);
    for (let ci = 0; ci < str.length; ++ci) {
      const d = this._appendChar(str[ci], flags, checkTail);
      if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
      details.aggregate(d);
    }
    if ((this.eager === true || this.eager === 'append') && flags != null && flags.input && str) {
      details.aggregate(this._appendEager());
    }

    // append tail but aggregate only tailShift
    if (checkTail != null) {
      details.tailShift += this.appendTail(checkTail).tailShift;
      // TODO it's a good idea to clear state after appending ends
      // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
      // this._resetBeforeTailState();
    }
    return details;
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Calls function and reapplies current value */
  withValueRefresh(fn) {
    if (this._refreshing || !this._initialized) return fn();
    this._refreshing = true;
    const rawInput = this.rawInputValue;
    const value = this.value;
    const ret = fn();
    this.rawInputValue = rawInput;
    // append lost trailing chars at the end
    if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
      this.append(value.slice(this.displayValue.length), {}, '');
      this.doCommit();
    }
    delete this._refreshing;
    return ret;
  }
  runIsolated(fn) {
    if (this._isolated || !this._initialized) return fn(this);
    this._isolated = true;
    const state = this.state;
    const ret = fn(this);
    this.state = state;
    delete this._isolated;
    return ret;
  }
  doSkipInvalid(ch, flags, checkTail) {
    return Boolean(this.skipInvalid);
  }

  /** Prepares string before mask processing */
  doPrepare(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    return _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(this.prepare ? this.prepare(str, this, flags) : str);
  }

  /** Prepares each char before mask processing */
  doPrepareChar(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    return _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
  }

  /** Validates if value is acceptable */
  doValidate(flags) {
    return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
  }

  /** Does additional processing at the end of editing */
  doCommit() {
    if (this.commit) this.commit(this.value, this);
  }
  splice(start, deleteCount, inserted, removeDirection, flags) {
    if (inserted === void 0) {
      inserted = '';
    }
    if (removeDirection === void 0) {
      removeDirection = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    if (flags === void 0) {
      flags = {
        input: true
      };
    }
    const tailPos = start + deleteCount;
    const tail = this.extractTail(tailPos);
    const eagerRemove = this.eager === true || this.eager === 'remove';
    let oldRawValue;
    if (eagerRemove) {
      removeDirection = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.forceDirection)(removeDirection);
      oldRawValue = this.extractInput(0, tailPos, {
        raw: true
      });
    }
    let startChangePos = start;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // if it is just deletion without insertion
    if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE) {
      startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE : removeDirection);

      // adjust tailShift if start was aligned
      details.tailShift = startChangePos - start;
    }
    details.aggregate(this.remove(startChangePos));
    if (eagerRemove && removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE && oldRawValue === this.rawInputValue) {
      if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) {
        let valLength;
        while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
          details.aggregate(new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            tailShift: -1
          })).aggregate(this.remove(valLength - 1));
        }
      } else if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) {
        tail.unshift();
      }
    }
    return details.aggregate(this.append(inserted, flags, tail));
  }
  maskEquals(mask) {
    return this.mask === mask;
  }
  optionsIsChanged(opts) {
    return !(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.objectIncludes)(this, opts);
  }
  typedValueEquals(value) {
    const tval = this.typedValue;
    return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
  }
  pad(flags) {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}
Masked.DEFAULTS = {
  skipInvalid: true
};
Masked.EMPTY_VALUES = [undefined, null, ''];
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].Masked = Masked;




/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDate)
/* harmony export */ });
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Date mask */
class MaskedDate extends _pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static extractPatternOptions(opts) {
    const {
      mask,
      pattern,
      ...patternOpts
    } = opts;
    return {
      ...patternOpts,
      mask: (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(mask) ? mask : pattern
    };
  }

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** Format typed value to string */

  /** Parse string to get typed value */

  constructor(opts) {
    super(MaskedDate.extractPatternOptions({
      ...MaskedDate.DEFAULTS,
      ...opts
    }));
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      mask,
      pattern,
      blocks,
      ...patternOpts
    } = {
      ...MaskedDate.DEFAULTS,
      ...opts
    };
    const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
    // adjust year block
    if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
    if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
    if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
      patternBlocks.m.from = opts.min.getMonth() + 1;
      patternBlocks.m.to = opts.max.getMonth() + 1;
      if (patternBlocks.m.from === patternBlocks.m.to) {
        patternBlocks.d.from = opts.min.getDate();
        patternBlocks.d.to = opts.max.getDate();
      }
    }
    Object.assign(patternBlocks, this.blocks, blocks);
    super._update({
      ...patternOpts,
      mask: (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(mask) ? mask : pattern,
      blocks: patternBlocks
    });
  }
  doValidate(flags) {
    const date = this.date;
    return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
  }

  /** Checks if date is exists */
  isDateExist(str) {
    return this.format(this.parse(str, this), this).indexOf(str) >= 0;
  }

  /** Parsed Date */
  get date() {
    return this.typedValue;
  }
  set date(date) {
    this.typedValue = date;
  }
  get typedValue() {
    return this.isComplete ? super.typedValue : null;
  }
  set typedValue(value) {
    super.typedValue = value;
  }
  maskEquals(mask) {
    return mask === Date || super.maskEquals(mask);
  }
  optionsIsChanged(opts) {
    return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
  }
}
MaskedDate.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1900,
    to: 9999
  }
});
MaskedDate.DEFAULTS = {
  ..._pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULTS,
  mask: Date,
  pattern: 'd{.}`m{.}`Y',
  format: (date, masked) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: (str, masked) => {
    const [day, month, year] = str.split('.').map(Number);
    return new Date(year, month - 1, day);
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedDate = MaskedDate;




/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDynamic)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");







/** Dynamic mask for choosing appropriate mask in run-time */
class MaskedDynamic extends _base_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(opts) {
    super({
      ...MaskedDynamic.DEFAULTS,
      ...opts
    });
    this.currentMask = undefined;
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update(opts);
    if ('mask' in opts) {
      this.exposeMask = undefined;
      // mask could be totally dynamic with only `dispatch` option
      this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
        const {
          expose,
          ...maskOpts
        } = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__.normalizeOpts)(m);
        const masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
          overwrite: this._overwrite,
          eager: this._eager,
          skipInvalid: this._skipInvalid,
          ...maskOpts
        });
        if (expose) this.exposeMask = masked;
        return masked;
      }) : [];

      // this.currentMask = this.doDispatch(''); // probably not needed but lets see
    }
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const details = this._applyDispatch(ch, flags);
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
    }
    return details;
  }
  _applyDispatch(appended, flags, tail) {
    if (appended === void 0) {
      appended = '';
    }
    if (flags === void 0) {
      flags = {};
    }
    if (tail === void 0) {
      tail = '';
    }
    const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
    const inputValue = this.rawInputValue;
    const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
    const tailValue = inputValue.slice(insertValue.length);
    const prevMask = this.currentMask;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const prevMaskState = prevMask == null ? void 0 : prevMask.state;

    // clone flags to prevent overwriting `_beforeTailState`
    this.currentMask = this.doDispatch(appended, {
      ...flags
    }, tail);

    // restore state after dispatch
    if (this.currentMask) {
      if (this.currentMask !== prevMask) {
        // if mask changed reapply input
        this.currentMask.reset();
        if (insertValue) {
          this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = this.currentMask.value.length - prevValueBeforeTail.length;
        }
        if (tailValue) {
          details.tailShift += this.currentMask.append(tailValue, {
            raw: true,
            tail: true
          }).tailShift;
        }
      } else if (prevMaskState) {
        // Dispatch can do something bad with state, so
        // restore prev mask state
        this.currentMask.state = prevMaskState;
      }
    }
    return details;
  }
  _appendPlaceholder() {
    const details = this._applyDispatch();
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendPlaceholder());
    }
    return details;
  }
  _appendEager() {
    const details = this._applyDispatch();
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendEager());
    }
    return details;
  }
  appendTail(tail) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (tail) details.aggregate(this._applyDispatch('', {}, tail));
    return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta, _flags$_beforeTailSta2;
    return {
      ...flags,
      _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
    };
  }
  doDispatch(appended, flags, tail) {
    if (flags === void 0) {
      flags = {};
    }
    if (tail === void 0) {
      tail = '';
    }
    return this.dispatch(appended, this, flags, tail);
  }
  doValidate(flags) {
    return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
  }
  doPrepare(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let [s, details] = super.doPrepare(str, flags);
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }
  doPrepareChar(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let [s, details] = super.doPrepareChar(str, flags);
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }
  reset() {
    var _this$currentMask;
    (_this$currentMask = this.currentMask) == null || _this$currentMask.reset();
    this.compiledMasks.forEach(m => m.reset());
  }
  get value() {
    return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
  }
  set value(value) {
    if (this.exposeMask) {
      this.exposeMask.value = value;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
    } else super.value = value;
  }
  get unmaskedValue() {
    return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
  }
  set unmaskedValue(unmaskedValue) {
    if (this.exposeMask) {
      this.exposeMask.unmaskedValue = unmaskedValue;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
    } else super.unmaskedValue = unmaskedValue;
  }
  get typedValue() {
    return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
  }
  set typedValue(typedValue) {
    if (this.exposeMask) {
      this.exposeMask.typedValue = typedValue;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
      return;
    }
    let unmaskedValue = String(typedValue);

    // double check it
    if (this.currentMask) {
      this.currentMask.typedValue = typedValue;
      unmaskedValue = this.currentMask.unmaskedValue;
    }
    this.unmaskedValue = unmaskedValue;
  }
  get displayValue() {
    return this.currentMask ? this.currentMask.displayValue : '';
  }
  get isComplete() {
    var _this$currentMask2;
    return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
  }
  get isFilled() {
    var _this$currentMask3;
    return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
  }
  remove(fromPos, toPos) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (this.currentMask) {
      details.aggregate(this.currentMask.remove(fromPos, toPos))
      // update with dispatch
      .aggregate(this._applyDispatch());
    }
    return details;
  }
  get state() {
    var _this$currentMask4;
    return {
      ...super.state,
      _rawInputValue: this.rawInputValue,
      compiledMasks: this.compiledMasks.map(m => m.state),
      currentMaskRef: this.currentMask,
      currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
    };
  }
  set state(state) {
    const {
      compiledMasks,
      currentMaskRef,
      currentMask,
      ...maskedState
    } = state;
    if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
    if (currentMaskRef != null) {
      this.currentMask = currentMaskRef;
      this.currentMask.state = currentMask;
    }
    super.state = maskedState;
  }
  extractInput(fromPos, toPos, flags) {
    return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
  }
  extractTail(fromPos, toPos) {
    return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
  }
  doCommit() {
    if (this.currentMask) this.currentMask.doCommit();
    super.doCommit();
  }
  nearestInputPos(cursorPos, direction) {
    return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
  }
  get overwrite() {
    return this.currentMask ? this.currentMask.overwrite : this._overwrite;
  }
  set overwrite(overwrite) {
    this._overwrite = overwrite;
  }
  get eager() {
    return this.currentMask ? this.currentMask.eager : this._eager;
  }
  set eager(eager) {
    this._eager = eager;
  }
  get skipInvalid() {
    return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
  }
  set skipInvalid(skipInvalid) {
    this._skipInvalid = skipInvalid;
  }
  get autofix() {
    return this.currentMask ? this.currentMask.autofix : this._autofix;
  }
  set autofix(autofix) {
    this._autofix = autofix;
  }
  maskEquals(mask) {
    return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
      if (!mask[mi]) return;
      const {
        mask: oldMask,
        ...restOpts
      } = mask[mi];
      return (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectIncludes)(m, restOpts) && m.maskEquals(oldMask);
    }) : super.maskEquals(mask);
  }
  typedValueEquals(value) {
    var _this$currentMask5;
    return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
  }
}
/** Currently chosen mask */
/** Currently chosen mask */
/** Compliled {@link Masked} options */
/** Chooses {@link Masked} depending on input value */
MaskedDynamic.DEFAULTS = {
  ..._base_js__WEBPACK_IMPORTED_MODULE_3__["default"].DEFAULTS,
  dispatch: (appended, masked, flags, tail) => {
    if (!masked.compiledMasks.length) return;
    const inputValue = masked.rawInputValue;

    // simulate input
    const inputs = masked.compiledMasks.map((m, index) => {
      const isCurrent = masked.currentMask === m;
      const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT);
      if (m.rawInputValue !== inputValue) {
        m.reset();
        m.append(inputValue, {
          raw: true
        });
      } else if (!isCurrent) {
        m.remove(startInputPos);
      }
      m.append(appended, masked.currentMaskFlags(flags));
      m.appendTail(tail);
      return {
        index,
        weight: m.rawInputValue.length,
        totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT)))
      };
    });

    // pop masks with longer values first
    inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;




/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedEnum)
/* harmony export */ });
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which validates enum values */
class MaskedEnum extends _pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(opts) {
    super({
      ...MaskedEnum.DEFAULTS,
      ...opts
    }); // mask will be created in _update
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      enum: enum_,
      ...eopts
    } = opts;
    if (enum_) {
      const lengths = enum_.map(e => e.length);
      const requiredLength = Math.min(...lengths);
      const optionalLength = Math.max(...lengths) - requiredLength;
      eopts.mask = '*'.repeat(requiredLength);
      if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
      this.enum = enum_;
    }
    super._update(eopts);
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const matchFrom = Math.min(this.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT), this.value.length);
    const matches = this.enum.filter(e => this.matchValue(e, this.unmaskedValue + ch, matchFrom));
    if (matches.length) {
      if (matches.length === 1) {
        this._forEachBlocksInRange(0, this.value.length, (b, bi) => {
          const mch = matches[0][bi];
          if (bi >= this.value.length || mch === b.value) return;
          b.reset();
          b._appendChar(mch, flags);
        });
      }
      const d = super._appendCharRaw(matches[0][this.value.length], flags);
      if (matches.length === 1) {
        matches[0].slice(this.unmaskedValue.length).split('').forEach(mch => d.aggregate(super._appendCharRaw(mch)));
      }
      return d;
    }
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      skip: !this.isComplete
    });
  }
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    // just drop tail
    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__["default"]('', fromPos);
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    if (fromPos === toPos) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const matchFrom = Math.min(super.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT), this.value.length);
    let pos;
    for (pos = fromPos; pos >= 0; --pos) {
      const matches = this.enum.filter(e => this.matchValue(e, this.value.slice(matchFrom, pos), matchFrom));
      if (matches.length > 1) break;
    }
    const details = super.remove(pos, toPos);
    details.tailShift += pos - fromPos;
    return details;
  }
  get isComplete() {
    return this.enum.indexOf(this.value) >= 0;
  }
}
/** Match enum value */
MaskedEnum.DEFAULTS = {
  ..._pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULTS,
  matchValue: (estr, istr, matchFrom) => estr.indexOf(istr, matchFrom) === matchFrom
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedEnum = MaskedEnum;




/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMask),
/* harmony export */   maskedClass: () => (/* binding */ maskedClass),
/* harmony export */   normalizeOpts: () => (/* binding */ normalizeOpts)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// export function maskedClass(mask: string): typeof MaskedPattern;
// export function maskedClass(mask: DateConstructor): typeof MaskedDate;
// export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
// export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
// export function maskedClass(mask: MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass(mask: Masked): typeof Masked;
// export function maskedClass(mask: typeof Masked): typeof Masked;
// export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
// export function maskedClass(mask: RegExp): typeof MaskedRegExp;
// export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;

/** Get Masked class by mask type */
function maskedClass(mask) /* TODO */{
  if (mask == null) throw new Error('mask property should be defined');
  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp;
  if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern;
  if (mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate;
  if (mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber;
  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic;
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor;
  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
function normalizeOpts(opts) {
  if (!opts) throw new Error('Options in not defined');
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) {
    if (opts.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return {
      mask: opts
    };

    /*
      handle cases like:
      1) opts = Masked
      2) opts = { mask: Masked, ...instanceOpts }
    */
    const {
      mask = undefined,
      ...instanceOpts
    } = opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked ? {
      mask: opts
    } : (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(opts) && opts.mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked ? opts : {};
    if (mask) {
      const _mask = mask.mask;
      return {
        ...(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.pick)(mask, (_, k) => !k.startsWith('_')),
        mask: mask.constructor,
        _mask,
        ...instanceOpts
      };
    }
  }
  if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(opts)) return {
    mask: opts
  };
  return {
    ...opts
  };
}

// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754

// From masked
// export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
// // From masked class
// export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// // From mask opts
// export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;

/** Creates new {@link Masked} depending on mask type */
function createMask(opts) {
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  const nOpts = normalizeOpts(opts);
  const MaskedClass = maskedClass(nOpts.mask);
  if (!MaskedClass) throw new Error("Masked class is not found for provided mask " + nOpts.mask + ", appropriate module needs to be imported manually before creating mask.");
  if (nOpts.mask === MaskedClass) delete nOpts.mask;
  if (nOpts._mask) {
    nOpts.mask = nOpts._mask;
    delete nOpts._mask;
  }
  return new MaskedClass(nOpts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;




/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedFunction)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");






/** Masking by custom Function */
class MaskedFunction extends _base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update({
      ...opts,
      validate: opts.mask
    });
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction = MaskedFunction;




/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedNumber)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");






var _MaskedNumber;
/** Number mask */
class MaskedNumber extends _base_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  /** Format typed value to string */

  /** Parse string to get typed value */

  constructor(opts) {
    super({
      ...MaskedNumber.DEFAULTS,
      ...opts
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update(opts);
    this._updateRegExps();
  }
  _updateRegExps() {
    const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
    const mid = '\\d*';
    const end = (this.scale ? "(" + (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)(this.radix) + "\\d{0," + this.scale + "})?" : '') + '$';
    this._numberRegExp = new RegExp(start + mid + end);
    this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp).join('') + "]", 'g');
    this._thousandsSeparatorRegExp = new RegExp((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)(this.thousandsSeparator), 'g');
  }
  _removeThousandsSeparators(value) {
    return value.replace(this._thousandsSeparatorRegExp, '');
  }
  _insertThousandsSeparators(value) {
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    const parts = value.split(this.radix);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
    return parts.join(this.radix);
  }
  doPrepareChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
    /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */
    flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
    if (ch && !prepCh) details.skip = true;
    if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
    return [prepCh, details];
  }
  _separatorsCount(to, extendOnSeparators) {
    if (extendOnSeparators === void 0) {
      extendOnSeparators = false;
    }
    let count = 0;
    for (let pos = 0; pos < to; ++pos) {
      if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
        ++count;
        if (extendOnSeparators) to += this.thousandsSeparator.length;
      }
    }
    return count;
  }
  _separatorsCountFromSlice(slice) {
    if (slice === void 0) {
      slice = this._value;
    }
    return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
    return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
    const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
    this._value = this._removeThousandsSeparators(this.value);
    const oldValue = this._value;
    this._value += ch;
    const num = this.number;
    let accepted = !isNaN(num);
    let skip = false;
    if (accepted) {
      let fixedNum;
      if (this.min != null && this.min < 0 && this.number < this.min) fixedNum = this.min;
      if (this.max != null && this.max > 0 && this.number > this.max) fixedNum = this.max;
      if (fixedNum != null) {
        if (this.autofix) {
          this._value = this.format(fixedNum, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
          skip || (skip = oldValue === this._value && !flags.tail); // if not changed on tail it's still ok to proceed
        } else {
          accepted = false;
        }
      }
      accepted && (accepted = Boolean(this._value.match(this._numberRegExp)));
    }
    let appendDetails;
    if (!accepted) {
      this._value = oldValue;
      appendDetails = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    } else {
      appendDetails = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        inserted: this._value.slice(oldValue.length),
        rawInserted: skip ? '' : ch,
        skip
      });
    }
    this._value = this._insertThousandsSeparators(this._value);
    const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
    const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
    appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
    return appendDetails;
  }
  _findSeparatorAround(pos) {
    if (this.thousandsSeparator) {
      const searchFrom = pos - this.thousandsSeparator.length + 1;
      const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
      if (separatorPos <= pos) return separatorPos;
    }
    return -1;
  }
  _adjustRangeWithSeparators(from, to) {
    const separatorAroundFromPos = this._findSeparatorAround(from);
    if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
    const separatorAroundToPos = this._findSeparatorAround(to);
    if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
    return [from, to];
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
    const valueBeforePos = this.value.slice(0, fromPos);
    const valueAfterPos = this.value.slice(toPos);
    const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
    const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(cursorPos, direction) {
    if (!this.thousandsSeparator) return cursorPos;
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT:
        {
          const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
          if (separatorAtLeftPos >= 0) {
            const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT) {
              return separatorAtLeftPos;
            }
          }
          break;
        }
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_RIGHT:
        {
          const separatorAtRightPos = this._findSeparatorAround(cursorPos);
          if (separatorAtRightPos >= 0) {
            return separatorAtRightPos + this.thousandsSeparator.length;
          }
        }
    }
    return cursorPos;
  }
  doCommit() {
    if (this.value) {
      const number = this.number;
      let validnum = number;

      // check bounds
      if (this.min != null) validnum = Math.max(validnum, this.min);
      if (this.max != null) validnum = Math.min(validnum, this.max);
      if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
      let formatted = this.value;
      if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
      if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
      this._value = formatted;
    }
    super.doCommit();
  }
  _normalizeZeros(value) {
    const parts = this._removeThousandsSeparators(value).split(this.radix);

    // remove leading zeros
    parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
    // add leading zero
    if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
    if (parts.length > 1) {
      parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
      if (!parts[1].length) parts.length = 1; // remove fractional
    }
    return this._insertThousandsSeparators(parts.join(this.radix));
  }
  _padFractionalZeros(value) {
    if (!value) return value;
    const parts = value.split(this.radix);
    if (parts.length < 2) parts.push('');
    parts[1] = parts[1].padEnd(this.scale, '0');
    return parts.join(this.radix);
  }
  doSkipInvalid(ch, flags, checkTail) {
    if (flags === void 0) {
      flags = {};
    }
    const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
    return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
  }
  set unmaskedValue(unmaskedValue) {
    super.unmaskedValue = unmaskedValue;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(n) {
    this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
  }

  /** Parsed Number */
  get number() {
    return this.typedValue;
  }
  set number(number) {
    this.typedValue = number;
  }
  get allowNegative() {
    return this.min != null && this.min < 0 || this.max != null && this.max < 0;
  }
  get allowPositive() {
    return this.min != null && this.min > 0 || this.max != null && this.max > 0;
  }
  typedValueEquals(value) {
    // handle  0 -> '' case (typed = 0 even if value = '')
    // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
    return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
  }
}
_MaskedNumber = MaskedNumber;
MaskedNumber.UNMASKED_RADIX = '.';
MaskedNumber.EMPTY_VALUES = [..._base_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY_VALUES, 0];
MaskedNumber.DEFAULTS = {
  ..._base_js__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULTS,
  mask: Number,
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: [_MaskedNumber.UNMASKED_RADIX],
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  scale: 2,
  normalizeZeros: true,
  padFractionalZeros: false,
  parse: Number,
  format: n => n.toLocaleString('en-US', {
    useGrouping: false,
    maximumFractionDigits: 20
  })
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedNumber = MaskedNumber;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedPattern)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");












/** Pattern mask */
class MaskedPattern extends _base_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /** */

  /** */

  /** Single char for empty input */

  /** Single char for filled input */

  /** Show placeholder only when needed */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  constructor(opts) {
    super({
      ...MaskedPattern.DEFAULTS,
      ...opts,
      definitions: Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"].DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    opts.definitions = Object.assign({}, this.definitions, opts.definitions);
    super._update(opts);
    this._rebuildMask();
  }
  _rebuildMask() {
    const defs = this.definitions;
    this._blocks = [];
    this.exposeBlock = undefined;
    this._stops = [];
    this._maskedBlocks = {};
    const pattern = this.mask;
    if (!pattern || !defs) return;
    let unmaskingBlock = false;
    let optionalBlock = false;
    for (let i = 0; i < pattern.length; ++i) {
      if (this.blocks) {
        const p = pattern.slice(i);
        const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
        // order by key length
        bNames.sort((a, b) => b.length - a.length);
        // use block name with max length
        const bName = bNames[0];
        if (bName) {
          const {
            expose,
            repeat,
            ...bOpts
          } = (0,_factory_js__WEBPACK_IMPORTED_MODULE_4__.normalizeOpts)(this.blocks[bName]); // TODO type Opts<Arg & Extra>
          const blockOpts = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...bOpts,
            repeat,
            parent: this
          };
          const maskedBlock = repeat != null ? new _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].RepeatBlock(blockOpts /* TODO */) : (0,_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])(blockOpts);
          if (maskedBlock) {
            this._blocks.push(maskedBlock);
            if (expose) this.exposeBlock = maskedBlock;

            // store block index
            if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
            this._maskedBlocks[bName].push(this._blocks.length - 1);
          }
          i += bName.length - 1;
          continue;
        }
      }
      let char = pattern[i];
      let isInput = (char in defs);
      if (char === MaskedPattern.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (char === '{' || char === '}') {
        unmaskingBlock = !unmaskingBlock;
        continue;
      }
      if (char === '[' || char === ']') {
        optionalBlock = !optionalBlock;
        continue;
      }
      if (char === MaskedPattern.ESCAPE_CHAR) {
        ++i;
        char = pattern[i];
        if (!char) break;
        isInput = false;
      }
      const def = isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        isOptional: optionalBlock,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...(0,_factory_js__WEBPACK_IMPORTED_MODULE_4__.normalizeOpts)(defs[char]),
        parent: this
      }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        char,
        eager: this.eager,
        isUnmasking: unmaskingBlock
      });
      this._blocks.push(def);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map(b => b.state)
    };
  }
  set state(state) {
    if (!state) {
      this.reset();
      return;
    }
    const {
      _blocks,
      ...maskedState
    } = state;
    this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
    super.state = maskedState;
  }
  reset() {
    super.reset();
    this._blocks.forEach(b => b.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
  }
  get isFilled() {
    return this._blocks.every(b => b.isFilled);
  }
  get isFixed() {
    return this._blocks.every(b => b.isFixed);
  }
  get isOptional() {
    return this._blocks.every(b => b.isOptional);
  }
  doCommit() {
    this._blocks.forEach(b => b.doCommit());
    super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
  }
  set unmaskedValue(unmaskedValue) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = unmaskedValue;
      this.appendTail(tail);
      this.doCommit();
    } else super.unmaskedValue = unmaskedValue;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value :
    // TODO return _value when not in change?
    this._blocks.reduce((str, b) => str += b.value, '');
  }
  set value(value) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = value;
      this.appendTail(tail);
      this.doCommit();
    } else super.value = value;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(value) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = value;
      this.appendTail(tail);
      this.doCommit();
    } else super.typedValue = value;
  }
  get displayValue() {
    return this._blocks.reduce((str, b) => str += b.displayValue, '');
  }
  appendTail(tail) {
    return super.appendTail(tail).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var _this$_mapPosToBlock;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
    if (startBlockIndex == null) return details;

    // TODO test if it works for nested pattern masks
    if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
    for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
      const d = this._blocks[bi]._appendEager();
      if (!d.inserted) break;
      details.aggregate(d);
    }
    return details;
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const blockIter = this._mapPosToBlock(this.displayValue.length);
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (!blockIter) return details;
    for (let bi = blockIter.index, block; block = this._blocks[bi]; ++bi) {
      var _flags$_beforeTailSta;
      const blockDetails = block._appendChar(ch, {
        ...flags,
        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
      });
      details.aggregate(blockDetails);
      if (blockDetails.consumed) break; // go next char
    }
    return details;
  }
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    if (fromPos === toPos) return chunkTail;
    this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
      const blockChunk = b.extractTail(bFromPos, bToPos);
      blockChunk.stop = this._findStopBefore(bi);
      blockChunk.from = this._blockStartPos(bi);
      if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__["default"]) blockChunk.blockIndex = bi;
      chunkTail.extend(blockChunk);
    });
    return chunkTail;
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    if (flags === void 0) {
      flags = {};
    }
    if (fromPos === toPos) return '';
    let input = '';
    this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
      input += b.extractInput(fromPos, toPos, flags);
    });
    return input;
  }
  _findStopBefore(blockIndex) {
    let stopBefore;
    for (let si = 0; si < this._stops.length; ++si) {
      const stop = this._stops[si];
      if (stop <= blockIndex) stopBefore = stop;else break;
    }
    return stopBefore;
  }

  /** Appends placeholder depending on laziness */
  _appendPlaceholder(toBlockIndex) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.lazy && toBlockIndex == null) return details;
    const startBlockIter = this._mapPosToBlock(this.displayValue.length);
    if (!startBlockIter) return details;
    const startBlockIndex = startBlockIter.index;
    const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
    this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
      if (!b.lazy || toBlockIndex != null) {
        var _blocks2;
        details.aggregate(b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length));
      }
    });
    return details;
  }

  /** Finds block in pos */
  _mapPosToBlock(pos) {
    let accVal = '';
    for (let bi = 0; bi < this._blocks.length; ++bi) {
      const block = this._blocks[bi];
      const blockStartPos = accVal.length;
      accVal += block.displayValue;
      if (pos <= accVal.length) {
        return {
          index: bi,
          offset: pos - blockStartPos
        };
      }
    }
  }
  _blockStartPos(blockIndex) {
    return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
  }
  _forEachBlocksInRange(fromPos, toPos, fn) {
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const fromBlockIter = this._mapPosToBlock(fromPos);
    if (fromBlockIter) {
      const toBlockIter = this._mapPosToBlock(toPos);
      // process first block
      const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
      const fromBlockStartPos = fromBlockIter.offset;
      const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
      fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
      if (toBlockIter && !isSameBlock) {
        // process intermediate blocks
        for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
          fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
        }

        // process last block
        fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
      }
    }
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const removeDetails = super.remove(fromPos, toPos);
    this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
      removeDetails.aggregate(b.remove(bFromPos, bToPos));
    });
    return removeDetails;
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    if (!this._blocks.length) return 0;
    const cursor = new _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_6__["default"](this, cursorPos);
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE) {
      // -------------------------------------------------
      // NONE should only go out from fixed to the right!
      // -------------------------------------------------
      if (cursor.pushRightBeforeInput()) return cursor.pos;
      cursor.popState();
      if (cursor.pushLeftBeforeInput()) return cursor.pos;
      return this.displayValue.length;
    }

    // FORCE is only about a|* otherwise is 0
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) {
      // try to break fast when *|a
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT) {
        cursor.pushRightBeforeFilled();
        if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
        cursor.popState();
      }

      // forward flow
      cursor.pushLeftBeforeInput();
      cursor.pushLeftBeforeRequired();
      cursor.pushLeftBeforeFilled();

      // backward flow
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT) {
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
        cursor.popState();
        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
        cursor.popState();
      }
      if (cursor.ok) return cursor.pos;
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) return 0;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      return 0;
    }
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) {
      // forward flow
      cursor.pushRightBeforeInput();
      cursor.pushRightBeforeRequired();
      if (cursor.pushRightBeforeFilled()) return cursor.pos;
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) return this.displayValue.length;

      // backward flow
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      return this.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT);
    }
    return cursorPos;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    let total = 0;
    this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
      total += b.totalInputPositions(bFromPos, bToPos);
    });
    return total;
  }

  /** Get block by name */
  maskedBlock(name) {
    return this.maskedBlocks(name)[0];
  }

  /** Get all blocks by name */
  maskedBlocks(name) {
    const indices = this._maskedBlocks[name];
    if (!indices) return [];
    return indices.map(gi => this._blocks[gi]);
  }
  pad(flags) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._forEachBlocksInRange(0, this.displayValue.length, b => details.aggregate(b.pad(flags)));
    return details;
  }
}
MaskedPattern.DEFAULTS = {
  ..._base_js__WEBPACK_IMPORTED_MODULE_3__["default"].DEFAULTS,
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__["default"];
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern = MaskedPattern;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChunksTailDetails)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class ChunksTailDetails {
  /** */

  constructor(chunks, from) {
    if (chunks === void 0) {
      chunks = [];
    }
    if (from === void 0) {
      from = 0;
    }
    this.chunks = chunks;
    this.from = from;
  }
  toString() {
    return this.chunks.map(String).join('');
  }
  extend(tailChunk) {
    if (!String(tailChunk)) return;
    tailChunk = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.isString)(tailChunk) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tailChunk)) : tailChunk;
    const lastChunk = this.chunks[this.chunks.length - 1];
    const extendLast = lastChunk && (
    // if stops are same or tail has no stop
    lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
    // if tail chunk goes just after last chunk
    tailChunk.from === lastChunk.from + lastChunk.toString().length;
    if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      // check the ability to extend previous chunk
      if (extendLast) {
        // extend previous chunk
        lastChunk.extend(tailChunk.toString());
      } else {
        // append new chunk
        this.chunks.push(tailChunk);
      }
    } else if (tailChunk instanceof ChunksTailDetails) {
      if (tailChunk.stop == null) {
        // unwrap floating chunks to parent, keeping `from` pos
        let firstTailChunk;
        while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
          firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
          firstTailChunk.from += tailChunk.from;
          this.extend(firstTailChunk);
        }
      }

      // if tail chunk still has value
      if (tailChunk.toString()) {
        // if chunks contains stops, then popup stop to container
        tailChunk.stop = tailChunk.blockIndex;
        this.chunks.push(tailChunk);
      }
    }
  }
  appendTo(masked) {
    if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedPattern)) {
      const tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.toString());
      return tail.appendTo(masked);
    }
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    for (let ci = 0; ci < this.chunks.length; ++ci) {
      const chunk = this.chunks[ci];
      const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
      const stop = chunk.stop;
      let chunkBlock;
      if (stop != null && (
      // if block not found or stop is behind lastBlock
      !lastBlockIter || lastBlockIter.index <= stop)) {
        if (chunk instanceof ChunksTailDetails ||
        // for continuous block also check if stop is exist
        masked._stops.indexOf(stop) >= 0) {
          details.aggregate(masked._appendPlaceholder(stop));
        }
        chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
      }
      if (chunkBlock) {
        const tailDetails = chunkBlock.appendTail(chunk);
        details.aggregate(tailDetails);

        // get not inserted chars
        const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
        if (remainChars) details.aggregate(masked.append(remainChars, {
          tail: true
        }));
      } else {
        details.aggregate(masked.append(chunk.toString(), {
          tail: true
        }));
      }
    }
    return details;
  }
  get state() {
    return {
      chunks: this.chunks.map(c => c.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(state) {
    const {
      chunks,
      ...props
    } = state;
    Object.assign(this, props);
    this.chunks = chunks.map(cstate => {
      const chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      chunk.state = cstate;
      return chunk;
    });
  }
  unshift(beforePos) {
    if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
    const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
    let ci = 0;
    while (ci < this.chunks.length) {
      const chunk = this.chunks[ci];
      const shiftChar = chunk.unshift(chunkShiftPos);
      if (chunk.toString()) {
        // chunk still contains value
        // but not shifted - means no more available chars to shift
        if (!shiftChar) break;
        ++ci;
      } else {
        // clean if chunk has no value
        this.chunks.splice(ci, 1);
      }
      if (shiftChar) return shiftChar;
    }
    return '';
  }
  shift() {
    if (!this.chunks.length) return '';
    let ci = this.chunks.length - 1;
    while (0 <= ci) {
      const chunk = this.chunks[ci];
      const shiftChar = chunk.shift();
      if (chunk.toString()) {
        // chunk still contains value
        // but not shifted - means no more available chars to shift
        if (!shiftChar) break;
        --ci;
      } else {
        // clean if chunk has no value
        this.chunks.splice(ci, 1);
      }
      if (shiftChar) return shiftChar;
    }
    return '';
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/cursor.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/cursor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternCursor)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");


class PatternCursor {
  constructor(masked, pos) {
    this.masked = masked;
    this._log = [];
    const {
      offset,
      index
    } = masked._mapPosToBlock(pos) || (pos < 0 ?
    // first
    {
      index: 0,
      offset: 0
    } :
    // last
    {
      index: this.masked._blocks.length,
      offset: 0
    });
    this.offset = offset;
    this.index = index;
    this.ok = false;
  }
  get block() {
    return this.masked._blocks[this.index];
  }
  get pos() {
    return this.masked._blockStartPos(this.index) + this.offset;
  }
  get state() {
    return {
      index: this.index,
      offset: this.offset,
      ok: this.ok
    };
  }
  set state(s) {
    Object.assign(this, s);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const s = this._log.pop();
    if (s) this.state = s;
    return s;
  }
  bindBlock() {
    if (this.block) return;
    if (this.index < 0) {
      this.index = 0;
      this.offset = 0;
    }
    if (this.index >= this.masked._blocks.length) {
      this.index = this.masked._blocks.length - 1;
      this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
    }
  }
  _pushLeft(fn) {
    this.pushState();
    for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0) {
      var _this$block;
      if (fn()) return this.ok = true;
    }
    return this.ok = false;
  }
  _pushRight(fn) {
    this.pushState();
    for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
      if (fn()) return this.ok = true;
    }
    return this.ok = false;
  }
  pushLeftBeforeFilled() {
    return this._pushLeft(() => {
      if (this.block.isFixed || !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT);
      if (this.offset !== 0) return true;
    });
  }
  pushLeftBeforeInput() {
    // cases:
    // filled input: 00|
    // optional empty input: 00[]|
    // nested block: XX<[]>|
    return this._pushLeft(() => {
      if (this.block.isFixed) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT);
      return true;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT);
      return true;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (this.block.isFixed || !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_RIGHT);
      if (this.offset !== this.block.value.length) return true;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (this.block.isFixed) return;

      // const o = this.offset;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
      // HACK cases like (STILL DOES NOT WORK FOR NESTED)
      // aa|X
      // aa<X|[]>X_    - this will not work
      // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
      return true;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (this.block.isFixed || this.block.isOptional && !this.block.value) return;

      // TODO check |[*]XX_
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
      return true;
    });
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternFixedDefinition)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class PatternFixedDefinition {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    Object.assign(this, opts);
    this._value = '';
    this.isFixed = true;
  }
  get value() {
    return this._value;
  }
  get unmaskedValue() {
    return this.isUnmasking ? this.value : '';
  }
  get rawInputValue() {
    return this._isRawInput ? this.value : '';
  }
  get displayValue() {
    return this.value;
  }
  reset() {
    this._isRawInput = false;
    this._value = '';
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
    if (!this._value) this._isRawInput = false;
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
    }
    const minPos = 0;
    const maxPos = this._value.length;
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT:
        return minPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT:
      default:
        return maxPos;
    }
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    return this._isRawInput ? toPos - fromPos : 0;
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    if (flags === void 0) {
      flags = {};
    }
    return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
  }
  get isComplete() {
    return true;
  }
  get isFilled() {
    return Boolean(this._value);
  }
  _appendChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const appendEager = this.eager === true || this.eager === 'append';
    const appended = this.char === ch;
    const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      inserted: this.char,
      rawInserted: isResolved ? this.char : ''
    });
    this._value = this.char;
    this._isRawInput = isResolved && (flags.raw || flags.input);
    return details;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: true
    });
  }
  _appendPlaceholder() {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.isFilled) return details;
    this._value = details.inserted = this.char;
    return details;
  }
  extractTail() {
    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]('');
  }
  appendTail(tail) {
    if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
    return tail.appendTo(this);
  }
  append(str, flags, tail) {
    const details = this._appendChar(str[0], flags);
    if (tail != null) {
      details.tailShift += this.appendTail(tail).tailShift;
    }
    return details;
  }
  doCommit() {}
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(state) {
    this._value = state._value;
    this._isRawInput = Boolean(state._rawInputValue);
  }
  pad(flags) {
    return this._appendPlaceholder();
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternInputDefinition)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class PatternInputDefinition {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    const {
      parent,
      isOptional,
      placeholderChar,
      displayChar,
      lazy,
      eager,
      ...maskOpts
    } = opts;
    this.masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(maskOpts);
    Object.assign(this, {
      parent,
      isOptional,
      placeholderChar,
      displayChar,
      lazy,
      eager
    });
  }
  reset() {
    this.isFilled = false;
    this.masked.reset();
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    if (fromPos === 0 && toPos >= 1) {
      this.isFilled = false;
      return this.masked.remove(fromPos, toPos);
    }
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  get value() {
    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
  }
  get unmaskedValue() {
    return this.masked.unmaskedValue;
  }
  get rawInputValue() {
    return this.masked.rawInputValue;
  }
  get displayValue() {
    return this.masked.value && this.displayChar || this.value;
  }
  get isComplete() {
    return Boolean(this.masked.value) || this.isOptional;
  }
  _appendChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const state = this.masked.state;
    // simulate input
    let details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
    if (details.inserted && this.doValidate(flags) === false) {
      details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.masked.state = state;
    }
    if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
      details.inserted = this.placeholderChar;
    }
    details.skip = !details.inserted && !this.isOptional;
    this.isFilled = Boolean(details.inserted);
    return details;
  }
  append(str, flags, tail) {
    // TODO probably should be done via _appendChar
    return this.masked.append(str, this.currentMaskFlags(flags), tail);
  }
  _appendPlaceholder() {
    if (this.isFilled || this.isOptional) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.isFilled = true;
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      inserted: this.placeholderChar
    });
  }
  _appendEager() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  extractTail(fromPos, toPos) {
    return this.masked.extractTail(fromPos, toPos);
  }
  appendTail(tail) {
    return this.masked.appendTail(tail);
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    return this.masked.extractInput(fromPos, toPos, flags);
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    const minPos = 0;
    const maxPos = this.value.length;
    const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT:
        return this.isComplete ? boundPos : minPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT:
        return this.isComplete ? boundPos : maxPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE:
      default:
        return boundPos;
    }
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    return this.value.slice(fromPos, toPos).length;
  }
  doValidate(flags) {
    return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
  }
  doCommit() {
    this.masked.doCommit();
  }
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue,
      masked: this.masked.state,
      isFilled: this.isFilled
    };
  }
  set state(state) {
    this.masked.state = state.masked;
    this.isFilled = state.isFilled;
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta;
    return {
      ...flags,
      _beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
    };
  }
  pad(flags) {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
PatternInputDefinition.DEFAULT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};




/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PIPE_TYPE: () => (/* binding */ PIPE_TYPE),
/* harmony export */   createPipe: () => (/* binding */ createPipe),
/* harmony export */   pipe: () => (/* binding */ pipe)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");




/** Mask pipe source and destination types */
const PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */
function createPipe(arg, from, to) {
  if (from === void 0) {
    from = PIPE_TYPE.MASKED;
  }
  if (to === void 0) {
    to = PIPE_TYPE.MASKED;
  }
  const masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arg);
  return value => masked.runIsolated(m => {
    m[from] = value;
    return m[to];
  });
}

/** Pipes value through mask depending on mask type, source and destination options */
function pipe(value, mask, from, to) {
  return createPipe(mask, from, to)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRange)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which accepts ranges */
class MaskedRange extends _pattern_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */

  /** Min bound */

  /** Max bound */

  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }
  constructor(opts) {
    super(opts); // mask will be created in _update
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      to = this.to || 0,
      from = this.from || 0,
      maxLength = this.maxLength || 0,
      autofix = this.autofix,
      ...patternOpts
    } = opts;
    this.to = to;
    this.from = from;
    this.maxLength = Math.max(String(to).length, maxLength);
    this.autofix = autofix;
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    let sameCharsCount = 0;
    while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
    patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
    super._update(patternOpts);
  }
  get isComplete() {
    return super.isComplete && Boolean(this.value);
  }
  boundaries(str) {
    let minstr = '';
    let maxstr = '';
    const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
    if (num) {
      minstr = '0'.repeat(placeholder.length) + num;
      maxstr = '9'.repeat(placeholder.length) + num;
    }
    minstr = minstr.padEnd(this.maxLength, '0');
    maxstr = maxstr.padEnd(this.maxLength, '9');
    return [minstr, maxstr];
  }
  doPrepareChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let details;
    [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
    if (!ch) details.skip = !this.isComplete;
    return [ch, details];
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (!this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(ch, flags);
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    const [minstr, maxstr] = this.boundaries(this.value + ch);
    if (Number(maxstr) < this.from) return super._appendCharRaw(fromStr[this.value.length], flags);
    if (Number(minstr) > this.to) {
      if (!flags.tail && this.autofix === 'pad' && this.value.length + 1 < this.maxLength) {
        return super._appendCharRaw(fromStr[this.value.length], flags).aggregate(this._appendCharRaw(ch, flags));
      }
      return super._appendCharRaw(toStr[this.value.length], flags);
    }
    return super._appendCharRaw(ch, flags);
  }
  doValidate(flags) {
    const str = this.value;
    const firstNonZero = str.search(/[^0]/);
    if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
    const [minstr, maxstr] = this.boundaries(str);
    return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
  }
  pad(flags) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.value.length === this.maxLength) return details;
    const value = this.value;
    const padLength = this.maxLength - this.value.length;
    if (padLength) {
      this.reset();
      for (let i = 0; i < padLength; ++i) {
        details.aggregate(super._appendCharRaw('0', flags));
      }

      // append tail
      value.split('').forEach(ch => this._appendCharRaw(ch));
    }
    return details;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRange = MaskedRange;




/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRegExp)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");






/** Masking by RegExp */
class MaskedRegExp extends _base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const mask = opts.mask;
    if (mask) opts.validate = value => value.search(mask) >= 0;
    super._update(opts);
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp = MaskedRegExp;




/***/ }),

/***/ "./node_modules/imask/esm/masked/repeat.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/repeat.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RepeatBlock)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern mask */
class RepeatBlock extends _pattern_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  get repeatFrom() {
    var _ref;
    return (_ref = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) != null ? _ref : 0;
  }
  get repeatTo() {
    var _ref2;
    return (_ref2 = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? _ref2 : Infinity;
  }
  constructor(opts) {
    super(opts);
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    var _ref3, _ref4, _this$_blocks;
    const {
      repeat,
      ...blockOpts
    } = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__.normalizeOpts)(opts); // TODO type
    this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
    const block = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this._blockOpts);
    this.repeat = (_ref3 = (_ref4 = repeat != null ? repeat : block.repeat) != null ? _ref4 : this.repeat) != null ? _ref3 : Infinity; // TODO type

    super._update({
      mask: 'm'.repeat(Math.max(this.repeatTo === Infinity && ((_this$_blocks = this._blocks) == null ? void 0 : _this$_blocks.length) || 0, this.repeatFrom)),
      blocks: {
        m: block
      },
      eager: block.eager,
      overwrite: block.overwrite,
      skipInvalid: block.skipInvalid,
      lazy: block.lazy,
      placeholderChar: block.placeholderChar,
      displayChar: block.displayChar
    });
  }
  _allocateBlock(bi) {
    if (bi < this._blocks.length) return this._blocks[bi];
    if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
      this._blocks.push((0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this._blockOpts));
      this.mask += 'm';
      return this._blocks[this._blocks.length - 1];
    }
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    for (let bi = (_this$_mapPosToBlock$ = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index) != null ? _this$_mapPosToBlock$ : Math.max(this._blocks.length - 1, 0), block, allocated;
    // try to get a block or
    // try to allocate a new block if not allocated already
    block = (_this$_blocks$bi = this._blocks[bi]) != null ? _this$_blocks$bi : allocated = !allocated && this._allocateBlock(bi); ++bi) {
      var _this$_mapPosToBlock$, _this$_mapPosToBlock, _this$_blocks$bi, _flags$_beforeTailSta;
      const blockDetails = block._appendChar(ch, {
        ...flags,
        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
      });
      if (blockDetails.skip && allocated) {
        // remove the last allocated block and break
        this._blocks.pop();
        this.mask = this.mask.slice(1);
        break;
      }
      details.aggregate(blockDetails);
      if (blockDetails.consumed) break; // go next char
    }
    return details;
  }
  _trimEmptyTail(fromPos, toPos) {
    var _this$_mapPosToBlock2, _this$_mapPosToBlock3;
    if (fromPos === void 0) {
      fromPos = 0;
    }
    const firstBlockIndex = Math.max(((_this$_mapPosToBlock2 = this._mapPosToBlock(fromPos)) == null ? void 0 : _this$_mapPosToBlock2.index) || 0, this.repeatFrom, 0);
    let lastBlockIndex;
    if (toPos != null) lastBlockIndex = (_this$_mapPosToBlock3 = this._mapPosToBlock(toPos)) == null ? void 0 : _this$_mapPosToBlock3.index;
    if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
    let removeCount = 0;
    for (let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount) {
      if (this._blocks[blockIndex].unmaskedValue) break;
    }
    if (removeCount) {
      this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
      this.mask = this.mask.slice(removeCount);
    }
  }
  reset() {
    super.reset();
    this._trimEmptyTail();
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const removeDetails = super.remove(fromPos, toPos);
    this._trimEmptyTail(fromPos, toPos);
    return removeDetails;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos == null && this.repeatTo === Infinity) return Infinity;
    return super.totalInputPositions(fromPos, toPos);
  }
  get state() {
    return super.state;
  }
  set state(state) {
    this._blocks.length = state._blocks.length;
    this.mask = this.mask.slice(0, this._blocks.length);
    super.state = state;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].RepeatBlock = RepeatBlock;




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
/* harmony import */ var _call_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-manager */ "./js/call-manager.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMUI7QUFDSjtBQUNFO0FBQ0Q7QUFDMUI7QUFDRztBQUNNO0FBQ1A7O0FBRXBDO0FBQ0EscUJBQXFCLHVEQUFLO0FBQzFCLEVBQUU7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEMwQjtBQUNpQjtBQUNnQjtBQUNqRDs7QUFFdEM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0VBQXFCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdEQUFRLG1CQUFtQix3RUFBcUI7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFhO0FBQ3JDO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwrREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLFNBQVMsd0RBQVE7QUFDakIsc0JBQXNCLHdEQUFRLGFBQWEsd0VBQXFCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrREFBYTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrREFBYTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBYztBQUN0QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7O0FBRXJDO0FBQ0EsNEJBQTRCLHFEQUFTO0FBQ3JDLG9HQUFvRyxxREFBUzs7QUFFN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscURBQVM7QUFDcEQsOEJBQThCLHFEQUFTO0FBQ3ZDO0FBQ0E7QUFDQSxnQ0FBZ0MsK0RBQWE7QUFDN0M7QUFDQSxXQUFXO0FBQ1g7QUFDQSxRQUFRLDZCQUE2QixxREFBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQUs7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmFZO0FBQ0o7QUFDQztBQUNNO0FBQ1Q7QUFDaEI7QUFDeUI7QUFDdEI7QUFDbUI7QUFDWjtBQUNVO0FBQ0E7QUFDbEI7O0FBRXJCO0FBQ0EseUJBQXlCLG1EQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFlBQVksd0RBQVE7QUFDcEI7QUFDQTs7QUFFQSwwQ0FBMEMseUJBQXlCOztBQUVuRTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQVE7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaURBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsVUFBVSxpREFBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxVQUFVLGlEQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLEtBQUssbURBQWE7QUFDbEI7QUFDQSxjQUFjLEVBQUUsR0FBRyxFQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQUs7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSTRCO0FBQ1A7QUFDRztBQUMxQjtBQUNPO0FBQ007O0FBRTVDO0FBQ0EsNEJBQTRCLGdEQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEVBQUUsMERBQWE7QUFDekIsdUJBQXVCLHVEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrREFBYTtBQUNyQywwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsYUFBYSw4REFBYztBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixhQUFhLGNBQWM7QUFDM0I7QUFDQSxLQUFLLGdEQUFNO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5RyxxREFBUztBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1SEFBdUgscURBQVM7QUFDaEk7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBSzs7QUFFK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BWSztBQUNIO0FBQ2dCO0FBQ1Q7QUFDMEI7QUFDcEQ7QUFDRztBQUNtQjtBQUNaO0FBQ1U7QUFDQTtBQUNsQjs7QUFFckI7QUFDQSx5QkFBeUIsbURBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQscURBQVM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3RUFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrREFBYTtBQUNuRCx3REFBd0QscURBQVM7QUFDakU7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssbURBQWE7QUFDbEI7QUFDQTtBQUNBLHVEQUFLOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHMkI7QUFDdEI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHVEQUFLO0FBQzFDLE1BQU0sd0RBQVEsZUFBZSx1REFBSztBQUNsQyw0QkFBNEIsdURBQUs7QUFDakMsOEJBQThCLHVEQUFLO0FBQ25DLG9EQUFvRCx1REFBSztBQUN6RCxNQUFNLHVEQUFLLHFDQUFxQyx1REFBSztBQUNyRCxNQUFNLHVEQUFLLDJCQUEyQix1REFBSztBQUMzQyx1Q0FBdUMsdURBQUs7QUFDNUMsaURBQWlEO0FBQ2pELFNBQVMsdURBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFLO0FBQ1gsa0NBQWtDLHVEQUFLO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrQkFBa0IsdURBQUs7QUFDN0I7QUFDQSxNQUFNLEVBQUUsd0RBQVEsK0JBQStCLHVEQUFLO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0RBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdEQUFRO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0EsTUFBTSx1REFBSywyQkFBMkIsdURBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBSzs7QUFFd0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEg5QjtBQUNPO0FBQ0g7QUFDUztBQUNsQjs7QUFFMUI7QUFDQSw2QkFBNkIsZ0RBQU07QUFDbkM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVEQUFLOztBQUVnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnNCO0FBQ0w7QUFDdkI7QUFDTztBQUNNOztBQUU1QztBQUNBO0FBQ0EsMkJBQTJCLGdEQUFNO0FBQ2pDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNERBQVksb0JBQW9CLHFCQUFxQjtBQUN6RjtBQUNBLGtFQUFrRSx3REFBWTtBQUM5RSxnREFBZ0QsNERBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrREFBYTtBQUN2QyxNQUFNO0FBQ04sMEJBQTBCLCtEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQVM7QUFDcEIsV0FBVyxxREFBUztBQUNwQixXQUFXLHFEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlILHFEQUFTO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFEQUFTO0FBQ3BCLFdBQVcscURBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQU07QUFDdEM7QUFDQSxLQUFLLGdEQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx1REFBSzs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelRtQjtBQUNoQjtBQUNPO0FBQ2Q7QUFDMEI7QUFDTztBQUNoQjtBQUNtQjtBQUNBO0FBQzlDO0FBQ3VCOztBQUU1QztBQUNBLDRCQUE0QixnREFBTTtBQUNsQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFLG9FQUFzQjtBQUMzRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFLDBEQUFhLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHVEQUFLLHFDQUFxQyx1REFBVTtBQUN2RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0VBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUFhO0FBQ3hCO0FBQ0EsT0FBTyxRQUFRLG9FQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFhO0FBQ3JDO0FBQ0EsMENBQTBDLDBCQUEwQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzRUFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzRUFBaUI7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0I7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVM7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QiwwREFBYTtBQUNwQyxzQkFBc0IscURBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxREFBUyx1QkFBdUIscURBQVM7QUFDL0Q7QUFDQSx3QkFBd0IscURBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IscURBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVMsd0JBQXdCLHFEQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFTOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHFEQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0RBQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9FQUFzQjtBQUN0RCxnQ0FBZ0Msb0VBQXNCO0FBQ3RELHVEQUFLOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9jcUI7QUFDVjtBQUMyQjtBQUNqQzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVEsa0JBQWtCLHdFQUFxQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0VBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQUs7QUFDakMsdUJBQXVCLHdFQUFxQjtBQUM1QztBQUNBO0FBQ0Esd0JBQXdCLCtEQUFhO0FBQ3JDLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsdUVBQXVFLHdFQUFxQjtBQUM1RjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qzs7Ozs7Ozs7Ozs7Ozs7OztBQzdKUTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5Q0FBeUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQscURBQVM7QUFDckU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxxREFBUztBQUNyRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxxREFBUztBQUNyRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxxREFBUztBQUNyRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RCxxREFBUztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELHFEQUFTO0FBQ3JFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElxQjtBQUNDO0FBQ2dCO0FBQzVDOztBQUU5QjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBUztBQUNwQixXQUFXLHFEQUFTO0FBQ3BCO0FBQ0EsV0FBVyxxREFBUztBQUNwQixXQUFXLHFEQUFTO0FBQ3BCLFdBQVcscURBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrREFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWE7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdFQUFxQjtBQUNwQztBQUNBO0FBQ0EsUUFBUSx3REFBUSxtQkFBbUIsd0VBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Sk47QUFDa0I7QUFDVDtBQUNsQjs7QUFFOUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sa0JBQWtCLHVEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLCtEQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtEQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsK0RBQWE7QUFDbEU7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBUztBQUNwQixXQUFXLHFEQUFTO0FBQ3BCO0FBQ0EsV0FBVyxxREFBUztBQUNwQixXQUFXLHFEQUFTO0FBQ3BCO0FBQ0EsV0FBVyxxREFBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMUDtBQUNBO0FBQ1o7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQUs7QUFDTCx1REFBSztBQUNMLHVEQUFLOztBQUVrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNlO0FBQ2hCO0FBQ0c7QUFDZjtBQUNQO0FBQ3lCO0FBQ3RCO0FBQ21CO0FBQ1o7QUFDVTtBQUNBO0FBQ2xCOztBQUVyQjtBQUNBLDBCQUEwQixtREFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBSzs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhIO0FBQ087QUFDSDtBQUNTO0FBQ2xCOztBQUUxQjtBQUNBLDJCQUEyQixnREFBTTtBQUNqQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBSzs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCbUI7QUFDaEI7QUFDbUI7QUFDaEI7QUFDZjtBQUNQO0FBQ3lCO0FBQ0g7QUFDWjtBQUNVO0FBQ0E7QUFDbEI7O0FBRXJCO0FBQ0EsMEJBQTBCLG1EQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFLDBEQUFhLFFBQVE7QUFDN0Isc0NBQXNDO0FBQ3RDLGtCQUFrQix1REFBVTtBQUM1Qix1SUFBdUk7O0FBRXZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFLOztBQUU2Qjs7Ozs7OztVQ3hJbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZWFyX3BvaW50Ly4vanMvY2FsbC1tYW5hZ2VyLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9qcy9kYWRhdGEuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL2pzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL2pzL3Jlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL2pzL3N1Z2dlc3Rpb25zLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9qcy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2h0bWwtaW5wdXQtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2h0bWwtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL2lucHV0LWhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvYWN0aW9uLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9uZWFyX3BvaW50Ly4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvaG9sZGVyLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2RhdGUuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2VudW0uanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2N1cnNvci5qcyIsIndlYnBhY2s6Ly9uZWFyX3BvaW50Ly4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BpcGUuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3JhbmdlLmpzIiwid2VicGFjazovL25lYXJfcG9pbnQvLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9yZWdleHAuanMiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly9uZWFyX3BvaW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25lYXJfcG9pbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25lYXJfcG9pbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZWFyX3BvaW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmVhcl9wb2ludC8uL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJTWFzayBmcm9tICdpbWFzayc7XG5pbXBvcnQgeyBjYWxsTWFuYWdlckZvcm0sIGNhbGxNYW5hZ2VyUGhvbmVJbnB1dCwgbWFza09wdGlvbnMgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IG1hc2sgPSBJTWFzayhjYWxsTWFuYWdlclBob25lSW5wdXQsIG1hc2tPcHRpb25zKTtcblxuY29uc3Qgb25DYWxsTWFuYWdlckZvcm1TdWJtaXQgPSAoZXZ0KSA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjYWxsTWFuYWdlclBob25lSW5wdXQudmFsdWUgPSAnJztcbiAgYWxlcnQoJ9Ch0L/QsNGB0LjQsdC+INC30LAg0LfQsNGP0LLQutGDISDQkiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjyDQvdCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4LicpO1xufTtcblxuY2FsbE1hbmFnZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uQ2FsbE1hbmFnZXJGb3JtU3VibWl0KTsiLCJpbXBvcnQgeyB1cmwsIHRva2VuLCBmb3JtLCBmcm9tLCB0byB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IHJlbmRlclN1Z2dlc3Rpb25zIH0gZnJvbSAnLi9zdWdnZXN0aW9ucyc7XG5pbXBvcnQgeyBvbkZvcm1TdWJtaXQgfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHsgaGlkZVJlc3VsdHMgfSBmcm9tICcuL3Jlc3VsdHMnO1xuXG5jb25zdCBnZXRTdWdnZXN0aW9ucyA9IChxdWVyeSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogJ1Rva2VuICcgKyB0b2tlblxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3F1ZXJ5OiBxdWVyeX0pXG4gIH07XG5cbiAgLy8gVG8gZG86IGRlYm91bmNlXG4gIGZldGNoKHVybCwgb3B0aW9ucylcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAudGhlbihyZXN1bHQgPT4gcmVuZGVyU3VnZ2VzdGlvbnMoSlNPTi5wYXJzZShyZXN1bHQpKSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG59O1xuXG5jb25zdCBmcm9tSW5wdXQgPSAoZXZ0KSA9PiB7XG4gIGZvcm0uZGF0YXNldC5kaXJlY3Rpb24gPSAnZnJvbSc7XG4gIGdldFN1Z2dlc3Rpb25zKGV2dC50YXJnZXQudmFsdWUpO1xufTtcblxuY29uc3QgdG9JbnB1dCA9IChldnQpID0+IHtcbiAgZ2V0U3VnZ2VzdGlvbnMoZXZ0LnRhcmdldC52YWx1ZSk7XG59O1xuXG5mcm9tLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnJvbUlucHV0KTtcbnRvLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdG9JbnB1dCk7XG5cbmZyb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZvcm0uZGF0YXNldC5kaXJlY3Rpb24gPSAnZnJvbSc7XG4gIGhpZGVSZXN1bHRzKCk7XG4gIC8vIFRvIGRvOiBzY3JvbGwgdG9cbn0pO1xudG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZvcm0uZGF0YXNldC5kaXJlY3Rpb24gPSAndG8nO1xuICBoaWRlUmVzdWx0cygpO1xuICAvLyBUbyBkbzogc2Nyb2xsIHRvXG59KTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvbkZvcm1TdWJtaXQpOyIsImltcG9ydCB7IGZvcm0sIGZyb20sIHRvLCBsb2FkZXIsIHNlYXJjaEljb24gfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBzaG93UmVzdWx0cyB9IGZyb20gJy4vcmVzdWx0cyc7XG5cbmNvbnN0IGlzRm9ybVZhbGlkID0gKCkgPT4ge1xuICByZXR1cm4gZm9ybS5kYXRhc2V0LmZyb20gPT09IGZyb20udmFsdWUgJiYgZm9ybS5kYXRhc2V0LmZyb20gIT09ICcnICYmIGZvcm0uZGF0YXNldC50byA9PT0gdG8udmFsdWUgJiYgZm9ybS5kYXRhc2V0LnRvICE9PSAnJztcbn07XG5cbmNvbnN0IGRpc2FibGVGb3JtID0gKCkgPT4ge1xuICBmcm9tLmRpc2FibGVkID0gdHJ1ZTtcbiAgdG8uZGlzYWJsZWQgPSB0cnVlO1xuICBzZWFyY2hJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG59O1xuXG5jb25zdCBlbmFibGVGb3JtID0gKCkgPT4ge1xuICBmcm9tLmRpc2FibGVkID0gZmFsc2U7XG4gIHRvLmRpc2FibGVkID0gZmFsc2U7XG4gIHNlYXJjaEljb24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmV4cG9ydCBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZXZ0KSA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIWlzRm9ybVZhbGlkKCkpIHtcbiAgICBhbGVydCgn0JLRi9Cx0LXRgNC40YLQtSDQs9C+0YDQvtC0INC40Lcg0YHQv9C40YHQutCwJyk7XG4gIH0gZWxzZSB7XG4gICAgZGlzYWJsZUZvcm0oKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNob3dSZXN1bHRzKCk7XG4gICAgICBlbmFibGVGb3JtKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn07IiwiaW1wb3J0IHsgcmVzdWx0cywgc2VhcmNoSW1hZ2UgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5cbmV4cG9ydCBjb25zdCBzaG93UmVzdWx0cyA9ICgpID0+IHtcbiAgcmVzdWx0cy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBzZWFyY2hJbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuZXhwb3J0IGNvbnN0IGhpZGVSZXN1bHRzID0gKCkgPT4ge1xuICByZXN1bHRzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHNlYXJjaEltYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufTsiLCJpbXBvcnQge2Zvcm0sIGZyb20sIHRvfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IHN1Z2dlc3Rpb25zV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zdWdnZXN0aW9ucycpO1xuXG5jb25zdCByZW5kZXJTdWdnZXN0aW9ucyA9IChkYXRhKSA9PiB7XG4gIHN1Z2dlc3Rpb25zV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgZGF0YS5zdWdnZXN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgc3VnZ2VzdGlvbnNXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxsaSBjbGFzcz1cInN1Z2dlc3Rpb25zX19pdGVtXCI+JHtpdGVtLnZhbHVlfTwvbGk+YCk7XG4gIH0pO1xufTtcblxuY29uc3Qgb25TdWdnZXN0aW9uc1dyYXBwZXJDbGljayA9IChldnQpID0+IHtcbiAgaWYgKCFldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VnZ2VzdGlvbnNfX2l0ZW0nKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZm9ybS5kYXRhc2V0LmRpcmVjdGlvbiA9PT0gJ2Zyb20nKSB7XG4gICAgZnJvbS52YWx1ZSA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgZm9ybS5kYXRhc2V0LmZyb20gPSBldnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIHN1Z2dlc3Rpb25zV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGZvcm0uZGF0YXNldC5kaXJlY3Rpb24gPT09ICd0bycpIHtcbiAgICB0by52YWx1ZSA9IGV2dC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgZm9ybS5kYXRhc2V0LnRvID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBzdWdnZXN0aW9uc1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG5zdWdnZXN0aW9uc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblN1Z2dlc3Rpb25zV3JhcHBlckNsaWNrKTtcblxuZXhwb3J0IHsgcmVuZGVyU3VnZ2VzdGlvbnMgfTsiLCIvLyBEYWRhdGFcbmV4cG9ydCBjb25zdCB1cmwgPSAnaHR0cHM6Ly9zdWdnZXN0aW9ucy5kYWRhdGEucnUvc3VnZ2VzdGlvbnMvYXBpLzRfMS9ycy9zdWdnZXN0L2FkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IHRva2VuID0gJzAwYjJmYWY1OTUxZWVlYzMyNjU4ZDA3MTA2ODdjMTllMmRmMTBlNGInO1xuLy8gU2VhcmNoIGZvcm1cbmV4cG9ydCBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlYXJjaC1mb3JtJyk7XG5leHBvcnQgY29uc3QgZnJvbSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmpzLWZyb20nKTtcbmV4cG9ydCBjb25zdCB0byA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmpzLXRvJyk7XG5leHBvcnQgY29uc3QgbG9hZGVyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuanMtbG9hZGVyJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoSWNvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmpzLXNlYXJjaC1pY29uJyk7XG4vLyBTZWFyY2ggcmVzdWx0c1xuZXhwb3J0IGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2VhcmNoLXJlc3VsdHMnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gtaW1hZ2UnKTtcbi8vIENhbGwgbWFuYWdlclxuZXhwb3J0IGNvbnN0IGNhbGxNYW5hZ2VyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jYWxsLW1hbmFnZXItZm9ybScpO1xuZXhwb3J0IGNvbnN0IGNhbGxNYW5hZ2VyUGhvbmVJbnB1dCA9IGNhbGxNYW5hZ2VyRm9ybS5xdWVyeVNlbGVjdG9yKCcuanMtY2FsbC1tYW5hZ2VyLXBob25lLWlucHV0Jyk7XG4vLyBNYXNrIG9wdGlvbnNcbmV4cG9ydCBjb25zdCBtYXNrT3B0aW9ucyA9IHtcbiAgbWFzazogJyt7N30oMDAwKTAwMC0wMC0wMCdcbn07XG4iLCJpbXBvcnQgSFRNTE1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi9tYXNrLWVsZW1lbnQuanMnO1xuXG5jbGFzcyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgZXh0ZW5kcyBIVE1MTWFza0VsZW1lbnQge1xuICAvKiogUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgZ2V0IF91bnNhZmVTZWxlY3Rpb25TdGFydCgpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuICAgIGNvbnN0IGFuY2hvck9mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0O1xuICAgIGNvbnN0IGZvY3VzT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5mb2N1c09mZnNldDtcbiAgICBpZiAoZm9jdXNPZmZzZXQgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPCBmb2N1c09mZnNldCkge1xuICAgICAgcmV0dXJuIGFuY2hvck9mZnNldDtcbiAgICB9XG4gICAgcmV0dXJuIGZvY3VzT2Zmc2V0O1xuICB9XG5cbiAgLyoqIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIGVuZCAqL1xuICBnZXQgX3Vuc2FmZVNlbGVjdGlvbkVuZCgpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuICAgIGNvbnN0IGFuY2hvck9mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0O1xuICAgIGNvbnN0IGZvY3VzT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5mb2N1c09mZnNldDtcbiAgICBpZiAoZm9jdXNPZmZzZXQgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPT0gbnVsbCB8fCBhbmNob3JPZmZzZXQgPiBmb2N1c09mZnNldCkge1xuICAgICAgcmV0dXJuIGFuY2hvck9mZnNldDtcbiAgICB9XG4gICAgcmV0dXJuIGZvY3VzT2Zmc2V0O1xuICB9XG5cbiAgLyoqIFNldHMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uICovXG4gIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgIGlmICghdGhpcy5yb290RWxlbWVudC5jcmVhdGVSYW5nZSkgcmV0dXJuO1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yb290RWxlbWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMuaW5wdXQuZmlyc3RDaGlsZCB8fCB0aGlzLmlucHV0LCBzdGFydCk7XG4gICAgcmFuZ2Uuc2V0RW5kKHRoaXMuaW5wdXQubGFzdENoaWxkIHx8IHRoaXMuaW5wdXQsIGVuZCk7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBIVE1MRWxlbWVudCB2YWx1ZSAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQudGV4dENvbnRlbnQgfHwgJyc7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5pbnB1dC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9XG59XG5JTWFzay5IVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgPSBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgSFRNTE1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi9tYXNrLWVsZW1lbnQuanMnO1xuXG4vKiogQnJpZGdlIGJldHdlZW4gSW5wdXRFbGVtZW50IGFuZCB7QGxpbmsgTWFza2VkfSAqL1xuY2xhc3MgSFRNTElucHV0TWFza0VsZW1lbnQgZXh0ZW5kcyBIVE1MTWFza0VsZW1lbnQge1xuICAvKiogSW5wdXRFbGVtZW50IHRvIHVzZSBtYXNrIG9uICovXG5cbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICBzdXBlcihpbnB1dCk7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICB9XG5cbiAgLyoqIFJldHVybnMgSW5wdXRFbGVtZW50IHNlbGVjdGlvbiBzdGFydCAqL1xuICBnZXQgX3Vuc2FmZVNlbGVjdGlvblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0ICE9IG51bGwgPyB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0IDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gIH1cblxuICAvKiogUmV0dXJucyBJbnB1dEVsZW1lbnQgc2VsZWN0aW9uIGVuZCAqL1xuICBnZXQgX3Vuc2FmZVNlbGVjdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gIH1cblxuICAvKiogU2V0cyBJbnB1dEVsZW1lbnQgc2VsZWN0aW9uICovXG4gIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuSU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xuXG5leHBvcnQgeyBIVE1MSW5wdXRNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgTWFza0VsZW1lbnQgZnJvbSAnLi9tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuY29uc3QgS0VZX1ogPSA5MDtcbmNvbnN0IEtFWV9ZID0gODk7XG5cbi8qKiBCcmlkZ2UgYmV0d2VlbiBIVE1MRWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cbmNsYXNzIEhUTUxNYXNrRWxlbWVudCBleHRlbmRzIE1hc2tFbGVtZW50IHtcbiAgLyoqIEhUTUxFbGVtZW50IHRvIHVzZSBtYXNrIG9uICovXG5cbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLl9vbktleWRvd24gPSB0aGlzLl9vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQmVmb3JlaW5wdXQgPSB0aGlzLl9vbkJlZm9yZWlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Db21wb3NpdGlvbkVuZCA9IHRoaXMuX29uQ29tcG9zaXRpb25FbmQuYmluZCh0aGlzKTtcbiAgfVxuICBnZXQgcm9vdEVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzJGlucHV0JGdldFJvb3RObywgX3RoaXMkaW5wdXQkZ2V0Um9vdE5vMiwgX3RoaXMkaW5wdXQ7XG4gICAgcmV0dXJuIChfdGhpcyRpbnB1dCRnZXRSb290Tm8gPSAoX3RoaXMkaW5wdXQkZ2V0Um9vdE5vMiA9IChfdGhpcyRpbnB1dCA9IHRoaXMuaW5wdXQpLmdldFJvb3ROb2RlKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkaW5wdXQkZ2V0Um9vdE5vMi5jYWxsKF90aGlzJGlucHV0KSkgIT0gbnVsbCA/IF90aGlzJGlucHV0JGdldFJvb3RObyA6IGRvY3VtZW50O1xuICB9XG5cbiAgLyoqIElzIGVsZW1lbnQgaW4gZm9jdXMgKi9cbiAgZ2V0IGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0ID09PSB0aGlzLnJvb3RFbGVtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKiogQmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzICovXG4gIGJpbmRFdmVudHMoaGFuZGxlcnMpIHtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vbklucHV0KTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWlucHV0JywgdGhpcy5fb25CZWZvcmVpbnB1dCk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMuX29uQ29tcG9zaXRpb25FbmQpO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZXJzLmRyb3ApO1xuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVycy5jbGljayk7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZXJzLmZvY3VzKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVycy5jb21taXQpO1xuICAgIHRoaXMuX2hhbmRsZXJzID0gaGFuZGxlcnM7XG4gIH1cbiAgX29uS2V5ZG93bihlKSB7XG4gICAgaWYgKHRoaXMuX2hhbmRsZXJzLnJlZG8gJiYgKGUua2V5Q29kZSA9PT0gS0VZX1ogJiYgZS5zaGlmdEtleSAmJiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgfHwgZS5rZXlDb2RlID09PSBLRVlfWSAmJiBlLmN0cmxLZXkpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMucmVkbyhlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhbmRsZXJzLnVuZG8gJiYgZS5rZXlDb2RlID09PSBLRVlfWiAmJiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy51bmRvKGUpO1xuICAgIH1cbiAgICBpZiAoIWUuaXNDb21wb3NpbmcpIHRoaXMuX2hhbmRsZXJzLnNlbGVjdGlvbkNoYW5nZShlKTtcbiAgfVxuICBfb25CZWZvcmVpbnB1dChlKSB7XG4gICAgaWYgKGUuaW5wdXRUeXBlID09PSAnaGlzdG9yeVVuZG8nICYmIHRoaXMuX2hhbmRsZXJzLnVuZG8pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy51bmRvKGUpO1xuICAgIH1cbiAgICBpZiAoZS5pbnB1dFR5cGUgPT09ICdoaXN0b3J5UmVkbycgJiYgdGhpcy5faGFuZGxlcnMucmVkbykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlZG8oZSk7XG4gICAgfVxuICB9XG4gIF9vbkNvbXBvc2l0aW9uRW5kKGUpIHtcbiAgICB0aGlzLl9oYW5kbGVycy5pbnB1dChlKTtcbiAgfVxuICBfb25JbnB1dChlKSB7XG4gICAgaWYgKCFlLmlzQ29tcG9zaW5nKSB0aGlzLl9oYW5kbGVycy5pbnB1dChlKTtcbiAgfVxuXG4gIC8qKiBVbmJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50cyAqL1xuICB1bmJpbmRFdmVudHMoKSB7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKTtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fb25JbnB1dCk7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmVpbnB1dCcsIHRoaXMuX29uQmVmb3JlaW5wdXQpO1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLl9vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9oYW5kbGVycy5kcm9wKTtcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlcnMuY2xpY2spO1xuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVycy5mb2N1cyk7XG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faGFuZGxlcnMuY29tbWl0KTtcbiAgICB0aGlzLl9oYW5kbGVycyA9IHt9O1xuICB9XG59XG5JTWFzay5IVE1MTWFza0VsZW1lbnQgPSBIVE1MTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IEhUTUxNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJjbGFzcyBJbnB1dEhpc3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgfVxuICBnZXQgY3VycmVudFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlc1t0aGlzLmN1cnJlbnRJbmRleF07XG4gIH1cbiAgZ2V0IGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmxlbmd0aCA9PT0gMDtcbiAgfVxuICBwdXNoKHN0YXRlKSB7XG4gICAgLy8gaWYgY3VycmVudCBpbmRleCBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGVsZW1lbnQgdGhlbiByZW1vdmUgdGhlIGZ1dHVyZVxuICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMuc3RhdGVzLmxlbmd0aCAtIDEpIHRoaXMuc3RhdGVzLmxlbmd0aCA9IHRoaXMuY3VycmVudEluZGV4ICsgMTtcbiAgICB0aGlzLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICBpZiAodGhpcy5zdGF0ZXMubGVuZ3RoID4gSW5wdXRIaXN0b3J5Lk1BWF9MRU5HVEgpIHRoaXMuc3RhdGVzLnNoaWZ0KCk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLnN0YXRlcy5sZW5ndGggLSAxO1xuICB9XG4gIGdvKHN0ZXBzKSB7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLmN1cnJlbnRJbmRleCArIHN0ZXBzLCAwKSwgdGhpcy5zdGF0ZXMubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xuICB9XG4gIHVuZG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ28oLTEpO1xuICB9XG4gIHJlZG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ28oKzEpO1xuICB9XG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc3RhdGVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICB9XG59XG5JbnB1dEhpc3RvcnkuTUFYX0xFTkdUSCA9IDEwMDtcblxuZXhwb3J0IHsgSW5wdXRIaXN0b3J5IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IEFjdGlvbkRldGFpbHMgZnJvbSAnLi4vY29yZS9hY3Rpb24tZGV0YWlscy5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzaywgeyBtYXNrZWRDbGFzcyB9IGZyb20gJy4uL21hc2tlZC9mYWN0b3J5LmpzJztcbmltcG9ydCBNYXNrRWxlbWVudCBmcm9tICcuL21hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSFRNTElucHV0TWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLWlucHV0LW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgSW5wdXRIaXN0b3J5IGZyb20gJy4vaW5wdXQtaGlzdG9yeS5qcyc7XG5pbXBvcnQgJy4vaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuXG4vKiogTGlzdGVucyB0byBlbGVtZW50IGV2ZW50cyBhbmQgY29udHJvbHMgY2hhbmdlcyBiZXR3ZWVuIGVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5jbGFzcyBJbnB1dE1hc2sge1xuICAvKipcbiAgICBWaWV3IGVsZW1lbnRcbiAgKi9cblxuICAvKiogSW50ZXJuYWwge0BsaW5rIE1hc2tlZH0gbW9kZWwgKi9cblxuICBjb25zdHJ1Y3RvcihlbCwgb3B0cykge1xuICAgIHRoaXMuZWwgPSBlbCBpbnN0YW5jZW9mIE1hc2tFbGVtZW50ID8gZWwgOiBlbC5pc0NvbnRlbnRFZGl0YWJsZSAmJiBlbC50YWdOYW1lICE9PSAnSU5QVVQnICYmIGVsLnRhZ05hbWUgIT09ICdURVhUQVJFQScgPyBuZXcgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KGVsKSA6IG5ldyBIVE1MSW5wdXRNYXNrRWxlbWVudChlbCk7XG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKG9wdHMpO1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuX3Jhd0lucHV0VmFsdWUgPSAnJztcbiAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSW5wdXRIaXN0b3J5KCk7XG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbiA9IHRoaXMuX3NhdmVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkRyb3AgPSB0aGlzLl9vbkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2xpY2sgPSB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25VbmRvID0gdGhpcy5fb25VbmRvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25SZWRvID0gdGhpcy5fb25SZWRvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGlnbkN1cnNvciA9IHRoaXMuYWxpZ25DdXJzb3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkgPSB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG5cbiAgICAvLyByZWZyZXNoXG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuICBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICB2YXIgX3RoaXMkbWFza2VkO1xuICAgIHJldHVybiBtYXNrID09IG51bGwgfHwgKChfdGhpcyRtYXNrZWQgPSB0aGlzLm1hc2tlZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG1hc2tlZC5tYXNrRXF1YWxzKG1hc2spKTtcbiAgfVxuXG4gIC8qKiBNYXNrZWQgKi9cbiAgZ2V0IG1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XG4gIH1cbiAgc2V0IG1hc2sobWFzaykge1xuICAgIGlmICh0aGlzLm1hc2tFcXVhbHMobWFzaykpIHJldHVybjtcbiAgICBpZiAoIShtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSAmJiB0aGlzLm1hc2tlZC5jb25zdHJ1Y3RvciA9PT0gbWFza2VkQ2xhc3MobWFzaykpIHtcbiAgICAgIC8vIFRPRE8gXCJhbnlcIiBubyBpZGVhXG4gICAgICB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgbWFza1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1hc2tlZCA9IG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQgPyBtYXNrIDogY3JlYXRlTWFzayh7XG4gICAgICBtYXNrXG4gICAgfSk7XG4gICAgbWFza2VkLnVubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgIHRoaXMubWFza2VkID0gbWFza2VkO1xuICB9XG5cbiAgLyoqIFJhdyB2YWx1ZSAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZShzdHIpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gc3RyKSByZXR1cm47XG4gICAgdGhpcy5tYXNrZWQudmFsdWUgPSBzdHI7XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCdhdXRvJyk7XG4gIH1cblxuICAvKiogVW5tYXNrZWQgdmFsdWUgKi9cbiAgZ2V0IHVubWFza2VkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VubWFza2VkVmFsdWU7XG4gIH1cbiAgc2V0IHVubWFza2VkVmFsdWUoc3RyKSB7XG4gICAgaWYgKHRoaXMudW5tYXNrZWRWYWx1ZSA9PT0gc3RyKSByZXR1cm47XG4gICAgdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHN0cjtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woJ2F1dG8nKTtcbiAgfVxuXG4gIC8qKiBSYXcgaW5wdXQgdmFsdWUgKi9cbiAgZ2V0IHJhd0lucHV0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd0lucHV0VmFsdWU7XG4gIH1cbiAgc2V0IHJhd0lucHV0VmFsdWUoc3RyKSB7XG4gICAgaWYgKHRoaXMucmF3SW5wdXRWYWx1ZSA9PT0gc3RyKSByZXR1cm47XG4gICAgdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZSA9IHN0cjtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gIH1cblxuICAvKiogVHlwZWQgdW5tYXNrZWQgdmFsdWUgKi9cbiAgZ2V0IHR5cGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLnR5cGVkVmFsdWU7XG4gIH1cbiAgc2V0IHR5cGVkVmFsdWUodmFsKSB7XG4gICAgaWYgKHRoaXMubWFza2VkLnR5cGVkVmFsdWVFcXVhbHModmFsKSkgcmV0dXJuO1xuICAgIHRoaXMubWFza2VkLnR5cGVkVmFsdWUgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCdhdXRvJyk7XG4gIH1cblxuICAvKiogRGlzcGxheSB2YWx1ZSAqL1xuICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICAvKiogU3RhcnRzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50cyAqL1xuICBfYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmVsLmJpbmRFdmVudHMoe1xuICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLl9zYXZlU2VsZWN0aW9uLFxuICAgICAgaW5wdXQ6IHRoaXMuX29uSW5wdXQsXG4gICAgICBkcm9wOiB0aGlzLl9vbkRyb3AsXG4gICAgICBjbGljazogdGhpcy5fb25DbGljayxcbiAgICAgIGZvY3VzOiB0aGlzLl9vbkZvY3VzLFxuICAgICAgY29tbWl0OiB0aGlzLl9vbkNoYW5nZSxcbiAgICAgIHVuZG86IHRoaXMuX29uVW5kbyxcbiAgICAgIHJlZG86IHRoaXMuX29uUmVkb1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFN0b3BzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50cyAqL1xuICBfdW5iaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLmVsKSB0aGlzLmVsLnVuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgLyoqIEZpcmVzIGN1c3RvbSBldmVudCAqL1xuICBfZmlyZUV2ZW50KGV2LCBlKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGwgPT4gbChlKSk7XG4gIH1cblxuICAvKiogQ3VycmVudCBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgZ2V0IHNlbGVjdGlvblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25TdGFydDtcbiAgfVxuXG4gIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuICBnZXQgY3Vyc29yUG9zKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25FbmQ7XG4gIH1cbiAgc2V0IGN1cnNvclBvcyhwb3MpIHtcbiAgICBpZiAoIXRoaXMuZWwgfHwgIXRoaXMuZWwuaXNBY3RpdmUpIHJldHVybjtcbiAgICB0aGlzLmVsLnNlbGVjdChwb3MsIHBvcyk7XG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICB9XG5cbiAgLyoqIFN0b3JlcyBjdXJyZW50IHNlbGVjdGlvbiAqL1xuICBfc2F2ZVNlbGVjdGlvbiggLyogZXYgKi9cbiAgKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0VsZW1lbnQgdmFsdWUgd2FzIGNoYW5nZWQgb3V0c2lkZSBvZiBtYXNrLiBTeW5jcm9uaXplIG1hc2sgdXNpbmcgYG1hc2sudXBkYXRlVmFsdWUoKWAgdG8gd29yayBwcm9wZXJseS4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtcbiAgICAgIHN0YXJ0OiB0aGlzLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgZW5kOiB0aGlzLmN1cnNvclBvc1xuICAgIH07XG4gIH1cblxuICAvKiogU3luY3Jvbml6ZXMgbW9kZWwgdmFsdWUgZnJvbSB2aWV3ICovXG4gIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMubWFza2VkLnZhbHVlID0gdGhpcy5lbC52YWx1ZTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xuICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgIHRoaXMuX3Jhd0lucHV0VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICB9XG5cbiAgLyoqIFN5bmNyb25pemVzIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZSwgZmlyZXMgY2hhbmdlIGV2ZW50cyAqL1xuICB1cGRhdGVDb250cm9sKGN1cnNvclBvcykge1xuICAgIGNvbnN0IG5ld1VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgY29uc3QgbmV3UmF3SW5wdXRWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gICAgY29uc3QgbmV3RGlzcGxheVZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG4gICAgY29uc3QgaXNDaGFuZ2VkID0gdGhpcy51bm1hc2tlZFZhbHVlICE9PSBuZXdVbm1hc2tlZFZhbHVlIHx8IHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlIHx8IHRoaXMuX3Jhd0lucHV0VmFsdWUgIT09IG5ld1Jhd0lucHV0VmFsdWU7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9IG5ld1VubWFza2VkVmFsdWU7XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLl9yYXdJbnB1dFZhbHVlID0gbmV3UmF3SW5wdXRWYWx1ZTtcbiAgICBpZiAodGhpcy5lbC52YWx1ZSAhPT0gbmV3RGlzcGxheVZhbHVlKSB0aGlzLmVsLnZhbHVlID0gbmV3RGlzcGxheVZhbHVlO1xuICAgIGlmIChjdXJzb3JQb3MgPT09ICdhdXRvJykgdGhpcy5hbGlnbkN1cnNvcigpO2Vsc2UgaWYgKGN1cnNvclBvcyAhPSBudWxsKSB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvcztcbiAgICBpZiAoaXNDaGFuZ2VkKSB0aGlzLl9maXJlQ2hhbmdlRXZlbnRzKCk7XG4gICAgaWYgKCF0aGlzLl9oaXN0b3J5Q2hhbmdpbmcgJiYgKGlzQ2hhbmdlZCB8fCB0aGlzLmhpc3RvcnkuaXNFbXB0eSkpIHRoaXMuaGlzdG9yeS5wdXNoKHtcbiAgICAgIHVubWFza2VkVmFsdWU6IG5ld1VubWFza2VkVmFsdWUsXG4gICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZDogdGhpcy5jdXJzb3JQb3NcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIG9wdGlvbnMgd2l0aCBkZWVwIGVxdWFsIGNoZWNrLCByZWNyZWF0ZXMge0BsaW5rIE1hc2tlZH0gbW9kZWwgaWYgbWFzayB0eXBlIGNoYW5nZXMgKi9cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWFzayxcbiAgICAgIC4uLnJlc3RPcHRzXG4gICAgfSA9IG9wdHM7IC8vIFRPRE8gdHlwZXMsIHllcywgbWFzayBpcyBvcHRpb25hbFxuXG4gICAgY29uc3QgdXBkYXRlTWFzayA9ICF0aGlzLm1hc2tFcXVhbHMobWFzayk7XG4gICAgY29uc3QgdXBkYXRlT3B0cyA9IHRoaXMubWFza2VkLm9wdGlvbnNJc0NoYW5nZWQocmVzdE9wdHMpO1xuICAgIGlmICh1cGRhdGVNYXNrKSB0aGlzLm1hc2sgPSBtYXNrO1xuICAgIGlmICh1cGRhdGVPcHRzKSB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHJlc3RPcHRzKTsgLy8gVE9ET1xuXG4gICAgaWYgKHVwZGF0ZU1hc2sgfHwgdXBkYXRlT3B0cykgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gIH1cblxuICAvKiogVXBkYXRlcyBjdXJzb3IgKi9cbiAgdXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgIGlmIChjdXJzb3JQb3MgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuXG4gICAgLy8gYWxzbyBxdWV1ZSBjaGFuZ2UgY3Vyc29yIGZvciBtb2JpbGUgYnJvd3NlcnNcbiAgICB0aGlzLl9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICB9XG5cbiAgLyoqIERlbGF5cyBjdXJzb3IgdXBkYXRlIHRvIHN1cHBvcnQgbW9iaWxlIGJyb3dzZXJzICovXG4gIF9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpIHtcbiAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuICAgIHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgIHRoaXMuX2N1cnNvckNoYW5naW5nID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZWwpIHJldHVybjsgLy8gaWYgd2FzIGRlc3Ryb3llZFxuICAgICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcztcbiAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgLyoqIEZpcmVzIGN1c3RvbSBldmVudHMgKi9cbiAgX2ZpcmVDaGFuZ2VFdmVudHMoKSB7XG4gICAgdGhpcy5fZmlyZUV2ZW50KCdhY2NlcHQnLCB0aGlzLl9pbnB1dEV2ZW50KTtcbiAgICBpZiAodGhpcy5tYXNrZWQuaXNDb21wbGV0ZSkgdGhpcy5fZmlyZUV2ZW50KCdjb21wbGV0ZScsIHRoaXMuX2lucHV0RXZlbnQpO1xuICB9XG5cbiAgLyoqIEFib3J0cyBkZWxheWVkIGN1cnNvciB1cGRhdGUgKi9cbiAgX2Fib3J0VXBkYXRlQ3Vyc29yKCkge1xuICAgIGlmICh0aGlzLl9jdXJzb3JDaGFuZ2luZykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2N1cnNvckNoYW5naW5nKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jdXJzb3JDaGFuZ2luZztcbiAgICB9XG4gIH1cblxuICAvKiogQWxpZ25zIGN1cnNvciB0byBuZWFyZXN0IGF2YWlsYWJsZSBwb3NpdGlvbiAqL1xuICBhbGlnbkN1cnNvcigpIHtcbiAgICB0aGlzLmN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3ModGhpcy5jdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKSk7XG4gIH1cblxuICAvKiogQWxpZ25zIGN1cnNvciBvbmx5IGlmIHNlbGVjdGlvbiBpcyBlbXB0eSAqL1xuICBhbGlnbkN1cnNvckZyaWVuZGx5KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG4gICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICB9XG5cbiAgLyoqIEFkZHMgbGlzdGVuZXIgb24gY3VzdG9tIGV2ZW50ICovXG4gIG9uKGV2LCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSB0aGlzLl9saXN0ZW5lcnNbZXZdID0gW107XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2XS5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgY3VzdG9tIGV2ZW50IGxpc3RlbmVyICovXG4gIG9mZihldiwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBoSW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbZXZdLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYgKGhJbmRleCA+PSAwKSB0aGlzLl9saXN0ZW5lcnNbZXZdLnNwbGljZShoSW5kZXgsIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdmlldyBpbnB1dCBldmVudCAqL1xuICBfb25JbnB1dChlKSB7XG4gICAgdGhpcy5faW5wdXRFdmVudCA9IGU7XG4gICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IEFjdGlvbkRldGFpbHMoe1xuICAgICAgLy8gbmV3IHN0YXRlXG4gICAgICB2YWx1ZTogdGhpcy5lbC52YWx1ZSxcbiAgICAgIGN1cnNvclBvczogdGhpcy5jdXJzb3JQb3MsXG4gICAgICAvLyBvbGQgc3RhdGVcbiAgICAgIG9sZFZhbHVlOiB0aGlzLmRpc3BsYXlWYWx1ZSxcbiAgICAgIG9sZFNlbGVjdGlvbjogdGhpcy5fc2VsZWN0aW9uXG4gICAgfSk7XG4gICAgY29uc3Qgb2xkUmF3VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubWFza2VkLnNwbGljZShkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zLCBkZXRhaWxzLnJlbW92ZWQubGVuZ3RoLCBkZXRhaWxzLmluc2VydGVkLCBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiwge1xuICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICByYXc6IHRydWVcbiAgICB9KS5vZmZzZXQ7XG5cbiAgICAvLyBmb3JjZSBhbGlnbiBpbiByZW1vdmUgZGlyZWN0aW9uIG9ubHkgaWYgbm8gaW5wdXQgY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgLy8gb3RoZXJ3aXNlIHdlIHN0aWxsIG5lZWQgdG8gYWxpZ24gd2l0aCBOT05FICh0byBnZXQgb3V0IGZyb20gZml4ZWQgc3ltYm9scyBmb3IgaW5zdGFuY2UpXG4gICAgY29uc3QgcmVtb3ZlRGlyZWN0aW9uID0gb2xkUmF3VmFsdWUgPT09IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWUgPyBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiA6IERJUkVDVElPTi5OT05FO1xuICAgIGxldCBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoZGV0YWlscy5zdGFydENoYW5nZVBvcyArIG9mZnNldCwgcmVtb3ZlRGlyZWN0aW9uKTtcbiAgICBpZiAocmVtb3ZlRGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSkgY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgRElSRUNUSU9OLk5PTkUpO1xuICAgIHRoaXMudXBkYXRlQ29udHJvbChjdXJzb3JQb3MpO1xuICAgIGRlbGV0ZSB0aGlzLl9pbnB1dEV2ZW50O1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdmlldyBjaGFuZ2UgZXZlbnQgYW5kIGNvbW1pdHMgbW9kZWwgdmFsdWUgKi9cbiAgX29uQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmRpc3BsYXlWYWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdmlldyBkcm9wIGV2ZW50LCBwcmV2ZW50cyBieSBkZWZhdWx0ICovXG4gIF9vbkRyb3AoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cbiAgX29uRm9jdXMoZXYpIHtcbiAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkoKTtcbiAgfVxuXG4gIC8qKiBSZXN0b3JlIGxhc3Qgc2VsZWN0aW9uIG9uIGZvY3VzICovXG4gIF9vbkNsaWNrKGV2KSB7XG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XG4gIH1cbiAgX29uVW5kbygpIHtcbiAgICB0aGlzLl9hcHBseUhpc3RvcnlTdGF0ZSh0aGlzLmhpc3RvcnkudW5kbygpKTtcbiAgfVxuICBfb25SZWRvKCkge1xuICAgIHRoaXMuX2FwcGx5SGlzdG9yeVN0YXRlKHRoaXMuaGlzdG9yeS5yZWRvKCkpO1xuICB9XG4gIF9hcHBseUhpc3RvcnlTdGF0ZShzdGF0ZSkge1xuICAgIGlmICghc3RhdGUpIHJldHVybjtcbiAgICB0aGlzLl9oaXN0b3J5Q2hhbmdpbmcgPSB0cnVlO1xuICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHN0YXRlLnVubWFza2VkVmFsdWU7XG4gICAgdGhpcy5lbC5zZWxlY3Qoc3RhdGUuc2VsZWN0aW9uLnN0YXJ0LCBzdGF0ZS5zZWxlY3Rpb24uZW5kKTtcbiAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5faGlzdG9yeUNoYW5naW5nID0gZmFsc2U7XG4gIH1cblxuICAvKiogVW5iaW5kIHZpZXcgZXZlbnRzIGFuZCByZW1vdmVzIGVsZW1lbnQgcmVmZXJlbmNlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdW5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgZGVsZXRlIHRoaXMuZWw7XG4gIH1cbn1cbklNYXNrLklucHV0TWFzayA9IElucHV0TWFzaztcblxuZXhwb3J0IHsgSW5wdXRNYXNrIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKiAgR2VuZXJpYyBlbGVtZW50IEFQSSB0byB1c2Ugd2l0aCBtYXNrICovXG5jbGFzcyBNYXNrRWxlbWVudCB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgZ2V0IHNlbGVjdGlvblN0YXJ0KCkge1xuICAgIGxldCBzdGFydDtcbiAgICB0cnkge1xuICAgICAgc3RhcnQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydDtcbiAgICB9IGNhdGNoIHt9XG4gICAgcmV0dXJuIHN0YXJ0ICE9IG51bGwgPyBzdGFydCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cbiAgZ2V0IHNlbGVjdGlvbkVuZCgpIHtcbiAgICBsZXQgZW5kO1xuICAgIHRyeSB7XG4gICAgICBlbmQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25FbmQ7XG4gICAgfSBjYXRjaCB7fVxuICAgIHJldHVybiBlbmQgIT0gbnVsbCA/IGVuZCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgLyoqIFNhZmVseSBzZXRzIGVsZW1lbnQgc2VsZWN0aW9uICovXG4gIHNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0YXJ0ID09IG51bGwgfHwgZW5kID09IG51bGwgfHwgc3RhcnQgPT09IHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgZW5kID09PSB0aGlzLnNlbGVjdGlvbkVuZCkgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCk7XG4gICAgfSBjYXRjaCB7fVxuICB9XG5cbiAgLyoqICovXG4gIGdldCBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG59XG5JTWFzay5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xuXG5leHBvcnQgeyBNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgaW5wdXQgKi9cbmNsYXNzIEFjdGlvbkRldGFpbHMge1xuICAvKiogQ3VycmVudCBpbnB1dCB2YWx1ZSAqL1xuXG4gIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuXG4gIC8qKiBPbGQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogT2xkIHNlbGVjdGlvbiAqL1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xuXG4gICAgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcbiAgICB3aGlsZSAodGhpcy52YWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSAhPT0gdGhpcy5vbGRWYWx1ZS5zbGljZSgwLCB0aGlzLnN0YXJ0Q2hhbmdlUG9zKSkge1xuICAgICAgLS10aGlzLm9sZFNlbGVjdGlvbi5zdGFydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5zZXJ0ZWRDb3VudCkge1xuICAgICAgLy8gZG91YmxlIGNoZWNrIHJpZ2h0IHBhcnRcbiAgICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKHRoaXMuY3Vyc29yUG9zKSAhPT0gdGhpcy5vbGRWYWx1ZS5zbGljZSh0aGlzLm9sZFNlbGVjdGlvbi5lbmQpKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAtIHRoaXMuY3Vyc29yUG9zIDwgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLm9sZFNlbGVjdGlvbi5lbmQpICsrdGhpcy5vbGRTZWxlY3Rpb24uZW5kO2Vsc2UgKyt0aGlzLmN1cnNvclBvcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogU3RhcnQgY2hhbmdpbmcgcG9zaXRpb24gKi9cbiAgZ2V0IHN0YXJ0Q2hhbmdlUG9zKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmN1cnNvclBvcywgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQpO1xuICB9XG5cbiAgLyoqIEluc2VydGVkIHN5bWJvbHMgY291bnQgKi9cbiAgZ2V0IGluc2VydGVkQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcbiAgfVxuXG4gIC8qKiBJbnNlcnRlZCBzeW1ib2xzICovXG4gIGdldCBpbnNlcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5pbnNlcnRlZENvdW50KTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVkIHN5bWJvbHMgY291bnQgKi9cbiAgZ2V0IHJlbW92ZWRDb3VudCgpIHtcbiAgICAvLyBNYXRoLm1heCBmb3Igb3Bwb3NpdGUgb3BlcmF0aW9uXG4gICAgcmV0dXJuIE1hdGgubWF4KHRoaXMub2xkU2VsZWN0aW9uLmVuZCAtIHRoaXMuc3RhcnRDaGFuZ2VQb3MgfHxcbiAgICAvLyBmb3IgRGVsZXRlXG4gICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XG4gIH1cblxuICAvKiogUmVtb3ZlZCBzeW1ib2xzICovXG4gIGdldCByZW1vdmVkKCkge1xuICAgIHJldHVybiB0aGlzLm9sZFZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLnJlbW92ZWRDb3VudCk7XG4gIH1cblxuICAvKiogVW5jaGFuZ2VkIGhlYWQgc3ltYm9scyAqL1xuICBnZXQgaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcoMCwgdGhpcy5zdGFydENoYW5nZVBvcyk7XG4gIH1cblxuICAvKiogVW5jaGFuZ2VkIHRhaWwgc3ltYm9scyAqL1xuICBnZXQgdGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gIH1cblxuICAvKiogUmVtb3ZlIGRpcmVjdGlvbiAqL1xuICBnZXQgcmVtb3ZlRGlyZWN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yZW1vdmVkQ291bnQgfHwgdGhpcy5pbnNlcnRlZENvdW50KSByZXR1cm4gRElSRUNUSU9OLk5PTkU7XG5cbiAgICAvLyBhbGlnbiByaWdodCBpZiBkZWxldGUgYXQgcmlnaHRcbiAgICByZXR1cm4gKHRoaXMub2xkU2VsZWN0aW9uLmVuZCA9PT0gdGhpcy5jdXJzb3JQb3MgfHwgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQgPT09IHRoaXMuY3Vyc29yUG9zKSAmJlxuICAgIC8vIGlmIG5vdCByYW5nZSByZW1vdmVkIChldmVudCB3aXRoIGJhY2tzcGFjZSlcbiAgICB0aGlzLm9sZFNlbGVjdGlvbi5lbmQgPT09IHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0ID8gRElSRUNUSU9OLlJJR0hUIDogRElSRUNUSU9OLkxFRlQ7XG4gIH1cbn1cblxuZXhwb3J0IHsgQWN0aW9uRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgSU1hc2sgZnJvbSAnLi9ob2xkZXIuanMnO1xuXG4vKiogUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBtb2RlbCB2YWx1ZSAqL1xuY2xhc3MgQ2hhbmdlRGV0YWlscyB7XG4gIC8qKiBJbnNlcnRlZCBzeW1ib2xzICovXG5cbiAgLyoqIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsICovXG5cbiAgLyoqIFJhdyBpbnNlcnRlZCBpcyB1c2VkIGJ5IGR5bmFtaWMgbWFzayAqL1xuXG4gIC8qKiBDYW4gc2tpcCBjaGFycyAqL1xuXG4gIHN0YXRpYyBub3JtYWxpemUocHJlcCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHByZXApID8gcHJlcCA6IFtwcmVwLCBuZXcgQ2hhbmdlRGV0YWlscygpXTtcbiAgfVxuICBjb25zdHJ1Y3RvcihkZXRhaWxzKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpbnNlcnRlZDogJycsXG4gICAgICByYXdJbnNlcnRlZDogJycsXG4gICAgICB0YWlsU2hpZnQ6IDAsXG4gICAgICBza2lwOiBmYWxzZVxuICAgIH0sIGRldGFpbHMpO1xuICB9XG5cbiAgLyoqIEFnZ3JlZ2F0ZSBjaGFuZ2VzICovXG4gIGFnZ3JlZ2F0ZShkZXRhaWxzKSB7XG4gICAgdGhpcy5pbnNlcnRlZCArPSBkZXRhaWxzLmluc2VydGVkO1xuICAgIHRoaXMucmF3SW5zZXJ0ZWQgKz0gZGV0YWlscy5yYXdJbnNlcnRlZDtcbiAgICB0aGlzLnRhaWxTaGlmdCArPSBkZXRhaWxzLnRhaWxTaGlmdDtcbiAgICB0aGlzLnNraXAgPSB0aGlzLnNraXAgfHwgZGV0YWlscy5za2lwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFRvdGFsIG9mZnNldCBjb25zaWRlcmluZyBhbGwgY2hhbmdlcyAqL1xuICBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLnRhaWxTaGlmdCArIHRoaXMuaW5zZXJ0ZWQubGVuZ3RoO1xuICB9XG4gIGdldCBjb25zdW1lZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnJhd0luc2VydGVkKSB8fCB0aGlzLnNraXA7XG4gIH1cbiAgZXF1YWxzKGRldGFpbHMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRlZCA9PT0gZGV0YWlscy5pbnNlcnRlZCAmJiB0aGlzLnRhaWxTaGlmdCA9PT0gZGV0YWlscy50YWlsU2hpZnQgJiYgdGhpcy5yYXdJbnNlcnRlZCA9PT0gZGV0YWlscy5yYXdJbnNlcnRlZCAmJiB0aGlzLnNraXAgPT09IGRldGFpbHMuc2tpcDtcbiAgfVxufVxuSU1hc2suQ2hhbmdlRGV0YWlscyA9IENoYW5nZURldGFpbHM7XG5cbmV4cG9ydCB7IENoYW5nZURldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xuY2xhc3MgQ29udGludW91c1RhaWxEZXRhaWxzIHtcbiAgLyoqIFRhaWwgdmFsdWUgYXMgc3RyaW5nICovXG5cbiAgLyoqIFRhaWwgc3RhcnQgcG9zaXRpb24gKi9cblxuICAvKiogU3RhcnQgcG9zaXRpb24gKi9cblxuICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZnJvbSwgc3RvcCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAoZnJvbSA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tID0gMDtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgdGhpcy5zdG9wID0gc3RvcDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuICBleHRlbmQodGFpbCkge1xuICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xuICB9XG4gIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgIHJldHVybiBtYXNrZWQuYXBwZW5kKHRoaXMudG9TdHJpbmcoKSwge1xuICAgICAgdGFpbDogdHJ1ZVxuICAgIH0pLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICB9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICBzdG9wOiB0aGlzLnN0b3BcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICB9XG4gIHVuc2hpZnQoYmVmb3JlUG9zKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCB8fCBiZWZvcmVQb3MgIT0gbnVsbCAmJiB0aGlzLmZyb20gPj0gYmVmb3JlUG9zKSByZXR1cm4gJyc7XG4gICAgY29uc3Qgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVswXTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgxKTtcbiAgICByZXR1cm4gc2hpZnRDaGFyO1xuICB9XG4gIHNoaWZ0KCkge1xuICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcbiAgICBjb25zdCBzaGlmdENoYXIgPSB0aGlzLnZhbHVlW3RoaXMudmFsdWUubGVuZ3RoIC0gMV07XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgIHJldHVybiBzaGlmdENoYXI7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ29udGludW91c1RhaWxEZXRhaWxzIGFzIGRlZmF1bHQgfTtcbiIsIi8qKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudCAqL1xuZnVuY3Rpb24gSU1hc2soZWwsIG9wdHMpIHtcbiAgLy8gY3VycmVudGx5IGF2YWlsYWJsZSBvbmx5IGZvciBpbnB1dC1saWtlIGVsZW1lbnRzXG4gIHJldHVybiBuZXcgSU1hc2suSW5wdXRNYXNrKGVsLCBvcHRzKTtcbn1cblxuZXhwb3J0IHsgSU1hc2sgYXMgZGVmYXVsdCB9O1xuIiwiLyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuXG4vKiogQ2hlY2tzIGlmIHZhbHVlIGlzIG9iamVjdCAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHZhciBfb2JqJGNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9IG51bGwgJiYgKG9iaiA9PSBudWxsIHx8IChfb2JqJGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yKSA9PSBudWxsID8gdm9pZCAwIDogX29iaiRjb25zdHJ1Y3Rvci5uYW1lKSA9PT0gJ09iamVjdCc7XG59XG5mdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkgcmV0dXJuIHBpY2sob2JqLCAoXywgaykgPT4ga2V5cy5pbmNsdWRlcyhrKSk7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBfcmVmKSA9PiB7XG4gICAgbGV0IFtrLCB2XSA9IF9yZWY7XG4gICAgaWYgKGtleXModiwgaykpIGFjY1trXSA9IHY7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG4vKiogRGlyZWN0aW9uICovXG5jb25zdCBESVJFQ1RJT04gPSB7XG4gIE5PTkU6ICdOT05FJyxcbiAgTEVGVDogJ0xFRlQnLFxuICBGT1JDRV9MRUZUOiAnRk9SQ0VfTEVGVCcsXG4gIFJJR0hUOiAnUklHSFQnLFxuICBGT1JDRV9SSUdIVDogJ0ZPUkNFX1JJR0hUJ1xufTtcblxuLyoqIERpcmVjdGlvbiAqL1xuXG5mdW5jdGlvbiBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9MRUZUO1xuICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9SSUdIVDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxufVxuXG4vKiogRXNjYXBlcyByZWd1bGFyIGV4cHJlc3Npb24gY29udHJvbCBjaGFycyAqL1xuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59XG5cbi8vIGNsb25lZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9mYXN0LWRlZXAtZXF1YWwgd2l0aCBzbWFsbCBjaGFuZ2VzXG5mdW5jdGlvbiBvYmplY3RJbmNsdWRlcyhiLCBhKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgYXJyQSA9IEFycmF5LmlzQXJyYXkoYSksXG4gICAgYXJyQiA9IEFycmF5LmlzQXJyYXkoYik7XG4gIGxldCBpO1xuICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIGlmICghb2JqZWN0SW5jbHVkZXMoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGUsXG4gICAgICBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwLFxuICAgICAgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAvLyBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIGlmICghb2JqZWN0SW5jbHVkZXMoYltrZXlzW2ldXSwgYVtrZXlzW2ldXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogU2VsZWN0aW9uIHJhbmdlICovXG5cbmV4cG9ydCB7IERJUkVDVElPTiwgZXNjYXBlUmVnRXhwLCBmb3JjZURpcmVjdGlvbiwgaXNPYmplY3QsIGlzU3RyaW5nLCBvYmplY3RJbmNsdWRlcywgcGljayB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dE1hc2sgfSBmcm9tICcuL2NvbnRyb2xzL2lucHV0LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuL2NvcmUvaG9sZGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MSW5wdXRNYXNrRWxlbWVudCB9IGZyb20gJy4vY29udHJvbHMvaHRtbC1pbnB1dC1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoYW5nZURldGFpbHMgfSBmcm9tICcuL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuZXhwb3J0IHsgRElSRUNUSU9OLCBmb3JjZURpcmVjdGlvbiB9IGZyb20gJy4vY29yZS91dGlscy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZCB9IGZyb20gJy4vbWFza2VkL2Jhc2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWREYXRlIH0gZnJvbSAnLi9tYXNrZWQvZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZER5bmFtaWMgfSBmcm9tICcuL21hc2tlZC9keW5hbWljLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRW51bSB9IGZyb20gJy4vbWFza2VkL2VudW0uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVNYXNrLCBub3JtYWxpemVPcHRzIH0gZnJvbSAnLi9tYXNrZWQvZmFjdG9yeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZEZ1bmN0aW9uIH0gZnJvbSAnLi9tYXNrZWQvZnVuY3Rpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWROdW1iZXIgfSBmcm9tICcuL21hc2tlZC9udW1iZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRQYXR0ZXJuIH0gZnJvbSAnLi9tYXNrZWQvcGF0dGVybi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENodW5rc1RhaWxEZXRhaWxzIH0gZnJvbSAnLi9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIH0gZnJvbSAnLi9tYXNrZWQvcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGF0dGVybklucHV0RGVmaW5pdGlvbiB9IGZyb20gJy4vbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5leHBvcnQgeyBQSVBFX1RZUEUsIGNyZWF0ZVBpcGUsIHBpcGUgfSBmcm9tICcuL21hc2tlZC9waXBlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkUmFuZ2UgfSBmcm9tICcuL21hc2tlZC9yYW5nZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFJlZ0V4cCB9IGZyb20gJy4vbWFza2VkL3JlZ2V4cC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlcGVhdEJsb2NrIH0gZnJvbSAnLi9tYXNrZWQvcmVwZWF0LmpzJztcbmltcG9ydCAnLi9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9jb250cm9scy9pbnB1dC1oaXN0b3J5LmpzJztcbmltcG9ydCAnLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9jdXJzb3IuanMnO1xuXG50cnkge1xuICBnbG9iYWxUaGlzLklNYXNrID0gSU1hc2s7XG59IGNhdGNoIHt9XG5cbmV4cG9ydCB7IElNYXNrIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBESVJFQ1RJT04sIG9iamVjdEluY2x1ZGVzLCBmb3JjZURpcmVjdGlvbiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqIEFwcGVuZCBmbGFncyAqL1xuXG4vKiogRXh0cmFjdCBmbGFncyAqL1xuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy82MjIzXG5cbi8qKiBQcm92aWRlcyBjb21tb24gbWFza2luZyBzdHVmZiAqL1xuY2xhc3MgTWFza2VkIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIFRyYW5zZm9ybXMgdmFsdWUgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZyAqL1xuXG4gIC8qKiBUcmFuc2Zvcm1zIGVhY2ggY2hhciBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgLyoqIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlICovXG5cbiAgLyoqIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGF0IHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGb3JtYXQgdHlwZWQgdmFsdWUgdG8gc3RyaW5nICovXG5cbiAgLyoqIFBhcnNlIHN0cmluZyB0byBnZXQgdHlwZWQgdmFsdWUgKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgLi4uTWFza2VkLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0c1xuICAgIH0pO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBTZXRzIGFuZCBhcHBsaWVzIG5ldyBvcHRpb25zICovXG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIGlmICghdGhpcy5vcHRpb25zSXNDaGFuZ2VkKG9wdHMpKSByZXR1cm47XG4gICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcbiAgfVxuXG4gIC8qKiBTZXRzIG5ldyBvcHRpb25zICovXG4gIF91cGRhdGUob3B0cykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gIH1cblxuICAvKiogTWFzayBzdGF0ZSAqL1xuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF92YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWVcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gc3RhdGUuX3ZhbHVlO1xuICB9XG5cbiAgLyoqIFJlc2V0cyB2YWx1ZSAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5yZXNvbHZlKHZhbHVlLCB7XG4gICAgICBpbnB1dDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJlc29sdmUgbmV3IHZhbHVlICovXG4gIHJlc29sdmUodmFsdWUsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXBwZW5kKHZhbHVlLCBmbGFncywgJycpO1xuICAgIHRoaXMuZG9Db21taXQoKTtcbiAgfVxuICBnZXQgdW5tYXNrZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuICBzZXQgdW5tYXNrZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSwge30pO1xuICB9XG4gIGdldCB0eXBlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlID8gdGhpcy5wYXJzZSh0aGlzLnZhbHVlLCB0aGlzKSA6IHRoaXMudW5tYXNrZWRWYWx1ZTtcbiAgfVxuICBzZXQgdHlwZWRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmZvcm1hdCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybWF0KHZhbHVlLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogVmFsdWUgdGhhdCBpbmNsdWRlcyByYXcgdXNlciBpbnB1dCAqL1xuICBnZXQgcmF3SW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoLCB7XG4gICAgICByYXc6IHRydWVcbiAgICB9KTtcbiAgfVxuICBzZXQgcmF3SW5wdXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSwge1xuICAgICAgcmF3OiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXQgaXNGaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfVxuXG4gIC8qKiBGaW5kcyBuZWFyZXN0IGlucHV0IHBvc2l0aW9uIGluIGRpcmVjdGlvbiAqL1xuICBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICByZXR1cm4gY3Vyc29yUG9zO1xuICB9XG4gIHRvdGFsSW5wdXRQb3NpdGlvbnMoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoLCB0b1BvcyAtIGZyb21Qb3MpO1xuICB9XG5cbiAgLyoqIEV4dHJhY3RzIHZhbHVlIGluIHJhbmdlIGNvbnNpZGVyaW5nIGZsYWdzICovXG4gIGV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5VmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpO1xuICB9XG5cbiAgLyoqIEV4dHJhY3RzIHRhaWwgaW4gcmFuZ2UgKi9cbiAgZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcyksIGZyb21Qb3MpO1xuICB9XG5cbiAgLyoqIEFwcGVuZHMgdGFpbCAqL1xuICBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gIH1cblxuICAvKiogQXBwZW5kcyBjaGFyICovXG4gIF9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykge1xuICAgIGlmICghY2gpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICBpbnNlcnRlZDogY2gsXG4gICAgICByYXdJbnNlcnRlZDogY2hcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBcHBlbmRzIGNoYXIgKi9cbiAgX2FwcGVuZENoYXIoY2gsIGZsYWdzLCBjaGVja1RhaWwpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgY29uc2lzdGVudFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgZGV0YWlscztcbiAgICBbY2gsIGRldGFpbHNdID0gdGhpcy5kb1ByZXBhcmVDaGFyKGNoLCBmbGFncyk7XG4gICAgaWYgKGNoKSB7XG4gICAgICBkZXRhaWxzID0gZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpKTtcblxuICAgICAgLy8gVE9ETyBoYW5kbGUgYHNraXBgP1xuXG4gICAgICAvLyB0cnkgYGF1dG9maXhgIGxvb2thaGVhZFxuICAgICAgaWYgKCFkZXRhaWxzLnJhd0luc2VydGVkICYmIHRoaXMuYXV0b2ZpeCA9PT0gJ3BhZCcpIHtcbiAgICAgICAgY29uc3Qgbm9GaXhTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBjb25zaXN0ZW50U3RhdGU7XG4gICAgICAgIGxldCBmaXhEZXRhaWxzID0gdGhpcy5wYWQoZmxhZ3MpO1xuICAgICAgICBjb25zdCBjaERldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XG4gICAgICAgIGZpeERldGFpbHMgPSBmaXhEZXRhaWxzLmFnZ3JlZ2F0ZShjaERldGFpbHMpO1xuXG4gICAgICAgIC8vIGlmIGZpeCB3YXMgYXBwbGllZCBvclxuICAgICAgICAvLyBpZiBkZXRhaWxzIGFyZSBlcXVhbCB1c2Ugc2tpcCByZXN0b3Jpbmcgc3RhdGUgb3B0aW1pemF0aW9uXG4gICAgICAgIGlmIChjaERldGFpbHMucmF3SW5zZXJ0ZWQgfHwgZml4RGV0YWlscy5lcXVhbHMoZGV0YWlscykpIHtcbiAgICAgICAgICBkZXRhaWxzID0gZml4RGV0YWlscztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gbm9GaXhTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCkge1xuICAgICAgbGV0IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgbGV0IGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XG4gICAgICBpZiAoYXBwZW5kZWQgJiYgY2hlY2tUYWlsICE9IG51bGwpIHtcbiAgICAgICAgLy8gdmFsaWRhdGlvbiBvaywgY2hlY2sgdGFpbFxuICAgICAgICBjb25zdCBiZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAodGhpcy5vdmVyd3JpdGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNoZWNrVGFpbC51bnNoaWZ0KHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aCAtIGRldGFpbHMudGFpbFNoaWZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoID09PSBjaGVja1RhaWwudG9TdHJpbmcoKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gbm90IG9rLCB0cnkgc2hpZnRcbiAgICAgICAgaWYgKCEoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpICYmIHRoaXMub3ZlcndyaXRlID09PSAnc2hpZnQnKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IGJlZm9yZVRhaWxTdGF0ZTtcbiAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNoZWNrVGFpbC5zaGlmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWlsRGV0YWlscyA9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpO1xuICAgICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoID09PSBjaGVja1RhaWwudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBvaywgcm9sbGJhY2sgc3RhdGUgYWZ0ZXIgdGFpbFxuICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuc3RhdGUgPSBiZWZvcmVUYWlsU3RhdGU7XG4gICAgICB9XG5cbiAgICAgIC8vIHJldmVydCBhbGwgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIGlmICghYXBwZW5kZWQpIHtcbiAgICAgICAgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBjb25zaXN0ZW50U3RhdGU7XG4gICAgICAgIGlmIChjaGVja1RhaWwgJiYgY29uc2lzdGVudFRhaWwpIGNoZWNrVGFpbC5zdGF0ZSA9IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuXG4gIC8qKiBBcHBlbmRzIG9wdGlvbmFsIHBsYWNlaG9sZGVyIGF0IHRoZSBlbmQgKi9cbiAgX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICB9XG5cbiAgLyoqIEFwcGVuZHMgb3B0aW9uYWwgZWFnZXIgcGxhY2Vob2xkZXIgYXQgdGhlIGVuZCAqL1xuICBfYXBwZW5kRWFnZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cblxuICAvKiogQXBwZW5kcyBzeW1ib2xzIGNvbnNpZGVyaW5nIGZsYWdzICovXG4gIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgaWYgKCFpc1N0cmluZyhzdHIpKSB0aHJvdyBuZXcgRXJyb3IoJ3ZhbHVlIHNob3VsZCBiZSBzdHJpbmcnKTtcbiAgICBjb25zdCBjaGVja1RhaWwgPSBpc1N0cmluZyh0YWlsKSA/IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKSA6IHRhaWw7XG4gICAgaWYgKGZsYWdzICE9IG51bGwgJiYgZmxhZ3MudGFpbCkgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGRldGFpbHM7XG4gICAgW3N0ciwgZGV0YWlsc10gPSB0aGlzLmRvUHJlcGFyZShzdHIsIGZsYWdzKTtcbiAgICBmb3IgKGxldCBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgY29uc3QgZCA9IHRoaXMuX2FwcGVuZENoYXIoc3RyW2NpXSwgZmxhZ3MsIGNoZWNrVGFpbCk7XG4gICAgICBpZiAoIWQucmF3SW5zZXJ0ZWQgJiYgIXRoaXMuZG9Ta2lwSW52YWxpZChzdHJbY2ldLCBmbGFncywgY2hlY2tUYWlsKSkgYnJlYWs7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShkKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLmVhZ2VyID09PSB0cnVlIHx8IHRoaXMuZWFnZXIgPT09ICdhcHBlbmQnKSAmJiBmbGFncyAhPSBudWxsICYmIGZsYWdzLmlucHV0ICYmIHN0cikge1xuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kRWFnZXIoKSk7XG4gICAgfVxuXG4gICAgLy8gYXBwZW5kIHRhaWwgYnV0IGFnZ3JlZ2F0ZSBvbmx5IHRhaWxTaGlmdFxuICAgIGlmIChjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCkudGFpbFNoaWZ0O1xuICAgICAgLy8gVE9ETyBpdCdzIGEgZ29vZCBpZGVhIHRvIGNsZWFyIHN0YXRlIGFmdGVyIGFwcGVuZGluZyBlbmRzXG4gICAgICAvLyBidXQgaXQgY2F1c2VzIGJ1Z3Mgd2hlbiBvbmUgYXBwZW5kIGNhbGxzIGFub3RoZXIgKHdoZW4gZHluYW1pYyBkaXNwYXRjaCBzZXQgcmF3SW5wdXRWYWx1ZSlcbiAgICAgIC8vIHRoaXMuX3Jlc2V0QmVmb3JlVGFpbFN0YXRlKCk7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLmRpc3BsYXlWYWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cblxuICAvKiogQ2FsbHMgZnVuY3Rpb24gYW5kIHJlYXBwbGllcyBjdXJyZW50IHZhbHVlICovXG4gIHdpdGhWYWx1ZVJlZnJlc2goZm4pIHtcbiAgICBpZiAodGhpcy5fcmVmcmVzaGluZyB8fCAhdGhpcy5faW5pdGlhbGl6ZWQpIHJldHVybiBmbigpO1xuICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHJhd0lucHV0ID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCByZXQgPSBmbigpO1xuICAgIHRoaXMucmF3SW5wdXRWYWx1ZSA9IHJhd0lucHV0O1xuICAgIC8vIGFwcGVuZCBsb3N0IHRyYWlsaW5nIGNoYXJzIGF0IHRoZSBlbmRcbiAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlICE9PSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID09PSAwKSB7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZS5zbGljZSh0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgpLCB7fSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fcmVmcmVzaGluZztcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIHJ1bklzb2xhdGVkKGZuKSB7XG4gICAgaWYgKHRoaXMuX2lzb2xhdGVkIHx8ICF0aGlzLl9pbml0aWFsaXplZCkgcmV0dXJuIGZuKHRoaXMpO1xuICAgIHRoaXMuX2lzb2xhdGVkID0gdHJ1ZTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcmV0ID0gZm4odGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIGRlbGV0ZSB0aGlzLl9pc29sYXRlZDtcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGRvU2tpcEludmFsaWQoY2gsIGZsYWdzLCBjaGVja1RhaWwpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnNraXBJbnZhbGlkKTtcbiAgfVxuXG4gIC8qKiBQcmVwYXJlcyBzdHJpbmcgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZyAqL1xuICBkb1ByZXBhcmUoc3RyLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gQ2hhbmdlRGV0YWlscy5ub3JtYWxpemUodGhpcy5wcmVwYXJlID8gdGhpcy5wcmVwYXJlKHN0ciwgdGhpcywgZmxhZ3MpIDogc3RyKTtcbiAgfVxuXG4gIC8qKiBQcmVwYXJlcyBlYWNoIGNoYXIgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZyAqL1xuICBkb1ByZXBhcmVDaGFyKHN0ciwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIENoYW5nZURldGFpbHMubm9ybWFsaXplKHRoaXMucHJlcGFyZUNoYXIgPyB0aGlzLnByZXBhcmVDaGFyKHN0ciwgdGhpcywgZmxhZ3MpIDogc3RyKTtcbiAgfVxuXG4gIC8qKiBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZSAqL1xuICBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgcmV0dXJuICghdGhpcy52YWxpZGF0ZSB8fCB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUsIHRoaXMsIGZsYWdzKSkgJiYgKCF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKGZsYWdzKSk7XG4gIH1cblxuICAvKiogRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgYXQgdGhlIGVuZCBvZiBlZGl0aW5nICovXG4gIGRvQ29tbWl0KCkge1xuICAgIGlmICh0aGlzLmNvbW1pdCkgdGhpcy5jb21taXQodGhpcy52YWx1ZSwgdGhpcyk7XG4gIH1cbiAgc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgaW5zZXJ0ZWQsIHJlbW92ZURpcmVjdGlvbiwgZmxhZ3MpIHtcbiAgICBpZiAoaW5zZXJ0ZWQgPT09IHZvaWQgMCkge1xuICAgICAgaW5zZXJ0ZWQgPSAnJztcbiAgICB9XG4gICAgaWYgKHJlbW92ZURpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICByZW1vdmVEaXJlY3Rpb24gPSBESVJFQ1RJT04uTk9ORTtcbiAgICB9XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgdGFpbFBvcyA9IHN0YXJ0ICsgZGVsZXRlQ291bnQ7XG4gICAgY29uc3QgdGFpbCA9IHRoaXMuZXh0cmFjdFRhaWwodGFpbFBvcyk7XG4gICAgY29uc3QgZWFnZXJSZW1vdmUgPSB0aGlzLmVhZ2VyID09PSB0cnVlIHx8IHRoaXMuZWFnZXIgPT09ICdyZW1vdmUnO1xuICAgIGxldCBvbGRSYXdWYWx1ZTtcbiAgICBpZiAoZWFnZXJSZW1vdmUpIHtcbiAgICAgIHJlbW92ZURpcmVjdGlvbiA9IGZvcmNlRGlyZWN0aW9uKHJlbW92ZURpcmVjdGlvbik7XG4gICAgICBvbGRSYXdWYWx1ZSA9IHRoaXMuZXh0cmFjdElucHV0KDAsIHRhaWxQb3MsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0Q2hhbmdlUG9zID0gc3RhcnQ7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAvLyBpZiBpdCBpcyBqdXN0IGRlbGV0aW9uIHdpdGhvdXQgaW5zZXJ0aW9uXG4gICAgaWYgKHJlbW92ZURpcmVjdGlvbiAhPT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgIHN0YXJ0Q2hhbmdlUG9zID0gdGhpcy5uZWFyZXN0SW5wdXRQb3Moc3RhcnQsIGRlbGV0ZUNvdW50ID4gMSAmJiBzdGFydCAhPT0gMCAmJiAhZWFnZXJSZW1vdmUgPyBESVJFQ1RJT04uTk9ORSA6IHJlbW92ZURpcmVjdGlvbik7XG5cbiAgICAgIC8vIGFkanVzdCB0YWlsU2hpZnQgaWYgc3RhcnQgd2FzIGFsaWduZWRcbiAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gc3RhcnRDaGFuZ2VQb3MgLSBzdGFydDtcbiAgICB9XG4gICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5yZW1vdmUoc3RhcnRDaGFuZ2VQb3MpKTtcbiAgICBpZiAoZWFnZXJSZW1vdmUgJiYgcmVtb3ZlRGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSAmJiBvbGRSYXdWYWx1ZSA9PT0gdGhpcy5yYXdJbnB1dFZhbHVlKSB7XG4gICAgICBpZiAocmVtb3ZlRGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICBsZXQgdmFsTGVuZ3RoO1xuICAgICAgICB3aGlsZSAob2xkUmF3VmFsdWUgPT09IHRoaXMucmF3SW5wdXRWYWx1ZSAmJiAodmFsTGVuZ3RoID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoKSkge1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgICAgIHRhaWxTaGlmdDogLTFcbiAgICAgICAgICB9KSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHZhbExlbmd0aCAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZW1vdmVEaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICB0YWlsLnVuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuYXBwZW5kKGluc2VydGVkLCBmbGFncywgdGFpbCkpO1xuICB9XG4gIG1hc2tFcXVhbHMobWFzaykge1xuICAgIHJldHVybiB0aGlzLm1hc2sgPT09IG1hc2s7XG4gIH1cbiAgb3B0aW9uc0lzQ2hhbmdlZChvcHRzKSB7XG4gICAgcmV0dXJuICFvYmplY3RJbmNsdWRlcyh0aGlzLCBvcHRzKTtcbiAgfVxuICB0eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSB7XG4gICAgY29uc3QgdHZhbCA9IHRoaXMudHlwZWRWYWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHR2YWwgfHwgTWFza2VkLkVNUFRZX1ZBTFVFUy5pbmNsdWRlcyh2YWx1ZSkgJiYgTWFza2VkLkVNUFRZX1ZBTFVFUy5pbmNsdWRlcyh0dmFsKSB8fCAodGhpcy5mb3JtYXQgPyB0aGlzLmZvcm1hdCh2YWx1ZSwgdGhpcykgPT09IHRoaXMuZm9ybWF0KHRoaXMudHlwZWRWYWx1ZSwgdGhpcykgOiBmYWxzZSk7XG4gIH1cbiAgcGFkKGZsYWdzKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cbn1cbk1hc2tlZC5ERUZBVUxUUyA9IHtcbiAgc2tpcEludmFsaWQ6IHRydWVcbn07XG5NYXNrZWQuRU1QVFlfVkFMVUVTID0gW3VuZGVmaW5lZCwgbnVsbCwgJyddO1xuSU1hc2suTWFza2VkID0gTWFza2VkO1xuXG5leHBvcnQgeyBNYXNrZWQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCBNYXNrZWRSYW5nZSBmcm9tICcuL3JhbmdlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIERhdGUgbWFzayAqL1xuY2xhc3MgTWFza2VkRGF0ZSBleHRlbmRzIE1hc2tlZFBhdHRlcm4ge1xuICBzdGF0aWMgZXh0cmFjdFBhdHRlcm5PcHRpb25zKG9wdHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBtYXNrLFxuICAgICAgcGF0dGVybixcbiAgICAgIC4uLnBhdHRlcm5PcHRzXG4gICAgfSA9IG9wdHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBhdHRlcm5PcHRzLFxuICAgICAgbWFzazogaXNTdHJpbmcobWFzaykgPyBtYXNrIDogcGF0dGVyblxuICAgIH07XG4gIH1cblxuICAvKiogUGF0dGVybiBtYXNrIGZvciBkYXRlIGFjY29yZGluZyB0byB7QGxpbmsgTWFza2VkRGF0ZSNmb3JtYXR9ICovXG5cbiAgLyoqIFN0YXJ0IGRhdGUgKi9cblxuICAvKiogRW5kIGRhdGUgKi9cblxuICAvKiogRm9ybWF0IHR5cGVkIHZhbHVlIHRvIHN0cmluZyAqL1xuXG4gIC8qKiBQYXJzZSBzdHJpbmcgdG8gZ2V0IHR5cGVkIHZhbHVlICovXG5cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKE1hc2tlZERhdGUuZXh0cmFjdFBhdHRlcm5PcHRpb25zKHtcbiAgICAgIC4uLk1hc2tlZERhdGUuREVGQVVMVFMsXG4gICAgICAuLi5vcHRzXG4gICAgfSkpO1xuICB9XG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWFzayxcbiAgICAgIHBhdHRlcm4sXG4gICAgICBibG9ja3MsXG4gICAgICAuLi5wYXR0ZXJuT3B0c1xuICAgIH0gPSB7XG4gICAgICAuLi5NYXNrZWREYXRlLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0c1xuICAgIH07XG4gICAgY29uc3QgcGF0dGVybkJsb2NrcyA9IE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTKCkpO1xuICAgIC8vIGFkanVzdCB5ZWFyIGJsb2NrXG4gICAgaWYgKG9wdHMubWluKSBwYXR0ZXJuQmxvY2tzLlkuZnJvbSA9IG9wdHMubWluLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKG9wdHMubWF4KSBwYXR0ZXJuQmxvY2tzLlkudG8gPSBvcHRzLm1heC5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChvcHRzLm1pbiAmJiBvcHRzLm1heCAmJiBwYXR0ZXJuQmxvY2tzLlkuZnJvbSA9PT0gcGF0dGVybkJsb2Nrcy5ZLnRvKSB7XG4gICAgICBwYXR0ZXJuQmxvY2tzLm0uZnJvbSA9IG9wdHMubWluLmdldE1vbnRoKCkgKyAxO1xuICAgICAgcGF0dGVybkJsb2Nrcy5tLnRvID0gb3B0cy5tYXguZ2V0TW9udGgoKSArIDE7XG4gICAgICBpZiAocGF0dGVybkJsb2Nrcy5tLmZyb20gPT09IHBhdHRlcm5CbG9ja3MubS50bykge1xuICAgICAgICBwYXR0ZXJuQmxvY2tzLmQuZnJvbSA9IG9wdHMubWluLmdldERhdGUoKTtcbiAgICAgICAgcGF0dGVybkJsb2Nrcy5kLnRvID0gb3B0cy5tYXguZ2V0RGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHBhdHRlcm5CbG9ja3MsIHRoaXMuYmxvY2tzLCBibG9ja3MpO1xuICAgIHN1cGVyLl91cGRhdGUoe1xuICAgICAgLi4ucGF0dGVybk9wdHMsXG4gICAgICBtYXNrOiBpc1N0cmluZyhtYXNrKSA/IG1hc2sgOiBwYXR0ZXJuLFxuICAgICAgYmxvY2tzOiBwYXR0ZXJuQmxvY2tzXG4gICAgfSk7XG4gIH1cbiAgZG9WYWxpZGF0ZShmbGFncykge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGU7XG4gICAgcmV0dXJuIHN1cGVyLmRvVmFsaWRhdGUoZmxhZ3MpICYmICghdGhpcy5pc0NvbXBsZXRlIHx8IHRoaXMuaXNEYXRlRXhpc3QodGhpcy52YWx1ZSkgJiYgZGF0ZSAhPSBudWxsICYmICh0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluIDw9IGRhdGUpICYmICh0aGlzLm1heCA9PSBudWxsIHx8IGRhdGUgPD0gdGhpcy5tYXgpKTtcbiAgfVxuXG4gIC8qKiBDaGVja3MgaWYgZGF0ZSBpcyBleGlzdHMgKi9cbiAgaXNEYXRlRXhpc3Qoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMucGFyc2Uoc3RyLCB0aGlzKSwgdGhpcykuaW5kZXhPZihzdHIpID49IDA7XG4gIH1cblxuICAvKiogUGFyc2VkIERhdGUgKi9cbiAgZ2V0IGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZWRWYWx1ZTtcbiAgfVxuICBzZXQgZGF0ZShkYXRlKSB7XG4gICAgdGhpcy50eXBlZFZhbHVlID0gZGF0ZTtcbiAgfVxuICBnZXQgdHlwZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gc3VwZXIudHlwZWRWYWx1ZSA6IG51bGw7XG4gIH1cbiAgc2V0IHR5cGVkVmFsdWUodmFsdWUpIHtcbiAgICBzdXBlci50eXBlZFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgbWFza0VxdWFscyhtYXNrKSB7XG4gICAgcmV0dXJuIG1hc2sgPT09IERhdGUgfHwgc3VwZXIubWFza0VxdWFscyhtYXNrKTtcbiAgfVxuICBvcHRpb25zSXNDaGFuZ2VkKG9wdHMpIHtcbiAgICByZXR1cm4gc3VwZXIub3B0aW9uc0lzQ2hhbmdlZChNYXNrZWREYXRlLmV4dHJhY3RQYXR0ZXJuT3B0aW9ucyhvcHRzKSk7XG4gIH1cbn1cbk1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTID0gKCkgPT4gKHtcbiAgZDoge1xuICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgIGZyb206IDEsXG4gICAgdG86IDMxLFxuICAgIG1heExlbmd0aDogMlxuICB9LFxuICBtOiB7XG4gICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgZnJvbTogMSxcbiAgICB0bzogMTIsXG4gICAgbWF4TGVuZ3RoOiAyXG4gIH0sXG4gIFk6IHtcbiAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICBmcm9tOiAxOTAwLFxuICAgIHRvOiA5OTk5XG4gIH1cbn0pO1xuTWFza2VkRGF0ZS5ERUZBVUxUUyA9IHtcbiAgLi4uTWFza2VkUGF0dGVybi5ERUZBVUxUUyxcbiAgbWFzazogRGF0ZSxcbiAgcGF0dGVybjogJ2R7Ln1gbXsufWBZJyxcbiAgZm9ybWF0OiAoZGF0ZSwgbWFza2VkKSA9PiB7XG4gICAgaWYgKCFkYXRlKSByZXR1cm4gJyc7XG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdLmpvaW4oJy4nKTtcbiAgfSxcbiAgcGFyc2U6IChzdHIsIG1hc2tlZCkgPT4ge1xuICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHN0ci5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gIH1cbn07XG5JTWFzay5NYXNrZWREYXRlID0gTWFza2VkRGF0ZTtcblxuZXhwb3J0IHsgTWFza2VkRGF0ZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBESVJFQ1RJT04sIG9iamVjdEluY2x1ZGVzIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrLCB7IG5vcm1hbGl6ZU9wdHMgfSBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbi8qKiBEeW5hbWljIG1hc2sgZm9yIGNob29zaW5nIGFwcHJvcHJpYXRlIG1hc2sgaW4gcnVuLXRpbWUgKi9cbmNsYXNzIE1hc2tlZER5bmFtaWMgZXh0ZW5kcyBNYXNrZWQge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uTWFza2VkRHluYW1pYy5ERUZBVUxUUyxcbiAgICAgIC4uLm9wdHNcbiAgICB9KTtcbiAgICB0aGlzLmN1cnJlbnRNYXNrID0gdW5kZWZpbmVkO1xuICB9XG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgc3VwZXIuX3VwZGF0ZShvcHRzKTtcbiAgICBpZiAoJ21hc2snIGluIG9wdHMpIHtcbiAgICAgIHRoaXMuZXhwb3NlTWFzayA9IHVuZGVmaW5lZDtcbiAgICAgIC8vIG1hc2sgY291bGQgYmUgdG90YWxseSBkeW5hbWljIHdpdGggb25seSBgZGlzcGF0Y2hgIG9wdGlvblxuICAgICAgdGhpcy5jb21waWxlZE1hc2tzID0gQXJyYXkuaXNBcnJheShvcHRzLm1hc2spID8gb3B0cy5tYXNrLm1hcChtID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGV4cG9zZSxcbiAgICAgICAgICAuLi5tYXNrT3B0c1xuICAgICAgICB9ID0gbm9ybWFsaXplT3B0cyhtKTtcbiAgICAgICAgY29uc3QgbWFza2VkID0gY3JlYXRlTWFzayh7XG4gICAgICAgICAgb3ZlcndyaXRlOiB0aGlzLl9vdmVyd3JpdGUsXG4gICAgICAgICAgZWFnZXI6IHRoaXMuX2VhZ2VyLFxuICAgICAgICAgIHNraXBJbnZhbGlkOiB0aGlzLl9za2lwSW52YWxpZCxcbiAgICAgICAgICAuLi5tYXNrT3B0c1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV4cG9zZSkgdGhpcy5leHBvc2VNYXNrID0gbWFza2VkO1xuICAgICAgICByZXR1cm4gbWFza2VkO1xuICAgICAgfSkgOiBbXTtcblxuICAgICAgLy8gdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZG9EaXNwYXRjaCgnJyk7IC8vIHByb2JhYmx5IG5vdCBuZWVkZWQgYnV0IGxldHMgc2VlXG4gICAgfVxuICB9XG4gIF9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaChjaCwgZmxhZ3MpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRDaGFyKGNoLCB0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKSk7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIF9hcHBseURpc3BhdGNoKGFwcGVuZGVkLCBmbGFncywgdGFpbCkge1xuICAgIGlmIChhcHBlbmRlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBhcHBlbmRlZCA9ICcnO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRhaWwgPT09IHZvaWQgMCkge1xuICAgICAgdGFpbCA9ICcnO1xuICAgIH1cbiAgICBjb25zdCBwcmV2VmFsdWVCZWZvcmVUYWlsID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlICE9IG51bGwgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMudmFsdWU7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMucmF3SW5wdXRWYWx1ZTtcbiAgICBjb25zdCBpbnNlcnRWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fcmF3SW5wdXRWYWx1ZSA6IGlucHV0VmFsdWU7XG4gICAgY29uc3QgdGFpbFZhbHVlID0gaW5wdXRWYWx1ZS5zbGljZShpbnNlcnRWYWx1ZS5sZW5ndGgpO1xuICAgIGNvbnN0IHByZXZNYXNrID0gdGhpcy5jdXJyZW50TWFzaztcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBjb25zdCBwcmV2TWFza1N0YXRlID0gcHJldk1hc2sgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZNYXNrLnN0YXRlO1xuXG4gICAgLy8gY2xvbmUgZmxhZ3MgdG8gcHJldmVudCBvdmVyd3JpdGluZyBgX2JlZm9yZVRhaWxTdGF0ZWBcbiAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5kb0Rpc3BhdGNoKGFwcGVuZGVkLCB7XG4gICAgICAuLi5mbGFnc1xuICAgIH0sIHRhaWwpO1xuXG4gICAgLy8gcmVzdG9yZSBzdGF0ZSBhZnRlciBkaXNwYXRjaFxuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzayAhPT0gcHJldk1hc2spIHtcbiAgICAgICAgLy8gaWYgbWFzayBjaGFuZ2VkIHJlYXBwbHkgaW5wdXRcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpO1xuICAgICAgICBpZiAoaW5zZXJ0VmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZChpbnNlcnRWYWx1ZSwge1xuICAgICAgICAgICAgcmF3OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgPSB0aGlzLmN1cnJlbnRNYXNrLnZhbHVlLmxlbmd0aCAtIHByZXZWYWx1ZUJlZm9yZVRhaWwubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YWlsVmFsdWUpIHtcbiAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZCh0YWlsVmFsdWUsIHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICB9KS50YWlsU2hpZnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJldk1hc2tTdGF0ZSkge1xuICAgICAgICAvLyBEaXNwYXRjaCBjYW4gZG8gc29tZXRoaW5nIGJhZCB3aXRoIHN0YXRlLCBzb1xuICAgICAgICAvLyByZXN0b3JlIHByZXYgbWFzayBzdGF0ZVxuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gcHJldk1hc2tTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBfYXBwZW5kRWFnZXIoKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2goKTtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kRWFnZXIoKSk7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIGFwcGVuZFRhaWwodGFpbCkge1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGlmICh0YWlsKSBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBseURpc3BhdGNoKCcnLCB7fSwgdGFpbCkpO1xuICAgIHJldHVybiBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5hcHBlbmRUYWlsKHRhaWwpIDogc3VwZXIuYXBwZW5kVGFpbCh0YWlsKSk7XG4gIH1cbiAgY3VycmVudE1hc2tGbGFncyhmbGFncykge1xuICAgIHZhciBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEsIF9mbGFncyRfYmVmb3JlVGFpbFN0YTI7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmZsYWdzLFxuICAgICAgX2JlZm9yZVRhaWxTdGF0ZTogKChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2ZsYWdzJF9iZWZvcmVUYWlsU3RhLmN1cnJlbnRNYXNrUmVmKSA9PT0gdGhpcy5jdXJyZW50TWFzayAmJiAoKF9mbGFncyRfYmVmb3JlVGFpbFN0YTIgPSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2ZsYWdzJF9iZWZvcmVUYWlsU3RhMi5jdXJyZW50TWFzaykgfHwgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZVxuICAgIH07XG4gIH1cbiAgZG9EaXNwYXRjaChhcHBlbmRlZCwgZmxhZ3MsIHRhaWwpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRhaWwgPT09IHZvaWQgMCkge1xuICAgICAgdGFpbCA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChhcHBlbmRlZCwgdGhpcywgZmxhZ3MsIHRhaWwpO1xuICB9XG4gIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICByZXR1cm4gc3VwZXIuZG9WYWxpZGF0ZShmbGFncykgJiYgKCF0aGlzLmN1cnJlbnRNYXNrIHx8IHRoaXMuY3VycmVudE1hc2suZG9WYWxpZGF0ZSh0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKSk7XG4gIH1cbiAgZG9QcmVwYXJlKHN0ciwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgbGV0IFtzLCBkZXRhaWxzXSA9IHN1cGVyLmRvUHJlcGFyZShzdHIsIGZsYWdzKTtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgbGV0IGN1cnJlbnREZXRhaWxzO1xuICAgICAgW3MsIGN1cnJlbnREZXRhaWxzXSA9IHN1cGVyLmRvUHJlcGFyZShzLCB0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKTtcbiAgICAgIGRldGFpbHMgPSBkZXRhaWxzLmFnZ3JlZ2F0ZShjdXJyZW50RGV0YWlscyk7XG4gICAgfVxuICAgIHJldHVybiBbcywgZGV0YWlsc107XG4gIH1cbiAgZG9QcmVwYXJlQ2hhcihzdHIsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGxldCBbcywgZGV0YWlsc10gPSBzdXBlci5kb1ByZXBhcmVDaGFyKHN0ciwgZmxhZ3MpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICBsZXQgY3VycmVudERldGFpbHM7XG4gICAgICBbcywgY3VycmVudERldGFpbHNdID0gc3VwZXIuZG9QcmVwYXJlQ2hhcihzLCB0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKTtcbiAgICAgIGRldGFpbHMgPSBkZXRhaWxzLmFnZ3JlZ2F0ZShjdXJyZW50RGV0YWlscyk7XG4gICAgfVxuICAgIHJldHVybiBbcywgZGV0YWlsc107XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrO1xuICAgIChfdGhpcyRjdXJyZW50TWFzayA9IHRoaXMuY3VycmVudE1hc2spID09IG51bGwgfHwgX3RoaXMkY3VycmVudE1hc2sucmVzZXQoKTtcbiAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChtID0+IG0ucmVzZXQoKSk7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmV4cG9zZU1hc2sgPyB0aGlzLmV4cG9zZU1hc2sudmFsdWUgOiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay52YWx1ZSA6ICcnO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmV4cG9zZU1hc2spIHtcbiAgICAgIHRoaXMuZXhwb3NlTWFzay52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZXhwb3NlTWFzaztcbiAgICAgIHRoaXMuX2FwcGx5RGlzcGF0Y2goKTtcbiAgICB9IGVsc2Ugc3VwZXIudmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdW5tYXNrZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBvc2VNYXNrID8gdGhpcy5leHBvc2VNYXNrLnVubWFza2VkVmFsdWUgOiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlIDogJyc7XG4gIH1cbiAgc2V0IHVubWFza2VkVmFsdWUodW5tYXNrZWRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmV4cG9zZU1hc2spIHtcbiAgICAgIHRoaXMuZXhwb3NlTWFzay51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcbiAgICAgIHRoaXMuY3VycmVudE1hc2sgPSB0aGlzLmV4cG9zZU1hc2s7XG4gICAgICB0aGlzLl9hcHBseURpc3BhdGNoKCk7XG4gICAgfSBlbHNlIHN1cGVyLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICB9XG4gIGdldCB0eXBlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmV4cG9zZU1hc2sgPyB0aGlzLmV4cG9zZU1hc2sudHlwZWRWYWx1ZSA6IHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgOiAnJztcbiAgfVxuICBzZXQgdHlwZWRWYWx1ZSh0eXBlZFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZXhwb3NlTWFzaykge1xuICAgICAgdGhpcy5leHBvc2VNYXNrLnR5cGVkVmFsdWUgPSB0eXBlZFZhbHVlO1xuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZXhwb3NlTWFzaztcbiAgICAgIHRoaXMuX2FwcGx5RGlzcGF0Y2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHVubWFza2VkVmFsdWUgPSBTdHJpbmcodHlwZWRWYWx1ZSk7XG5cbiAgICAvLyBkb3VibGUgY2hlY2sgaXRcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlID0gdHlwZWRWYWx1ZTtcbiAgICAgIHVubWFza2VkVmFsdWUgPSB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWU7XG4gICAgfVxuICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gIH1cbiAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suZGlzcGxheVZhbHVlIDogJyc7XG4gIH1cbiAgZ2V0IGlzQ29tcGxldGUoKSB7XG4gICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMjtcbiAgICByZXR1cm4gQm9vbGVhbigoX3RoaXMkY3VycmVudE1hc2syID0gdGhpcy5jdXJyZW50TWFzaykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrMi5pc0NvbXBsZXRlKTtcbiAgfVxuICBnZXQgaXNGaWxsZWQoKSB7XG4gICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMztcbiAgICByZXR1cm4gQm9vbGVhbigoX3RoaXMkY3VycmVudE1hc2szID0gdGhpcy5jdXJyZW50TWFzaykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrMy5pc0ZpbGxlZCk7XG4gIH1cbiAgcmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2sucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSlcbiAgICAgIC8vIHVwZGF0ZSB3aXRoIGRpc3BhdGNoXG4gICAgICAuYWdncmVnYXRlKHRoaXMuX2FwcGx5RGlzcGF0Y2goKSk7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s0O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5zdGF0ZSxcbiAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWUsXG4gICAgICBjb21waWxlZE1hc2tzOiB0aGlzLmNvbXBpbGVkTWFza3MubWFwKG0gPT4gbS5zdGF0ZSksXG4gICAgICBjdXJyZW50TWFza1JlZjogdGhpcy5jdXJyZW50TWFzayxcbiAgICAgIGN1cnJlbnRNYXNrOiAoX3RoaXMkY3VycmVudE1hc2s0ID0gdGhpcy5jdXJyZW50TWFzaykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrNC5zdGF0ZVxuICAgIH07XG4gIH1cbiAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29tcGlsZWRNYXNrcyxcbiAgICAgIGN1cnJlbnRNYXNrUmVmLFxuICAgICAgY3VycmVudE1hc2ssXG4gICAgICAuLi5tYXNrZWRTdGF0ZVxuICAgIH0gPSBzdGF0ZTtcbiAgICBpZiAoY29tcGlsZWRNYXNrcykgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goKG0sIG1pKSA9PiBtLnN0YXRlID0gY29tcGlsZWRNYXNrc1ttaV0pO1xuICAgIGlmIChjdXJyZW50TWFza1JlZiAhPSBudWxsKSB7XG4gICAgICB0aGlzLmN1cnJlbnRNYXNrID0gY3VycmVudE1hc2tSZWY7XG4gICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gY3VycmVudE1hc2s7XG4gICAgfVxuICAgIHN1cGVyLnN0YXRlID0gbWFza2VkU3RhdGU7XG4gIH1cbiAgZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSA6ICcnO1xuICB9XG4gIGV4dHJhY3RUYWlsKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLmV4dHJhY3RUYWlsKGZyb21Qb3MsIHRvUG9zKSA6IHN1cGVyLmV4dHJhY3RUYWlsKGZyb21Qb3MsIHRvUG9zKTtcbiAgfVxuICBkb0NvbW1pdCgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50TWFzaykgdGhpcy5jdXJyZW50TWFzay5kb0NvbW1pdCgpO1xuICAgIHN1cGVyLmRvQ29tbWl0KCk7XG4gIH1cbiAgbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLm5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikgOiBzdXBlci5uZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pO1xuICB9XG4gIGdldCBvdmVyd3JpdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLm92ZXJ3cml0ZSA6IHRoaXMuX292ZXJ3cml0ZTtcbiAgfVxuICBzZXQgb3ZlcndyaXRlKG92ZXJ3cml0ZSkge1xuICAgIHRoaXMuX292ZXJ3cml0ZSA9IG92ZXJ3cml0ZTtcbiAgfVxuICBnZXQgZWFnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLmVhZ2VyIDogdGhpcy5fZWFnZXI7XG4gIH1cbiAgc2V0IGVhZ2VyKGVhZ2VyKSB7XG4gICAgdGhpcy5fZWFnZXIgPSBlYWdlcjtcbiAgfVxuICBnZXQgc2tpcEludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnNraXBJbnZhbGlkIDogdGhpcy5fc2tpcEludmFsaWQ7XG4gIH1cbiAgc2V0IHNraXBJbnZhbGlkKHNraXBJbnZhbGlkKSB7XG4gICAgdGhpcy5fc2tpcEludmFsaWQgPSBza2lwSW52YWxpZDtcbiAgfVxuICBnZXQgYXV0b2ZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suYXV0b2ZpeCA6IHRoaXMuX2F1dG9maXg7XG4gIH1cbiAgc2V0IGF1dG9maXgoYXV0b2ZpeCkge1xuICAgIHRoaXMuX2F1dG9maXggPSBhdXRvZml4O1xuICB9XG4gIG1hc2tFcXVhbHMobWFzaykge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG1hc2spID8gdGhpcy5jb21waWxlZE1hc2tzLmV2ZXJ5KChtLCBtaSkgPT4ge1xuICAgICAgaWYgKCFtYXNrW21pXSkgcmV0dXJuO1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYXNrOiBvbGRNYXNrLFxuICAgICAgICAuLi5yZXN0T3B0c1xuICAgICAgfSA9IG1hc2tbbWldO1xuICAgICAgcmV0dXJuIG9iamVjdEluY2x1ZGVzKG0sIHJlc3RPcHRzKSAmJiBtLm1hc2tFcXVhbHMob2xkTWFzayk7XG4gICAgfSkgOiBzdXBlci5tYXNrRXF1YWxzKG1hc2spO1xuICB9XG4gIHR5cGVkVmFsdWVFcXVhbHModmFsdWUpIHtcbiAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s1O1xuICAgIHJldHVybiBCb29sZWFuKChfdGhpcyRjdXJyZW50TWFzazUgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2s1LnR5cGVkVmFsdWVFcXVhbHModmFsdWUpKTtcbiAgfVxufVxuLyoqIEN1cnJlbnRseSBjaG9zZW4gbWFzayAqL1xuLyoqIEN1cnJlbnRseSBjaG9zZW4gbWFzayAqL1xuLyoqIENvbXBsaWxlZCB7QGxpbmsgTWFza2VkfSBvcHRpb25zICovXG4vKiogQ2hvb3NlcyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gaW5wdXQgdmFsdWUgKi9cbk1hc2tlZER5bmFtaWMuREVGQVVMVFMgPSB7XG4gIC4uLk1hc2tlZC5ERUZBVUxUUyxcbiAgZGlzcGF0Y2g6IChhcHBlbmRlZCwgbWFza2VkLCBmbGFncywgdGFpbCkgPT4ge1xuICAgIGlmICghbWFza2VkLmNvbXBpbGVkTWFza3MubGVuZ3RoKSByZXR1cm47XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IG1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuXG4gICAgLy8gc2ltdWxhdGUgaW5wdXRcbiAgICBjb25zdCBpbnB1dHMgPSBtYXNrZWQuY29tcGlsZWRNYXNrcy5tYXAoKG0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpc0N1cnJlbnQgPSBtYXNrZWQuY3VycmVudE1hc2sgPT09IG07XG4gICAgICBjb25zdCBzdGFydElucHV0UG9zID0gaXNDdXJyZW50ID8gbS5kaXNwbGF5VmFsdWUubGVuZ3RoIDogbS5uZWFyZXN0SW5wdXRQb3MobS5kaXNwbGF5VmFsdWUubGVuZ3RoLCBESVJFQ1RJT04uRk9SQ0VfTEVGVCk7XG4gICAgICBpZiAobS5yYXdJbnB1dFZhbHVlICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgIG0ucmVzZXQoKTtcbiAgICAgICAgbS5hcHBlbmQoaW5wdXRWYWx1ZSwge1xuICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzQ3VycmVudCkge1xuICAgICAgICBtLnJlbW92ZShzdGFydElucHV0UG9zKTtcbiAgICAgIH1cbiAgICAgIG0uYXBwZW5kKGFwcGVuZGVkLCBtYXNrZWQuY3VycmVudE1hc2tGbGFncyhmbGFncykpO1xuICAgICAgbS5hcHBlbmRUYWlsKHRhaWwpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHdlaWdodDogbS5yYXdJbnB1dFZhbHVlLmxlbmd0aCxcbiAgICAgICAgdG90YWxJbnB1dFBvc2l0aW9uczogbS50b3RhbElucHV0UG9zaXRpb25zKDAsIE1hdGgubWF4KHN0YXJ0SW5wdXRQb3MsIG0ubmVhcmVzdElucHV0UG9zKG0uZGlzcGxheVZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkZPUkNFX0xFRlQpKSlcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBwb3AgbWFza3Mgd2l0aCBsb25nZXIgdmFsdWVzIGZpcnN0XG4gICAgaW5wdXRzLnNvcnQoKGkxLCBpMikgPT4gaTIud2VpZ2h0IC0gaTEud2VpZ2h0IHx8IGkyLnRvdGFsSW5wdXRQb3NpdGlvbnMgLSBpMS50b3RhbElucHV0UG9zaXRpb25zKTtcbiAgICByZXR1cm4gbWFza2VkLmNvbXBpbGVkTWFza3NbaW5wdXRzWzBdLmluZGV4XTtcbiAgfVxufTtcbklNYXNrLk1hc2tlZER5bmFtaWMgPSBNYXNrZWREeW5hbWljO1xuXG5leHBvcnQgeyBNYXNrZWREeW5hbWljIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIFBhdHRlcm4gd2hpY2ggdmFsaWRhdGVzIGVudW0gdmFsdWVzICovXG5jbGFzcyBNYXNrZWRFbnVtIGV4dGVuZHMgTWFza2VkUGF0dGVybiB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5NYXNrZWRFbnVtLkRFRkFVTFRTLFxuICAgICAgLi4ub3B0c1xuICAgIH0pOyAvLyBtYXNrIHdpbGwgYmUgY3JlYXRlZCBpbiBfdXBkYXRlXG4gIH1cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgc3VwZXIudXBkYXRlT3B0aW9ucyhvcHRzKTtcbiAgfVxuICBfdXBkYXRlKG9wdHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbnVtOiBlbnVtXyxcbiAgICAgIC4uLmVvcHRzXG4gICAgfSA9IG9wdHM7XG4gICAgaWYgKGVudW1fKSB7XG4gICAgICBjb25zdCBsZW5ndGhzID0gZW51bV8ubWFwKGUgPT4gZS5sZW5ndGgpO1xuICAgICAgY29uc3QgcmVxdWlyZWRMZW5ndGggPSBNYXRoLm1pbiguLi5sZW5ndGhzKTtcbiAgICAgIGNvbnN0IG9wdGlvbmFsTGVuZ3RoID0gTWF0aC5tYXgoLi4ubGVuZ3RocykgLSByZXF1aXJlZExlbmd0aDtcbiAgICAgIGVvcHRzLm1hc2sgPSAnKicucmVwZWF0KHJlcXVpcmVkTGVuZ3RoKTtcbiAgICAgIGlmIChvcHRpb25hbExlbmd0aCkgZW9wdHMubWFzayArPSAnWycgKyAnKicucmVwZWF0KG9wdGlvbmFsTGVuZ3RoKSArICddJztcbiAgICAgIHRoaXMuZW51bSA9IGVudW1fO1xuICAgIH1cbiAgICBzdXBlci5fdXBkYXRlKGVvcHRzKTtcbiAgfVxuICBfYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hGcm9tID0gTWF0aC5taW4odGhpcy5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKSwgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmVudW0uZmlsdGVyKGUgPT4gdGhpcy5tYXRjaFZhbHVlKGUsIHRoaXMudW5tYXNrZWRWYWx1ZSArIGNoLCBtYXRjaEZyb20pKTtcbiAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZSgwLCB0aGlzLnZhbHVlLmxlbmd0aCwgKGIsIGJpKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWNoID0gbWF0Y2hlc1swXVtiaV07XG4gICAgICAgICAgaWYgKGJpID49IHRoaXMudmFsdWUubGVuZ3RoIHx8IG1jaCA9PT0gYi52YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIGIucmVzZXQoKTtcbiAgICAgICAgICBiLl9hcHBlbmRDaGFyKG1jaCwgZmxhZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGQgPSBzdXBlci5fYXBwZW5kQ2hhclJhdyhtYXRjaGVzWzBdW3RoaXMudmFsdWUubGVuZ3RoXSwgZmxhZ3MpO1xuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG1hdGNoZXNbMF0uc2xpY2UodGhpcy51bm1hc2tlZFZhbHVlLmxlbmd0aCkuc3BsaXQoJycpLmZvckVhY2gobWNoID0+IGQuYWdncmVnYXRlKHN1cGVyLl9hcHBlbmRDaGFyUmF3KG1jaCkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgc2tpcDogIXRoaXMuaXNDb21wbGV0ZVxuICAgIH0pO1xuICB9XG4gIGV4dHJhY3RUYWlsKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgLy8ganVzdCBkcm9wIHRhaWxcbiAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygnJywgZnJvbVBvcyk7XG4gIH1cbiAgcmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBjb25zdCBtYXRjaEZyb20gPSBNYXRoLm1pbihzdXBlci5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKSwgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgIGxldCBwb3M7XG4gICAgZm9yIChwb3MgPSBmcm9tUG9zOyBwb3MgPj0gMDsgLS1wb3MpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmVudW0uZmlsdGVyKGUgPT4gdGhpcy5tYXRjaFZhbHVlKGUsIHRoaXMudmFsdWUuc2xpY2UobWF0Y2hGcm9tLCBwb3MpLCBtYXRjaEZyb20pKTtcbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBkZXRhaWxzID0gc3VwZXIucmVtb3ZlKHBvcywgdG9Qb3MpO1xuICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHBvcyAtIGZyb21Qb3M7XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgZ2V0IGlzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW51bS5pbmRleE9mKHRoaXMudmFsdWUpID49IDA7XG4gIH1cbn1cbi8qKiBNYXRjaCBlbnVtIHZhbHVlICovXG5NYXNrZWRFbnVtLkRFRkFVTFRTID0ge1xuICAuLi5NYXNrZWRQYXR0ZXJuLkRFRkFVTFRTLFxuICBtYXRjaFZhbHVlOiAoZXN0ciwgaXN0ciwgbWF0Y2hGcm9tKSA9PiBlc3RyLmluZGV4T2YoaXN0ciwgbWF0Y2hGcm9tKSA9PT0gbWF0Y2hGcm9tXG59O1xuSU1hc2suTWFza2VkRW51bSA9IE1hc2tlZEVudW07XG5cbmV4cG9ydCB7IE1hc2tlZEVudW0gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgaXNTdHJpbmcsIGlzT2JqZWN0LCBwaWNrIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuXG4vLyBUT0RPIGNhbid0IHVzZSBvdmVybG9hZHMgaGVyZSBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvNTA3NTRcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBzdHJpbmcpOiB0eXBlb2YgTWFza2VkUGF0dGVybjtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBEYXRlQ29uc3RydWN0b3IpOiB0eXBlb2YgTWFza2VkRGF0ZTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBOdW1iZXJDb25zdHJ1Y3Rvcik6IHR5cGVvZiBNYXNrZWROdW1iZXI7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogQXJyYXk8YW55PiB8IEFycmF5Q29uc3RydWN0b3IpOiB0eXBlb2YgTWFza2VkRHluYW1pYztcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWREYXRlKTogdHlwZW9mIE1hc2tlZERhdGU7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkTnVtYmVyKTogdHlwZW9mIE1hc2tlZE51bWJlcjtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWRFbnVtKTogdHlwZW9mIE1hc2tlZEVudW07XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkUmFuZ2UpOiB0eXBlb2YgTWFza2VkUmFuZ2U7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkUmVnRXhwKTogdHlwZW9mIE1hc2tlZFJlZ0V4cDtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWRGdW5jdGlvbik6IHR5cGVvZiBNYXNrZWRGdW5jdGlvbjtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiBNYXNrZWRQYXR0ZXJuKTogdHlwZW9mIE1hc2tlZFBhdHRlcm47XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogTWFza2VkRHluYW1pYyk6IHR5cGVvZiBNYXNrZWREeW5hbWljO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IE1hc2tlZCk6IHR5cGVvZiBNYXNrZWQ7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZCk6IHR5cGVvZiBNYXNrZWQ7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZERhdGUpOiB0eXBlb2YgTWFza2VkRGF0ZTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkTnVtYmVyKTogdHlwZW9mIE1hc2tlZE51bWJlcjtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkRW51bSk6IHR5cGVvZiBNYXNrZWRFbnVtO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2s6IHR5cGVvZiBNYXNrZWRSYW5nZSk6IHR5cGVvZiBNYXNrZWRSYW5nZTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkUmVnRXhwKTogdHlwZW9mIE1hc2tlZFJlZ0V4cDtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkRnVuY3Rpb24pOiB0eXBlb2YgTWFza2VkRnVuY3Rpb247XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogdHlwZW9mIE1hc2tlZFBhdHRlcm4pOiB0eXBlb2YgTWFza2VkUGF0dGVybjtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiB0eXBlb2YgTWFza2VkRHluYW1pYyk6IHR5cGVvZiBNYXNrZWREeW5hbWljO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hc2tlZENsYXNzPE1hc2sgZXh0ZW5kcyB0eXBlb2YgTWFza2VkPiAobWFzazogTWFzayk6IE1hc2s7XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzazogUmVnRXhwKTogdHlwZW9mIE1hc2tlZFJlZ0V4cDtcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrOiAodmFsdWU6IHN0cmluZywgLi4uYXJnczogYW55W10pID0+IGJvb2xlYW4pOiB0eXBlb2YgTWFza2VkRnVuY3Rpb247XG5cbi8qKiBHZXQgTWFza2VkIGNsYXNzIGJ5IG1hc2sgdHlwZSAqL1xuZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzaykgLyogVE9ETyAqL3tcbiAgaWYgKG1hc2sgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdtYXNrIHByb3BlcnR5IHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gIGlmIChtYXNrIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gSU1hc2suTWFza2VkUmVnRXhwO1xuICBpZiAoaXNTdHJpbmcobWFzaykpIHJldHVybiBJTWFzay5NYXNrZWRQYXR0ZXJuO1xuICBpZiAobWFzayA9PT0gRGF0ZSkgcmV0dXJuIElNYXNrLk1hc2tlZERhdGU7XG4gIGlmIChtYXNrID09PSBOdW1iZXIpIHJldHVybiBJTWFzay5NYXNrZWROdW1iZXI7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hc2spIHx8IG1hc2sgPT09IEFycmF5KSByZXR1cm4gSU1hc2suTWFza2VkRHluYW1pYztcbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBtYXNrLnByb3RvdHlwZSBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7XG4gIGlmIChJTWFzay5NYXNrZWQgJiYgbWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2suY29uc3RydWN0b3I7XG4gIGlmIChtYXNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHJldHVybiBJTWFzay5NYXNrZWRGdW5jdGlvbjtcbiAgY29uc29sZS53YXJuKCdNYXNrIG5vdCBmb3VuZCBmb3IgbWFzaycsIG1hc2spOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgcmV0dXJuIElNYXNrLk1hc2tlZDtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9wdHMob3B0cykge1xuICBpZiAoIW9wdHMpIHRocm93IG5ldyBFcnJvcignT3B0aW9ucyBpbiBub3QgZGVmaW5lZCcpO1xuICBpZiAoSU1hc2suTWFza2VkKSB7XG4gICAgaWYgKG9wdHMucHJvdG90eXBlIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4ge1xuICAgICAgbWFzazogb3B0c1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgaGFuZGxlIGNhc2VzIGxpa2U6XG4gICAgICAxKSBvcHRzID0gTWFza2VkXG4gICAgICAyKSBvcHRzID0geyBtYXNrOiBNYXNrZWQsIC4uLmluc3RhbmNlT3B0cyB9XG4gICAgKi9cbiAgICBjb25zdCB7XG4gICAgICBtYXNrID0gdW5kZWZpbmVkLFxuICAgICAgLi4uaW5zdGFuY2VPcHRzXG4gICAgfSA9IG9wdHMgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQgPyB7XG4gICAgICBtYXNrOiBvcHRzXG4gICAgfSA6IGlzT2JqZWN0KG9wdHMpICYmIG9wdHMubWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCA/IG9wdHMgOiB7fTtcbiAgICBpZiAobWFzaykge1xuICAgICAgY29uc3QgX21hc2sgPSBtYXNrLm1hc2s7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5waWNrKG1hc2ssIChfLCBrKSA9PiAhay5zdGFydHNXaXRoKCdfJykpLFxuICAgICAgICBtYXNrOiBtYXNrLmNvbnN0cnVjdG9yLFxuICAgICAgICBfbWFzayxcbiAgICAgICAgLi4uaW5zdGFuY2VPcHRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAoIWlzT2JqZWN0KG9wdHMpKSByZXR1cm4ge1xuICAgIG1hc2s6IG9wdHNcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAuLi5vcHRzXG4gIH07XG59XG5cbi8vIFRPRE8gY2FuJ3QgdXNlIG92ZXJsb2FkcyBoZXJlIGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy81MDc1NFxuXG4vLyBGcm9tIG1hc2tlZFxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkLCBSZXR1cm5NYXNrZWQ9T3B0cz4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyAvLyBGcm9tIG1hc2tlZCBjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczx0eXBlb2YgTWFza2VkPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkPUluc3RhbmNlVHlwZTxPcHRzWydtYXNrJ10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZERhdGU+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWREYXRlPU1hc2tlZERhdGU8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZE51bWJlcj4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZE51bWJlcj1NYXNrZWROdW1iZXI8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZEVudW0+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRFbnVtPU1hc2tlZEVudW08T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZFJhbmdlPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkUmFuZ2U9TWFza2VkUmFuZ2U8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZFJlZ0V4cD4sIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZFJlZ0V4cD1NYXNrZWRSZWdFeHA8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZEZ1bmN0aW9uPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkRnVuY3Rpb249TWFza2VkRnVuY3Rpb248T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZFBhdHRlcm4+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRQYXR0ZXJuPU1hc2tlZFBhdHRlcm48T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1hc2s8T3B0cyBleHRlbmRzIE1hc2tlZE9wdGlvbnM8dHlwZW9mIE1hc2tlZER5bmFtaWM+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWREeW5hbWljPU1hc2tlZER5bmFtaWM8T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcbi8vIC8vIEZyb20gbWFzayBvcHRzXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPE1hc2tlZD4sIFJldHVybk1hc2tlZD1PcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczxpbmZlciBNPiA/IE0gOiBuZXZlcj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWROdW1iZXJPcHRpb25zLCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWROdW1iZXI9TWFza2VkTnVtYmVyPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWREYXRlRmFjdG9yeU9wdGlvbnMsIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZERhdGU9TWFza2VkRGF0ZTxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkRW51bU9wdGlvbnMsIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZEVudW09TWFza2VkRW51bTxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkUmFuZ2VPcHRpb25zLCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRSYW5nZT1NYXNrZWRSYW5nZTxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkUGF0dGVybk9wdGlvbnMsIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZFBhdHRlcm49TWFza2VkUGF0dGVybjxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkRHluYW1pY09wdGlvbnMsIFJldHVybk1hc2tlZCBleHRlbmRzIE1hc2tlZER5bmFtaWM9TWFza2VkRHluYW1pYzxPcHRzWydwYXJlbnQnXT4+IChvcHRzOiBPcHRzKTogUmV0dXJuTWFza2VkO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFzazxPcHRzIGV4dGVuZHMgTWFza2VkT3B0aW9uczxSZWdFeHA+LCBSZXR1cm5NYXNrZWQgZXh0ZW5kcyBNYXNrZWRSZWdFeHA9TWFza2VkUmVnRXhwPE9wdHNbJ3BhcmVudCddPj4gKG9wdHM6IE9wdHMpOiBSZXR1cm5NYXNrZWQ7XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYXNrPE9wdHMgZXh0ZW5kcyBNYXNrZWRPcHRpb25zPEZ1bmN0aW9uPiwgUmV0dXJuTWFza2VkIGV4dGVuZHMgTWFza2VkRnVuY3Rpb249TWFza2VkRnVuY3Rpb248T3B0c1sncGFyZW50J10+PiAob3B0czogT3B0cyk6IFJldHVybk1hc2tlZDtcblxuLyoqIENyZWF0ZXMgbmV3IHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBtYXNrIHR5cGUgKi9cbmZ1bmN0aW9uIGNyZWF0ZU1hc2sob3B0cykge1xuICBpZiAoSU1hc2suTWFza2VkICYmIG9wdHMgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBvcHRzO1xuICBjb25zdCBuT3B0cyA9IG5vcm1hbGl6ZU9wdHMob3B0cyk7XG4gIGNvbnN0IE1hc2tlZENsYXNzID0gbWFza2VkQ2xhc3Mobk9wdHMubWFzayk7XG4gIGlmICghTWFza2VkQ2xhc3MpIHRocm93IG5ldyBFcnJvcihcIk1hc2tlZCBjbGFzcyBpcyBub3QgZm91bmQgZm9yIHByb3ZpZGVkIG1hc2sgXCIgKyBuT3B0cy5tYXNrICsgXCIsIGFwcHJvcHJpYXRlIG1vZHVsZSBuZWVkcyB0byBiZSBpbXBvcnRlZCBtYW51YWxseSBiZWZvcmUgY3JlYXRpbmcgbWFzay5cIik7XG4gIGlmIChuT3B0cy5tYXNrID09PSBNYXNrZWRDbGFzcykgZGVsZXRlIG5PcHRzLm1hc2s7XG4gIGlmIChuT3B0cy5fbWFzaykge1xuICAgIG5PcHRzLm1hc2sgPSBuT3B0cy5fbWFzaztcbiAgICBkZWxldGUgbk9wdHMuX21hc2s7XG4gIH1cbiAgcmV0dXJuIG5ldyBNYXNrZWRDbGFzcyhuT3B0cyk7XG59XG5JTWFzay5jcmVhdGVNYXNrID0gY3JlYXRlTWFzaztcblxuZXhwb3J0IHsgY3JlYXRlTWFzayBhcyBkZWZhdWx0LCBtYXNrZWRDbGFzcywgbm9ybWFsaXplT3B0cyB9O1xuIiwiaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2tpbmcgYnkgY3VzdG9tIEZ1bmN0aW9uICovXG5jbGFzcyBNYXNrZWRGdW5jdGlvbiBleHRlbmRzIE1hc2tlZCB7XG4gIC8qKiAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgc3VwZXIuX3VwZGF0ZSh7XG4gICAgICAuLi5vcHRzLFxuICAgICAgdmFsaWRhdGU6IG9wdHMubWFza1xuICAgIH0pO1xuICB9XG59XG5JTWFzay5NYXNrZWRGdW5jdGlvbiA9IE1hc2tlZEZ1bmN0aW9uO1xuXG5leHBvcnQgeyBNYXNrZWRGdW5jdGlvbiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBlc2NhcGVSZWdFeHAsIERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxudmFyIF9NYXNrZWROdW1iZXI7XG4vKiogTnVtYmVyIG1hc2sgKi9cbmNsYXNzIE1hc2tlZE51bWJlciBleHRlbmRzIE1hc2tlZCB7XG4gIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gIC8qKiBBcnJheSBvZiBzaW5nbGUgY2hhcnMgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogRGlnaXRzIGFmdGVyIHBvaW50ICovXG5cbiAgLyoqIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGbGFnIHRvIHBhZCB0cmFpbGluZyB6ZXJvcyBhZnRlciBwb2ludCBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogRm9ybWF0IHR5cGVkIHZhbHVlIHRvIHN0cmluZyAqL1xuXG4gIC8qKiBQYXJzZSBzdHJpbmcgdG8gZ2V0IHR5cGVkIHZhbHVlICovXG5cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLk1hc2tlZE51bWJlci5ERUZBVUxUUyxcbiAgICAgIC4uLm9wdHNcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XG4gICAgdGhpcy5fdXBkYXRlUmVnRXhwcygpO1xuICB9XG4gIF91cGRhdGVSZWdFeHBzKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcbiAgICBjb25zdCBtaWQgPSAnXFxcXGQqJztcbiAgICBjb25zdCBlbmQgPSAodGhpcy5zY2FsZSA/IFwiKFwiICsgZXNjYXBlUmVnRXhwKHRoaXMucmFkaXgpICsgXCJcXFxcZHswLFwiICsgdGhpcy5zY2FsZSArIFwifSk/XCIgOiAnJykgKyAnJCc7XG4gICAgdGhpcy5fbnVtYmVyUmVnRXhwID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZCArIGVuZCk7XG4gICAgdGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJbXCIgKyB0aGlzLm1hcFRvUmFkaXgubWFwKGVzY2FwZVJlZ0V4cCkuam9pbignJykgKyBcIl1cIiwgJ2cnKTtcbiAgICB0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0aGlzLnRob3VzYW5kc1NlcGFyYXRvciksICdnJyk7XG4gIH1cbiAgX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSh0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAsICcnKTtcbiAgfVxuICBfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MDExMDIvaG93LXRvLXByaW50LWEtbnVtYmVyLXdpdGgtY29tbWFzLWFzLXRob3VzYW5kcy1zZXBhcmF0b3JzLWluLWphdmFzY3JpcHRcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpO1xuICAgIHJldHVybiBwYXJ0cy5qb2luKHRoaXMucmFkaXgpO1xuICB9XG4gIGRvUHJlcGFyZUNoYXIoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGNvbnN0IFtwcmVwQ2gsIGRldGFpbHNdID0gc3VwZXIuZG9QcmVwYXJlQ2hhcih0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuc2NhbGUgJiYgdGhpcy5tYXBUb1JhZGl4Lmxlbmd0aCAmJiAoXG4gICAgLypcbiAgICAgIHJhZGl4IHNob3VsZCBiZSBtYXBwZWQgd2hlblxuICAgICAgMSkgaW5wdXQgaXMgZG9uZSBmcm9tIGtleWJvYXJkID0gZmxhZ3MuaW5wdXQgJiYgZmxhZ3MucmF3XG4gICAgICAyKSB1bm1hc2tlZCB2YWx1ZSBpcyBzZXQgPSAhZmxhZ3MuaW5wdXQgJiYgIWZsYWdzLnJhd1xuICAgICAgYW5kIHNob3VsZCBub3QgYmUgbWFwcGVkIHdoZW5cbiAgICAgIDEpIHZhbHVlIGlzIHNldCA9IGZsYWdzLmlucHV0ICYmICFmbGFncy5yYXdcbiAgICAgIDIpIHJhdyB2YWx1ZSBpcyBzZXQgPSAhZmxhZ3MuaW5wdXQgJiYgZmxhZ3MucmF3XG4gICAgKi9cbiAgICBmbGFncy5pbnB1dCAmJiBmbGFncy5yYXcgfHwgIWZsYWdzLmlucHV0ICYmICFmbGFncy5yYXcpID8gY2gucmVwbGFjZSh0aGlzLl9tYXBUb1JhZGl4UmVnRXhwLCB0aGlzLnJhZGl4KSA6IGNoKSwgZmxhZ3MpO1xuICAgIGlmIChjaCAmJiAhcHJlcENoKSBkZXRhaWxzLnNraXAgPSB0cnVlO1xuICAgIGlmIChwcmVwQ2ggJiYgIXRoaXMuYWxsb3dQb3NpdGl2ZSAmJiAhdGhpcy52YWx1ZSAmJiBwcmVwQ2ggIT09ICctJykgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhcignLScpKTtcbiAgICByZXR1cm4gW3ByZXBDaCwgZGV0YWlsc107XG4gIH1cbiAgX3NlcGFyYXRvcnNDb3VudCh0bywgZXh0ZW5kT25TZXBhcmF0b3JzKSB7XG4gICAgaWYgKGV4dGVuZE9uU2VwYXJhdG9ycyA9PT0gdm9pZCAwKSB7XG4gICAgICBleHRlbmRPblNlcGFyYXRvcnMgPSBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBwb3MgPSAwOyBwb3MgPCB0bzsgKytwb3MpIHtcbiAgICAgIGlmICh0aGlzLl92YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgKytjb3VudDtcbiAgICAgICAgaWYgKGV4dGVuZE9uU2VwYXJhdG9ycykgdG8gKz0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShzbGljZSkge1xuICAgIGlmIChzbGljZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzbGljZSA9IHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc2xpY2UpLmxlbmd0aCwgdHJ1ZSk7XG4gIH1cbiAgZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIFtmcm9tUG9zLCB0b1Bvc10gPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzdXBlci5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSk7XG4gIH1cbiAgX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGNvbnN0IHByZXZCZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuICAgIGNvbnN0IHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHByZXZCZWZvcmVUYWlsVmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnZhbHVlKTtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xuICAgIGNvbnN0IG51bSA9IHRoaXMubnVtYmVyO1xuICAgIGxldCBhY2NlcHRlZCA9ICFpc05hTihudW0pO1xuICAgIGxldCBza2lwID0gZmFsc2U7XG4gICAgaWYgKGFjY2VwdGVkKSB7XG4gICAgICBsZXQgZml4ZWROdW07XG4gICAgICBpZiAodGhpcy5taW4gIT0gbnVsbCAmJiB0aGlzLm1pbiA8IDAgJiYgdGhpcy5udW1iZXIgPCB0aGlzLm1pbikgZml4ZWROdW0gPSB0aGlzLm1pbjtcbiAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsICYmIHRoaXMubWF4ID4gMCAmJiB0aGlzLm51bWJlciA+IHRoaXMubWF4KSBmaXhlZE51bSA9IHRoaXMubWF4O1xuICAgICAgaWYgKGZpeGVkTnVtICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b2ZpeCkge1xuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5mb3JtYXQoZml4ZWROdW0sIHRoaXMpLnJlcGxhY2UoTWFza2VkTnVtYmVyLlVOTUFTS0VEX1JBRElYLCB0aGlzLnJhZGl4KTtcbiAgICAgICAgICBza2lwIHx8IChza2lwID0gb2xkVmFsdWUgPT09IHRoaXMuX3ZhbHVlICYmICFmbGFncy50YWlsKTsgLy8gaWYgbm90IGNoYW5nZWQgb24gdGFpbCBpdCdzIHN0aWxsIG9rIHRvIHByb2NlZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhY2NlcHRlZCAmJiAoYWNjZXB0ZWQgPSBCb29sZWFuKHRoaXMuX3ZhbHVlLm1hdGNoKHRoaXMuX251bWJlclJlZ0V4cCkpKTtcbiAgICB9XG4gICAgbGV0IGFwcGVuZERldGFpbHM7XG4gICAgaWYgKCFhY2NlcHRlZCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgIGFwcGVuZERldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBlbmREZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICBpbnNlcnRlZDogdGhpcy5fdmFsdWUuc2xpY2Uob2xkVmFsdWUubGVuZ3RoKSxcbiAgICAgICAgcmF3SW5zZXJ0ZWQ6IHNraXAgPyAnJyA6IGNoLFxuICAgICAgICBza2lwXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3ZhbHVlKTtcbiAgICBjb25zdCBiZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuICAgIGNvbnN0IGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoYmVmb3JlVGFpbFZhbHVlKTtcbiAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICByZXR1cm4gYXBwZW5kRGV0YWlscztcbiAgfVxuICBfZmluZFNlcGFyYXRvckFyb3VuZChwb3MpIHtcbiAgICBpZiAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHtcbiAgICAgIGNvbnN0IHNlYXJjaEZyb20gPSBwb3MgLSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGggKyAxO1xuICAgICAgY29uc3Qgc2VwYXJhdG9yUG9zID0gdGhpcy52YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBzZWFyY2hGcm9tKTtcbiAgICAgIGlmIChzZXBhcmF0b3JQb3MgPD0gcG9zKSByZXR1cm4gc2VwYXJhdG9yUG9zO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbSwgdG8pIHtcbiAgICBjb25zdCBzZXBhcmF0b3JBcm91bmRGcm9tUG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChmcm9tKTtcbiAgICBpZiAoc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA+PSAwKSBmcm9tID0gc2VwYXJhdG9yQXJvdW5kRnJvbVBvcztcbiAgICBjb25zdCBzZXBhcmF0b3JBcm91bmRUb1BvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQodG8pO1xuICAgIGlmIChzZXBhcmF0b3JBcm91bmRUb1BvcyA+PSAwKSB0byA9IHNlcGFyYXRvckFyb3VuZFRvUG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgIHJldHVybiBbZnJvbSwgdG9dO1xuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIFtmcm9tUG9zLCB0b1Bvc10gPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcbiAgICBjb25zdCB2YWx1ZUJlZm9yZVBvcyA9IHRoaXMudmFsdWUuc2xpY2UoMCwgZnJvbVBvcyk7XG4gICAgY29uc3QgdmFsdWVBZnRlclBvcyA9IHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgIGNvbnN0IHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHZhbHVlQmVmb3JlUG9zLmxlbmd0aCk7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWVCZWZvcmVQb3MgKyB2YWx1ZUFmdGVyUG9zKSk7XG4gICAgY29uc3QgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSh2YWx1ZUJlZm9yZVBvcyk7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgIHRhaWxTaGlmdDogKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGhcbiAgICB9KTtcbiAgfVxuICBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gY3Vyc29yUG9zO1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBzZXBhcmF0b3JBdExlZnRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyAtIDEpO1xuICAgICAgICAgIGlmIChzZXBhcmF0b3JBdExlZnRQb3MgPj0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zID0gc2VwYXJhdG9yQXRMZWZ0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGN1cnNvclBvcyA8IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8PSBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IHNlcGFyYXRvckF0UmlnaHRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyk7XG4gICAgICAgICAgaWYgKHNlcGFyYXRvckF0UmlnaHRQb3MgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0UmlnaHRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJzb3JQb3M7XG4gIH1cbiAgZG9Db21taXQoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgbGV0IHZhbGlkbnVtID0gbnVtYmVyO1xuXG4gICAgICAvLyBjaGVjayBib3VuZHNcbiAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XG4gICAgICBpZiAodGhpcy5tYXggIT0gbnVsbCkgdmFsaWRudW0gPSBNYXRoLm1pbih2YWxpZG51bSwgdGhpcy5tYXgpO1xuICAgICAgaWYgKHZhbGlkbnVtICE9PSBudW1iZXIpIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHRoaXMuZm9ybWF0KHZhbGlkbnVtLCB0aGlzKTtcbiAgICAgIGxldCBmb3JtYXR0ZWQgPSB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHRoaXMubm9ybWFsaXplWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX25vcm1hbGl6ZVplcm9zKGZvcm1hdHRlZCk7XG4gICAgICBpZiAodGhpcy5wYWRGcmFjdGlvbmFsWmVyb3MgJiYgdGhpcy5zY2FsZSA+IDApIGZvcm1hdHRlZCA9IHRoaXMuX3BhZEZyYWN0aW9uYWxaZXJvcyhmb3JtYXR0ZWQpO1xuICAgICAgdGhpcy5fdmFsdWUgPSBmb3JtYXR0ZWQ7XG4gICAgfVxuICAgIHN1cGVyLmRvQ29tbWl0KCk7XG4gIH1cbiAgX25vcm1hbGl6ZVplcm9zKHZhbHVlKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKS5zcGxpdCh0aGlzLnJhZGl4KTtcblxuICAgIC8vIHJlbW92ZSBsZWFkaW5nIHplcm9zXG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9eKFxcRCopKDAqKShcXGQqKS8sIChtYXRjaCwgc2lnbiwgemVyb3MsIG51bSkgPT4gc2lnbiArIG51bSk7XG4gICAgLy8gYWRkIGxlYWRpbmcgemVyb1xuICAgIGlmICh2YWx1ZS5sZW5ndGggJiYgIS9cXGQkLy50ZXN0KHBhcnRzWzBdKSkgcGFydHNbMF0gPSBwYXJ0c1swXSArICcwJztcbiAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKC8wKiQvLCAnJyk7IC8vIHJlbW92ZSB0cmFpbGluZyB6ZXJvc1xuICAgICAgaWYgKCFwYXJ0c1sxXS5sZW5ndGgpIHBhcnRzLmxlbmd0aCA9IDE7IC8vIHJlbW92ZSBmcmFjdGlvbmFsXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHBhcnRzLmpvaW4odGhpcy5yYWRpeCkpO1xuICB9XG4gIF9wYWRGcmFjdGlvbmFsWmVyb3ModmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4gICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICBpZiAocGFydHMubGVuZ3RoIDwgMikgcGFydHMucHVzaCgnJyk7XG4gICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5wYWRFbmQodGhpcy5zY2FsZSwgJzAnKTtcbiAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgfVxuICBkb1NraXBJbnZhbGlkKGNoLCBmbGFncywgY2hlY2tUYWlsKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGNvbnN0IGRyb3BGcmFjdGlvbmFsID0gdGhpcy5zY2FsZSA9PT0gMCAmJiBjaCAhPT0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IgJiYgKGNoID09PSB0aGlzLnJhZGl4IHx8IGNoID09PSBNYXNrZWROdW1iZXIuVU5NQVNLRURfUkFESVggfHwgdGhpcy5tYXBUb1JhZGl4LmluY2x1ZGVzKGNoKSk7XG4gICAgcmV0dXJuIHN1cGVyLmRvU2tpcEludmFsaWQoY2gsIGZsYWdzLCBjaGVja1RhaWwpICYmICFkcm9wRnJhY3Rpb25hbDtcbiAgfVxuICBnZXQgdW5tYXNrZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9ub3JtYWxpemVaZXJvcyh0aGlzLnZhbHVlKSkucmVwbGFjZSh0aGlzLnJhZGl4LCBNYXNrZWROdW1iZXIuVU5NQVNLRURfUkFESVgpO1xuICB9XG4gIHNldCB1bm1hc2tlZFZhbHVlKHVubWFza2VkVmFsdWUpIHtcbiAgICBzdXBlci51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcbiAgfVxuICBnZXQgdHlwZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZSh0aGlzLnVubWFza2VkVmFsdWUsIHRoaXMpO1xuICB9XG4gIHNldCB0eXBlZFZhbHVlKG4pIHtcbiAgICB0aGlzLnJhd0lucHV0VmFsdWUgPSB0aGlzLmZvcm1hdChuLCB0aGlzKS5yZXBsYWNlKE1hc2tlZE51bWJlci5VTk1BU0tFRF9SQURJWCwgdGhpcy5yYWRpeCk7XG4gIH1cblxuICAvKiogUGFyc2VkIE51bWJlciAqL1xuICBnZXQgbnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVkVmFsdWU7XG4gIH1cbiAgc2V0IG51bWJlcihudW1iZXIpIHtcbiAgICB0aGlzLnR5cGVkVmFsdWUgPSBudW1iZXI7XG4gIH1cbiAgZ2V0IGFsbG93TmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluICE9IG51bGwgJiYgdGhpcy5taW4gPCAwIHx8IHRoaXMubWF4ICE9IG51bGwgJiYgdGhpcy5tYXggPCAwO1xuICB9XG4gIGdldCBhbGxvd1Bvc2l0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLm1pbiAhPSBudWxsICYmIHRoaXMubWluID4gMCB8fCB0aGlzLm1heCAhPSBudWxsICYmIHRoaXMubWF4ID4gMDtcbiAgfVxuICB0eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSB7XG4gICAgLy8gaGFuZGxlICAwIC0+ICcnIGNhc2UgKHR5cGVkID0gMCBldmVuIGlmIHZhbHVlID0gJycpXG4gICAgLy8gZm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91Tm1Bbk5lUi9pbWFza2pzL2lzc3Vlcy8xMzRcbiAgICByZXR1cm4gKHN1cGVyLnR5cGVkVmFsdWVFcXVhbHModmFsdWUpIHx8IE1hc2tlZE51bWJlci5FTVBUWV9WQUxVRVMuaW5jbHVkZXModmFsdWUpICYmIE1hc2tlZE51bWJlci5FTVBUWV9WQUxVRVMuaW5jbHVkZXModGhpcy50eXBlZFZhbHVlKSkgJiYgISh2YWx1ZSA9PT0gMCAmJiB0aGlzLnZhbHVlID09PSAnJyk7XG4gIH1cbn1cbl9NYXNrZWROdW1iZXIgPSBNYXNrZWROdW1iZXI7XG5NYXNrZWROdW1iZXIuVU5NQVNLRURfUkFESVggPSAnLic7XG5NYXNrZWROdW1iZXIuRU1QVFlfVkFMVUVTID0gWy4uLk1hc2tlZC5FTVBUWV9WQUxVRVMsIDBdO1xuTWFza2VkTnVtYmVyLkRFRkFVTFRTID0ge1xuICAuLi5NYXNrZWQuREVGQVVMVFMsXG4gIG1hc2s6IE51bWJlcixcbiAgcmFkaXg6ICcsJyxcbiAgdGhvdXNhbmRzU2VwYXJhdG9yOiAnJyxcbiAgbWFwVG9SYWRpeDogW19NYXNrZWROdW1iZXIuVU5NQVNLRURfUkFESVhdLFxuICBtaW46IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLFxuICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICBzY2FsZTogMixcbiAgbm9ybWFsaXplWmVyb3M6IHRydWUsXG4gIHBhZEZyYWN0aW9uYWxaZXJvczogZmFsc2UsXG4gIHBhcnNlOiBOdW1iZXIsXG4gIGZvcm1hdDogbiA9PiBuLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyMFxuICB9KVxufTtcbklNYXNrLk1hc2tlZE51bWJlciA9IE1hc2tlZE51bWJlcjtcblxuZXhwb3J0IHsgTWFza2VkTnVtYmVyIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2ssIHsgbm9ybWFsaXplT3B0cyB9IGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgQ2h1bmtzVGFpbERldGFpbHMgZnJvbSAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgUGF0dGVybkN1cnNvciBmcm9tICcuL3BhdHRlcm4vY3Vyc29yLmpzJztcbmltcG9ydCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIGZyb20gJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCBQYXR0ZXJuSW5wdXREZWZpbml0aW9uIGZyb20gJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxuLyoqIFBhdHRlcm4gbWFzayAqL1xuY2xhc3MgTWFza2VkUGF0dGVybiBleHRlbmRzIE1hc2tlZCB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciBmb3IgZW1wdHkgaW5wdXQgKi9cblxuICAvKiogU2luZ2xlIGNoYXIgZm9yIGZpbGxlZCBpbnB1dCAqL1xuXG4gIC8qKiBTaG93IHBsYWNlaG9sZGVyIG9ubHkgd2hlbiBuZWVkZWQgKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uTWFza2VkUGF0dGVybi5ERUZBVUxUUyxcbiAgICAgIC4uLm9wdHMsXG4gICAgICBkZWZpbml0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgUGF0dGVybklucHV0RGVmaW5pdGlvbi5ERUZBVUxUX0RFRklOSVRJT05TLCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmRlZmluaXRpb25zKVxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmaW5pdGlvbnMsIG9wdHMuZGVmaW5pdGlvbnMpO1xuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XG4gICAgdGhpcy5fcmVidWlsZE1hc2soKTtcbiAgfVxuICBfcmVidWlsZE1hc2soKSB7XG4gICAgY29uc3QgZGVmcyA9IHRoaXMuZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5fYmxvY2tzID0gW107XG4gICAgdGhpcy5leHBvc2VCbG9jayA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zdG9wcyA9IFtdO1xuICAgIHRoaXMuX21hc2tlZEJsb2NrcyA9IHt9O1xuICAgIGNvbnN0IHBhdHRlcm4gPSB0aGlzLm1hc2s7XG4gICAgaWYgKCFwYXR0ZXJuIHx8ICFkZWZzKSByZXR1cm47XG4gICAgbGV0IHVubWFza2luZ0Jsb2NrID0gZmFsc2U7XG4gICAgbGV0IG9wdGlvbmFsQmxvY2sgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICh0aGlzLmJsb2Nrcykge1xuICAgICAgICBjb25zdCBwID0gcGF0dGVybi5zbGljZShpKTtcbiAgICAgICAgY29uc3QgYk5hbWVzID0gT2JqZWN0LmtleXModGhpcy5ibG9ja3MpLmZpbHRlcihiTmFtZSA9PiBwLmluZGV4T2YoYk5hbWUpID09PSAwKTtcbiAgICAgICAgLy8gb3JkZXIgYnkga2V5IGxlbmd0aFxuICAgICAgICBiTmFtZXMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XG4gICAgICAgIC8vIHVzZSBibG9jayBuYW1lIHdpdGggbWF4IGxlbmd0aFxuICAgICAgICBjb25zdCBiTmFtZSA9IGJOYW1lc1swXTtcbiAgICAgICAgaWYgKGJOYW1lKSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXhwb3NlLFxuICAgICAgICAgICAgcmVwZWF0LFxuICAgICAgICAgICAgLi4uYk9wdHNcbiAgICAgICAgICB9ID0gbm9ybWFsaXplT3B0cyh0aGlzLmJsb2Nrc1tiTmFtZV0pOyAvLyBUT0RPIHR5cGUgT3B0czxBcmcgJiBFeHRyYT5cbiAgICAgICAgICBjb25zdCBibG9ja09wdHMgPSB7XG4gICAgICAgICAgICBsYXp5OiB0aGlzLmxhenksXG4gICAgICAgICAgICBlYWdlcjogdGhpcy5lYWdlcixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgICBkaXNwbGF5Q2hhcjogdGhpcy5kaXNwbGF5Q2hhcixcbiAgICAgICAgICAgIG92ZXJ3cml0ZTogdGhpcy5vdmVyd3JpdGUsXG4gICAgICAgICAgICBhdXRvZml4OiB0aGlzLmF1dG9maXgsXG4gICAgICAgICAgICAuLi5iT3B0cyxcbiAgICAgICAgICAgIHJlcGVhdCxcbiAgICAgICAgICAgIHBhcmVudDogdGhpc1xuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgbWFza2VkQmxvY2sgPSByZXBlYXQgIT0gbnVsbCA/IG5ldyBJTWFzay5SZXBlYXRCbG9jayhibG9ja09wdHMgLyogVE9ETyAqLykgOiBjcmVhdGVNYXNrKGJsb2NrT3B0cyk7XG4gICAgICAgICAgaWYgKG1hc2tlZEJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChtYXNrZWRCbG9jayk7XG4gICAgICAgICAgICBpZiAoZXhwb3NlKSB0aGlzLmV4cG9zZUJsb2NrID0gbWFza2VkQmxvY2s7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGJsb2NrIGluZGV4XG4gICAgICAgICAgICBpZiAoIXRoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0pIHRoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0ucHVzaCh0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkgKz0gYk5hbWUubGVuZ3RoIC0gMTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGNoYXIgPSBwYXR0ZXJuW2ldO1xuICAgICAgbGV0IGlzSW5wdXQgPSAoY2hhciBpbiBkZWZzKTtcbiAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUikge1xuICAgICAgICB0aGlzLl9zdG9wcy5wdXNoKHRoaXMuX2Jsb2Nrcy5sZW5ndGgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFyID09PSAneycgfHwgY2hhciA9PT0gJ30nKSB7XG4gICAgICAgIHVubWFza2luZ0Jsb2NrID0gIXVubWFza2luZ0Jsb2NrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFyID09PSAnWycgfHwgY2hhciA9PT0gJ10nKSB7XG4gICAgICAgIG9wdGlvbmFsQmxvY2sgPSAhb3B0aW9uYWxCbG9jaztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUikge1xuICAgICAgICArK2k7XG4gICAgICAgIGNoYXIgPSBwYXR0ZXJuW2ldO1xuICAgICAgICBpZiAoIWNoYXIpIGJyZWFrO1xuICAgICAgICBpc0lucHV0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWYgPSBpc0lucHV0ID8gbmV3IFBhdHRlcm5JbnB1dERlZmluaXRpb24oe1xuICAgICAgICBpc09wdGlvbmFsOiBvcHRpb25hbEJsb2NrLFxuICAgICAgICBsYXp5OiB0aGlzLmxhenksXG4gICAgICAgIGVhZ2VyOiB0aGlzLmVhZ2VyLFxuICAgICAgICBwbGFjZWhvbGRlckNoYXI6IHRoaXMucGxhY2Vob2xkZXJDaGFyLFxuICAgICAgICBkaXNwbGF5Q2hhcjogdGhpcy5kaXNwbGF5Q2hhcixcbiAgICAgICAgLi4ubm9ybWFsaXplT3B0cyhkZWZzW2NoYXJdKSxcbiAgICAgICAgcGFyZW50OiB0aGlzXG4gICAgICB9KSA6IG5ldyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKHtcbiAgICAgICAgY2hhcixcbiAgICAgICAgZWFnZXI6IHRoaXMuZWFnZXIsXG4gICAgICAgIGlzVW5tYXNraW5nOiB1bm1hc2tpbmdCbG9ja1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9ibG9ja3MucHVzaChkZWYpO1xuICAgIH1cbiAgfVxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnN0YXRlLFxuICAgICAgX2Jsb2NrczogdGhpcy5fYmxvY2tzLm1hcChiID0+IGIuc3RhdGUpXG4gICAgfTtcbiAgfVxuICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIF9ibG9ja3MsXG4gICAgICAuLi5tYXNrZWRTdGF0ZVxuICAgIH0gPSBzdGF0ZTtcbiAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaCgoYiwgYmkpID0+IGIuc3RhdGUgPSBfYmxvY2tzW2JpXSk7XG4gICAgc3VwZXIuc3RhdGUgPSBtYXNrZWRTdGF0ZTtcbiAgfVxuICByZXNldCgpIHtcbiAgICBzdXBlci5yZXNldCgpO1xuICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGIgPT4gYi5yZXNldCgpKTtcbiAgfVxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBvc2VCbG9jayA/IHRoaXMuZXhwb3NlQmxvY2suaXNDb21wbGV0ZSA6IHRoaXMuX2Jsb2Nrcy5ldmVyeShiID0+IGIuaXNDb21wbGV0ZSk7XG4gIH1cbiAgZ2V0IGlzRmlsbGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoYiA9PiBiLmlzRmlsbGVkKTtcbiAgfVxuICBnZXQgaXNGaXhlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGIgPT4gYi5pc0ZpeGVkKTtcbiAgfVxuICBnZXQgaXNPcHRpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGIgPT4gYi5pc09wdGlvbmFsKTtcbiAgfVxuICBkb0NvbW1pdCgpIHtcbiAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChiID0+IGIuZG9Db21taXQoKSk7XG4gICAgc3VwZXIuZG9Db21taXQoKTtcbiAgfVxuICBnZXQgdW5tYXNrZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBvc2VCbG9jayA/IHRoaXMuZXhwb3NlQmxvY2sudW5tYXNrZWRWYWx1ZSA6IHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoKHN0ciwgYikgPT4gc3RyICs9IGIudW5tYXNrZWRWYWx1ZSwgJycpO1xuICB9XG4gIHNldCB1bm1hc2tlZFZhbHVlKHVubWFza2VkVmFsdWUpIHtcbiAgICBpZiAodGhpcy5leHBvc2VCbG9jaykge1xuICAgICAgY29uc3QgdGFpbCA9IHRoaXMuZXh0cmFjdFRhaWwodGhpcy5fYmxvY2tTdGFydFBvcyh0aGlzLl9ibG9ja3MuaW5kZXhPZih0aGlzLmV4cG9zZUJsb2NrKSkgKyB0aGlzLmV4cG9zZUJsb2NrLmRpc3BsYXlWYWx1ZS5sZW5ndGgpO1xuICAgICAgdGhpcy5leHBvc2VCbG9jay51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcbiAgICAgIHRoaXMuYXBwZW5kVGFpbCh0YWlsKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9IGVsc2Ugc3VwZXIudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmV4cG9zZUJsb2NrID8gdGhpcy5leHBvc2VCbG9jay52YWx1ZSA6XG4gICAgLy8gVE9ETyByZXR1cm4gX3ZhbHVlIHdoZW4gbm90IGluIGNoYW5nZT9cbiAgICB0aGlzLl9ibG9ja3MucmVkdWNlKChzdHIsIGIpID0+IHN0ciArPSBiLnZhbHVlLCAnJyk7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZXhwb3NlQmxvY2spIHtcbiAgICAgIGNvbnN0IHRhaWwgPSB0aGlzLmV4dHJhY3RUYWlsKHRoaXMuX2Jsb2NrU3RhcnRQb3ModGhpcy5fYmxvY2tzLmluZGV4T2YodGhpcy5leHBvc2VCbG9jaykpICsgdGhpcy5leHBvc2VCbG9jay5kaXNwbGF5VmFsdWUubGVuZ3RoKTtcbiAgICAgIHRoaXMuZXhwb3NlQmxvY2sudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYXBwZW5kVGFpbCh0YWlsKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9IGVsc2Ugc3VwZXIudmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgdHlwZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBvc2VCbG9jayA/IHRoaXMuZXhwb3NlQmxvY2sudHlwZWRWYWx1ZSA6IHN1cGVyLnR5cGVkVmFsdWU7XG4gIH1cbiAgc2V0IHR5cGVkVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5leHBvc2VCbG9jaykge1xuICAgICAgY29uc3QgdGFpbCA9IHRoaXMuZXh0cmFjdFRhaWwodGhpcy5fYmxvY2tTdGFydFBvcyh0aGlzLl9ibG9ja3MuaW5kZXhPZih0aGlzLmV4cG9zZUJsb2NrKSkgKyB0aGlzLmV4cG9zZUJsb2NrLmRpc3BsYXlWYWx1ZS5sZW5ndGgpO1xuICAgICAgdGhpcy5leHBvc2VCbG9jay50eXBlZFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmFwcGVuZFRhaWwodGFpbCk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfSBlbHNlIHN1cGVyLnR5cGVkVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKChzdHIsIGIpID0+IHN0ciArPSBiLmRpc3BsYXlWYWx1ZSwgJycpO1xuICB9XG4gIGFwcGVuZFRhaWwodGFpbCkge1xuICAgIHJldHVybiBzdXBlci5hcHBlbmRUYWlsKHRhaWwpLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgfVxuICBfYXBwZW5kRWFnZXIoKSB7XG4gICAgdmFyIF90aGlzJF9tYXBQb3NUb0Jsb2NrO1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGxldCBzdGFydEJsb2NrSW5kZXggPSAoX3RoaXMkX21hcFBvc1RvQmxvY2sgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aCkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRfbWFwUG9zVG9CbG9jay5pbmRleDtcbiAgICBpZiAoc3RhcnRCbG9ja0luZGV4ID09IG51bGwpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgLy8gVE9ETyB0ZXN0IGlmIGl0IHdvcmtzIGZvciBuZXN0ZWQgcGF0dGVybiBtYXNrc1xuICAgIGlmICh0aGlzLl9ibG9ja3Nbc3RhcnRCbG9ja0luZGV4XS5pc0ZpbGxlZCkgKytzdGFydEJsb2NrSW5kZXg7XG4gICAgZm9yIChsZXQgYmkgPSBzdGFydEJsb2NrSW5kZXg7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgY29uc3QgZCA9IHRoaXMuX2Jsb2Nrc1tiaV0uX2FwcGVuZEVhZ2VyKCk7XG4gICAgICBpZiAoIWQuaW5zZXJ0ZWQpIGJyZWFrO1xuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoZCk7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIF9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBibG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aCk7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgaWYgKCFibG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuICAgIGZvciAobGV0IGJpID0gYmxvY2tJdGVyLmluZGV4LCBibG9jazsgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldOyArK2JpKSB7XG4gICAgICB2YXIgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhO1xuICAgICAgY29uc3QgYmxvY2tEZXRhaWxzID0gYmxvY2suX2FwcGVuZENoYXIoY2gsIHtcbiAgICAgICAgLi4uZmxhZ3MsXG4gICAgICAgIF9iZWZvcmVUYWlsU3RhdGU6IChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlKSA9PSBudWxsIHx8IChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPSBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEuX2Jsb2NrcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9mbGFncyRfYmVmb3JlVGFpbFN0YVtiaV1cbiAgICAgIH0pO1xuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYmxvY2tEZXRhaWxzKTtcbiAgICAgIGlmIChibG9ja0RldGFpbHMuY29uc3VtZWQpIGJyZWFrOyAvLyBnbyBuZXh0IGNoYXJcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBjaHVua1RhaWwgPSBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKTtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiBjaHVua1RhaWw7XG4gICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIChiLCBiaSwgYkZyb21Qb3MsIGJUb1BvcykgPT4ge1xuICAgICAgY29uc3QgYmxvY2tDaHVuayA9IGIuZXh0cmFjdFRhaWwoYkZyb21Qb3MsIGJUb1Bvcyk7XG4gICAgICBibG9ja0NodW5rLnN0b3AgPSB0aGlzLl9maW5kU3RvcEJlZm9yZShiaSk7XG4gICAgICBibG9ja0NodW5rLmZyb20gPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJpKTtcbiAgICAgIGlmIChibG9ja0NodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIGJsb2NrQ2h1bmsuYmxvY2tJbmRleCA9IGJpO1xuICAgICAgY2h1bmtUYWlsLmV4dGVuZChibG9ja0NodW5rKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2h1bmtUYWlsO1xuICB9XG4gIGV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gJyc7XG4gICAgbGV0IGlucHV0ID0gJyc7XG4gICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIChiLCBfLCBmcm9tUG9zLCB0b1BvcykgPT4ge1xuICAgICAgaW5wdXQgKz0gYi5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgX2ZpbmRTdG9wQmVmb3JlKGJsb2NrSW5kZXgpIHtcbiAgICBsZXQgc3RvcEJlZm9yZTtcbiAgICBmb3IgKGxldCBzaSA9IDA7IHNpIDwgdGhpcy5fc3RvcHMubGVuZ3RoOyArK3NpKSB7XG4gICAgICBjb25zdCBzdG9wID0gdGhpcy5fc3RvcHNbc2ldO1xuICAgICAgaWYgKHN0b3AgPD0gYmxvY2tJbmRleCkgc3RvcEJlZm9yZSA9IHN0b3A7ZWxzZSBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHN0b3BCZWZvcmU7XG4gIH1cblxuICAvKiogQXBwZW5kcyBwbGFjZWhvbGRlciBkZXBlbmRpbmcgb24gbGF6aW5lc3MgKi9cbiAgX2FwcGVuZFBsYWNlaG9sZGVyKHRvQmxvY2tJbmRleCkge1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGlmICh0aGlzLmxhenkgJiYgdG9CbG9ja0luZGV4ID09IG51bGwpIHJldHVybiBkZXRhaWxzO1xuICAgIGNvbnN0IHN0YXJ0QmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGgpO1xuICAgIGlmICghc3RhcnRCbG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuICAgIGNvbnN0IHN0YXJ0QmxvY2tJbmRleCA9IHN0YXJ0QmxvY2tJdGVyLmluZGV4O1xuICAgIGNvbnN0IGVuZEJsb2NrSW5kZXggPSB0b0Jsb2NrSW5kZXggIT0gbnVsbCA/IHRvQmxvY2tJbmRleCA6IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7XG4gICAgdGhpcy5fYmxvY2tzLnNsaWNlKHN0YXJ0QmxvY2tJbmRleCwgZW5kQmxvY2tJbmRleCkuZm9yRWFjaChiID0+IHtcbiAgICAgIGlmICghYi5sYXp5IHx8IHRvQmxvY2tJbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHZhciBfYmxvY2tzMjtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYi5fYXBwZW5kUGxhY2Vob2xkZXIoKF9ibG9ja3MyID0gYi5fYmxvY2tzKSA9PSBudWxsID8gdm9pZCAwIDogX2Jsb2NrczIubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cblxuICAvKiogRmluZHMgYmxvY2sgaW4gcG9zICovXG4gIF9tYXBQb3NUb0Jsb2NrKHBvcykge1xuICAgIGxldCBhY2NWYWwgPSAnJztcbiAgICBmb3IgKGxldCBiaSA9IDA7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xuICAgICAgY29uc3QgYmxvY2tTdGFydFBvcyA9IGFjY1ZhbC5sZW5ndGg7XG4gICAgICBhY2NWYWwgKz0gYmxvY2suZGlzcGxheVZhbHVlO1xuICAgICAgaWYgKHBvcyA8PSBhY2NWYWwubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXg6IGJpLFxuICAgICAgICAgIG9mZnNldDogcG9zIC0gYmxvY2tTdGFydFBvc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfYmxvY2tTdGFydFBvcyhibG9ja0luZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5zbGljZSgwLCBibG9ja0luZGV4KS5yZWR1Y2UoKHBvcywgYikgPT4gcG9zICs9IGIuZGlzcGxheVZhbHVlLmxlbmd0aCwgMCk7XG4gIH1cbiAgX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmbikge1xuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgZnJvbUJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2soZnJvbVBvcyk7XG4gICAgaWYgKGZyb21CbG9ja0l0ZXIpIHtcbiAgICAgIGNvbnN0IHRvQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0b1Bvcyk7XG4gICAgICAvLyBwcm9jZXNzIGZpcnN0IGJsb2NrXG4gICAgICBjb25zdCBpc1NhbWVCbG9jayA9IHRvQmxvY2tJdGVyICYmIGZyb21CbG9ja0l0ZXIuaW5kZXggPT09IHRvQmxvY2tJdGVyLmluZGV4O1xuICAgICAgY29uc3QgZnJvbUJsb2NrU3RhcnRQb3MgPSBmcm9tQmxvY2tJdGVyLm9mZnNldDtcbiAgICAgIGNvbnN0IGZyb21CbG9ja0VuZFBvcyA9IHRvQmxvY2tJdGVyICYmIGlzU2FtZUJsb2NrID8gdG9CbG9ja0l0ZXIub2Zmc2V0IDogdGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgICBmbih0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0sIGZyb21CbG9ja0l0ZXIuaW5kZXgsIGZyb21CbG9ja1N0YXJ0UG9zLCBmcm9tQmxvY2tFbmRQb3MpO1xuICAgICAgaWYgKHRvQmxvY2tJdGVyICYmICFpc1NhbWVCbG9jaykge1xuICAgICAgICAvLyBwcm9jZXNzIGludGVybWVkaWF0ZSBibG9ja3NcbiAgICAgICAgZm9yIChsZXQgYmkgPSBmcm9tQmxvY2tJdGVyLmluZGV4ICsgMTsgYmkgPCB0b0Jsb2NrSXRlci5pbmRleDsgKytiaSkge1xuICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tiaV0sIGJpLCAwLCB0aGlzLl9ibG9ja3NbYmldLmRpc3BsYXlWYWx1ZS5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJvY2VzcyBsYXN0IGJsb2NrXG4gICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1t0b0Jsb2NrSXRlci5pbmRleF0sIHRvQmxvY2tJdGVyLmluZGV4LCAwLCB0b0Jsb2NrSXRlci5vZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW1vdmUoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVEZXRhaWxzID0gc3VwZXIucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgKGIsIF8sIGJGcm9tUG9zLCBiVG9Qb3MpID0+IHtcbiAgICAgIHJlbW92ZURldGFpbHMuYWdncmVnYXRlKGIucmVtb3ZlKGJGcm9tUG9zLCBiVG9Qb3MpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVtb3ZlRGV0YWlscztcbiAgfVxuICBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGRpcmVjdGlvbiA9IERJUkVDVElPTi5OT05FO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2Jsb2Nrcy5sZW5ndGgpIHJldHVybiAwO1xuICAgIGNvbnN0IGN1cnNvciA9IG5ldyBQYXR0ZXJuQ3Vyc29yKHRoaXMsIGN1cnNvclBvcyk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIE5PTkUgc2hvdWxkIG9ubHkgZ28gb3V0IGZyb20gZml4ZWQgdG8gdGhlIHJpZ2h0IVxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaWYgKGN1cnNvci5wdXNoUmlnaHRCZWZvcmVJbnB1dCgpKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgaWYgKGN1cnNvci5wdXNoTGVmdEJlZm9yZUlucHV0KCkpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBGT1JDRSBpcyBvbmx5IGFib3V0IGF8KiBvdGhlcndpc2UgaXMgMFxuICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgIC8vIHRyeSB0byBicmVhayBmYXN0IHdoZW4gKnxhXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlRmlsbGVkKCk7XG4gICAgICAgIGlmIChjdXJzb3Iub2sgJiYgY3Vyc29yLnBvcyA9PT0gY3Vyc29yUG9zKSByZXR1cm4gY3Vyc29yUG9zO1xuICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yd2FyZCBmbG93XG4gICAgICBjdXJzb3IucHVzaExlZnRCZWZvcmVJbnB1dCgpO1xuICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlUmVxdWlyZWQoKTtcbiAgICAgIGN1cnNvci5wdXNoTGVmdEJlZm9yZUZpbGxlZCgpO1xuXG4gICAgICAvLyBiYWNrd2FyZCBmbG93XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlSW5wdXQoKTtcbiAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZVJlcXVpcmVkKCk7XG4gICAgICAgIGlmIChjdXJzb3Iub2sgJiYgY3Vyc29yLnBvcyA8PSBjdXJzb3JQb3MpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgaWYgKGN1cnNvci5vayAmJiBjdXJzb3IucG9zIDw9IGN1cnNvclBvcykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkgcmV0dXJuIDA7XG4gICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uUklHSFQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQpIHtcbiAgICAgIC8vIGZvcndhcmQgZmxvd1xuICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCk7XG4gICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlUmVxdWlyZWQoKTtcbiAgICAgIGlmIChjdXJzb3IucHVzaFJpZ2h0QmVmb3JlRmlsbGVkKCkpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSByZXR1cm4gdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoO1xuXG4gICAgICAvLyBiYWNrd2FyZCBmbG93XG4gICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgIHJldHVybiB0aGlzLm5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnNvclBvcztcbiAgfVxuICB0b3RhbElucHV0UG9zaXRpb25zKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgKGIsIF8sIGJGcm9tUG9zLCBiVG9Qb3MpID0+IHtcbiAgICAgIHRvdGFsICs9IGIudG90YWxJbnB1dFBvc2l0aW9ucyhiRnJvbVBvcywgYlRvUG9zKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICAvKiogR2V0IGJsb2NrIGJ5IG5hbWUgKi9cbiAgbWFza2VkQmxvY2sobmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZEJsb2NrcyhuYW1lKVswXTtcbiAgfVxuXG4gIC8qKiBHZXQgYWxsIGJsb2NrcyBieSBuYW1lICovXG4gIG1hc2tlZEJsb2NrcyhuYW1lKSB7XG4gICAgY29uc3QgaW5kaWNlcyA9IHRoaXMuX21hc2tlZEJsb2Nrc1tuYW1lXTtcbiAgICBpZiAoIWluZGljZXMpIHJldHVybiBbXTtcbiAgICByZXR1cm4gaW5kaWNlcy5tYXAoZ2kgPT4gdGhpcy5fYmxvY2tzW2dpXSk7XG4gIH1cbiAgcGFkKGZsYWdzKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoMCwgdGhpcy5kaXNwbGF5VmFsdWUubGVuZ3RoLCBiID0+IGRldGFpbHMuYWdncmVnYXRlKGIucGFkKGZsYWdzKSkpO1xuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG59XG5NYXNrZWRQYXR0ZXJuLkRFRkFVTFRTID0ge1xuICAuLi5NYXNrZWQuREVGQVVMVFMsXG4gIGxhenk6IHRydWUsXG4gIHBsYWNlaG9sZGVyQ2hhcjogJ18nXG59O1xuTWFza2VkUGF0dGVybi5TVE9QX0NIQVIgPSAnYCc7XG5NYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSID0gJ1xcXFwnO1xuTWFza2VkUGF0dGVybi5JbnB1dERlZmluaXRpb24gPSBQYXR0ZXJuSW5wdXREZWZpbml0aW9uO1xuTWFza2VkUGF0dGVybi5GaXhlZERlZmluaXRpb24gPSBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xuSU1hc2suTWFza2VkUGF0dGVybiA9IE1hc2tlZFBhdHRlcm47XG5cbmV4cG9ydCB7IE1hc2tlZFBhdHRlcm4gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi8uLi9jb3JlL2hvbGRlci5qcyc7XG5cbmNsYXNzIENodW5rc1RhaWxEZXRhaWxzIHtcbiAgLyoqICovXG5cbiAgY29uc3RydWN0b3IoY2h1bmtzLCBmcm9tKSB7XG4gICAgaWYgKGNodW5rcyA9PT0gdm9pZCAwKSB7XG4gICAgICBjaHVua3MgPSBbXTtcbiAgICB9XG4gICAgaWYgKGZyb20gPT09IHZvaWQgMCkge1xuICAgICAgZnJvbSA9IDA7XG4gICAgfVxuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcChTdHJpbmcpLmpvaW4oJycpO1xuICB9XG4gIGV4dGVuZCh0YWlsQ2h1bmspIHtcbiAgICBpZiAoIVN0cmluZyh0YWlsQ2h1bmspKSByZXR1cm47XG4gICAgdGFpbENodW5rID0gaXNTdHJpbmcodGFpbENodW5rKSA/IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWxDaHVuaykpIDogdGFpbENodW5rO1xuICAgIGNvbnN0IGxhc3RDaHVuayA9IHRoaXMuY2h1bmtzW3RoaXMuY2h1bmtzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGV4dGVuZExhc3QgPSBsYXN0Q2h1bmsgJiYgKFxuICAgIC8vIGlmIHN0b3BzIGFyZSBzYW1lIG9yIHRhaWwgaGFzIG5vIHN0b3BcbiAgICBsYXN0Q2h1bmsuc3RvcCA9PT0gdGFpbENodW5rLnN0b3AgfHwgdGFpbENodW5rLnN0b3AgPT0gbnVsbCkgJiZcbiAgICAvLyBpZiB0YWlsIGNodW5rIGdvZXMganVzdCBhZnRlciBsYXN0IGNodW5rXG4gICAgdGFpbENodW5rLmZyb20gPT09IGxhc3RDaHVuay5mcm9tICsgbGFzdENodW5rLnRvU3RyaW5nKCkubGVuZ3RoO1xuICAgIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDb250aW51b3VzVGFpbERldGFpbHMpIHtcbiAgICAgIC8vIGNoZWNrIHRoZSBhYmlsaXR5IHRvIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgaWYgKGV4dGVuZExhc3QpIHtcbiAgICAgICAgLy8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICAgIGxhc3RDaHVuay5leHRlbmQodGFpbENodW5rLnRvU3RyaW5nKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYXBwZW5kIG5ldyBjaHVua1xuICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykge1xuICAgICAgaWYgKHRhaWxDaHVuay5zdG9wID09IG51bGwpIHtcbiAgICAgICAgLy8gdW53cmFwIGZsb2F0aW5nIGNodW5rcyB0byBwYXJlbnQsIGtlZXBpbmcgYGZyb21gIHBvc1xuICAgICAgICBsZXQgZmlyc3RUYWlsQ2h1bms7XG4gICAgICAgIHdoaWxlICh0YWlsQ2h1bmsuY2h1bmtzLmxlbmd0aCAmJiB0YWlsQ2h1bmsuY2h1bmtzWzBdLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgIGZpcnN0VGFpbENodW5rID0gdGFpbENodW5rLmNodW5rcy5zaGlmdCgpOyAvLyBub3QgcG9zc2libGUgdG8gYmUgYHVuZGVmaW5lZGAgYmVjYXVzZSBsZW5ndGggd2FzIGNoZWNrZWQgYWJvdmVcbiAgICAgICAgICBmaXJzdFRhaWxDaHVuay5mcm9tICs9IHRhaWxDaHVuay5mcm9tO1xuICAgICAgICAgIHRoaXMuZXh0ZW5kKGZpcnN0VGFpbENodW5rKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiB0YWlsIGNodW5rIHN0aWxsIGhhcyB2YWx1ZVxuICAgICAgaWYgKHRhaWxDaHVuay50b1N0cmluZygpKSB7XG4gICAgICAgIC8vIGlmIGNodW5rcyBjb250YWlucyBzdG9wcywgdGhlbiBwb3B1cCBzdG9wIHRvIGNvbnRhaW5lclxuICAgICAgICB0YWlsQ2h1bmsuc3RvcCA9IHRhaWxDaHVuay5ibG9ja0luZGV4O1xuICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgIGlmICghKG1hc2tlZCBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZFBhdHRlcm4pKSB7XG4gICAgICBjb25zdCB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8obWFza2VkKTtcbiAgICB9XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgZm9yIChsZXQgY2kgPSAwOyBjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aDsgKytjaSkge1xuICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICBjb25zdCBsYXN0QmxvY2tJdGVyID0gbWFza2VkLl9tYXBQb3NUb0Jsb2NrKG1hc2tlZC5kaXNwbGF5VmFsdWUubGVuZ3RoKTtcbiAgICAgIGNvbnN0IHN0b3AgPSBjaHVuay5zdG9wO1xuICAgICAgbGV0IGNodW5rQmxvY2s7XG4gICAgICBpZiAoc3RvcCAhPSBudWxsICYmIChcbiAgICAgIC8vIGlmIGJsb2NrIG5vdCBmb3VuZCBvciBzdG9wIGlzIGJlaGluZCBsYXN0QmxvY2tcbiAgICAgICFsYXN0QmxvY2tJdGVyIHx8IGxhc3RCbG9ja0l0ZXIuaW5kZXggPD0gc3RvcCkpIHtcbiAgICAgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgfHxcbiAgICAgICAgLy8gZm9yIGNvbnRpbnVvdXMgYmxvY2sgYWxzbyBjaGVjayBpZiBzdG9wIGlzIGV4aXN0XG4gICAgICAgIG1hc2tlZC5fc3RvcHMuaW5kZXhPZihzdG9wKSA+PSAwKSB7XG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcihzdG9wKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2h1bmtCbG9jayA9IGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgJiYgbWFza2VkLl9ibG9ja3Nbc3RvcF07XG4gICAgICB9XG4gICAgICBpZiAoY2h1bmtCbG9jaykge1xuICAgICAgICBjb25zdCB0YWlsRGV0YWlscyA9IGNodW5rQmxvY2suYXBwZW5kVGFpbChjaHVuayk7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRhaWxEZXRhaWxzKTtcblxuICAgICAgICAvLyBnZXQgbm90IGluc2VydGVkIGNoYXJzXG4gICAgICAgIGNvbnN0IHJlbWFpbkNoYXJzID0gY2h1bmsudG9TdHJpbmcoKS5zbGljZSh0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGgpO1xuICAgICAgICBpZiAocmVtYWluQ2hhcnMpIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQocmVtYWluQ2hhcnMsIHtcbiAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQoY2h1bmsudG9TdHJpbmcoKSwge1xuICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNodW5rczogdGhpcy5jaHVua3MubWFwKGMgPT4gYy5zdGF0ZSksXG4gICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICBzdG9wOiB0aGlzLnN0b3AsXG4gICAgICBibG9ja0luZGV4OiB0aGlzLmJsb2NrSW5kZXhcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNodW5rcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHN0YXRlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpO1xuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzLm1hcChjc3RhdGUgPT4ge1xuICAgICAgY29uc3QgY2h1bmsgPSBcImNodW5rc1wiIGluIGNzdGF0ZSA/IG5ldyBDaHVua3NUYWlsRGV0YWlscygpIDogbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygpO1xuICAgICAgY2h1bmsuc3RhdGUgPSBjc3RhdGU7XG4gICAgICByZXR1cm4gY2h1bms7XG4gICAgfSk7XG4gIH1cbiAgdW5zaGlmdChiZWZvcmVQb3MpIHtcbiAgICBpZiAoIXRoaXMuY2h1bmtzLmxlbmd0aCB8fCBiZWZvcmVQb3MgIT0gbnVsbCAmJiB0aGlzLmZyb20gPj0gYmVmb3JlUG9zKSByZXR1cm4gJyc7XG4gICAgY29uc3QgY2h1bmtTaGlmdFBvcyA9IGJlZm9yZVBvcyAhPSBudWxsID8gYmVmb3JlUG9zIC0gdGhpcy5mcm9tIDogYmVmb3JlUG9zO1xuICAgIGxldCBjaSA9IDA7XG4gICAgd2hpbGUgKGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcbiAgICAgIGNvbnN0IHNoaWZ0Q2hhciA9IGNodW5rLnVuc2hpZnQoY2h1bmtTaGlmdFBvcyk7XG4gICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAvLyBjaHVuayBzdGlsbCBjb250YWlucyB2YWx1ZVxuICAgICAgICAvLyBidXQgbm90IHNoaWZ0ZWQgLSBtZWFucyBubyBtb3JlIGF2YWlsYWJsZSBjaGFycyB0byBzaGlmdFxuICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XG4gICAgICAgICsrY2k7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcbiAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuICBzaGlmdCgpIHtcbiAgICBpZiAoIXRoaXMuY2h1bmtzLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgIGxldCBjaSA9IHRoaXMuY2h1bmtzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKDAgPD0gY2kpIHtcbiAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgY29uc3Qgc2hpZnRDaGFyID0gY2h1bmsuc2hpZnQoKTtcbiAgICAgIGlmIChjaHVuay50b1N0cmluZygpKSB7XG4gICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgIC8vIGJ1dCBub3Qgc2hpZnRlZCAtIG1lYW5zIG5vIG1vcmUgYXZhaWxhYmxlIGNoYXJzIHRvIHNoaWZ0XG4gICAgICAgIGlmICghc2hpZnRDaGFyKSBicmVhaztcbiAgICAgICAgLS1jaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNsZWFuIGlmIGNodW5rIGhhcyBubyB2YWx1ZVxuICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaWZ0Q2hhcikgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmV4cG9ydCB7IENodW5rc1RhaWxEZXRhaWxzIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuXG5jbGFzcyBQYXR0ZXJuQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IobWFza2VkLCBwb3MpIHtcbiAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcbiAgICB0aGlzLl9sb2cgPSBbXTtcbiAgICBjb25zdCB7XG4gICAgICBvZmZzZXQsXG4gICAgICBpbmRleFxuICAgIH0gPSBtYXNrZWQuX21hcFBvc1RvQmxvY2socG9zKSB8fCAocG9zIDwgMCA/XG4gICAgLy8gZmlyc3RcbiAgICB7XG4gICAgICBpbmRleDogMCxcbiAgICAgIG9mZnNldDogMFxuICAgIH0gOlxuICAgIC8vIGxhc3RcbiAgICB7XG4gICAgICBpbmRleDogdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGgsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9KTtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5vayA9IGZhbHNlO1xuICB9XG4gIGdldCBibG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuX2Jsb2Nrc1t0aGlzLmluZGV4XTtcbiAgfVxuICBnZXQgcG9zKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC5fYmxvY2tTdGFydFBvcyh0aGlzLmluZGV4KSArIHRoaXMub2Zmc2V0O1xuICB9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgb2s6IHRoaXMub2tcbiAgICB9O1xuICB9XG4gIHNldCBzdGF0ZShzKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzKTtcbiAgfVxuICBwdXNoU3RhdGUoKSB7XG4gICAgdGhpcy5fbG9nLnB1c2godGhpcy5zdGF0ZSk7XG4gIH1cbiAgcG9wU3RhdGUoKSB7XG4gICAgY29uc3QgcyA9IHRoaXMuX2xvZy5wb3AoKTtcbiAgICBpZiAocykgdGhpcy5zdGF0ZSA9IHM7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgYmluZEJsb2NrKCkge1xuICAgIGlmICh0aGlzLmJsb2NrKSByZXR1cm47XG4gICAgaWYgKHRoaXMuaW5kZXggPCAwKSB7XG4gICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5kZXggPSB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2suZGlzcGxheVZhbHVlLmxlbmd0aDsgLy8gVE9ETyB0aGlzIGlzIHN0dXBpZCB0eXBlIGVycm9yLCBgYmxvY2tgIGRlcGVuZHMgb24gaW5kZXggdGhhdCB3YXMgY2hhbmdlZCBhYm92ZVxuICAgIH1cbiAgfVxuICBfcHVzaExlZnQoZm4pIHtcbiAgICB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgIGZvciAodGhpcy5iaW5kQmxvY2soKTsgMCA8PSB0aGlzLmluZGV4OyAtLXRoaXMuaW5kZXgsIHRoaXMub2Zmc2V0ID0gKChfdGhpcyRibG9jayA9IHRoaXMuYmxvY2spID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRibG9jay5kaXNwbGF5VmFsdWUubGVuZ3RoKSB8fCAwKSB7XG4gICAgICB2YXIgX3RoaXMkYmxvY2s7XG4gICAgICBpZiAoZm4oKSkgcmV0dXJuIHRoaXMub2sgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vayA9IGZhbHNlO1xuICB9XG4gIF9wdXNoUmlnaHQoZm4pIHtcbiAgICB0aGlzLnB1c2hTdGF0ZSgpO1xuICAgIGZvciAodGhpcy5iaW5kQmxvY2soKTsgdGhpcy5pbmRleCA8IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoOyArK3RoaXMuaW5kZXgsIHRoaXMub2Zmc2V0ID0gMCkge1xuICAgICAgaWYgKGZuKCkpIHJldHVybiB0aGlzLm9rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub2sgPSBmYWxzZTtcbiAgfVxuICBwdXNoTGVmdEJlZm9yZUZpbGxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVzaExlZnQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYmxvY2suaXNGaXhlZCB8fCAhdGhpcy5ibG9jay52YWx1ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyh0aGlzLm9mZnNldCwgRElSRUNUSU9OLkZPUkNFX0xFRlQpO1xuICAgICAgaWYgKHRoaXMub2Zmc2V0ICE9PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBwdXNoTGVmdEJlZm9yZUlucHV0KCkge1xuICAgIC8vIGNhc2VzOlxuICAgIC8vIGZpbGxlZCBpbnB1dDogMDB8XG4gICAgLy8gb3B0aW9uYWwgZW1wdHkgaW5wdXQ6IDAwW118XG4gICAgLy8gbmVzdGVkIGJsb2NrOiBYWDxbXT58XG4gICAgcmV0dXJuIHRoaXMuX3B1c2hMZWZ0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJsb2NrLmlzRml4ZWQpIHJldHVybjtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5ibG9jay5uZWFyZXN0SW5wdXRQb3ModGhpcy5vZmZzZXQsIERJUkVDVElPTi5MRUZUKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHB1c2hMZWZ0QmVmb3JlUmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1c2hMZWZ0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJsb2NrLmlzRml4ZWQgfHwgdGhpcy5ibG9jay5pc09wdGlvbmFsICYmICF0aGlzLmJsb2NrLnZhbHVlKSByZXR1cm47XG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2submVhcmVzdElucHV0UG9zKHRoaXMub2Zmc2V0LCBESVJFQ1RJT04uTEVGVCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBwdXNoUmlnaHRCZWZvcmVGaWxsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1c2hSaWdodCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ibG9jay5pc0ZpeGVkIHx8ICF0aGlzLmJsb2NrLnZhbHVlKSByZXR1cm47XG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2submVhcmVzdElucHV0UG9zKHRoaXMub2Zmc2V0LCBESVJFQ1RJT04uRk9SQ0VfUklHSFQpO1xuICAgICAgaWYgKHRoaXMub2Zmc2V0ICE9PSB0aGlzLmJsb2NrLnZhbHVlLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcHVzaFJpZ2h0QmVmb3JlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1c2hSaWdodCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ibG9jay5pc0ZpeGVkKSByZXR1cm47XG5cbiAgICAgIC8vIGNvbnN0IG8gPSB0aGlzLm9mZnNldDtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5ibG9jay5uZWFyZXN0SW5wdXRQb3ModGhpcy5vZmZzZXQsIERJUkVDVElPTi5OT05FKTtcbiAgICAgIC8vIEhBQ0sgY2FzZXMgbGlrZSAoU1RJTEwgRE9FUyBOT1QgV09SSyBGT1IgTkVTVEVEKVxuICAgICAgLy8gYWF8WFxuICAgICAgLy8gYWE8WHxbXT5YXyAgICAtIHRoaXMgd2lsbCBub3Qgd29ya1xuICAgICAgLy8gaWYgKG8gJiYgbyA9PT0gdGhpcy5vZmZzZXQgJiYgdGhpcy5ibG9jayBpbnN0YW5jZW9mIFBhdHRlcm5JbnB1dERlZmluaXRpb24pIGNvbnRpbnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcHVzaFJpZ2h0QmVmb3JlUmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1c2hSaWdodCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ibG9jay5pc0ZpeGVkIHx8IHRoaXMuYmxvY2suaXNPcHRpb25hbCAmJiAhdGhpcy5ibG9jay52YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAvLyBUT0RPIGNoZWNrIHxbKl1YWF9cbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5ibG9jay5uZWFyZXN0SW5wdXRQb3ModGhpcy5vZmZzZXQsIERJUkVDVElPTi5OT05FKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IFBhdHRlcm5DdXJzb3IgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04sIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi8uLi9jb3JlL2hvbGRlci5qcyc7XG5cbmNsYXNzIFBhdHRlcm5GaXhlZERlZmluaXRpb24ge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIHRoaXMuaXNGaXhlZCA9IHRydWU7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBnZXQgdW5tYXNrZWRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1VubWFza2luZyA/IHRoaXMudmFsdWUgOiAnJztcbiAgfVxuICBnZXQgcmF3SW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNSYXdJbnB1dCA/IHRoaXMudmFsdWUgOiAnJztcbiAgfVxuICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fdmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLl92YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgaWYgKCF0aGlzLl92YWx1ZSkgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICB9XG4gIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkge1xuICAgICAgZGlyZWN0aW9uID0gRElSRUNUSU9OLk5PTkU7XG4gICAgfVxuICAgIGNvbnN0IG1pblBvcyA9IDA7XG4gICAgY29uc3QgbWF4UG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgcmV0dXJuIG1pblBvcztcbiAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1heFBvcztcbiAgICB9XG4gIH1cbiAgdG90YWxJbnB1dFBvc2l0aW9ucyhmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pc1Jhd0lucHV0ID8gdG9Qb3MgLSBmcm9tUG9zIDogMDtcbiAgfVxuICBleHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIHJldHVybiBmbGFncy5yYXcgJiYgdGhpcy5faXNSYXdJbnB1dCAmJiB0aGlzLl92YWx1ZS5zbGljZShmcm9tUG9zLCB0b1BvcykgfHwgJyc7XG4gIH1cbiAgZ2V0IGlzQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZ2V0IGlzRmlsbGVkKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3ZhbHVlKTtcbiAgfVxuICBfYXBwZW5kQ2hhcihjaCwgZmxhZ3MpIHtcbiAgICBpZiAoZmxhZ3MgPT09IHZvaWQgMCkge1xuICAgICAgZmxhZ3MgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNGaWxsZWQpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGNvbnN0IGFwcGVuZEVhZ2VyID0gdGhpcy5lYWdlciA9PT0gdHJ1ZSB8fCB0aGlzLmVhZ2VyID09PSAnYXBwZW5kJztcbiAgICBjb25zdCBhcHBlbmRlZCA9IHRoaXMuY2hhciA9PT0gY2g7XG4gICAgY29uc3QgaXNSZXNvbHZlZCA9IGFwcGVuZGVkICYmICh0aGlzLmlzVW5tYXNraW5nIHx8IGZsYWdzLmlucHV0IHx8IGZsYWdzLnJhdykgJiYgKCFmbGFncy5yYXcgfHwgIWFwcGVuZEVhZ2VyKSAmJiAhZmxhZ3MudGFpbDtcbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgaW5zZXJ0ZWQ6IHRoaXMuY2hhcixcbiAgICAgIHJhd0luc2VydGVkOiBpc1Jlc29sdmVkID8gdGhpcy5jaGFyIDogJydcbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMuY2hhcjtcbiAgICB0aGlzLl9pc1Jhd0lucHV0ID0gaXNSZXNvbHZlZCAmJiAoZmxhZ3MucmF3IHx8IGZsYWdzLmlucHV0KTtcbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBfYXBwZW5kRWFnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVuZENoYXIodGhpcy5jaGFyLCB7XG4gICAgICB0YWlsOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgIGNvbnN0IGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIGlmICh0aGlzLmlzRmlsbGVkKSByZXR1cm4gZGV0YWlscztcbiAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgZXh0cmFjdFRhaWwoKSB7XG4gICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoJycpO1xuICB9XG4gIGFwcGVuZFRhaWwodGFpbCkge1xuICAgIGlmIChpc1N0cmluZyh0YWlsKSkgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKTtcbiAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgfVxuICBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgIGNvbnN0IGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyKHN0clswXSwgZmxhZ3MpO1xuICAgIGlmICh0YWlsICE9IG51bGwpIHtcbiAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuYXBwZW5kVGFpbCh0YWlsKS50YWlsU2hpZnQ7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG4gIGRvQ29tbWl0KCkge31cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBfdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZVxuICAgIH07XG4gIH1cbiAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBzdGF0ZS5fdmFsdWU7XG4gICAgdGhpcy5faXNSYXdJbnB1dCA9IEJvb2xlYW4oc3RhdGUuX3Jhd0lucHV0VmFsdWUpO1xuICB9XG4gIHBhZChmbGFncykge1xuICAgIHJldHVybiB0aGlzLl9hcHBlbmRQbGFjZWhvbGRlcigpO1xuICB9XG59XG5cbmV4cG9ydCB7IFBhdHRlcm5GaXhlZERlZmluaXRpb24gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi8uLi9jb3JlL2hvbGRlci5qcyc7XG5cbmNsYXNzIFBhdHRlcm5JbnB1dERlZmluaXRpb24ge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFyZW50LFxuICAgICAgaXNPcHRpb25hbCxcbiAgICAgIHBsYWNlaG9sZGVyQ2hhcixcbiAgICAgIGRpc3BsYXlDaGFyLFxuICAgICAgbGF6eSxcbiAgICAgIGVhZ2VyLFxuICAgICAgLi4ubWFza09wdHNcbiAgICB9ID0gb3B0cztcbiAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2sobWFza09wdHMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgcGFyZW50LFxuICAgICAgaXNPcHRpb25hbCxcbiAgICAgIHBsYWNlaG9sZGVyQ2hhcixcbiAgICAgIGRpc3BsYXlDaGFyLFxuICAgICAgbGF6eSxcbiAgICAgIGVhZ2VyXG4gICAgfSk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMubWFza2VkLnJlc2V0KCk7XG4gIH1cbiAgcmVtb3ZlKGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGlmICh0b1BvcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0b1BvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoZnJvbVBvcyA9PT0gMCAmJiB0b1BvcyA+PSAxKSB7XG4gICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC52YWx1ZSB8fCAodGhpcy5pc0ZpbGxlZCAmJiAhdGhpcy5pc09wdGlvbmFsID8gdGhpcy5wbGFjZWhvbGRlckNoYXIgOiAnJyk7XG4gIH1cbiAgZ2V0IHVubWFza2VkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gIH1cbiAgZ2V0IHJhd0lucHV0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gIH1cbiAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQudmFsdWUgJiYgdGhpcy5kaXNwbGF5Q2hhciB8fCB0aGlzLnZhbHVlO1xuICB9XG4gIGdldCBpc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMubWFza2VkLnZhbHVlKSB8fCB0aGlzLmlzT3B0aW9uYWw7XG4gIH1cbiAgX2FwcGVuZENoYXIoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRmlsbGVkKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMubWFza2VkLnN0YXRlO1xuICAgIC8vIHNpbXVsYXRlIGlucHV0XG4gICAgbGV0IGRldGFpbHMgPSB0aGlzLm1hc2tlZC5fYXBwZW5kQ2hhcihjaCwgdGhpcy5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSk7XG4gICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQgJiYgdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSA9PT0gZmFsc2UpIHtcbiAgICAgIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG4gICAgaWYgKCFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWwgJiYgIXRoaXMubGF6eSAmJiAhZmxhZ3MuaW5wdXQpIHtcbiAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcbiAgICB9XG4gICAgZGV0YWlscy5za2lwID0gIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbDtcbiAgICB0aGlzLmlzRmlsbGVkID0gQm9vbGVhbihkZXRhaWxzLmluc2VydGVkKTtcbiAgICByZXR1cm4gZGV0YWlscztcbiAgfVxuICBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgIC8vIFRPRE8gcHJvYmFibHkgc2hvdWxkIGJlIGRvbmUgdmlhIF9hcHBlbmRDaGFyXG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmFwcGVuZChzdHIsIHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncyksIHRhaWwpO1xuICB9XG4gIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAodGhpcy5pc0ZpbGxlZCB8fCB0aGlzLmlzT3B0aW9uYWwpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICBpbnNlcnRlZDogdGhpcy5wbGFjZWhvbGRlckNoYXJcbiAgICB9KTtcbiAgfVxuICBfYXBwZW5kRWFnZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cbiAgZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrZWQuZXh0cmFjdFRhaWwoZnJvbVBvcywgdG9Qb3MpO1xuICB9XG4gIGFwcGVuZFRhaWwodGFpbCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tlZC5hcHBlbmRUYWlsKHRhaWwpO1xuICB9XG4gIGV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09PSB2b2lkIDApIHtcbiAgICAgIHRvUG9zID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hc2tlZC5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgfVxuICBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGRpcmVjdGlvbiA9IERJUkVDVElPTi5OT05FO1xuICAgIH1cbiAgICBjb25zdCBtaW5Qb3MgPSAwO1xuICAgIGNvbnN0IG1heFBvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIGNvbnN0IGJvdW5kUG9zID0gTWF0aC5taW4oTWF0aC5tYXgoY3Vyc29yUG9zLCBtaW5Qb3MpLCBtYXhQb3MpO1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWluUG9zO1xuICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWF4UG9zO1xuICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBib3VuZFBvcztcbiAgICB9XG4gIH1cbiAgdG90YWxJbnB1dFBvc2l0aW9ucyhmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpLmxlbmd0aDtcbiAgfVxuICBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2VkLmRvVmFsaWRhdGUodGhpcy5jdXJyZW50TWFza0ZsYWdzKGZsYWdzKSkgJiYgKCF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpKTtcbiAgfVxuICBkb0NvbW1pdCgpIHtcbiAgICB0aGlzLm1hc2tlZC5kb0NvbW1pdCgpO1xuICB9XG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX3ZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZSxcbiAgICAgIG1hc2tlZDogdGhpcy5tYXNrZWQuc3RhdGUsXG4gICAgICBpc0ZpbGxlZDogdGhpcy5pc0ZpbGxlZFxuICAgIH07XG4gIH1cbiAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZS5tYXNrZWQ7XG4gICAgdGhpcy5pc0ZpbGxlZCA9IHN0YXRlLmlzRmlsbGVkO1xuICB9XG4gIGN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpIHtcbiAgICB2YXIgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5mbGFncyxcbiAgICAgIF9iZWZvcmVUYWlsU3RhdGU6IChmbGFncyA9PSBudWxsIHx8IChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2ZsYWdzJF9iZWZvcmVUYWlsU3RhLm1hc2tlZCkgfHwgKGZsYWdzID09IG51bGwgPyB2b2lkIDAgOiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlKVxuICAgIH07XG4gIH1cbiAgcGFkKGZsYWdzKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gIH1cbn1cblBhdHRlcm5JbnB1dERlZmluaXRpb24uREVGQVVMVF9ERUZJTklUSU9OUyA9IHtcbiAgJzAnOiAvXFxkLyxcbiAgJ2EnOiAvW1xcdTAwNDEtXFx1MDA1QVxcdTAwNjEtXFx1MDA3QVxcdTAwQUFcXHUwMEI1XFx1MDBCQVxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDUyN1xcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3QTVcXHUwN0IxXFx1MDdDQS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBXFx1MDgwMC1cXHUwODE1XFx1MDgxQVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhBMFxcdTA4QTItXFx1MDhBQ1xcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdGXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNEXFx1MEM1OFxcdTBDNTlcXHUwQzYwXFx1MEM2MVxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ2MFxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEUwMS1cXHUwRTMwXFx1MEUzMlxcdTBFMzNcXHUwRTQwLVxcdTBFNDZcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZDXFx1MEY4OC1cXHUwRjhDXFx1MTAwMC1cXHUxMDJBXFx1MTAzRlxcdTEwNTAtXFx1MTA1NVxcdTEwNUEtXFx1MTA1RFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNkUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOEVcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y0XFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc4MC1cXHUxN0IzXFx1MTdEN1xcdTE3RENcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QThcXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFDXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlDMS1cXHUxOUM3XFx1MUEwMC1cXHUxQTE2XFx1MUEyMC1cXHUxQTU0XFx1MUFBN1xcdTFCMDUtXFx1MUIzM1xcdTFCNDUtXFx1MUI0QlxcdTFCODMtXFx1MUJBMFxcdTFCQUVcXHUxQkFGXFx1MUJCQS1cXHUxQkU1XFx1MUMwMC1cXHUxQzIzXFx1MUM0RC1cXHUxQzRGXFx1MUM1QS1cXHUxQzdEXFx1MUNFOS1cXHUxQ0VDXFx1MUNFRS1cXHUxQ0YxXFx1MUNGNVxcdTFDRjZcXHUxRDAwLVxcdTFEQkZcXHUxRTAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMkRcXHUyMTJGLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE4M1xcdTIxODRcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyQ0YyXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJFMkZcXHUzMDA1XFx1MzAwNlxcdTMwMzEtXFx1MzAzNVxcdTMwM0JcXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5RC1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OTdcXHVBNkEwLVxcdUE2RTVcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3OEVcXHVBNzkwLVxcdUE3OTNcXHVBN0EwLVxcdUE3QUFcXHVBN0Y4LVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFBNjAtXFx1QUE3NlxcdUFBN0FcXHVBQTgwLVxcdUFBQUZcXHVBQUIxXFx1QUFCNVxcdUFBQjZcXHVBQUI5LVxcdUFBQkRcXHVBQUMwXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFQVxcdUFBRjItXFx1QUFGNFxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCQzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10vLFxuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjA3NTA3MFxuICAnKic6IC8uL1xufTtcblxuZXhwb3J0IHsgUGF0dGVybklucHV0RGVmaW5pdGlvbiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5cbi8qKiBNYXNrIHBpcGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyAqL1xuY29uc3QgUElQRV9UWVBFID0ge1xuICBNQVNLRUQ6ICd2YWx1ZScsXG4gIFVOTUFTS0VEOiAndW5tYXNrZWRWYWx1ZScsXG4gIFRZUEVEOiAndHlwZWRWYWx1ZSdcbn07XG4vKiogQ3JlYXRlcyBuZXcgcGlwZSBmdW5jdGlvbiBkZXBlbmRpbmcgb24gbWFzayB0eXBlLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG9wdGlvbnMgKi9cbmZ1bmN0aW9uIGNyZWF0ZVBpcGUoYXJnLCBmcm9tLCB0bykge1xuICBpZiAoZnJvbSA9PT0gdm9pZCAwKSB7XG4gICAgZnJvbSA9IFBJUEVfVFlQRS5NQVNLRUQ7XG4gIH1cbiAgaWYgKHRvID09PSB2b2lkIDApIHtcbiAgICB0byA9IFBJUEVfVFlQRS5NQVNLRUQ7XG4gIH1cbiAgY29uc3QgbWFza2VkID0gY3JlYXRlTWFzayhhcmcpO1xuICByZXR1cm4gdmFsdWUgPT4gbWFza2VkLnJ1bklzb2xhdGVkKG0gPT4ge1xuICAgIG1bZnJvbV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gbVt0b107XG4gIH0pO1xufVxuXG4vKiogUGlwZXMgdmFsdWUgdGhyb3VnaCBtYXNrIGRlcGVuZGluZyBvbiBtYXNrIHR5cGUsIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gb3B0aW9ucyAqL1xuZnVuY3Rpb24gcGlwZSh2YWx1ZSwgbWFzaywgZnJvbSwgdG8pIHtcbiAgcmV0dXJuIGNyZWF0ZVBpcGUobWFzaywgZnJvbSwgdG8pKHZhbHVlKTtcbn1cbklNYXNrLlBJUEVfVFlQRSA9IFBJUEVfVFlQRTtcbklNYXNrLmNyZWF0ZVBpcGUgPSBjcmVhdGVQaXBlO1xuSU1hc2sucGlwZSA9IHBpcGU7XG5cbmV4cG9ydCB7IFBJUEVfVFlQRSwgY3JlYXRlUGlwZSwgcGlwZSB9O1xuIiwiaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIGFjY2VwdHMgcmFuZ2VzICovXG5jbGFzcyBNYXNrZWRSYW5nZSBleHRlbmRzIE1hc2tlZFBhdHRlcm4ge1xuICAvKipcbiAgICBPcHRpb25hbGx5IHNldHMgbWF4IGxlbmd0aCBvZiBwYXR0ZXJuLlxuICAgIFVzZWQgd2hlbiBwYXR0ZXJuIGxlbmd0aCBpcyBsb25nZXIgdGhlbiBgdG9gIHBhcmFtIGxlbmd0aC4gUGFkcyB6ZXJvcyBhdCBzdGFydCBpbiB0aGlzIGNhc2UuXG4gICovXG5cbiAgLyoqIE1pbiBib3VuZCAqL1xuXG4gIC8qKiBNYXggYm91bmQgKi9cblxuICBnZXQgX21hdGNoRnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XG4gIH1cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHN1cGVyKG9wdHMpOyAvLyBtYXNrIHdpbGwgYmUgY3JlYXRlZCBpbiBfdXBkYXRlXG4gIH1cbiAgdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgc3VwZXIudXBkYXRlT3B0aW9ucyhvcHRzKTtcbiAgfVxuICBfdXBkYXRlKG9wdHMpIHtcbiAgICBjb25zdCB7XG4gICAgICB0byA9IHRoaXMudG8gfHwgMCxcbiAgICAgIGZyb20gPSB0aGlzLmZyb20gfHwgMCxcbiAgICAgIG1heExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoIHx8IDAsXG4gICAgICBhdXRvZml4ID0gdGhpcy5hdXRvZml4LFxuICAgICAgLi4ucGF0dGVybk9wdHNcbiAgICB9ID0gb3B0cztcbiAgICB0aGlzLnRvID0gdG87XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICB0aGlzLm1heExlbmd0aCA9IE1hdGgubWF4KFN0cmluZyh0bykubGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgIHRoaXMuYXV0b2ZpeCA9IGF1dG9maXg7XG4gICAgY29uc3QgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgIGNvbnN0IHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgIGxldCBzYW1lQ2hhcnNDb3VudCA9IDA7XG4gICAgd2hpbGUgKHNhbWVDaGFyc0NvdW50IDwgdG9TdHIubGVuZ3RoICYmIHRvU3RyW3NhbWVDaGFyc0NvdW50XSA9PT0gZnJvbVN0cltzYW1lQ2hhcnNDb3VudF0pICsrc2FtZUNoYXJzQ291bnQ7XG4gICAgcGF0dGVybk9wdHMubWFzayA9IHRvU3RyLnNsaWNlKDAsIHNhbWVDaGFyc0NvdW50KS5yZXBsYWNlKC8wL2csICdcXFxcMCcpICsgJzAnLnJlcGVhdCh0aGlzLm1heExlbmd0aCAtIHNhbWVDaGFyc0NvdW50KTtcbiAgICBzdXBlci5fdXBkYXRlKHBhdHRlcm5PcHRzKTtcbiAgfVxuICBnZXQgaXNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuaXNDb21wbGV0ZSAmJiBCb29sZWFuKHRoaXMudmFsdWUpO1xuICB9XG4gIGJvdW5kYXJpZXMoc3RyKSB7XG4gICAgbGV0IG1pbnN0ciA9ICcnO1xuICAgIGxldCBtYXhzdHIgPSAnJztcbiAgICBjb25zdCBbLCBwbGFjZWhvbGRlciwgbnVtXSA9IHN0ci5tYXRjaCgvXihcXEQqKShcXGQqKShcXEQqKS8pIHx8IFtdO1xuICAgIGlmIChudW0pIHtcbiAgICAgIG1pbnN0ciA9ICcwJy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgIG1heHN0ciA9ICc5Jy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICB9XG4gICAgbWluc3RyID0gbWluc3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICBtYXhzdHIgPSBtYXhzdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnOScpO1xuICAgIHJldHVybiBbbWluc3RyLCBtYXhzdHJdO1xuICB9XG4gIGRvUHJlcGFyZUNoYXIoY2gsIGZsYWdzKSB7XG4gICAgaWYgKGZsYWdzID09PSB2b2lkIDApIHtcbiAgICAgIGZsYWdzID0ge307XG4gICAgfVxuICAgIGxldCBkZXRhaWxzO1xuICAgIFtjaCwgZGV0YWlsc10gPSBzdXBlci5kb1ByZXBhcmVDaGFyKGNoLnJlcGxhY2UoL1xcRC9nLCAnJyksIGZsYWdzKTtcbiAgICBpZiAoIWNoKSBkZXRhaWxzLnNraXAgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICAgIHJldHVybiBbY2gsIGRldGFpbHNdO1xuICB9XG4gIF9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYXV0b2ZpeCB8fCB0aGlzLnZhbHVlLmxlbmd0aCArIDEgPiB0aGlzLm1heExlbmd0aCkgcmV0dXJuIHN1cGVyLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XG4gICAgY29uc3QgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgIGNvbnN0IHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgIGNvbnN0IFttaW5zdHIsIG1heHN0cl0gPSB0aGlzLmJvdW5kYXJpZXModGhpcy52YWx1ZSArIGNoKTtcbiAgICBpZiAoTnVtYmVyKG1heHN0cikgPCB0aGlzLmZyb20pIHJldHVybiBzdXBlci5fYXBwZW5kQ2hhclJhdyhmcm9tU3RyW3RoaXMudmFsdWUubGVuZ3RoXSwgZmxhZ3MpO1xuICAgIGlmIChOdW1iZXIobWluc3RyKSA+IHRoaXMudG8pIHtcbiAgICAgIGlmICghZmxhZ3MudGFpbCAmJiB0aGlzLmF1dG9maXggPT09ICdwYWQnICYmIHRoaXMudmFsdWUubGVuZ3RoICsgMSA8IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5fYXBwZW5kQ2hhclJhdyhmcm9tU3RyW3RoaXMudmFsdWUubGVuZ3RoXSwgZmxhZ3MpLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1cGVyLl9hcHBlbmRDaGFyUmF3KHRvU3RyW3RoaXMudmFsdWUubGVuZ3RoXSwgZmxhZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKTtcbiAgfVxuICBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgY29uc3Qgc3RyID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBmaXJzdE5vblplcm8gPSBzdHIuc2VhcmNoKC9bXjBdLyk7XG4gICAgaWYgKGZpcnN0Tm9uWmVybyA9PT0gLTEgJiYgc3RyLmxlbmd0aCA8PSB0aGlzLl9tYXRjaEZyb20pIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IFttaW5zdHIsIG1heHN0cl0gPSB0aGlzLmJvdW5kYXJpZXMoc3RyKTtcbiAgICByZXR1cm4gdGhpcy5mcm9tIDw9IE51bWJlcihtYXhzdHIpICYmIE51bWJlcihtaW5zdHIpIDw9IHRoaXMudG8gJiYgc3VwZXIuZG9WYWxpZGF0ZShmbGFncyk7XG4gIH1cbiAgcGFkKGZsYWdzKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID09PSB0aGlzLm1heExlbmd0aCkgcmV0dXJuIGRldGFpbHM7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IHBhZExlbmd0aCA9IHRoaXMubWF4TGVuZ3RoIC0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgaWYgKHBhZExlbmd0aCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWRMZW5ndGg7ICsraSkge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShzdXBlci5fYXBwZW5kQ2hhclJhdygnMCcsIGZsYWdzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFwcGVuZCB0YWlsXG4gICAgICB2YWx1ZS5zcGxpdCgnJykuZm9yRWFjaChjaCA9PiB0aGlzLl9hcHBlbmRDaGFyUmF3KGNoKSk7XG4gICAgfVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG59XG5JTWFzay5NYXNrZWRSYW5nZSA9IE1hc2tlZFJhbmdlO1xuXG5leHBvcnQgeyBNYXNrZWRSYW5nZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuXG4vKiogTWFza2luZyBieSBSZWdFeHAgKi9cbmNsYXNzIE1hc2tlZFJlZ0V4cCBleHRlbmRzIE1hc2tlZCB7XG4gIC8qKiAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgIHN1cGVyLnVwZGF0ZU9wdGlvbnMob3B0cyk7XG4gIH1cbiAgX3VwZGF0ZShvcHRzKSB7XG4gICAgY29uc3QgbWFzayA9IG9wdHMubWFzaztcbiAgICBpZiAobWFzaykgb3B0cy52YWxpZGF0ZSA9IHZhbHVlID0+IHZhbHVlLnNlYXJjaChtYXNrKSA+PSAwO1xuICAgIHN1cGVyLl91cGRhdGUob3B0cyk7XG4gIH1cbn1cbklNYXNrLk1hc2tlZFJlZ0V4cCA9IE1hc2tlZFJlZ0V4cDtcblxuZXhwb3J0IHsgTWFza2VkUmVnRXhwIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrLCB7IG5vcm1hbGl6ZU9wdHMgfSBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBQYXR0ZXJuIG1hc2sgKi9cbmNsYXNzIFJlcGVhdEJsb2NrIGV4dGVuZHMgTWFza2VkUGF0dGVybiB7XG4gIGdldCByZXBlYXRGcm9tKCkge1xuICAgIHZhciBfcmVmO1xuICAgIHJldHVybiAoX3JlZiA9IEFycmF5LmlzQXJyYXkodGhpcy5yZXBlYXQpID8gdGhpcy5yZXBlYXRbMF0gOiB0aGlzLnJlcGVhdCA9PT0gSW5maW5pdHkgPyAwIDogdGhpcy5yZXBlYXQpICE9IG51bGwgPyBfcmVmIDogMDtcbiAgfVxuICBnZXQgcmVwZWF0VG8oKSB7XG4gICAgdmFyIF9yZWYyO1xuICAgIHJldHVybiAoX3JlZjIgPSBBcnJheS5pc0FycmF5KHRoaXMucmVwZWF0KSA/IHRoaXMucmVwZWF0WzFdIDogdGhpcy5yZXBlYXQpICE9IG51bGwgPyBfcmVmMiA6IEluZmluaXR5O1xuICB9XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuICB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICBzdXBlci51cGRhdGVPcHRpb25zKG9wdHMpO1xuICB9XG4gIF91cGRhdGUob3B0cykge1xuICAgIHZhciBfcmVmMywgX3JlZjQsIF90aGlzJF9ibG9ja3M7XG4gICAgY29uc3Qge1xuICAgICAgcmVwZWF0LFxuICAgICAgLi4uYmxvY2tPcHRzXG4gICAgfSA9IG5vcm1hbGl6ZU9wdHMob3B0cyk7IC8vIFRPRE8gdHlwZVxuICAgIHRoaXMuX2Jsb2NrT3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2Jsb2NrT3B0cywgYmxvY2tPcHRzKTtcbiAgICBjb25zdCBibG9jayA9IGNyZWF0ZU1hc2sodGhpcy5fYmxvY2tPcHRzKTtcbiAgICB0aGlzLnJlcGVhdCA9IChfcmVmMyA9IChfcmVmNCA9IHJlcGVhdCAhPSBudWxsID8gcmVwZWF0IDogYmxvY2sucmVwZWF0KSAhPSBudWxsID8gX3JlZjQgOiB0aGlzLnJlcGVhdCkgIT0gbnVsbCA/IF9yZWYzIDogSW5maW5pdHk7IC8vIFRPRE8gdHlwZVxuXG4gICAgc3VwZXIuX3VwZGF0ZSh7XG4gICAgICBtYXNrOiAnbScucmVwZWF0KE1hdGgubWF4KHRoaXMucmVwZWF0VG8gPT09IEluZmluaXR5ICYmICgoX3RoaXMkX2Jsb2NrcyA9IHRoaXMuX2Jsb2NrcykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJF9ibG9ja3MubGVuZ3RoKSB8fCAwLCB0aGlzLnJlcGVhdEZyb20pKSxcbiAgICAgIGJsb2Nrczoge1xuICAgICAgICBtOiBibG9ja1xuICAgICAgfSxcbiAgICAgIGVhZ2VyOiBibG9jay5lYWdlcixcbiAgICAgIG92ZXJ3cml0ZTogYmxvY2sub3ZlcndyaXRlLFxuICAgICAgc2tpcEludmFsaWQ6IGJsb2NrLnNraXBJbnZhbGlkLFxuICAgICAgbGF6eTogYmxvY2subGF6eSxcbiAgICAgIHBsYWNlaG9sZGVyQ2hhcjogYmxvY2sucGxhY2Vob2xkZXJDaGFyLFxuICAgICAgZGlzcGxheUNoYXI6IGJsb2NrLmRpc3BsYXlDaGFyXG4gICAgfSk7XG4gIH1cbiAgX2FsbG9jYXRlQmxvY2soYmkpIHtcbiAgICBpZiAoYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoKSByZXR1cm4gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICBpZiAodGhpcy5yZXBlYXRUbyA9PT0gSW5maW5pdHkgfHwgdGhpcy5fYmxvY2tzLmxlbmd0aCA8IHRoaXMucmVwZWF0VG8pIHtcbiAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKGNyZWF0ZU1hc2sodGhpcy5fYmxvY2tPcHRzKSk7XG4gICAgICB0aGlzLm1hc2sgKz0gJ20nO1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICB9XG4gIF9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncykge1xuICAgIGlmIChmbGFncyA9PT0gdm9pZCAwKSB7XG4gICAgICBmbGFncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICBmb3IgKGxldCBiaSA9IChfdGhpcyRfbWFwUG9zVG9CbG9jayQgPSAoX3RoaXMkX21hcFBvc1RvQmxvY2sgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMuZGlzcGxheVZhbHVlLmxlbmd0aCkpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRfbWFwUG9zVG9CbG9jay5pbmRleCkgIT0gbnVsbCA/IF90aGlzJF9tYXBQb3NUb0Jsb2NrJCA6IE1hdGgubWF4KHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxLCAwKSwgYmxvY2ssIGFsbG9jYXRlZDtcbiAgICAvLyB0cnkgdG8gZ2V0IGEgYmxvY2sgb3JcbiAgICAvLyB0cnkgdG8gYWxsb2NhdGUgYSBuZXcgYmxvY2sgaWYgbm90IGFsbG9jYXRlZCBhbHJlYWR5XG4gICAgYmxvY2sgPSAoX3RoaXMkX2Jsb2NrcyRiaSA9IHRoaXMuX2Jsb2Nrc1tiaV0pICE9IG51bGwgPyBfdGhpcyRfYmxvY2tzJGJpIDogYWxsb2NhdGVkID0gIWFsbG9jYXRlZCAmJiB0aGlzLl9hbGxvY2F0ZUJsb2NrKGJpKTsgKytiaSkge1xuICAgICAgdmFyIF90aGlzJF9tYXBQb3NUb0Jsb2NrJCwgX3RoaXMkX21hcFBvc1RvQmxvY2ssIF90aGlzJF9ibG9ja3MkYmksIF9mbGFncyRfYmVmb3JlVGFpbFN0YTtcbiAgICAgIGNvbnN0IGJsb2NrRGV0YWlscyA9IGJsb2NrLl9hcHBlbmRDaGFyKGNoLCB7XG4gICAgICAgIC4uLmZsYWdzLFxuICAgICAgICBfYmVmb3JlVGFpbFN0YXRlOiAoX2ZsYWdzJF9iZWZvcmVUYWlsU3RhID0gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSkgPT0gbnVsbCB8fCAoX2ZsYWdzJF9iZWZvcmVUYWlsU3RhID0gX2ZsYWdzJF9iZWZvcmVUYWlsU3RhLl9ibG9ja3MpID09IG51bGwgPyB2b2lkIDAgOiBfZmxhZ3MkX2JlZm9yZVRhaWxTdGFbYmldXG4gICAgICB9KTtcbiAgICAgIGlmIChibG9ja0RldGFpbHMuc2tpcCAmJiBhbGxvY2F0ZWQpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBsYXN0IGFsbG9jYXRlZCBibG9jayBhbmQgYnJlYWtcbiAgICAgICAgdGhpcy5fYmxvY2tzLnBvcCgpO1xuICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLm1hc2suc2xpY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYmxvY2tEZXRhaWxzKTtcbiAgICAgIGlmIChibG9ja0RldGFpbHMuY29uc3VtZWQpIGJyZWFrOyAvLyBnbyBuZXh0IGNoYXJcbiAgICB9XG4gICAgcmV0dXJuIGRldGFpbHM7XG4gIH1cbiAgX3RyaW1FbXB0eVRhaWwoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICB2YXIgX3RoaXMkX21hcFBvc1RvQmxvY2syLCBfdGhpcyRfbWFwUG9zVG9CbG9jazM7XG4gICAgaWYgKGZyb21Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgZnJvbVBvcyA9IDA7XG4gICAgfVxuICAgIGNvbnN0IGZpcnN0QmxvY2tJbmRleCA9IE1hdGgubWF4KCgoX3RoaXMkX21hcFBvc1RvQmxvY2syID0gdGhpcy5fbWFwUG9zVG9CbG9jayhmcm9tUG9zKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJF9tYXBQb3NUb0Jsb2NrMi5pbmRleCkgfHwgMCwgdGhpcy5yZXBlYXRGcm9tLCAwKTtcbiAgICBsZXQgbGFzdEJsb2NrSW5kZXg7XG4gICAgaWYgKHRvUG9zICE9IG51bGwpIGxhc3RCbG9ja0luZGV4ID0gKF90aGlzJF9tYXBQb3NUb0Jsb2NrMyA9IHRoaXMuX21hcFBvc1RvQmxvY2sodG9Qb3MpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkX21hcFBvc1RvQmxvY2szLmluZGV4O1xuICAgIGlmIChsYXN0QmxvY2tJbmRleCA9PSBudWxsKSBsYXN0QmxvY2tJbmRleCA9IHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxO1xuICAgIGxldCByZW1vdmVDb3VudCA9IDA7XG4gICAgZm9yIChsZXQgYmxvY2tJbmRleCA9IGxhc3RCbG9ja0luZGV4OyBmaXJzdEJsb2NrSW5kZXggPD0gYmxvY2tJbmRleDsgLS1ibG9ja0luZGV4LCArK3JlbW92ZUNvdW50KSB7XG4gICAgICBpZiAodGhpcy5fYmxvY2tzW2Jsb2NrSW5kZXhdLnVubWFza2VkVmFsdWUpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVtb3ZlQ291bnQpIHtcbiAgICAgIHRoaXMuX2Jsb2Nrcy5zcGxpY2UobGFzdEJsb2NrSW5kZXggLSByZW1vdmVDb3VudCArIDEsIHJlbW92ZUNvdW50KTtcbiAgICAgIHRoaXMubWFzayA9IHRoaXMubWFzay5zbGljZShyZW1vdmVDb3VudCk7XG4gICAgfVxuICB9XG4gIHJlc2V0KCkge1xuICAgIHN1cGVyLnJlc2V0KCk7XG4gICAgdGhpcy5fdHJpbUVtcHR5VGFpbCgpO1xuICB9XG4gIHJlbW92ZShmcm9tUG9zLCB0b1Bvcykge1xuICAgIGlmIChmcm9tUG9zID09PSB2b2lkIDApIHtcbiAgICAgIGZyb21Qb3MgPSAwO1xuICAgIH1cbiAgICBpZiAodG9Qb3MgPT09IHZvaWQgMCkge1xuICAgICAgdG9Qb3MgPSB0aGlzLmRpc3BsYXlWYWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZURldGFpbHMgPSBzdXBlci5yZW1vdmUoZnJvbVBvcywgdG9Qb3MpO1xuICAgIHRoaXMuX3RyaW1FbXB0eVRhaWwoZnJvbVBvcywgdG9Qb3MpO1xuICAgIHJldHVybiByZW1vdmVEZXRhaWxzO1xuICB9XG4gIHRvdGFsSW5wdXRQb3NpdGlvbnMoZnJvbVBvcywgdG9Qb3MpIHtcbiAgICBpZiAoZnJvbVBvcyA9PT0gdm9pZCAwKSB7XG4gICAgICBmcm9tUG9zID0gMDtcbiAgICB9XG4gICAgaWYgKHRvUG9zID09IG51bGwgJiYgdGhpcy5yZXBlYXRUbyA9PT0gSW5maW5pdHkpIHJldHVybiBJbmZpbml0eTtcbiAgICByZXR1cm4gc3VwZXIudG90YWxJbnB1dFBvc2l0aW9ucyhmcm9tUG9zLCB0b1Bvcyk7XG4gIH1cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiBzdXBlci5zdGF0ZTtcbiAgfVxuICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLl9ibG9ja3MubGVuZ3RoID0gc3RhdGUuX2Jsb2Nrcy5sZW5ndGg7XG4gICAgdGhpcy5tYXNrID0gdGhpcy5tYXNrLnNsaWNlKDAsIHRoaXMuX2Jsb2Nrcy5sZW5ndGgpO1xuICAgIHN1cGVyLnN0YXRlID0gc3RhdGU7XG4gIH1cbn1cbklNYXNrLlJlcGVhdEJsb2NrID0gUmVwZWF0QmxvY2s7XG5cbmV4cG9ydCB7IFJlcGVhdEJsb2NrIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2RhZGF0YSc7XG5pbXBvcnQgJy4vY2FsbC1tYW5hZ2VyJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=