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
/******/ 	return __webpack_require__(__webpack_require__.s = "0d99");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0d99":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xomw");


/***/ }),

/***/ "0tNF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("8ET1");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("7X5e");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "3/Lt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return set_MA_query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add_query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sort_by; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return load_more_MA_results; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return remove_query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return submit_query; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JYC+");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UrUy");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("R3/3");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("J5aF");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);




function set_MA_query(queries) {
  return {
    type: "SET_MA_QUERY",
    queries: queries
  };
}
function add_query(queries) {
  if (queries.length >= 3) return react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].info("Three is enough");
  var new_query = {
    MA: "50",
    g_l: "g",
    perc: 20
  };
  queries.push(new_query);
  return {
    type: "ADD_QUERY",
    queries: queries
  };
}
function sort_by(prop, flag) {
  return {
    type: "SORT_BY",
    prop: prop,
    flag: flag
  };
}
function load_more_MA_results(sorted_prop) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: "IS_LOADING",
                  is_loading: true
                });
                /* Wait for next loops cycle to update state... */

                setTimeout(function () {
                  dispatch({
                    type: "SORT_BY",
                    prop: sorted_prop,
                    flag: true
                  });
                  dispatch({
                    type: "IS_LOADING",
                    is_loading: false
                  });
                }, 0);
                dispatch({
                  type: "LOAD_MORE_MA_RESULTS"
                });

              case 3:
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
function remove_query(index, queries) {
  queries.splice(index, 1);
  return {
    type: "REMOVE_QUERY",
    queries: queries
  };
}
function submit_query(query_data, saved_queries) {
  var query = query_data.query;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dispatch) {
        var resp_json, query_results;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: "IS_LOADING",
                  is_loading: true
                });
                /* clear current and sorted results */

                dispatch({
                  type: "CLEAR_RESULTS"
                });
                _context2.prev = 2;
                _context2.next = 5;
                return fetch("/MA-query", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json" // "Content-Type": "application/x-www-form-urlencoded",

                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(query_data)
                });

              case 5:
                resp_json = _context2.sent;
                _context2.next = 8;
                return resp_json.json();

              case 8:
                query_results = _context2.sent;
                console.log(query_results);
                dispatch({
                  type: "IS_LOADING",
                  is_loading: false
                });
                dispatch({
                  type: "QUERY_SUBMITTED",
                  query_results: query_results,
                  saved_queries: saved_queries
                });
                _context2.next = 19;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](2);
                console.log("err");
                console.log(_context2.t0);
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].error("N/A");

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 14]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

/***/ }),

/***/ "3esu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("NluH");

var assertThisInitialized = __webpack_require__("oS/Z");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4cCf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("UrUy");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("R3/3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("Rbzu");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Main_Head.js










var Main_Head_Main_Head =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Main_Head, _React$Component);

  function Main_Head(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Main_Head);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Main_Head).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(createClass["a" /* default */])(Main_Head, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
        rel: "icon",
        href: "/static/img/favicon.png",
        type: "image/x-icon"
      }), external_react_default.a.createElement("meta", {
        charSet: "utf-8"
      }), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), external_react_default.a.createElement("meta", {
        name: "description",
        content: ""
      }), external_react_default.a.createElement("meta", {
        name: "author",
        content: ""
      }), external_react_default.a.createElement("title", null, "Next App"), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/bootstrap.css"
      }), external_react_default.a.createElement("link", {
        href: "/static/vendor/font-awesome/css/font-awesome.min.css",
        rel: "stylesheet",
        type: "text/css"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/nprogress.css"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/css.css"
      }));
    }
  }]);

  return Main_Head;
}(external_react_default.a.Component);

function mapStateToProps(state) {
  var locals = state.locals;
  return Object(objectSpread["a" /* default */])({}, locals);
}

/* harmony default export */ var components_Main_Head = (Object(external_react_redux_["connect"])(mapStateToProps)(Main_Head_Main_Head));
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/set.js
var set = __webpack_require__("OAWj");
var set_default = /*#__PURE__*/__webpack_require__.n(set);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("0tNF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");
var external_isomorphic_fetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_fetch_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./redux/actions/stock_actions.js
var stock_actions = __webpack_require__("np7u");

// EXTERNAL MODULE: ./components/charts/chart_data_utils.js
var chart_data_utils = __webpack_require__("HyVD");

// EXTERNAL MODULE: ./redux/actions/meta_actions.js
var meta_actions = __webpack_require__("WbEK");

// CONCATENATED MODULE: ./components/Main_Nav.js




















