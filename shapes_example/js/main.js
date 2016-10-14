'use strict'

$(document).ready(function() {
	var s = Snap("#anim_example");
	var main = Snap.load("/first_example.svg", function (loadedFragment) {
		s.append(loadedFragment);

		var circle = Snap.select('.cls-2');	
		var triangle = Snap.select('.cls-3');	
		var square = Snap.select('.cls-4');	

		var sqr_bbox = square.getBBox();
		var tri_bbox = triangle.getBBox();

		function circle_jump () {
			circle.stop().animate({transform: 't0,-50'}, 500, mina.backout, function () {
				circle.animate({transform: 't0,0'}, 500, mina.backin);
			});
		}

		function sqr_rotate(){
			square.transform('');
			square.animate({ transform: "r180," + sqr_bbox.cx + ',' + sqr_bbox.cy}, 1500, mina.bounce);
		}

		function tri_scale () {
			triangle.transform('');
			triangle.stop().animate({transform: 's.5,.5 r180' + tri_bbox.cx + ',' + tri_bbox.cy}, 300, mina.easeout, function() {
				triangle.stop().animate({transform: 's1,1 r360' + tri_bbox.cx + ',' + tri_bbox.cy}, 700, mina.elastic);
			});
		}

		circle.mouseover(circle_jump);
		square.mouseover(sqr_rotate);
		triangle.mouseover(tri_scale);

	});
});
