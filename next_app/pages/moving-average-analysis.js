import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import Router from "next/router";

import { ensure_loggedin } from "../components/utils/auth.js";

import Main_Layout from "../layouts/Main_Layout.js";
import { query } from "express-validator/check";
class MA_Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  submit_query() {
    console.log("AJAX");
    console.log(this.state.queries)
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
    queries.push(queries);
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


  render() {
    // console.log(this.props)
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

        {/* select greate or lesser */}
        {/* select  Percentage */}
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
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
