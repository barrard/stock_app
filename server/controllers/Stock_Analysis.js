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
const redis = require("../db/redis.js");
const MA_Data_Model = require("../models/MA_data_model.js");
const Current_MA_Status_Model = require("../models/current_ma_status.js");

class Stock_Analysis_Controller {
  constructor() {}

  /* TESTING */
  async test(symbol) {
    let start_time = new Date().getTime();
    let data = await this.get_or_set_from_redis(symbol);
    let end_time = new Date().getTime();
    logger.log(end_time - start_time);
    logger.log(data.length);
  }

  async find_all_stocks_near_MA(MA, type) {
    var counter = -1;
    let iex_symbols = await this.fetch_iex_symbols();
    console.log(iex_symbols.length);
    // return
    var total = iex_symbols.length;

    var timer = setInterval(async () => {
      counter++;

      let symbol = iex_symbols[counter].symbol;
      this.find_stock_MA_data(symbol, MA, type); // logger.log(company_data)
      logger.log(counter);

      if (counter + 1 == total) clearInterval(timer);
    }, 5000);
  }

  /* Helpers */
  /* Helper functions */
  iex_api() {
    return "https://cloud.iexapis.com/stable";
  }
  async get_or_set_from_redis(symbol) {
    let redis_resp = await redis.get(symbol);
    if (!redis_resp) {
      let data = await Daily_Stock_Data_Model.get_symbol(symbol);
      if (!data) return `no data for ${symbol}`;
      redis.set(symbol, data.daily_data);
      return data.daily_data;
    } else {
      return redis_resp;
    }
  }
  /* Gets all symbols form iex api */
  async fetch_iex_symbols() {
    let resp = await rp(`${this.iex_api()}/ref-data/symbols`);
    let json_Data = JSON.parse(resp);
    return json_Data;
  }

  async track_all_stocks_MA_data() {
    let iex_symbols = await this.fetch_iex_symbols();
    let counter = 4097;
    let total = iex_symbols.length;
    let timer = setInterval(async () => {
      counter++;

      let symbol = iex_symbols[counter].symbol;
      logger.log({ symbol, counter });
      let data = await Daily_Stock_Data_Model.get_daily_data_for(symbol);
      // logger.log(data)

      await this.track_price_vs_MA_over_time(
        symbol,
        20,
        "open",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        20,
        "high",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        20,
        "low",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        20,
        "close",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        50,
        "open",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        50,
        "high",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        50,
        "low",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        50,
        "close",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        200,
        "open",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        200,
        "high",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        200,
        "low",
        data.daily_data
      );
      await this.track_price_vs_MA_over_time(
        symbol,
        200,
        "close",
        data.daily_data
      );
      if (counter + 1 == total) clearInterval(timer);
    }, 500);
  }

