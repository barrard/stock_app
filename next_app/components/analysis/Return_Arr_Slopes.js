export const Return_Arr_Slopes = (price_data, LR_avg) => {
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
      // console.log({ j });
      // console.log(price_data[j]);
      xs.push(j);
      ys_lows.push(price_data[j].low);
    }
    // console.log({ x: xs, y: ys_lows });
    let { m, b } = linearRegression({ x: xs, y: ys_lows });
    arr_slopes.push({ m, b });
  }
  console.log(arr_slopes);
  return arr_slopes
};

function linearRegression(data) {
  /* get the high and low */
  // let min_max_x = get_min_max(data.x)
  // let min_x = min_max_x.min;
  // let max_x = min_max_x.max
  // let min_max_y= get_min_max(data.y)
  // let min_y  = min_max_y.min
  // let max_y= min_max_y.max
  // console.log({min_x, max_x})
  // console.log({min_y, max_y})
  // console.log(data)
  var xsum = 0;
  var ysum = 0;
  /* Sum  each value */
  for (var i = 0; i < data.x.length; i++) {
    xsum += data.x[i];
    ysum += data.y[i];
  }
  /* Find the mean */
  var xmean = xsum / data.x.length;
  var ymean = ysum / data.x.length;

  /* Calc the numerator */
  var numerator = 0;
  var denomenator = 0;
  for (let i = 0; i < data.x.length; i++) {
    let x = data.x[i];
    let y = data.y[i];
    // console.log({x, y})
    /* all the (x minus xmean) times all the (y minus ymean) */
    numerator += (x - xmean) * (y - ymean);
    /* denom is just x minus mean squared */
    denomenator += (x - xmean) * (x - xmean);
  }
  let m = numerator / denomenator;
  let b = ymean - m * xmean;
  // console.log({ m, b });
  return { m, b };
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