var Main_Nav_Main_Nav =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Main_Nav, _React$Component);

  function Main_Nav(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Main_Nav);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Main_Nav).call(this, props));
    _this.state = {
      // search_symbol: "",
      filtered_stock_list: [],
      searching: true,
      stock_selected: false // show_filter_list: false

    };
    _this.handle_search_input_keydown = _this.handle_search_input_keydown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handle_seach_symbol_input = _this.handle_seach_symbol_input.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.make_filter_list = _this.make_filter_list.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.highlight_search_letters = _this.highlight_search_letters.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.filtered_stock_list_item = _this.filtered_stock_list_item.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Main_Nav, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var has_symbols_data, all_stock_symbols_json, all_stock_symbols;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
                return external_isomorphic_fetch_default()("\n        /stock/get_symbols_data\n      ");

              case 7:
                all_stock_symbols_json = _context.sent;
                _context.next = 10;
                return all_stock_symbols_json.json();

              case 10:
                all_stock_symbols = _context.sent;
                console.log(all_stock_symbols);
                this.props.dispatch(Object(stock_actions["f" /* set_symbols_data */])(all_stock_symbols));
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                console.log("err");
                console.log(_context.t0);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 15]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "handle_search_input_keydown",
    value: function handle_search_input_keydown(e) {
      console.log(e);
    }
  }, {
    key: "handle_seach_symbol_input",
    value: function handle_seach_symbol_input(e) {
      if (!this.props.meta.show_filter_list) this.props.dispatch(Object(meta_actions["d" /* show_filter_list */])(true));
      this.props.dispatch(Object(stock_actions["d" /* set_search_symbol */])(e.target.value));
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
      }

      console.log(full_list);
      /* list of possible arrays with data */

      var symbol_starts_with = [];
      var name_starts_with = [];
      var symbol_list = [];
      var name_list = [];
      var filtered_stock_list = [];
      /* check symbol starts with */

      symbol_starts_with = full_list.filter(function (list_item) {
        return list_item.symbol.toLowerCase().startsWith(search_text);
      });
      console.log(symbol_starts_with);
      filtered_stock_list = [].concat(Object(toConsumableArray["a" /* default */])(filtered_stock_list), Object(toConsumableArray["a" /* default */])(symbol_starts_with));

      if (filtered_stock_list.length < 100) {
        /* check name starts with */
        name_starts_with = full_list.filter(function (list_item) {
          return list_item.name.toLowerCase().startsWith(search_text);
        });
        console.log(name_starts_with);
        filtered_stock_list = [].concat(Object(toConsumableArray["a" /* default */])(filtered_stock_list), Object(toConsumableArray["a" /* default */])(name_starts_with));
      }

      if (filtered_stock_list.length < 100) {
        /* check symbols */
        symbol_list = full_list.filter(function (list_item) {
          return list_item.symbol.toLowerCase().includes(search_text);
        });
        console.log(symbol_list);
        filtered_stock_list = [].concat(Object(toConsumableArray["a" /* default */])(filtered_stock_list), Object(toConsumableArray["a" /* default */])(symbol_list));
      }

      if (filtered_stock_list.length < 100) {
        /* check name */
        name_list = full_list.filter(function (list_item) {
          return list_item.name.toLowerCase().includes(search_text);
        });
        console.log(name_list);
        filtered_stock_list = [].concat(Object(toConsumableArray["a" /* default */])(filtered_stock_list), Object(toConsumableArray["a" /* default */])(name_list));
      }
      /* Combine the lists */


      filtered_stock_list = Object(toConsumableArray["a" /* default */])(new set_default.a(filtered_stock_list));
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
      return external_react_default.a.createElement("div", {
        className: "filtered_stock_list"
      }, filtered_stock_list.map(function (data, index) {
        return _this3.filtered_stock_list_item(data, index, search_symbol);
      }));
    }
    /* Items that make the list of filtered stocks, on click event resets some things */

  }, {
    key: "filtered_stock_list_item",
    value: function filtered_stock_list_item(data, index, search) {
      var _this4 = this;

      return external_react_default.a.createElement("div", {
        className: "filtered_stock_list_item",
        key: index,
        onClick: function onClick() {
          return Object(chart_data_utils["c" /* view_selected_stock_symbol */])(data.symbol, _this4.props);
        }
      }, external_react_default.a.createElement("span", {
        dangerouslySetInnerHTML: this.highlight_search_letters(data.symbol, search)
      }), " - ", external_react_default.a.createElement("span", {
        dangerouslySetInnerHTML: this.highlight_search_letters(data.name, search)
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
      return external_react_default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light relative"
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/landing",
        as: "/"
      }, external_react_default.a.createElement("a", {
        className: "navbar-brand"
      }, "Home")), external_react_default.a.createElement("ul", {
        className: "nav-bar-links"
      }, !is_loggedin && external_react_default.a.createElement(Main_Nav_Register_Login_Links, {
        pathname: pathname
      }), is_loggedin && external_react_default.a.createElement(Main_Nav_Logout_Link, {
        pathname: pathname
      }), external_react_default.a.createElement(Main_Nav_Charts_Dropdown, {
        pathname: pathname,
        charts: this.props.stock_data.charts
      }), is_loggedin && external_react_default.a.createElement(Main_Nav_MA_Analysis_Link, null)), external_react_default.a.createElement(Main_Nav_Navbar_Search
      /* Let the list stay long enough to click */
      , {
        handle_search_input_blur: function handle_search_input_blur() {
          return setTimeout(function () {
            return _this5.props.dispatch(Object(meta_actions["d" /* show_filter_list */])(false));
          }, 200);
        },
        handle_search_input_keydown: function handle_search_input_keydown(e) {
          return _this5.handle_search_input_keydown(e);
        },
        handle_search_input: function handle_search_input(e) {
          return _this5.handle_seach_symbol_input(e);
        },
        search_symbol: this.props.stock_data.search_symbol,
        handle_search: function handle_search(e) {
          return _this5.handle_search(e);
        }
      }), this.props.meta.show_filter_list && this.Filtered_Stock_List({
        filtered_stock_list: this.state.filtered_stock_list,
        search_symbol: this.props.stock_data.search_symbol
      }));
    }
  }]);

  return Main_Nav;
}(external_react_default.a.Component);

