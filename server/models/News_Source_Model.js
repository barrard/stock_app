
const mongoose = require('mongoose');
// const Crowdsale = require('./crowdsale.js')


const News_Sources_Schema = mongoose.Schema({
  id: {type:String, index:true},
  name: {type:String, index:true},
  description: {type:String},
  url: {type:String},
  category: {type:String},
  language: {type:String},
  country: {type:String}
  

})



const News_Sources_Model = mongoose.model('news_source', News_Sources_Schema)
module.exports = News_Sources_Model
News_Sources_Model.add_news_source_data = add_news_source_data

function add_news_source_data(data){
  data.forEach(async source => {
    logger.log(source.name)
    let news_source = new News_Sources_Model(source)
  try {
    let saved_news_source = await news_source.save()


    if(!saved_news_source)throw 'error saving news source'
    
  } catch (err) {
    logger.log('err'.bgRed)
    logger.log(err)
  }
});

}


