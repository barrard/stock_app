import React from "react";
// import d3 from 'd3'
var d3 = require("d3");
var techan = require("techan");
class Techan_Chart_Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 20, right: 75, bottom: 30, left: 50 }
      // width:960, height:500
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps.data)
    if (this.props.latest_minute_data) {
      // console.log(this.props.data)
      console.log(this.props.latest_minute_data.ES.close);
      let data = [...this.props.data];
      // console.log(data)
      // data.push({ok:'ok'})
      // data.push(this.props.latest_minute_data.ES)
      this.draw(data);
    }
  }
  componentDidMount() {
    let { data, divId, _width, _height, latest_minute_data } = this.props,
      { margin } = this.state,
      width = _width - margin.left - margin.right,
      height = _height - margin.top - margin.bottom;

    var x = techan.scale.financetime().range([0, width]);

    var y = d3.scaleLinear().range([height, 0]);
    console.log({ x, y });

    var candlestick = techan.plot
      .candlestick()
      .xScale(x)
      .yScale(y);

    var xAxis = d3.axisBottom().scale(x);

    var yAxis = d3.axisLeft().scale(y);
    var yRightAxis = d3.axisRight(y);

    var svg = d3
      .select(`#${divId}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class", "chart_background")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g").attr("class", "candlestick");

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
    var accessor = candlestick.accessor();
    this.setState({
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
      candlestick
    });

    // Data to display initially
    setTimeout(() => this.draw(data), 0);
    // Only want this button to be active if the data has loaded
  }

  draw(data) {
    let { latest_minute_data } = this.props;
    let {
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
      svg
    } = this.state;
    var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

    if (latest_minute_data) data.unshift(latest_minute_data["ES"]);
    console.log(data);
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
    console.log(data[0].close);
    console.log(data[data.length - 1].close);
    /* right side y-axis */
    var ohlcAnnotation = techan.plot
      .axisannotation()
      .axis(yAxis)
      .orient("right")
      .accessor(candlestick.accessor())
      .format(d3.format(",.2f"));

    /* left side y-axis */
    var ohlcRightAnnotation = techan.plot
      .axisannotation()
      .axis(yRightAxis)
      .orient("right")
      .accessor(candlestick.accessor())
      .translate([width, 0]) // Translation can be optionally set here, or over the group
      .format(d3.format(",.2f"));

    console.log("draw");
    x.domain(data.map(candlestick.accessor().d));
    y.domain(techan.scale.plot.ohlc(data, candlestick.accessor()).domain());

    svg
      .selectAll("g.candlestick")
      .datum(data)
      .call(candlestick);
    svg.selectAll("g.x.axis").call(xAxis);
    svg.selectAll("g.y.axis.left").call(yAxis);
    svg.selectAll("g.y.axis.right").call(yRightAxis);
    svg
      .selectAll("g.annotation.right.down")
      .datum([data[data.length - 1]])
      .call(ohlcRightAnnotation);

    svg
      .selectAll("g.annotation.left.up")
      .datum([data[0]])
      .call(ohlcAnnotation);
  }

  render() {
    if (typeof d3 == "undefined") return "NO D3";

    return <></>;
  }
}

export default Techan_Chart_Basic;
