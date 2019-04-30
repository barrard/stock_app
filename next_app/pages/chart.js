import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import Router from "next/router";

import { ensure_loggedin } from "../components/utils/auth.js";
import Main_Layout from "../layouts/Main_Layout.js";
import {fetch_selected_chart_data} from '../components/charts/chart_data_utils.js'
import Canvas_Chart from '../components/charts/Canvas_Chart.js'
import {Company_Stats} from '../components/charts/Company_Stats.js'

class Account_Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_tab:"info"
    };
    this.set_active_tab = this.set_active_tab.bind(this)
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

  }
  set_active_tab(tab){
    console.log(tab)
    this.setState({active_tab:tab})
  }

  render() {
    let {active_tab} = this.state
    let{ symbol, stock_data } = this.props
    var book_data, chart_logo, chart_stats, chart_largest_trades, company;
    if(stock_data.charts[this.props.symbol]){
      var { company, book_data, chart_logo, chart_stats, chart_largest_trades} = stock_data.charts[this.props.symbol]
    }
      
    console.log({book_data, chart_logo, chart_stats, chart_largest_trades, company})
    console.log({symbol, stock_data})
    return (
      <Main_Layout>
        <div className="p-5">
          {company && 
          <div className="row flex_center">
            <div className='col flex_center'>
            <h1><a target="_blank"  href={company.website}>{company.companyName}</a></h1>
            <Stock_Logo logo={chart_logo}  />
            <Percent_Change 
              precent_change={book_data.quote.changePercent}
            />

            </div>
          </div>}
          <div className='row '>
          <div className='col-sm-6 vh_50'>
              <Canvas_Chart canvas_id={symbol}
                data = {stock_data.charts[this.props.symbol]}

              />
            </div>
            <div className='col-sm-6 '>
              <Company_Stats 
              active_tab={active_tab}
                set_active_tab={this.set_active_tab}
                company={company}
                stats = {chart_stats}
                quote={book_data ? book_data.quote : {} }
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

const Stock_Logo = ({logo})=>{
  if(!logo)return <span></span>
  let url = logo ? logo.url : `/static/trade_post_imgs/upload_0b696dc6c946a6834d7e7ba8f21c13a9`
  return(<img height="60px" src={url} alt="logo"/>)
}





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