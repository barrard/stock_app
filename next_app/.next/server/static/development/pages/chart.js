module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "core-js/library/fn/set");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./components/Main_Footer.js":
/*!***********************************!*\
  !*** ./components/Main_Footer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/dave/code/next_stocks/next_app/components/Main_Footer.js";


var Main_Footer = function Main_Footer(props) {
  return (// <!-- Footer -->
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: "footer bg-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row flex_center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-2 flex_center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://NewsAPI.org",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "powered by NewsAPI.org")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-sm-2 flex_center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Data provided for free by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://iextrading.com/developer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "IEX"), ". View IEX\u2019s ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://iextrading.com/api-exhibit-a/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Terms of Use"), ".")))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Main_Footer);

/***/ }),

/***/ "./components/Main_Head.js":
/*!*********************************!*\
  !*** ./components/Main_Head.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/home/dave/code/next_stocks/next_app/components/Main_Head.js";




var Main_Head =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Main_Head, _React$Component);

  function Main_Head(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Main_Head);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Main_Head).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Main_Head, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "icon",
        href: "/static/img/favicon.png",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "description",
        content: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "author",
        content: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Next App"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/bootstrap.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        href: "/static/vendor/font-awesome/css/font-awesome.min.css",
        rel: "stylesheet",
        type: "text/css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/nprogress.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/css.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    }
  }]);

  return Main_Head;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

function mapStateToProps(state) {
  var locals = state.locals;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, locals);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Main_Head));

/***/ }),

/***/ "./components/Main_Nav.js":
/*!********************************!*\
  !*** ./components/Main_Nav.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "../node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../redux/actions/stock_actions.js */ "./redux/actions/stock_actions.js");
/* harmony import */ var _components_charts_chart_data_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/charts/chart_data_utils.js */ "./components/charts/chart_data_utils.js");
/* harmony import */ var _redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../redux/actions/meta_actions.js */ "./redux/actions/meta_actions.js");











var _jsxFileName = "/home/dave/code/next_stocks/next_app/components/Main_Nav.js";









var Main_Nav =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Main_Nav, _React$Component);

  function Main_Nav(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Main_Nav);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Main_Nav).call(this, props));
    _this.state = {
      // search_symbol: "",
      filtered_stock_list: [],
      searching: true,
      stock_selected: false // show_filter_list: false

    };
    _this.handle_seach_symbol_input = _this.handle_seach_symbol_input.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.make_filter_list = _this.make_filter_list.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.highlight_search_letters = _this.highlight_search_letters.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.filtered_stock_list_item = _this.filtered_stock_list_item.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Main_Nav, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var has_symbols_data, all_stock_symbols_json, all_stock_symbols;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("asdasd"); // const { api_server } = location.origin;
                // console.log(location);
                // console.log(api_server);

                _context.prev = 1;
                has_symbols_data = this.props.stock_data.has_symbols_data;

                if (!has_symbols_data) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _context.next = 7;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_14___default()("\n        /stock/get_symbols_data\n      ");

              case 7:
                all_stock_symbols_json = _context.sent;
                _context.next = 10;
                return all_stock_symbols_json.json();

              case 10:
                all_stock_symbols = _context.sent;
                // console.log(all_stock_symbols);
                this.props.dispatch(Object(_redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_16__["set_symbols_data"])(all_stock_symbols));
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                console.log("err");
                console.log(_context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 14]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "handle_seach_symbol_input",
    value: function handle_seach_symbol_input(e) {
      if (!this.props.meta.show_filter_list) this.props.dispatch(Object(_redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_18__["show_filter_list"])(true));
      this.props.dispatch(Object(_redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_16__["set_search_symbol"])(e.target.value));
      this.make_filter_list(e.target.value);
    } // handle_search(e) {
    //   e.preventDefault();
    //   console.log(this.state.search);
    // }

    /* On input makes the list */

  }, {
    key: "make_filter_list",
    value: function make_filter_list(search_text) {
      var _this2 = this;

      var search_text = search_text.toLowerCase();
      var full_list = this.props.stock_data.symbols_data;

      if (!full_list) {
        /* wait a second...  try again */
        setTimeout(function () {
          return _this2.make_filter_list(search_text);
        }, 100);
        return;
      } // console.log(full_list);

      /* list of possible arrays with data */


      var symbol_starts_with = [];
      var name_starts_with = [];
      var symbol_list = [];
      var name_list = [];
      var filtered_stock_list = [];
      /* check symbol starts with */

      symbol_starts_with = full_list.filter(function (list_item) {
        return list_item.symbol.toLowerCase().startsWith(search_text);
      }); // console.log(symbol_starts_with);

      filtered_stock_list = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(filtered_stock_list), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(symbol_starts_with));

      if (filtered_stock_list.length < 100) {
        /* check name starts with */
        name_starts_with = full_list.filter(function (list_item) {
          return list_item.name.toLowerCase().startsWith(search_text);
        }); // console.log(name_starts_with);

        filtered_stock_list = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(filtered_stock_list), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(name_starts_with));
      }

      if (filtered_stock_list.length < 100) {
        /* check symbols */
        symbol_list = full_list.filter(function (list_item) {
          return list_item.symbol.toLowerCase().includes(search_text);
        }); // console.log(symbol_list);

        filtered_stock_list = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(filtered_stock_list), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(symbol_list));
      }

      if (filtered_stock_list.length < 100) {
        /* check name */
        name_list = full_list.filter(function (list_item) {
          return list_item.name.toLowerCase().includes(search_text);
        }); // console.log(name_list);

        filtered_stock_list = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(filtered_stock_list), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(name_list));
      }
      /* Combine the lists */


      filtered_stock_list = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a(filtered_stock_list));
      filtered_stock_list = filtered_stock_list.splice(0, 100);
      this.setState({
        filtered_stock_list: filtered_stock_list
      });
    }
    /* Use the filtered stock list to make items */

  }, {
    key: "Filtered_Stock_List",
    value: function Filtered_Stock_List(_ref) {
      var _this3 = this;

      var filtered_stock_list = _ref.filtered_stock_list,
          search_symbol = _ref.search_symbol;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "filtered_stock_list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, filtered_stock_list.length == 0 && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "filtered_stock_list_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Sorry there aren't any stocks matching", " ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "highlight_search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, search_symbol)), filtered_stock_list.map(function (data, index) {
        return _this3.filtered_stock_list_item(data, index, search_symbol);
      })));
    }
    /* Items that make the list of filtered stocks, on click event resets some things */

  }, {
    key: "filtered_stock_list_item",
    value: function filtered_stock_list_item(data, index, search) {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "filtered_stock_list_item",
        key: index,
        onClick: function onClick() {
          return Object(_components_charts_chart_data_utils_js__WEBPACK_IMPORTED_MODULE_17__["view_selected_stock_symbol"])(data.symbol, _this4.props);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        dangerouslySetInnerHTML: this.highlight_search_letters(data.symbol, search),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), " - ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        dangerouslySetInnerHTML: this.highlight_search_letters(data.name, search),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }));
    }
  }, {
    key: "highlight_search_letters",
    value: function highlight_search_letters(name, search) {
      // console.log({ name, search });
      var index_of_search_term_name = name.toLowerCase().indexOf(search.toLowerCase()); // console.log({ index_of_search_term_name });

      if (index_of_search_term_name >= 0) {
        var split_name = name.split("");
        split_name.splice(index_of_search_term_name + search.length, 0, "</span>"); // console.log({ split_name });

        split_name.splice(index_of_search_term_name, 0, "<span class=\"highlight_search\">"); // console.log({ split_name });

        name = split_name.join("");
      } // console.log(name);


      return {
        __html: name
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var is_loggedin = this.props.user.is_loggedin;
      var pathname = this.props.router.pathname;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
        prefetch: true,
        href: "/landing",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        className: "nav-bar-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, !is_loggedin && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Register_Login_Links, {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), is_loggedin && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Logout_Link, {
        pathname: pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Charts_Dropdown, {
        pathname: pathname,
        charts: this.props.stock_data.charts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }), is_loggedin && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(MA_Analysis_Link, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Navbar_Search
      /* Let the list stay long enough to click */
      , {
        handle_search_input_blur: function handle_search_input_blur() {
          return setTimeout(function () {
            return _this5.props.dispatch(Object(_redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_18__["show_filter_list"])(false));
          }, 200);
        },
        handle_search_input: function handle_search_input(e) {
          return _this5.handle_seach_symbol_input(e);
        },
        search_symbol: this.props.stock_data.search_symbol,
        handle_search: function handle_search(e) {
          return _this5.handle_search(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }), this.props.meta.show_filter_list && this.Filtered_Stock_List({
        filtered_stock_list: this.state.filtered_stock_list,
        search_symbol: this.props.stock_data.search_symbol
      }));
    }
  }]);

  return Main_Nav;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

