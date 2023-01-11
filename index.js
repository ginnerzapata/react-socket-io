const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", () => {
  /* … */
});
server.listen(8080, () => {
  console.log("Server corriendo en puerto: 8080");
});
