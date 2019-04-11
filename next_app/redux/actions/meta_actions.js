export function set_api_server(api_server) {
  return {
    type: "SET_API_SERVER",
    api_server
  };
}
export function set_csrf(csrf) {
  return {
    type: "SET_CSRF",
    csrf
  };
}
