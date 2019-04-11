
const mongoose = require('mongoose');
// const Crowdsale = require('./crowdsale.js')


const Stock_Symbols_Schema = mongoose.Schema({
    name:String,
    symbols_data_updated: { type: Date, default: Date.now },
    symbols:[]

})



const Symbol_Data = module.exports = mongoose.model('Stock_Symbols', Stock_Symbols_Schema)

Symbol_Data.update_symbols = update_symbols

async function update_symbols(data){
  await Symbol_Data.findOneAndUpdate({name:'symbols'},
  { symbols_data_updated:Date.now(), symbols:data
  }, {upsert:true})
  logger.log('UPDATE SYMBOLS')
}