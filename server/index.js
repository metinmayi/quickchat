const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("sendMessage", sendMessage);
  socket.on("joinRoom", joinRoom);
});

server.listen(4000, () => {
  console.log("listening on *:3000");
});

function sendMessage(data) {
  this.broadcast.to(data.chatRoom).emit("broadcastMessage", {
    message: data.message,
    username: data.username,
  });
}

function joinRoom(data) {
  const userRooms = io.sockets.adapter.sids.get(this.id);

  for (const room of userRooms) {
    this.leave(room);
  }

  this.join(data.chatRoom);
}
