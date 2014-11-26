'use strict';

//This file basically just allows us to use REST endpoints to populate our quote models
//No need to worry about this for now
app.factory('Quotes', ['$resource', 
	function ($resource) {
		return {
			RoomList: $resource('api/quotersList',
				{},
				{ get: { method: 'GET', isArray : true }}),
			Room: $resource('api/quoter/:quoter', 
				{ quoter: '@quoter'}, 
				{ get: { method: 'GET', isArray : true }}),
			RoomPut: $resource('api/quoter/:quoter',
				{ quoter: '@quoter'},
				{ update: { method: 'PUT' }}),
			RoomPost: $resource('api/quoter/:quoter',
				{ quoter: '@quoter'},
				{ save: { method: 'POST' }})
		}
	}
]);
