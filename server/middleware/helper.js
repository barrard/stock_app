module.exports = {
  //From express-validator docs
  express_validator_options(){
    return  {
      errorFormatter: function (param, msg, value) {
        let namespace = param.split('.'),
          root = namespace.shift(),
          formParam = root;
    
        while (namespace.length) {
          formParam += '[' + namespace.shift() + ']';
        }
        return {
          param: formParam,
          msg: msg,
          value: value
        };
      }
    }
  }
}