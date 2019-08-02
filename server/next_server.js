colors = require("colors");
logger = require("tracer").colorConsole({
  format:
    "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});
const cacheableResponse = require('cacheable-response')

// import {Logger, createConsoleProcessor} from '@grabrinc/isomorphic-logger';

// const logger = new Logger;

// logger.channel(createConsoleProcessor());
require("dotenv").config();
// console.log(process.env)
require("./db/db.js");
// require('./db/redis.js')
const { parse } = require("url");
const express = require("express");
const next = require("next");

const middleware = require("./middleware/use.js");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const next_app = next({ dir: "./next_app", dev });
const handle = next_app.getRequestHandler();

/* Home page cashing function */
const Home_Page_Cache = cacheableResponse({
  ttl: 1000 * 60 * 5, // 5 min
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await next_app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
})

/* chart page cashing function */
const Chart_Page_Cache = cacheableResponse({
  ttl: 1000 * 60 * 5, // 5 min
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await next_app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
})


const get_routes = require("./routes/routes.js");
const routes = get_routes();

/* Services */
// require('./services/stock_data_service.js')


/* ORACLE here? */
// const oracle = require('./services/Eth_Price_Oracle/Eth_Price_Oracle.js')
// oracle()

//TODO figure out if this will be useful
// const LRUCache = require('lru-cache')
// const ssrCache = new LRUCache({
//   max: 100,
//   maxAge: dev ? 5 : 1000 * 60 * 60 // 1hour
// })

next_app
  .prepare()
  .then(() => {
    const server = express();
    logger.log("I AM SERVER".yellow);
    const env = dev ? "Development" : "Production"
    logger.log(`Running in ${env}`)
    server.set("trust proxy", "loopback");

    middleware(server, next_app);

    server.get('/', (req, res)=> Home_Page_Cache({req, res, pagePath:'/landing'}))


    /* Render dynamic chart */
    server.get("/chart/:symbol", (req, res) => Chart_Page_Cache({req, res, pagePath:'/chart'}))
    // {
    //   return next_app.render(req, res, "/chart", {
    //     chart: req.params.symbol
    //   });
    // });

    /* Render dynamic sector */
    server.get("/sector/:sector", (req, res) => {
      return next_app.render(req, res, "/sector", {
        sector: req.params.sector
      });
    });

    server.get("*", (req, res) => {
      const parsed_url = parse(req.url, true);
      const { pathname, query = {} } = parsed_url;

      const route = routes[pathname];
      if (route) {
        logger.log(`hit the route here ${route.page}`);
        logger.log(`${route.page}`);
        logger.log({ query });
        return next_app.render(req, res, route.page, query);
      }

      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      logger.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    logger.log(ex.stack);
    process.exit(1);
  });
