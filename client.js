const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: IP,
		port: PORT,
	});

	conn.on("connect", () => {
		console.log("successfully connected to Server");
		conn.write("Name: DOG");
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	// console log incoming data
	conn.on("data", (messageFromServer) => {
		console.log("Server says: ", messageFromServer);
	});

	return conn;
};

module.exports = { connect };
