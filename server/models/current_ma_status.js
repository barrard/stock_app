const mongoose = require('../db/db');
// const Crowdsale = require('./crowdsale.js')

const Current_MA_Status_Schema = mongoose.Schema({
  symbol: {type:String, index: true},
  current_MA_data:{
    date:String,
    close:Number,
    perc_20:Number,
    perc_50:Number,
    perc_200:Number,
    meta_data:{},
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
  },
  historical_MA_data:[{

    perc_20:Number,
    perc_50:Number,
    perc_200:Number,
    meta_data:{},
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
  }]

  
});


const Current_MA_Status_Model = mongoose.model("current_MA_status", Current_MA_Status_Schema);
module.exports = Current_MA_Status_Model;

Current_MA_Status_Model.update_current_MA_status = update_current_MA_status
Current_MA_Status_Model.find_MA_perc_query = find_MA_perc_query


async function find_MA_perc_query(array_of_queries){
try {
  let queries = array_of_queries.map(query=>{
    let{perc, MA, g_l} = query
    if(g_l == 'g') return {[`current_MA_data.perc_${MA}`]: {$gt:perc}}
    if(g_l == 'l') return {[`current_MA_data.perc_${MA}`]: {$lt:perc}}
  })
  logger.log(queries)
  let percentage_query = await Current_MA_Status_Model.find({
    $and:[...queries]
  })
  if(!percentage_query) return []

  return percentage_query
} catch (err) {
  logger.log('err'.bgRed)
  logger.log(err)
  return 'N/A'
}
}

async function update_current_MA_status(symbol, data){
  await Current_MA_Status_Model.findOneAndUpdate({
    symbol:symbol
  }, {$push:{historical_MA_data:data}, current_MA_data:data}, {upsert:true})


}