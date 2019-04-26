webpackHotUpdate("static/development/pages/chart.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux-toastr */ "../node_modules/react-redux-toastr/lib/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_MA_analysis_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/MA_analysis_actions */ "./redux/actions/MA_analysis_actions.js");







var _jsxFileName = "/home/dave/code/next_stocks/next_app/components/charts/Canvas_Chart.js";







var Canvas_Chart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Canvas_Chart, _React$Component);

  function Canvas_Chart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Canvas_Chart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Canvas_Chart).call(this, props));
    _this.state = {
      canvas_width: null,
      canvas_height: null,
      chart_height: '',
      vol_canvas_height: '',
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
      overlay_offset: '',
      symbol: "",
      spinner_timmer: "",
      MA_data: {}
    }; // this.draw_chart = this.draw_chart.bind(this)

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Canvas_Chart, [{
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
        var dom_node = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this);
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
          var overlay_offset = document.getElementById('MSFT_crosshair_overlay').getBoundingClientRect();

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

          return _this3.draw_chart("black");
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
      this.setState({
        spinner_timmer: spinner_timmer
      });
    }
  }, {
    key: "render_canvas",
    value: function render_canvas(canvas_id, canvas_width, canvas_height) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        onMouseMove: this.draw_cross_hair,
        className: "crosshair_overlay absolute",
        id: "".concat(canvas_id, "_crosshair_overlay"),
        width: canvas_width,
        height: canvas_height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        onMouseMove: this.draw_cross_hair,
        className: "chart_canvas",
        id: canvas_id,
        width: canvas_width,
        height: canvas_height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }));
    }
  }, {
    key: "draw_cross_hair",
    value: function draw_cross_hair(e) {
      console.log(e.clientX);
      console.log(e.screenX);
      console.log(e.pageX);
      var pos = {
        left: e.pageX - this.state.overlay_offset.left,
        top: e.pageY - this.state.overlay_offset.top
      };
      console.log({
        pos: pos
      }); // let canvas = Main_data.canvas_data[0].crosshair_overlay;
      // // let vol_canvas = Main_data.canvas_data[0].volume_canvas_overlay
      // let min_max = Main_data.canvas_data[0].min_max;
      // var pennies_per_pixel = Main_data.canvas_data[0].pennies_per_pixel;
      // // console.log({x, y})
      // let price_label = parseFloat(
      //   min_max.min + ((canvas.height - y) * pennies_per_pixel) / 100
      // ).toFixed(3);
      // // console.log(price_label)
      // // console.log({x, y})
      // let x_hair_ctx = canvas.getContext("2d");
      // // let x_hair_vol_ctx = vol_canvas.getContext('2d')
      // x_hair_ctx.clearRect(0, 0, canvas.width, canvas.height);
      // vol_ctx.clearRect(
      //   0,
      //   0,
      //   volume_canvas_overlay.width,
      //   volume_canvas_overlay.height
      // );
      // //horizontal crosshair line on chart
      // x_hair_ctx.beginPath();
      // x_hair_ctx.moveTo(0, y);
      // x_hair_ctx.lineTo(canvas.width, y);
      // x_hair_ctx.stroke();
      // //vertical crosshair line on chart
      // x_hair_ctx.beginPath();
      // x_hair_ctx.moveTo(x, 0);
      // x_hair_ctx.lineTo(x, canvas.height);
      // x_hair_ctx.stroke();
      // //vertical crosshairline on volume
      // vol_ctx.beginPath();
      // vol_ctx.moveTo(x, 0);
      // vol_ctx.lineTo(x, volume_canvas_overlay.height);
      // vol_ctx.stroke();
      // write_label(price_label, "white", 14, x_hair_ctx, x, y);
    }
  }, {
    key: "draw_chart",
    value: function draw_chart(canvas_background_color) {
      var _this4 = this;

      var chart_data = this.props.data.chart_data;
      var _this$state = this.state,
          canvas = _this$state.canvas,
          vol_canvas_share = _this$state.vol_canvas_share,
          candle_width = _this$state.candle_width,
          space_between_bars = _this$state.space_between_bars;
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
          write_label(price_label, "red", 10, context, canvas.width - text.width * 2, chart_height - x);
          marker_count++;
        }
      }
    }
  }, {
    key: "draw_volume",
    value: function draw_volume(candle_position, max_vol, data, candle_width, ctx, pixels_per_vol) {
      var canvas = ctx.canvas;
      console.log(canvas.height - data.volume);
      console.log(canvas.height - data.volume);
      console.log(canvas.height - data.volume); // ctx.fillStyle = color;

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
      var _this$state2 = this.state,
          max_price = _this$state2.max_price,
          max_vol = _this$state2.max_vol; // console.log({ pennies_per_pixel })
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
      var _this$state3 = this.state,
          candle_width = _this$state3.candle_width,
          space_between_bars = _this$state3.space_between_bars,
          min_price = _this$state3.min_price,
          max_price = _this$state3.max_price,
          number_of_pennies = _this$state3.number_of_pennies,
          pennies_per_pixel = _this$state3.pennies_per_pixel,
          pixels_per_penny = _this$state3.pixels_per_penny,
          pixels_per_vol = _this$state3.pixels_per_vol,
          x_offset = _this$state3.x_offset;
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
      var _this$state4 = this.state,
          canvas_width = _this$state4.canvas_width,
          canvas_height = _this$state4.canvas_height;
      var _this$props = this.props,
          canvas_id = _this$props.canvas_id,
          chart_data = _this$props.chart_data,
          meta = _this$props.meta;
      var is_loading = meta.is_loading;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, is_loading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, "Loading Data...."), " "), " ", canvas_width && canvas_height && this.render_canvas(canvas_id, canvas_width, canvas_height));
    }
  }]);

  return Canvas_Chart;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function mapStateToProps(state) {
  var stock_data = state.stock_data,
      meta = state.meta;
  return {
    stock_data: stock_data,
    meta: meta
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Canvas_Chart)));

function clear_canvas(context, canvas_background_color) {
  var cW = context.canvas.width,
      cH = context.canvas.height;
  context.clearRect(0, 0, cW, cH); // context.fillStyle = canvas_background_color
  // context.fillRect(0, 0, cW, cH);
}

function write_label(text, color, size, ctx, x, y) {
  ctx.fillStyle = color;
  ctx.font = "bold ".concat(size, "px Arial");
  var label = text;
  var text = ctx.measureText(label);
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
    close: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()((close / length).toFixed(2)) // high: parseFloat((high / length).toFixed(2)),
    // low: parseFloat((low / length).toFixed(2))

  };
  return price_average_obj;
}

function slice_data(start, end, array) {
  return array.slice(start, end);
}

/***/ })

})
//# sourceMappingURL=chart.js.2840348d831a6cd183ca.hot-update.js.map