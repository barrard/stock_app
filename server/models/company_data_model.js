
const mongoose = require('../db/db');
// const Crowdsale = require('./crowdsale.js')


const Stock_Company_Schema = mongoose.Schema({
    logo_url:String,
    symbol: String,
    companyName: String,
    exchange: String,
    industry: String,
    website: String,
    description: String,
    CEO: String,
    issueType: String,
    sector: String,
    tags: [
      String

    ]
  

})



const Stock_Company_Data_Model = mongoose.model('Stock_Company_Data', Stock_Company_Schema)
module.exports = Stock_Company_Data_Model
Stock_Company_Data_Model.update_company_data = update_company_data
Stock_Company_Data_Model.update_company_logo = update_company_logo

async function update_company_logo(symbol, {url}){
  try {
    logger.log({url})
    await Stock_Company_Data_Model.findOneAndUpdate({symbol:symbol},
    {logo_url:url}
    , {upsert:true, new:true})
    // logger.log(comapny_data)
  } catch (err) {
    logger.log('err'.bgRed)
    logger.log(err)
  }
}


async function update_company_data(data){
  try {
    const symbol = data.symbol
    logger.log({symbol})
    let comapny_data = await Stock_Company_Data_Model.findOneAndUpdate({symbol:symbol},
    {...data}
    , {upsert:true, new:true})
    // logger.log(comapny_data)
  } catch (err) {
    logger.log('err'.bgRed)
    logger.log(err)
  }
}