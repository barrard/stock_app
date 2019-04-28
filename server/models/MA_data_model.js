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


const MA_Data_Model = mongoose.model("MA_data", MA_data_Schema);
module.exports = MA_Data_Model;
MA_Data_Model.add_MA_data = add_MA_data;
MA_Data_Model.update_MA_data = update_MA_data
MA_Data_Model.find_stocks_x_perc_from_y = find_stocks_x_perc_from_y

async function find_stocks_x_perc_from_y(querys){
  let queries = querys.map(query=>{
    let{perc, price_type, MA} = query
    return {[`MA_${MA}.${price_type}.current_status.perc`]: {$gt:perc}}
  })
  let percentage_query = await MA_Data_Model.find({
    $and:[...queries]
  })
  if(!percentage_query) return []

  return percentage_query

}

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
