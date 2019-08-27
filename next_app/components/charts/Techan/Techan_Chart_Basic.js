import React from "react";
// import d3 from 'd3'
// var d3 = require("d3");
// var techan = require("techan");
class Techan_Chart_Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 20, right: 75, bottom: 30, left: 50 }
      // width:960, height:500
    };
    this.recieve_new_minute_data = this.recieve_new_minute_data.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let { symbol } = this.props;
    console.log(this.props.data[symbol])
    let data = [...this.props.data[symbol].chart_data];
    if (this.props.latest_minute_data) {
      // data.push({ok:'ok'})
      data.unshift(this.props.latest_minute_data.ES);
    }
    this.draw(data);
    // debugger
  }
  componentDidMount() {
    let { data, divId, _width, _height, socket, symbol } = this.props,
      { margin } = this.state,
      width = _width - margin.left - margin.right,
      height = _height - margin.top - margin.bottom;
    data = data[symbol].chart_data;
    socket.on(`new_minutley_bar`, this.recieve_new_minute_data);

    /* create x values maping  */
    var x = techan.scale.financetime().range([0, width]);

    /* create y values maping  */
    var y = d3.scaleLinear().range([height, 0]);
    // console.log({ x, y });//accessor functions?

      /* Candle stick accessor */
    var candlestick = techan.plot
      .candlestick()
      .xScale(x)
      .yScale(y);

      /* x-axis accessor */
    var xAxis = d3.axisBottom(x);
      /* y-axis accessor */
      var yAxis = d3.axisLeft(y);
      /* y-axis right side accessor */
      var yRightAxis = d3.axisRight(y);

    /* set up volume */  /* setting vol to use 20% ohlc area */
    var yVolume = d3.scaleLinear().range([y(0), y(0.2)]);

    var volume = techan.plot
      .volume()
      .accessor(candlestick.accessor()) // Set the accessor to a ohlc accessor so we get highlighted bars
      .xScale(x)
      .yScale(yVolume);

    var volumeAxis = d3
      .axisRight(yVolume)
      .ticks(3)
      .tickFormat(d3.format(",.3s"));

    var volumeAnnotation = techan.plot
      .axisannotation()
      .axis(volumeAxis)
      .orient("right")
      .width(35);

    var timeAnnotation = techan.plot
      .axisannotation()
      .axis(xAxis)
      .orient("bottom")
      .format(d3.timeFormat("%H:%M"))
      .width(65)
      .translate([0, height]);

    var ohlcAnnotation = techan.plot
      .axisannotation()
      .axis(yAxis)
      .orient("right")
      .accessor(candlestick.accessor())
      .format(d3.format(",.2f"));

    var ohlcRightAnnotation = techan.plot
      .axisannotation()
      .axis(yRightAxis)
      .orient("right")
      .accessor(candlestick.accessor())
      .translate([width, 0]) // Translation can be optionally set here, or over the group
      .format(d3.format(",.2f"));

    /* crosshair with anotation*/
    var crosshair = techan.plot
      .crosshair()
      .xScale(x)
      .yScale(y)
      .xAnnotation(timeAnnotation)
      .yAnnotation([ohlcAnnotation, volumeAnnotation, ohlcRightAnnotation]);
    // .on("move", move);

    var svg = d3
      .select(`#${divId}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class", "dark_background")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // var defs = svg.append("defs");
    // defs
    //   .append("clipPath")
    //   .attr("id", "ohlcClip")
    //   .append("rect")
    //   .attr("x", 0)
    //   .attr("y", 0)
    //   .attr("width", width)
    //   .attr("height", height);

    svg
      .append("g")
      .attr("class", "candlestick")
      .attr("transform", "translate(0,0)");

    // ohlcSelection
    //   .append("g")
    //   .attr("class", "candlestick")
      // .attr("clip-path", "url(#ohlcClip)");

      svg
      .append("g")
      .attr("class", "volume")
      .attr("clip-path", "url(#ohlcClip)");

    svg
      .append("g")
      .attr("class", "x axis axis_white")
      .attr("transform", "translate(0," + height + ")");

    svg
      .append("g")
      .attr("class", "y axis left axis_white")
      .append("text")
      .attr("y", 6)
      .attr("transform", "rotate(-90)")
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

    svg
      .append("g")
      .attr("class", "y axis right axis_white")
      .attr("transform", "translate(" + width + ",0)");

    svg.append("g").attr("class", "annotation left up");
    svg.append("g").attr("class", "annotation right down");

    svg.append("g").attr("class", "volume axis");

    svg.append("g").attr("class", "crosshair candlestick");
    var accessor = candlestick.accessor();
    this.setState({
      yVolume,
      volume,
      ohlcRightAnnotation,
      crosshair,
      symbol,
      socket,
      data,
      divId,
      width,
      height,
      x,
      y,
      xAxis,
      yAxis,
      yRightAxis,
      svg,
      accessor,
      candlestick,
      ohlcAnnotation,
      timeAnnotation,
      volumeAnnotation,
      volumeAxis
    });

    // Data to display initially
    setTimeout(() => this.draw(data), 0);
    // Only want this button to be active if the data has loaded
  }

  recieve_new_minute_data(new_minute_bar) {
    let { symbol, data } = this.state;
    let new_symbol_data = new_minute_bar[symbol];
    let symbol_data = data;
    symbol_data.push(new_symbol_data);
    data[symbol] = symbol_data;
    this.setState({
      data
    });
  }

  draw(data) {
    let { latest_minute_data } = this.props;
    let {
      yVolume,
      volume,
      ohlcRightAnnotation,
      crosshair,
      symbol,
      accessor,
      divId,
      width,
      height,
      x,
      candlestick,
      y,
      xAxis,
      yAxis,
      yRightAxis,
      svg,
      ohlcAnnotation,
      timeAnnotation,
      volumeAnnotation,
      volumeAxis
    } = this.state;
    var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

    if (latest_minute_data) data.unshift(latest_minute_data["ES"]);

    data = data
      // .slice(0, 200)
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

    // console.log("draw");
    x.domain(data.map(candlestick.accessor().d));
    y.domain(techan.scale.plot.ohlc(data, candlestick.accessor()).domain());
    yVolume.domain(
      techan.scale.plot
        .volume(data.slice(data.length - 130, data.length))
        .domain()
    );

    // svg.each(function(){
    // var selection = d3.select(this);

    svg
      .select("g.candlestick")
      .datum(data)
      .call(candlestick);
    svg.select("g.x.axis").call(xAxis);
    svg.select("g.y.axis.left").call(yAxis);
    svg.select("g.y.axis.right").call(yRightAxis);

    svg
      .select("g.annotation.right.down")
      .datum([data[data.length - 1]])
      .call(ohlcRightAnnotation);

    svg
      .select("g.annotation.left.up")
      .datum([data[0]])
      .call(ohlcAnnotation);
    svg.select("g.volume.axis").call(volumeAxis);
    svg
      .select("g.volume")
      .datum(data)
      .call(volume);
    svg.select("g.crosshair.candlestick").call(crosshair);
    // })
  }

  render() {
    if (typeof d3 == "undefined") return "NO D3";

    return <></>;
  }
}

export default Techan_Chart_Basic;
