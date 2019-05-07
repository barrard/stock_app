export const Analysis_Results = ({results}) => {
  return (
    <div className="container">
      <div className="row flex_center">
        <div className="col-sm-12 flex_center">View Results on the Canvas</div>
        <div className="col-sm-12 flex_center">
          Select the results to see more etails
        </div>

        <div className='col-sm-12 flex_center'>
          <Results_Selection rsults={results}/>
        </div>
      </div>
    </div>
  );
};


const Results_Selection = ({results})=>{
  return( <p>Results</p>)
}