  slice_data(start, end, array) {
    return array.slice(start, end);
  }
  /* Analysis Functions */
  async add_MA_data_to_all_stocks() {
    let iex_symbols = await this.fetch_iex_symbols();
    let counter = 17;
    let total = iex_symbols.length;
    let timer = setInterval(async () => {
      counter++;

      let symbol = iex_symbols[counter].symbol;
      logger.log({ symbol, counter });
      let before_db = new Date().getTime();
      let data = await Daily_Stock_Data_Model.get_daily_data_for(symbol);
      let after_db = new Date().getTime();
      logger.log(after_db - before_db);
      this.add_MA_data_to_model(symbol, data.daily_data);
    }, 100);
  }
  async add_MA_data_to_model(symbol, daily_data) {
    let before_cal = new Date().getTime();
    /* ensure we have data for the symbol*/
    if (!daily_data) {
      daily_data = await Daily_Stock_Data_Model.get_daily_data_for(symbol);
      daily_data = daily_data.daily_data;
    }

    if (!daily_data) return `No data found for ${symbol}`;
    let length = daily_data.length;

    let counter = -1;
    let MA_20 = 20; //minumum MA to calculater, hard coded..
    let MA_50 = 50; //minumum MA to calculater, hard coded..
    let MA_200 = 200; //minumum MA to calculater, hard coded..
    /* Start a loop */
    while (counter < length - MA_20) {
      counter++;
      /* start from the begining of the array */
      let end_counter_20 = MA_20 + counter;
      let end_counter_50 = MA_50 + counter;
      let end_counter_200 = MA_200 + counter;
      // let price_MA_data = {}
      /* get the number MA items in array */
      /* 20 */
      if (length >= MA_20) {
        let slice_20 = this.slice_data(counter, end_counter_20, daily_data);
        let price_MA_data = this.get_price_type_averages(slice_20);

        daily_data[end_counter_20 - 1].MA_20 = price_MA_data;
        // logger.log(daily_data[end_counter_20-1])

        // price_MA_data.MA_20_obj.id = slice_20[19]._id
      }
      if (length >= end_counter_50) {
        let slice_50 = this.slice_data(counter, end_counter_50, daily_data);
        let price_MA_data = this.get_price_type_averages(slice_50);

        daily_data[end_counter_50 - 1].MA_50 = price_MA_data;
        // logger.log(daily_data[end_counter_50-1])

        // price_MA_data.MA_50_obj.id = slice_50[49]._id
      }
      if (length >= end_counter_200) {
        let slice_200 = this.slice_data(counter, end_counter_200, daily_data);
        let price_MA_data = this.get_price_type_averages(slice_200);

        daily_data[end_counter_200 - 1].MA_200 = price_MA_data;
        // logger.log(daily_data[end_counter_200-1])
        // price_MA_data.MA_200_obj.id = slice_200[199]._id
      }
    }

    logger.log(`done with ${symbol}`);
    let after_cal = new Date().getTime();
    logger.log(after_cal - before_cal);

    Daily_Stock_Data_Model.add_MA_price_data(symbol, daily_data);
  }

  /* OLD FUNCTION TO ANALYZE MA DAYA  TODO REWRITE */
  async track_price_vs_MA_over_time(symbol, MA, type, data) {
    let counter = 0;
    /* streak of values above/below */
    let daily_MA_states = [];
    var data = data;
    if (!data) {
      data = await Daily_Stock_Data_Model.get_daily_data_for(symbol);
      data = data.daily_data;
    }

    // logger.log(data.length);
    let daily_data = data;
    if (!daily_data) return `No data found for ${symbol}`;
    let length = daily_data.length;
    if (length < MA) return;
    /* Start a loop */
    while (counter < length - MA) {
      /* start from the begining of the array */
      let end_counter = MA + counter;

      /* get the number MA items in array */
      let MA_data = daily_data.slice(counter, end_counter);

      /* Calculate average */
      let MA_average = this.find_average(MA_data, type);

      /* Determin if above =1 or below = -1 or equal = 0 */
      let state = this.above_or_below(
        daily_data[end_counter - 1][type],
        MA_average
      );

      /* Pull out data, state, amount, perc */
      let amount = daily_data[end_counter - 1][type] - MA_average; // price_type - MA
      let perc = amount / daily_data[end_counter - 1][type]; // amount/ptice_type
      /* create the object of data */
      let state_data = {
        state,
        amount,
        perc
      };
      /* Insert data to array */
      daily_MA_states.push(state_data);
      counter++;
    }
    // logger.log(daily_MA_states)
    /*     { state: 1,
      amount: 10.914446999999953,
      perc: 0.09136578468894677 },
    { state: 1, amount: 10.51152999999995, perc: 0.088200329087859 },
    { state: 1,
      amount: 10.933496499999961,
      perc: 0.09132487727706659 },
    { state: 1, amount: 9.599997499999972, perc: 0.0809971895655341 },
 */

    // logger.log(
    //   `${
    //     daily_MA_states.length
    //   } Data Collected for ${symbol} with MA ${MA} price_type ${type}`
    // );
    /* Now look at this array of data for patterns?? */
    this.analyse_MA_crossover_data(symbol, MA, type, daily_MA_states);
  }

