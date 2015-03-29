var Http = require('http');

// npm install ws
var Ws = require('ws');

// npm install swarm
var Swarm = require('swarm');

require('./models/action.js'); // see the model definition above
require('./models/action-list.js'); // see the model definition above

// use file storage
var fileStorage = new Swarm.FileStorage('storage');

// create the server-side Swarm Host
var swarmHost = new Swarm.Host('swarm~nodejs', 0, fileStorage);

// create and start the HTTP server
var httpServer = Http.createServer();
httpServer.listen(8000, function (err) {
	if (err) {
		console.warn('Can\'t start server. Error: ', err, err.stack);
		return;
	}
	console.log('Swarm server started at port 8000');
});

// start WebSocket server
var wsServer = new Ws.Server({ server: httpServer });

// accept incoming WebSockets connections
wsServer.on('connection', function (ws) {
	console.log('new incoming WebSocket connection');

	ws.on('message', function incoming(message) {
		console.log('received: %s', message);
	});

	var stream = new Swarm.EinarosWSStream(ws);
	stream.on('data', function(msg) {
		console.log('stream data: ' + msg);
	});
	swarmHost.accept(stream);
});