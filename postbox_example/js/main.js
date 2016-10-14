'use strict';

$(document).ready(function() {

	var s = Snap("#main");

	var main = Snap.load("update_post.svg", function (loadedFragment) {
		s.append(loadedFragment);

		var flag = Snap.select('#flag');

		var path_mask = s.path("M-20.6,242.5c5.6-1.5,11.8-3.3,18.4-5.3c21.6-6.8,169.4-53.7,177.7-136.4c0.2-2,3.3-38.3-21.1-59.1c-20.9-17.7-57.5-20-82.7,0c-25.5,20.2-24.1,53.9-23.6,65c1.3,32.6,19.7,54.5,26.4,62.2c27.9,32.1,65.9,38.6,81.9,41.4c74.9,12.8,139.8-33.5,166.2-55.9");
		var path_mask_len = path_mask.getTotalLength();

		path_mask.attr({
			fill: 'none',
			strokeWidth: '2',
			stroke: '#F2F3E7',
			strokeMiterLimit: "10",
			strokeLinecap: 'round',
			strokeDasharray: path_mask_len,
			strokeDashoffset: path_mask_len
		}).animate({"stroke-dashoffset": 10}, 4000, mina.easeinout);

		var dashed_path = s.path("M-20.6,242.5c5.6-1.5,11.8-3.3,18.4-5.3c21.6-6.8,169.4-53.7,177.7-136.4c0.2-2,3.3-38.3-21.1-59.1c-20.9-17.7-57.5-20-82.7,0c-25.5,20.2-24.1,53.9-23.6,65c1.3,32.6,19.7,54.5,26.4,62.2c27.9,32.1,65.9,38.6,81.9,41.4c74.9,12.8,139.8-33.5,166.2-55.9");
		var dashed_path_len = dashed_path.getTotalLength();

		dashed_path.attr({
			fill: 'none',
			strokeWidth: '2',
			stroke: '#F2F3E7',
			strokeMiterLimit: "10",
			strokeLinecap: 'round',
			strokeDasharray: '12',
			strokeDashoffset: dashed_path_len,
			mask: path_mask
		}).animate({"stroke-dashoffset": 10}, 4000, mina.easeinout);

		function flag_move(){
			flag.stop().animate(
				{ transform: 'r-90,397,123'}, 750, mina.bounce);
		}

		$("#postbox").mouseover(function(){
			flag_move();
		});
		
	});
});




