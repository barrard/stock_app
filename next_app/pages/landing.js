import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";

import { set_home_page_data } from "../redux/actions/stock_actions.js";
import {
  List_Stock_Data,
  Sector_Performance
} from "../components/landing_page_components/List_Stock_Data.js";

import Main_Layout from "../layouts/Main_Layout.js";
class Landing_Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static async getInitialProps(ctx) {
    let state = ctx.store.getState();
    if (
      !state.stock_data.home_page_data_set_at ||
      check_homepage_data_age(state.stock_data.home_page_data_set_at)
    ) {
      const iex_api = "https://cloud.iexapis.com/stable/stock/market";
      const home_page_data = {};
      const home_page_data_urls = {
        // sector_performance: `${iex_api}/sector-performance`,
        mostactive: `${iex_api}/list/mostactive`,
        gainers: `${iex_api}/list/gainers`,
        losers: `${iex_api}/list/losers`,
        iexvolume: `${iex_api}/list/iexvolume`,
        iexpercent: `${iex_api}/list/iexpercent`,
        infocus: `${iex_api}/list/infocus`
      };
      const home_page_data_keys = Object.keys(home_page_data_urls);
      await Promise.all(
        home_page_data_keys.map(async key => {
          let json_data = await fetch(`${home_page_data_urls[key]}?token=pk_9c5351666ec649d99eb45ff08817d362`);
          let data = await json_data.json();
          home_page_data[key] = data;
        })
      );
      ctx.store.dispatch(set_home_page_data(home_page_data));
      return { ...home_page_data };
    } else {
    }
  }
  render() {
    // console.log(this.props.stock_data.home_page_data);
    const {
      gainers,
      losers,
      infocus,
      // sector_performance,
      iexpercent,
      iexvolume,
      mostactive
    } = this.props.stock_data.home_page_data;
    return (
      <Main_Layout>
        <div className="row flex_center">
          {/* <div className="col-sm-6 ">
            <div className="row ">
              <div className="col">Hide on small scrrens</div>
            </div>

            <div className="row ">
              <div className="col">Crypto</div>
            </div>
            <div className="row ">
              <div className="col">IPO News</div>
            </div>
          </div> */}
          <div className="col-sm-6">
            <div className="row ">
              <List_Stock_Data props={this.props} title={"Most Active"} data={mostactive} />
              <List_Stock_Data props={this.props} title={"Most Volume"} data={iexvolume} />
              <List_Stock_Data props={this.props} title={"Biggest Percent"} data={iexpercent} />
              <List_Stock_Data props={this.props} title={"Biggest Losers"} data={losers} />
              <List_Stock_Data props={this.props} title={"Biggest Gainers"} data={gainers} />
              <List_Stock_Data props={this.props} title={"In Focus"} data={infocus} />
              {/* <Sector_Performance props={this.props} data={sector_performance} /> */}
            </div>
          </div>
        </div>
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { stock_data, meta } = state;
  return {stock_data, meta};
}

export default connect(mapStateToProps)(withRouter(Landing_Page));

function check_homepage_data_age(set_at) {
  let five_min = 1000 * 60 * 5;
  let now = new Date().getTime();
  console.log(now - set_at > five_min ? true : false);
  return now - set_at > five_min ? true : false;
}
