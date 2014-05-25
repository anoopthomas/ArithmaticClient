// Websocket event handler is invoked whenever matching websocket events are received from a client.
// Broadcast a received message from a client message to all other clients
function receiveMessage(data, socket) {
  socket.broadcast.emit('message', data);
}