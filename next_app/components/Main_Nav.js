import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Link from "next/link";

import { set_symbols_data } from "../redux/actions/stock_actions.js";
class Main_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_symbol: "",
      filtered_stock_list: [],
      searching: true,
      stock_selected: false
    };
    this.handle_seach_symbol_input = this.handle_seach_symbol_input.bind(this);
    this.make_filter_list = this.make_filter_list.bind(this);
    this.highlight_search_letters = this.highlight_search_letters.bind(this);
    this.filtered_stock_list_item = this.filtered_stock_list_item.bind(this);
  }
  async componentDidMount() {
    console.log("asdasd");
    const { api_server } = this.props.meta;
    try {
      const { has_symbols_data } = this.props.stock_data;
      if (has_symbols_data) return;
      let all_stock_symbols_json = await fetch(`
        ${api_server}/stock/get_symbols_data
      `);
      let all_stock_symbols = await all_stock_symbols_json.json();
      console.log(all_stock_symbols);
      this.props.dispatch(set_symbols_data(all_stock_symbols));
    } catch (err) {
      console.log("err");
      console.log(err);
    }
  }

  handle_seach_symbol_input(e, prop) {
    this.setState({ [prop]: e.target.value });
    this.make_filter_list(e.target.value);
  }
  handle_search(e) {
    e.preventDefault();
    console.log(this.state.search);
  }

  make_filter_list(search_text) {
    var search_text = search_text.toLowerCase();
    let full_list = this.props.stock_data.symbols_data.symbols;
    if (!full_list) {
      /* wait a second...  try again */
      setTimeout(() => this.make_filter_list(search_text), 100);
      return;
    }

    /* check symbols */
    let symbol_list = full_list.filter(list_item =>
      list_item.symbol.toLowerCase().includes(search_text)
    );

    /* check name */
    let name_list = full_list.filter(list_item =>
      list_item.name.toLowerCase().includes(search_text)
    );

    console.log({ symbol_list, name_list });
    let filtered_stock_list = [...symbol_list, ...name_list].splice(0, 10);
    console.log({ filtered_stock_list });
    this.setState({ filtered_stock_list });
  }

  Filtered_Stock_List({ filtered_stock_list, search_symbol }) {
    return (
      <div className="filtered_stock_list">
        {filtered_stock_list.map((data, index) =>
          this.filtered_stock_list_item(data, index, search_symbol)
        )}
      </div>
    );
  }
  filtered_stock_list_item(data, index, search) {
    return (
      <div className="filtered_stock_list_item" key={index}>
        <span
          dangerouslySetInnerHTML={this.highlight_search_letters(
            data.symbol,
            search
          )}
        />
        {' - '}
        <span
          dangerouslySetInnerHTML={this.highlight_search_letters(
            data.name,
            search
          )}
        />
      </div>
    );
  }

  highlight_search_letters(name, search) {
    console.log({ name, search });
    let index_of_search_term_name = name
      .toLowerCase()
      .indexOf(search.toLowerCase());

    console.log({ index_of_search_term_name });
    if (index_of_search_term_name >= 0) {
      var split_name = name.split("");

      split_name.splice(
        index_of_search_term_name + search.length,
        0,
        `</span>`
      );
      console.log({ split_name });

      split_name.splice(
        index_of_search_term_name,
        0,
        `<span class="highlight_search">`
      );
      console.log({ split_name });

      name = split_name.join("");
    }
    console.log(name);

    return { __html: name };
  }

  render() {
    let is_loggedin = this.props.user.is_loggedin;
    let { pathname } = this.props.router;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light relative">
        <Link prefetch href="/landing" as="/">
          <a className="navbar-brand">Home</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {!is_loggedin && <Register_Login_Links pathname={pathname} />}
            {is_loggedin && <Logout_Link pathname={pathname} />}

            <Nav_Dropdown pathname={pathname} />
          </ul>
          <Navbar_Search
            handle_search_input={e =>
              this.handle_seach_symbol_input(e, "search_symbol")
            }
            handle_search={e => this.handle_search(e)}
          />
        </div>
        {this.Filtered_Stock_List({
          filtered_stock_list: this.state.filtered_stock_list,
          search_symbol: this.state.search_symbol
        })}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { user, meta, stock_data } = state;
  return { user, meta, stock_data };
}

export default connect(mapStateToProps)(withRouter(Main_Nav));

/*              Nav components               */

const Navbar_Search = ({ handle_search_input, handle_search }) => (
  <form className="form-inline my-2 my-lg-0">
    <input
      onChange={e => handle_search_input(e)}
      className="form-control mr-sm-2"
      type="search"
      placeholder="Search Symbols"
      aria-label="Search"
    />
    <button
      onClick={e => handle_search(e)}
      className="btn btn-outline-success my-2 my-sm-0"
      type="submit"
    >
      Search
    </button>
  </form>
);

const Nav_Dropdown = ({ pathname }) => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="#">
        Action
      </a>
      <a className="dropdown-item" href="#">
        Another action
      </a>
      <div className="dropdown-divider" />
      <a className="dropdown-item" href="#">
        Something else here
      </a>
    </div>
  </li>
);

const Logout_Link = ({ pathname }) => (
  <>
    <Navbar_Links
      name="Profile"
      path={"/account-profile"}
      pathname={pathname}
    />

    <Navbar_Links name="Logout" path={"/auth/logout"} pathname={pathname} />
  </>
);

const Register_Login_Links = ({ pathname }) => (
  <>
    <Navbar_Links name="Login" path={"/login"} pathname={pathname} />

    <Navbar_Links name="Sign Up" path={"/sign-up"} pathname={pathname} />
  </>
);

const Navbar_Links = ({ path, pathname, name }) => (
  <li className="nav-item">
    <Link href={path}>
      <a
        className={`${
          pathname == path ? "active " : " "
        }" nav-link dropdown-item"`}
      >
        {name}
      </a>
    </Link>
  </li>
);
