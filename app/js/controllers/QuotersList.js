app.controller('quotersListController', function ($scope) { //, QuotersModel) {
	//Will eventually retrieve quotes from the service.  Using dummy data for now.
	/*Quotes.QuotersList.get(function(response){
		$scope.quoters = response;
	});*/

	//Our model
	$scope.quoters = [
		{'name': 'Danny', 'quotes': ['You\'re so smart!', 'The Emperor is here!']},
		{'name': 'Mark Twain', 'quotes': ['blah blah']},
		{'name': 'J. Robert Oppenheimer', 'quotes': ['I am death, destroyer of worlds.']},
	];

});
