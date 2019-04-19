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
/******/ 	return __webpack_require__(__webpack_require__.s = "f0a7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

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



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
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
        var api_server, has_symbols_data, all_stock_symbols_json, all_stock_symbols;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("asdasd");
                api_server = location.origin.api_server;
                console.log(location);
                console.log(api_server);
                _context.prev = 4;
                has_symbols_data = this.props.stock_data.has_symbols_data;

                if (!has_symbols_data) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                _context.next = 10;
                return external_isomorphic_fetch_default()("\n        /stock/get_symbols_data\n      ");

              case 10:
                all_stock_symbols_json = _context.sent;
                _context.next = 13;
                return all_stock_symbols_json.json();

              case 13:
                all_stock_symbols = _context.sent;
                console.log(all_stock_symbols);
                this.props.dispatch(Object(stock_actions["f" /* set_symbols_data */])(all_stock_symbols));
                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](4);
                console.log("err");
                console.log(_context.t0);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 18]]);
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
    }
  }, {
    key: "handle_search",
    value: function handle_search(e) {
      e.preventDefault();
      console.log(this.state.search);
    }
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
      filtered_stock_list = [].concat(_toConsumableArray(filtered_stock_list), _toConsumableArray(symbol_starts_with));

      if (filtered_stock_list.length < 100) {
        /* check name starts with */
        name_starts_with = full_list.filter(function (list_item) {
          return list_item.name.toLowerCase().startsWith(search_text);
        });
        console.log(name_starts_with);
        filtered_stock_list = [].concat(_toConsumableArray(filtered_stock_list), _toConsumableArray(name_starts_with));
      }

      if (filtered_stock_list.length < 100) {
        /* check symbols */
        symbol_list = full_list.filter(function (list_item) {
          return list_item.symbol.toLowerCase().includes(search_text);
        });
        console.log(symbol_list);
        filtered_stock_list = [].concat(_toConsumableArray(filtered_stock_list), _toConsumableArray(symbol_list));
      }

      if (filtered_stock_list.length < 100) {
        /* check name */
        name_list = full_list.filter(function (list_item) {
          return list_item.name.toLowerCase().includes(search_text);
        });
        console.log(name_list);
        filtered_stock_list = [].concat(_toConsumableArray(filtered_stock_list), _toConsumableArray(name_list));
      }
      /* Combine the lists */


      filtered_stock_list = _toConsumableArray(new set_default.a(filtered_stock_list));
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
          return Object(chart_data_utils["b" /* view_selected_stock_symbol */])(data.symbol, _this4.props);
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
  return external_react_default.a.createElement("form", {
    className: "form-inline my-2 my-lg-0 absolute right_10_px"
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
    })
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

/***/ "HyVD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return view_selected_stock_symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetch_sector_data; });
/* unused harmony export fetch_selected_chart_data */
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
            router.push("/chart?symbol=".concat(symbol));
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
function is_loading(is_laoding) {
  return {
    type: "IS_LOADING",
    is_laoding: is_laoding
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

/***/ "f0a7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zAwt");


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

/***/ "nnBK":
/***/ (function(module, exports) {

module.exports = require("express-validator/check");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yLsn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "zAwt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yLsn");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("azxR");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Rbzu");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UrUy");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JYC+");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("R3/3");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LkAs");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Moms");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bMj6");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("hZod");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YKN3");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tEuJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("J5aF");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_utils_auth_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("heMW");
/* harmony import */ var _components_charts_chart_data_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("HyVD");
/* harmony import */ var _layouts_Main_Layout_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("4cCf");
/* harmony import */ var express_validator_check__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("nnBK");
/* harmony import */ var express_validator_check__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(express_validator_check__WEBPACK_IMPORTED_MODULE_19__);






















