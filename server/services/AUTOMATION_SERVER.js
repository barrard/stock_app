const Stock_Data_Controller= require ('../controllers/Stock_Data_controller.js')
const Stock_Analysis_Controller= require ('../controllers/Stock_Analysis.js')



require('../db/db.js')
/* check for new daily data once a day?  maybe more? */
const daily_iex_data_timer = 1000 * 60*60*12//8 hrs
setInterval(()=>{
  let time = new Date()
  console.log(time.get)
  console.log('Automation')
  // Stock_Data_Controller.add_all_previous_daily_data_to_db()
  

}, daily_iex_data_timer)


/* Get IEX data */
/* Add All previous one-day daily data */
// Stock_Data_Controller.add_all_previous_daily_data_to_db()



Stock_Analysis_Controller.get_all_current_MA_status()
