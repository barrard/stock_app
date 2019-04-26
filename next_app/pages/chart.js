import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import Router from "next/router";

import { ensure_loggedin } from "../components/utils/auth.js";
import Main_Layout from "../layouts/Main_Layout.js";
import {fetch_selected_chart_data} from '../components/charts/chart_data_utils.js'
import Canvas_Chart from '../components/charts/Canvas_Chart.js'

class Account_Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static async getInitialProps(ctx) {
    let symbol = symbol = ctx.query.symbol
    let {store, req} = ctx
    let state = store.getState()
    let {dispatch} = store
    let {stock_data, meta } = state
    let symbol_data = stock_data.charts[symbol]
    if(!symbol_data && req){
      await fetch_selected_chart_data(symbol,{ meta, dispatch } )
    }else{
      console.log(`already got ${symbol} data`)
    }
    return { symbol: ctx.query.symbol };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let{ symbol, stock_data } = this.props
    return (
      <Main_Layout>
        <div className="p-5">
          <div className="row flex_center">
            <div className='col flex_center'>
            <h1>{symbol}</h1>
            </div>
          </div>
          <div className='row flex_center'>
            <div className='col-sm-12 vh_100'>
              <Canvas_Chart canvas_id={symbol}
                data = {stock_data.charts[symbol]}

              />
            </div>
          </div>
        </div>
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { user, stock_data, meta } = state;
  return { user , stock_data, meta};
}

export default connect(mapStateToProps)(withRouter(Account_Profile));



