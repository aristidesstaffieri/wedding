'use strict';

angular.module('smsTest', [
	'ngRoute',
	'firebase'
])
.constant('FIREBASE_URL', 'https://moandstides.firebaseio.com/')
.config(['$routeProvider', '$locationProvider', '$logProvider', 
	function ($routeProvider, $locationProvider, $logProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.ejs'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
	$logProvider.debugEnabled(true);

}]);