colors = require("colors");
logger = require("tracer").colorConsole({
  format:
    "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});

// const sendgrid = require('../services/sendgrid.js');
const Stocks_Symbols_Model = require("../models/stock_symbols_model.js");
const Company_Data_Model = require("../models/company_data_model.js");
const Tags_Model = require("../models/tags_model.js");
const rp = require("request-promise");
require("../db/db.js");

class Stock_Data_Controller {
  constructor() {
    this.get_symbols_data = this.get_symbols_data.bind(this);
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
}

const stock_data_controller = (module.exports = new Stock_Data_Controller());

/* Hits the /stock/symbol/log api for all symbols */
// stock_data_controller.get_all_compnay_logo_into_db()

/* Hits the /stock/symbol/company api for all symbols */
// stock_data_controller.get_all_compnay_data_into_db()

/* Get all the company tags */
// stock_data_controller.get_all_company_tags_data()
