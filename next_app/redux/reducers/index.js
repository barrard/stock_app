import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import meta_reucer from './meta_reducer.js'
import user_reucer from './user_reducer.js'
import stock_data_reducer from './stock_data_reducer'
import MA_analysis from './MA_analysis_reducer.js'
import Chart_Analysis from './Chart_Analysis_reducer.js'
import Commodities_Reducer from './Commodities_Reducer.js'
// import usersReducer from "./usersReducer";

export default combineReducers({
  toastr: toastrReducer,
  user:user_reucer,
  meta:meta_reucer,
  stock_data:stock_data_reducer,
  MA_analysis:MA_analysis,
  Chart_Analysis:Chart_Analysis,
  commodities:Commodities_Reducer

});
