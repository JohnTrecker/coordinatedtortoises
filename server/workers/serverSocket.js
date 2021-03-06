var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({host: 'localhost', port: 4000});


//Broadcasts all the bitcoin data to each client
wss.broadcast = function(data) {
  wss.clients.forEach(function(client) {
    client.send(data);
  });
};

wss.newConnection = function(cb) {
  wss.on('connection', cb);
};

module.exports = wss;