function mapStateToProps(state) {
  var user = state.user,
      meta = state.meta,
      stock_data = state.stock_data;
  return {
    user: user,
    meta: meta,
    stock_data: stock_data
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Main_Nav)));
/*              Nav components               */

var Navbar_Search = function Navbar_Search(_ref2) {
  var handle_search_input = _ref2.handle_search_input,
      handle_search = _ref2.handle_search,
      search_symbol = _ref2.search_symbol,
      handle_search_input_blur = _ref2.handle_search_input_blur;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "form-inline my-2 my-lg-0 absolute right_10_px z_index_100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
    onBlur: handle_search_input_blur,
    onChange: function onChange(e) {
      return handle_search_input(e);
    },
    className: "form-control mr-sm-2",
    type: "search",
    placeholder: "Search Symbols",
    "aria-label": "Search",
    value: search_symbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }));
};

var Charts_Dropdown = function Charts_Dropdown(_ref3) {
  var pathname = _ref3.pathname,
      charts = _ref3.charts;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
    className: "nav-item dropdown margin_right_4em",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "Charts"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, charts && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(charts).map(function (symbol, index) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
      href: "/chart?symbol=".concat(symbol),
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
      className: "stock-list-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
      className: "justify_center zero_margin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, symbol), index + 1 != _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(charts).length && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      className: "dropdown-divider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    })));
  })));
};

var MA_Analysis_Link = function MA_Analysis_Link(_ref4) {
  var pathname = _ref4.pathname;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Navbar_Links, {
    name: "Moving Avg. Analysis",
    path: "/moving-average-analysis",
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  });
};

var Logout_Link = function Logout_Link(_ref5) {
  var pathname = _ref5.pathname;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Navbar_Links, {
    name: "Profile",
    path: "/account-profile",
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Navbar_Links, {
    nofetch: true,
    name: "Logout",
    path: "/auth/logout",
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }));
};

var Register_Login_Links = function Register_Login_Links(_ref6) {
  var pathname = _ref6.pathname;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Navbar_Links, {
    name: "Login",
    path: "/login",
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Navbar_Links, {
    name: "Sign Up",
    path: "/sign-up",
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }));
};

var Navbar_Links = function Navbar_Links(_ref7) {
  var path = _ref7.path,
      pathname = _ref7.pathname,
      name = _ref7.name,
      nofetch = _ref7.nofetch;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, !nofetch && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    prefetch: true,
    href: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
    className: "".concat(pathname == path ? "active " : " ", "\" nav-link dropdown-item\""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, name))), nofetch && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
    className: "".concat(pathname == path ? "active " : " ", "\" nav-link dropdown-item\""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, name))));
};

/***/ }),

/***/ "./components/charts/Canvas_Chart.js":
/*!*******************************************!*\
  !*** ./components/charts/Canvas_Chart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "../node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/stock_actions.js */ "./redux/actions/stock_actions.js");








var _jsxFileName = "/home/dave/code/next_stocks/next_app/components/charts/Canvas_Chart.js";







