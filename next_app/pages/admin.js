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
      posts:props.posts,
      direction: "",
      symbol: "",
      img: "",
      entry: "",
      stop: "",
      first_target: "",
      second_target: "",
      certainty: "",
      notes: "",
      edit_mode: false,
      edit_id: "",
      file_name:''//for edit img loging from server
    };
    this.submit_new_post = this.submit_new_post.bind(this);
    this.readIMG = this.readIMG.bind(this);
    this.handle_edit_click = this.handle_edit_click.bind(this);
  }
  static async getInitialProps(ctx) {
    console.log("ADMIN");
    try {
      let json_posts = await fetch("http://localhost:3003/trade_posts");
      let { posts } = await json_posts.json();
      console.log({ posts });
      return { posts };
    } catch (err) {
      console.log("err");
      console.log(err);
      return {};
    }
  }

  componentDidMount() {}

  handle_input(e, prop) {
    this.setState({ [prop]: e.target.value });
    console.log({ prop });
  }
  async submit_new_post(e) {
    try {
      e.preventDefault();
      console.log(e);
      console.log(this.state);
      const files = Array.from(document.querySelector("[type=file]").files);
      const formData = new FormData();
      console.log(files);
      if (files) files.forEach(file => formData.append("files[]", file));
      let state_data = this.state;
      for (let prop in state_data) {
        console.log(prop, state_data[prop]);
        formData.append(prop, state_data[prop]);
      }
      // formData.append("_csrf", this.props.meta.csrf)
      console.log(formData);
      console.log(this.props.meta.csrf);
      // return

      let json_resp = await fetch("/admin/add_trade_post", {
        method: "POST",
        headers: {
          "csrf-token": this.props.meta.csrf
          // "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
          // "Content-Type": "multipart/form-data",
        },
        body: formData
      });
      toastr.success("New Post Created!");
      this.setState({
        symbol: "",
        img: "",
        entry: "",
        stop: "",
        first_target: "",
        second_target: "",
        certainty: "",
        notes: ""
      });
      let resp = await json_resp.json();
      if (resp.err) {
         throw "Error making new post";
      }
      console.log(resp);
      let posts = [resp, ...this.state.posts]
      this.setState({posts})
    } catch (err) {
      console.log("err");
      console.log(err);
      toastr.error(err);
    }
  }
  readIMG(input) {
    console.log("upload");
    if (input.files && input.files[0]) {
      this.setState({ img: input.files[0].name });

      var reader = new FileReader();
      reader.onload = function(e) {
        $("#chart").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  async handle_delete_click(id){
    let confirm = window.confirm('Are yo usure you want to delete this?')
    if(!confirm)return 
    console.log({ id });
    let delete_post_resp = await fetch('/admin/delete_post',{
      method: "POST",
      headers: {
        "csrf-token": this.props.meta.csrf,
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
        // "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify({id})
    }
    
    )
    let {err, ok} = delete_post_resp
    if(err)return toastr.error(err)

    let posts = this.state.posts.filter(post => post._id !== id);
    console.log({ posts });
    console.log(this.props)

    this.setState({
      posts
    });
  }
  handle_edit_click(id) {
    console.log({ id });
    let [post] = this.props.posts.filter(post => post._id == id);
    console.log({ post });
    let state = { ...this.state, ...post, edit_mode: true, edit_id: post._id };
    this.setState({
      ...state
      // ...this.state, ...post, edit_mode:true, edit_id:post._id
    });
  }
  render() {

    let {
      posts,
      symbol,
      file_name,
      img,
      entry,
      stop,
      first_target,
      second_target,
      certainty,
      notes,
      edit_mode,
      diretion,
      edit_id
    } = this.state;

    // console.log(this.props)
    return (
      <Main_Layout>
        <div className="container vh_100">
          <div className="row flex_center relative ">
            <div className="col-sm-6 absolute trade_post_form_overlay transparent">
              <Trade_Post_Form
                diretion={diretion}
                symbol={symbol}
                // img={img}
                entry={entry}
                stop={stop}
                first_target={first_target}
                second_target={second_target}
                certainty={certainty}
                notes={notes}
                edit_mode={edit_mode}
                edit_id={edit_id}
                readIMG={this.readIMG}
                submit_new_post={this.submit_new_post}
                handle_input={(e, prop) => this.handle_input(e, prop)}
              />
            </div>

            <div className="col-sm-12 flex_center under_1">
              <img
                className="full-width"
                src={this.state.edit_mode ? `/static/trade_post_imgs/${file_name}` : ``}
                alt=""
                id="chart"
              />
            </div>
          </div>
        </div>
        <div className="row flex_center">
          <div className="col-sm-12 ">
            {posts && posts.length > 0 && (
              <Previous_Posts_List
              handle_delete_click={id=>this.handle_delete_click(id)}
                handle_edit_click={id => this.handle_edit_click(id)}
                posts={posts}
              />
            )}
          </div>
        </div>
      </Main_Layout>
    );
  }
}

function mapStateToProps(state) {
  const { user, meta } = state;
  return { user, meta };
}

export default connect(mapStateToProps)(withRouter(Admin_Pannel));

/* FUNCTIONAL COMPONENTS */
const Previous_Posts_List = ({ posts, handle_edit_click, handle_delete_click }) => (
  <div className="row ">
    <div className="col-sm-12 ">
      {posts.map((post, index) => (
        <Trade_Post
          key={index}
          index={index}
          post={post}
          handle_edit_click={id => handle_edit_click(id)}
          handle_delete_click={id => handle_delete_click(id)}
        />
      ))}
    </div>
  </div>
);

const Trade_Post = ({ post, index, handle_edit_click, handle_delete_click }) => {
  let class_name = index % 2 == 0 ? "ticker_row_light" : "ticker_row_dark";

  return (
    <div className={`${class_name} row flex_center`}>
      <div className="col-sm-2 flex_center">
        <Symbol symbol={post.symbol} />
      </div>
      <div className="col-sm-2 flex_center">
        <Edit_Btn handle_click={e => handle_edit_click(post._id)} />
      </div>
      <div className="col-sm-2 flex_center">
        <Delete_Btn handle_click={e=> handle_delete_click(post._id)} />
      </div>
    </div>
  );
};

const Edit_Btn = ({ handle_click }) => (
  <button onClick={handle_click} type="button" className="btn btn-info">
    EDIT
  </button>
);

const Delete_Btn = ({handle_click}) => (
  <button onClick={handle_click} type="button" className="btn btn-danger">
    Delete
  </button>
);

const Symbol = ({ symbol }) => <span className="ticker_symbol">{symbol}</span>;

const Direction_Selection = ({ val, handle_input }) => (
  <div className="form-group">
    <label htmlFor="trade direction">Trade Direction</label>
    <select
      value={val}
      onChange={e => handle_input(e, "direction")}
      className="form-control opaque"
    >
      <option value="long">Long</option>
      <option value="short">Short</option>
    </select>
  </div>
);

const Certainty_Selection = ({ val, handle_input }) => (
  <div className="form-group">
    <label>Level Of Certainty</label>
    <select
      value={val}
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
);

const Trade_Notes = ({ val, handle_input }) => (
  <div className="form-group">
    <label htmlFor="Notes">Notes</label>
    <textarea
      value={val}
      onChange={e => handle_input(e, "notes")}
      className="form-control opaque"
      rows="3"
    />
  </div>
);

const Trade_Post_Form = ({
  handle_input,
  submit_new_post,
  readIMG,
  symbol,
  diretion,
  img,
  entry,
  stop,
  first_target,
  second_target,
  certainty,
  notes,
  edit_mode,
  edit_id
}) => {
  return (
    <form>
      <input type="file" name="chart" onChange={e => readIMG(e.target)} />
      <Input
        val={symbol}
        label={"Symbol"}
        prop={"symbol"}
        handle_input={handle_input}
      />

      <Input
        val={entry}
        label={"Entry"}
        prop={"entry"}
        handle_input={handle_input}
      />

      <Input
        val={stop}
        label={"Stop"}
        prop={"stop"}
        handle_input={handle_input}
      />

      <Input
        val={first_target}
        label={"First Target"}
        prop={"first_target"}
        handle_input={handle_input}
      />

      <Input
        val={second_target}
        label={"Second Target"}
        prop={"second_target"}
        handle_input={handle_input}
      />

      <Direction_Selection
        val={diretion}
        handle_input={(e, prop) => handle_input(e, prop)}
      />

      <Certainty_Selection
        val={certainty}
        handle_input={(e, prop) => handle_input(e, prop)}
      />

      <Trade_Notes
        val={notes}
        handle_input={(e, prop) => handle_input(e, prop)}
      />

      <button onClick={e => submit_new_post(e)}>Submit</button>
    </form>
  );
};

const Input = ({ val, label, prop, handle_input }) => (
  <div className="form-group">
    <label htmlFor="symbol">{label}</label>
    <input
      value={val}
      onChange={e => handle_input(e, prop)}
      type="text"
      className="form-control opaque"
      placeholder={label}
    />
  </div>
);
