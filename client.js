const net = require("net");

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: "165.227.47.243",
		port: "50541",
	});

	conn.on("connect", () => {
		console.log("successfully connected to Server");
		conn.write("Name: TAY");
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
