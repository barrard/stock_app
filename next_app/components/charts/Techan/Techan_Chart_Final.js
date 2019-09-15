import React from "react";
import Head from "next/head";

// import * as d3 from 'd3'
// import {event as sourceEvent} from 'd3';
// import {event as currentEvent} from 'd3-selection'
// var d3 = require("d3");
// {event as currentEvent} from ('d3-selection')
// var {event} = require('d3-selection')
// console.log(event)
// window.d3 = d3
// var techan = require("techan");
class Techan_Chart_Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 20, right: 20, bottom: 30, left: 50 }
    };
    this.recieve_new_minute_data = this.recieve_new_minute_data.bind(this)
    this.zoomed = this.zoomed.bind(this)
    this.init_chart = this.init_chart.bind(this)
    this.draw = this.draw.bind(this)


  }
  componentWillUnmount() {
    this._ismounted = false;
  }
  componentDidMount() {
    let {socket, symbol} = this.props 
    socket.on(`new_minutley_bar`, this.recieve_new_minute_data);
    console.log("TEC HAN");
    this._ismounted = true;

    setTimeout(() => this.init_chart(), 0);
  }

  init_chart() {
    let { _width, _height, divId, symbol } = this.props;
    let { margin } = this.state;
    let width = _width - margin.left - margin.right;
    let height = _height - margin.top - margin.bottom;

    this.state.width = width;
    this.state.height = height;

    this.zoom = d3.zoom().on("zoom", this.zoomed);


    this.state.svg = d3
      .select(`#${divId}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    this.state.parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");
    this.state.x = techan.scale.financetime().range([0, width]);

    this.state.y = d3.scaleLinear().range([height, 0]);


    this.state.candlestick = techan.plot
      .candlestick()
      .xScale(this.state.x)
      .yScale(this.state.y);

    this.state.xAxis = d3.axisBottom(this.state.x);

    this.state.yAxis = d3.axisLeft(this.state.y);

    this.state.svg
      .append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("x", 0)
      .attr("y", this.state.y(1))
      .attr("width", width)
      .attr("height", this.state.y(0) - this.state.y(1));

    this.state.svg
      .append("g")
      .attr("class", "candlestick")
      .attr("clip-path", "url(#clip)");

    this.state.svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")");

    this.state.svg
      .append("g")
      .attr("class", "y axis")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

    this.state.svg
      .append("rect")
      .attr("class", "pane")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("pointer-events" ,"all")
      .call(this.zoom);

    this.state.accessor = this.state.candlestick.accessor();
console.log(this.props)
    this.state.data = this.props.data[symbol].chart_data

      .slice(0, 200)
      .map((d)=> {
        return {
          date: this.state.parseDate(d.start_timestamp),
          open: +d.open,
          high: +d.high,
          low: +d.low,
          close: +d.close,
          volume: +d.volume
        };
      })
      .sort((a, b) =>{
        return d3.ascending(this.state.accessor.d(a), this.state.accessor.d(b));
      });
      // this.state.x.domain(this.state.data.map(this.state.accessor.d));
      // this.state.y.domain(techan.scale.plot.ohlc(this.state.data, this.state.accessor).domain());
  
      

      this.setState({
        zoomableInit : this.state.x.zoomable().clamp(false).copy()
      })

    setTimeout(() => {
      this.draw()}, 0);
  }

  zoomed() {
    console.log('ZOOM')
    let {y, yAxis, candlestick, zoomableInit} = this.state
    let x = Object.assign(this.state.x, {})
    var rescaledY = d3.event.transform.rescaleY(y);
    yAxis.scale(rescaledY);
    candlestick.yScale(rescaledY);
  
    console.log(x(1))
    // Emulates D3 behaviour, required for financetime due to secondary zoomable scale
    x.zoomable().domain(d3.event.transform.rescaleX(zoomableInit).domain());
    console.log(x(1))
console.log(this.state)
    this.setState({
      x 
    })
    this.draw()
    // setTimeout(()=>, 0)
  }

  draw() {
    let data = [...this.state.data];
    let {y, x, accessor, svg, candlestick, xAxis, yAxis} = this.state
    if (this.props.latest_minute_data) {
      data.unshift(this.props.latest_minute_data.ES);
    }
    x.domain(data.map(accessor.d));
    y.domain(techan.scale.plot.ohlc(data, accessor).domain());

    svg.select("g.candlestick").datum(data);

    this.state.zoomableInit = this.state.x.zoomable().clamp(true).copy()
  

    svg.select("g.candlestick").call(candlestick);
    svg.select("g.x.axis").call(xAxis);
    svg.select("g.y.axis").call(yAxis)
  }

  recieve_new_minute_data(new_minute_bar) {
    let { data } = this.state;
    let new_symbol_data = new_minute_bar[this.props.symbol];
    let symbol_data = data;
    symbol_data.push(new_symbol_data);
    data = symbol_data;
    this.setState({
      data
    });
  }

  render() {
    return <></>;
  }
}

export default Techan_Chart_Basic;
