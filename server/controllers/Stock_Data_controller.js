colors = require("colors");
logger = require("tracer").colorConsole({
  format:
    "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});
require('dotenv').config()
const redis = require("../db/redis.js");
// const sendgrid = require('../services/sendgrid.js');
const Daily_Stock_Data_Model = require("../models/daily_stock_data_model.js");
const Stocks_Symbols_Model = require("../models/stock_symbols_model.js");
const Company_Data_Model = require("../models/company_data_model.js");
const Tags_Model = require("../models/tags_model.js");
const rp = require("request-promise");
require("../db/db.js");
const MA_Data_Model = require("../models/MA_data_model.js");
const iex_server = `https://api.iextrading.com/1.0`;
const api_server = process.env.API_SERVER
const TD_DATA_controller = require('../models/TD_Data_Model.js')
class Stock_Data_Controller {
  constructor() {
    this.get_symbols_data = this.get_symbols_data.bind(this);
  }
  /* One time getting all 5y data */
  async get_one_5y_data(symbol) {
    // var counter = -1;

    // let iex_symbols = await this.fetch_iex_symbols();
    // console.log(iex_symbols.length);
    // var total = iex_symbols.length;

    // var timer = setInterval(async () => {
    // counter++;

    // const symbol = iex_symbols[counter].symbol;
    const uri_encoded = encodeURIComponent(symbol);

    let daily_stock_data = await this.fetch_iex_5y_data(uri_encoded);
    logger.log({ symbol });
    await Daily_Stock_Data_Model.create_daily_data(symbol, daily_stock_data);

    // if (counter + 1 == total) {
    //   clearInterval(timer);
    // }
    // }, 300);
  }
  async get_all_5y_data() {
    const err_symbols = [];
    const failed_symbols = [];
    const done_symbols = [];
    // var counter = 1368;

    let iex_symbols = await this.fetch_iex_symbols();
    console.log(iex_symbols.length);
    // return
    var total = iex_symbols.length;

    var timer = setInterval(async () => {
      counter++;

      const symbol = iex_symbols[counter].symbol;
      const uri_encoded = encodeURIComponent(symbol);

      let daily_stock_data = await this.fetch_iex_5y_data(uri_encoded);
      logger.log({ counter, symbol });
      await Daily_Stock_Data_Model.create_daily_data(symbol, daily_stock_data);
      // await Daily_Stock_Data_Model.update_daily_stock_data(
      //   symbol,
      //   daily_stock_data
      // );
      // if (failed) failed_symbols.push(failed);
      // if (done) done_symbols.push(done);
      // if (err) err_symbols.push(err);
      if (counter + 1 == total) {
        clearInterval(timer);
        logger.log("DONE!!!");
        logger.log({ err_symbols, failed_symbols });
        logger.log(done_symbols.length);
      }
    }, 30000);
  }
  /* One time function to get all company data into DB */
  async get_all_compnay_logo_into_db() {
    var counter = 0;
    let iex_symbols = await this.fetch_iex_symbols();
    console.log(iex_symbols.length);
    // return
    var total = iex_symbols.length;

    var timer = setInterval(async () => {
      const symbol = iex_symbols[counter].symbol;
      const uri_encoded = encodeURIComponent(symbol);

      let company_logo = await this.fetch_iex_logo(uri_encoded);
      logger.log(company_logo);
      logger.log(counter);
      await Company_Data_Model.update_company_logo(symbol, company_logo);
      if (counter + 1 == total) clearInterval(timer);
      counter++;
    }, 5000);
  }

  /* One time function to get all company data into DB */
  async get_all_compnay_data_into_db() {
    var counter = 0;
    let iex_symbols = await this.fetch_iex_symbols();
    console.log(iex_symbols.length);
    // return
    var total = iex_symbols.length;

    var timer = setInterval(async () => {
      const uri_encoded = encodeURIComponent(iex_symbols[counter].symbol);

      let company_data = await this.fetch_iex_company_data(uri_encoded);
      // logger.log(company_data)
      logger.log(counter);
      await Company_Data_Model.update_company_data(company_data);
      if (counter + 1 == total) clearInterval(timer);
      counter++;
    }, 5000);
  }

  /* Getting the symbols data once a day max */
  async get_symbols_data(req, res) {
    var to_get_data_or_not = false;
    const data_age_limit = 1000 * 60 * 60 * 24; //24 hours
    /* Check DB first */
    let now = Date.now();
    logger.log({ now });
    let symbol_data = await Stocks_Symbols_Model.findOne();
    if (!symbol_data) {
      to_get_data_or_not = true;
    } else {
      logger.log(symbol_data.symbols_data_updated);
      let db_data_time = new Date(symbol_data.symbols_data_updated).getTime();
      logger.log({ db_data_time });
      let age = now - db_data_time;
      logger.log(age);
      logger.log(age > data_age_limit);
      to_get_data_or_not = age > data_age_limit;
    }
    // if (to_get_data_or_not) {
      // let json_Data = await this.fetch_iex_symbols();

      // logger.log(json_Data.length);

      // logger.log(resp);
      // let data = Stocks_Symbols_Model.update_symbols(json_Data);
      // res.send(data);
    // } else {
      res.send(symbol_data.symbols);
    // }
  }

  /* 
  Controllers for caching 24-hr data

*/
  /* LARGET TRADE */
  async get_largest_trades(req, res, next) {
    let symbol = req.params.symbol.toUpperCase();
    logger.log(symbol);
    var largest_trades = await redis.get(`${symbol}_largest_trades`);
    if (!largest_trades) {
      largest_trades = await rp(`  
    ${iex_server}/stock/${symbol}/largest-trades
  `);

      redis.set(`${symbol}_largest_trades`, largest_trades, (1*60*60));
    }

    res.send(largest_trades);
  }
  /* SECOR DATA */
  async get_sector_data(req, res, next) {
    let sector = req.query.collectionName;
    logger.log(sector);
    var sector_data = await redis.get(`${sector}_data`);
    if (!sector_data) {
      sector_data = await rp(`  
    ${iex_server}/stock/market/collection/sector?collectionName=${sector}
  `);

      redis.set(`${sector}_data`, sector_data, (1*60*60));
    }

    res.send(sector_data);
  }
  /* GET COMPANY DATA */
  async get_company(req, res, next) {
    let symbol = req.params.symbol.toUpperCase();
    logger.log(symbol);
    var company = await redis.get(`${symbol}_company`);
    if (!company) {
      company = await rp(`  
    ${iex_server}/stock/${symbol}/company
  `);

      redis.set(`${symbol}_company`, company, (1*60*60*24*7));
    }

    res.send(company);
  }
  /* GET STATS */
  async get_stats(req, res, next) {
    let symbol = req.params.symbol.toUpperCase();
    logger.log(symbol);
    var stats = await redis.get(`${symbol}_stats`);
    if (!stats) {
      stats = await rp(`  
    ${iex_server}/stock/${symbol}/stats
  `);

      redis.set(`${symbol}_stats`, stats,  (1*60*60*24*7));
    }

    res.send(stats);
  }
  /* GET CHART 5Y */

  async get_chart_5y(req, res, next) {
    let symbol = req.params.symbol.toUpperCase();
    logger.log(symbol);
    // var chart_5y = await redis.get(`${symbol}_chart_5y`);
    // if (!chart_5y) {
  //     chart_5y = await rp(`  
  //   ${iex_server}/stock/${symbol}/chart/5y
  // `);
  logger.log({symbol})
  let chart_5y = await TD_DATA_controller.get_daily_data_for(symbol);
console.log(chart_5y.daily_data.length)
      redis.set(`${symbol}_chart_5y`, chart_5y,  (1*60*60*24));
    // }

    res.send(chart_5y.daily_data);
  }
  /* BOOK DATA */
  async get_book_data(req, res, next) {
    let symbol = req.params.symbol.toUpperCase();
    logger.log(symbol);
    var book_data = await redis.get(`${symbol}_book_data`);
    if (!book_data) {
      book_data = await rp(`  
      ${iex_server}/stock/${symbol}/book
    `);

      redis.set(`${symbol}_book_data`, book_data,  (1*60*5));
    }

    res.send(book_data);
  }

  /* LOGO URL */
  async get_logo_url(req, res, next) {
    let symbol = req.params.symbol.toUpperCase();
    logger.log(symbol);
    var logo_url = await redis.get(`${symbol}_logo_url`);
    if (!logo_url) {
      logo_url = await rp(`  
        ${iex_server}/stock/${symbol}/logo
      `);

      redis.set(`${symbol}_logo_url`, logo_url,  (1*60*60*24*7));
    }

    res.send(logo_url);
  }

  /* Helper functions */
  iex_api() {
    return "https://api.iextrading.com/1.0";
  }

  /* Get 5y historical data */
  async fetch_iex_5y_data(symbol) {
    let resp = await rp(`${this.iex_api()}/stock/${symbol}/chart/5y`);
    let json_Data = JSON.parse(resp);
    return json_Data;
  }

  /* Get company info from iex api */
  async fetch_iex_company_data(symbol) {
    let resp = await rp(`${this.iex_api()}/stock/${symbol}/company`);
    let json_Data = JSON.parse(resp);
    return json_Data;
  }

  /* Get company logo */
  async fetch_iex_logo(symbol) {
    let resp = await rp(`${this.iex_api()}/stock/${symbol}/logo`);
    let json_Data = JSON.parse(resp);
    return json_Data;
  }

  /* Gets all symbols form iex api */
  async fetch_iex_symbols() {
    let resp = await rp(`${this.iex_api()}/ref-data/symbols`);
    let json_Data = JSON.parse(resp);
    return json_Data;
  }
  /* Gets all symbols form iex api */
  async fetch_iex_previous() {
    logger.log("fetch_iex_previous");
    let resp = await rp(`${this.iex_api()}/stock/market/previous`);
    let json_Data = JSON.parse(resp);
    return json_Data;
  }
  async get_previous_data(symbol) {
    let resp = await rp(`${this.iex_api()}/stock/${symbol}/previous`);
    let json_Data = JSON.parse(resp);
    logger.log({ json_Data });
    return json_Data;
  }

  async add_all_previous_daily_data_to_db() {
    let previous_data = await this.fetch_iex_previous();
    /* Verify were getting new data */
    /* check the date of the previous data */
    let new_date = previous_data["FB"].date;
    /* check the date of last data */
    let result = await Daily_Stock_Data_Model.get_symbol("FB");
    let old_date = result.daily_data[result.daily_data.length - 1]["date"];
    if (new_date == old_date) return logger.log("data still the same");


    var counter = -1;
    let symbol_list = Object.keys(previous_data);
    var total = symbol_list.length;
    var timer = setInterval(async () => {
      counter++;
      let symbol = symbol_list[counter];
      let data = previous_data[symbol];
      logger.log({ symbol, counter });

      let result = await Daily_Stock_Data_Model.add_previous_daily_data(
        symbol,
        data
      );
      logger.log(result);
      if (counter + 1 == total) clearInterval(timer);
    }, 10);
  }

  async get_all_company_tags_data() {
    let company_data = await Company_Data_Model.find({});
    logger.log(company_data.length);
    logger.log(company_data[1].tags);
    company_data.forEach(data => {
      const company = data.symbol;
      logger.log({ company });
      data.tags.forEach(tag => {
        logger.log({ tag });
        Tags_Model.add_tag_data(tag, company);
      });
    });
  }

  async fix_fuck_ups() {
    let iex_symbols = await this.fetch_iex_symbols();
    logger.log("test");
    var counter = -1;
    var total = iex_symbols.length;
    var debounder = [];
    var double_debounder = [];

    var timer = setInterval(async () => {
      counter++;
      const symbol = iex_symbols[counter].symbol;
      if (!debounder.indexOf(counter) < 0) return;
      debounder.push(counter);
      logger.log(counter);

      let data = await Daily_Stock_Data_Model.get_symbol(symbol);
      if (!data && debounder.indexOf(symbol) < 0) {
        debounder.push(symbol);
        logger.log(`no data for ${symbol}`);
      } else if (data && data.daily_data) {
        logger.log(data.daily_data.length);
        logger.log(data.daily_data.length);

        if (data.daily_data.length > 1259) {
          logger.log(`${symbol} Is over the limit!!!`);
          logger.log(data.daily_data.length);
        }
      } else if (double_debounder.indexOf(symbol) < 0) {
        double_debounder.push(symbol);
        logger.log(`${symbol} is broken!?!!?!`);
      }

      if (counter == total) clearInterval(timer);
    }, 1000);
  }

  /* Route responders for MA data */
  /* Find all stocks X perc awway from Y MA type price_type */
  async find_all_perc_away_from_MA_of_price_type(MA_perc_queries) {
    return await MA_Data_Model.find_stocks_x_perc_from_y(MA_perc_queries);
  }
}

const stock_data_controller = (module.exports = new Stock_Data_Controller());
// stock_data_controller.fix_fuck_ups();

// stock_data_controller.get_one_5y_data('A')

/* Hits the /stock/symbol/log api for all symbols */
// stock_data_controller.get_all_compnay_logo_into_db()

/* Hits the /stock/symbol/company api for all symbols */
// stock_data_controller.get_all_compnay_data_into_db()

/* Get all the company tags */
// stock_data_controller.get_all_company_tags_data()

/* Get All 5y data */
// stock_data_controller.get_all_5y_data();

