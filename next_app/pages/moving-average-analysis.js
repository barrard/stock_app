import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import Router from "next/router";

import { ensure_loggedin } from "../components/utils/auth.js";
import { view_selected_stock_symbol } from "../components/charts/chart_data_utils.js";

import Main_Layout from "../layouts/Main_Layout.js";
import { query } from "express-validator/check";
class MA_Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved_queries:[],
      saved_query_results:[],
      current_query_results:[],
      queries: [
        {
          MA: "50",
          g_l: "g",
          perc: 20
        }
      ]
    };
    this.handleInput = this.handleInput.bind(this);
    this.add_query = this.add_query.bind(this);
    this.submit_query = this.submit_query.bind(this);
    this.remove_query = this.remove_query.bind(this)
  }
  static async getInitialProps(ctx) {
    if (ctx.req) {
      if (!ctx.req.user) Router.push("/login");
    }

    return {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  async submit_query() {
    try {
      const _csrf = this.props.meta.csrf
  
      let resp_json = await fetch('/MA-query', {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
        body:JSON.stringify({query:this.state.queries, _csrf})
      })  
      let query_results = await resp_json.json()
      console.log(query_results)
      let saved_queries = this.state.saved_queries
      saved_queries.push(this.state.queries)
      let saved_query_results = this.state.saved_query_results
      saved_query_results.push(query_results)
      this.setState({saved_query_results})
      this.setState({current_query_results:query_results})
    } catch (err) {
      console.log('err')
      console.log(err)
    }

  }
  remove_query(index) {
    let queries = this.state.queries;
    queries.splice(index, 1);
    this.setState({ queries });
  }

  add_query() {
    console.log("add_query");
    let queries = this.state.queries;
    if (queries.length >= 3) return toastr.info("Three is enough");
    let new_query = {
      MA: "50",
      g_l: "g",
      perc: 20
    };
    queries.push(new_query);
    this.setState({ queries });
  }

  handleInput(e, key, index) {
    console.log(e.target.value);
    console.log(key);
    console.log(index);
    let value = e.target.value;
    let queries = this.state.queries;
    var query = queries[index];
    console.log(query);
    query = { ...query, ...{ [key]: value } };
    console.log(query);
    queries[index] = query;
    this.setState({
      queries
    });
  }


  sort_by(prop, flag) {
    console.log(prop, flag);
    //flag true dont switch sort_state
    // const number_rows = this.state.number_rows;
    // this.setState({ sorted_prop: prop });
    // var sort_state = this.state.sort_state;
    // /* Flag for not resetting sort_state */
    // if (flag) sort_state = !sort_state;

    // if (sort_state) {
    //   this.setState({ sort_state: false });
    //   this.setState({
    //     data: this.state.all_data
    //       .sort((a, b) => this.high_to_low(a, b, prop))
    //       .slice(0, number_rows)
    //   });
    // } else {
    //   this.setState({ sort_state: true });
    //   this.setState({
    //     data: this.state.all_data
    //       .sort((a, b) => this.low_to_high(a, b, prop))
    //       .slice(0, number_rows)
    //   });
    // }
  }



  render() {
    const current_query_results = this.state.current_query_results;
    const { props } = this;

    return (
      <Main_Layout>
        <h1>Query MA Data</h1>
        {/* find all ? */}
        {/* select Moving Average */}
        <div className="col-sm-12 ">
          <div className="row flex_center">
            {this.state.queries.map((query, index) => (
              <MA_Select_Form
              remove_query={this.remove_query}
                perc={query.perc}
                MA={query.MA}
                g_l={query.g_l}
                key={index}
                index={index}
                handleInput={this.handleInput}
              />
            ))}
          </div>

        </div>
        <div className="row flex_center">
          <Add_New_Query_Btn add_query={this.add_query} />
          <Submit_Query submit_query={this.submit_query} />
        </div>
        <div className='row flex_center'>
          <div className='col-sm-12 flex_center'>
          <Stock_List_Header
              sorted_prop={this.state.sorted_prop}
              sort_state={this.state.sort_state}
              sort_by={prop => this.sort_by(prop)}
              // on_sort={this}
            />
                  <div className="row_container">
              {current_query_results.map((MA_data, index) => (
                <Display_Stock_Row
                  key={index}
                  index={index}
                  MA_data={MA_data}
                  props={props}
                />
              ))}
            </div>

          </div>
        </div>

        {/* select greate or lesser */}
        {/* select  Percentage */}
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { user, meta } = state;
  return { user, meta };
}

export default connect(mapStateToProps)(withRouter(MA_Analysis));

const Remove_Query = ({ remove_query }) => (
  <button onClick={remove_query} type="button" className="btn btn-danger ">
    X
  </button>
);

const MA_Select_Form = ({ index, handleInput, perc, MA, g_l, remove_query }) => {
  return (
    <div className="row flex_center ">
    <div className='col-sm-12 flex_center'>
    <Remove_Query 
          remove_query={remove_query}
        />
    </div>
      <div className="col-sm-12 flex_center">
      
        <form>
          <MA_Average_Select
            index={index}
            MA={MA}
            handleInput={(e, key, index) => handleInput(e, key, index)}
          />
          <Perc_Input
            perc={perc}
            index={index}
            handleInput={(e, key, index) => handleInput(e, key, index)}
          />
          <G_L_Select
            index={index}
            g_l={g_l}
            handleInput={(e, key, index) => handleInput(e, key, index)}
          />
        </form>
      </div>
    </div>
  );
};

const Perc_Input = ({ handleInput, index, perc }) => (
  <div className="form-group">
    <label htmlFor="percent">Percentage</label>
    <input
      className="form-control"
      type="number"
      value={perc}
      onChange={e => handleInput(e, `perc`, `${index}`)}
    />
  </div>
);

const Add_New_Query_Btn = ({ add_query }) => {
  return (
    <button onClick={add_query} type="button" className="btn btn-success">
      Add
    </button>
  );
};

const Submit_Query = ({ submit_query }) => {
  return (
    <button onClick={submit_query} type="button" className="btn btn-primary">
      Get Stocks
    </button>
  );
};

const G_L_Select = ({ index, g_l, handleInput }) => (
  <div className="form-group">
    <label htmlFor="greater than less than">Greater or Lesser than.</label>
    <select
      value={g_l}
      onChange={e => handleInput(e, `g_l`, `${index}`)}
      className="form-control"
    >
      <option value="l">Less Than</option>
      <option value="g">Greater Than</option>
    </select>
  </div>
);

const MA_Average_Select = ({ index, MA, handleInput }) => (
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Moving Average</label>
    <select
      value={MA}
      onChange={e => handleInput(e, `MA`, `${index}`)}
      className="form-control"
    >
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="200">200</option>
    </select>
  </div>
);




/* Display results components */
function Display_Stock_Row({ MA_data, index, props }) {
  const { symbol, latestPrice, changePercent, latestVolume } = MA_data;
  let class_name = index % 2 == 0 ? "ticker_row_light" : "ticker_row_dark";

  return (
    <div
      className={`row clickable ${class_name}`}
      onClick={() => view_selected_stock_symbol(symbol, props)}
    >
      <div className="col-2 flex">
        <Symbol symbol={symbol} />
      </div>

      {/* <div className="col-3 flex_end">
        <Percent_Change precent_change={changePercent} />
      </div>
      <div className="col-3 flex_end">
        <Price price={latestPrice} />
      </div>

      <div className="col-4 flex_end">
        <Volume vol={latestVolume} />
      </div> */}
    </div>
  );
}

const Stock_List_Header = ({ sort_by, sort_state, sorted_prop }) => {
  return (
    <div className="row full-width">
      <div className="align_items_center col-1 flex">
        <h6 onClick={() => sort_by("symbol")}>Sym.</h6>
        {sort_state && sorted_prop == "symbol" && <div className="arrow-up" />}

        {!sort_state && sorted_prop == "symbol" && (
          <div className="arrow-down" />
        )}
      </div>

      <div className="align_items_center col-2 flex_end">
        <h6 onClick={() => sort_by("changePercent")}>20 MA.</h6>
        {sort_state && sorted_prop == "changePercent" && (
          <div className="arrow-up" />
        )}
        {!sort_state && sorted_prop == "changePercent" && (
          <div className="arrow-down" />
        )}{" "}
      </div>
      <div className="align_items_center col-2 flex_end">
        <h6 onClick={() => sort_by("changePercent")}>50 MA.</h6>
        {sort_state && sorted_prop == "changePercent" && (
          <div className="arrow-up" />
        )}
        {!sort_state && sorted_prop == "changePercent" && (
          <div className="arrow-down" />
        )}{" "}
      </div>
      <div className="align_items_center col-2 flex_end">
        <h6 onClick={() => sort_by("changePercent")}>200 MA.</h6>
        {sort_state && sorted_prop == "changePercent" && (
          <div className="arrow-up" />
        )}
        {!sort_state && sorted_prop == "changePercent" && (
          <div className="arrow-down" />
        )}{" "}
      </div>

      <div className="align_items_center col-2 flex_end">
        <h6 onClick={() => sort_by("latestPrice")}>Price</h6>
        {sort_state && sorted_prop == "latestPrice" && (
          <div className="arrow-up" />
        )}
        {!sort_state && sorted_prop == "latestPrice" && (
          <div className="arrow-down" />
        )}
      </div>

      <div className="align_items_center col-3 flex_end">
        <h6 onClick={() => sort_by("latestVolume")}>Vol.</h6>
        {sort_state && sorted_prop == "latestVolume" && (
          <div className="arrow-up" />
        )}

        {!sort_state && sorted_prop == "latestVolume" && (
          <div className="arrow-down" />
        )}
      </div>

    </div>
  );
};
const Volume = ({ vol }) => (
  <span className="ticker_vol">{vol.toLocaleString("en-US")}</span>
);

const Price = ({ price }) => (
  <span className="ticker_price">
    $
    {parseFloat(price)
      .toFixed(2)
      .toLocaleString("en-US")}
  </span>
);

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

const Symbol = ({ symbol }) => <span className="ticker_symbol">{symbol}</span>;