var Canvas_Chart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Canvas_Chart, _React$Component);

  function Canvas_Chart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Canvas_Chart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Canvas_Chart).call(this, props));
    _this.state = {
      mouseDown: false,
      //listen for drag events
      canvas_width: null,
      canvas_height: null,
      chart_height: "",
      vol_canvas_height: "",
      canvas: "",
      context: {},
      candle_width: 3,
      space_between_bars: 0.5,
      x_offset: 0,
      data_loaded: false,
      crosshair_overlay: "",
      volume_canvas: "",
      volume_canvas_overlay: "",
      vol_canvas_share: 0.2,
      overlay_offset: "",
      scrollY_offset: "",
      symbol: "",
      spinner_timmer: false,
      MA_data: {},
      chart_style: "light",
      chart_data_length: 0
    };
    _this.listen_for_chart_drag = _this.listen_for_chart_drag.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.draw_cross_hair = _this.draw_cross_hair.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Canvas_Chart, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._ismounted = false;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._ismounted = true;
      console.log("canvas mounted");
      this.make_canvas_full_screen();
      window.addEventListener("resize", this.make_canvas_full_screen.bind(this));
      this.calc_MA_data();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          meta = _this$props.meta,
          canvas_id = _this$props.canvas_id; // console.log("----------------componentDidUpdate=====================");
      // console.log(prevProps);
      // console.log(this.props);

      if (!prevProps.meta.is_loading && meta.is_loading) {
        // console.log("new chart data is being loaded");
        this.run_spinner();
      } else if (!prevProps.meta.is_loading && !meta.is_loading && canvas_id != prevProps.canvas_id) {
        /* must have loaded a new chart?  Draw chart */
        // console.log("new  chart selected form chache");
        this.calc_MA_data();
      } else if (prevProps.meta.is_loading && !meta.is_loading) {
        // console.log("Done loading new data, draw chart righ meow");
        this.draw_chart();
      } else {// console.log("render what is happeneing");
      }
    }
  }, {
    key: "calc_MA_data",
    value: function calc_MA_data() {
      var _this2 = this;

      if (!this.props.data) return setTimeout(function () {
        return _this2.calc_MA_data();
      }, 500);
      var chart_data = this.props.data.chart_data;
      var chart_data_length = chart_data.length;
      var MA_data = add_MA_data_to_model(chart_data); // console.log(MA_data);

      this.setState({
        MA_data: MA_data,
        chart_data_length: chart_data_length
      });
      setTimeout(function () {
        return _this2.draw_chart();
      }, 100);
    }
  }, {
    key: "make_canvas_full_screen",
    value: function make_canvas_full_screen() {
      var _this3 = this;

      if (typeof window !== "undefined") {
        if (!this._ismounted) return;
        console.log(this);
        var dom_node = react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.findDOMNode(this);
        var canvas_id = this.props.canvas_id;
        var canvas_width = dom_node.parentElement.clientWidth - 30; //15px padding left/right

        var canvas_height = dom_node.parentElement.clientHeight - 15;
        console.log({
          canvas_height: canvas_height,
          canvas_width: canvas_width
        });
        this.state.canvas_width = canvas_width;
        this.state.canvas_height = canvas_height;
        setTimeout(function () {
          var canvas = document.getElementById(_this3.props.canvas_id);
          var crosshair_overlay = document.getElementById("".concat(_this3.props.canvas_id, "_crosshair_overlay"));
          var scrollY_offset = window.scrollY; // console.log({scrollY_offset})

          var overlay_offset = crosshair_overlay.getBoundingClientRect();

          _this3.setState({
            scrollY_offset: scrollY_offset,
            overlay_offset: overlay_offset,
            canvas: canvas,
            crosshair_overlay: crosshair_overlay
          });

          _this3.run_spinner(); // console.log("does this run?");
          // console.log(this);

        }, 0);
      }
    }
  }, {
    key: "run_spinner",
    value: function run_spinner() {
      var _this4 = this;

      var _this$props2 = this.props,
          canvas_id = _this$props2.canvas_id,
          meta = _this$props2.meta,
          stock_data = _this$props2.stock_data,
          dispatch = _this$props2.dispatch;
      var canvas = document.getElementById(canvas_id);
      var context = canvas.getContext("2d");
      var start = new Date();
      var lines = 16,
          cW = context.canvas.width,
          cH = context.canvas.height;

      var draw_spinner = function draw_spinner() {
        if (!_this4.props.meta.is_loading) {
          clearInterval(spinner_timmer);

          _this4.setState({
            spinner_timmer: false
          }); // console.log(stock_data);
          // console.log(canvas_id);
          // console.log(stock_data.charts[canvas_id]);


          var chart_data = _this4.props.data.chart_data; // console.log({ chart_data });

          return _this4.calc_MA_data();
        }

        var rotation = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()((new Date() - start) / 1000 * lines) / lines;
        context.save();
        context.clearRect(0, 0, cW, cH);
        context.translate(cW / 2, cH / 2);
        context.rotate(Math.PI * 2 * rotation);

        for (var i = 0; i < lines; i++) {
          context.beginPath();
          context.rotate(Math.PI * 2 / lines);
          context.moveTo(cW / 10, 0);
          context.lineTo(cW / 4, 0);
          context.lineWidth = cW / 30;
          context.strokeStyle = "rgba(0, 0, 0," + i / lines + ")";
          context.stroke();
        }

        context.restore();
      };

      var spinner_timmer = setInterval(draw_spinner, 1000 / 30);
    }
  }, {
    key: "listen_for_chart_drag",
    value: function listen_for_chart_drag(e) {
      if (!this.props.data) return;
      var _this$state = this.state,
          x_offset = _this$state.x_offset,
          candle_width = _this$state.candle_width,
          space_between_bars = _this$state.space_between_bars,
          canvas = _this$state.canvas,
          chart_data_length = _this$state.chart_data_length; // if(!prev_clientX)return this.setState({prev_clientX:e.clientX})
      // console.log(chart_data_length);

      var max_x_offset = chart_data_length * (candle_width + space_between_bars) - canvas.width; // console.log({x_offset})

      e.preventDefault();
      x_offset = x_offset + e.movementX; //  console.log({x_offset})

      if (x_offset < 0) x_offset = 0;
      if (x_offset > max_x_offset) x_offset = max_x_offset; // console.log({ x_offset });

      this.state.x_offset = x_offset;
      this.draw_chart();
    }
  }, {
    key: "render_canvas",
    value: function render_canvas(canvas_id, canvas_width, canvas_height) {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("canvas", {
        onMouseDown: function onMouseDown() {
          return _this5.setState({
            mouseDown: true
          });
        },
        onMouseUp: function onMouseUp() {
          return _this5.setState({
            mouseDown: false
          });
        },
        onMouseMove: this.draw_cross_hair,
        className: "crosshair_overlay absolute ",
        id: "".concat(canvas_id, "_crosshair_overlay"),
        width: canvas_width,
        height: canvas_height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("canvas", {
        className: "chart_canvas ",
        id: canvas_id,
        width: canvas_width,
        height: canvas_height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }));
    }
  }, {
    key: "draw_cross_hair",
    value: function draw_cross_hair(e) {
      var _this$state2 = this.state,
          mouseDown = _this$state2.mouseDown,
          vol_canvas_share = _this$state2.vol_canvas_share,
          overlay_offset = _this$state2.overlay_offset,
          scrollY_offset = _this$state2.scrollY_offset,
          crosshair_overlay = _this$state2.crosshair_overlay,
          min_price = _this$state2.min_price,
          pennies_per_pixel = _this$state2.pennies_per_pixel,
          candle_width = _this$state2.candle_width,
          space_between_bars = _this$state2.space_between_bars,
          chart_style = _this$state2.chart_style,
          x_offset = _this$state2.x_offset,
          chart_data_length = _this$state2.chart_data_length; // console.log(window.scrollY);

      if (mouseDown) return this.listen_for_chart_drag(e);
      var pos = {
        left: e.pageX - overlay_offset.left,
        top: e.pageY - overlay_offset.top - scrollY_offset
      };
      var left = pos.left,
          top = pos.top; // console.log({ left, top });

      var canvas = crosshair_overlay;
      if (!canvas) return;
      var chart_height = canvas.height * (1 - vol_canvas_share);

      var price_label = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(min_price + (chart_height - top) * pennies_per_pixel / 100).toFixed(2);

      var x_hair_ctx = canvas.getContext("2d");
      x_hair_ctx.clearRect(0, 0, canvas.width, canvas.height); //horizontal crosshair line on chart

      x_hair_ctx.beginPath();
      x_hair_ctx.moveTo(0, top);
      x_hair_ctx.lineTo(canvas.width, top);
      x_hair_ctx.stroke(); //vertical crosshair line on chart

      x_hair_ctx.beginPath();
      x_hair_ctx.moveTo(left, 0);
      x_hair_ctx.lineTo(left, canvas.height);
      x_hair_ctx.stroke();
      /* flip label near edges */

      var label_x_pos, label_y_pos;
      if (left + 50 > canvas.width) label_x_pos = left - 50;else label_x_pos = left + 10;
      if (top + 50 > canvas.height) label_y_pos = top - 50;else label_y_pos = top + 15;
      var bar_size = candle_width + space_between_bars;
      var bar_offset = Math.floor(x_offset / bar_size);
      var candle_id = Math.floor(left / bar_size + (chart_data_length - bar_offset - canvas.width / bar_size));
      write_label(price_label, chart_style, 14, x_hair_ctx, label_x_pos, label_y_pos);
      var bar_data;
      if (this.props.data) bar_data = this.props.data.chart_data[candle_id];

      if (bar_data) {
        write_label(bar_data.date, chart_style, 14, x_hair_ctx, left, canvas.height);
        /* info box */

        var info_box_width = 80;
        var info_box_height = 80;
        /* Need to figure out widest label first */

        var info_label_data = ["date", "open", "high", "low", "close"];
        info_label_data.forEach(function (label_data, index) {
          var label = bar_data[label_data];
          if (!isNaN(label)) label = "".concat(label_data, ": ").concat(label.toFixed(2));
          var label_width = x_hair_ctx.measureText(label).width;
          /* Adjust label_infor_box width accordingly */

          if (label_width > info_box_width) info_box_width = label_width + 3;
        });
        x_hair_ctx.strokeStyle = chart_style == "light" ? "black" : "white";
        /* flip label near edges */

        var info_box_x_pos, info_box_y_pos;
        if (left < info_box_width) info_box_x_pos = left;else info_box_x_pos = left - info_box_width;
        if (top < 100) info_box_y_pos = top;else info_box_y_pos = top - info_box_height;
        /* Bar data labels inside info box */

        info_label_data.forEach(function (label_data, index) {
          var label = bar_data[label_data];
          if (!isNaN(label)) label = "".concat(label_data, ": ").concat(label.toFixed(2));
          write_label(label, chart_style, 14, x_hair_ctx, info_box_x_pos + 3, info_box_y_pos + 15 * (index + 1));
        });
        x_hair_ctx.strokeRect(info_box_x_pos, info_box_y_pos, info_box_width, info_box_height);
      }
    }
  }, {
    key: "draw_chart",
    value: function draw_chart() {
      var _this6 = this;

      var chart_data = this.props.data.chart_data;
      var _this$state3 = this.state,
          chart_style = _this$state3.chart_style,
          canvas = _this$state3.canvas,
          vol_canvas_share = _this$state3.vol_canvas_share,
          candle_width = _this$state3.candle_width,
          space_between_bars = _this$state3.space_between_bars,
          x_offset = _this$state3.x_offset,
          chart_data_length = _this$state3.chart_data_length;
      if (!canvas) return console.log("no canvas"); // console.log("DRAW CART");

      var context = canvas.getContext("2d", false);
      clear_canvas(context, chart_style);
      /* Figure out how many bars are going to fin in the visible space */

      var candle_count = canvas.width / (candle_width + space_between_bars); // let candle_count = Math.floor(canvas.witdh /(space_between_bars + candle_width))
      // console.log({ chart_data, candle_count });

      var bar_offset = x_offset / (candle_width + space_between_bars);

      if (bar_offset < 1) {
        chart_data = chart_data.slice(candle_count * -1);
      } else {
        var end_of_data = chart_data_length - bar_offset - candle_count;
        if (end_of_data < 0) end_of_data = 0;
        if (bar_offset + candle_count > chart_data_length) bar_offset = chart_data_length - candle_count;
        chart_data = chart_data.slice(end_of_data, bar_offset * -1);
      } // console.log({ chart_data });

      /* get min and max values */


      var _this$get_min_max = this.get_min_max(chart_data),
          min_price = _this$get_min_max.min_price,
          max_price = _this$get_min_max.max_price,
          max_vol = _this$get_min_max.max_vol; // let min_price = this.get_min_price(chart_data);
      // let max_price = this.get_max_price(chart_data);
      // let max_vol = this.get_max_vol(chart_data);
      // console.log({ min_price, max_price, max_vol });

      /* price / Time markers */


      var date_marker_position = Math.floor(chart_data_length / 10);
      var volume_canvas_height = canvas.height * vol_canvas_share; //volume will be lower 20% (should be adjustable)

      var chart_height = canvas.height * (1 - vol_canvas_share);
      var number_of_pennies = (max_price - min_price) * 100;
      var pennies_per_pixel = (number_of_pennies / chart_height).toFixed(3);
      var pixels_per_penny = (chart_height / number_of_pennies).toFixed(3);
      var pixels_per_vol = (volume_canvas_height / max_vol).toFixed(10); // console.log({
      //   number_of_pennies,
      //   pennies_per_pixel,
      //   pixels_per_penny,
      //   pixels_per_vol
      // });

      this.state.volume_canvas_height = volume_canvas_height;
      this.state.chart_height = chart_height;
      this.state.min_price = min_price;
      this.state.max_price = max_price;
      this.state.max_vol = max_vol;
      this.state.number_of_pennies = number_of_pennies;
      this.state.pennies_per_pixel = pennies_per_pixel;
      this.state.pixels_per_penny = pixels_per_penny;
      this.state.pixels_per_vol = pixels_per_vol;
      /* wait for setSate */
      // setTimeout(() => {

      this.draw_price_markers(context, min_price, max_price);
      var _this$state$MA_data = this.state.MA_data,
          MA_20 = _this$state$MA_data.MA_20,
          MA_50 = _this$state$MA_data.MA_50,
          MA_200 = _this$state$MA_data.MA_200; // console.log(this.props);

      if (!MA_20) return console.log("AHAHAAHAHA NOO MAAAAA");
      this.draw_MA(MA_20, "green", context, bar_offset);
      this.draw_MA(MA_50, "blue", context, bar_offset);
      this.draw_MA(MA_200, "red", context, bar_offset);
      chart_data.forEach(function (data, count) {
        var candle_position = count * candle_width + space_between_bars * count;
        if (count % date_marker_position == 0) _this6.draw_date_marker(candle_position, candle_width, data, canvas);

        _this6.draw_candle(context, candle_position, data, candle_width, pixels_per_penny, pixels_per_vol);
      }); // }, 0);
    }
  }, {
    key: "draw_date_marker",
    value: function draw_date_marker(candle_position, candle_width, data, canvas) {
      // console.log(canvas)
      var context = canvas.getContext("2d");
      var date_time = this.parsed_date_time(data.date, data.label);
      var date_line_color = this.state.chart_style == "light" ? "grey" : "white";
      context.beginPath();
      context.setLineDash([5, 15]);
      context.strokeStyle = date_line_color;
      context.moveTo(candle_position + candle_width / 2, 0);
      context.lineTo(candle_position + candle_width / 2, canvas.height);
      context.stroke(); // context.font = "bold 10px Arial";
      // let text = context.measureText(date_time)
      // context.fillText(date_time, candle_position - (text.width/2), canvas.height);
    }
  }, {
    key: "draw_price_markers",
    value: function draw_price_markers(context, min, max) {
      var _this$state4 = this.state,
          chart_height = _this$state4.chart_height,
          chart_style = _this$state4.chart_style;
      var canvas = context.canvas;
      var range = max - min;

      var intervals = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(range / 5).toFixed(4);

      var marker_count = 0;
      context.strokeStyle = "rgb(222, 222, 222)";
      var price_marker_position = Math.floor(chart_height / 5); // console.log(price_marker_position)
      // console.log({number_of_pennies, price_marker_position, pixels_per_penny})

      for (var x = 0; x < chart_height; x++) {
        if (x % price_marker_position == 0) {
          context.beginPath();
          context.moveTo(0, chart_height - x);
          context.lineTo(canvas.width, chart_height - x);
          context.stroke();

          var price_label = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(min + marker_count * intervals).toFixed(2);

          var text = context.measureText(price_label);
          write_label(price_label, chart_style, 10, context, canvas.width - text.width, chart_height - x);
          marker_count++;
        }
      }
    }
  }, {
    key: "draw_volume",
    value: function draw_volume(candle_position, max_vol, data, candle_width, ctx, pixels_per_vol) {
      var canvas = ctx.canvas;
      ctx.fillRect(candle_position, canvas.height - data.volume * pixels_per_vol, candle_width, data.volume * pixels_per_vol);
    }
  }, {
    key: "parsed_date_time",
    value: function parsed_date_time(date, label) {
      // console.log(date, label)
      var month_day = date.slice(-4);
      var day = month_day.slice(-2);
      var month = month_day.slice(0, 2);
      var year = date.slice(0, 4); // console.log({ year, month_day, month, day})
      // console.log(date)

      return "".concat(month, "/").concat(day, "/").concat(year, " - ").concat(label);
    }
  }, {
    key: "get_min_max",
    value: function get_min_max(data) {
      var max_price = 0; //low number that is lower than any high

      var min_price = 10000000; //some big number that is larger than any lows

      var max_vol = 0; //some big number that is larger than any lows

      data.forEach(function (data_point) {
        if (data_point.high > max_price) {
          max_price = data_point.high;
        }

        if (data_point.low < min_price && data_point.low > 0) {
          min_price = data_point.low;
        }

        if (data_point.volume > max_vol) {
          max_vol = data_point.volume;
        }
      });
      return {
        max_price: max_price,
        min_price: min_price,
        max_vol: max_vol
      };
    } // get_min_price(data) {
    //   return data.reduce((min, p) => (p.low < min ? p.low : min), data[0].low);
    // }
    // get_max_price(data) {
    //   return data.reduce((max, p) => (p.high > max ? p.high : max), data[0].high);
    // }
    // get_max_vol(data) {
    //   return data.reduce(
    //     (max, p) => (p.volume > max ? p.volume : max),
    //     data[0].volume
    //   );
    // }
    // draw_candle(1, 100, 0, {low:0, high:80, open:75, close:80})

  }, {
    key: "draw_candle",
    value: function draw_candle(context, candle_position, candle_data, candle_width, pixels_per_penny, pixels_per_vol) {
      var _this$state5 = this.state,
          max_price = _this$state5.max_price,
          max_vol = _this$state5.max_vol; // console.log({ pennies_per_pixel })
      // console.log({ pixels_per_penny })
      // const total_range_in_pennies = canvas.height*pennies_per_pixel
      // console.log({total_range_in_pennies})
      // console.log({ candle_data})
      // console.log((min_max.max - candle_data.high) * 100 * pixels_per_penny)
      // console.log((min_max.max - candle_data.low) * 100 * pixels_per_penny)
      // console.log(candle_position + (candle_width / 2))

      context.beginPath();
      context.setLineDash([]);
      if (candle_data.open > candle_data.close) context.strokeStyle = "red";
      if (candle_data.open < candle_data.close) context.strokeStyle = "green";
      if (candle_data.open == candle_data.close) context.strokeStyle = "gray";
      context.moveTo(candle_position + candle_width / 2, (max_price - candle_data.high) * 100 * pixels_per_penny);
      context.lineTo(candle_position + candle_width / 2, (max_price - candle_data.low) * 100 * pixels_per_penny);
      context.stroke(); //candle rect

      var candle_height;

      if (candle_data.open > candle_data.close) {
        // console.log('red')
        context.fillStyle = "red";
        context.strokeStyle = "red";
        candle_height = (candle_data.open - candle_data.close) * 100 * pixels_per_penny;
      } else if (candle_data.open == candle_data.close) {
        // console.log('black')
        context.fillStyle = "black";
        context.strokeStyle = "black";
        candle_height = 1;
      } else {
        // console.log('green')
        context.fillStyle = "green";
        context.strokeStyle = "green";
        candle_height = (candle_data.close - candle_data.open) * 100 * pixels_per_penny * -1;
      }

      this.draw_volume(candle_position, max_vol, candle_data, candle_width, context, pixels_per_vol);
      context.fillRect(candle_position, (max_price - candle_data.open) * 100 * pixels_per_penny, candle_width, candle_height);
    }
  }, {
    key: "draw_MA",
    value: function draw_MA(data, color, context, bar_offset) {
      var canvas = context.canvas;
      var _this$state6 = this.state,
          candle_width = _this$state6.candle_width,
          space_between_bars = _this$state6.space_between_bars,
          max_price = _this$state6.max_price,
          pixels_per_penny = _this$state6.pixels_per_penny,
          x_offset = _this$state6.x_offset,
          chart_data_length = _this$state6.chart_data_length;
      var symbol = this.props.chart_id;
      var width = canvas.width;
      var candle_count = width / (candle_width + space_between_bars); // console.log({ candle_count });

      var MA_data = data;
      var data_length = chart_data_length;
      var new_data; // let bar_offset = x_offset / (candle_width+space_between_bars)

      if (bar_offset < 1) {
        new_data = MA_data.slice(candle_count * -1);
      } else {
        var end_of_data = data_length - bar_offset - candle_count;
        if (end_of_data < 0) end_of_data = 0;
        if (bar_offset + candle_count > data_length) bar_offset = data_length - candle_count;
        new_data = MA_data.slice(end_of_data, bar_offset * -1);
      } // console.log({ new_data, MA_data });


      context.strokeStyle = "".concat(color);
      new_data.forEach(function (d, count) {
        if (!new_data[count - 1]) return;
        var candle_position = count * candle_width + space_between_bars * count;
        var prev_candle_position = (count - 1) * candle_width + space_between_bars * (count - 1);
        context.beginPath();
        var move_to_x = prev_candle_position + candle_width / 2;
        var move_to_y = (max_price - new_data[count - 1].close) * 100 * pixels_per_penny;
        context.moveTo(move_to_x, move_to_y);
        var line_to_x = candle_position + candle_width / 2;
        var line_to_y = (max_price - d.close) * 100 * pixels_per_penny;
        context.lineTo(line_to_x, line_to_y);
        context.stroke();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state7 = this.state,
          canvas_width = _this$state7.canvas_width,
          canvas_height = _this$state7.canvas_height;
      var _this$props3 = this.props,
          canvas_id = _this$props3.canvas_id,
          chart_data = _this$props3.chart_data,
          meta = _this$props3.meta;
      var is_loading = meta.is_loading;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "vh_30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        },
        __self: this
      }, canvas_width && canvas_height && this.render_canvas(canvas_id, canvas_width, canvas_height));
    }
  }]);

  return Canvas_Chart;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

