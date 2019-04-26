const { Router } = require("express");

const Admin_Controller = require("../controllers/Admin_Controller.js");

const {
  ensure_admin
} = require("./../middleware/router_middleware.js");

class Admin_Router {
  constructor(app) {
    if(app){
      app.use(ensure_admin)
    }
    this.admin_router = Router();
    this.buildRoutes();
  }

  buildRoutes() {
    /* Delete trade post */
    
    this.admin_router.post(
      "/delete_post",
      [ensure_admin],
      Admin_Controller.delete_post
    );

    /* Add trade  post */

    this.admin_router.post(
      "/add_trade_post",
      [ensure_admin],
      Admin_Controller.add_trade_post
    );

    // /* moving-average-analysis */
    // this.admin_router.get(
    //   "/moving-average-analysis",
    //   [ensure_authenticated],
    //   (req, res, next) => next()
    // );

  }
}

module.exports = (app) => new Admin_Router();
