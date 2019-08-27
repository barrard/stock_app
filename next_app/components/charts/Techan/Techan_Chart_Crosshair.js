import React from "react";
// import d3 from 'd3'
// var d3 = require("d3");
// var techan = require("techan");
class Techan_Chart_Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 20, right: 75, bottom: 30, left: 50 },
      ohlc: { height: 305 },
      indicator: { height: 65, padding: 5 }
    };
    this.recieve_new_minute_data = this.recieve_new_minute_data.bind(this);
    this.zoomed = this.zoomed.bind(this);
    this.draw = this.draw.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let { symbol } = this.props;
    // console.log(this.props.data[symbol].chart_data);
    let data = [...this.props.data[symbol].chart_data];
    if (this.props.latest_minute_data) {
      // console.log(this.props.latest_minute_data.ES)
      data.unshift({ ...this.props.latest_minute_data[symbol] });
    }
    this.draw(data);
    // debugger
  }
  componentDidMount() {
    console.log('DidMount')
    let { data, divId, _width, _height, socket, symbol } = this.props,
      { margin, ohlc, indicator } = this.state,
      width = _width - margin.left - margin.right,
      height = _height - margin.top - margin.bottom;
    indicator.top = ohlc.height + indicator.padding;
    indicator.bottom = indicator.top + indicator.height + indicator.padding;

    data = data[symbol].chart_data;

    socket.on(`new_minutley_bar`, this.recieve_new_minute_data);

    var indicatorTop = d3
      .scaleLinear()
      .range([indicator.top, indicator.bottom]);

    var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

    var zoom = d3.zoom().on("zoom", this.zoomed);

    var x = techan.scale.financetime().range([0, width]);

    var y = d3.scaleLinear().range([ohlc.height, 0]);
    // console.log(x(1))
    // console.log(x(0))


    // Same as y at this stage, will get a different domain later
    var yPercent = y.copy(); 

    var yInit, yPercentInit, zoomableInit;

    var yVolume = d3.scaleLinear().range([y(0), y(0.2)]);

    var svg = d3
      .select(`#${divId}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    // var defs = svg.append("defs");
  //   defs
  //   .append("clipPath")
  //   .attr("id", "ohlcClip")
  //   .append("rect")
  //   .attr("x", 0)
  //   .attr("y", 0)
  //   .attr("width", width)
  //   .attr("height", ohlc.height);

  // defs
  //   .selectAll("indicatorClip")
  //   .data([0, 1])
  //   .enter()
  //   .append("clipPath")
  //   .attr("id", function(d, i) {
  //     return "indicatorClip-" + i;
  //   })
  //   .append("rect")
  //   .attr("x", 0)
  //   .attr("y", function(d, i) {
  //     return indicatorTop(i);
  //   })
  //   .attr("width", width)
  //   .attr("height", indicator.height);

    svg = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg
      .append("text")
      .attr("class", "symbol")
      .attr("x", 20)
      .text("Facebook, Inc. (FB)");

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")");

    var ohlcSelection = svg
      .append("g")
      .attr("class", "ohlc")
      .attr("transform", "translate(0,0)");

    ohlcSelection
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + x(1) + ",0)")
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

    ohlcSelection
      .append("g")
      .attr("class", "indicator sma ma-0")
      .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection
      .append("g")
      .attr("class", "indicator sma ma-1")
      .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection
      .append("g")
      .attr("class", "indicator ema ma-2")
      .attr("clip-path", "url(#ohlcClip)");

    ohlcSelection.append("g").attr("class", "percent axis");

    ohlcSelection.append("g").attr("class", "volume axis");

    var indicatorSelection = svg
      .selectAll("svg > g.indicator")
      .data(["macd", "rsi"])
      .enter()
      .append("g")
      .attr("class", function(d) {
        return d + " indicator";
      });

    indicatorSelection
      .append("g")
      .attr("class", "axis right")
      .attr("transform", "translate(" + x(1) + ",0)");

    indicatorSelection
      .append("g")
      .attr("class", "axis left")
      .attr("transform", "translate(" + x(0) + ",0)");

    indicatorSelection
      .append("g")
      .attr("class", "indicator-plot")
      .attr("clip-path", function(d, i) {
        return "url(#indicatorClip-" + i + ")";
      });

    // Add trendlines and other interactions last to be above zoom pane
    svg.append("g").attr("class", "crosshair ohlc");

    svg
      .append("g")
      .attr("class", "tradearrow")
      .attr("clip-path", "url(#ohlcClip)");

    svg.append("g").attr("class", "crosshair macd");

    svg.append("g").attr("class", "crosshair rsi");

    svg
      .append("g")
      .attr("class", "trendlines analysis")
      .attr("clip-path", "url(#ohlcClip)");
    svg
      .append("g")
      .attr("class", "supstances analysis")
      .attr("clip-path", "url(#ohlcClip)");

    var trendlineData = [
      {
        start: { date: new Date(2014, 2, 11), value: 72.5 },
        end: { date: new Date(2014, 5, 9), value: 63.34 }
      },
      {
        start: { date: new Date(2013, 10, 21), value: 43 },
        end: { date: new Date(2014, 2, 17), value: 70.5 }
      }
    ];

    var supstanceData = [
      { start: new Date(2014, 2, 11), end: new Date(2014, 5, 9), value: 63.64 },
      { start: new Date(2013, 10, 21), end: new Date(2014, 2, 17), value: 55.5 }
    ];

    var trades = [
      {
        date: data[17].start_timestamp,
        type: "buy",
        price: data[17].low,
        low: data[17].low,
        high: data[17].high
      },
      {
        date: data[10].start_timestamp,
        type: "sell",
        price: data[10].high,
        low: data[10].low,
        high: data[10].high
      },
      {
        date: data[13].start_timestamp,
        type: "buy",
        price: data[13].low,
        low: data[13].low,
        high: data[13].high
      },
      {
        date: data[40].start_timestamp,
        type: "sell",
        price: data[40].low,
        low: data[40].low,
        high: data[40].high
      }
    ];

    var indicatorPreRoll = 33; // Don't show where indicators don't have data

    // Stash for zooming
    zoomableInit = x
      .zoomable()
      .domain([indicatorPreRoll, data.length])
      .copy(); // Zoom in a little to hide indicator preroll
    yInit = y.copy();
    yPercentInit = yPercent.copy();

    this.setState({
      indicatorTop,
      indicator,
      // defs,
      x,
      y,
      parseDate,
      yPercent,
      trendlineData,
      supstanceData,
      trades,
      zoom,
      // closeAnnotation,
      yInit,
      yVolume,
      // candlestick,
      // sma0,
      // sma1,
      // ema2,
      // volume,
      // tradearrow,
      // trendline,
      // supstance,
      yPercentInit,
      zoomableInit,
      // macdScale,
      // rsiScale,
      // macd,
      // macdAxis,
      // macdAnnotation,
      // macdAxisLeft,
      // macdAnnotationLeft,
      // rsi,
      // rsiAxis,
      // rsiAnnotation,
      // rsiAxisLeft,
      // rsiAnnotationLeft,
      // ohlcCrosshair,
      // macdCrosshair,
      // rsiCrosshair,
      symbol,
      socket,
      data,
      divId,
      width,
      height,
      svg,
      indicatorPreRoll
      // xAxis, yAxis, volumeAxis, percentAxis
    });

    // Data to display initially
    setTimeout(() => this.draw(data), 0);
    // Only want this button to be active if the data has loaded
  }

  zoomed() {
    console.log("zooooooooooooomed");
    let {
      x,
      y,
      yPercentInit,
      zoomableInit,
      yInit,
      yPercent,
      data
    } = this.state;
    
    console.log(x(1))
    console.log(x(0))


    x.zoomable().domain(d3.event.transform.rescaleX(zoomableInit).domain());
    y.domain(d3.event.transform.rescaleY(yInit).domain());
    yPercent.domain(d3.event.transform.rescaleY(yPercentInit).domain());
    console.log(x(1))
    console.log(x(0))

    // this.setState({
    //   x,
    //   y,
    //   yPercentInit,
    //   zoomableInit,
    //   yInit,
    //   yPercent
    // });

    setTimeout(() => this.draw(data), 0);
  }

  recieve_new_minute_data(new_minute_bar) {
    let { symbol, data } = this.state;
    let new_symbol_data = new_minute_bar[symbol];
    let symbol_data = data;
    symbol_data.push(new_symbol_data);
    data = symbol_data;
    this.setState({
      data
    });
  }

  // reset() {
  //   zoom.scale(1);
  //   zoom.translate([0, 0]);
  //   this.draw(this.state.data);
  // }








  

  draw(data) {
    console.log("DRAAAAWWWWW");
    // console.log(data);
    let { latest_minute_data } = this.props;
    let {
      indicatorTop,
      indicator,
      // defs,
      x,
      y,
      parseDate,
      yPercent,
      trendlineData,
      supstanceData,
      trades,
      zoom,
      // closeAnnotation,
      yInit,
      yVolume,
      // candlestick,
      // sma0,
      // sma1,
      // ema2,
      // volume,
      // tradearrow,
      // trendline,
      // supstance,
      yPercentInit,
      zoomableInit,
      // macdScale,
      // rsiScale,
      // macd,
      // macdAxis,
      // macdAnnotation,
      // macdAxisLeft,
      // macdAnnotationLeft,
      // rsi,
      // rsiAxis,
      // rsiAnnotation,
      // rsiAxisLeft,
      // rsiAnnotationLeft,
      // ohlcCrosshair,
      // macdCrosshair,
      // rsiCrosshair,
      symbol,
      socket,
      divId,
      width,
      height,
      svg,
      indicatorPreRoll,
      // xAxis,
      // yAxis,
      // volumeAxis,
      // percentAxis,
      ohlc
    } = this.state;
    console.log(x(1))
    console.log(x(0))


    var candlestick = techan.plot
      .candlestick()
      .xScale(x)
      .yScale(y);

    var tradearrow = techan.plot
      .tradearrow()
      .xScale(x)
      .yScale(y)
      .y(function(d) {
        // Display the buy and sell arrows a bit above and below the price, so the price is still visible
        if (d.type === "buy") return y(d.low) + 5;
        if (d.type === "sell") return y(d.high) - 5;
        else return y(d.price);
      });

    var sma0 = techan.plot
      .sma()
      .xScale(x)
      .yScale(y);

    var sma1 = techan.plot
      .sma()
      .xScale(x)
      .yScale(y);

    var ema2 = techan.plot
      .ema()
      .xScale(x)
      .yScale(y);

    var volume = techan.plot
      .volume()
      .accessor(candlestick.accessor()) // Set the accessor to a ohlc accessor so we get highlighted bars
      .xScale(x)
      .yScale(yVolume);

    var trendline = techan.plot
      .trendline()
      .xScale(x)
      .yScale(y);

    var supstance = techan.plot
      .supstance()
      .xScale(x)
      .yScale(y);

    var xAxis = d3.axisBottom(x);

    var timeAnnotation = techan.plot
      .axisannotation()
      .axis(xAxis)
      .orient("bottom")
      .format(d3.timeFormat("%Y-%m-%d"))
      .width(65)
      .translate([0, height]);

    var yAxis = d3.axisRight(y);

    var ohlcAnnotation = techan.plot
      .axisannotation()
      .axis(yAxis)
      .orient("right")
      .format(d3.format(",.2f"))
      .translate([x(1), 0]);

    var closeAnnotation = techan.plot
      .axisannotation()
      .axis(yAxis)
      .orient("right")
      .accessor(candlestick.accessor())
      .format(d3.format(",.2f"))
      .translate([x(1), 0]);

    var percentAxis = d3.axisLeft(yPercent).tickFormat(d3.format("+.1%"));

    var percentAnnotation = techan.plot
      .axisannotation()
      .axis(percentAxis)
      .orient("left");

    var volumeAxis = d3
      .axisRight(yVolume)
      .ticks(3)
      .tickFormat(d3.format(",.3s"));

    var volumeAnnotation = techan.plot
      .axisannotation()
      .axis(volumeAxis)
      .orient("right")
      .width(35);

    var macdScale = d3
      .scaleLinear()
      .range([indicatorTop(0) + indicator.height, indicatorTop(0)]);

    var rsiScale = macdScale
      .copy()
      .range([indicatorTop(1) + indicator.height, indicatorTop(1)]);

    var macd = techan.plot
      .macd()
      .xScale(x)
      .yScale(macdScale);

    var macdAxis = d3.axisRight(macdScale).ticks(3);

    var macdAnnotation = techan.plot
      .axisannotation()
      .axis(macdAxis)
      .orient("right")
      .format(d3.format(",.2f"))
      .translate([x(1), 0]);

    var macdAxisLeft = d3.axisLeft(macdScale).ticks(3);

    var macdAnnotationLeft = techan.plot
      .axisannotation()
      .axis(macdAxisLeft)
      .orient("left")
      .format(d3.format(",.2f"));

    var rsi = techan.plot
      .rsi()
      .xScale(x)
      .yScale(rsiScale);

    var rsiAxis = d3.axisRight(rsiScale).ticks(3);

    var rsiAnnotation = techan.plot
      .axisannotation()
      .axis(rsiAxis)
      .orient("right")
      .format(d3.format(",.2f"))
      .translate([x(1), 0]);

    var rsiAxisLeft = d3.axisLeft(rsiScale).ticks(3);

    var rsiAnnotationLeft = techan.plot
      .axisannotation()
      .axis(rsiAxisLeft)
      .orient("left")
      .format(d3.format(",.2f"));

    var ohlcCrosshair = techan.plot
      .crosshair()
      .xScale(timeAnnotation.axis().scale())
      .yScale(ohlcAnnotation.axis().scale())
      .xAnnotation(timeAnnotation)
      .yAnnotation([ohlcAnnotation, percentAnnotation, volumeAnnotation])
      .verticalWireRange([0, height]);

    var macdCrosshair = techan.plot
      .crosshair()
      .xScale(timeAnnotation.axis().scale())
      .yScale(macdAnnotation.axis().scale())
      .xAnnotation(timeAnnotation)
      .yAnnotation([macdAnnotation, macdAnnotationLeft])
      .verticalWireRange([0, height]);

    var rsiCrosshair = techan.plot
      .crosshair()
      .xScale(timeAnnotation.axis().scale())
      .yScale(rsiAnnotation.axis().scale())
      .xAnnotation(timeAnnotation)
      .yAnnotation([rsiAnnotation, rsiAnnotationLeft])
      .verticalWireRange([0, height]);

    var macdData = techan.indicator.macd()(data);
    macdScale.domain(techan.scale.plot.macd(macdData).domain());
    var rsiData = techan.indicator.rsi()(data);
    rsiScale.domain(techan.scale.plot.rsi(rsiData).domain());

    svg
      .select("g.candlestick")
      .datum(data)
      .call(candlestick);
    svg
      .select("g.close.annotation")
      .datum([data[data.length - 1]])
      .call(closeAnnotation);
    svg
      .select("g.volume")
      .datum(data)
      .call(volume);
    svg
      .select("g.sma.ma-0")
      .datum(techan.indicator.sma().period(10)(data))
      .call(sma0);
    svg
      .select("g.sma.ma-1")
      .datum(techan.indicator.sma().period(20)(data))
      .call(sma1);
    svg
      .select("g.ema.ma-2")
      .datum(techan.indicator.ema().period(50)(data))
      .call(ema2);
    svg
      .select("g.macd .indicator-plot")
      .datum(macdData)
      .call(macd);
    svg
      .select("g.rsi .indicator-plot")
      .datum(rsiData)
      .call(rsi);

    svg
      .select("g.crosshair.ohlc")
      .call(ohlcCrosshair)
      .call(zoom);
    svg
      .select("g.crosshair.macd")
      .call(macdCrosshair)
      .call(zoom);
    svg
      .select("g.crosshair.rsi")
      .call(rsiCrosshair)
      .call(zoom);
    svg
      .select("g.trendlines")
      .datum(trendlineData)
      .call(trendline)
      .call(trendline.drag);
    svg
      .select("g.supstances")
      .datum(supstanceData)
      .call(supstance)
      .call(supstance.drag);

    svg
      .select("g.tradearrow")
      .datum(trades)
      .call(tradearrow);

    var accessor = candlestick.accessor();

    if (latest_minute_data) data.unshift(latest_minute_data[symbol]);

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
        return d3.ascending(
          candlestick.accessor().d(a),
          candlestick.accessor().d(b)
        );
      });

    x.domain(techan.scale.plot.time(data).domain());
    y.domain(techan.scale.plot.ohlc(data.slice(indicatorPreRoll)).domain());
    yPercent.domain(
      techan.scale.plot.percent(y, accessor(data[indicatorPreRoll])).domain()
    );
    yVolume.domain(techan.scale.plot.volume(data).domain());

    console.log(x(1))
    console.log(x(0))



    svg.select("g.x.axis").call(xAxis);
    svg.select("g.ohlc .axis").call(yAxis);
    svg.select("g.volume.axis").call(volumeAxis);
    svg.select("g.percent.axis").call(percentAxis);
    svg.select("g.macd .axis.right").call(macdAxis);
    svg.select("g.rsi .axis.right").call(rsiAxis);
    svg.select("g.macd .axis.left").call(macdAxisLeft);
    svg.select("g.rsi .axis.left").call(rsiAxisLeft);

    // We know the data does not change, a simple refresh that does not perform data joins will suffice.
    svg.select("g.candlestick").call(candlestick.refresh);
    svg.select("g.close.annotation").call(closeAnnotation.refresh);
    svg.select("g.volume").call(volume.refresh);
    svg.select("g .sma.ma-0").call(sma0.refresh);
    svg.select("g .sma.ma-1").call(sma1.refresh);
    svg.select("g .ema.ma-2").call(ema2.refresh);
    svg.select("g.macd .indicator-plot").call(macd.refresh);
    svg.select("g.rsi .indicator-plot").call(rsi.refresh);
    svg.select("g.crosshair.ohlc").call(ohlcCrosshair.refresh);
    svg.select("g.crosshair.macd").call(macdCrosshair.refresh);
    svg.select("g.crosshair.rsi").call(rsiCrosshair.refresh);
    svg.select("g.trendlines").call(trendline.refresh);
    svg.select("g.supstances").call(supstance.refresh);
    svg.select("g.tradearrow").call(tradearrow.refresh);
  }

  render() {
    if (typeof d3 == "undefined") return "NO D3";

    return <></>;
  }
}

export default Techan_Chart_Basic;