function mapStateToProps(state) {
  var stock_data = state.stock_data,
      meta = state.meta;
  return {
    stock_data: stock_data,
    meta: meta
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Canvas_Chart)));

function clear_canvas(context, chart_style) {
  var background_color = chart_style == "light" ? "white" : "black";
  var cW = context.canvas.width,
      cH = context.canvas.height;
  context.clearRect(0, 0, cW, cH);
  context.fillStyle = background_color;
  context.fillRect(0, 0, cW, cH);
}

function write_label(text, chart_style, size, ctx, x, y) {
  /* fill the label background with same as chart style */
  var label_background = chart_style == "light" ? "white" : "black";
  ctx.fillStyle = label_background;
  ctx.font = "bold ".concat(size, "px Arial");
  var label = text;
  var text_width = ctx.measureText(label).width;
  ctx.fillRect(x, y, text_width, -14);
  var text_color = chart_style == "light" ? "black" : "white";
  ctx.fillStyle = text_color;
  ctx.fillText(label, x, y);
}

function add_MA_data_to_model(daily_data) {
  var before_cal = new Date().getTime();
  /* ensure we have data for the symbol*/

  var MA_obj = {
    MA_20: [],
    MA_50: [],
    MA_200: []
  };
  var length = daily_data.length;
  var counter = -1;
  var MA_20 = 20; //minumum MA to calculater, hard coded..

  var MA_50 = 50; //minumum MA to calculater, hard coded..

  var MA_200 = 200; //minumum MA to calculater, hard coded..

  /* Start a loop */

  while (counter < length - MA_20) {
    counter++;
    /* start from the begining of the array */

    var end_counter_20 = MA_20 + counter;
    var end_counter_50 = MA_50 + counter;
    var end_counter_200 = MA_200 + counter;
    /* get the number MA items in array */

    /* 20 */

    if (length >= MA_20) {
      var slice_20 = slice_data(counter, end_counter_20, daily_data);
      var price_MA_data = get_price_type_averages(slice_20);
      MA_obj.MA_20[end_counter_20 - 1] = price_MA_data;
    }

    if (length >= end_counter_50) {
      var slice_50 = slice_data(counter, end_counter_50, daily_data);

      var _price_MA_data = get_price_type_averages(slice_50);

      MA_obj.MA_50[end_counter_50 - 1] = _price_MA_data;
    }

    if (length >= end_counter_200) {
      var slice_200 = slice_data(counter, end_counter_200, daily_data);

      var _price_MA_data2 = get_price_type_averages(slice_200);

      MA_obj.MA_200[end_counter_200 - 1] = _price_MA_data2;
    }
  }

  var after_cal = new Date().getTime();
  return MA_obj;
}
/* average all 4 price types */


