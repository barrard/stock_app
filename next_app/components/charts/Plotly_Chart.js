import React from "react";

import plotly from "plotly.js/dist/plotly";
import createPlotComponent from "react-plotly.js/factory";

const Plot = createPlotComponent(plotly);


class Plotly_Plot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cross_x: {
        x: ["2019-08-09 18:08:15.8585", "2019-08-09 12:43:05.1195"],
        y: [2915, 2915],
        mode: "line",
        xaxis: "x",
        yaxis: "y"
      },
      cross_y: {
        x: ["2019-08-09 15:08:15.8585", "2019-08-09 15:08:15.8585"],
        y: [2937.25, 2897.25],
        mode: "line",
        xaxis: "x",
        yaxis: "y"
      }
    };
    this.layout = {
  
      title: "Plotly Candlestick chart",
  
      grid: {
        rows: 2,
        columns: 1,
        subplots: [["xy"], ["xy2"]]
      },
      dragmode: "pan",
      margin: {
        r: 10,
        t: 25,
        b: 40,
        l: 60
      },
      showlegend: false,
      xaxis: {
        rangeslider: {
          visible: false
        },
        autorange: true,
        // domain: [0, 1],
        // range: ["2017-01-03 12:00", "2017-02-15 12:00"],
        // rangeslider: { range: ["2017-01-03 12:00", "2017-02-15 12:00"] },
        title: "Date"
        // type: "date"
      },
      yaxis: {
        autorange: true,
        domain: [0.2, 1],
        fixedrange: true,
        type: "linear"
      },
      yaxis2: {
        autorange: true,
        domain: [0, 0.2],
        fixedrange: true,
        type: "linear",
        anchor: "y2"
      }
    }
    this.handle_chart_hover = this.handle_chart_hover.bind(this);
  }
  extract_ohlc(data) {
    /*   {
      x: ["2017-01-04", "2017-01-05"],
      close: [116.019997, 116.610001],
      decreasing: { line: { color: "#7F7F7F" } },
      high: [116.510002, 116.860001],
      increasing: { line: { color: "#17BECF" } },
      line: { color: "rgba(31,119,180,1)" },
      low: [115.75, 115.809998],
      open: [115.849998, 115.919998],
      type: "candlestick",
      xaxis: "x",
      yaxis: "y"
    } */
    let data_arr = ["timestamp", "close", "open", "low", "high", "volume"];
    let candle_stick_data = {
      timestamp: [], //x-axis dates
      close: [],
      open: [],
      low: [],
      high: [],
      volume: [],
      decreasing: { line: { color: "red" } },
      increasing: { line: { color: "greed" } },
      type: "candlestick",
      xaxis: "x",
      yaxis: "y",
      line: { color: "rgba(31,119,180,1)" },
      hoverlabel: {
        split: true
      }
    };
    data.forEach(bar => {
      data_arr.forEach(d_type => candle_stick_data[d_type].push(bar[d_type]));
    });
    candle_stick_data.x = [...candle_stick_data.timestamp];
    let vol_data = {
      y: [...candle_stick_data.volume],
      x: [...candle_stick_data.timestamp],
      xaxis: "x",
      yaxis: "y2",
      type: "bar"
    };
    delete candle_stick_data.volume;
    delete candle_stick_data.timestamp;
  
    return { candle_stick_data, vol_data };
  }

  handle_chart_hover(e) {
    return
    console.log(this.layout);

    let {
      points,
      event /*    [{…}] */,
      xaxes /*  [{…}] */,
      xvals /*  [1565370936976.9714] */,
      yaxes /*  [{…}] */,
      yvals /*  [2912.7045454545455] */
    } = e;
    console.log({
      points
      // event,
      // xaxes,
      // xvals,
      // yaxes,
      // yvals
    });
    let { xaxis, yaxis } = this.layout;
    console.log({xaxis, yaxis})
    let x_range = xaxis.range;
    let y_range = yaxis.range;
    this.cross_hair(new Date(xvals[0]-1000), yvals[0], x_range, y_range);
  }

  cross_hair(x, y, x_range, y_range) {
    console.log('cross hair')
    if (y_range && x_range) {
      console.log('cross hair!!!!!!!!!!')
      this.state.cross_x = {
        x: [x_range[0], x_range[1] ],
        y: [y, y],
        type: "line",
        xaxis: "x",
        yaxis: "y"
      };
      this.state.cross_y = {
        x: [x, x],
        y: [y_range[0], y_range[1]],
        type: "line",
        xaxis: "x",
        yaxis: "y"
      };
      console.log(this.state)
      this.forceUpdate()
    } 
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    console.log(this.layout)
    let {cross_x, cross_y} = this.state
    let { data, symbol } = this.props;
    if (!data) return <div>No data</div>;
    let { candle_stick_data, vol_data } = this.extract_ohlc(data);
    return (
      <Plot
        divId={`${symbol}_commodities_chart`}
        // onUpdate={(fig, graphDiv) => {
        //   console.log(fig);
        //   console.log(graphDiv);
        // }}
        onHover={e => this.handle_chart_hover(e)}
        data={[candle_stick_data, vol_data, cross_x, cross_y]}
        layout={this.layout}
      />
    );
  }


}

export default Plotly_Plot;
