import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
/* Might move this somewhere else */
import io from "socket.io-client";
import dynamic from "next/dynamic";

import Techan_Chart from "../components/charts/Techan/Techan_Chart_WTF.js";
// import Techan_Chart from "../components/charts/Techan/Techan_Raw_Chart.js"
// import Techan_Chart from "../components/charts/Techan/Techan_Chart_Zoom.js"
//import Techan_Chart from "../components/charts/Techan/Techan_Chart_Final.js";
// import Techan_Chart from "../components/charts/Techan/Techan_Chart_Basic.js";
// import Techan_Chart from "../components/charts/Techan/Techan_Chart_Crosshair.js";
// import Techan_Chart from "../components/charts/Techan/Techan_Chart_Feed.js";
// import Techan_Chart from "../components/charts/Techan/Techan_Chart_Example.js";
// import Techan_Chart from "../components/charts/Techan/simple_feed_with_sma.js";

import { fetch_commodity_chart_data } from "../redux/actions/Commodities_Actions.js";
// import Analysis_Chart from "../components/charts/Analysis_Chart.js";
import { ensure_loggedin } from "../components/utils/auth.js";

// const Techan_Chart = dynamic(import("../components/charts/Techan/Techan_Chart_Example.js"), {
// const Techan_Chart = dynamic(import("../components/charts/Techan/Techan_Chart_Basic.js"), {
//     const Techan_Chart = dynamic(import("../components/charts/Techan/Techan_Chart_WTF.js"), {
//       ssr: false
// });

import Main_Layout from "../layouts/Main_Layout.js";
class Commodities_Page extends React.Component {
  constructor(props) {
    super(props);
    const { meta } = this.props;
    const { api_server } = meta;
    this.state = {
      socket: io(`${api_server}`, { secure: true }),

      commodity_tick_data: {
        "/ES": {},
        "/GC": {},
        "/CL": {}
      }
    };
    this.recieve_latest_minute_data = this.recieve_latest_minute_data.bind(
      this
    );
    this.recieve_quote_data = this.recieve_quote_data.bind(this);
    this.toggle_wide_mode = this.toggle_wide_mode.bind(this);
  }
  static async getInitialProps(ctx) {
    ensure_loggedin(ctx);

    let { store, req, query } = ctx;
    let { symbol } = query;
    let { dispatch } = store;
    if (!symbol) symbol = "ES";

    let state = store.getState();
    let { commodities, meta } = state;
    let { api_server } = meta;
    let symbol_data = commodities.charts[symbol];

    /* Check commodity data first to see? */
    if (!symbol_data) {
      await fetch_commodity_chart_data(symbol, api_server, dispatch, ctx);
    } else {
      console.log(`already got ${symbol} data`);
      console.log(`already got ${symbol} data`);
      console.log(`already got ${symbol} data`);
    }

    return { symbol };
  }
  componentWillUnmount() {
    let { socket } = this.state;

    this._ismounted = false;
    this.recieve_latest_minute_data = this.recieve_latest_minute_data.bind(
      this
    );
    socket.removeListener("commodity_data", this.recieve_quote_data);
    socket.removeListener(
      "latest_minutle_bar",
      this.recieve_latest_minute_data
    );
  }
  componentDidMount() {
    let { socket } = this.state;
    this._ismounted = true;
    var isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      socket.on(`commodity_data`, this.recieve_quote_data);
      socket.on(`latest_minutley_bar`, this.recieve_latest_minute_data);
    }
  }

  recieve_quote_data(commodity_tick_data) {
    // console.log(commodity_tick_data);
    this.setState({ commodity_tick_data });
  }

  recieve_latest_minute_data(latest_minute_data) {
    // console.log({latest_minute_data})
    this.setState({ latest_minute_data });
  }

  toggle_wide_mode() {
    var { canvas_width } = this.state;
    canvas_width = canvas_width == 6 ? 12 : 6;
    this.setState({ canvas_width });
  }

  render() {
    let { commodity_tick_data, latest_minute_data, socket } = this.state;
    let ES = commodity_tick_data["/ES"];
    let GC = commodity_tick_data["/GC"];
    let CL = commodity_tick_data["/CL"];
    let { symbol, commodities } = this.props;
    // console.log(latest_minute_data)
    // if(latest_minute_data)console.log(latest_minute_data.ES.close)

    return (
      <Main_Layout>
        <div id="techan_chart_div">
          <Techan_Chart
            divId={"techan_chart_div"}
            socket={socket}
            symbol={"ES"}
            latest_minute_data={latest_minute_data}
            _width={560}
            _height={500}
            data={this.props.commodities.charts}
          />
        </div>

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
