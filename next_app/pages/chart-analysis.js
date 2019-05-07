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
import {Analysis_Results} from '../components/charts/Analysis_Results.js'
import {Swing_High_Low} from '../components/analysis/swing_high_low.js'
import {Return_Arr_Slopes} from '../components/analysis/Return_Arr_Slopes.js'
import {set_analysis_results, set_LR_avg, set_LR_results} from '../redux/actions/Chart_Analysis_actions.js'
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
    this.calc_linear_regression = this.calc_linear_regression.bind(this)

  }
  static async getInitialProps(ctx) {
    let symbol = (symbol = ctx.query.symbol);
    let { store, req } = ctx;
    let state = store.getState();
    let { dispatch } = store;
    let { stock_data, meta } = state;
    let symbol_data = stock_data.charts[symbol];
    if(!symbol)return{}
    if (!symbol_data ) {
      await fetch_selected_chart_data(symbol, { meta, dispatch });
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
  analyze_high_low(){
    console.log(this.props)
    let {symbol, stock_data}=this.props
    let {charts}=stock_data
    let price_data = charts[symbol].chart_data
    let canvas = this.props.Chart_Analysis.canvas
    /* Bring in another module fo rhtis one */
    let swing_high_low_results = Swing_High_Low(price_data, canvas)
    this.props.dispatch(set_analysis_results('HIGH_LOW', swing_high_low_results ))
  }
  calc_linear_regression(){
    console.log('calc_linear_regression')
    console.log(this.props)
    console.log(this.props.Chart_Analysis.LR_avg)
    let {Chart_Analysis} = this.props
    let {LR_avg, data_view_params} = Chart_Analysis
    /* return an array of slopes */
    let {symbol, stock_data}=this.props
    let {charts}=stock_data
    let price_data = charts[symbol].chart_data
    let canvas = this.props.Chart_Analysis.canvas
    let arr_slopes = Return_Arr_Slopes(price_data, parseInt(LR_avg))
    /* dispatch to the store */
    this.props.dispatch(set_LR_results(symbol, arr_slopes, LR_avg))
    console.log(`************* ----------      ************8`)
    setTimeout(() => {
      this.draw_LR_lines()
    }, 0);
  }

  draw_LR_lines(){
    let {symbol, stock_data}=this.props
    let {charts}=stock_data
    let price_data = charts[symbol].chart_data

    let {Chart_Analysis} = this.props
    let {LR_avg, data_view_params, LR_results, canvas} = Chart_Analysis

    let {start, end} = data_view_params
    let LR_data_arr = LR_results[symbol][LR_avg]
    console.log({LR_data_arr})
    let LR_view_data_arr = []
    LR_data_arr.forEach((data, index) => {
      let LR_avg_index = index*LR_avg
      if((LR_avg_index >= start) && (LR_avg_index  <= end)){
        LR_view_data_arr.push(data)
      }
    });
    let mod = price_data.length % LR_avg
    console.log({mod})
    console.log(LR_view_data_arr)
    console.log(LR_view_data_arr.length)
    console.log(LR_view_data_arr.length)
    LR_view_data_arr.forEach((LR_data, index) => {
      let chart_data = price_data.slice(start+mod+(index*LR_avg), start+mod+(index*LR_avg)+LR_avg )
      let ys = [];
      for(let i = 0 ; i < chart_data.length; i++){
        ys.push(chart_data[i].low)
      }

        console.log(chart_data)
        console.log(chart_data.length)
        let pos = index*LR_avg
        console.log({pos})
        let ctx = canvas.getContext('2d')
        /* Get min max of the price */
    //       let min_max_x = get_min_max(data.x)
    // let min_x = min_max_x.min;
    // let max_x = min_max_x.max
    let min_max_y= this.get_min_max(ys)
    let min_y  = min_max_y.min
    let max_y= min_max_y.max
    console.log({min_max_y})

        
        // ctx.translate(pos, )



      
      
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
              handle_LR_avg_input={(avg) =>this.props.dispatch(set_LR_avg(avg))}

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
  return { user, stock_data, meta , Chart_Analysis};
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


function drawLine(width, heigth) {
  console.log({m, b})
  var x1 = 0;
  var y1 = m * x1 + b;
  var x2 = 1;
  var y2 = m * x2 + b;
  /* unmap data */
  x1 = map(x1, 0, 1, 0, width);
  x2 = map(x2, 0, 1, 0, width);
  y1 = map(y1, 0, 1, height, 0);
  y2 = map(y2, 0, 1, height, 0);

  stroke(255, 0, 255);
  line(x1, y1, x2, y2);
}