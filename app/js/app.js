'use strict';

var app = angular.module('betterQuote', ['ngResource']);

app.config(function($routeProvider) {

$routeProvider.
    when('/', {
        controller: 'quotersListController',
        templateUrl: 'views/quotersList.html'  
    }).
    when('/quoter/:quoter', {
        controller: 'quoterPageController',
        templateUrl: 'views/quoterPage.html'
    }).
    otherwise({
        redirectTo: '/'
    });
});
