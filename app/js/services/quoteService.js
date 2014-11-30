'use strict';

//This file basically just allows us to use REST endpoints to populate our quote models
//No need to worry about this for now
app.factory('Quotes', ['$resource', 
	function ($resource) {
		return {
			QuotersList: $resource('api/quoters',
				{},
				{ get: { method: 'GET', isArray : true }}),
			Quotes: $resource('api/quoter/:quoter', 
				{ quoter: '@quoter'}, 
				{ get: { method: 'GET', isArray : true }}),
			QuotesPut: $resource('api/quoter/:quoter',
				{ quoter: '@quoter'},
				{ update: { method: 'PUT' }}),
			QuotesPost: $resource('api/quoter/:quoter',
				{ quoter: '@quoter'},
				{ save: { method: 'POST' }})
		}
	}
]);
