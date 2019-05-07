export const Swing_High_Low = (data) => {
  let last_high = 0;
  let last_low = 0;
  const Swing_Highs_lows = [];
  console.log(data);
  let high_low_results = find_highs_and_lows(data);
  const MA_values = [6, 18, 20, 50, 100, 200];
  let MA_data = add_MA_data_to_model(data, MA_values);

  return {MA_data, high_low_results}

  
};

function draw_line(x, y, canvas){
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x+100, canvas.height);
  ctx.stroke();
}

function add_MA_data_to_model(daily_data, MA_values) {
  console.log("add_MA_data_to_model");
  let before_cal = new Date().getTime();
  /* ensure we have data for the symbol*/
  let MA_obj = {};
  MA_values.forEach(MA => {
    MA_obj[MA] = [];
  });
  /* Get minimum MA */
  let min_MA = get_min_max(MA_values);
  console.log({ min_MA });

  let length = daily_data.length;

  let counter = -1;

  /* Start a loop */
  while (counter < length - min_MA.min) {
    counter++;
    /* start from the begining of the array */
    /* get the number MA items in array */
    MA_values.forEach(MA => {
      let end_counter = MA + counter;
      if (length > end_counter) {
        let data_slice = slice_data(counter, end_counter, daily_data);
        let price_MA_data = get_price_type_averages(data_slice);
        MA_obj[MA][end_counter - 1] = price_MA_data;
      }
    });
  }

  let after_cal = new Date().getTime();
  console.log(`MA data done took ${after_cal - before_cal} miliseconds`);
  console.log(MA_obj);

  return MA_obj;
}
/* average all 4 price types */
function get_price_type_averages(array_of_price_data) {
  let length = array_of_price_data.length;
  let close = array_of_price_data.reduce((a, b) => a + b["close"], 0);
  let price_average_obj = {
    close: parseFloat((close / length).toFixed(4))
  };
  return price_average_obj;
}

/* Helper function for easy slicing and dicing */
function slice_data(start, end, array) {
  return array.slice(start, end);
}

/* Helper to get min and max values */
function get_min_max(data) {
  let max = 0; //low number that is lower than any high
  let min = 10000000; //some big number that is larger than any lows
  data.forEach(data_point => {
    if (data_point > max) {
      max = data_point;
    }
    if (data_point < min && data_point > 0) {
      min = data_point;
    }
  });
  return { max, min };
}

function find_highs_and_lows(data) {
  console.log(data.length);
  const pivot_array = [{ 0: data[0] }];
  const high_low_obj = {
    start: data[0].low,
    higher_high: [],
    lower_low: [],
    close_low: [],
    close_high: [], 
    outside_day:[],
    inside_day:[]
  }; //possible trend traker
  var high = 0;
  var low = 0;
  var prev_value = data[0];
  // var prev_compare_value = data[0].open
  var higher_high_count = 0;
  var higher_low_count = 0;
  var lower_low_count = 0;
  var lower_high_count = 0;
  var side_counter = 0;
  var difference = 0;
  let high_high_streaks = []
  let lower_low_streaks = []
  let high_low_streaks = []
  let lower_high_streaks = []
  let side_way_streak = []

  data.forEach((point, bar_count) => {
    // console.log(bar_count)
    let higher_high, lower_low, higher_low, lower_high;

    /* LOWS */
    if (is_within(point.low, prev_value.low, 0.09)) {
      side_counter++
      high_low_obj.close_low.push({ [bar_count]: point });
    } else {
      if(side_counter>0){
        side_way_streak.push({[bar_count]:side_counter})
        side_counter=0
      }
      //lower low -> this is going down
      if (point.low < prev_value.low) {
        // console.log(`lower low at bar ${bar_count}`);
        prev_value.low = point.low;
        //add to the trend tracker
        high_low_obj.lower_low.push({ [bar_count]: point });
        //increment the lower_low_count++
        lower_low_count++;
        lower_low = true;
        if(higher_low_count>0){
          high_low_streaks.push({[bar_count]:higher_low_count})
          higher_low_count=0
        }

        //OR
        //higher low -> this is going up
      } else if (point.low > prev_value.low) {
        higher_low = true;
        higher_low_count++;

        //if down trend count is above 1(?)
        //the previous trend was down
        // then we have switched from down -> up (bottom?)
        if (lower_low_count > 0) {
          pivot_array.push({ [bar_count]: prev_value }); //add the bottom value..
          // console.log(`we switched at bar ${bar_count}`); //notify the switch

            lower_low_streaks.push({[bar_count]:lower_low_count})
            
            lower_low_count = 0; //reset the downward trend
          //increment uptrend? not yet....
          //possible side movement..
        }
      }
    }

    /* HIGH */
    if (is_within(point.high, prev_value.high, 0.2)) {
      high_low_obj.close_high.push({ [bar_count]: point });
      side_counter++

    } else {
      // if(side_counter>0){
      //   side_way_streak.push(side_counter)
      //   side_counter=0
      // }
      //high high  ->  this is going up
      if (point.high > prev_value.high) {
        higher_high = true;
        // console.log(`high high at bar ${bar_count}`);
        high_low_obj.higher_high.push({ [bar_count]: point });

        higher_high_count++;

        if(lower_high_count>0){
          lower_high_streaks.push({[bar_count]:lower_high_count})
          lower_high_count=0
        }
        //OR
        //lower high  ->  this is going down
      } else if (point.high < prev_value.high) {
        lower_high = true
        //if up trend is greater than 1
        //the previous trend was up
        //then we switched from up  ->  down (top?)
          /* most higher high in a row? */


          if (higher_high_count > 0) {

          pivot_array.push({ [bar_count]: prev_value });
          // console.log(`we switched at bar ${bar_count}`); //notify the switch
          high_high_streaks.push({[bar_count]:higher_high_count})
          higher_high_count = 0;
          }

          //we are down trending
          lower_high_count++;
        }
        
      
    }

    if(higher_high && lower_low){
      /* Outside day */
    high_low_obj.outside_day.push({[bar_count]:point})
    }else if(lower_high && higher_low){
      /* Inside day */
      high_low_obj.inside_day.push({[bar_count]:point})

    }

    prev_value = point;
  }); //end of loop

  const results = {
    high_high_streaks,
lower_low_streaks,
high_low_streaks,
lower_high_streaks,
side_way_streak,
    pivot_array,
    high_low_obj,
    high,
    low,
    side_counter,
    prev_value,
    lower_low_count,
    higher_low_count,
    higher_high_count,
    lower_high_count
  };
  console.log(results);
  return results;
}

/* Helper to find percentage away */
function is_within(x, y, perc) {
  /* is x +/- %perc of y? */
  var perc = perc / 100;
  var plus_minus = y * perc;
  var flag = false;
  if (x <= y + plus_minus && x >= y - plus_minus) flag = true;
  return flag;
}
