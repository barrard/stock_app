const mongoose = require("mongoose");
// const Crowdsale = require('./crowdsale.js')

const MA_data_Schema = mongoose.Schema({
  symbol: {type:String, index: true},
    MA_20: {
      open:{},
      close:{},
      high:{},
      low:{}
    },
    MA_50: {
      open:{},
      close:{},
      high:{},
      low:{}
    },
    MA_200: {
      open:{},
      close:{},
      high:{},
      low:{}
    }
  
});
/*     
    price_type:String,
    MA:Number,
    most_time_above: Number,
    most_time_below: Number,
    average_time_above: Number,
    average_time_below: Number,
    total_above: Number,
    total_below: Number,
    total_time_equal: Number,
    percent_ranges: {},
    consecutive_days_tracker: 
     [ String],
    all_data: 
     [ String],
    current_status: { state: Number, consecutive_days: Number } 
*/

const MA_Data_Model = mongoose.model("MA_data", MA_data_Schema);
module.exports = MA_Data_Model;
MA_Data_Model.add_MA_data = add_MA_data;
MA_Data_Model.update_MA_data = update_MA_data

async function update_MA_data(symbol, MA, price_type, data){
  let ma_data = await MA_Data_Model.findOne({
    symbol:symbol
  })
  logger.log(ma_data)

}

async function add_MA_data(symbol, MA, price_type, crossover_results) {
  try {
    if (MA == 20) {
      let setObject = {}
      // setObject['MA_20.'+ price_type]=crossover_results
      await MA_Data_Model.findOneAndUpdate(
        { symbol: symbol },

        { $set: {['MA_20.'+price_type]:crossover_results} },
        { upsert: true, new: true }
      );
    }
    if (MA == 50) {
      await MA_Data_Model.findOneAndUpdate(
        { symbol: symbol },

        { $set: { ['MA_50.'+price_type]:crossover_results}  },
        { upsert: true, new: true }
      );
    }
    if (MA == 200) {
      await MA_Data_Model.findOneAndUpdate(
        { symbol: symbol },

        { $set: { ['MA_200.'+price_type]:crossover_results}  },
        { upsert: true, new: true }
      );
    }
    logger.log(`${symbol} MA_data ${MA} ${price_type} added`)
  } catch (err) {
    logger.log("err".bgRed);
    logger.log(err);
  }
}
