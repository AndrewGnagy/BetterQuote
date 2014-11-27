var mysql = require('mysql');

var RoomModel = require('../models/quotersModel');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passwordhere",
  database: "quotedb"
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

exports.getQuoter = function(req, res) {
	QuoterModel.QuoterByName(req.params.quotername, function(data) {
        	res.send(data);
	});
}

exports.putQuoter = function(req, res) {
	QuoterModel.UpdateQuoterByName(req.params.quotername, req.body, function(data) {
        	res.send(data);
	});
}

exports.getQuotersList = function(req, res) {
	/*QuoterModel.QuotersList(function(data, req) {
        	res.send(data);
    	});*/
	//Test Data :)
	res.send([
		{name: "Danny", quotes: ["You so smart!", "The Emperor is here"]},
		{name: "Mark Twain", quotes: ["Blah blah"]},
		{name: "Freddy Mercury", quotes: ["Blah blah blah"]}
	]);	
}