function Main_Nav_mapStateToProps(state) {
  var user = state.user,
      meta = state.meta,
      stock_data = state.stock_data;
  return {
    user: user,
    meta: meta,
    stock_data: stock_data
  };
}

/* harmony default export */ var components_Main_Nav = (Object(external_react_redux_["connect"])(Main_Nav_mapStateToProps)(Object(router_["withRouter"])(Main_Nav_Main_Nav)));
/*              Nav components               */

var Main_Nav_Navbar_Search = function Navbar_Search(_ref2) {
  var handle_search_input = _ref2.handle_search_input,
      handle_search = _ref2.handle_search,
      search_symbol = _ref2.search_symbol,
      handle_search_input_blur = _ref2.handle_search_input_blur,
      handle_search_input_keydown = _ref2.handle_search_input_keydown;
  return external_react_default.a.createElement("div", {
    className: "form-inline my-2 my-lg-0 absolute right_10_px z_index_100"
  }, external_react_default.a.createElement("input", {
    onBlur: handle_search_input_blur,
    onKeyDown: function onKeyDown(e) {
      return handle_search_input_keydown(e);
    },
    onChange: function onChange(e) {
      return handle_search_input(e);
    },
    className: "form-control mr-sm-2",
    type: "search",
    placeholder: "Search Symbols",
    "aria-label": "Search",
    value: search_symbol
  }));
};

var Main_Nav_Charts_Dropdown = function Charts_Dropdown(_ref3) {
  var pathname = _ref3.pathname,
      charts = _ref3.charts;
  return external_react_default.a.createElement("li", {
    className: "nav-item dropdown margin_right_4em"
  }, external_react_default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Charts"), external_react_default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, charts && keys_default()(charts).map(function (symbol, index) {
    return external_react_default.a.createElement(link_default.a, {
      href: "/chart?symbol=".concat(symbol),
      key: index
    }, external_react_default.a.createElement("a", {
      className: "stock-list-dropdown"
    }, external_react_default.a.createElement("p", {
      className: "justify_center zero_margin"
    }, symbol), index + 1 != keys_default()(charts).length && external_react_default.a.createElement("div", {
      className: "dropdown-divider"
    })));
  })));
};

var Main_Nav_MA_Analysis_Link = function MA_Analysis_Link(_ref4) {
  var pathname = _ref4.pathname;
  return external_react_default.a.createElement(Main_Nav_Navbar_Links, {
    name: "Moving Avg. Analysis",
    path: "/moving-average-analysis",
    pathname: pathname
  });
};

var Main_Nav_Logout_Link = function Logout_Link(_ref5) {
  var pathname = _ref5.pathname;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Main_Nav_Navbar_Links, {
    name: "Profile",
    path: "/account-profile",
    pathname: pathname
  }), external_react_default.a.createElement(Main_Nav_Navbar_Links, {
    nofetch: true,
    name: "Logout",
    path: "/auth/logout",
    pathname: pathname
  }));
};

var Main_Nav_Register_Login_Links = function Register_Login_Links(_ref6) {
  var pathname = _ref6.pathname;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Main_Nav_Navbar_Links, {
    name: "Login",
    path: "/login",
    pathname: pathname
  }), external_react_default.a.createElement(Main_Nav_Navbar_Links, {
    name: "Sign Up",
    path: "/sign-up",
    pathname: pathname
  }));
};

var Main_Nav_Navbar_Links = function Navbar_Links(_ref7) {
  var path = _ref7.path,
      pathname = _ref7.pathname,
      name = _ref7.name,
      nofetch = _ref7.nofetch;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, !nofetch && external_react_default.a.createElement("li", {
    className: "nav-item"
  }, external_react_default.a.createElement(link_default.a, {
    prefetch: true,
    href: path
  }, external_react_default.a.createElement("a", {
    className: "".concat(pathname == path ? "active " : " ", "\" nav-link dropdown-item\"")
  }, name))), nofetch && external_react_default.a.createElement("li", {
    className: "nav-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: path
  }, external_react_default.a.createElement("a", {
    className: "".concat(pathname == path ? "active " : " ", "\" nav-link dropdown-item\"")
  }, name))));
};
// CONCATENATED MODULE: ./components/Main_Footer.js


