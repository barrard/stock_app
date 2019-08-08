import React from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'next/router';
/* Might move this somewhere else */
import io from 'socket.io-client'

import Main_Layout from '../layouts/Main_Layout.js';
class Contracts extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      commodity_data:{
        '/ES':{},
        '/GC':{},
        '/CL':{},
      }
    }
  }
  componentDidMount(){
    var isBrowser = typeof window !== 'undefined';
    if(isBrowser){
      var socket = io('http://192.168.0.93:3003', {secure:true});
      socket.emit('socket-test-id', 'test-data')
      socket.on(`connect`, data => {
        console.log('TEST')
        // this.setState({ data })
      })
      socket.on('wtf', ()=>{
        console.log('WTF???')
      })
      socket.on(`commodity_data`, commodity_data => {
        console.log(commodity_data)
        this.setState({ commodity_data })
      })
    }

  }
  render(){
    let {commodity_data} = this.state
    let ES = commodity_data['/ES']
    let GC = commodity_data['/GC']
    let CL = commodity_data['/CL']
    return(
      <Main_Layout>
      <p>ES is {ES.lastPriceInDouble} at {new Date(ES.tradeTimeInLong).toLocaleString()}</p>
      <p>CL is {CL.lastPriceInDouble} at {new Date(CL.tradeTimeInLong).toLocaleString()}</p>
      <p>GC is {GC.lastPriceInDouble} at {new Date(GC.tradeTimeInLong).toLocaleString()}</p>
      </Main_Layout>
    )
  }
}


function mapStateToProps(state) {
  const { user, csrf, locals, crowdsales, two_factor_auth } = state;
  return { ...user, ...csrf, ...locals, ...crowdsales, ...two_factor_auth };
}


export default connect(mapStateToProps)(withRouter(Contracts));