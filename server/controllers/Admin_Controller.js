// const bcrypt = require("bcrypt");
const formidable = require("formidable");


var Trade_Post_Schema = require("../models/Trade_Post_Schema.js");
// const twilio = require("../services/twilio.js");
// const sendgrid = require("../services/sendgrid.js");

const Trade_Post_Controller = module.exports = Trade_Post_Schema;



module.exports.add_trade_post = async (req, res, next) => {
  logger.log(req.body);
  const form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = __dirname + "/../../next_app/static/trade_post_imgs";

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on("file", function(field, file) {
    logger.log("field - " + field + " : file - " + JSON.stringify(file));
    let ext = file.name;
    const index = ext.lastIndexOf(".");
    ext = ext.slice(index);
    logger.log("whats the upload file?");
    logger.log(file.path);
    var file_name = file.path.split("/");
    file_name = file_name[file_name.length - 1];


  });
  // log any errors that occur
  form.on("error", function(err) {
    logger.log("An error has occured: \n" + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on("end", function() {
    logger.log("end");
    setTimeout(() => {}, 1000);
  });

  // parse the incoming request containing the form data
  form.parse(req);
  // logger.log(form)
  logger.log(req.file);
  logger.log(req.files);
};



