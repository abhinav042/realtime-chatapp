const express = require("express");
const app = express();

const server = app
	.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"))
	.use(express.static("public"))
	.listen(process.env.PORT || 5000, () => console.log(`listening on PORT ${process.env.PORT}`));

const io = require("socket.io")(server);
io.on("connection", (socket) => {
	console.log("Client connected");
	socket.on("disconnect", () => console.log("client disconnected"));
	socket.on("join", (data) => console.log(data));
	socket.on("messages", (data) => {
		socket.emit("thread", data);
		socket.broadcast.emit("thread", data);
	});
});

/*

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

*/

