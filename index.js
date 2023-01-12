//servidor express
const express = require("express");
const app = express();

//servidor sockets
const server = require("http").createServer(app);

//configuracion del socket server
const io = require("socket.io")(server);

//desplegar el directorio publico
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  socket.emit("mensaje-bienvenida", {
    message: "Bienvenido al cinco letras oh oh",
    fecha: new Date(),
  });
  socket.on("mensaje-to-server", (data) => {
    console.log(data);
    io.emit("mensaje-from-server", data);
  });
});

server.listen(8080, () => {
  console.log("Server corriendo en puerto: 8080");
});
