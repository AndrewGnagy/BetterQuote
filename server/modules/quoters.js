var mysql = require('mysql');

var QuoterModel = require('../models/quotersModel');

var connection;
/*fs = require('fs')
fs.readFile('/var/www/html/quote/server/password.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);


});*/
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Int3rmission1",
    database: "Quote"
  });

returnResults = function(query, inserts, func) {
  if(inserts) {
	query = mysql.format(query, inserts);
  }
  console.log(query);
  connection.query(query, function(err, results) {
        if (err) {
            console.log("Error running query!");
            func([]);
            return;
        }
        if (results.length < 1) {
            func([]);
            return;
        }
	console.log(results);
        func(results);
    });
}

connection.connect();
//reconnects to server every 24 hours
setInterval(function() {connect();}, 86400000);

exports.getQuotes = function(req, res) {
	console.log(req.params);
	QuoterModel.QuotesByQuoterName(req.params.quoter_name, function(data) {
        	res.send(data);
	});
}

exports.putQuoter = function(req, res) {
	QuoterModel.UpdateQuoterByName(req.params.quotername, req.body, function(data) {
        	res.send(data);
	});
}

exports.getQuotersList = function(req, res) {
	QuoterModel.QuotersList(function(data, req) {
        	res.send(data);
    	});
	//Test Data :)
	/*res.send([
		{name: "Danny", quotes: ["You so smart!", "The Emperor is here"]},
		{name: "Mark Twain", quotes: ["Blah blah"]},
		{name: "Freddy Mercury", quotes: ["Blah blah blah"]}
	]);	*/
}
