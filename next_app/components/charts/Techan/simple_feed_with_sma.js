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

  componentDidUpdate(prevProps, prevState, snapshot) {
    let { symbol } = this.props;
    // console.log(this.props.data[symbol].chart_data);
    let data = [...this.props.data[symbol].chart_data];
    if (this.props.latest_minute_data) {
      // console.log(this.props.latest_minute_data.ES)
      data.unshift({ ...this.props.latest_minute_data[symbol] });
    }
    // this.draw(data);
    // debugger
  }
  componentWillUnmount() {
    this._ismounted = false;
  }
  componentDidMount() {
    console.log("TEC HAN");
    this._ismounted = true;

    let { _width, _height } = this.props;

    let { margin, ohlc, indicator } = this.state;
    let dim = {
      width: _width,
      height: _height,
      margin: margin,
      ohlc: ohlc,
      indicator: indicator
    };
    // plot_= {
    let plot_width = dim.width - dim.margin.left - dim.margin.right;
    let plot_height = dim.height - dim.margin.top - dim.margin.bottom;
    // };

    dim.indicator.top = dim.ohlc.height + dim.indicator.padding;
    dim.indicator.bottom =
      dim.indicator.top + dim.indicator.height + dim.indicator.padding;
    var indicatorTop = d3
      .scaleLinear()
      .range([dim.indicator.top, dim.indicator.bottom]);

    var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");
    var x = techan.scale.financetime()
    .range([0, plot_width]);

var y = d3.scaleLinear()
    .range([plot_height, 0]);

var yVolume = d3.scaleLinear()
    .range([y(0), y(0.2)]);


    var candlestick = techan.plot
      .candlestick()
      .xScale(x)
      .yScale(y);

var sma0 = techan.plot.sma()
    .xScale(x)
    .yScale(y);

var sma0Calculator = techan.indicator.sma()
    .period(10);

var sma1 = techan.plot.sma()
    .xScale(x)
    .yScale(y);

var sma1Calculator = techan.indicator.sma()
    .period(20);

var volume = techan.plot.volume()
    .accessor(candlestick.accessor())   // Set the accessor to a ohlc accessor so we get highlighted bars
    .xScale(x)
    .yScale(yVolume);

var xAxis = d3.axisBottom(x);

var yAxis = d3.axisLeft(y);
var yRightAxis = d3.axisRight(y);


var volumeAxis = d3.axisRight(yVolume)
    .ticks(3)
    .tickFormat(d3.format(",.3s"));

var timeAnnotation = techan.plot.axisannotation()
    .axis(xAxis)
    .orient('bottom')
    .format(d3.timeFormat('%Y-%m-%d'))
    .width(65)
    .translate([0, plot_height]);

var ohlcAnnotation = techan.plot.axisannotation()
    .axis(yAxis)
    .orient('left')
    .format(d3.format(',.2f'));

var volumeAnnotation = techan.plot.axisannotation()
    .axis(volumeAxis)
    .orient('right')
    .width(35);

var crosshair = techan.plot.crosshair()
    .xScale(x)
    .yScale(y)
    .xAnnotation(timeAnnotation)
    .yAnnotation([ohlcAnnotation, volumeAnnotation])
    // .on("move", move);

    this.setState({
      plot_width,
      plot_height,
      indicatorTop,
      parseDate,
      dim, 
      x,
y,
candlestick,
yVolume,
sma0,
sma0Calculator,
sma1,
sma1Calculator,
volume,
xAxis,
yAxis,
volumeAxis,
timeAnnotation,
ohlcAnnotation,
volumeAnnotation,
crosshair,
    });

    setTimeout(() => this.init_chart(), 0);

  }

  init_chart() {
    if (!this._ismounted) return;
    let { data, divId } = this.props;

    let {
      margin,
      ohlc,
      indicator,
      dim,
      plot_width,
      indicatorTop,
      parseDate,
      plot_height,
      x,
      y,candlestick,
      yVolume,
      sma0,
      sma0Calculator,
      sma1,
      sma1Calculator,
      volume,
      xAxis,
      yAxis,
      volumeAxis,
      timeAnnotation,
      ohlcAnnotation,
      volumeAnnotation,
      crosshair,
    } = this.state;
    console.log(this.state);


    /* Main SVG element */
    let svg = d3
      .select(`#${divId}`)
      .append("svg")
      .attr("width", plot_width + margin.left + margin.right)
      .attr("height", plot_height + margin.top + margin.bottom);


    /* Append att the svg elements and classes */

    var defs = svg.append("defs");

    defs.append("clipPath")
            .attr("id", "ohlcClip")
        .append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", plot_width)
            .attr("height", plot_height);

    svg = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var ohlcSelection = svg.append("g")
            .attr("class", "ohlc")
            .attr("transform", "translate(0,0)");

    ohlcSelection.append("g")
            .attr("class", "volume")
            .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection.append("g")
            .attr("class", "candlestick")
            .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection.append("g")
            .attr("class", "indicator sma ma-0")
            .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection.append("g")
            .attr("class", "indicator sma ma-1")
            .attr("clip-path", "url(#ohlcClip)");

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + plot_height + ")");

    svg.append("g")
            .attr("class", "y axis")
        .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");

    svg.append("g")
            .attr("class", "volume axis");

    svg.append('g')
            .attr("class", "crosshair ohlc");

            /* initilize data */
      var accessor = candlestick.accessor();

      this.state.data = data.ES.chart_data
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
        return d3.ascending(accessor.d(a), accessor.d(b));
      });

      this.setState({
        svg
      })
      /* Draw chart first time after setting the state */
      setTimeout(()=>this.redraw_chart(),0)
  }


  redraw_chart() {
    let {data, svg,      x,
      y,candlestick,
      yVolume,
      sma0,
      sma0Calculator,
      sma1,
      sma1Calculator,
      volume,
      xAxis,
      yAxis,
      volumeAxis,
      timeAnnotation,
      ohlcAnnotation,
      volumeAnnotation,
      crosshair,} = this.state

      console.log('?')


      console.log(candlestick)

    var accessor = candlestick.accessor();

    x.domain(data.map(accessor.d));
    // Show only 150 points on the plot
    x.zoomable().domain([0, data.length]);

    // Update y scale min max, only on viewable zoomable.domain()
    y.domain(techan.scale.plot.ohlc(data).domain());
    yVolume.domain(techan.scale.plot.volume(data).domain());

    // Setup a transition for all that support
    svg
//          .transition() // Disable transition for now, each is only for transitions
        .each(function() {
            var selection = d3.select(this);
            selection.select('g.x.axis').call(xAxis);
            selection.select('g.y.axis').call(yAxis);
            selection.select("g.volume.axis").call(volumeAxis);

            selection.select("g.candlestick").datum(data).call(candlestick);
            selection.select("g.sma.ma-0").datum(sma0Calculator(data)).call(sma0);
            selection.select("g.sma.ma-1").datum(sma1Calculator(data)).call(sma1);
            selection.select("g.volume").datum(data).call(volume);

            svg.select("g.crosshair.ohlc").call(crosshair);
        });


}


  render() {
    return <></>;
  }
}

export default Techan_Chart_Basic;