  async get_all_current_MA_status() {
    let iex_symbols = await this.fetch_iex_symbols();
    let counter = -1;
    let total = iex_symbols.length;

    let timer = setInterval(() => {
      counter++;
      let symbol = iex_symbols[counter].symbol;
      logger.log({ symbol, counter });
      this.get_current_MA_status(symbol);
      if (counter + 1 == total) clearInterval(timer);
    }, 10);
  }

  async get_current_MA_status(symbol) {
    /* 20, 50, and 200 MA */
    let data = await Daily_Stock_Data_Model.get_limited_symbol_data(
      symbol,
      200 * -1
    );
    let daily_data = data.daily_data;
    // logger.log(daily_data)
    let end_of_array = daily_data.length;
    if (end_of_array < 200)
      return logger.log(`${symbol} has less than 200 data points`);

    /* Get some meta data */
    let { date, open, high, low, close, vwap, volume } = daily_data[
      end_of_array - 1
    ];
    let meta_data = { date, open, high, low, close, vwap, volume };
    /* 20 */
    let data_20 = this.slice_data(end_of_array - 20, end_of_array, daily_data);
    let data_50 = this.slice_data(end_of_array - 50, end_of_array, daily_data);
    let data_200 = this.slice_data(
      end_of_array - 200,
      end_of_array,
      daily_data
    );

    let MA_20 = this.get_price_type_averages(data_20);
    let MA_50 = this.get_price_type_averages(data_50);
    let MA_200 = this.get_price_type_averages(data_200);
    let perc_20 = this.get_perc(MA_20.close, close);
    let perc_50 = this.get_perc(MA_50.close, close);
    let perc_200 = this.get_perc(MA_200.close, close);
    // logger.log({MA_20, MA_50, MA_200})
    // logger.log(meta_data)
    let all_data = {
      meta_data,
      MA_20,
      MA_50,
      MA_200,
      perc_20,
      perc_50,
      perc_200
    };
    // logger.log(all_data)
    Current_MA_Status_Model.update_current_MA_status(symbol, all_data);
  }

  async find_stock_MA_data(symbol, MA, price_type, data) {
    var data = data;
    if (!data) {
      data = await Daily_Stock_Data_Model.get_limited_symbol_data(
        symbol,
        MA * -1
      );
    }
    let { daily_data } = data;
    if (daily_data.length < MA)
      return `data length ${data.length} is less than MA ${MA}`;
    // logger.log(data)
    // logger.log(daily_data.length)
    let average = this.find_average(daily_data, price_type);
    logger.log({ average, price_type, MA });
    /* Compare average to last  */
    logger.log(daily_data.length);
    let last = daily_data[MA - 1][price_type];
    logger.log({ MA, last });
    var diff = last - average;
    logger.log({ diff });
    let proximity = diff / last;
    logger.log({ proximity });
    logger.log(`--------------------------------------------------`);
    let new_MA_data = {
      diff,
      percent_range: proximity
    };
    /* Enter this into the MA-data collection??  yes! */
    MA_Data_Model.update_MA_data(symbol, MA, price_type, new_MA_data);
  }

  async analyze_new_MA_data(symbol) {
    /* Query for the daily data,  */
    let data = await Daily_Stock_Data_Model.get_daily_data_for(symbol);
    logger.log(data.daily_data.length);
    /* find the current_MA state */
    await this.find_stock_MA_data(symbol, 20, "open", data);
    // await this.find_stock_MA_data(symbol, 20, "high", data);
    // await this.find_stock_MA_data(symbol, 20, "low", data);
    // await this.find_stock_MA_data(symbol, 20, "close", data);
    // await this.find_stock_MA_data(symbol, 50, "open", data);
    // await this.find_stock_MA_data(symbol, 50, "high", data);
    // await this.find_stock_MA_data(symbol, 50, "low", data);
    // await this.find_stock_MA_data(symbol, 50, "close", data);
    // await this.find_stock_MA_data(symbol, 200, "open", data);
    // await this.find_stock_MA_data(symbol, 200, "high", data);
    // await this.find_stock_MA_data(symbol, 200, "low", data);
    // await this.find_stock_MA_data(symbol, 200, "close", data);
  }