var Main_Footer_Main_Footer = function Main_Footer(props) {
  return (// <!-- Footer -->
    external_react_default.a.createElement("footer", {
      className: "footer bg-light"
    }, external_react_default.a.createElement("div", {
      className: "container"
    }, external_react_default.a.createElement("div", {
      className: "row flex_center"
    }, external_react_default.a.createElement("div", {
      className: "col-sm-2 flex_center"
    }, external_react_default.a.createElement("a", {
      href: "https://NewsAPI.org"
    }, "powered by NewsAPI.org")), external_react_default.a.createElement("div", {
      className: "col-sm-2 flex_center"
    }, external_react_default.a.createElement("p", null, "Data provided for free by ", external_react_default.a.createElement("a", {
      href: "https://iextrading.com/developer"
    }, "IEX"), ". View IEX\u2019s ", external_react_default.a.createElement("a", {
      href: "https://iextrading.com/api-exhibit-a/"
    }, "Terms of Use"), ".")))))
  );
};

/* harmony default export */ var components_Main_Footer = (Main_Footer_Main_Footer);
// CONCATENATED MODULE: ./layouts/Main_Layout.js















var Main_Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Layout);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Layout).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(createClass["a" /* default */])(Layout, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
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
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Main_Head, null), external_react_default.a.createElement(components_Main_Nav, null), external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("main", null, this.props.children)), external_react_default.a.createElement(components_Main_Footer, null));
    }
  }]);

  return Layout;
}(external_react_default.a.Component);

function Main_Layout_mapStateToProps(state) {
  // const {   } = state;
  return {};
}

/* harmony default export */ var Main_Layout = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(Main_Layout_mapStateToProps)(Object(router_["withRouter"])(Main_Layout_Layout)));

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "7X5e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "8ET1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "8m4E":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("jDdP");

var _Object$setPrototypeOf = __webpack_require__("OKNm");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("PL1w");

var _stringify = _interopRequireDefault(__webpack_require__("JYC+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("KBEF"));

var _createClass2 = _interopRequireDefault(__webpack_require__("J/q3"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("3esu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("8m4E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("Od8a"));

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

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

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

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "FdmI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "HyVD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return view_selected_stock_symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetch_sector_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetch_selected_chart_data; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("azxR");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UrUy");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("R3/3");
/* harmony import */ var _redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WbEK");
/* harmony import */ var _redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("np7u");





function view_selected_stock_symbol(symbol, props) {
  var dispatch = props.dispatch;
  console.log(symbol);
  /* Set the search symbol aas selected */

  dispatch(Object(_redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_4__[/* set_search_symbol */ "d"])(symbol));
  /* set show filtered list false */

  dispatch(Object(_redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_3__[/* show_filter_list */ "d"])(false));
  /* fetch data and add to the store/charts array */

  fetch_selected_chart_data(symbol, props);
}
function fetch_sector_data(_x, _x2) {
  return _fetch_sector_data.apply(this, arguments);
}

function _fetch_sector_data() {
  _fetch_sector_data = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(sector, props) {
    var meta, dispatch, router, iex_server, sector_data_json, sector_data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            meta = props.meta, dispatch = props.dispatch, router = props.router;
            iex_server = meta.iex_server;
            router.push("/sector?sector=".concat(encodeURIComponent(sector)));
            _context.next = 5;
            return fetch("\n  ".concat(iex_server, "/stock/market/collection/sector?collectionName=").concat(sector, "\n  "));

          case 5:
            sector_data_json = _context.sent;
            _context.next = 8;
            return sector_data_json.json();

          case 8:
            sector_data = _context.sent;
            console.log(sector_data);
            dispatch(Object(_redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_4__[/* set_sector_data */ "e"])(sector, sector_data));

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
  _fetch_selected_chart_data = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(symbol, props) {
    var meta, dispatch, router, iex_server, book_data_json, chart_data_json, chart_logo_json, chart_stats_json, chart_larget_trades_json, chart_larget_trades, chart_stats, chart_logo, book_data, chart_data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            meta = props.meta, dispatch = props.dispatch, router = props.router;
            /* Start loading */

            dispatch(Object(_redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_3__[/* is_loading */ "a"])(true));
            if (router) router.push("/chart?symbol=".concat(symbol));
            iex_server = meta.iex_server;
            _context2.next = 6;
            return fetch("\n  ".concat(iex_server, "/stock/").concat(symbol, "/book\n  "));

          case 6:
            book_data_json = _context2.sent;
            _context2.next = 9;
            return fetch("\n  ".concat(iex_server, "/stock/").concat(symbol, "/chart/1y\n  "));

          case 9:
            chart_data_json = _context2.sent;
            _context2.next = 12;
            return fetch("\n  ".concat(iex_server, "/stock/").concat(symbol, "/logo\n  "));

          case 12:
            chart_logo_json = _context2.sent;
            _context2.next = 15;
            return fetch("\n  ".concat(iex_server, "/stock/").concat(symbol, "/stats\n  "));

          case 15:
            chart_stats_json = _context2.sent;
            _context2.next = 18;
            return fetch("\n  ".concat(iex_server, "/stock/").concat(symbol, "/largest-trades\n  "));

          case 18:
            chart_larget_trades_json = _context2.sent;
            _context2.next = 21;
            return chart_larget_trades_json.json();

          case 21:
            chart_larget_trades = _context2.sent;
            _context2.next = 24;
            return chart_stats_json.json();

          case 24:
            chart_stats = _context2.sent;
            _context2.next = 27;
            return chart_logo_json.json();

          case 27:
            chart_logo = _context2.sent;
            _context2.next = 30;
            return book_data_json.json();

          case 30:
            book_data = _context2.sent;
            _context2.next = 33;
            return chart_data_json.json();

          case 33:
            chart_data = _context2.sent;
            dispatch(Object(_redux_actions_stock_actions_js__WEBPACK_IMPORTED_MODULE_4__[/* add_chart_data */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, symbol, {
              book_data: book_data,
              chart_data: chart_data,
              chart_logo: chart_logo,
              chart_stats: chart_stats,
              chart_larget_trades: chart_larget_trades
            })));
            dispatch(Object(_redux_actions_meta_actions_js__WEBPACK_IMPORTED_MODULE_3__[/* is_loading */ "a"])(false));
            console.log({
              book_data: book_data,
              chart_data: chart_data,
              chart_logo: chart_logo,
              chart_stats: chart_stats,
              chart_larget_trades: chart_larget_trades
            });

          case 37:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetch_selected_chart_data.apply(this, arguments);
}

/***/ }),

/***/ "J/q3":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hHgk");

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

/***/ "J5aF":
/***/ (function(module, exports) {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ "JYC+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "KBEF":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "LkAs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "Moms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
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

/***/ "NluH":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("t+lh");

var _Symbol = __webpack_require__("XzKa");

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

/***/ "OAWj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zQQD");

/***/ }),

/***/ "OKNm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "Od8a":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("6Ndq");

var setPrototypeOf = __webpack_require__("g9SA");

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

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "R3/3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZOIa");
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

/***/ "Rbzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tvLF");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s4hn");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1qCV");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("azxR");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UrUy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "WbEK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return set_api_server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return set_csrf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return show_filter_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return is_loading; });
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

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XzKa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "YKN3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "azxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
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

