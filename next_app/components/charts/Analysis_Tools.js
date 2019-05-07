export const Analysis_Tools = ({
  chart_id,
  chart_data,
  begining_chart,
  analyze_high_low,
  calc_linear_regression,
  LR_avg,handle_LR_avg_input
}) => {
  return (
    <div className="container">
      <div className="row flex_center">
        <div className="col-sm-12 flex_center">here, define swing high/low</div>
        <div className="col-sm-12 flex_center">
          Check for last cloding prce, need to threshold price, and numbr of
          bars to mean something
        </div>

        <div className="col-sm-12 flex_center">
          <Analyze_Button
            analyze_high_low={analyze_high_low}
            chart_id={chart_id}
            chart_data={chart_data}
          />
        </div>
      </div>
      <div className="row flex_center">
        <div className="col-sm-12 flex_center">
          <h4>Linear Regression</h4>
        </div>
        <div className="col-sm-6 flex_center">
          <Draw_Linear_Regression_Button
            calc_linear_regression={calc_linear_regression}
            LR_avg={LR_avg}
            handle_LR_avg_input={handle_LR_avg_input}
          />
        </div>
      </div>
    </div>
  );
};

const Analyze_Button = ({ chart_id, chart_data, analyze_high_low }) => {
  return <button onClick={analyze_high_low}>HIGH LOW</button>;
};

const Draw_Linear_Regression_Button = ({ calc_linear_regression, LR_avg, handle_LR_avg_input }) => {
  return (
    <>
    <button onClick={() => calc_linear_regression()}>
      Linear Regression
    </button>
    <input type="number" value={LR_avg} onChange={(e)=>handle_LR_avg_input( e.target.value)}/>
    </>
  );
};
