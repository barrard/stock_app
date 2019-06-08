import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import Router from "next/router";

import { ensure_loggedin } from "../components/utils/auth.js";
import Main_Layout from "../layouts/Main_Layout.js";
import { fetch_selected_chart_data } from "../components/charts/chart_data_utils.js";
import Analysis_Chart from "../components/charts/Analysis_Chart.js";
import { Analysis_Tools } from "../components/charts/Analysis_Tools.js";
import { Analysis_Results } from "../components/charts/Analysis_Results.js";
import { Swing_High_Low } from "../components/analysis/swing_high_low.js";
import { Return_Arr_Slopes } from "../components/analysis/Return_Arr_Slopes.js";
import {
  set_analysis_results,
  set_LR_avg,
  set_LR_results
} from "../redux/actions/Chart_Analysis_actions.js";
class Account_Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_tab: "info",
      canvas_width: 12
    };
    this.set_active_tab = this.set_active_tab.bind(this);
    this.toggle_wide_mode = this.toggle_wide_mode.bind(this);
    this.analyze_high_low = this.analyze_high_low.bind(this);
    this.calc_linear_regression = this.calc_linear_regression.bind(this);
  }
  static async getInitialProps(ctx) {
    let symbol = (symbol = ctx.query.symbol);
    let { store, req } = ctx;
    let state = store.getState();
    let { dispatch } = store;
    let { stock_data, meta } = state;
    let symbol_data = stock_data.charts[symbol];
    if (!symbol) return {};
    if (!symbol_data) {
      await fetch_selected_chart_data(symbol, { meta, dispatch, ctx });
    }
    return { symbol: ctx.query.symbol };
  }

  componentDidMount() {}
  set_active_tab(tab) {
    console.log(tab);
    this.setState({ active_tab: tab });
  }

  toggle_wide_mode() {
    var { canvas_width } = this.state;
    canvas_width = canvas_width == 6 ? 12 : 6;
    this.setState({ canvas_width });
  }
  analyze_high_low() {
    console.log(this.props);
    let { symbol, stock_data } = this.props;
    let { charts } = stock_data;
    let price_data = charts[symbol].chart_data;
    let canvas = this.props.Chart_Analysis.canvas;
    /* Bring in another module fo rhtis one */
    let swing_high_low_results = Swing_High_Low(price_data, canvas);
    this.props.dispatch(
      set_analysis_results("HIGH_LOW", swing_high_low_results)
    );
  }
  calc_linear_regression() {
    console.log("calc_linear_regression");
    console.log(this.props);
    console.log(this.props.Chart_Analysis.LR_avg);
    let { Chart_Analysis } = this.props;
    let {
      LR_avg,
      data_view_params,
      candle_width,
      space_between_bars
    } = Chart_Analysis;
    let bar_size = candle_width + space_between_bars;
    /* return an array of slopes */
    let { symbol, stock_data } = this.props;
    let { charts } = stock_data;
    let price_data = charts[symbol].chart_data;
    let canvas = this.props.Chart_Analysis.canvas;
    let arr_slopes = Return_Arr_Slopes(price_data, parseInt(LR_avg), bar_size);
    /* dispatch to the store */
    this.props.dispatch(set_LR_results(symbol, arr_slopes, LR_avg));
    console.log(`************* ----------      ************8`);
    setTimeout(() => {
      this.draw_LR_lines();
    }, 0);
  }

  draw_LR_lines() {
    let { symbol, stock_data, Chart_Analysis } = this.props;
    let { charts } = stock_data;
    let price_data = charts[symbol].chart_data;

    let {
      LR_avg,
      data_view_params,
      LR_results,
      canvas,
      candle_width,
      space_between_bars,
      pixels_per_penny,
      chart_data_length,
      max_price,
    } = Chart_Analysis;
    let bar_size = candle_width + space_between_bars;
    let ctx = canvas.getContext("2d");
    let { start, end } = data_view_params;
    console.log({start, end})
    let LR_data_arr = LR_results[symbol][LR_avg];
    let LR_data_arr_length = LR_data_arr.length

    /* offset from the end of x-axis Bars and LR data */
    let bar_offset = chart_data_length - end
    let LR_data_offset_mod = bar_offset%LR_avg
    /* partial LR line on the right side of chart */
    let LR_data_offset = (bar_offset-LR_data_offset_mod)/LR_avg
    let total_view_bars = end-start
    console.log({LR_data_offset, LR_data_offset_mod, bar_offset, LR_data_arr_length})
    let end_slice = LR_data_arr_length-LR_data_offset
    LR_data_arr = LR_data_arr.slice( 0, end_slice)
    console.log(`LR_data_arr length ${LR_data_arr.length}` )
    if(LR_data_offset_mod>0){
      console.log('draw a partial LR line on the right side')
      console.log(LR_data_offset_mod)
      let start_of_partial_bar = LR_avg-LR_data_offset_mod 
      //- 1//minus on becasue we start at the first
      let last_partial_line= price_data.slice( end-start_of_partial_bar, end)
      let partial_LR_data = LR_data_arr.pop()
      console.log(`LR data offset is ${LR_data_offset}`)
      console.log({last_partial_line, partial_LR_data})
      /* move context to bar view count * bar_size, middle?  */
      let all_bars_width = total_view_bars*bar_size
      console.log({last_partial_line, start_of_partial_bar, all_bars_width, total_view_bars, bar_size})
      // ctx.save()
      // ctx.beginPath()
      // let partial_starting_y = last_partial_line[0].low
      let partial_starting_x = (total_view_bars)-((last_partial_line.length))
      // ctx.moveTo(partial_starting_x, partial_starting_y)
console.log({partial_starting_x})
      let { m, b, min_max_y } = partial_LR_data
      drawLine(
        ctx,
        partial_starting_x,
        min_max_y,
        m,
        b,
        LR_avg,
        bar_size,
        pixels_per_penny,
        max_price
      );
    }
    /* check start of data for mod */
    let data_bars_left = total_view_bars-(LR_avg-LR_data_offset_mod)
    console.log({data_bars_left})
    let left_x_mod = data_bars_left%LR_avg
    let LR_data_remaining = LR_data_arr.slice(-(Math.ceil(data_bars_left/LR_avg)))
    console.log({left_x_mod, LR_data_remaining})
    // let start_partial_line= price_data.slice( start, start+(LR_avg-left_x_mod))
    let start_partial_line = -(LR_avg-left_x_mod)
    console.log({start_partial_line})
    let { m, b, min_max_y } = LR_data_remaining[0]
    drawLine(
      ctx,
      start_partial_line,
      min_max_y,
      m,
      b,
      LR_avg,
      bar_size,
      pixels_per_penny,
      max_price
    );
    return
    /* total bars and LR data in view */
    if(end>chart_data_length)total_view_bars -= end-chart_data_length
    let total_view_LR_data = total_view_bars/LR_avg
    let partial_LR_view_data = total_view_LR_data - Math.floor(total_view_LR_data)
    
    console.log({ LR_data_arr });
    console.log({LR_data_offset, total_view_LR_data, total_view_bars})
    
    if(partial_LR_view_data){
      /* start withthe partial line */
      console.log({partial_LR_view_data})
      console.log(partial_LR_view_data*LR_avg)
    }
    let mod = price_data.length % LR_avg;
    let LR_view_data_arr = [];
    LR_data_arr.forEach((data, index) => {
      let LR_avg_index = (index * LR_avg)+mod;
      if (LR_avg_index >= start && LR_avg_index <= end) {
        console.log(`Get LR_data_arr[${index}]`)
        LR_view_data_arr.push(data);
      }
    });
    console.log({ mod });
    console.log(LR_view_data_arr);
    console.log(LR_view_data_arr.length);

    LR_view_data_arr.forEach((LR_data, index) => {
      let start_slice = start - mod + (index * LR_avg)
      let end_slice = start_slice + parseInt(LR_avg)
      console.log({start_slice, end_slice})
      let chart_data = price_data.slice(
        start_slice, end_slice
      );
      let ys = [];
      for (let i = 0; i < chart_data.length; i++) {
        ys.push(chart_data[i].low);
      }

      console.log(chart_data);
      console.log(chart_data.length);
      let pos = (index * LR_avg);
      console.log({ pos });

      /* draw the fucking line! */
      let { m, b, min_max_y } = LR_view_data_arr[index];
      drawLine(
        ctx,
        pos,
        min_max_y,
        m,
        b,
        LR_avg,
        bar_size,
        pixels_per_penny,
        max_price
      );
    });
  }

  get_min_max(data) {
    // console.log(data)
    let max = 0; //low number that is lower than any high
    let min = 10000000; //some big number that is larger than any lows
    data.forEach(data_point => {
      if (data_point > max) {
        max = data_point;
      }
      if (data_point < min && data_point > 0) {
        min = data_point;
      }
    });
    return { max, min };
  }

  render() {
    let { active_tab } = this.state;
    let { symbol, stock_data } = this.props;
    var book_data, chart_logo, chart_stats, chart_largest_trades, company;
    if (stock_data.charts[this.props.symbol]) {
      var {
        company,
        book_data,
        chart_logo,
        chart_stats,
        chart_largest_trades
      } = stock_data.charts[this.props.symbol];
    }
    let canvas_width = this.state.canvas_width;

    // console.log({
    //   book_data,
    //   chart_logo,
    //   chart_stats,
    //   chart_largest_trades,
    //   company
    // });
    // console.log({ symbol, stock_data });
    return (
      <Main_Layout>
        <div className="p-5">
          {company && (
            <div className="row flex_center">
              <div className="col flex_center">
                <h1>
                  <a target="_blank" href={company.website}>
                    {company.companyName}
                  </a>
                </h1>
                <Stock_Logo logo={chart_logo} />
                <Percent_Change
                  precent_change={book_data.quote.changePercent}
                />
              </div>
            </div>
          )}
          <div className="row ">
            <div className={`col-sm-${canvas_width} vh_50`}>
              <Analysis_Chart
                toggle_wide_mode={this.toggle_wide_mode}
                canvas_id={`${symbol}_analysis`}
                data={stock_data.charts[this.props.symbol]}
                container_width={this.state.canvas_width}
              />
            </div>
            <div className="col-sm-6 ">
              <Analysis_Tools
                analyze_high_low={this.analyze_high_low}
                calc_linear_regression={this.calc_linear_regression}
                LR_avg={this.props.Chart_Analysis.LR_avg}
                handle_LR_avg_input={avg =>
                  this.props.dispatch(set_LR_avg(avg))
                }
                chart_data={stock_data.charts[this.props.symbol]}
                chart_id={`${symbol}_analysis`}
                /*      active_tab={active_tab}
                set_active_tab={this.set_active_tab}
                company={company}
                stats={chart_stats}
                quote={book_data ? book_data.quote : {}} */
              />
              <Analysis_Results
                results={this.props.Chart_Analysis.analysis_results}
                linear_regression={this.linear_regression}
                LR_avg={this.props.Chart_Analysis.LR_avg}
              />
            </div>
          </div>
        </div>
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { user, stock_data, meta, Chart_Analysis } = state;
  return { user, stock_data, meta, Chart_Analysis };
}

export default connect(mapStateToProps)(withRouter(Account_Profile));

const Stock_Logo = ({ logo }) => {
  if (!logo) return <span />;
  let url = logo
    ? logo.url
    : `/static/trade_post_imgs/upload_0b696dc6c946a6834d7e7ba8f21c13a9`;
  return <img className="m-3" height="60px" src={url} alt="logo" />;
};

const Percent_Change = ({ precent_change }) => {
  let class_name;
  if (precent_change > 0) class_name = "percentage_up";
  if (precent_change < 0) class_name = "percentage_down";
  if (precent_change == 0) class_name = "percentage_neutral";
  return (
    <span className={class_name}>
      {`${parseFloat((precent_change * 100).toLocaleString("en-US")).toFixed(
        2
      )}%`}
    </span>
  );
};

function drawLine(
  ctx,
  pos,
  min_max_y,
  m,
  b,
  avg,
  bar_size,
  pixels_per_penny,
  max_price
) {
  let { min, max } = min_max_y;

  // console.log({ m, b });
  var x1 = bar_size / 2;
  var y1 = m * x1 + b;
  var x2 = avg * bar_size - bar_size / 2;
  var y2 = m * x2 + b;
  let range = max - min;
  // console.log("**************  Raw   ***********************");
  // console.log({ min, max, range, y1, y2 });
  y1 = map(y1, 0, range, min, max);
  y2 = map(y2, 0, range, min, max);
  // console.log("**************  mapped   ***********************");

  // console.log({ y1, y2 });

  y1 = (max_price - y1) * 100 * pixels_per_penny;
  y2 = (max_price - y2) * 100 * pixels_per_penny;
  // console.log("**************  oices per penny   ***********************");

  // console.log({ y1, y2 });

  // console.log({ x1, y1, x2, y2 });

  ctx.save();

  ctx.translate(pos * bar_size, 0);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.restore();
}

const constrain = function(n, low, high) {
  return Math.max(Math.min(n, high), low);
};

const map = function(n, start1, stop1, start2, stop2, withinBounds) {
  var newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
};
