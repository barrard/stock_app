colors = require("colors");
logger = require("tracer").colorConsole({
  format:
    "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});
logger.log(`/home/dave/code/next_stocks/.env`)
require('dotenv').config({path:`/home/dave/code/next_stocks/.env`})
const rp = require("request-promise");
let News_Source_Model = require('../models/News_Source_Model.js')
logger.log(process.env.NEWS_API_KEY)
let api_key = `&apiKey=${process.env.NEWS_API_KEY}`
let news_api_url = 'https://newsapi.org/v2'
let news_top_headlines_url = 'https://newsapi.org/v2'
require("../db/db.js");





async function get_news(query){
  let query_url = encodeURIComponent(query)
  let news_result = await rp(`${news_api_url}/everything?language=us&q=${query}${api_key}`)
  logger.log(news_result)
}








// get_sources_list() //To init the list of news sources
async function get_sources_list(){
  /* 
"id": "abc-news",
"name": "ABC News",
"description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
"url": "https://abcnews.go.com",
"category": "general",
"language": "en",
"country": "us"
  */
  let source_list = await rp(`${news_api_url}/sources?language=en${api_key}`)
  let sources = JSON.parse(source_list)
logger.log(sources)
News_Source_Model.add_news_source_data(sources.sources)
}
