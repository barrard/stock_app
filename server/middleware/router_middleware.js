
module.exports = {

  ensure_admin(req, res, next){
    let {pw, admin} = req.cookies
    if(pw == 'pass' && admin == 'true'){
      next()
    }else{
      res.redirect('/')
    }
  },
  
   ensure_not_logged_in(req, res, next){
     logger.log('IS THIS USER ALREADY LOCGED IN??')
     logger.log(!req.isAuthenticated ? true : false)
    if(!req.isAuthenticated) return res.redirect('/account-profile')
    next()
  },
  
  
   ensure_authenticated(req, res, next) {
    logger.log(req.sessionID)
    logger.log(req.isAuthenticated())

    if (req.isAuthenticated()) {
      logger.log('User is authorized to access'.white.bgBlue)
      return next();
    }
    logger.log('non-authenticated user being redirected'.black.bgWhite)
    res.redirect('/login')
  
  },
  api_access_ensure_authenticated(req, res, next) {
    logger.log(req.isAuthenticated())
    logger.log(req.sessionID)
    // logger.log(req)
    if (req.isAuthenticated()) {
      return next();
    }
    logger.log('non-authenticated user accessing the API'.red.bgWhite)
    res.json([])
  
  },
  
  

}