function get_price_type_averages(array_of_price_data) {
  var length = array_of_price_data.length; // let open = array_of_price_data.reduce((a, b) => a + b["open"], 0);

  var close = array_of_price_data.reduce(function (a, b) {
    return a + b["close"];
  }, 0); // let high = array_of_price_data.reduce((a, b) => a + b["high"], 0);
  // let low = array_of_price_data.reduce((a, b) => a + b["low"], 0);

  var price_average_obj = {
    // open: parseFloat((open / length).toFixed(2)),
    close: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()((close / length).toFixed(2)) // high: parseFloat((high / length).toFixed(2)),
    // low: parseFloat((low / length).toFixed(2))

  };
  return price_average_obj;
}

function slice_data(start, end, array) {
  return array.slice(start, end);
}

/***/ }),

/***/ "./components/charts/Company_Stats.js":
/*!********************************************!*\
  !*** ./components/charts/Company_Stats.js ***!
  \********************************************/
/*! exports provided: Company_Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company_Stats", function() { return Company_Stats; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "../node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/dave/code/next_stocks/next_app/components/charts/Company_Stats.js";

var Company_Stats = function Company_Stats(_ref) {
  var stats = _ref.stats,
      quote = _ref.quote,
      company = _ref.company,
      set_active_tab = _ref.set_active_tab,
      active_tab = _ref.active_tab;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, !stats && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "LOADING"), stats && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-12 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Stock_Data_Tabs, {
    set_active_tab: set_active_tab,
    active_tab: active_tab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane show active ",
    id: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Company_Data, {
    company: company,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane  ",
    id: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Historical_Price_Data, {
    stats: stats,
    quote: quote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Todays_Price_data, {
    quote: quote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane  ",
    id: "book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "BOOK")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tab-pane  ",
    id: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "news"))));
};

var Stock_Data_Tabs = function Stock_Data_Tabs(_ref2) {
  var set_active_tab = _ref2.set_active_tab,
      active_tab = _ref2.active_tab;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "nav nav-tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: function onClick() {
      return set_active_tab("info");
    },
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    href: "#info",
    "data-toggle": "tab",
    className: "".concat(active_tab == "info" ? "active" : " ", " nav-link  clickable"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Info")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: function onClick() {
      return set_active_tab("price");
    },
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    href: "#price",
    "data-toggle": "tab",
    className: "".concat(active_tab == "price" ? "active" : " ", " nav-link clickable"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Price")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: function onClick() {
      return set_active_tab("book");
    },
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    href: "#book",
    "data-toggle": "tab",
    className: "".concat(active_tab == "book" ? "active" : " ", " nav-link clickable"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Book")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: function onClick() {
      return set_active_tab("news");
    },
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    href: "#news",
    "data-toggle": "tab",
    className: "".concat(active_tab == "news" ? "active" : " ", " nav-link clickable"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "News")));
};

var Company_Data = function Company_Data(_ref3) {
  var company = _ref3.company;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "cocopo");
};

var Historical_Price_Data = function Historical_Price_Data(_ref4) {
  var stats = _ref4.stats,
      quote = _ref4.quote;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row flex_center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6 col-md-3 stats_box p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "underline whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Current"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Price, {
    price: stats.week52high,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6 col-md-3 stats_box p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "underline whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "52 wk high"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Price, {
    price: stats.week52high,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6 col-md-3 stats_box p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "underline whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "52 wk low"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Price, {
    price: stats.week52low,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6 col-md-3 stats_box p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "underline whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "ytd chng."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Percent_Change, {
    precent_change: quote.ytdChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })));
};

var Todays_Price_data = function Todays_Price_data(_ref5) {
  var quote = _ref5.quote;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row flex_center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6 col-md-3 stats_box p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "underline whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Open"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Price, {
    price: quote.open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6 col-md-3 stats_box p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "underline whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "High"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Price, {
    price: quote.high,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6 col-md-3 stats_box p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "underline whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Low"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Price, {
    price: quote.low,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-6 col-md-3 stats_box p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "underline whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Close"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Price, {
    price: quote.close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })));
};

var Volume = function Volume(_ref6) {
  var vol = _ref6.vol;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ticker_vol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, vol.toLocaleString("en-US"));
};

var Price = function Price(_ref7) {
  var price = _ref7.price;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ticker_price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "$", _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(price).toFixed(2).toLocaleString("en-US"));
};

var Percent_Change = function Percent_Change(_ref8) {
  var precent_change = _ref8.precent_change;
  var class_name;
  if (precent_change > 0) class_name = "percentage_up";
  if (precent_change < 0) class_name = "percentage_down";
  if (precent_change == 0) class_name = "percentage_neutral";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: class_name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "".concat(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()((precent_change * 100).toLocaleString("en-US")).toFixed(2), "%"));
};

var Symbol = function Symbol(_ref9) {
  var symbol = _ref9.symbol;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ticker_symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, symbol);
};

/***/ }),

