colors = require("colors");
logger = require("tracer").colorConsole({
  format:
    "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});
const rp = require("request-promise");
const Stocks_Symbols_Model = require("../models/stock_symbols_model.js");

/* Init stock symbol data */
get_symbol_list();
async function get_symbol_list() {
  var to_get_data_or_not = false
  const data_age_limit = 1000*60*60*24 //24 hours
  /* Check DB first */
  let now = Date.now()
  logger.log({now})
  let symbol_data = await Stocks_Symbols_Model.findOne()
  if(!symbol_data) {to_get_data_or_not = true}
  else{

    logger.log(symbol_data.symbols_data_updated)
    let db_data_time = new Date(symbol_data.symbols_data_updated).getTime()
    logger.log({db_data_time})
    let age = now - db_data_time
    logger.log(age)
    logger.log(age > data_age_limit)
    to_get_data_or_not = age > data_age_limit
  }
  if(to_get_data_or_not){

    /* If not in DB get teh source */
    let resp = await rp("https://api.iextrading.com/1.0/ref-data/symbols");
    let json_Data = JSON.parse(resp)
    
    logger.log(json_Data.length)
    
    // logger.log(resp);
    Stocks_Symbols_Model.update_symbols(json_Data)
  }
}

// {
//   "symbol":"BTCUSDT",
//   "name":"Bitcoin USD",
//   "date":"2019-04-10",
//   "isEnabled":true,
//   "type":"crypto",
//   "iexId":10000000},

//   {"symbol":"EOSUSDT",
//   "name":"EOS USD",
//   "date":"2019-04-10",
//   "isEnabled":true,
//   "type":"crypto",
//   "iexId":10000001},

//   {"symbol":"ETHUSDT",
//   "name":"Ethereum USD",
//   "date":"2019-04-10",
//   "isEnabled":true,"type":"crypto",
//   "iexId":10000002}

//   {"symbol":"BNBUSDT",
//   "name":"Binance Coin USD",
//   "date":"2019-04-10",
//   "isEnabled":true,"type":"crypto",
//   "iexId":10000003},{"symbol":"ONTUSDT",
//   "name":"Ontology USD",
//   "date":"2019-04-10",
//   "isEnabled":true,"type":"crypto",
//   "iexId":10000004}
