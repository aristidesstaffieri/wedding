'use strict';

/* RSVP Ctrl */
var $j = jQuery.noConflict();

angular.module('stidesAndMo')
.controller('RsvpCtrl', ['$scope', '$location', 'FIREBASE_URL', '$timeout',
	function ($scope,  $location, FIREBASE_URL, $timeout) {
		var ref = new Firebase(FIREBASE_URL);
		$scope.name = '';
		$scope.guests = '';
		$scope.song = '';
		$scope.artist = '';
		$scope.password = '';
		$scope.errorSuccessMessage = '';
		$scope.error = false;
		$scope.success = false;
		// Snap stuff

		var rsvp = Snap('#rsvp-svg');
		Snap.load('./img/rsvp-section-icon.svg', function(f) {
			rsvp.append(f.select('g'));
			rsvp.append(f.select('defs'));
		});

		// Float labels

		$j(function(){
			var onClass = "on";
			var showClass = "show";
			
			$j("input").bind("checkval",function(){
				var label = $j(this).prev("label");
				if(this.value !== ""){
					label.addClass(showClass);
				} else {
					label.removeClass(showClass);
				}
			}).on("keyup",function(){
				$j(this).trigger("checkval");
			}).on("focus",function(){
				$j(this).prev("label").addClass(onClass);
			}).on("blur",function(){
				$j(this).prev("label").removeClass(onClass);
			}).trigger("checkval");
		});

		// Contact form
		$scope.sendRsvp = function() {
			if ($scope.password !== 'summer love') {				
				$scope.success = false;
				$timeout(function() {
					$scope.errorSuccessMessage = 'Wrong password, please check your invitation.';
					$scope.error = true;
				}, 1000);
				return;
			}
			if ($scope.name === undefined || $scope.name === '') {
				$scope.success = false;
				$timeout(function() {
					$scope.errorSuccessMessage = 'A name is required.';
					$scope.error = true;
				}, 1000);
				return;
			}
			ref.child('rsvps').push({
				name: $scope.name,
				guests: $scope.guests,
				song: $scope.song,
				artist: $scope.artist,
				password: $scope.password
			});
			$scope.name = '';
			$scope.guests = '';
			$scope.song = '';
			$scope.artist = '';
			$scope.password = '';
			$scope.error = false;
			$timeout(function() {
				$scope.errorSuccessMessage = 'Your RSVP has been sent!';
				$scope.success = true;
			}, 1000);
		};


	}]);