/***/ "./components/charts/chart_data_utils.js":
/*!***********************************************!*\
  !*** ./components/charts/chart_data_utils.js ***!
  \***********************************************/
/*! exports provided: view_selected_stock_symbol, fetch_sector_data, fetch_selected_chart_data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view_selected_stock_symbol", function() { return view_selected_stock_symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_sector_data", function() { return fetch_sector_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_selected_chart_data", function() { return fetch_selected_chart_data; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/meta_actions.js */ "./redux/actions/meta_actions.js");
/* harmony import */ var _redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/stock_actions.js */ "./redux/actions/stock_actions.js");





function view_selected_stock_symbol(symbol, props) {
  var dispatch = props.dispatch;
  console.log(symbol);
  /* Set the search symbol aas selected */

  dispatch(Object(_redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_4__["set_search_symbol"])(symbol));
  /* set show filtered list false */

  dispatch(Object(_redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_3__["show_filter_list"])(false));
  /* fetch data and add to the store/charts array */

  fetch_selected_chart_data(symbol, props);
}
function fetch_sector_data(_x, _x2) {
  return _fetch_sector_data.apply(this, arguments);
}

function _fetch_sector_data() {
  _fetch_sector_data = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(sector, props) {
    var meta, dispatch, router, api_server, sector_data_json, sector_data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            meta = props.meta, dispatch = props.dispatch, router = props.router;
            api_server = meta.api_server;
            router.push("/sector?sector=".concat(encodeURIComponent(sector)));
            _context.next = 5;
            return fetch("\n  ".concat(api_server, "/stock/market/collection/sector?collectionName=").concat(sector, "\n  "));

          case 5:
            sector_data_json = _context.sent;
            _context.next = 8;
            return sector_data_json.json();

          case 8:
            sector_data = _context.sent;
            console.log(sector_data);
            dispatch(Object(_redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_4__["set_sector_data"])(sector, sector_data));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetch_sector_data.apply(this, arguments);
}

function fetch_selected_chart_data(_x3, _x4) {
  return _fetch_selected_chart_data.apply(this, arguments);
}

function _fetch_selected_chart_data() {
  _fetch_selected_chart_data = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(symbol, props) {
    var meta, dispatch, router, api_server, book_data_json, chart_data_json, chart_logo_json, chart_stats_json, company_json, chart_larget_trades_json, chart_larget_trades, company, chart_stats, chart_logo, book_data, chart_data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            meta = props.meta, dispatch = props.dispatch, router = props.router;
            /* Start loading */

            dispatch(Object(_redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_3__["is_loading"])(true));
            if (router) router.push("/chart?symbol=".concat(symbol));
            api_server = meta.api_server;
            _context2.next = 6;
            return fetch("  \n    ".concat(api_server, "/stock/").concat(symbol, "/book\n  "));

          case 6:
            book_data_json = _context2.sent;
            console.log("done fetch");
            _context2.next = 10;
            return fetch("  ".concat(api_server, "/stock/").concat(symbol, "/chart/5y\n  "));

          case 10:
            chart_data_json = _context2.sent;
            console.log("done fetch");
            _context2.next = 14;
            return fetch("\n  ".concat(api_server, "/stock/").concat(symbol, "/logo\n  "));

          case 14:
            chart_logo_json = _context2.sent;
            console.log("done fetch");
            _context2.next = 18;
            return fetch("\n    ".concat(api_server, "/stock/").concat(symbol, "/stats\n  "));

          case 18:
            chart_stats_json = _context2.sent;
            console.log("done fetch");
            _context2.next = 22;
            return fetch("\n    ".concat(api_server, "/stock/").concat(symbol, "/company\n  "));

          case 22:
            company_json = _context2.sent;
            console.log('done fetch');
            _context2.next = 26;
            return fetch("\n    ".concat(api_server, "/stock/").concat(symbol, "/largest-trades\n  "));

          case 26:
            chart_larget_trades_json = _context2.sent;
            console.log("done fetch");
            _context2.next = 30;
            return chart_larget_trades_json.json();

          case 30:
            chart_larget_trades = _context2.sent;
            _context2.next = 33;
            return company_json.json();

          case 33:
            company = _context2.sent;
            _context2.next = 36;
            return chart_stats_json.json();

          case 36:
            chart_stats = _context2.sent;
            _context2.next = 39;
            return chart_logo_json.json();

          case 39:
            chart_logo = _context2.sent;
            _context2.next = 42;
            return book_data_json.json();

          case 42:
            book_data = _context2.sent;
            _context2.next = 45;
            return chart_data_json.json();

          case 45:
            chart_data = _context2.sent;
            console.log('done fetch');
            dispatch(Object(_redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_4__["add_chart_data"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, symbol, {
              company: company,
              book_data: book_data,
              chart_data: chart_data,
              chart_logo: chart_logo,
              chart_stats: chart_stats,
              chart_larget_trades: chart_larget_trades
            })));
            dispatch(Object(_redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_3__["is_loading"])(false));
            console.log({
              book_data: book_data,
              chart_data: chart_data,
              chart_logo: chart_logo,
              chart_stats: chart_stats,
              chart_larget_trades: chart_larget_trades
            });

          case 50:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetch_selected_chart_data.apply(this, arguments);
}

/***/ }),

