import React from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import { load_more_MA_results } from "../../redux/actions/MA_analysis_actions";

class Canvas_Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      chart_background:"white"
    };
    this.draw_cross_hair = this.draw_cross_hair.bind(this);
  }
  componentDidMount() {
    console.log("canvas mounted");
    this.make_canvas_full_screen();
  }
  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    console.log(prevProps);
    if (!prevProps.meta.is_loading && this.props.meta.is_loading) {
      this.run_spinner();
    }
  }
  make_canvas_full_screen() {
    if (typeof window !== "undefined") {
      let dom_node = ReactDOM.findDOMNode(this);
      let { canvas_id } = this.props;
      let canvas_width = dom_node.parentElement.clientWidth * 0.95;
      let canvas_height = dom_node.parentElement.clientHeight;
      this.setState({ canvas_width, canvas_height });
      setTimeout(() => {
        let canvas = document.getElementById(this.props.canvas_id);
        let crosshair_overlay = document.getElementById(
          `${this.props.canvas_id}_crosshair_overlay`
        );
        let overlay_offset = document
          .getElementById(`${this.props.canvas_id}_crosshair_overlay`)
          .getBoundingClientRect();
        this.run_spinner(canvas);
        this.setState({ overlay_offset, canvas, crosshair_overlay });
        console.log("does this run?");
        console.log(this);
      }, 0);
    }
  }
  run_spinner() {
    var canvas = document.getElementById(this.props.canvas_id);
    var context = canvas.getContext("2d");
    var start = new Date();
    var lines = 16,
      cW = context.canvas.width,
      cH = context.canvas.height;

    var draw_spinner = () => {
      // console.log(this.props)
      if (!this.props.meta.is_loading) {
        clearInterval(this.state.spinner_timmer);
        console.log(this.props.stock_data);
        console.log(this.props.canvas_id);
        console.log(this.props.stock_data.charts[this.props.canvas_id]);
        let chart_data = this.props.stock_data.charts[this.props.canvas_id]
          .chart_data;
        console.log({ chart_data });
        let MA_data = add_MA_data_to_model(chart_data);
        console.log(MA_data);
        this.setState({ MA_data });
        return this.draw_chart(this.state.chart_background);
      }
      var rotation = parseInt(((new Date() - start) / 1000) * lines) / lines;
      context.save();
      context.clearRect(0, 0, cW, cH);
      context.translate(cW / 2, cH / 2);
      context.rotate(Math.PI * 2 * rotation);
      for (var i = 0; i < lines; i++) {
        context.beginPath();
        context.rotate((Math.PI * 2) / lines);
        context.moveTo(cW / 10, 0);
        context.lineTo(cW / 4, 0);
        context.lineWidth = cW / 30;
        context.strokeStyle = "rgba(0, 0, 0," + i / lines + ")";
        context.stroke();
      }
      context.restore();
    };
    let spinner_timmer = setInterval(draw_spinner, 1000 / 30);
    this.setState({ spinner_timmer });
  }
  render_canvas(canvas_id, canvas_width, canvas_height) {
    return (
      <>
        <canvas
          onMouseMove={this.draw_cross_hair}
          className="crosshair_overlay absolute"
          id={`${canvas_id}_crosshair_overlay`}
          width={canvas_width}
          height={canvas_height}
        />
        <canvas
          onMouseMove={this.draw_cross_hair}
          className="chart_canvas"
          id={canvas_id}
          width={canvas_width}
          height={canvas_height}
        />
      </>
    );
  }
  draw_cross_hair(e) {

    let {
      overlay_offset,
      crosshair_overlay,
      min_price,
      pennies_per_pixel,
      candle_width, space_between_bars
    } = this.state;

    let pos = {
      left: e.pageX - overlay_offset.left,
      top: e.pageY - overlay_offset.top
    };
    let { left, top } = pos;
    let canvas = crosshair_overlay;

    let price_label = parseFloat(
      min_price + ((canvas.height - top) * pennies_per_pixel) / 100
    ).toFixed(2);

    let x_hair_ctx = canvas.getContext("2d");

    x_hair_ctx.clearRect(0, 0, canvas.width, canvas.height);

    //horizontal crosshair line on chart
    x_hair_ctx.beginPath();
    x_hair_ctx.moveTo(0, top);
    x_hair_ctx.lineTo(canvas.width, top);
    x_hair_ctx.stroke();
    //vertical crosshair line on chart
    x_hair_ctx.beginPath();
    x_hair_ctx.moveTo(left, 0);
    x_hair_ctx.lineTo(left, canvas.height);
    x_hair_ctx.stroke();
    /* flip label near edges */
    let label_x_pos, label_y_pos;
    if(left + 50 > canvas.width )label_x_pos=left-50
    else label_x_pos = left+10
    if(top + 50 > canvas.height )label_y_pos=top-50
    else label_y_pos = top+15

    let candle_id = Math.floor(left/(candle_width+space_between_bars))
    console.log({candle_id})
    console.log(bar_data)
    
    write_label(price_label, "black", 14, x_hair_ctx, label_x_pos, label_y_pos);
    const  bar_data  = this.props.data.chart_data[candle_id]
    if(bar_data)write_label(bar_data.date, "black", 14, x_hair_ctx, left, canvas.height);
  }

  draw_chart(canvas_background_color) {
    const { chart_data } = this.props.data;
    const {
      canvas,
      vol_canvas_share,
      candle_width,
      space_between_bars
    } = this.state;

    console.log("DRAW CART");
    let context = canvas.getContext("2d", false);
    clear_canvas(context, canvas_background_color);

    /* get min and max values */
    let min_price = this.get_min_price(chart_data);
    let max_price = this.get_max_price(chart_data);
    let max_vol = this.get_max_vol(chart_data);
    console.log({ min_price, max_price, max_vol });

    /* price / Time markers */
    let date_marker_position = Math.floor(chart_data.length / 10);
    console.log({ date_marker_position });
    console.log(chart_data.length % date_marker_position);

    console.log(`chart_data length ${chart_data.length}`);
    console.log(`Candle width = ${candle_width}`);
    const volume_canvas_height = canvas.height * vol_canvas_share; //volume will be lower 20% (should be adjustable)
    const chart_height = canvas.height * (1 - vol_canvas_share);
    let number_of_pennies = (max_price - min_price) * 100;
    let pennies_per_pixel = number_of_pennies / chart_height;
    let pixels_per_penny = chart_height / number_of_pennies;
    let pixels_per_vol = volume_canvas_height / max_vol;

    console.log({
      number_of_pennies,
      pennies_per_pixel,
      pixels_per_penny,
      pixels_per_vol
    });
    this.setState({
      volume_canvas_height,
      chart_height,
      min_price,
      max_price,
      max_vol,
      number_of_pennies,
      pennies_per_pixel,
      pixels_per_penny,
      pixels_per_vol
    });

    this.draw_price_markers(context, min_price, max_price);
    let { MA_20, MA_50, MA_200 } = this.state.MA_data;
    this.draw_MA(MA_20, "green", context);
    this.draw_MA(MA_50, "blue", context);
    this.draw_MA(MA_200, "red", context);

    chart_data.forEach((data, count) => {
      const candle_position = count * candle_width + space_between_bars * count;

      if (count % date_marker_position == 0)
        this.draw_date_marker(candle_position, candle_width, data, canvas);

      this.draw_candle(
        context,
        candle_position,
        data,
        candle_width,
        pixels_per_penny,
        pixels_per_vol
      );
    });
  }
  draw_date_marker(candle_position, candle_width, data, canvas) {
    console.log(candle_position);
    console.log(data);
    // console.log(canvas)
    let context = canvas.getContext("2d");
    let date_time = this.parsed_date_time(data.date, data.label);
    console.log(date_time);
    context.beginPath();
    context.moveTo(candle_position + candle_width / 2, 0);
    context.lineTo(candle_position + candle_width / 2, canvas.height);
    context.stroke();
    // context.fillStyle = "white";
    // context.font = "bold 10px Arial";
    // let text = context.measureText(date_time)
    // context.fillText(date_time, candle_position - (text.width/2), canvas.height);
  }
  draw_price_markers(context, min, max) {
    let { chart_height } = this.state;
    let canvas = context.canvas;
    let range = max - min;

    let intervals = parseFloat(range / 5).toFixed(4);
    let marker_count = 0;
    context.strokeStyle = `rgb(222, 222, 222)`;

    let price_marker_position = Math.floor(chart_height / 5);
    // console.log(price_marker_position)
    // console.log({number_of_pennies, price_marker_position, pixels_per_penny})
    for (let x = 0; x < chart_height; x++) {
      if (x % price_marker_position == 0) {
        context.beginPath();
        context.moveTo(0, chart_height - x);
        context.lineTo(canvas.width, chart_height - x);
        context.stroke();
        let price_label = parseFloat(min + marker_count * intervals).toFixed(2);

        let text = context.measureText(price_label);
        write_label(
          price_label,
          'black',
          10,
          context,
          canvas.width - text.width ,
          chart_height - x
        );
        marker_count++;
      }
    }
  }
  draw_volume(
    candle_position,
    max_vol,
    data,
    candle_width,
    ctx,
    pixels_per_vol
  ) {
    let { canvas } = ctx;

    ctx.fillRect(
      candle_position,
      canvas.height - data.volume * pixels_per_vol,
      candle_width,
      data.volume * pixels_per_vol
    );
  }
  parsed_date_time(date, label) {
    // console.log(date, label)
    let month_day = date.slice(-4);
    let day = month_day.slice(-2);
    let month = month_day.slice(0, 2);
    let year = date.slice(0, 4);

    // console.log({ year, month_day, month, day})
    // console.log(date)
    return `${month}/${day}/${year} - ${label}`;
  }

  get_min_price(data) {
    console.log(data);
    return data.reduce((min, p) => (p.low < min ? p.low : min), data[0].low);
  }
  get_max_price(data) {
    return data.reduce((max, p) => (p.high > max ? p.high : max), data[0].high);
  }
  get_max_vol(data) {
    return data.reduce(
      (max, p) => (p.volume > max ? p.volume : max),
      data[0].volume
    );
  }
  // draw_candle(1, 100, 0, {low:0, high:80, open:75, close:80})
  draw_candle(
    context,
    candle_position,
    candle_data,
    candle_width,
    pixels_per_penny,
    pixels_per_vol
  ) {
    var { max_price, max_vol } = this.state;

    // console.log({ pennies_per_pixel })
    // console.log({ pixels_per_penny })

    // const total_range_in_pennies = canvas.height*pennies_per_pixel
    // console.log({total_range_in_pennies})
    // console.log({ candle_data})
    // console.log((min_max.max - candle_data.high) * 100 * pixels_per_penny)
    // console.log((min_max.max - candle_data.low) * 100 * pixels_per_penny)
    // console.log(candle_position + (candle_width / 2))
    context.beginPath();
    context.moveTo(
      candle_position + candle_width / 2,
      (max_price - candle_data.high) * 100 * pixels_per_penny
    );
    context.lineTo(
      candle_position + candle_width / 2,
      (max_price - candle_data.low) * 100 * pixels_per_penny
    );
    context.stroke();

    //candle rect
    var candle_height;
    if (candle_data.open > candle_data.close) {
      // console.log('red')
      context.fillStyle = "red";
      candle_height =
        (candle_data.open - candle_data.close) * 100 * pixels_per_penny;
    } else if (candle_data.open == candle_data.close) {
      // console.log('black')
      context.fillStyle = "black";
      candle_height = 1;
    } else {
      // console.log('green')
      context.fillStyle = "green";
      candle_height =
        (candle_data.close - candle_data.open) * 100 * pixels_per_penny;
    }
    this.draw_volume(
      candle_position,
      max_vol,
      candle_data,
      candle_width,
      context,
      pixels_per_vol
    );

    context.fillRect(
      candle_position,
      (max_price - candle_data.open) * 100 * pixels_per_penny,
      candle_width,
      candle_height
    );
    //open line
    // context.moveTo((candle_position + (candle_width/2))-(candle_width/2), high - candle_data.open);
    // context.lineTo((candle_position + (candle_width/2)) + (candle_width / 2), high - candle_data.open)
    // context.stroke();

    //closing line
  }

  draw_MA(data, color, context) {
    let { canvas } = context;

    let {
      candle_width,
      space_between_bars,
      min_price,
      max_price,
      number_of_pennies,
      pennies_per_pixel,
      pixels_per_penny,
      pixels_per_vol,
      x_offset
    } = this.state;

    let symbol = this.props.chart_id;

    let width = canvas.width;
    let candle_count = width / (candle_width + space_between_bars);
    console.log({ candle_count });
    let MA_data = data;
    let data_length = MA_data.length;
    let new_data;
    if (x_offset == 0) {
      new_data = MA_data.slice(candle_count * -1);
    } else {
      let end_of_data = data_length - x_offset - candle_count;
      if (end_of_data < 0) end_of_data = 0;
      if (x_offset + candle_count > data_length)
        Main_data.canvas_data[0].x_offset = x_offset =
          data_length - candle_count;

      new_data = MA_data.slice(end_of_data, x_offset * -1);
    }
    context.strokeStyle = `${color}`;
    new_data.forEach((d, count) => {
      if (!new_data[count - 1]) return console.log("COUNT IS 0");
      const candle_position = count * candle_width + space_between_bars * count;
      const prev_candle_position =
        (count - 1) * candle_width + space_between_bars * (count - 1);
      context.beginPath();
      let move_to_x = prev_candle_position + candle_width / 2;

      let move_to_y =
        (max_price - new_data[count - 1].close) * 100 * pixels_per_penny;
      context.moveTo(move_to_x, move_to_y);
      let line_to_x = candle_position + candle_width / 2;
      let line_to_y = (max_price - d.close) * 100 * pixels_per_penny;
      context.lineTo(line_to_x, line_to_y);

      context.stroke();
    });
  }

  render() {
    let { canvas_width, canvas_height } = this.state;
    let { canvas_id, chart_data, meta } = this.props;
    let { is_loading } = meta;

    return (
      <>
        <span>{is_loading && <p>Loading Data....</p>} </span>{" "}
        {/* this is here to make it work, dont remove */}
        {canvas_width &&
          canvas_height &&
          this.render_canvas(canvas_id, canvas_width, canvas_height)}
      </>
    );
  }
}

