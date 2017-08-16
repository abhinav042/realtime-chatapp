const socket = io();

socket.on("connect", (data) => socket.emit("join", "the client 🔥"));

socket.on("thread", (data) => {
	$("#thread").append(`<li>${data}</li>`);
});

$("form").submit(function () {
	const message = $("#message").val();
	socket.emit("messages", message);
	this.reset();
	return false;
})