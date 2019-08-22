
export async function fetch_commodity_chart_data(
  symbol, api_server, dispatch
) {
  console.log('fetch_commodity_chart_data')

  let commodity_data = await fetch(
    `${api_server}/commodities/get_all_data/${symbol}/`
  );
  // console.log(commodity_data)
  let commodity_chart_data = await commodity_data.json();
  return dispatch({
    type: "SET_COMMODITY_DATA",
    chart_data:{[symbol]:{chart_data:commodity_chart_data}}//chart data needs to be named
  });
}



// export function show_filter_list(show_filter_list) {
//   return {
//     type: "TOGGLE_FILTER_LIST",
//     show_filter_list
//   };
// }



// export function is_loading(is_loading) {
//   return {
//     type: "IS_LOADING",
//     is_loading
//   };
// }