/***/ "bMj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("t+lh");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("XzKa");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g9SA":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("OKNm");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hZod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jDdP");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OKNm");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "heMW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ensure_loggedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ensure_not_loggedin; });
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

/***/ "jDdP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "np7u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return set_symbols_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return set_search_symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return get_sector_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return set_sector_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add_chart_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return set_home_page_data; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UrUy");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R3/3");


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
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
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
function set_home_page_data(home_page_data) {
  var home_page_data_set_at = new Date().getTime();
  return {
    type: "SET_HOME_PAGE_DATA",
    home_page_data: home_page_data,
    home_page_data_set_at: home_page_data_set_at
  };
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oS/Z":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s20r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "s4hn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "tEuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("6Ndq");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("OKNm");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "tvLF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xomw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("UrUy");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("R3/3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-redux-toastr"
var external_react_redux_toastr_ = __webpack_require__("J5aF");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/utils/auth.js
var auth = __webpack_require__("heMW");

// EXTERNAL MODULE: ./layouts/Main_Layout.js + 3 modules
var Main_Layout = __webpack_require__("4cCf");

// EXTERNAL MODULE: ./components/charts/chart_data_utils.js
var chart_data_utils = __webpack_require__("HyVD");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__("yLsn");
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("FdmI");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./redux/actions/MA_analysis_actions.js
var MA_analysis_actions = __webpack_require__("3/Lt");

// CONCATENATED MODULE: ./components/charts/Canvas_Chart.js















var Canvas_Chart_Canvas_Chart =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Canvas_Chart, _React$Component);

  function Canvas_Chart(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Canvas_Chart);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Canvas_Chart).call(this, props));
    _this.state = {
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
      vol_canvas_share: 0.1,
      overlay_offset: "",
      symbol: "",
      spinner_timmer: "",
      MA_data: {},
      chart_background: "white"
    };
    _this.draw_cross_hair = _this.draw_cross_hair.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Canvas_Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("canvas mounted");
      this.make_canvas_full_screen();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log("componentDidUpdate");
      console.log(prevProps);

      if (!prevProps.meta.is_loading && this.props.meta.is_loading) {
        this.run_spinner();
      }
    }
  }, {
    key: "make_canvas_full_screen",
    value: function make_canvas_full_screen() {
      var _this2 = this;

      if (typeof window !== "undefined") {
        var dom_node = external_react_dom_default.a.findDOMNode(this);
        var canvas_id = this.props.canvas_id;
        var canvas_width = dom_node.parentElement.clientWidth * 0.95;
        var canvas_height = dom_node.parentElement.clientHeight;
        this.setState({
          canvas_width: canvas_width,
          canvas_height: canvas_height
        });
        setTimeout(function () {
          var canvas = document.getElementById(_this2.props.canvas_id);
          var crosshair_overlay = document.getElementById("".concat(_this2.props.canvas_id, "_crosshair_overlay"));
          var overlay_offset = document.getElementById("".concat(_this2.props.canvas_id, "_crosshair_overlay")).getBoundingClientRect();

          _this2.run_spinner(canvas);

          _this2.setState({
            overlay_offset: overlay_offset,
            canvas: canvas,
            crosshair_overlay: crosshair_overlay
          });

          console.log("does this run?");
          console.log(_this2);
        }, 0);
      }
    }
  }, {
    key: "run_spinner",
    value: function run_spinner() {
      var _this3 = this;

      var canvas = document.getElementById(this.props.canvas_id);
      var context = canvas.getContext("2d");
      var start = new Date();
      var lines = 16,
          cW = context.canvas.width,
          cH = context.canvas.height;

      var draw_spinner = function draw_spinner() {
        // console.log(this.props)
        if (!_this3.props.meta.is_loading) {
          clearInterval(_this3.state.spinner_timmer);
          console.log(_this3.props.stock_data);
          console.log(_this3.props.canvas_id);
          console.log(_this3.props.stock_data.charts[_this3.props.canvas_id]);
          var chart_data = _this3.props.stock_data.charts[_this3.props.canvas_id].chart_data;
          console.log({
            chart_data: chart_data
          });
          var MA_data = add_MA_data_to_model(chart_data);
          console.log(MA_data);

          _this3.setState({
            MA_data: MA_data
          });

          return _this3.draw_chart(_this3.state.chart_background);
        }

        var rotation = parse_int_default()((new Date() - start) / 1000 * lines) / lines;
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
      this.setState({
        spinner_timmer: spinner_timmer
      });
    }
  }, {
    key: "render_canvas",
    value: function render_canvas(canvas_id, canvas_width, canvas_height) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("canvas", {
        onMouseMove: this.draw_cross_hair,
        className: "crosshair_overlay absolute",
        id: "".concat(canvas_id, "_crosshair_overlay"),
        width: canvas_width,
        height: canvas_height
      }), external_react_default.a.createElement("canvas", {
        onMouseMove: this.draw_cross_hair,
        className: "chart_canvas",
        id: canvas_id,
        width: canvas_width,
        height: canvas_height
      }));
    }
  }, {
    key: "draw_cross_hair",
    value: function draw_cross_hair(e) {
      var _this$state = this.state,
          overlay_offset = _this$state.overlay_offset,
          crosshair_overlay = _this$state.crosshair_overlay,
          min_price = _this$state.min_price,
          pennies_per_pixel = _this$state.pennies_per_pixel,
          candle_width = _this$state.candle_width,
          space_between_bars = _this$state.space_between_bars;
      var pos = {
        left: e.pageX - overlay_offset.left,
        top: e.pageY - overlay_offset.top
      };
      var left = pos.left,
          top = pos.top;
      var canvas = crosshair_overlay;

      var price_label = parse_float_default()(min_price + (canvas.height - top) * pennies_per_pixel / 100).toFixed(2);

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
      var candle_id = Math.floor(left / (candle_width + space_between_bars));
      console.log({
        candle_id: candle_id
      });
      console.log(bar_data);
      write_label(price_label, "black", 14, x_hair_ctx, label_x_pos, label_y_pos);
      var bar_data = this.props.data.chart_data[candle_id];
      if (bar_data) write_label(bar_data.date, "black", 14, x_hair_ctx, left, canvas.height);
    }
  }, {
    key: "draw_chart",
    value: function draw_chart(canvas_background_color) {
      var _this4 = this;

      var chart_data = this.props.data.chart_data;
      var _this$state2 = this.state,
          canvas = _this$state2.canvas,
          vol_canvas_share = _this$state2.vol_canvas_share,
          candle_width = _this$state2.candle_width,
          space_between_bars = _this$state2.space_between_bars;
      console.log("DRAW CART");
      var context = canvas.getContext("2d", false);
      clear_canvas(context, canvas_background_color);
      /* get min and max values */

      var min_price = this.get_min_price(chart_data);
      var max_price = this.get_max_price(chart_data);
      var max_vol = this.get_max_vol(chart_data);
      console.log({
        min_price: min_price,
        max_price: max_price,
        max_vol: max_vol
      });
      /* price / Time markers */

      var date_marker_position = Math.floor(chart_data.length / 10);
      console.log({
        date_marker_position: date_marker_position
      });
      console.log(chart_data.length % date_marker_position);
      console.log("chart_data length ".concat(chart_data.length));
      console.log("Candle width = ".concat(candle_width));
      var volume_canvas_height = canvas.height * vol_canvas_share; //volume will be lower 20% (should be adjustable)

      var chart_height = canvas.height * (1 - vol_canvas_share);
      var number_of_pennies = (max_price - min_price) * 100;
      var pennies_per_pixel = number_of_pennies / chart_height;
      var pixels_per_penny = chart_height / number_of_pennies;
      var pixels_per_vol = volume_canvas_height / max_vol;
      console.log({
        number_of_pennies: number_of_pennies,
        pennies_per_pixel: pennies_per_pixel,
        pixels_per_penny: pixels_per_penny,
        pixels_per_vol: pixels_per_vol
      });
      this.setState({
        volume_canvas_height: volume_canvas_height,
        chart_height: chart_height,
        min_price: min_price,
        max_price: max_price,
        max_vol: max_vol,
        number_of_pennies: number_of_pennies,
        pennies_per_pixel: pennies_per_pixel,
        pixels_per_penny: pixels_per_penny,
        pixels_per_vol: pixels_per_vol
      });
      this.draw_price_markers(context, min_price, max_price);
      var _this$state$MA_data = this.state.MA_data,
          MA_20 = _this$state$MA_data.MA_20,
          MA_50 = _this$state$MA_data.MA_50,
          MA_200 = _this$state$MA_data.MA_200;
      this.draw_MA(MA_20, "green", context);
      this.draw_MA(MA_50, "blue", context);
      this.draw_MA(MA_200, "red", context);
      chart_data.forEach(function (data, count) {
        var candle_position = count * candle_width + space_between_bars * count;
        if (count % date_marker_position == 0) _this4.draw_date_marker(candle_position, candle_width, data, canvas);

        _this4.draw_candle(context, candle_position, data, candle_width, pixels_per_penny, pixels_per_vol);
      });
    }
  }, {
    key: "draw_date_marker",
    value: function draw_date_marker(candle_position, candle_width, data, canvas) {
      console.log(candle_position);
      console.log(data); // console.log(canvas)

      var context = canvas.getContext("2d");
      var date_time = this.parsed_date_time(data.date, data.label);
      console.log(date_time);
      context.beginPath();
      context.moveTo(candle_position + candle_width / 2, 0);
      context.lineTo(candle_position + candle_width / 2, canvas.height);
      context.stroke(); // context.fillStyle = "white";
      // context.font = "bold 10px Arial";
      // let text = context.measureText(date_time)
      // context.fillText(date_time, candle_position - (text.width/2), canvas.height);
    }
  }, {
    key: "draw_price_markers",
    value: function draw_price_markers(context, min, max) {
      var chart_height = this.state.chart_height;
      var canvas = context.canvas;
      var range = max - min;

      var intervals = parse_float_default()(range / 5).toFixed(4);

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

          var price_label = parse_float_default()(min + marker_count * intervals).toFixed(2);

          var text = context.measureText(price_label);
          write_label(price_label, 'black', 10, context, canvas.width - text.width, chart_height - x);
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
    key: "get_min_price",
    value: function get_min_price(data) {
      console.log(data);
      return data.reduce(function (min, p) {
        return p.low < min ? p.low : min;
      }, data[0].low);
    }
  }, {
    key: "get_max_price",
    value: function get_max_price(data) {
      return data.reduce(function (max, p) {
        return p.high > max ? p.high : max;
      }, data[0].high);
    }
  }, {
    key: "get_max_vol",
    value: function get_max_vol(data) {
      return data.reduce(function (max, p) {
        return p.volume > max ? p.volume : max;
      }, data[0].volume);
    } // draw_candle(1, 100, 0, {low:0, high:80, open:75, close:80})

  }, {
    key: "draw_candle",
    value: function draw_candle(context, candle_position, candle_data, candle_width, pixels_per_penny, pixels_per_vol) {
      var _this$state3 = this.state,
          max_price = _this$state3.max_price,
          max_vol = _this$state3.max_vol; // console.log({ pennies_per_pixel })
      // console.log({ pixels_per_penny })
      // const total_range_in_pennies = canvas.height*pennies_per_pixel
      // console.log({total_range_in_pennies})
      // console.log({ candle_data})
      // console.log((min_max.max - candle_data.high) * 100 * pixels_per_penny)
      // console.log((min_max.max - candle_data.low) * 100 * pixels_per_penny)
      // console.log(candle_position + (candle_width / 2))

      context.beginPath();
      context.moveTo(candle_position + candle_width / 2, (max_price - candle_data.high) * 100 * pixels_per_penny);
      context.lineTo(candle_position + candle_width / 2, (max_price - candle_data.low) * 100 * pixels_per_penny);
      context.stroke(); //candle rect

      var candle_height;

      if (candle_data.open > candle_data.close) {
        // console.log('red')
        context.fillStyle = "red";
        candle_height = (candle_data.open - candle_data.close) * 100 * pixels_per_penny;
      } else if (candle_data.open == candle_data.close) {
        // console.log('black')
        context.fillStyle = "black";
        candle_height = 1;
      } else {
        // console.log('green')
        context.fillStyle = "green";
        candle_height = (candle_data.close - candle_data.open) * 100 * pixels_per_penny;
      }

      this.draw_volume(candle_position, max_vol, candle_data, candle_width, context, pixels_per_vol);
      context.fillRect(candle_position, (max_price - candle_data.open) * 100 * pixels_per_penny, candle_width, candle_height); //open line
      // context.moveTo((candle_position + (candle_width/2))-(candle_width/2), high - candle_data.open);
      // context.lineTo((candle_position + (candle_width/2)) + (candle_width / 2), high - candle_data.open)
      // context.stroke();
      //closing line
    }
  }, {
    key: "draw_MA",
    value: function draw_MA(data, color, context) {
      var canvas = context.canvas;
      var _this$state4 = this.state,
          candle_width = _this$state4.candle_width,
          space_between_bars = _this$state4.space_between_bars,
          min_price = _this$state4.min_price,
          max_price = _this$state4.max_price,
          number_of_pennies = _this$state4.number_of_pennies,
          pennies_per_pixel = _this$state4.pennies_per_pixel,
          pixels_per_penny = _this$state4.pixels_per_penny,
          pixels_per_vol = _this$state4.pixels_per_vol,
          x_offset = _this$state4.x_offset;
      var symbol = this.props.chart_id;
      var width = canvas.width;
      var candle_count = width / (candle_width + space_between_bars);
      console.log({
        candle_count: candle_count
      });
      var MA_data = data;
      var data_length = MA_data.length;
      var new_data;

      if (x_offset == 0) {
        new_data = MA_data.slice(candle_count * -1);
      } else {
        var end_of_data = data_length - x_offset - candle_count;
        if (end_of_data < 0) end_of_data = 0;
        if (x_offset + candle_count > data_length) Main_data.canvas_data[0].x_offset = x_offset = data_length - candle_count;
        new_data = MA_data.slice(end_of_data, x_offset * -1);
      }

      context.strokeStyle = "".concat(color);
      new_data.forEach(function (d, count) {
        if (!new_data[count - 1]) return console.log("COUNT IS 0");
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
      var _this$state5 = this.state,
          canvas_width = _this$state5.canvas_width,
          canvas_height = _this$state5.canvas_height;
      var _this$props = this.props,
          canvas_id = _this$props.canvas_id,
          chart_data = _this$props.chart_data,
          meta = _this$props.meta;
      var is_loading = meta.is_loading;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", null, is_loading && external_react_default.a.createElement("p", null, "Loading Data...."), " "), " ", canvas_width && canvas_height && this.render_canvas(canvas_id, canvas_width, canvas_height));
    }
  }]);

  return Canvas_Chart;
}(external_react_default.a.Component);

