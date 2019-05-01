// import * as meta_actions from "../actions/meta_actions.js";

const initial_state = {

  mouseDown: false, //listen for drag events
  canvas_width: null,
  canvas_height: null,
  chart_height: "",
  vol_canvas_height: "",
  canvas: "",
  context: {},
  candle_width: 3,
  space_between_bars: 0.5,
  x_offset: -30,
  data_loaded: false,
  crosshair_overlay: "",
  volume_canvas: "",
  volume_canvas_overlay: "",
  vol_canvas_share: 0.2,
  overlay_offset: "",
  scrollY_offset: "",
  symbol: "",
  spinner_timmer: false,
  MA_data: {},
  chart_style: "light",
  chart_data_length: 0
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case "SET_X_OFFSET":{
      return{...state, x_offset:action.x_offset
      }

      }
    

    default:
      return state;
  }
};

function high_to_low(a, b, prop) {
  if (deep_value(a, prop) > deep_value(b, prop)) return -1;
  if (deep_value(a, prop) < deep_value(b, prop)) return 1;
  return 0;
}
function low_to_high(a, b, prop) {
  if (deep_value(a, prop) > deep_value(b, prop)) return 1;
  if (deep_value(a, prop) < deep_value(b, prop)) return -1;
  return 0;
}

const deep_value = (obj, path) =>
  path
    .replace(/\[|\]\.?/g, ".")
    .split(".")
    .filter(s => s)
    .reduce((acc, val) => acc && acc[val], obj);
