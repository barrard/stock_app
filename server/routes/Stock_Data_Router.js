const { Router } = require("express");
const Stock_Data_Controller = require("../controllers/Stock_Data_controller.js");

// const {
//   ensure_authenticated
// } = require("../middleware/router_middleware.js");

class Stock_Data_Router {
  constructor() {
    // this.test = Router();
    // this.hello = Router();
    this.stock_data_router = Router();
    this.buildRoutes();
  }

  buildRoutes() {
    /* Lareget trade */
    this.stock_data_router.get(
      "/:symbol/largest-trades",
      Stock_Data_Controller.get_largest_trades
    );

    this.stock_data_router.get(
      "/market/collection/sector",
      Stock_Data_Controller.get_sector_data
    );
    

    /* get company */
    this.stock_data_router.get(
      "/:symbol/company",
      Stock_Data_Controller.get_company
    );

        /* get stats */
        this.stock_data_router.get(
          "/:symbol/stats",
          Stock_Data_Controller.get_stats
        );
    /* logo url */
    this.stock_data_router.get(
      "/:symbol/chart/5y",
      Stock_Data_Controller.get_chart_5y
    );

    /* logo url */
    this.stock_data_router.get(
      "/:symbol/logo",
      Stock_Data_Controller.get_logo_url
    );

    /* book data */
    this.stock_data_router.get(
      "/:symbol/book",
      Stock_Data_Controller.get_book_data
    );

    /* get symbols data */
    this.stock_data_router.get(
      "/get_symbols_data",
      Stock_Data_Controller.get_symbols_data
    );
  }
}

// const User_Router = new User_Router();

module.exports = () => new Stock_Data_Router();