function mapStateToProps(state) {
  var stock_data = state.stock_data,
      meta = state.meta;
  return {
    stock_data: stock_data,
    meta: meta
  };
}

/* harmony default export */ var charts_Canvas_Chart = (Object(external_react_redux_["connect"])(mapStateToProps)(Object(router_["withRouter"])(Canvas_Chart_Canvas_Chart)));

function clear_canvas(context, canvas_background_color) {
  var cW = context.canvas.width,
      cH = context.canvas.height;
  context.clearRect(0, 0, cW, cH);
  context.fillStyle = canvas_background_color;
  context.fillRect(0, 0, cW, cH);
}

function write_label(text, color, size, ctx, x, y) {
  ctx.fillStyle = "white";
  ctx.font = "bold ".concat(size, "px Arial");
  var label = text;
  var text_width = ctx.measureText(label).width;
  ctx.fillRect(x, y, text_width, -14);
  ctx.fillStyle = "black";
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

  console.log("done with ");
  var after_cal = new Date().getTime();
  console.log(after_cal - before_cal);
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
    close: parse_float_default()((close / length).toFixed(2)) // high: parseFloat((high / length).toFixed(2)),
    // low: parseFloat((low / length).toFixed(2))

  };
  return price_average_obj;
}

function slice_data(start, end, array) {
  return array.slice(start, end);
}
// CONCATENATED MODULE: ./pages/chart.js

















