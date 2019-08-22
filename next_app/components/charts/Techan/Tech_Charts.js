export const Chart_Feed = ({ data }) => {
  if (typeof d3 == "undefined") {
    console.log("NO D3")
    return <div>"NO D3";</div>
  }

  var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var parseDate = d3.timeParse("%d-%b-%y");

  var x = techan.scale.financetime().range([0, width]);

  var y = d3.scaleLinear().range([height, 0]);

  var candlestick = techan.plot
    .candlestick()
    .xScale(x)
    .yScale(y);

  var xAxis = d3.axisBottom().scale(x);

  var yAxis = d3.axisLeft().scale(y);
  let techan_charts_count = document.querySelector("#techan_chart_div").children
    .length;

  if (techan_charts_count > 0) return <></>; /* return nothing */
  var svg = d3
    .select("#techan_chart_div")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("/static/data/data.csv", function(error, csv_data) {
    var accessor = candlestick.accessor();
    console.log(data);
    data = data
      .slice(0, 200)
      .map(function(d) {
        console.log(new Date(d.start_timestamp).getTime());
        return {
          date: parseDate(new Date(d.start_timestamp).getTime()),
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

    svg.append("g").attr("class", "candlestick");

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")");

    svg
      .append("g")
      .attr("class", "y axis")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

    // Data to display initially
    draw(data.slice(0, data.length - 20));
    // Only want this button to be active if the data has loaded
    d3.select("button")
      .on("click", function() {
        draw(data);
      })
      .style("display", "inline");
  });

  function draw(data) {
    x.domain(data.map(candlestick.accessor().d));
    y.domain(techan.scale.plot.ohlc(data, candlestick.accessor()).domain());

    svg
      .selectAll("g.candlestick")
      .datum(data)
      .call(candlestick);
    svg.selectAll("g.x.axis").call(xAxis);
    svg.selectAll("g.y.axis").call(yAxis);
  }
  console.log("yay! D3")

  return <></>;
};
