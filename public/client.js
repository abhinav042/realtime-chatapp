const socket = io();

socket.on("connect", (data) => socket.emit("join", "the client 🔥"));