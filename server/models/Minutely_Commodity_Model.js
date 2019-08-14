const mongoose = require("mongoose");

const Minutely_Commodity = mongoose.Schema({

  symbol: { type: String },
  open: { type: Number },
  high: { type: Number },
  low: { type: Number },
  close: { type: Number },
  volume: { type: Number },
  price_average_vol: { type: Number },
  price_mean_vol: { type: Number },
  price_min_vol: { type: Number },
  price_max_vol: { type: Number },
  start_timestamp: { type: Date },
  end_timestamp: { type: Date },
  prices:[Number],
  vols:[Number],
  quote_times: [Number],
  sample_times: [Number],


});


module.exports = mongoose.model('Minutely_Commodity', Minutely_Commodity)
