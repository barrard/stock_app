const mongoose = require("mongoose");
// const Crowdsale = require('./crowdsale.js')
const redis = require('../db/redis.js')
const Daily_Stock_Data_Schema = mongoose.Schema({
  symbol: { type: String, index: true},
  daily_data: [
    {
      date: String,
      open: Number,
      high: Number,
      low: Number,
      close: Number,
      volume: Number,
      unadjustedVolume: Number,
      change: Number,
      changePercent: Number,
      vwap: Number,
      label: String,
      changeOverTime: Number,
      MA_20:{},
      MA_50:{},
      MA_200:{}
    }
  ]
});

const Daily_Stock_Data_Model = mongoose.model(
  "Daily_Stock_Data",
  Daily_Stock_Data_Schema
);
module.exports = Daily_Stock_Data_Model;
Daily_Stock_Data_Model.get_daily_data_for = get_daily_data_for;
Daily_Stock_Data_Model.update_daily_stock_data = update_daily_stock_data;
Daily_Stock_Data_Model.get_symbol = get_symbol;
Daily_Stock_Data_Model.create_daily_data = create_daily_data
Daily_Stock_Data_Model.get_limited_symbol_data = get_limited_symbol_data
Daily_Stock_Data_Model.add_previous_daily_data = add_previous_daily_data
Daily_Stock_Data_Model.add_MA_price_data= add_MA_price_data

async function add_MA_price_data(price_MA_data){
  let {MA_20_obj, MA_50_obj, MA_200_obj} = price_MA_data
  var id_20,id_50,id_200
  // logger.log(MA_20_obj)
  if(MA_20_obj) id_20 = MA_20_obj.id
  if(MA_50_obj) id_50 = MA_50_obj.id
  if(MA_200_obj) id_200 = MA_200_obj.id
  // logger.log(id_20)

  if(id_20){
    // logger.log({id_20})
     await Daily_Stock_Data_Model.findOneAndUpdate({
      'daily_data._id':id_20
    }, {$set:{'daily_data.$.MA_20':MA_20_obj}})
    logger.log(`done ${id_20}`)
  }
  if(id_50){
    // logger.log({id_50})
     await Daily_Stock_Data_Model.findOneAndUpdate({
      'daily_data._id':id_50
    }, {$set:{'daily_data.$.MA_50':MA_50_obj}})
    logger.log(`done ${id_50}`)

  }
  if(id_200){
    // logger.log({id_200})
     await Daily_Stock_Data_Model.findOneAndUpdate({
      'daily_data._id':id_200
    }, {$set:{'daily_data.$.MA_200':MA_200_obj}})
    logger.log(`done ${id_200}`)
    logger.log({MA_200})
  }

  
}
async function add_previous_daily_data(symbol, data){
   let done = await update_daily_stock_data(symbol, data)
   return done
}


async function create_daily_data(symbol, daily_data){
  let new_data = new Daily_Stock_Data_Model({
    symbol, daily_data
  })
  new_data.save()

}
/* positive limit gets the first(older) data, negative number get last(newer) data */
async function get_limited_symbol_data(symbol, limit){
  let datas = await Daily_Stock_Data_Model.findOne({symbol:symbol}, {daily_data :{$slice:limit}})
  return datas

}



async function get_symbol(symbol){
  let datas = await Daily_Stock_Data_Model.findOne({symbol:symbol})
  return datas

}

async function update_daily_stock_data(symbol, data) {

  try {
    let done = await Daily_Stock_Data_Model.findOneAndUpdate(
      { symbol: symbol },
      { $push  :{ daily_data : data }},
      { upsert: true }
    );
    if(!done) return{failed:symbol}
    else return {done:symbol}
    // logger.log(comapny_data)
  } catch (err) {
    logger.log("err".bgRed);
    logger.log(err);
    return{err}
  }
}

async function get_daily_data_for(symbol) {
  try {
    // let daily_data = await redis.get(`${symbol}_daily`)
    // logger.log(daily_data)
    // if(!daily_data){
      logger.log(`getting data from DB`)
      let daily_data = await Daily_Stock_Data_Model.findOne(
        { symbol: symbol }
      );
      // await redis.set(`${symbol}_daily`, daily_data)
      if(!daily_data) throw `No data found for ${symbol}`
      return daily_data
    // }else{
      // logger.log(`found in redis`)

      // return daily_data
    // }
  } catch (err) {
    logger.log("err".bgRed);
    logger.log(err);
  }
}


