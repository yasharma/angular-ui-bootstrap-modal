(function() {
	'use strict';

	angular.module('myApp', ['ngRoute', 'myApp.controllers'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'views/posts.html', 
			controller: 'PostController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
}());	