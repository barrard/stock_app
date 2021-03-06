require('dotenv').config();
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");
const csurf = require("csurf");
var cors = require('cors')

const helmet = require('helmet')
const session = require("express-session");
const mongoStore = require("connect-mongo")(session);
const passport = require('passport')
const express_validator = require('express-validator')
const Page_views_model = require('../models/page_views_model.js')
const {ensure_admin} = require('./router_middleware.js')
const DB_NAME = process.env.DB_NAME
const Socket_Router = require('../routes/Socket_Router.js')

const helper = require('./helper.js')
module.exports = (app, next_app) => {
  const {protected_router} = require('../routes/Protected_Router.js')()
  const {auth_router} = require('../routes/Auth_Router.js')()
  const {user_router} = require('../routes/User_Router.js')()
  const {stock_data_router} = require('../routes/Stock_Data_Router.js')()
  const {admin_router} = require('../routes/Admin_Router.js')()
  const {commodities_router} = require('../routes/Commodities_Router.js')()



  // app.use((req, res, next)=>{
  //   const ignored_paths = [
  //     '/_next/static/webpack/3990e5758444a9bf4723.hot-update.json',
  //     '/_next/static/webpack/6413def085cd83bdd4ea.hot-update.json',
  //     '/_next/webpack-hmr',
  //     '/_next/static/development/pages/landing.js.map',
  //     '/static/js/bootstrap.js',
  //     '/static/js/popper.js',
  //     '/static/js/tether.js',
  //     '/static/js/jq.js',
  //     '/_next/static/development/dll/dll_9f052745d9378ee03f88.js',
  //     '/_next/static/runtime/main.js',
  //     '/_next/static/runtime/webpack.js',
  //     '/static/css/css.css',
  //     '/static/css/nprogress.css',
  //     '/static/vendor/font-awesome/css/all.min.css',
  //     '/static/css/bootstrap.css',
  //     '/_next/static/development/pages/_app.js',
  //     '/_next/static/development/pages/landing.js',
  //     '/_next/on-demand-entries-ping',
  //     ''

  //   ]
  //   const path = req.path
  //   if(ignored_paths.indexOf(req.path != -1)) return next()
  //   logger.log(`Session TEST?!?!`.green)
  //   logger.log(req.cookies)
  //   logger.log(req.headers)
  //   if(req.session)logger.log(`WE HAVE SSEEEESSSSSSIIIIOOONNNNN!!!`.magenta)
  //   logger.log(`@@@@@@2  HEADER   $$$$$$$$$4`.yellow)

  //   logger.log(path)
  //   logger.log(req.ip)

  //   console.log('@$%$$@@$245@$44@$@23424@#$52345@#$%234%$@#4542#%23$%$234%$@3454234%$2345')
  //   next()
  // })

  /* CORS OPTIONS FOR ORIGIN */
  let whitelist = ['http://192.168.0.93:3003', 'http://localhost:3003', 'https://stocks.dakine.website']
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

  app.use(helmet());
  app.use(cors(corsOptions))
  app.use((req, res, next)=>{
    // logger.log('res.checkBody')
    next()
  })
  app.use(body_parser.json());
  app.use(
    body_parser.urlencoded({
      extended: false,
      limit: "50mb"
    })
  );
  
  /* DONT MOVE THIS!!!!!!  MUST STAY HERE NEXT TO BODY PARSER  FML */
      //Validation
app.use(express_validator(
  helper.express_validator_options()
));

  app.use((req, res, next)=>{
    // logger.log('res.checkBody1')
    next()
  })

  app.use(cookie_parser());
  const mongo_store = new mongoStore({ url: `mongodb://localhost/${DB_NAME}` });
  const session_options = {
    name:'Della_Session',
    store: mongo_store,
    secret: 'process.env.SESSION_SECRET',
    saveUninitialized: true,
    resave: true,
    cookie: {
      //   secure: false,//this is also the default setting
      //   httpOnly: true,//this is on by default
      expires: new Date(253402300000000) //last loooong time
    }
  };
  if (process.env.NODE_ENV == "production"){
    logger.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SECURE COOKIE')
    session_options.cookie.secure = true;//TODO FIX
  }
    

  const session_middlesware = session(session_options);
  app.use(session_middlesware);
  app.use(csurf());




  app.use((req, res, next)=>{
    // logger.log('res.checkBody3')
    next()
  })




//New user messages
app.use((req, res, next) => {
  if (req.user) {
    if(req.user.transaction_in_progress) req.session.messages.push({
      warning:`Transaction in progress.....  <a className='alert-link' href='/account-wallet'>VIEW</a>`
    })
    if (!req.user.email_verifed && req.path != '/account') req.session.messages.push({
      warning: `
    Please verify your Email address - ${req.user.primary_email} <a className='alert-link' href='/account'>HERE</a>`
    })
    if (!req.user.phone_verified && req.path != '/account') req.session.messages.push({
      info: `
    Please verify your Phone Number <a className='alert-link' href='/account'>HERE</a>`})

  }
  next()
})
app.use((req, res, next)=>{
  // logger.log('res.checkBody4')
  next()
})
app.use((req, res, next) => {

  res.locals.PRODUCTION = process.env.NODE_ENV =="production"
  res.locals.API_SERVER = process.env.API_SERVER
  
  res.locals.csrf_token_function = req.csrfToken
  res.locals.user = req.user || null;
  res.locals.session_messages = req.session.messages
  res.locals.NODE_ENV = process.env.NODE_ENV
  res.locals.SOCKET_PROTOCOL = process.env.SOCKET_PROTOCOL
  res.locals.SOCKET_HOST = process.env.SOCKET_HOST
  res.locals.SOCKET_PORT = process.env.SOCKET_PORT
  res.locals.PHONE_TOKEN_LENGTH = process.env.PHONE_TOKEN_LENGTH
  /* SEE IF USER HAS TOKENS FOR EMAIL/PHONE VERIFICATION */
  let has_email_token = req.session.has_email_token
  let has_phone_token = req.session.has_phone_token
  if(has_email_token)res.locals.has_email_token = true
  if(has_phone_token)res.locals.has_phone_token = true
  

  req.session.messages = []
  // logger.log(req.session.messages)
  next()
});

//PAGE VIEWS 
app.use((req, res, next) => {
  if(process.env.NODE_ENV!=="development")
    Page_views_model.add_page_view(req)
  next()
})



app.use((err, req, res, next)=> {
  logger.log("csrf_token".bgWhite);
  logger.log(req.csrfToken());
  logger.log(err);
  if (err.code !== "EBADCSRFTOKEN") return next(err);

  // handle CSRF token errors here
  res.status(403);
  res.send("form tampered with");
});




    //PASSPORT
    app.use(passport.initialize())
    app.use(passport.session(session_options))
  
    // Socket_Router.init(io, mongo_store)



    app.use('/',protected_router)
    app.use('/auth',auth_router)
    app.use('/user', user_router)
    app.use('/stock', stock_data_router)
    app.use('/admin/',[ensure_admin], admin_router)
    app.use('/commodities', commodities_router)


    
};
