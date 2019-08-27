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
      ohlc:'',//techan object
      bar_couter: 0,
      margin: { top: 20, right: 20, bottom: 30, left: 100 }
      // width:960, height:500
    };

    // this.redraw = this.redraw.bind(this)
  }
  componentWillUnmount() {
    this._ismounted = false;
  }
  componentDidMount() {
    console.log("TEC HAN");
    this._ismounted = true;

    this.draw_chart();
  }

  draw_chart() {
    if (!this._ismounted) return;

    // if(typeof(d3)=='undefined' || typeof(techan)=='undefined'){
    //   return setTimeout(()=>{
    //     this.draw_chart()
    //   }, 100)
    // }
    // setTimeout(()=> this.draw_chart(), 2000)

    let { data, divId, _width, _height, latest_minute_data } = this.props,
      { margin } = this.state,
      width = _width - margin.left - margin.right,
      height = _height - margin.top - margin.bottom;

    var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

    this.state.x = techan.scale.financetime().range([0, width * 0.8]);

    this.state.y = d3.scaleLinear().range([height, 0]);

    this.state.yVolume = d3.scaleLinear().range([this.state.y(0), this.state.y(0.2)]);

    this.state.ohlc = techan.plot
      .ohlc()
      .xScale(this.state.x)
      .yScale(this.state.y);

    // var candlestick = techan.plot
    //   .candlestick()
    //   .xScale(x)
    //   .yScale(y);
    this.state.sma0 = techan.plot
      .sma()
      .xScale(this.state.x)
      .yScale(this.state.y);

    this.state.sma0Calculator = techan.indicator.sma().period(10);

    this.state.sma1 = techan.plot
      .sma()
      .xScale(this.state.x)
      .yScale(this.state.y);

      this.state.sma1Calculator = techan.indicator.sma().period(20);

    this.state.volume = techan.plot
      .volume()
      .accessor(this.state.ohlc.accessor()) // Set the accessor to a ohlc accessor so we get highlighted bars
      .xScale(this.state.x)
      .yScale(this.state.yVolume);

    this.state.xAxis = d3.axisBottom().scale(this.state.x);

    this.state.yAxis = d3.axisLeft().scale(this.state.y);
    // let techan_charts_count = document.querySelector("#techan_chart_div").children
    //   .length;

    // if (techan_charts_count > 0) return <></>; /* return nothing */
    this.state.volumeAxis = d3
      .axisRight(this.state.yVolume)
      .ticks(3)
      .tickFormat(d3.format(",.3s"));

    var timeAnnotation = techan.plot
      .axisannotation()
      .axis(this.state.xAxis)
      .orient("bottom")
      .format(d3.timeFormat("%Y-%m-%dT%H:%M:%S.%LZ"))
      .width(65)
      .translate([0, height]);

    var ohlcAnnotation = techan.plot
      .axisannotation()
      .axis(this.state.yAxis)
      .orient("left")
      .format(d3.format(",.2f"));

    var volumeAnnotation = techan.plot
      .axisannotation()
      .axis(this.state.volumeAxis)
      .orient("right")
      .width(35);

    this.state.crosshair = techan.plot
      .crosshair()
      .xScale(this.state.x)
      .yScale(this.state.y)
      .xAnnotation(timeAnnotation)
      .yAnnotation([ohlcAnnotation, volumeAnnotation])
      .on("move", coords =>
        this.move_mouse(coords, coordsText, timeAnnotation, ohlcAnnotation)
      );

    this.state.svg = d3
      .select(`#${divId}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    // .append("g")
    // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var defs = this.state.svg.append("defs");

    defs
      .append("clipPath")
      .attr("id", "ohlcClip")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height);

    this.state.svg = this.state.svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var ohlcSelection = this.state.svg
      .append("g")
      .attr("class", "ohlc")
      .attr("transform", "translate(0,0)");

    ohlcSelection
      .append("g")
      .attr("class", "volume")
      .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection
      .append("g")
      .attr("class", "candlestick")
      .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection
      .append("g")
      .attr("class", "indicator sma ma-0")
      .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection
      .append("g")
      .attr("class", "indicator sma ma-1")
      .attr("clip-path", "url(#ohlcClip)");

    this.state.svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")");
    this.state.closeAnnotation = techan.plot.axisannotation()
      .axis(this.state.yAxis)
      .orient('right')
      .accessor(this.state.ohlc.accessor())
      .format(d3.format(',.2f'))
      .translate([this.state.x(1), 0]);

    this.state.svg
      .append("g")
      .attr("class", "y axis")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");
      this.state.svg.select("g.close.annotation").datum([data[data.length-1]]).call(this.state.closeAnnotation);


    this.state.svg.append("g").attr("class", "volume axis");

    this.state.svg.append("g").attr("class", "crosshair ohlc");

    var coordsText = this.state.svg
      .append("text")
      .style("text-anchor", "end")
      .attr("class", "coords")
      .attr("x", width - 5)
      .attr("y", 15);

    // var accessor = candlestick.accessor();
    var accessor = this.state.ohlc.accessor();

    console.log(data);
    let ES;
    if (latest_minute_data) {
      ES = latest_minute_data["ES"];
      console.log({ ES });
      data.push(ES);
    }
    data = data.ES.chart_data
    data = data
      // .slice(0, 20)
      .map(function(d) {
        return {
          date: parseDate(d.start_timestamp),
          open: +d.open,
          high: +d.high,
          low: +d.low,
          close: +d.close,
          volume: +d.volume
        };
      })
      .sort(function(a, b) {
        return d3.ascending(accessor.d(a), accessor.d(b));
      });

    // svg.append("g").attr("class", "candlestick");

    // Data to display initially
    // draw(data.slice(0, data.length - 20));
    this.redraw(data.slice(0, data.length));
  }

  redraw(data) {
    let {xAxis,
      yAxis, ohlc, volumeAxis, svg, x, y, yVolume, sma0Calculator, sma0, sma1Calculator, volume,
      sma1, crosshair, closeAnnotation} = this.state
    var accessor = this.state.ohlc.accessor();

    x.domain(data.map(accessor.d));
    // Show only 150 points on the plot
    x.zoomable().domain([0, data.length]);

    // Update y scale min max, only on viewable zoomable.domain()
    y.domain(techan.scale.plot.ohlc(data.slice(0, data.length)).domain());
    yVolume.domain(
      techan.scale.plot.volume(data.slice(0, data.length)).domain()
    );

    // Setup a transition for all that support
    svg
      //          .transition() // Disable transition for now, each is only for transitions
      .each(function() {

        var selection = d3.select(this);
        selection.select("g.x.axis").call(xAxis);
        selection.select("g.y.axis").call(yAxis);
        console.log({selection})
        selection.select("g.volume.axis").call(volumeAxis);
        svg.select("g.close.annotation").call(closeAnnotation.refresh);

        selection
          .select("g.candlestick")
          .datum(data)
          .call(ohlc);
        selection
          .select("g.sma.ma-0")
          .datum(sma0Calculator(data))
          .call(sma0);
        selection
          .select("g.sma.ma-1")
          .datum(sma1Calculator(data))
          .call(sma1);
        selection
          .select("g.volume")
          .datum(data)
          .call(volume);

        svg.select("g.crosshair.ohlc").call(crosshair);
      });
  }

  move_mouse(coords, coordsText, timeAnnotation, ohlcAnnotation) {
    // console.log({ coords });
    coordsText.text(
      timeAnnotation.format()(coords.x) +
        ", " +
        ohlcAnnotation.format()(coords.y)
    );
  }

  render() {
    // if (typeof d3 == "undefined") return "NO D3";

    return (
      <></>
    );
  }
}

export default Techan_Chart_Basic;