var chart_Account_Profile =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Account_Profile, _React$Component);

  function Account_Profile(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Account_Profile);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Account_Profile).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(createClass["a" /* default */])(Account_Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          symbol = _this$props.symbol,
          stock_data = _this$props.stock_data;
      return external_react_default.a.createElement(Main_Layout["a" /* default */], null, external_react_default.a.createElement("div", {
        className: "p-5"
      }, external_react_default.a.createElement("div", {
        className: "row flex_center"
      }, external_react_default.a.createElement("div", {
        className: "col flex_center"
      }, external_react_default.a.createElement("h1", null, symbol))), external_react_default.a.createElement("div", {
        className: "row flex_center"
      }, external_react_default.a.createElement("div", {
        className: "col-sm-12 vh_100"
      }, external_react_default.a.createElement(charts_Canvas_Chart, {
        canvas_id: symbol,
        data: stock_data.charts[symbol]
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(ctx) {
        var symbol, store, req, state, dispatch, stock_data, meta, symbol_data;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
                return Object(chart_data_utils["b" /* fetch_selected_chart_data */])(symbol, {
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
}(external_react_default.a.Component);

function chart_mapStateToProps(state) {
  var user = state.user,
      stock_data = state.stock_data,
      meta = state.meta;
  return {
    user: user,
    stock_data: stock_data,
    meta: meta
  };
}

/* harmony default export */ var chart = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(chart_mapStateToProps)(Object(router_["withRouter"])(chart_Account_Profile)));

/***/ }),

/***/ "yLsn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "zQQD":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ })

/******/ });