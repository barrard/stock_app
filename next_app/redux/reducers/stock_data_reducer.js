// import * as meta_actions from "../actions/meta_actions.js";

const initial_state = {
  has_symbols_data: false,
  symbols_data: {}
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case "SET_SYMBOLS_DATA": {
      return {
        ...state,
        symbols_data: action.symbols_data,
        has_symbols_data: true
      };
    }

    default:
      return state;
  }
};
