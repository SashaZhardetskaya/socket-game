var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendFile('/Users/oleksandrazhardetska/Desktop/socket-game/public/index.html');
});

io.on('connection', function (socket) {
  console.log('conn----');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});