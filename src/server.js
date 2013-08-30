var express = require("express"),
app = express(),
http = require('http'),
server = http.createServer(app),
tuio = require("tuio");

app.use(express["static"](__dirname + "/../"));
server.listen(5000);

tuio.init({
	oscPort: 3333,
	oscHost: "localhost",
	socketPort: server
});