var MA_Analysis =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(MA_Analysis, _React$Component);

  function MA_Analysis(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, MA_Analysis);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(MA_Analysis).call(this, props));
    _this.state = {
      number_rows: 30,
      //starting default
      sorted_prop: "volume",
      sort_state: false,
      saved_queries: [],
      saved_query_results: [],
      current_query_results: [],
      sorted_query_results: [],
      queries: [{
        MA: "50",
        g_l: "g",
        perc: 20
      }, {
        MA: "200",
        g_l: "l",
        perc: 2
      }]
    };
    _this.handleInput = _this.handleInput.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this));
    _this.add_query = _this.add_query.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this));
    _this.submit_query = _this.submit_query.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this));
    _this.remove_query = _this.remove_query.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this));
    _this.load_more_data = _this.load_more_data.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(MA_Analysis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "load_more_data",
    value: function load_more_data() {
      var _this2 = this;

      console.log("LOAD MORE DATA");
      var number_rows = this.state.number_rows;
      this.setState({
        number_rows: this.state.number_rows + 30
      });
      /* Wait for next loops cycle to update state... */

      setTimeout(function () {
        _this2.sort_by(_this2.state.sorted_prop, true);
      }, 0);
    }
  }, {
    key: "submit_query",
    value: function () {
      var _submit_query = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var _this3 = this;

        var _csrf, resp_json, query_results, saved_queries, saved_query_results, sorted_query_results;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _csrf = this.props.meta.csrf;
                _context.next = 4;
                return fetch("/MA-query", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json" // "Content-Type": "application/x-www-form-urlencoded",

                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()({
                    query: this.state.queries,
                    _csrf: _csrf
                  })
                });

              case 4:
                resp_json = _context.sent;
                _context.next = 7;
                return resp_json.json();

              case 7:
                query_results = _context.sent;
                console.log(query_results);
                saved_queries = this.state.saved_queries;
                saved_queries.push(this.state.queries);
                saved_query_results = this.state.saved_query_results;
                saved_query_results.push(query_results);
                this.setState({
                  saved_query_results: saved_query_results
                });
                this.setState({
                  current_query_results: query_results
                });
                sorted_query_results = query_results.sort(function (a, b) {
                  return _this3.high_to_low(a, b, "volume");
                }).slice(0, 30);
                this.setState({
                  sorted_query_results: sorted_query_results
                });
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                console.log("err");
                console.log(_context.t0);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 19]]);
      }));

      function submit_query() {
        return _submit_query.apply(this, arguments);
      }

      return submit_query;
    }()
  }, {
    key: "remove_query",
    value: function remove_query(index) {
      var queries = this.state.queries;
      queries.splice(index, 1);
      this.setState({
        queries: queries
      });
    }
  }, {
    key: "add_query",
    value: function add_query() {
      console.log("add_query");
      var queries = this.state.queries;
      if (queries.length >= 3) return react_redux_toastr__WEBPACK_IMPORTED_MODULE_14__["toastr"].info("Three is enough");
      var new_query = {
        MA: "50",
        g_l: "g",
        perc: 20
      };
      queries.push(new_query);
      this.setState({
        queries: queries
      });
    }
  }, {
    key: "handleInput",
    value: function handleInput(e, key, index) {
      console.log(e.target.value);
      console.log(key);
      console.log(index);
      var value = e.target.value;
      var queries = this.state.queries;
      var query = queries[index];
      console.log(query);
      query = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, query, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, key, value));
      console.log(query);
      queries[index] = query;
      this.setState({
        queries: queries
      });
    }
  }, {
    key: "high_to_low",
    value: function high_to_low(a, b, prop) {
      console.log(a);
      console.log(b);
      console.log(prop);
      console.log(deep_value(a, prop));
      console.log(deep_value(b, prop));
      if (deep_value(a, prop) > deep_value(b, prop)) return -1;
      if (deep_value(a, prop) < deep_value(b, prop)) return 1;
      return 0;
    }
  }, {
    key: "low_to_high",
    value: function low_to_high(a, b, prop) {
      if (deep_value(a, prop) > deep_value(b, prop)) return 1;
      if (deep_value(a, prop) < deep_value(b, prop)) return -1;
      return 0;
    }
  }, {
    key: "sort_by",
    value: function sort_by(prop, flag) {
      var _this4 = this;

      console.log(prop, flag); // flag true dont switch sort_state

      var number_rows = this.state.number_rows;
      this.setState({
        sorted_prop: prop
      });
      var sort_state = this.state.sort_state;
      /* Flag for not resetting sort_state */

      if (flag) sort_state = !sort_state;

      if (sort_state) {
        this.setState({
          sort_state: false
        });
        this.setState({
          sorted_query_results: this.state.current_query_results.sort(function (a, b) {
            return _this4.high_to_low(a, b, prop);
          }).slice(0, number_rows)
        });
      } else {
        this.setState({
          sort_state: true
        });
        this.setState({
          sorted_query_results: this.state.current_query_results.sort(function (a, b) {
            return _this4.low_to_high(a, b, prop);
          }).slice(0, number_rows)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          sorted_query_results = _this$state.sorted_query_results,
          current_query_results = _this$state.current_query_results;
      var props = this.props;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_layouts_Main_Layout_js__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1", null, "Query MA Data"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "col-sm-12 "
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row flex_center"
      }, this.state.queries.map(function (query, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(MA_Select_Form, {
          remove_query: _this5.remove_query,
          perc: query.perc,
          MA: query.MA,
          g_l: query.g_l,
          key: index,
          index: index,
          handleInput: _this5.handleInput
        });
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row flex_center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Add_New_Query_Btn, {
        add_query: this.add_query
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Submit_Query, {
        submit_query: this.submit_query
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "row flex_center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "col-sm-12 col-lg-8"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Stock_List_Header, {
        sorted_prop: this.state.sorted_prop,
        sort_state: this.state.sort_state,
        sort_by: function sort_by(prop) {
          return _this5.sort_by(prop);
        } // on_sort={this}

      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: ""
      }, sorted_query_results.map(function (MA_data, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Display_Stock_Row, {
          key: index,
          index: index,
          MA_data: MA_data,
          props: props
        });
      })), current_query_results.length > 30 && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(More_Rows, {
        handle_click: this.load_more_data
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(ctx) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (ctx.req) {
                  if (!ctx.req.user) next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push("/login");
                }

                return _context2.abrupt("return", {});

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MA_Analysis;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

function mapStateToProps(state) {
  var user = state.user,
      meta = state.meta;
  return {
    user: user,
    meta: meta
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(MA_Analysis)));

var Remove_Query = function Remove_Query(_ref) {
  var remove_query = _ref.remove_query;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
    onClick: remove_query,
    type: "button",
    className: "btn btn-danger "
  }, "X");
};

var MA_Select_Form = function MA_Select_Form(_ref2) {
  var index = _ref2.index,
      _handleInput = _ref2.handleInput,
      perc = _ref2.perc,
      MA = _ref2.MA,
      g_l = _ref2.g_l,
      remove_query = _ref2.remove_query;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "row flex_center "
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-sm-12 flex_center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Remove_Query, {
    remove_query: remove_query
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-sm-12 flex_center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(MA_Average_Select, {
    index: index,
    MA: MA,
    handleInput: function handleInput(e, key, index) {
      return _handleInput(e, key, index);
    }
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(G_L_Select, {
    index: index,
    g_l: g_l,
    handleInput: function handleInput(e, key, index) {
      return _handleInput(e, key, index);
    }
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Perc_Input, {
    perc: perc,
    index: index,
    handleInput: function handleInput(e, key, index) {
      return _handleInput(e, key, index);
    }
  }))));
};

var Perc_Input = function Perc_Input(_ref3) {
  var handleInput = _ref3.handleInput,
      index = _ref3.index,
      perc = _ref3.perc;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
    htmlFor: "percent"
  }, "Percentage"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
    className: "form-control",
    type: "number",
    value: perc,
    onChange: function onChange(e) {
      return handleInput(e, "perc", "".concat(index));
    }
  }));
};

var Add_New_Query_Btn = function Add_New_Query_Btn(_ref4) {
  var add_query = _ref4.add_query;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
    onClick: add_query,
    type: "button",
    className: "btn btn-success"
  }, "Add");
};