function mapStateToProps(state) {
  const { stock_data, meta } = state;
  return { stock_data, meta };
}

export default connect(mapStateToProps)(withRouter(Canvas_Chart));

function clear_canvas(context, canvas_background_color) {
  let cW = context.canvas.width,
    cH = context.canvas.height;
  context.clearRect(0, 0, cW, cH);
  context.fillStyle = canvas_background_color
  context.fillRect(0, 0, cW, cH);
}

function write_label(text, color, size, ctx, x, y) {
  ctx.fillStyle = "white";
  ctx.font = `bold ${size}px Arial`;
  let label = text;
  let text_width = ctx.measureText(label).width;
  ctx.fillRect(x, y, text_width, -14);
  ctx.fillStyle = "black";
  ctx.fillText(label, x, y);
}

function add_MA_data_to_model(daily_data) {
  let before_cal = new Date().getTime();
  /* ensure we have data for the symbol*/
  let MA_obj = {
    MA_20: [],
    MA_50: [],
    MA_200: []
  };

  let length = daily_data.length;

  let counter = -1;
  let MA_20 = 20; //minumum MA to calculater, hard coded..
  let MA_50 = 50; //minumum MA to calculater, hard coded..
  let MA_200 = 200; //minumum MA to calculater, hard coded..
  /* Start a loop */
  while (counter < length - MA_20) {
    counter++;
    /* start from the begining of the array */
    let end_counter_20 = MA_20 + counter;
    let end_counter_50 = MA_50 + counter;
    let end_counter_200 = MA_200 + counter;
    /* get the number MA items in array */
    /* 20 */
    if (length >= MA_20) {
      let slice_20 = slice_data(counter, end_counter_20, daily_data);
      let price_MA_data = get_price_type_averages(slice_20);

      MA_obj.MA_20[end_counter_20 - 1] = price_MA_data;
    }
    if (length >= end_counter_50) {
      let slice_50 = slice_data(counter, end_counter_50, daily_data);
      let price_MA_data = get_price_type_averages(slice_50);

      MA_obj.MA_50[end_counter_50 - 1] = price_MA_data;
    }
    if (length >= end_counter_200) {
      let slice_200 = slice_data(counter, end_counter_200, daily_data);
      let price_MA_data = get_price_type_averages(slice_200);

      MA_obj.MA_200[end_counter_200 - 1] = price_MA_data;
    }
  }

  console.log(`done with `);
  let after_cal = new Date().getTime();
  console.log(after_cal - before_cal);
  return MA_obj;
}

/* average all 4 price types */
function get_price_type_averages(array_of_price_data) {
  let length = array_of_price_data.length;
  // let open = array_of_price_data.reduce((a, b) => a + b["open"], 0);
  let close = array_of_price_data.reduce((a, b) => a + b["close"], 0);
  // let high = array_of_price_data.reduce((a, b) => a + b["high"], 0);
  // let low = array_of_price_data.reduce((a, b) => a + b["low"], 0);
  let price_average_obj = {
    // open: parseFloat((open / length).toFixed(2)),
    close: parseFloat((close / length).toFixed(2))
    // high: parseFloat((high / length).toFixed(2)),
    // low: parseFloat((low / length).toFixed(2))
  };
  return price_average_obj;
}

function slice_data(start, end, array) {
  return array.slice(start, end);
}
