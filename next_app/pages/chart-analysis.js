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
import {set_x_offest} from '../redux/actions/Chart_Analysis_actions.js'
class Account_Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_tab: "info",
      canvas_width: 12
    };
    this.set_active_tab = this.set_active_tab.bind(this);
    this.toggle_wide_mode = this.toggle_wide_mode.bind(this);
    this.move_to_chart_begining = this.move_to_chart_begining.bind(this)

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
  move_to_chart_begining(){
    let {canvas_width,candle_width, chart_data_length, space_between_bars} = this.props.Chart_Analysis
    let data_length = chart_data_length
    let candle_count = canvas_width/(candle_width+space_between_bars)
    let new_x_offset = (data_length * (candle_width+space_between_bars)) - (candle_count*candle_width)
    this.props.Chart_Analysis.x_offset = new_x_offset
    console.log(this.props)
    this.props.dispatch(set_x_offest(new_x_offset))
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
              begining_chart={this.move_to_chart_begining}
              chart_data={stock_data.charts[this.props.symbol]}
                chart_id={`${symbol}_analysis`}
           /*      active_tab={active_tab}
                set_active_tab={this.set_active_tab}
                company={company}
                stats={chart_stats}
                quote={book_data ? book_data.quote : {}} */
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
