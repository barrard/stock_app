
const mongoose = require('../db/db');
// const Crowdsale = require('./crowdsale.js')


const Tag_schema = mongoose.Schema({
  tag:String,
  company:[String]
  

})



const Tags_Model = mongoose.model('Tags', Tag_schema)
module.exports = Tags_Model
Tags_Model.add_tag_data = add_tag_data

async function add_tag_data(tag, company){
  try {
    await Tags_Model.findOneAndUpdate({tag:tag},
    {$addToSet:{company:[company]}}
    , {upsert:true, new:true})
    // logger.log(comapny_data)
  } catch (err) {
    logger.log('err'.bgRed)
    logger.log(err)
  }
}


