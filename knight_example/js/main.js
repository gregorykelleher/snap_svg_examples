'use strict';

/* 
Note to self: svgs exported from illustrator have conflicting colour attributes - 
found inside the <style> tag of the svg file, belonging to the type 'st0' .etc. Any 
colour corruption upon rendering in the browser is likely down to this issue. Either manually
change the svg file or select 'style attributes' from CSS properties upon saving in illustrator
*/

$(document).ready(function() {

	var s = Snap("#knight");

	var main = Snap.load("/knight.svg", function (loadedFragment) {
		s.append(loadedFragment);

		var pivot = [
		[254, 216]	// arm
		];

		var arm = Snap.select('#arm');
		var hand = Snap.select('#hand');
		var sword = Snap.select('#sword');
		var timer;

		function raise() {
			clearTimeout(timer);

			arm.stop().animate({ 
				transform: "r" + [0, pivot[0]]
			}, 750, mina.elastic);

			hand.stop().animate({
				transform: "r" + [0, pivot[0]]
			}, 750, mina.elastic);

			sword.stop().animate({
				transform: "r" + [0, pivot[0]]
			}, 800, mina.elastic);

			timer = setTimeout(200);

		}

		function lower() {
			clearTimeout(timer);

			arm.stop().animate({ 
				transform: "r" + [-40, pivot[0]]
			}, 700, mina.elastic);

			hand.stop().animate({
				transform: "r" + [-40, pivot[0]]
			}, 700, mina.elastic);

			sword.stop().animate({
				transform: "r" + [-40, pivot[0]]
			}, 800, mina.elastic);

		}

		timer = setTimeout(raise, 1000);

		s.hover(lower, function () {
			timer = setTimeout(raise, 250);
		});


	});
});





