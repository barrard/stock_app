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
      margin: { top: 20, right: 20, bottom: 30, left: 50 },
      ohlc: { height: 305 },
      indicator: { height: 65, padding: 5 }

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

    this.init_chart();

    this.draw_chart();
  }

  init_chart() {
    if (!this._ismounted) return;
    console.log('init')

    let { data, divId, _width, _height, latest_minute_data } = this.props;

    let { margin, ohlc, indicator } = this.state;
    let dim = {
      width: _width,
      height: _height,
      margin: margin,
      ohlc: ohlc,
      indicator: indicator
    };
    dim.plot = {
      width: dim.width - dim.margin.left - dim.margin.right,
      height: dim.height - dim.margin.top - dim.margin.bottom
    };

    dim.indicator.top = dim.ohlc.height + dim.indicator.padding;
    dim.indicator.bottom =
      dim.indicator.top + dim.indicator.height + dim.indicator.padding;

    var indicatorTop = d3
      .scaleLinear()
      .range([dim.indicator.top, dim.indicator.bottom]);

    var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

    /* Main SVG element */
    this.state.svg = d3
      .select(`#${divId}`)
      .append("svg")
      .attr("width", dim.width)
      .attr("height", dim.height);



    this.state.defs = this.state.svg.append("defs");

    this.state.defs
      .append("clipPath")
      .attr("id", "ohlcClip")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", dim.plot.width)
      .attr("height", dim.ohlc.height);

    this.state.defs
      .selectAll("indicatorClip")
      .data([0, 1])
      .enter()
      .append("clipPath")
      .attr("id", function(d, i) {
        return "indicatorClip-" + i;
      })
      .append("rect")
      .attr("x", 0)
      .attr("y", function(d, i) {
        return indicatorTop(i);
      })
      .attr("width", dim.plot.width)
      .attr("height", dim.indicator.height);

    this.state.svg = this.state.svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    this.state.svg
      .append("text")
      .attr("class", "symbol")
      .attr("x", 20)
      .text("Facebook, Inc. (FB)");

    /* x-axis data */
    this.state.x = techan.scale.financetime().range([0, dim.plot.width]);

    /* y-axis data */
    this.state.y = d3.scaleLinear().range([dim.ohlc.height, 0]);

    /* y-axis object LEFT*/
    this.state.yAxis = d3.axisLeft(this.state.y);
    /* y-axis object RIGHT*/
    this.state.yRightAxis = d3.axisRight(this.state.y);

    /* x-axis bottom */
    this.state.xAxis = d3.axisBottom(this.state.x);

    this.state.yVolume = d3
      .scaleLinear()
      .range([this.state.y(0), this.state.y(0.2)]);

    this.state.candlestick = techan.plot
      .candlestick()
      .xScale(this.state.x)
      .yScale(this.state.y);

    /* adding dates to x-axis */
    this.state.timeAnnotation = techan.plot
      .axisannotation()
      .axis(this.state.xAxis)
      .orient("bottom")
      .format(d3.timeFormat("%Y-%m-%d"))
      .width(65)
      .translate([0, dim.plot.height]);

    /* left side y-axis */
    this.state.ohlcAnnotation = techan.plot
      .axisannotation()
      .axis(this.state.yAxis)
      .orient("left")
      .accessor(this.state.candlestick.accessor())
      .format(d3.format(",.2f"));

    /* right side y-axis */
    this.state.ohlcRightAnnotation = techan.plot
      .axisannotation()
      .axis(this.state.yRightAxis)
      .orient("right")
      .accessor(this.state.candlestick.accessor())
      .translate([dim.plot.width, 0]); // Translation can be optionally set here, or over the group

    /* the label for the cloding price on right side axis */
    this.state.closeAnnotation = techan.plot
      .axisannotation()
      .axis(this.state.yAxis)
      .orient("right")
      .accessor(this.state.candlestick.accessor())
      .format(d3.format(",.2f"))
      .translate([this.state.x(1), 0]);

    /* appending the x-axis */
    this.state.svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + dim.plot.height + ")");

    /* setting up the OHLC anotation? */

    var ohlcSelection = this.state.svg
      .append("g")
      .attr("class", "ohlc")
      .attr("transform", "translate(0,0)");

    /* appending the y axis */
    ohlcSelection
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + dim.plot.width + ",0)");

    ohlcSelection
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + this.state.x(1) + ",0)")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -12)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

    ohlcSelection.append("g").attr("class", "close annotation up");

    ohlcSelection
      .append("g")
      .attr("class", "volume")
      .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection
      .append("g")
      .attr("class", "candlestick")
      .attr("clip-path", "url(#ohlcClip)");

    //     ohlcSelection
    //       .append("g")
    //       .attr("class", "indicator sma ma-0")
    //       .attr("clip-path", "url(#ohlcClip)");

    //     ohlcSelection
    //       .append("g")
    //       .attr("class", "indicator sma ma-1")
    //       .attr("clip-path", "url(#ohlcClip)");

    //     ohlcSelection
    //       .append("g")
    //       .attr("class", "indicator ema ma-2")
    //       .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection.append("g").attr("class", "percent axis");

    ohlcSelection.append("g").attr("class", "volume axis");

    let accesor = this.state.candlestick.accessor();
    console.log(data);
    data = data.ES.chart_data
      //       .slice(0, 200)
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
        return d3.ascending(accesor.d(a), accesor.d(b));
      });
  }

  draw_chart() {
    let indicatorPreRoll = 33;
    let { data } = this.props;
    data = data.ES.chart_data;


    let {
      xAxis,
      x,
      svg,
      ohlcAnnotation,
      ohlcRightAnnotation,
      closeAnnotation
    } = this.state;

    this.state.x.domain(techan.scale.plot.time(data).domain());
    this.state.y.domain(
      techan.scale.plot.ohlc(data.slice(indicatorPreRoll)).domain()
    );

    this.state.yVolume.domain(techan.scale.plot.volume(data).domain());

    svg.select("g.x.axis").call(xAxis);
    svg
      .selectAll("g.y.annotation.left")
      .datum(data[50])
      .call(ohlcAnnotation);
    svg
      .select("g.close.annotation")
      .datum([data[data.length - 1]])
      .call(closeAnnotation);

    console.log("draw");
  }

  render() {
    // if (typeof d3 == "undefined") return "NO D3";

    return <></>;
  }
}

export default Techan_Chart_Basic;
