export const Analysis_Tools = ({chart_id, chart_data, begining_chart}) => {
  return (
    <div className="container">
      <div className="row flex_center">
        <div className="col-sm-12 flex_center">here, define swing high/low</div>
        <div className="col-sm-12 flex_center">
          Check for last cloding prce, need to threshold price, and numbr of
          bars to mean something
        </div>
        <div className='col-sm-12 flex_center'>
          <My_Button begining_chart={begining_chart} chart_id={chart_id} chart_data={chart_data}/>
        </div>
      </div>
    </div>
  );
};


const My_Button = ({chart_id, chart_data, begining_chart})=>{
  return(  <button onClick={begining_chart}>
  click
    </button>)
}
