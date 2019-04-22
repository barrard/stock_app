import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import Router from "next/router";

import Main_Layout from "../layouts/Main_Layout.js";
class Admin_Pannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: "",
      img: "",
      entry: "",
      stop: "",
      first_target: "",
      second_target: "",
      ranking: "",
      notes: ""
    };
  }
  static async getInitialProps(ctx) {
    console.log("ADMIN");

    return {};
  }

  componentDidMount() {}

  handle_input(e, prop) {
    this.setState({ [prop]: e.target.value });
    console.log({ prop });
  }
  submit_new_post(e){
    e.preventDefault()
    console.log(e)
  }
  readIMG(input) {
    console.log('upload')
    if (input.files && input.files[0]) {
      console.log('no this file')

      var reader = new FileReader();
      reader.onload = function (e) {
        console.log('here it is')
        $('#chart')
          .attr('src', e.target.result)

      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  render() {
    // console.log(this.props)
    return (
      <Main_Layout>
        <div className="container ">
        <div className='row flex_center relative '>
        <div className="col-sm-6 absolute trade_post_form_overlay transparent">
            <Trade_Post_Form
              readIMG={this.readIMG}
              submit_new_post={this.submit_new_post}
              handle_input={(e, prop) => this.handle_input(e, prop)}
            />
          </div>
 
          <div className='col-sm-12 flex_center under_1'>
            <img src="" alt="" id="chart" />
          </div>
        </div>
        </div>
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect(mapStateToProps)(withRouter(Admin_Pannel));










const Trade_Post_Form = ({ handle_input, submit_new_post, readIMG }) => {
  return (
    <form>
      <input type="file" name="chart" onChange={e => readIMG(e.target)} />
      <Input label={"Symbol"} prop={"symbol"} handle_input={handle_input} />

      <Input label={"Entry"} prop={"entry"} handle_input={handle_input} />

      <Input label={"Stop"} prop={"stop"} handle_input={handle_input} />

      <Input
        label={"First Target"}
        prop={"first_target"}
        handle_input={handle_input}
      />

      <Input
        label={"Second Target"}
        prop={"second_target"}
        handle_input={handle_input}
      />

      <div className="form-group">
        <label htmlFor="trade dirrection">Trade Dirrection</label>
        <select
          onChange={e => handle_input(e, "direction")}
          className="form-control opaque"
        >
          <option value="long">Long</option>
          <option value="short">Short</option>
        </select>
      </div>
      <div className="form-group">
        <label>Level Of Certainty</label>
        <select
          onChange={e => handle_input(e, "certainty")}
          className="form-control opaque"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="Notes">Notes</label>
        <textarea
          onChange={e => handle_input(e, "notes")}
          className="form-control opaque"
          rows="3"
        />
      </div>
      <button onClick={e => submit_new_post(e)}>Submit</button>
    </form>
  );
};

const Input = ({ label, prop, handle_input }) => (
  <div className="form-group">
    <label htmlFor="symbol">{label}</label>
    <input
      onChange={e => handle_input(e, prop)}
      type="text"
      className="form-control opaque"
      placeholder="symbol@example.com"
    />
  </div>
);
