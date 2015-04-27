'use strict';

var restify = require('restify');
var mysql = require('mysql');
var config = require('./config/config.js');

// load controllers
var appPath = __dirname + "/src/server/controllers";
require("fs").readdirSync(appPath).forEach(function(file) {
	require("./src/server/controllers/" + file);
});
var controllers = require('./src/server/controllers.js');

var db = mysql.createPool(config.database);

function respond(req, res, next) {
	// get controller
	var c = controllers(req.params.item);
	if (!c)
		return next(new restify.NotFoundError('The specified controller was not found'));

	// get action function
	var a = c[req.params.action];
	if (!c.hasOwnProperty(req.params.action) || typeof a !== 'function')
		return next(new restify.NotFoundError('The specified action was not found'));

	// init json string
	var json = '';

	req.setEncoding('utf8');

	req.on('data', function(chunk) { json += chunk; });

	req.on('end', function() {
		try{
			var sql = a(JSON.parse(json));
			console.log(sql);
		}
		catch(ex){
			return next(ex);
		}

		// FIXME -- error validation here

		db.query(sql, function(err, rows, fields) {
			if (err) {
				console.log(err.message);
				return next(new restify.InternalError(err.message));
			} // if

			console.log(rows);
			res.send(rows);
			next();
		});

	});
} // respond( )

var server = restify.createServer();
server.use(restify.CORS());
server.get('/:item/:action', respond);
server.post('/:item/:action', respond);

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});

// equity-item/by-list
// equity-item/new
// equity-item/patch