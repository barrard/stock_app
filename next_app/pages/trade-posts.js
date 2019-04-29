import React from "react";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import { withRouter } from "next/router";
import Router from "next/router";

import Main_Layout from "../layouts/Main_Layout.js";
class Trade_Posts extends React.Component {
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
    this.handle_view_click = this.handle_view_click.bind(this);
  }
  static async getInitialProps(ctx) {
    console.log("TRADE_POSTS");
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



  handle_view_click(id) {
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
      entry,
      stop,
      first_target,
      second_target,
      certainty,
      notes,
      diretion,
      edit_id
    } = this.state;

    // console.log(this.props)
    return (
      <Main_Layout>
        <div className="container vh_100">
          <div className="row flex_center relative ">
            <div className="col-sm-6 absolute trade_post_form_overlay transparent">
              <Trade_Post_View
                diretion={diretion}
                symbol={symbol}
                entry={entry}
                stop={stop}
                first_target={first_target}
                second_target={second_target}
                certainty={certainty}
                notes={notes}
                edit_id={edit_id}

                />
            </div>

            <div className="col-sm-12 flex_center under_1">
              <img
                className="full-width"
                src={ `/static/trade_post_imgs/${file_name}`}
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
                handle_view_click={id => this.handle_view_click(id)}
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

export default connect(mapStateToProps)(withRouter(Trade_Posts));

/* FUNCTIONAL COMPONENTS */
const Previous_Posts_List = ({ posts, handle_view_click }) => (
  <div className="row ">
    <div className="col-sm-12 ">
      {posts.map((post, index) => (
        <Trade_Post
          key={index}
          index={index}
          post={post}
          handle_view_click={id => handle_view_click(id)}
        />
      ))}
    </div>
  </div>
);

const Trade_Post = ({ post, index, handle_view_click, handle_delete_click }) => {
  let class_name = index % 2 == 0 ? "ticker_row_light" : "ticker_row_dark";

  return (
    <div className={`${class_name} row flex_center`}>
      <div className="col-sm-2 flex_center">
        <Symbol symbol={post.symbol} />
      </div>
      <div className="col-sm-2 flex_center">
        <View_Btn handle_click={e => handle_view_click(post._id)} />
      </div>

    </div>
  );
};

const View_Btn = ({ handle_click }) => (
  <button onClick={handle_click} type="button" className="btn btn-info">
    VIEW
  </button>
);



const Symbol = ({ symbol }) => <span className="ticker_symbol">{symbol}</span>;

const Direction_Selection = ({ val }) => (
  <div className="form-group">
    <label htmlFor="trade direction">Trade Direction</label>
    <select
      value={val}
      className="form-control opaque"
    >
      <option value="long">Long</option>
      <option value="short">Short</option>
    </select>
  </div>
);

const Certainty_Selection = ({ val }) => (
  <div className="form-group">
    <label>Level Of Certainty</label>
    <p>{val}</p>
  </div>
);

const Trade_Notes = ({ val }) => (
  <div className="form-group">
    <label htmlFor="Notes">Notes</label>
    <textarea
      value={val}
      className="form-control opaque"
      rows="3"
    />
  </div>
);

const Trade_Post_View = ({
  submit_new_post,
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
      <Input
        val={symbol}
        label={"Symbol"}
        prop={"symbol"}

        />

      <Input
        val={entry}
        label={"Entry"}
        prop={"entry"}

        />

      <Input
        val={stop}
        label={"Stop"}
        prop={"stop"}

        />

      <Input
        val={first_target}
        label={"First Target"}
        prop={"first_target"}

        />

      <Input
        val={second_target}
        label={"Second Target"}
        prop={"second_target"}

        />

      <Direction_Selection
        val={diretion}
      />

      <Certainty_Selection
        val={certainty}
      />

      <Trade_Notes
        val={notes}
      />

      <button onClick={e => submit_new_post(e)}>Submit</button>
    </form>
  );
};

const Input = ({ val, label, prop }) => (
  <div className="form-group">
    <label htmlFor="symbol">{label}</label>
    <input
      value={val}
      type="text"
      className="form-control opaque"
      placeholder={label}
    />
  </div>
);
