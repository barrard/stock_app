colors = require("colors");
logger = require("tracer").colorConsole({
  format:
    "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});

// const sendgrid = require('../services/sendgrid.js');
const Daily_Stock_Data_Model = require("../models/daily_stock_data_model.js");
const Stocks_Symbols_Model = require("../models/stock_symbols_model.js");
const Company_Data_Model = require("../models/company_data_model.js");
const Tags_Model = require("../models/tags_model.js");
const rp = require("request-promise");
require("../db/db.js");

class Stock_Data_Controller {
  constructor() {
    this.get_symbols_data = this.get_symbols_data.bind(this);
  }
  /* One time getting all 5y data */
  async get_all_1m_data() {
    // var counter = -1;

    let iex_symbols = await this.fetch_iex_symbols();
    console.log(iex_symbols.length);
    var total = iex_symbols.length;

    var timer = setInterval(async () => {
      counter++;

      const symbol = iex_symbols[counter].symbol;
      const uri_encoded = encodeURIComponent(symbol);

      let daily_stock_data = await this.fetch_iex_5y_data(uri_encoded);
      logger.log({ counter, symbol });
      await Daily_Stock_Data_Model.create_daily_data(symbol, daily_stock_data);

      if (counter + 1 == total) {
        clearInterval(timer);
      }
    }, 300);
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
    if (to_get_data_or_not) {
      let json_Data = await this.fetch_iex_symbols();

      logger.log(json_Data.length);

      // logger.log(resp);
      let data = Stocks_Symbols_Model.update_symbols(json_Data);
      res.send(data);
    } else {
      res.send(symbol_data.symbols);
    }
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
    logger.log('fetch_iex_previous')
    let resp = await rp(`${this.iex_api()}/stock/market/previous`);
    let json_Data = JSON.parse(resp);
    return json_Data;
  }
  async get_previous_data(symbol){
    let resp = await rp(`${this.iex_api()}/stock/${symbol}/previous`);
    let json_Data = JSON.parse(resp);
    logger.log({json_Data})
    return json_Data;
  }

  async add_all_previous_daily_data_to_db(){
    
    let previous_data = await this.fetch_iex_previous();
    var counter = -1
    let symbol_list = Object.keys(previous_data)
    var total = symbol_list.length
    var timer = setInterval(async ()=>{
      counter++
      let symbol = symbol_list[counter]
      let data = previous_data[symbol]
      logger.log({symbol, counter})

      let result =await Daily_Stock_Data_Model.add_previous_daily_data(symbol, data)
      logger.log(result)
      if (counter + 1 == total) clearInterval(timer);

    }, 100)



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
        logger.log(data.daily_data.length)

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


}

const stock_data_controller = (module.exports = new Stock_Data_Controller());
// stock_data_controller.fix_fuck_ups();

/* Hits the /stock/symbol/log api for all symbols */
// stock_data_controller.get_all_compnay_logo_into_db()

/* Hits the /stock/symbol/company api for all symbols */
// stock_data_controller.get_all_compnay_data_into_db()

/* Get all the company tags */
// stock_data_controller.get_all_company_tags_data()

/* Get All 5y data */
// stock_data_controller.get_all_5y_data();


/* Add All previous one-day daily data */
// stock_data_controller.add_all_previous_daily_data_to_db()