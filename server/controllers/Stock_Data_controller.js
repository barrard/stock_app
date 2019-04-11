const User = require("./User_Controller.js");
const passport = require("passport");
// const sendgrid = require('../services/sendgrid.js');
const Stocks_Symbols_Model = require("../models/stock_symbols_model.js");


class Auth_Controller {


  async get_symbols_data(req, res){
    let symbol_data = await Stocks_Symbols_Model.findOne()
    res.send(symbol_data)

  }
}

module.exports = new Auth_Controller();
