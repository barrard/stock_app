colors = require("colors");
logger = require("tracer").colorConsole({
  format:
    "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});
const rp = require("request-promise");
const Stocks_Symbols_Model = require("../models/stock_symbols_model.js");

/* Init stock symbol data */


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
