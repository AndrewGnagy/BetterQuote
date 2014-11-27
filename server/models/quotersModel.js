var escapeSpecialChars = function(text) {
    return text.replace(/\\n/g, "\\n")
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
};

QuotersList = function(func) {
    console.log('Looking for QuotersList');

    var query = "Select name FROM quoters";

    returnResults(query, undefined, function(results) {
	func(results);
    });
};

QuoterByName = function(id, func) {
    console.log('Looking for QuoteList');

    var query = "Select * FROM quotes WHERE name = ?";
    var inserts = [id];
    returnResults(query, inserts, function(results) {
	func(results);
    });
};

UpdateQuoterByName = function(id, data, func) {
    console.log(data);

    var query = ["UPDATE quotes SET name = ?,",
		"text = ?,",
		"isStart = ?",
		"WHERE name = ?"].join(" ");
    var inserts = [data.name, data.text, data.isStart, id];
    returnResults(query, inserts, function(results) {
	func(results);
    });
};

exports.QuotersList = QuotersList;
exports.QuoterByName = QuoterByName;
exports.UpdateQuoterByName = UpdateQuoterByName;
