import React from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'next/router';
import Router from 'next/router';

import {ensure_loggedin} from '../components/utils/auth.js'


import Main_Layout from '../layouts/Main_Layout.js';
class Account_Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state={}
  }
  static async getInitialProps(ctx){

    return {symbol:ctx.query.symbol}

  }

  componentDidMount(){
    window.scrollTo(0,0)

  }

  
  render(){
    // console.log(this.props)
    return(
      <Main_Layout>
        <h1>{this.props.symbol}</h1>
      
      </Main_Layout>
    )
  }
}


function mapStateToProps(state) {
  const { user } = state;
  return { user };
}


export default connect(mapStateToProps)(withRouter(Account_Profile));