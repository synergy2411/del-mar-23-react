/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maths */ \"./js/maths.js\");\n/* harmony import */ var _fortune__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fortune */ \"./js/fortune.js\");\n// ES6 Module Pattern - Default in Browser\r\n\r\n\r\n\r\nconst buttonEl = document.getElementById(\"btnAdd\")\r\nconst txtElNumber1 = document.getElementById(\"txt-number-one\")\r\nconst txtElNumber2 = document.getElementById(\"txt-number-two\")\r\n\r\nbuttonEl.addEventListener(\"click\", function () {\r\n\r\n    // const squareValue = square(Number(txtElNumber.value))\r\n    let num1 = Number(txtElNumber1.value)\r\n    let num2 = Number(txtElNumber2.value)\r\n    const result = (0,_maths__WEBPACK_IMPORTED_MODULE_0__.sum)(num1, num2)\r\n\r\n    const pEl = document.createElement(\"p\")\r\n    const pElOne = document.createElement(\"p\")\r\n\r\n    pElOne.innerHTML = `Your lucky Number today will be === ${_fortune__WEBPACK_IMPORTED_MODULE_1__.MAGIC_NUMBER}`\r\n    pEl.innerHTML = `Sum : ${result}`\r\n\r\n    document.body.appendChild(pEl)\r\n    document.body.appendChild(pElOne)\r\n\r\n})\n\n//# sourceURL=webpack://02-npm-basics/./js/app.js?");

/***/ }),

/***/ "./js/fortune.js":
/*!***********************!*\
  !*** ./js/fortune.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAGIC_NUMBER\": () => (/* binding */ MAGIC_NUMBER)\n/* harmony export */ });\nconst MAGIC_NUMBER = Math.round(Math.random() * 100);\r\n\r\n\r\n\n\n//# sourceURL=webpack://02-npm-basics/./js/fortune.js?");

/***/ }),

/***/ "./js/maths.js":
/*!*********************!*\
  !*** ./js/maths.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"square\": () => (/* binding */ square),\n/* harmony export */   \"sum\": () => (/* binding */ sum)\n/* harmony export */ });\nconst sum = (n1, n2) => n1 + n2\r\nconst mul = (n1, n2) => n1 * n2\r\nconst square = (n1) => n1 * n1\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://02-npm-basics/./js/maths.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;