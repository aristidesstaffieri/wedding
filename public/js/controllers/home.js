'use strict';

/* Home Ctrl */
var $j = jQuery.noConflict();

angular.module('stidesAndMo')
.controller('IndexCtrl', ['$scope', '$location',
	function ($scope,  $location) {

		(function ($j) {
			$j.mark = {
				jump: function (options) {
					var defaults = {
						selector: 'a.scroll-on-page-link'
					};
					if (typeof options == 'string') {
						defaults.selector = options;
					}

					options = $j.extend(defaults, options);
					return $j(options.selector).click(function (e) {
						var jumpobj = $j(this);
						var target = jumpobj.attr('href');
						var thespeed = 1000;
						var offset = $j(target).offset().top;
						$j('html,body').animate({
							scrollTop: offset
						}, thespeed, 'swing');
						e.preventDefault();
					});
				}
			};
		})($j);


		$j(function(){  
			$j.mark.jump();
		});

		// Snap stuff

		var s = Snap('#wedding-svg');
		Snap.load('./img/wedding-section-icon.svg', function(f) {
			s.append(f.select('g'));
			s.append(f.select('defs'));
		});

		var accomodations = Snap('#accomodations-svg');
		Snap.load('./img/accomodations-section-icon.svg', function(f) {
			accomodations.append(f.select('g'));
			accomodations.append(f.select('defs'));
		});

		var registry = Snap('#registry-svg');
		Snap.load('./img/registry-section-icon.svg', function(f) {
			registry.append(f.select('g'));
			registry.append(f.select('defs'));
		});


	}]);