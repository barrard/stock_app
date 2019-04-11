const { Router } = require("express");
const Stock_Data_Controller = require("../controllers/Stock_Data_controller.js");

const {
  ensure_authenticated
} = require("../middleware/router_middleware.js");

class Stock_Data_Router {
  constructor() {
    // this.test = Router();
    // this.hello = Router();
    this.stock_data_router = Router();
    this.buildRoutes();
  }

  buildRoutes() {

    /* get symbols data */
    this.stock_data_router.get(
      "/get_symbols_data",
      Stock_Data_Controller.get_symbols_data
    );

  }
}

// const User_Router = new User_Router();

module.exports = () => new Stock_Data_Router();
