const mongoose = require('mongoose');
console.log('TD')

const db_name = 'TD_DATA'
console.log({db_name})
// mongoose.set('debug', true);
module.exports = mongoose

mongoose.connect(`mongodb://localhost/${db_name}`,  { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false


})
  .then(connection => {
    logger.log('Connected to MongoDB')
  })
  .catch(error => {
    logger.log(error.message)
  })
