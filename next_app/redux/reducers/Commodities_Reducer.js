// import * as meta_actions from "../actions/meta_actions.js";

const initial_state = {
  charts:{}
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case 'SET_COMMODITY_DATA':{
      let charts = { ...state.charts, ...action.chart_data };
      console.log({charts})

      return{
        ...state, charts
      }
    }
    // case "IS_LOADING":{
    //   return{
    //     ...state, is_loading:action.is_loading
    //   }
    // }
    // case "SET_CSRF": {
    //   return { ...state, csrf: action.csrf };
    // }

    // case "SET_API_SERVER": {
    //   const {api_server, iex_server} = action
    //   return { ...state, api_server, iex_server };
    // }

    // case 'GET_CSRF': {
    //   const { csrf } = state;
    //   return { csrf };
    // }

    default:
      return state;
  }
};
