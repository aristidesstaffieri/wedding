'use strict';

/* Home Ctrl */
var $j = jQuery.noConflict();

angular.module('smsTest')
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

		var rsvp = Snap('#rsvp-svg');
		Snap.load('./img/rsvp-section-icon.svg', function(f) {
			rsvp.append(f.select('g'));
			rsvp.append(f.select('defs'));
		});

		// RSVP, make controller

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


	}]);