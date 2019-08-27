const cookie = require("cookie");
const cookie_parser = require("cookie-parser");
const Quote = require("../controllers/Quote_Controller.js");
require("dotenv");
var io;
module.exports = {
  get_io() {
    return io;
  },

  emit_to_room(room, event, data) {
    // logger.log(`EMIT TO ROOOOMMMM ${room}`.bgYellow)
    io.sockets.in(room).emit(event, data);
    //token_purchase_confirm
  },
  init(_io, session_store) {
    /* Assign io socket */
    io = _io;
    /* This emits the data to commodity room */
    /* wait a second to start this with timeOut */
    setTimeout(()=> {
      logger.log('STARTING COMMODITY QUOTES'.yellow.bgGreen)
      setInterval(() => {
        // logger.log('GETTING COMMODITY QUOTES'.yellow.bgGreen)

        /* AND collects quote data continuously */
        check_commodity_room(this.get_io());
      }, 3000);
    }, 6000)

    io.use(async function(socket, next) {
      logger.log(
        `^^^^^^^^^        SOCKET MIDDLEWARE    ^^^^^^^^^^^^^^^^^^^^^`.bgYellow
      );
      try {
        let user_session = await get_session(socket, session_store);
        //set socket.id in user model
        // if(!user_session)return null
        if (user_session && user_session.passport && user_session.passport.user)
          logger.log(
            "TODO User.set_user_socket_id(user_session.passport.user, socket.id);"
              .magenta
          );
        // logger.log('socket.handshake.headers.referer'.bgYellow)
        let referer = socket.handshake.headers.referer;
        logger.log(referer);
        // if (referer.includes("/campaign")) {
        //   let split_referer = referer.split("/");
        //   let campaign = split_referer[split_referer.length - 1];
        //   // logger.log(`Join the room /campaign/${campaign}`)
        //   socket.join(`/campaign/${campaign}`);
        //   // logger.log(`room /campaign/${campaign}`.blue)
        // }
        if (referer && referer.includes("/commodities")) {
          logger.log(`Join the room /commodities`.blue);
          socket.join(`/commodities`);
          logger.log(`room /marketplace`.blue)
        }
      } catch (err) {
        logger.log("err".red);
        logger.log("user not logged in for socket.id".bgMagenta);
        logger.log(err);
      }
      next();
    });

    io.on("connect", socket => {
      // TODO set up middleware and organize the sockets

      // tell client they have connected
      socket.emit("connected_to_server", "Server Ack");

      socket.on("disconnect", reason => {
        logger.log(
          `^^^^^^^^^        SOCKET disconnect    ^^^^^^^^^^^^^^^^^^^^^`.bgBlue
        );
        logger.log("Reason".bgMagenta);
        logger.log(reason);
      });
    });
  }
};
var commodity_watcher_timer = false;
/* checks to see if anyone wants data in this room */
async function check_commodity_room(io) {
  let commodities_quotes = await Quote.get_commodities_quote();
  if(!commodities_quotes) return logger.log('No new  Data to report')
  let commodity_room = io.sockets.in("/commodities");

  Quote.parse_commodity_quote(commodities_quotes, io);

  /* this is checking for who is in commodities room */
  io.in("/commodities").clients((err, clients) => {
    /* if we have clients, we'll send data */

    if (clients.length) {
      commodity_room.emit("commodity_data", commodities_quotes);
    }
  });
}

async function get_session(socket, session_store) {
  let session_id = find_session_id(socket);
  logger.log({session_id})
  if(!session_id)return null
  let user_session = await session_store.get(session_id);
  return user_session;
}
function find_session_id(socket) {
  // logger.log({socket})
  // logger.log(socket.handshake)
  logger.log(socket.handshake.headers)
  if(!socket.handshake.headers.cookie) return null
  let cks = cookie.parse(socket.handshake.headers.cookie);
  logger.log(cks)
  let session_id = cookie_parser.signedCookie(
    cks["Della_Session"],
    "process.env.SESSION_SECRET"
  );
  return session_id;
}
