import React from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'next/router';
import Router from 'next/router';

import {ensure_loggedin} from '../components/utils/auth.js'
import {get_sector_data} from '../redux/actions/stock_actions.js'
import {List_Stock_Data} from '../components/landing_page_components/List_Stock_Data.js'


import Main_Layout from '../layouts/Main_Layout.js';
class Sector_View extends React.Component{
  constructor(props) {
    super(props);
    this.state={}
  }
  static async getInitialProps(ctx){
    const sector = ctx.query.sector
    const store = ctx.store.getState()
    const iex_api = store.meta.iex_server
    const sector_data = store.stock_data.sector_data[sector]
    if(!sector_data) await ctx.store.dispatch(get_sector_data(sector, iex_api))


    return {sector}

  }
  componentDidMount(){
    window.scrollTo(0,0)

  }
  render(){
    const title = this.props.sector
    return(
      <Main_Layout>
        <div className='row flex_center'>
          <div className='col-12 flex_center'>
          <h1>{this.props.sector}</h1>
          </div>
        </div>
       <div className='row'>
         <div className='col-sm-6 '>
           <div className='row '>
           <List_Stock_Data 
          props={this.props}
          title={title}
          data={this.props.stock_data.sector_data[title]}
        />
      
           </div>
         </div>
         <div className='col-sm-6'>
           <div className='row'>
             News
           </div>
         </div>
       </div>
      </Main_Layout>
    )
  }
}


function mapStateToProps(state) {
  const { user, stock_data, meta } = state;
  return { user, stock_data, meta };
}


export default connect(mapStateToProps)(withRouter(Sector_View));