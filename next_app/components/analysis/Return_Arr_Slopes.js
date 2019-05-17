export const Return_Arr_Slopes = (price_data, LR_avg, bar_size) => {
  console.log({LR_avg});
  /* clean to average */
  let mod = price_data.length%LR_avg
  console.log({mod})
  price_data=price_data.slice(mod)
  if(price_data.length%LR_avg!==0)throw 'yay!'
  let arr_slopes = [];
  // console.log({ price_data, LR_avg });
  /* get chunks of data according to the LR_avg */
  for (let i = 0; i < price_data.length; i += LR_avg) {
    let xs = [];
    let ys_lows = [];

    for (let j = i; j < i + LR_avg && j < price_data.length; j++) {

      ys_lows.push(price_data[j].low);
    }
    // console.log({ x: xs, y: ys_lows });
    let { m, b, min_max_y } = linearRegression(ys_lows , bar_size);
    arr_slopes.push({ m, b, min_max_y });
  }
  console.log(arr_slopes);
  return arr_slopes
};

function linearRegression(ys, bar_size) {
  /* get the high and low */
  // let min_max_x = get_min_max(data.x)
  // let min_x = min_max_x.min;
  // let max_x = min_max_x.max
  let min_max_y= get_min_max(ys)
  let min_y  = min_max_y.min
  let max_y= min_max_y.max
  // console.log({min_x, max_x})
  // console.log({min_y, max_y})
  // console.log(data)
  var xsum = 0;
  var ysum = 0;
  /* Sum  each value */
  // console.log(data.x.length)
  let range = max_y-min_y 
  let xs = []
  for (var i = 0; i < ys.length; i++) {
    /* map y according to min_max_y */
    /* build the xs array based on bar width */
    let x = ((i+1)*bar_size)-(bar_size/2)
    xs.push(x)
    let y = ys[i]
    let mapped_y = map(y, min_y, max_y, range, 0 )
    // console.log({mapped_y, y})
    xsum += x;
    ysum += mapped_y;
  }
  /* Find the mean */
  var xmean = xsum / ys.length;
  var ymean = ysum / ys.length;

  /* Calc the numerator */
  var numerator = 0;
  var denomenator = 0;
  for (let i = 0; i < xs.length; i++) {
    let x = xs[i];
    let y = ys[i];
    // console.log({x, y})
    /* all the (x minus xmean) times all the (y minus ymean) */
    numerator += (x - xmean) * (y - ymean);
    /* denom is just x minus mean squared */
    denomenator += (x - xmean) * (x - xmean);
  }
  let m = numerator / denomenator;
  let b = ymean - m * xmean;
  // console.log({ m, b });
  return { m, b, min_max_y };
}

function line(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function get_min_max(data) {
  // console.log(data)
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

const constrain = function(n, low, high) {

  return Math.max(Math.min(n, high), low);
};

const map = function(n, start1, stop1, start2, stop2, withinBounds) {

  var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
};