var Submit_Query = function Submit_Query(_ref5) {
  var submit_query = _ref5.submit_query;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
    onClick: submit_query,
    type: "button",
    className: "btn btn-primary"
  }, "Get Stocks");
};

var G_L_Select = function G_L_Select(_ref6) {
  var index = _ref6.index,
      g_l = _ref6.g_l,
      handleInput = _ref6.handleInput;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
    htmlFor: "greater than less than"
  }, "Greater or Lesser than."), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("select", {
    value: g_l,
    onChange: function onChange(e) {
      return handleInput(e, "g_l", "".concat(index));
    },
    className: "form-control"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("option", {
    value: "l"
  }, "Less Than"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("option", {
    value: "g"
  }, "Greater Than")));
};

var MA_Average_Select = function MA_Average_Select(_ref7) {
  var index = _ref7.index,
      MA = _ref7.MA,
      handleInput = _ref7.handleInput;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", {
    htmlFor: "exampleFormControlInput1"
  }, "Moving Average"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("select", {
    value: MA,
    onChange: function onChange(e) {
      return handleInput(e, "MA", "".concat(index));
    },
    className: "form-control"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("option", {
    value: "20"
  }, "20"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("option", {
    value: "50"
  }, "50"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("option", {
    value: "200"
  }, "200")));
};
/* Display results components */


function Display_Stock_Row(_ref8) {
  var MA_data = _ref8.MA_data,
      index = _ref8.index,
      props = _ref8.props;
  var symbol = MA_data.symbol,
      current_MA_data = MA_data.current_MA_data;
  var MA_20 = current_MA_data.MA_20,
      MA_50 = current_MA_data.MA_50,
      MA_200 = current_MA_data.MA_200,
      meta_data = current_MA_data.meta_data,
      perc_20 = current_MA_data.perc_20,
      perc_50 = current_MA_data.perc_50,
      perc_200 = current_MA_data.perc_200;
  var close = meta_data.close,
      volume = meta_data.volume,
      vwap = meta_data.vwap;
  var class_name = index % 2 == 0 ? "ticker_row_light" : "ticker_row_dark";
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "row clickable ".concat(class_name),
    onClick: function onClick() {
      return Object(_components_charts_chart_data_utils_js__WEBPACK_IMPORTED_MODULE_17__[/* view_selected_stock_symbol */ "b"])(symbol, props);
    }
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-1 flex"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Symbol, {
    symbol: symbol
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-3 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Percent_From_Price, {
    current_close: close,
    MA_perc: perc_20,
    MA_price: MA_20.close
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-3 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Percent_From_Price, {
    current_close: close,
    MA_perc: perc_50,
    MA_price: MA_50.close
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-3 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Percent_From_Price, {
    current_close: close,
    MA_perc: perc_200,
    MA_price: MA_200.close
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-1 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Price, {
    price: close
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-1 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Volume, {
    vol: volume
  })));
}

var Stock_List_Header = function Stock_List_Header(_ref9) {
  var sort_by = _ref9.sort_by,
      sort_state = _ref9.sort_state,
      sorted_prop = _ref9.sorted_prop;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "row full-width"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "align_items_center col-1 flex"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h6", {
    onClick: function onClick() {
      return sort_by("symbol");
    }
  }, "Sym."), sort_state && sorted_prop == "symbol" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-down"
  }), !sort_state && sorted_prop == "symbol" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-up"
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "align_items_center col-3 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h6", {
    onClick: function onClick() {
      return sort_by("current_MA_data.perc_20");
    }
  }, "20 MA."), sort_state && sorted_prop == "current_MA_data.perc_20" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-down"
  }), !sort_state && sorted_prop == "current_MA_data.perc_20" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-up"
  }), " "), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "align_items_center col-3 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h6", {
    onClick: function onClick() {
      return sort_by("current_MA_data.perc_50");
    }
  }, "50 MA."), sort_state && sorted_prop == "current_MA_data.perc_50" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-down"
  }), !sort_state && sorted_prop == "current_MA_data.perc_50" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-up"
  }), " "), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "align_items_center col-3 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h6", {
    onClick: function onClick() {
      return sort_by("current_MA_data.perc_200");
    }
  }, "200 MA."), sort_state && sorted_prop == "current_MA_data.perc_200" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-down"
  }), !sort_state && sorted_prop == "current_MA_data.perc_200" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-up"
  }), " "), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "align_items_center col-1 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h6", {
    onClick: function onClick() {
      return sort_by("current_MA_data.meta_data.close");
    }
  }, "Price"), sort_state && sorted_prop == "current_MA_data.meta_data.close" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-down"
  }), !sort_state && sorted_prop == "current_MA_data.meta_data.close" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-up"
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "align_items_center col-1 flex_end"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h6", {
    onClick: function onClick() {
      return sort_by("current_MA_data.meta_data.volume");
    }
  }, "Vol."), sort_state && sorted_prop == "current_MA_data.meta_data.volume" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-down"
  }), !sort_state && sorted_prop == "current_MA_data.meta_data.volume" && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow-up"
  })));
};

