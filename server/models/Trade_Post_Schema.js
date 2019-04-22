const mongoose = require("mongoose");
// const Crowdsale = require('./crowdsale.js')

const Trade_Post_Schema = mongoose.Schema({
  symbol: String,
  img: String,
  entry: Number,
  stop: Number,
  first_target: Number,
  second_target: Number,
  ranking:Number,
  votes:Number,
  trade_outcome:String
});

const Trade_Post_Model = mongoose.model("Trade_Post", Trade_Post_Schema);
module.exports = Trade_Post_Model;
Trade_Post_Model.add_trade_post = add_trade_post;

async function add_trade_post({
  symbol,
  img,
  entry,
  stop,
  first_target,
  second_target
}) {
  try {
    let new_trade_post = new Trade_Post_Model({
      symbol,
      img,
      entry,
      stop,
      first_target,
      second_target
    })
    let saved_post = await new_trade_post.save()


    logger.log(saved_post)
  } catch (err) {
    logger.log("err".bgRed);
    logger.log(err);
  }
}