/***/ "./components/utils/auth.js":
/*!**********************************!*\
  !*** ./components/utils/auth.js ***!
  \**********************************/
/*! exports provided: ensure_loggedin, ensure_not_loggedin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensure_loggedin", function() { return ensure_loggedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensure_not_loggedin", function() { return ensure_not_loggedin; });
function ensure_loggedin(ctx) {
  var state = ctx.store.getState();

  if (!state.user.is_loggedin) {
    if (ctx.req) {
      ctx.res.redirect("/login");
    } else {
      Router.push("/login");
    }
  } else {
    return true;
  }
}
function ensure_not_loggedin(ctx) {
  var state = ctx.store.getState();

  if (state.user.is_loggedin) {
    if (ctx.req) {
      ctx.res.redirect("/account-profile");
    } else {
      Router.push("/account-profile");
    }
  } else {
    return true;
  }
}

/***/ }),

/***/ "./layouts/Main_Layout.js":
/*!********************************!*\
  !*** ./layouts/Main_Layout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Main_Head_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Main_Head.js */ "./components/Main_Head.js");
/* harmony import */ var _components_Main_Nav_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Main_Nav.js */ "./components/Main_Nav.js");
/* harmony import */ var _components_Main_Footer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Main_Footer.js */ "./components/Main_Footer.js");







var _jsxFileName = "/home/dave/code/next_stocks/next_app/layouts/Main_Layout.js";








var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Main_Head_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Main_Nav_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.props.children)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Main_Footer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function mapStateToProps(state) {
  // const {   } = state;
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Layout)));

/***/ }),

/***/ "./pages/chart.js":
/*!************************!*\
  !*** ./pages/chart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "../node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_utils_auth_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/utils/auth.js */ "./components/utils/auth.js");
/* harmony import */ var _layouts_Main_Layout_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layouts/Main_Layout.js */ "./layouts/Main_Layout.js");
/* harmony import */ var _components_charts_chart_data_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/charts/chart_data_utils.js */ "./components/charts/chart_data_utils.js");
/* harmony import */ var _components_charts_Canvas_Chart_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/charts/Canvas_Chart.js */ "./components/charts/Canvas_Chart.js");
/* harmony import */ var _components_charts_Company_Stats_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/charts/Company_Stats.js */ "./components/charts/Company_Stats.js");









