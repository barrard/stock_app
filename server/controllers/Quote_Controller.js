const Quote = require("../models/Quote_Model.js");

const symbols = require('../services/Commodity_Symbols.js')

module.exports = Quote;

// Quote.insert_quote = insert_quote
// Quote.insert_quotes_data = insert_quotes_data
Quote.get_latest_data =  get_latest_data
Quote.get_faves = get_faves

/* My faves */
const fave_comm_sym = ['/GC', '/CL', '/ES']
async function get_faves(){
  return await get_all_symbols_latest_data(fave_comm_sym)
}

async function get_latest_data(symbol){
  let quote = await Quote.findOne({symbol:symbol}).sort({ _id: -1 }).limit(1)
  return quote
}

async function get_all_symbols_latest_data(symbols){
  let quotes={}
  await Promise.all(
    symbols.map(async _sym =>{
      //'/ES' => ES
      quotes[_sym.slice(1)] = await get_latest_data(_sym)
    })
  )
  // logger.log(quotes.symbol)
  return quotes
}


// async function insert_quotes_data(quotes){
// 	for (k in quotes ){
// 		insert_quote(quotes[k])
// 	}
// }

// async function insert_quote(data) {
//     try {
// 			logger.log((data.totalVolume))
// 			logger.log((data.symbol))
// 			// logger.log(data.bidPriceInDouble)
	
// 			// logger.log(data.askPriceInDouble)
// 			// logger.log(data.lastPriceInDouble)
// 			// logger.log(data.futureSettlementPrice)
//         let new_quote = new Quote(data)
// 				await new_quote.save()
//     } catch (err) {
//         logger.log('err'.bgRed)
//         logger.log(err)
//     }


// }