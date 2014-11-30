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

    var query = "Select first_name, last_name FROM quoters";

    returnResults(query, undefined, function(results) {
	func(results);
    });
};

QuotesByQuoterName = function(last_name, func) {
    console.log('Looking for QuoteList');

    var query = "SELECT * FROM quotes LEFT JOIN quoters ON quotes.quoter_id = quoters.id LEFT JOIN quotes_tags on quotes.id = quotes_tags.quote_id LEFT JOIN tags on quotes_tags.tag_id = tags.id WHERE quoters.last_name = ?";
    var inserts = [last_name];
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
exports.QuotesByQuoterName = QuotesByQuoterName;
exports.UpdateQuoterByName = UpdateQuoterByName;
