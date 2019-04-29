import React from "react";
import ReactDOM from "react-dom";

import Link from "next/link";
import Router from "next/router";
import { view_selected_stock_symbol, fetch_sector_data} from "../charts/chart_data_utils.js";

export class List_Stock_Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sorted_prop: "latestVolume",
      sort_state: false, //0 = low->high 1 = high->low
      number_rows: 30, //starting default
      all_data: props.data,
      data: props.data
        .sort((a, b) => this.high_to_low(a, b, "latestVolume"))
        .slice(0, 30)
    };
    this.load_more_data = this.load_more_data.bind(this);
  }

  high_to_low(a, b, prop) {
    if (a[prop] > b[prop]) return -1;
    if (a[prop] < b[prop]) return 1;
    return 0;
  }
  low_to_high(a, b, prop) {
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
    return 0;
  }

  sort_by(prop, flag) {
    console.log(prop, flag);
    //flag true dont switch sort_state
    const number_rows = this.state.number_rows;
    this.setState({ sorted_prop: prop });
    var sort_state = this.state.sort_state;
    /* Flag for not resetting sort_state */
    if (flag) sort_state = !sort_state;

    if (sort_state) {
      this.setState({ sort_state: false });
      this.setState({
        data: this.state.all_data
          .sort((a, b) => this.high_to_low(a, b, prop))
          .slice(0, number_rows)
      });
    } else {
      this.setState({ sort_state: true });
      this.setState({
        data: this.state.all_data
          .sort((a, b) => this.low_to_high(a, b, prop))
          .slice(0, number_rows)
      });
    }
  }
  load_more_data() {
    console.log("LOAD MORE DATA");
    const { number_rows } = this.state;
    this.setState({
      number_rows: this.state.number_rows + 30
    });
    /* Wait for next loops cycle to update state... */
    setTimeout(() => {
      this.sort_by(this.state.sorted_prop, true);
    }, 0);
  }

  render() {
    const data = this.state.data;
    const { title } = this.props;
    const { props } = this.props;
    // console.log(props)
    // console.log(this.props)

    return (
      <>
        {/* Avoid rendering if data array is empty */}
        {data && data.length > 0 && (
          <div className="col-12">
            <div className="row flex_center">
              <h5>{title}</h5>
            </div>
            <Stock_List_Header
              sorted_prop={this.state.sorted_prop}
              sort_state={this.state.sort_state}
              sort_by={prop => this.sort_by(prop)}
              // on_sort={this}
            />

            <div className="row_container">
              {data.map((stock_data, index) => (
                <Display_Stock_Row
                  key={index}
                  index={index}
                  stock_data={stock_data}
                  props={props}
                />
              ))}
            </div>
            {this.state.all_data.length > 30 && (
              <More_Rows handle_click={this.load_more_data} />
            )}
          </div>
        )}
      </>
    );
  }
}

export const Sector_Performance = ({ data, props }) => (
  <div className="col-12 ">
    <div className="row flex_center">
      <h5>Sector Performance</h5>
      <div className="col-12">
        {data.map((data, key) => (
          <Display_Sector_Row key={key} data={data} index={key} props={props} />
        ))}
      </div>
    </div>
  </div>
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

const Display_Sector_Row = ({ data, index, props }) => {
  const { name, performance } = data;
  let class_name = index % 2 == 0 ? "ticker_row_light" : "ticker_row_dark";

  return (
    <div className={`row clickable ${class_name}`}>
      <div
        className="col-6 flex_center"
        onClick={
          () => fetch_sector_data(name, props)
        }
      >
        <Symbol symbol={name} />
      </div>
      <div className="col-6 flex_center">
        <Percent_Change precent_change={performance} />
      </div>
    </div>
  );
};

function Display_Stock_Row({ stock_data, index, props }) {
  const { symbol, latestPrice, changePercent, latestVolume } = stock_data;
  let class_name = index % 2 == 0 ? "ticker_row_light" : "ticker_row_dark";

  return (
    <div
      className={`row clickable ${class_name}`}
      onClick={() => view_selected_stock_symbol(symbol, props)}
    >
      <div className="col-2 flex">
        <Symbol symbol={symbol} />
      </div>

      <div className="col-3 flex_end">
        <Percent_Change precent_change={changePercent} />
      </div>
      <div className="col-3 flex_end">
        <Price price={latestPrice} />
      </div>

      <div className="col-4 flex_end">
        <Volume vol={latestVolume} />
      </div>
    </div>
  );
}

const Stock_List_Header = ({ sort_by, sort_state, sorted_prop }) => {
  return (
    <div className="row">
      <div className="align_items_center col-2 flex">
        <h6 onClick={() => sort_by("symbol")}>Sym.</h6>
        {sort_state && sorted_prop == "symbol" && <div className="arrow-up" />}

        {!sort_state && sorted_prop == "symbol" && (
          <div className="arrow-down" />
        )}
      </div>
      <div className="align_items_center col-3 flex_end">
        <h6 onClick={() => sort_by("changePercent")}>Perc.</h6>
        {sort_state && sorted_prop == "changePercent" && (
          <div className="arrow-up" />
        )}
        {!sort_state && sorted_prop == "changePercent" && (
          <div className="arrow-down" />
        )}{" "}
      </div>
      <div className="align_items_center col-3 flex_end">
        <h6 onClick={() => sort_by("latestPrice")}>Price</h6>
        {sort_state && sorted_prop == "latestPrice" && (
          <div className="arrow-up" />
        )}

        {!sort_state && sorted_prop == "latestPrice" && (
          <div className="arrow-down" />
        )}
      </div>
      <div className="align_items_center col-4 flex_end">
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
