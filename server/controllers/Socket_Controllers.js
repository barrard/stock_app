

module.exports = Trade_Post_Controller 

Trade_Post_Controller.test = test

function test(req, res, next){
  console.log('test')
}

module.exports.delete_post = async (req, res, next) =>{
try {
  logger.log(req.body)
  let{id}=req.body
  logger.log({id})
  let resp = await Trade_Post_Model.findByIdAndDelete(id)
  if(!resp)throw 'Error deleting post'
  res.send({ok:'ok'})
} catch (err) {
  logger.log('err'.bgRed)
  logger.log(err)
  res.send({err})
}
  // let resp = await Trade_Post_Model.add_trade_post(form_data)

}

module.exports.add_trade_post = async (req, res, next) => {
  let form_data = {}
  const form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = __dirname + "/../../next_app/static/trade_post_imgs";
  
  logger.log(req.body);
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
    logger.log(file_name)
    form_data.file_name = file_name


  });
  form.on('field', function(name, value) {
    logger.log({name, value})
    form_data[name] = value
  });
    // log any errors that occur
  form.on("error", function(err) {
    logger.log("An error has occured: \n" + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on("end", function() {
    logger.log("end");
    setTimeout(async () => {
      logger.log({form_data})
      /* crete new post */
      let resp = await Trade_Post_Model.add_trade_post(form_data)
      res.send(resp)
  
    }, 0);
  });

  // parse the incoming request containing the form data
  form.parse(req);
  // logger.log(form)
  logger.log(req.file);
  logger.log(req.files);
};



