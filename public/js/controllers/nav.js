'use strict';

/* Home Ctrl */
var $j = jQuery.noConflict();

angular.module('smsTest')
.controller('NavCtrl', ['$scope',
	function ($scope) {

	$j(document).ready(function() {
	  var menuToggle = $j('#js-centered-navigation-mobile-menu').unbind();
	  $j('#js-centered-navigation-menu').removeClass("show");
	  
	  menuToggle.on('click', function(e) {
	    e.preventDefault();
	    $j('#js-centered-navigation-menu').slideToggle(function(){
	      if($j('#js-centered-navigation-menu').is(':hidden')) {
	        $j('#js-centered-navigation-menu').removeAttr('style');
	      }
	    });
	  });
	});
}]);