  async analyse_MA_crossover_data(symbol, MA, price_type, data) {
    /* how many times wehn from above - > below */
    let crossover_results = this.count_cross_overs(data);
    // logger.log(crossover_results)
    /* SAtore in redis */
    // redis.set(`${symbol}-${MA}-${price_type}`, JSON.stringify(crossover_results))
    /* Or save in mongo? */
    await MA_Data_Model.add_MA_data(symbol, MA, price_type, crossover_results);

    /* longest time above/below and shortest time above/below  and average time above/below or within certian ranges*/
  }
  count_cross_overs(data) {
    let most_time_above = 0;
    let most_time_below = 0;
    let average_time_above = 0;
    let average_time_below = 0;
    let total_above = 0;
    let total_below = 0;
    let total_time_equal = 0;
    let percent_ranges = {};
    let current_status = {};
    let last_state = null;
    let consecutive_days_tracker = [];
    let consecutive_days = 0;
    data.forEach((MA_data, index) => {
      // logger.log(index);
      let { state } = MA_data;
      // logger.log(last_state)

      this.track_percentage_from_MA(MA_data, percent_ranges);
      if (index + 1 == data.length) {
        // logger.log(MA_data);
        // logger.log({ consecutive_days });
        current_status = { ...MA_data, consecutive_days };
      }

      if (last_state == null) {
        /* Set initial state */
        consecutive_days++;
        if (state > 0) last_state = "above";
        if (state < 0) last_state = "below";
        if (state == 0) last_state = "equal";
      } else {
        if (last_state == "above") {
          if (state > 0) {
            total_above++;
            return consecutive_days++;
          }
          if (state < 0) {
            consecutive_days_tracker.push(
              `fell below after ${consecutive_days}`
            );
            if (consecutive_days > most_time_above)
              most_time_above = consecutive_days;
            consecutive_days = 0;
            return (last_state = "below");
          }
          if (state == 0) {
            consecutive_days_tracker.push(`equal after ${consecutive_days}`);
            if (consecutive_days > most_time_above)
              most_time_above = consecutive_days;
            consecutive_days = 0;
            return (last_state = "equal");
          }
        } else if (last_state == "below") {
          if (state < 0) {
            total_below++;
            return consecutive_days++;
          }
          if (state > 0) {
            consecutive_days_tracker.push(
              `rose above after ${consecutive_days}`
            );
            if (consecutive_days > most_time_below)
              most_time_below = consecutive_days;

            consecutive_days = 0;

            return (last_state = "above");
          }
          if (state == 0) {
            consecutive_days_tracker.push(`equal after ${consecutive_days}`);
            if (consecutive_days > most_time_below)
              most_time_below = consecutive_days;

            consecutive_days = 0;
            return (last_state = "equal");
          }
        } else if (last_state == "equal") {
          if (state == 0) return consecutive_days++;
          if (state < 0) {
            consecutive_days_tracker.push(
              `fell below after ${consecutive_days}`
            );
            consecutive_days = 0;
            return (last_state = "below");
          }
          if (state > 0) {
            consecutive_days_tracker.push(
              `rose above after ${consecutive_days}`
            );
            consecutive_days = 0;
            return (last_state = "equal");
          }
        }
      }
    });
    average_time_above = total_above / data.length;
    average_time_below = total_below / data.length;
    let meta_data_obj = {
      most_time_above,
      most_time_below,
      average_time_above,
      average_time_below,
      total_above,
      total_below,
      total_time_equal,
      percent_ranges,
      consecutive_days_tracker,
      last_state,
      current_status
    };

    return meta_data_obj;
  }

  /* query the current_MA_status */

  async combined_MA_perc_serch(req, res, next) {
    logger.log(req.body);
    let { query } = req.body;
    let result = await Current_MA_Status_Model.find_MA_perc_query(
      query
      /*     [
      {
        perc: 90,
        MA: 200,
        g_l:'g',
      },
      {
        perc: 1,
        MA: 20,
        g_l:'l',
      },
    ] */
    );
    logger.log(result.length);
    res.send(result);
  }

