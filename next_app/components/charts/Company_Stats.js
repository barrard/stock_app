export const Company_Stats = ({
  stats,
  quote,
  company,
  set_active_tab,
  active_tab
}) => {
  return (
    <div className="row ">
      {!stats && <p>LOADING</p>}
      {stats && (
        <div className="col-sm-12 ">
          <Stock_Data_Tabs
            set_active_tab={set_active_tab}
            active_tab={active_tab}
          />
          <div className="tab-content">
            <div className={`tab-pane show active `} id="info">
              <Company_Data company={company} />
            </div>

            <div className={`tab-pane  `} id="price">
              <Historical_Price_Data stats={stats} quote={quote} />
              <Todays_Price_data quote={quote} />
            </div>
            <div className={`tab-pane  `} id="book">
              <p>BOOK</p>
            </div>
            <div className={`tab-pane  `} id="news">
              news
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const Stock_Data_Tabs = ({ set_active_tab, active_tab }) => {
  return (
    <ul className="nav nav-tabs">
      <li onClick={() => set_active_tab("info")} className="nav-item">
        <span
          href="#info"
          data-toggle="tab"
          className={`${
            active_tab == "info" ? "active" : " "
          } nav-link  clickable`}
        >
          Info
        </span>
      </li>
      <li onClick={() => set_active_tab("price")} className="nav-item">
        <span
          href="#price"
          data-toggle="tab"
          className={`${
            active_tab == "price" ? "active" : " "
          } nav-link clickable`}
        >
          Price
        </span>
      </li>
      <li onClick={() => set_active_tab("book")} className="nav-item">
        <span
          href="#book"
          data-toggle="tab"
          className={`${
            active_tab == "book" ? "active" : " "
          } nav-link clickable`}
        >
          Book
        </span>
      </li>
      <li onClick={() => set_active_tab("news")} className="nav-item">
        <span
          href="#news"
          data-toggle="tab"
          className={`${
            active_tab == "news" ? "active" : " "
          } nav-link clickable`}
        >
          News
        </span>
      </li>
    </ul>
  );
};

const Company_Data = ({ company }) => {
  return <p>cocopo</p>;
};

const Historical_Price_Data = ({ stats, quote }) => {
  return (
    <div className="row flex_center">
      <div className="col-sm-6 col-md-3 stats_box p-3">
        <p className="underline whitesmoke">Current</p>

        <Price price={stats.week52high} />
      </div>
      <div className="col-sm-6 col-md-3 stats_box p-3">
        <p className="underline whitesmoke">52 wk high</p>
        <Price price={stats.week52high} />
      </div>
      <div className="col-sm-6 col-md-3 stats_box p-3">
        <p className="underline whitesmoke">52 wk low</p>
        <Price price={stats.week52low} />
      </div>
      <div className="col-sm-6 col-md-3 stats_box p-3">
        <p className="underline whitesmoke">ytd chng.</p>
        <Percent_Change precent_change={quote.ytdChange} />
      </div>
    </div>
  );
};

const Todays_Price_data = ({ quote }) => {
  return (
    <div className="row flex_center">
      <div className="col-sm-6 col-md-3 stats_box p-3">
        <p className="underline whitesmoke">Open</p>
        <Price price={quote.open} />
      </div>
      <div className="col-sm-6 col-md-3 stats_box p-3">
        <p className="underline whitesmoke">High</p>
        <Price price={quote.high} />
      </div>
      <div className="col-sm-6 col-md-3 stats_box p-3">
        <p className="underline whitesmoke">Low</p>
        <Price price={quote.low} />
      </div>
      <div className="col-sm-6 col-md-3 stats_box p-3">
        <p className="underline whitesmoke">Close</p>
        <Price price={quote.close} />
      </div>
    </div>
  );
};

const Volume = ({ vol }) => (
  <span className="ticker_vol">{vol.toLocaleString("en-US")}</span>
);

const Price = ({ price }) => {
  return (
    <span className="ticker_price">
      $
      {parseFloat(price)
        .toFixed(2)
        .toLocaleString("en-US")}
    </span>
  );
};

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
