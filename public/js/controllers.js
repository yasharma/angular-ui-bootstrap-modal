(function() {
	'use strict';

	angular.module('myApp.controllers', [])
	.controller('PostController', ['$scope', '$http',function($scope, $http){
		console.log('PostController');
	}]);
}());