  /* count how often the price is +-1..10%+ from MA */
  track_percentage_from_MA(MA_data, percent_ranges) {
    let { perc } = MA_data;
    // logger.log({perc})
    // logger.log(percent_ranges);
    // 0.01;
    if ((perc > 0 && perc < 0.01) || (perc < 0 && perc > -0.01)) {
      if (!percent_ranges[1]) {
        percent_ranges[1] = 0;
      }
      percent_ranges[1]++;
    }
    //0.02
    if ((perc > 0.01 && perc < 0.02) || (perc < -0.01 && perc > -0.02)) {
      if (!percent_ranges[2]) {
        percent_ranges[2] = 0;
      }
      percent_ranges[2]++;
    }
    //0.03
    if ((perc > 0.02 && perc < 0.03) || (perc < -0.02 && perc > -0.03)) {
      if (!percent_ranges[3]) {
        percent_ranges[3] = 0;
      }
      percent_ranges[3]++;
    }
    //0.04
    if ((perc > 0.03 && perc < 0.04) || (perc < -0.03 && perc > -0.04)) {
      if (!percent_ranges[4]) {
        percent_ranges[4] = 0;
      }
      percent_ranges[4]++;
    }
    //0.05
    if ((perc > 0.04 && perc < 0.05) || (perc < -0.04 && perc > -0.05)) {
      if (!percent_ranges[5]) {
        percent_ranges[5] = 0;
      }
      percent_ranges[5]++;
    }
    //0.06
    if ((perc > 0.05 && perc < 0.06) || (perc < -0.05 && perc > -0.06)) {
      if (!percent_ranges[6]) {
        percent_ranges[6] = 0;
      }
      percent_ranges[6]++;
    }
    //0.07
    if ((perc > 0.06 && perc < 0.07) || (perc < -0.06 && perc > -0.07)) {
      if (!percent_ranges[7]) {
        percent_ranges[7] = 0;
      }
      percent_ranges[7]++;
    }
    //0.08
    if ((perc > 0.07 && perc < 0.08) || (perc < -0.07 && perc > -0.08)) {
      if (!percent_ranges[8]) {
        percent_ranges[8] = 0;
      }
      percent_ranges[8]++;
    }
    //0.09
    if ((perc > 0.08 && perc < 0.09) || (perc < -0.08 && perc > -0.09)) {
      if (!percent_ranges[9]) {
        percent_ranges[9] = 0;
      }
      percent_ranges[9]++;
    }
    //0.10
    if ((perc > 0.09 && perc < 0.1) || (perc < -0.09 && perc > -0.1)) {
      if (!percent_ranges[10]) {
        percent_ranges[10] = 0;
      }
      percent_ranges[10]++;
    }
    //0.11
    if ((perc > 0.1 && perc < 0.11) || (perc < -0.1 && perc > -0.11)) {
      if (!percent_ranges[11]) {
        percent_ranges[11] = 0;
      }
      percent_ranges[11]++;
    }
    //0.12
    if ((perc > 0.11 && perc < 0.12) || (perc < -0.11 && perc > -0.12)) {
      if (!percent_ranges[12]) {
        percent_ranges[12] = 0;
      }
      percent_ranges[12]++;
    }
    //0.13
    if ((perc > 0.12 && perc < 0.13) || (perc < -0.12 && perc > -0.13)) {
      if (!percent_ranges[13]) {
        percent_ranges[13] = 0;
      }
      percent_ranges[13]++;
    }
    //0.14
    if ((perc > 0.13 && perc < 0.14) || (perc < -0.13 && perc > -0.14)) {
      if (!percent_ranges[14]) {
        percent_ranges[14] = 0;
      }
      percent_ranges[14]++;
    }
    //0.15
    if ((perc > 0.14 && perc < 0.15) || (perc < -0.14 && perc > -0.15)) {
      if (!percent_ranges[15]) {
        percent_ranges[15] = 0;
      }
      percent_ranges[15]++;
    }
    //0.16
    if ((perc > 0.15 && perc < 0.16) || (perc < -0.15 && perc > -0.16)) {
      if (!percent_ranges[16]) {
        percent_ranges[16] = 0;
      }
      percent_ranges[16]++;
    }
    //0.17
    if ((perc > 0.16 && perc < 0.17) || (perc < -0.16 && perc > -0.17)) {
      if (!percent_ranges[17]) {
        percent_ranges[17] = 0;
      }
      percent_ranges[17]++;
    }
    //0.18
    if ((perc > 0.17 && perc < 0.18) || (perc < -0.17 && perc > -0.18)) {
      if (!percent_ranges[18]) {
        percent_ranges[18] = 0;
      }
      percent_ranges[18]++;
    }
    //0.19
    if ((perc > 0.18 && perc < 0.19) || (perc < -0.18 && perc > -0.19)) {
      if (!percent_ranges[19]) {
        percent_ranges[19] = 0;
      }
      percent_ranges[19]++;
    }
    //0.20
    if ((perc > 0.19 && perc < 0.2) || (perc < -0.19 && perc > -0.2)) {
      if (!percent_ranges[20]) {
        percent_ranges[20] = 0;
      }
      percent_ranges[20]++;
    }
    //0.21
    if ((perc > 0.2 && perc < 0.21) || (perc < -0.2 && perc > -0.21)) {
      if (!percent_ranges[21]) {
        percent_ranges[21] = 0;
      }
      percent_ranges[21]++;
    }
    //0.22
    if ((perc > 0.21 && perc < 0.22) || (perc < -0.21 && perc > -0.22)) {
      if (!percent_ranges[22]) {
        percent_ranges[22] = 0;
      }
      percent_ranges[22]++;
    }
    //0.23
    if ((perc > 0.22 && perc < 0.23) || (perc < -0.22 && perc > -0.23)) {
      if (!percent_ranges[23]) {
        percent_ranges[23] = 0;
      }
      percent_ranges[23]++;
    }
    //0.24
    if (perc > 0.23 || perc < -0.23) {
      if (!percent_ranges[24]) {
        percent_ranges[24] = 0;
      }
      percent_ranges[24]++;
    }
  }