var _jsxFileName = "/home/dave/code/next_stocks/next_app/pages/chart.js";











var Account_Profile =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Account_Profile, _React$Component);

  function Account_Profile(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Account_Profile);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Account_Profile).call(this, props));
    _this.state = {
      active_tab: "info"
    };
    _this.set_active_tab = _this.set_active_tab.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Account_Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "set_active_tab",
    value: function set_active_tab(tab) {
      console.log(tab);
      this.setState({
        active_tab: tab
      });
    }
  }, {
    key: "render",
    value: function render() {
      var active_tab = this.state.active_tab;
      var _this$props = this.props,
          symbol = _this$props.symbol,
          stock_data = _this$props.stock_data;
      var book_data, chart_logo, chart_stats, chart_largest_trades, company;

      if (stock_data.charts[this.props.symbol]) {
        var _stock_data$charts$th = stock_data.charts[this.props.symbol],
            company = _stock_data$charts$th.company,
            book_data = _stock_data$charts$th.book_data,
            chart_logo = _stock_data$charts$th.chart_logo,
            chart_stats = _stock_data$charts$th.chart_stats,
            chart_largest_trades = _stock_data$charts$th.chart_largest_trades;
      }

      console.log({
        book_data: book_data,
        chart_logo: chart_logo,
        chart_stats: chart_stats,
        chart_largest_trades: chart_largest_trades,
        company: company
      });
      console.log({
        symbol: symbol,
        stock_data: stock_data
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_layouts_Main_Layout_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "p-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, company && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row flex_center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col flex_center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        target: "_blank",
        href: company.website,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, company.companyName)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Stock_Logo, {
        logo: chart_logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Percent_Change, {
        precent_change: book_data.quote.changePercent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-sm-6 vh_50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_charts_Canvas_Chart_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        canvas_id: symbol,
        data: stock_data.charts[this.props.symbol],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-sm-6 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_charts_Company_Stats_js__WEBPACK_IMPORTED_MODULE_17__["Company_Stats"], {
        active_tab: active_tab,
        set_active_tab: this.set_active_tab,
        company: company,
        stats: chart_stats,
        quote: book_data ? book_data.quote : {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ctx) {
        var symbol, store, req, state, dispatch, stock_data, meta, symbol_data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                symbol = symbol = ctx.query.symbol;
                store = ctx.store, req = ctx.req;
                state = store.getState();
                dispatch = store.dispatch;
                stock_data = state.stock_data, meta = state.meta;
                symbol_data = stock_data.charts[symbol];

                if (!(!symbol_data && req)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return Object(_components_charts_chart_data_utils_js__WEBPACK_IMPORTED_MODULE_15__["fetch_selected_chart_data"])(symbol, {
                  meta: meta,
                  dispatch: dispatch
                });

              case 9:
                _context.next = 12;
                break;

              case 11:
                console.log("already got ".concat(symbol, " data"));

              case 12:
                return _context.abrupt("return", {
                  symbol: ctx.query.symbol
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Account_Profile;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

function mapStateToProps(state) {
  var user = state.user,
      stock_data = state.stock_data,
      meta = state.meta;
  return {
    user: user,
    stock_data: stock_data,
    meta: meta
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Account_Profile)));

var Stock_Logo = function Stock_Logo(_ref) {
  var logo = _ref.logo;
  if (!logo) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  });
  var url = logo ? logo.url : "/static/trade_post_imgs/upload_0b696dc6c946a6834d7e7ba8f21c13a9";
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
    height: "60px",
    src: url,
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  });
};

var Percent_Change = function Percent_Change(_ref2) {
  var precent_change = _ref2.precent_change;
  var class_name;
  if (precent_change > 0) class_name = "percentage_up";
  if (precent_change < 0) class_name = "percentage_down";
  if (precent_change == 0) class_name = "percentage_neutral";
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
    className: class_name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "".concat(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()((precent_change * 100).toLocaleString("en-US")).toFixed(2), "%"));
};

/***/ }),

/***/ "./redux/actions/meta_actions.js":
/*!***************************************!*\
  !*** ./redux/actions/meta_actions.js ***!
  \***************************************/
/*! exports provided: set_api_server, set_csrf, show_filter_list, is_loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_api_server", function() { return set_api_server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_csrf", function() { return set_csrf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show_filter_list", function() { return show_filter_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_loading", function() { return is_loading; });
function set_api_server(api_server) {
  return {
    type: "SET_API_SERVER",
    api_server: api_server,
    iex_server: 'https://api.iextrading.com/1.0'
  };
}
function set_csrf(csrf) {
  return {
    type: "SET_CSRF",
    csrf: csrf
  };
}
function show_filter_list(show_filter_list) {
  return {
    type: "TOGGLE_FILTER_LIST",
    show_filter_list: show_filter_list
  };
}
function is_loading(is_loading) {
  return {
    type: "IS_LOADING",
    is_loading: is_loading
  };
}

/***/ }),

/***/ "./redux/actions/stock_actions.js":
/*!****************************************!*\
  !*** ./redux/actions/stock_actions.js ***!
  \****************************************/
/*! exports provided: set_symbols_data, set_search_symbol, get_sector_data, set_sector_data, add_chart_data, add_MA_data_action, set_home_page_data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_symbols_data", function() { return set_symbols_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_search_symbol", function() { return set_search_symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_sector_data", function() { return get_sector_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_sector_data", function() { return set_sector_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_chart_data", function() { return add_chart_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_MA_data_action", function() { return add_MA_data_action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_home_page_data", function() { return set_home_page_data; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");


function set_symbols_data(symbols_data) {
  return {
    type: "SET_SYMBOLS_DATA",
    symbols_data: symbols_data
  };
}
function set_search_symbol(search_symbol) {
  return {
    type: "SET_SEACH_SYMBOL",
    search_symbol: search_symbol
  };
}
function get_sector_data(sector, iex_api) {
  console.log('GET SECTOR DATA');
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var sector_data_json, sector_data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("\n    ".concat(iex_api, "/stock/market/collection/sector?collectionName=").concat(sector, "\n    "));

              case 2:
                sector_data_json = _context.sent;
                _context.next = 5;
                return sector_data_json.json();

              case 5:
                sector_data = _context.sent;
                return _context.abrupt("return", dispatch(set_sector_data(sector, sector_data)));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}
function set_sector_data(sector, data) {
  console.log('set_sector_data');
  return {
    type: "SET_SECTOR_DATA",
    sector: sector,
    data: data
  };
}
function add_chart_data(chart_data) {
  return {
    type: "ADD_CHART_DATA",
    chart_data: chart_data
  };
}
function add_MA_data_action(MA_data, symbol) {
  return {
    type: "ADD_MA_DATA",
    MA_data: MA_data,
    symbol: symbol
  };
}
function set_home_page_data(home_page_data) {
  var home_page_data_set_at = new Date().getTime();
  return {
    type: "SET_HOME_PAGE_DATA",
    home_page_data: home_page_data,
    home_page_data_set_at: home_page_data_set_at
  };
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/chart.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dave/code/next_stocks/next_app/pages/chart.js */"./pages/chart.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-redux-toastr":
/*!*************************************!*\
  !*** external "react-redux-toastr" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=chart.js.map