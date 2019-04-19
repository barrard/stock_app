const { Router } = require("express");

const Stock_Analysis_Controller = require("../controllers/Stock_Analysis.js");

const {
  ensure_authenticated
} = require("./../middleware/router_middleware.js");

class Protected_Router {
  constructor() {
    this.protected_router = Router();
    this.buildRoutes();
  }

  buildRoutes() {
    /* handle MA analysis queryies */

    this.protected_router.post(
      "/MA-query",
      [ensure_authenticated],
      Stock_Analysis_Controller.combined_MA_perc_serch
    );

    /* moving-average-analysis */
    this.protected_router.get(
      "/moving-average-analysis",
      [ensure_authenticated],
      (req, res, next) => next()
    );

    // this.test.get('/', (req, res) => {res.send('test')})
    // this.hello.get('/', (req, res) => {res.send('hello')})
  }
}

module.exports = () => new Protected_Router();
