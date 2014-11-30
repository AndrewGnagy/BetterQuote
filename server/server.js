var express = require('express');

var quoterModule = require('./modules/quoters');

start = function(PORT) {
	var app = express();

	app.use(express.logger('dev'));
	app.use(express.bodyParser());

	//Default
	app.use(express.static('/var/www/html/quote/app'));
	// Quote stuff
	app.get('/api/quoters', quoterModule.getQuotersList);
	app.get('/api/quoter/:quoter_name', quoterModule.getQuotes);
	app.put('/api/quoter/:quoter', quoterModule.putQuoter);

	console.log(PORT);
	app.listen(PORT);
	console.log(__dirname + '/../app');

};

start(8080);