  /* return x above (or equal) y  above, below, equal Strings*/
  above_or_below(x, y) {
    if (x > y) return 1;
    if (x < y) return -1;
    if (x == y) return 0;
  }

  /* Data is high, low, close, open, vwap  object*/
  find_average(array_of_data, /* price type */ type) {
    /* average the data by price type */
    let total = array_of_data.reduce((a, b) => a + b[type], 0);
    return total / array_of_data.length;
  }
  get_perc(MA, price) {
    // logger.log({MA, price})
    if (MA < price) {
      return parseFloat(((price / MA - 1) * 100).toFixed(2));
    } else if (MA > price) {
      return parseFloat(((MA / price - 1) * 100).toFixed(2));
    } else {
      return 0;
    }
  }

  /* average all 4 price types */
  get_price_type_averages(array_of_price_data) {
    let length = array_of_price_data.length;
    let open = array_of_price_data.reduce((a, b) => a + b["open"], 0);
    let close = array_of_price_data.reduce((a, b) => a + b["close"], 0);
    let high = array_of_price_data.reduce((a, b) => a + b["high"], 0);
    let low = array_of_price_data.reduce((a, b) => a + b["low"], 0);
    let price_average_obj = {
      open: parseFloat((open / length).toFixed(2)),
      close: parseFloat((close / length).toFixed(2)),
      high: parseFloat((high / length).toFixed(2)),
      low: parseFloat((low / length).toFixed(2))
    };
    return price_average_obj;
  }
}

const stock_analysis_controller = (module.exports = new Stock_Analysis_Controller());
/* Run daily after getting new prvious daily data */
// stock_analysis_controller.get_all_current_MA_status()

// stock_analysis_controller.combined_MA_perc_serch()

// stock_analysis_controller.track_all_stocks_MA_data();
// stock_analysis_controller.track_price_vs_MA_over_time("AAPL", 20, "close");

// stock_analysis_controller.test("GOOG");

// stock_analysis_controller.find_all_stocks_near_MA(200, "close");

// stock_analysis_controller.analyze_new_MA_data("FB")

// stock_analysis_controller.add_MA_data_to_all_stocks()
// stock_analysis_controller.add_MA_data_to_model('AAPL')
