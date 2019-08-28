const io = require('socket.io-client');

logger.log('PY SOCKS')


module.exports = ()=>{
  const socket = io('ws://localhost:3004')



socket.on('connect', ()=>{
  logger.log('gottt it')
  // socket.emit('my response')


})
socket.on('com_data_conf', ()=>{
  logger.log('com_data_conf')
})


socket.on('conn_test', ()=>{
  logger.log('got a response')
})


return socket
}