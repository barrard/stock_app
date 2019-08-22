const Quote = require("../models/Quote_Model.js");
const Minutely_Commodity_Model = require("../models/Minutely_Commodity_Model.js");
const TD_DATA_service = require("../services/TD_DATA/TD_DATA_service.js");
const mongoose = require("mongoose");

const symbols = require("../services/Commodity_Symbols.js");

module.exports = Quote;

Quote.get_latest_data = get_latest_data;
Quote.get_faves = get_faves;
Quote.insert_quote = insert_quote;
Quote.insert_quotes_data = insert_quotes_data;
Quote.get_commodities_quote = get_commodities_quote;
Quote.get_all_data = get_all_data;

/* Takes the 2-second snap shots and resamples to one miniute */
var compiled_data = {};
var null_flag = true;
var last_compiled_data = {};
var one_minute = 1000 * 60;
function parse_quote(sym, quote) {
  // logger.log({ quote });
  let price = quote.lastPriceInDouble;
  let key_safe_symbol = sym.slice(1);
  if (!compiled_data[key_safe_symbol]) {
    // logger.log(`new object here for ${key_safe_symbol}!!!`.green);
    compiled_data[key_safe_symbol] = {
      symbol: null,
      high: 0,
      low: 9999999,
      open: null,
      close: null,
      prices: [],
      volume: 0,
      last_vol: 0,
      vols: [],
      quote_times: [],
      sample_times: [],
      start_timestamp: null,
      end_timestamp: null
    }; //make a new object
  }

  let {
    symbol,
    open,
    close,
    prices,
    high,
    low,
    start_timestamp,
    end_timestamp,
    volume,
    last_vol,
    vols,
    quote_times,
    sample_times
  } = compiled_data[key_safe_symbol];
  if(!null_flag)null_flag=true
  if (!symbol) symbol = sym;

  if (!start_timestamp) start_timestamp = new Date().getTime();
  if (!open) {
    // logger.log(`setting open @ ${price}`.yellow);
    open = price;
  }
  if (high < price) high = price;
  if (low > price) low = price;
  close = price;
  if (!last_vol) last_vol = quote.totalVolume;

  let vol_diff = quote.totalVolume - last_vol;
  volume += vol_diff;
  last_vol = quote.totalVolume;
  sample_times.push(new Date().getTime());
  prices.push(price);
  vols.push(quote.totalVolume);
  quote_times.push(quote.quoteTimeInLong);
  // logger.log({symbol, open, high, low, volume})
  compiled_data[key_safe_symbol] = {
    ...compiled_data[key_safe_symbol],
    symbol,
    close,
    open,
    prices,
    high,
    low,
    start_timestamp,
    quote_times,
    end_timestamp,
    volume,
    last_vol,
    vols
  };
  let now = new Date().getTime();
  // logger.log(compiled_data[key_safe_symbol])

  if (now - one_minute > start_timestamp) {
    /* save closing price */
    /* save time stamp for end */
    compiled_data[key_safe_symbol].end_timestamp = quote.quoteTimeInLong;
    /* check for equality */
    let equal_check = isEquivalent(
      compiled_data[key_safe_symbol],
      last_compiled_data[key_safe_symbol]
    );
    // if (
    // last_compiled_data[key_safe_symbol] &&
    // compiled_data[key_safe_symbol] &&
    /* euality function maybe useless.... */
    // equal_check ||
    /* Compiled minutley data should have 20 prices/vols */
    // compiled_data[key_safe_symbol].prices.length < 5
    // ) {
    /* set last to current */
    // last_compiled_data[key_safe_symbol] = compiled_data[key_safe_symbol];
    /* reset the current compiled data */
    // compiled_data[key_safe_symbol] = null;
    // return logger.log(`The data is the same as last for ${symbol}`);
    // }
    /* Finally save the data */
    insert_minutely_data(compiled_data[key_safe_symbol], symbol);
    /* set new to old */
    last_compiled_data[key_safe_symbol] = compiled_data[key_safe_symbol];
    /* reset the current to null */
    compiled_data[key_safe_symbol] = null;
    null_flag = false
  }
}

async function insert_minutely_data(data, symbol) {
  // logger.log(`inserting data for ${symbol}`);
  try {
    minute_data = new Minutely_Commodity_Model(data);
    await minute_data.save();
  } catch (err) {
    logger.log("err".bgRed);
    logger.log(err);
  }
}

async function get_all_data(req, res) {
  let { sym, start, end } = req.params;
  sym = `/${sym.toUpperCase()}`;
  logger.log(`get_all_data for ${sym}`.yellow);
  if (start && end) {
    end = new Date().getTime();
    start = new Date().getTime() - 1000 * 60 * 60 * 24;
    let from = objectIdWithTimestamp(start);
    let to = objectIdWithTimestamp(end);
    logger.log({ from, to });

    let all_data = await Minutely_Commodity_Model.find({
      $and: [
        { symbol: sym },
        {
          _id: {
            $gt: from
          }
        },
        {
          _id: {
            $lt: to
          }
        }
      ]
    });
    logger.log(all_data.length);
    return res.send(all_data);
  } else {
    let all_data = await Minutely_Commodity_Model.find({
      symbol: sym
    }).sort({'_id':-1}).limit(500);
    logger.log(`Quote data length ${all_data.length}`);
    return res.send(all_data);
  }
}
async function get_commodities_quote() {
  return TD_DATA_service.get_commodities_quote();
}

/* My faves */
const fave_comm_sym = ["/GC", "/CL", "/ES"];
async function get_faves() {
  return await get_all_symbols_latest_data(fave_comm_sym);
}

async function insert_quotes_data(quotes, io) {
  for (sym in quotes) {
    parse_quote(sym, quotes[sym]);
  }
  if(null_flag)io.sockets.in("/commodities").emit("latest_minutley_bar", compiled_data);
}

async function insert_quote(data) {
  try {
    // logger.log((data.totalVolume))
    // logger.log((data.symbol))
    // logger.log(data.bidPriceInDouble)

    // logger.log(data.askPriceInDouble)
    // logger.log(data.lastPriceInDouble)
    // logger.log(data.futureSettlementPrice)
    let new_quote = new Quote(data);
    await new_quote.save();
  } catch (err) {
    logger.log("err".bgRed);
    logger.log(err);
  }
}

async function get_latest_data(symbol) {
  let quote = await Quote.findOne({ symbol: symbol })
    .sort({ _id: -1 })
    .limit(1);
  return quote;
}

async function get_all_symbols_latest_data(symbols) {
  let quotes = {};
  await Promise.all(
    symbols.map(async _sym => {
      //'/ES' => ES
      quotes[_sym.slice(1)] = await get_latest_data(_sym);
    })
  );
  // logger.log(quotes.symbol)
  return quotes;
}

// This function returns an ObjectId embedded with a given datetime
// Accepts both Date object and string input
function objectIdWithTimestamp(timestamp) {
  // Convert string date to Date object (otherwise assume timestamp is a date)
  // if (typeof timestamp == "string") {
  //   timestamp = new Date(timestamp);
  // }

  logger.log({ timestamp });

  // Convert date object to hex seconds since Unix epoch
  var hexSeconds = Math.floor(timestamp / 1000).toString(16);
  logger.log({ hexSeconds });
  // Create an ObjectId with that hex timestamp
  var constructedObjectId = mongoose.Types.ObjectId(
    hexSeconds + "0000000000000000"
  );
  logger.log({ constructedObjectId });

  return constructedObjectId;
}

function isEquivalent(a, b) {
  if (!a || !b) return false;
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (Array.isArray(a[propName])) continue;

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
