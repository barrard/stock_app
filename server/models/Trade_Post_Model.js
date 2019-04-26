const mongoose = require("mongoose");
// const Crowdsale = require('./crowdsale.js')

const Trade_Post_Schema = mongoose.Schema({
  symbol: String,
  direction: "",
  img: String,
  file_name: String,
  entry: String,
  stop: String,
  first_target: String,
  second_target: String,
  certainty: String,
  votes: String,
  trade_outcome: String,
  notes: String
});

const Trade_Post_Model = mongoose.model("Trade_Post", Trade_Post_Schema);
module.exports = Trade_Post_Model;
Trade_Post_Model.add_trade_post = add_trade_post;
Trade_Post_Model.get_last_30_trade_posts = get_last_30_trade_posts;

async function get_last_30_trade_posts(req, res, next){
  try {
    let last_30_posts = await Trade_Post_Model.find().sort('-_id').limit(30)
    logger.log(last_30_posts)
    res.send({posts:last_30_posts})
  } catch (err) {
    logger.log('err'.bgRed)
    logger.log(err)
  }
}

async function add_trade_post({
  symbol,
  img,
  file_name,
  direction,
  entry,
  stop,
  first_target,
  second_target,
  notes
}) {
  try {
    let new_trade_post = new Trade_Post_Model({
      symbol,
      img,
      file_name,
      direction,
      entry,
      stop,
      first_target,
      second_target,
      notes
    });
    let saved_post = await new_trade_post.save();

    logger.log({ saved_post });
    return saved_post;
  } catch (err) {
    logger.log("err".bgRed);
    logger.log(err);
    return { err };
  }
}
