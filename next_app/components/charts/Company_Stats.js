export const Company_Stats = ({ stats }) => {
  return (
    <div className="row ">
    {!stats && 
      <p>LOADING</p>
    }
      {stats &&
      <div className="col-sm-12 ">
      <div className="row ">
        <div className="col-sm-12 flex_center">
          <Company_Name name={stats.companyName} />
        </div>
      </div>
      <div className="row ">
      <div className="col-sm-3 flex_center">
      <p>Current Price</p>
          <Price price={stats.week52high} />
        </div>
        <div className="col-sm-3 flex_center">
          <p>52 wk high</p>
          <Price price={stats.week52high} />
        </div>
        <div className="col-sm-3 flex_center">
          <p>52 wk low</p>
          <Price price={stats.week52low} />
        </div>
        <div className="col-sm-3 flex_center">
        
        </div>
      </div>
    </div>
      }
    </div>
  );
};

const Company_Name = ({ name }) => <h2 className="company_name">{name}</h2>;

const Volume = ({ vol }) => (
  <span className="ticker_vol">{vol.toLocaleString("en-US")}</span>
);

const Price = ({ price }) => {
  console.log(price)
  return(
    <span className="ticker_price">
      $
      {parseFloat(price)
        .toFixed(2)
        .toLocaleString("en-US")}
    </span>
  );
}

const Percent_Change = ({ precent_change }) => {
  let class_name;
  if (precent_change > 0) class_name = "percentage_up";
  if (precent_change < 0) class_name = "percentage_down";
  if (precent_change == 0) class_name = "percentage_neutral";
  return (
    <span className={class_name}>
      {`${parseFloat((precent_change * 100).toLocaleString("en-US")).toFixed(
        2
      )}%`}
    </span>
  );
};

const Symbol = ({ symbol }) => <span className="ticker_symbol">{symbol}</span>;
