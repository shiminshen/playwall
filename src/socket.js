import { Server } from "socket.io";

const setUpSocketServer = (server) => {
  const io = new Server(server);
  io.on('connection', (socket) => {
    console.log('a user connected');
  })

  return io
}

export default setUpSocketServer
