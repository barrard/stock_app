colors = require("colors");
logger = require("tracer").colorConsole({
  format:
    "{{timestamp.green}} <{{title.yellow}}> {{message.cyan}} (in {{file.red}}:{{line}})",
  dateformat: "HH:MM:ss.L"
});

const url = 'https://ws-api.iextrading.com/1.0/tops'
const socket = require('socket.io-client')(url)

socket.on('connect', () => {
  // socket.emit('subscribe', 'firehose')
  socket.emit('subscribe', 'fb')
  // socket.emit('subscribe', 'snap')

})

socket.on('message', message =>{
  message = JSON.parse(message)
  let {symbol,
    bidPrice,
    bidSize,
    askPrice,
    askSize,
    lastSalePrice,
    lastSaleSize,
    lastSaleTime,
    volume}= message
    logger.log({symbol,
      bidPrice,
      bidSize,
      askPrice,
      askSize,
      lastSalePrice,
      lastSaleSize,
      lastSaleTime,
      volume})

})