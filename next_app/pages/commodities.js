import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
/* Might move this somewhere else */
import io from "socket.io-client";
import dynamic from "next/dynamic";
import { fetch_commodity_chart_data } from "../redux/actions/Commodities_Actions.js";
// import Analysis_Chart from "../components/charts/Analysis_Chart.js";


const Plotly_Chart = dynamic(import("../components/charts/Plotly_Chart.js"), {
  ssr: false
});

import Main_Layout from "../layouts/Main_Layout.js";
class Commodities_Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commodity_tick_data: {
        "/ES": {},
        "/GC": {},
        "/CL": {}
      }
    };
    this.toggle_wide_mode = this.toggle_wide_mode.bind(this);
  }
  static async getInitialProps(ctx) {
    let { store, req, query } = ctx;
    let {symbol} = query
    let {dispatch} = store
    if(!symbol) symbol='ES'

    let state = store.getState();
    let { commodities , meta } = state;
    let { api_server } = meta;
    let symbol_data = commodities.charts[symbol];

    /* Check commodity data first to see? */
    if (!symbol_data) {
      await fetch_commodity_chart_data(symbol, api_server, dispatch)

    } else {
      console.log(`already got ${symbol} data`);
      console.log(`already got ${symbol} data`);
      console.log(`already got ${symbol} data`);
    }

    return { symbol}
  }
  componentDidMount() {
    var isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      const { meta } = this.props;
      const { api_server } = meta;
      var socket = io(`${api_server}`, { secure: true });

      socket.on(`commodity_data`, commodity_tick_data => {
        console.log(commodity_tick_data);
        this.setState({ commodity_tick_data });
      });
    }
  }
  toggle_wide_mode() {
    var { canvas_width } = this.state;
    canvas_width = canvas_width == 6 ? 12 : 6;
    this.setState({ canvas_width });
  }

  fetch_all_commodities_data() {
    console.log(`TODO`);
  }
  render() {
    let { commodity_tick_data } = this.state;
    let ES = commodity_tick_data["/ES"];
    let GC = commodity_tick_data["/GC"];
    let CL = commodity_tick_data["/CL"];
    let { symbol,  commodities } = this.props;


    return (
      <Main_Layout>
        <Plotly_Chart symbol={symbol} data= {commodities.charts[symbol].chart_data}/>
        {/* <Analysis_Chart
          toggle_wide_mode={this.toggle_wide_mode}
          canvas_id={`commoditiy_${symbol}_analysis`}
          data={commodities.charts[this.props.symbol]}
          container_width={this.state.canvas_width}
        /> */}
        <p>
          ES is {ES.lastPriceInDouble} at{" "}
          {new Date(ES.tradeTimeInLong).toLocaleString()}
        </p>
        <p>
          Volume {ES.totalVolume} Open Interest {ES.openInterest}
        </p>
        <p>
          CL is {CL.lastPriceInDouble} at{" "}
          {new Date(CL.tradeTimeInLong).toLocaleString()}
        </p>
        <p>
          Volume {CL.totalVolume} Open Interest {CL.openInterest}
        </p>
        <p>
          GC is {GC.lastPriceInDouble} at{" "}
          {new Date(GC.tradeTimeInLong).toLocaleString()}
        </p>
        <p>
          Volume {GC.totalVolume} Open Interest {GC.openInterest}
        </p>
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { stock_data, meta, commodities } = state;
  return { stock_data, meta, commodities };
}
export default connect(mapStateToProps)(withRouter(Commodities_Page));
