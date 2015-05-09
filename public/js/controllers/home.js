'use strict';

/* Home Ctrl */
var $j = jQuery.noConflict();

angular.module('smsTest')
.controller('IndexCtrl', ['$scope', 'anchorSmoothScroll', '$location',
	function ($scope, anchorSmoothScroll, $location) {
		$scope.scrollTo = function (eID){
		      $location.hash(eID);
		      anchorSmoothScroll.scrollTo(eID);
		  };
}]);