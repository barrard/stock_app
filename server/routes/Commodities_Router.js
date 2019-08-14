const { Router } = require("express");

const Quote_Controller = require("../controllers/Quote_Controller.js");

const {
  ensure_authenticated
} = require("./../middleware/router_middleware.js");

class Commodities_Router {
  constructor() {
    this.commodities_router = Router();
    this.buildRoutes();
  }

  buildRoutes() {
    /* return trade last 30 posts */
    this.commodities_router.get('/get_all_data/:sym',
    Quote_Controller.get_all_data
    // Quote_Controller.
    )
    this.commodities_router.get('/get_all_data/:sym/:start/:end',
    Quote_Controller.get_all_data
    // Quote_Controller.
    )

    /* handle MA analysis queryies */
    // this.protected_router.post(
    //   "/MA-query",
    //   [ensure_authenticated],
    //   Stock_Analysis_Controller.combined_MA_perc_serch
    // );

    // /* moving-average-analysis */
    // this.protected_router.get(
    //   "/moving-average-analysis",
    //   [ensure_authenticated],
    //   (req, res, next) => next()
    // );

    // this.test.get('/', (req, res) => {res.send('test')})
    // this.hello.get('/', (req, res) => {res.send('hello')})
  }
}

module.exports = () => new Commodities_Router();
