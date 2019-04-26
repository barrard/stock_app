import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import Router from "next/router";

import { ensure_loggedin } from "../components/utils/auth.js";
import { view_selected_stock_symbol } from "../components/charts/chart_data_utils.js";
import {
  set_MA_query,
  add_query,
  remove_query,
  submit_query,
  load_more_MA_results,
  sort_by
} from "../redux/actions/MA_analysis_actions.js";
import { Block_Spinner } from "../components/spinners/Block_Spinner.js";
import Main_Layout from "../layouts/Main_Layout.js";

class MA_Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number_rows: 30, //starting default
      sorted_prop: "volume",
      sort_state: false
      // saved_queries: [],
      // saved_query_results: [],
      // current_query_results: [],
      // sorted_query_results: [],
      // queries: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.add_query = this.add_query.bind(this);
    this.submit_query = this.submit_query.bind(this);
    this.remove_query = this.remove_query.bind(this);
    this.load_more_data = this.load_more_data.bind(this);
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
  load_more_data() {
    const { sorted_prop } = this.props.MA_analysis;
    console.log("LOAD MORE DATA");
    this.props.dispatch(load_more_MA_results(sorted_prop));
    /* Wait for next loops cycle to update state... */
    setTimeout(() => {
      this.props.dispatch(sort_by(sorted_prop, true));
    }, 0);
  }

  async submit_query() {
    let {is_loading} =this.props.meta
    if(is_loading)return toastr.info('Searching in progress....')
    const _csrf = this.props.meta.csrf;
    let { queries, saved_queries } = this.props.MA_analysis;
    let query_data = { query: queries, _csrf };
    saved_queries.push(queries);
    this.props.dispatch(submit_query(query_data, saved_queries));
  }
  remove_query(index) {
    let { queries } = this.props.MA_analysis;

    this.props.dispatch(remove_query(index, queries));
  }

  add_query() {
    let { queries } = this.props.MA_analysis;
    console.log("add_query");
    if (queries.length >= 3) return toastr.info("Three is enough");

    this.props.dispatch(add_query(queries));
  }

  handleInput(e, key, index) {
    console.log(e.target.value);
    console.log(key);
    console.log(index);
    let value = e.target.value;
    let queries = this.props.MA_analysis.queries;
    var query = queries[index];
    console.log(query);
    query = { ...query, ...{ [key]: value } };
    console.log(query);
    queries[index] = query;
    this.props.dispatch(set_MA_query(queries));
  }

  high_to_low(a, b, prop) {
    if (deep_value(a, prop) > deep_value(b, prop)) return -1;
    if (deep_value(a, prop) < deep_value(b, prop)) return 1;
    return 0;
  }
  low_to_high(a, b, prop) {
    if (deep_value(a, prop) > deep_value(b, prop)) return 1;
    if (deep_value(a, prop) < deep_value(b, prop)) return -1;
    return 0;
  }

  sort_by(prop, flag) {
    console.log(prop, flag);
    this.props.dispatch(sort_by(prop, flag));
    // flag true dont switch sort_state
    // const number_rows = this.state.number_rows;
    // this.setState({ sorted_prop: prop });
    // var sort_state = this.state.sort_state;
    // /* Flag for not resetting sort_state */
    // if (flag) sort_state = !sort_state;

    // if (sort_state) {
    //   this.setState({ sort_state: false });
    //   this.setState({
    //     sorted_query_results: this.state.current_query_results
    //       .sort((a, b) => this.high_to_low(a, b, prop))
    //       .slice(0, number_rows)
    //   });
    // } else {
    //   this.setState({ sort_state: true });
    //   this.setState({
    //     sorted_query_results: this.state.current_query_results
    //       .sort((a, b) => this.low_to_high(a, b, prop))
    //       .slice(0, number_rows)
    //   });
    // }
  }

  render() {
    const {
      sorted_query_results,
      current_query_results
    } = this.props.MA_analysis;
    const { is_loading } = this.props.meta;
    const { props } = this;
    // console.log(this.props);
    return (
      <Main_Layout>
        <h1>Query MA Data</h1>
        {/* find all ? */}
        {/* select Moving Average */}
        <div className="col-sm-12 ">
          <div className="row flex_center">
            {this.props.MA_analysis.queries.map((query, index) => (
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
        <div className="row flex_center">
          <div className="col-sm-12 col-lg-8">
            <Stock_List_Header
              sorted_prop={this.state.sorted_prop}
              sort_state={this.state.sort_state}
              sort_by={prop => this.sort_by(prop)}
              // on_sort={this}
            />
            <div className="">
              Results:{" "}
              {is_loading ? "Loading..." : current_query_results.length}
              <>
                {is_loading &&
                <div className='row flex_center'>
                   <Block_Spinner />
                </div>
                }
                {!is_loading &&
                  sorted_query_results.map((MA_data, index) => (
                    <Display_Stock_Row
                      key={index}
                      index={index}
                      MA_data={MA_data}
                      props={props}
                    />
                  ))}
              </>
            </div>
            {current_query_results.length > 30 && (
              <More_Rows handle_click={this.load_more_data} />
            )}
          </div>
        </div>

        {/* select greate or lesser */}
        {/* select  Percentage */}
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { user, meta, MA_analysis } = state;
  return { user, meta, MA_analysis };
}

export default connect(mapStateToProps)(withRouter(MA_Analysis));

const Remove_Query = ({ remove_query }) => (
  <button onClick={remove_query} type="button" className="btn btn-danger ">
    X
  </button>
);

const MA_Select_Form = ({
  index,
  handleInput,
  perc,
  MA,
  g_l,
  remove_query
}) => {
  return (
    <div className="row flex_center ">
      <div className="col-sm-12 flex_center">
        <Remove_Query remove_query={remove_query} />
      </div>
      <div className="col-sm-12 flex_center">
        <form>
          <MA_Average_Select
            index={index}
            MA={MA}
            handleInput={(e, key, index) => handleInput(e, key, index)}
          />
          <G_L_Select
            index={index}
            g_l={g_l}
            handleInput={(e, key, index) => handleInput(e, key, index)}
          />
          <Perc_Input
            perc={perc}
            index={index}
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
  const { symbol, current_MA_data } = MA_data;
  const {
    MA_20,
    MA_50,
    MA_200,
    meta_data,
    perc_20,
    perc_50,
    perc_200
  } = current_MA_data;
  const { close, volume, vwap } = meta_data;
  let class_name = index % 2 == 0 ? "ticker_row_light" : "ticker_row_dark";

  return (
    <div
      className={`row clickable ${class_name}`}
      onClick={() => view_selected_stock_symbol(symbol, props)}
    >
      <div className="col-1 flex">
        <Symbol symbol={symbol} />
      </div>

      <div className="col-3 flex_end">
        <Percent_From_Price
          current_close={close}
          MA_perc={perc_20}
          MA_price={MA_20.close}
        />
      </div>

      <div className="col-3 flex_end">
        <Percent_From_Price
          current_close={close}
          MA_perc={perc_50}
          MA_price={MA_50.close}
        />
      </div>

      <div className="col-3 flex_end">
        <Percent_From_Price
          current_close={close}
          MA_perc={perc_200}
          MA_price={MA_200.close}
        />
      </div>

      <div className="col-1 flex_end">
        <Price price={close} />
      </div>

      <div className="col-1 flex_end">
        <Volume vol={volume} />
      </div>
    </div>
  );
}

const Stock_List_Header = ({ sort_by, sort_state, sorted_prop }) => {
  return (
    <div className="row full-width">
      <div className="align_items_center col-1 flex">
        <h6 onClick={() => sort_by("symbol")}>Sym.</h6>
        {sort_state && sorted_prop == "symbol" && (
          <div className="arrow-down" />
        )}

        {!sort_state && sorted_prop == "symbol" && <div className="arrow-up" />}
      </div>

      <div className="align_items_center col-3 flex_end">
        <h6 onClick={() => sort_by("current_MA_data.perc_20")}>20 MA.</h6>
        {sort_state && sorted_prop == "current_MA_data.perc_20" && (
          <div className="arrow-down" />
        )}
        {!sort_state && sorted_prop == "current_MA_data.perc_20" && (
          <div className="arrow-up" />
        )}{" "}
      </div>
      <div className="align_items_center col-3 flex_end">
        <h6 onClick={() => sort_by("current_MA_data.perc_50")}>50 MA.</h6>
        {sort_state && sorted_prop == "current_MA_data.perc_50" && (
          <div className="arrow-down" />
        )}
        {!sort_state && sorted_prop == "current_MA_data.perc_50" && (
          <div className="arrow-up" />
        )}{" "}
      </div>
      <div className="align_items_center col-3 flex_end">
        <h6 onClick={() => sort_by("current_MA_data.perc_200")}>200 MA.</h6>
        {sort_state && sorted_prop == "current_MA_data.perc_200" && (
          <div className="arrow-down" />
        )}
        {!sort_state && sorted_prop == "current_MA_data.perc_200" && (
          <div className="arrow-up" />
        )}{" "}
      </div>

      <div className="align_items_center col-1 flex_end">
        <h6 onClick={() => sort_by("current_MA_data.meta_data.close")}>
          Price
        </h6>
        {sort_state && sorted_prop == "current_MA_data.meta_data.close" && (
          <div className="arrow-down" />
        )}
        {!sort_state && sorted_prop == "current_MA_data.meta_data.close" && (
          <div className="arrow-up" />
        )}
      </div>

      <div className="align_items_center col-1 flex_end">
        <h6 onClick={() => sort_by("current_MA_data.meta_data.volume")}>
          Vol.
        </h6>
        {sort_state && sorted_prop == "current_MA_data.meta_data.volume" && (
          <div className="arrow-down" />
        )}

        {!sort_state && sorted_prop == "current_MA_data.meta_data.volume" && (
          <div className="arrow-up" />
        )}
      </div>
    </div>
  );
};
const Volume = ({ vol }) => (
  <span className="ticker_vol">{vol.toLocaleString("en-US")}</span>
);

const More_Rows = ({ handle_click }) => {
  return (
    <div onClick={handle_click} className="row flex_center">
      <div className="col-sm-12 flex_center clickable background_grey">
        LOAD MORE
      </div>
    </div>
  );
};

const Price = ({ price }) => (
  <span className="ticker_price">
    $
    {parseFloat(price)
      .toFixed(2)
      .toLocaleString("en-US")}
  </span>
);

const Percent_From_Price = ({ MA_price, current_close, MA_perc }) => {
  if(!MA_perc)return "N/A"
  let class_name;
  if (MA_price > current_close) class_name = "percentage_up";
  if (MA_price < current_close) class_name = "percentage_down";
  if (MA_price == current_close) class_name = "percentage_neutral";
  return (
    <div className="row flex_center">
      <div className="col-12 col-sm-6 flex_center">
        <Price price={MA_price} />
      </div>
      <div className="col-12 col-sm-6 flex_center">
        (
        <span className={class_name}>
          {`${parseFloat(MA_perc.toLocaleString("en-US")).toFixed(2)}%`}
        </span>
        )
      </div>
    </div>
  );
};

const Symbol = ({ symbol }) => <span className="ticker_symbol">{symbol}</span>;

const deep_value = (obj, path) =>
  path
    .replace(/\[|\]\.?/g, ".")
    .split(".")
    .filter(s => s)
    .reduce((acc, val) => acc && acc[val], obj);