var Volume = function Volume(_ref10) {
  var vol = _ref10.vol;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
    className: "ticker_vol"
  }, vol.toLocaleString("en-US"));
};

var More_Rows = function More_Rows(_ref11) {
  var handle_click = _ref11.handle_click;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    onClick: handle_click,
    className: "row flex_center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-sm-12 flex_center clickable background_grey"
  }, "LOAD MORE"));
};

var Price = function Price(_ref12) {
  var price = _ref12.price;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
    className: "ticker_price"
  }, "$", _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(price).toFixed(2).toLocaleString("en-US"));
};

var Percent_From_Price = function Percent_From_Price(_ref13) {
  var MA_price = _ref13.MA_price,
      current_close = _ref13.current_close,
      MA_perc = _ref13.MA_perc;
  var class_name;
  if (MA_price > current_close) class_name = "percentage_up";
  if (MA_price < current_close) class_name = "percentage_down";
  if (MA_price == current_close) class_name = "percentage_neutral";
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "row flex_center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-12 col-sm-6 flex_center"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Price, {
    price: MA_price
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "col-12 col-sm-6 flex_center"
  }, "(", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
    className: class_name
  }, "".concat(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(MA_perc.toLocaleString("en-US")).toFixed(2), "%")), ")"));
};

var Symbol = function Symbol(_ref14) {
  var symbol = _ref14.symbol;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
    className: "ticker_symbol"
  }, symbol);
};

var deep_value = function deep_value(obj, path) {
  return path.replace(/\[|\]\.?/g, '.').split('.').filter(function (s) {
    return s;
  }).reduce(function (acc, val) {
    return acc && acc[val];
  }, obj);
};

/***/ }),

/***/ "zQQD":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ })

/******/ });