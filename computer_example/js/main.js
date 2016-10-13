'use strict';

$(document).ready(function() {

	var s = Snap("#main");

	var main = Snap.load("snap_tut.svg", function (loadedFragment) {
		s.append(loadedFragment);
		var left_disc = Snap.select('#left_disc');	
		var right_disc = Snap.select('#right_disc');	

		var screen_mask = s.path("M385.4,78.8H277.6c-4.3,0-7.7,3.5-7.7,7.7V149c0,4.3,3.5,7.7,7.7,7.7h107.8c4.3,0,7.7-3.5,7.7-7.7V86.5 C393.1,82.2,389.7,78.8,385.4,78.8z");
		screen_mask.attr({'fill': '#fff'});

		var maskGroup = s.group(screen_mask);
		maskGroup.attr({mask: screen_mask});

		function gen_rect() {
			var rand_len = get_rand(20,90);
			var rect = s.rect(280, 90, rand_len, 5).attr({'fill': '#43BD4C'});
			maskGroup.add(rect);
			animate_rect(rect);
		}

		function animate_rect(rect) {
			rect.attr({ transform: 't0 -30'});
			var timing = 5000;
			rect.stop().animate({ transform: 't0' + ',' + 90 }, timing, mina.linear, 
				function () {rect.remove();});
		}

		function get_rand(min, max) {return Math.random() * (max - min) + min;}

		function key_press() {
			var ids = [];
			$("#keys").find("rect").each(function(){ids.push('#'+this.id);});
			var rand_num_keys = [];
			var selector;
			for (var i = 0; i < 6; i++) {
				rand_num_keys[i] = Math.round(get_rand(0,22));
				for (var j = 0; j < rand_num_keys.length; j++) {
					selector = Snap.select(ids[rand_num_keys[j]]);
					selector.animate({fill: '#A59D7C'}, 250, mina.ease), setTimeout(function() {
						for (var k = 0; k < rand_num_keys.length; k++) {
							selector = Snap.select(ids[rand_num_keys[k]]);
							selector.animate({fill: '#D6CEAA'}, 250, mina.ease);
						}
					}, 500);
				}
			}
		}

		var circs_ids = [];
		$("#server").find("circle").each(function(){circs_ids.push('#'+this.id);});
		
		var circle_group = [];
		for (var i = 0; i < circs_ids.length; i++) {
			circle_group[i] = Snap.select(circs_ids[i]);
			circle_group[i].state = false;
		}

		function change_colour() {
			var rand_circ = Math.round(get_rand(0, 3));
			if (circle_group[rand_circ].state == false) {
				circle_group[rand_circ].animate({fill: '#43BD4C'}, 250, mina.ease);
				circle_group[rand_circ].state = true;
			} else {
				circle_group[rand_circ].animate({fill: '#E73527'}, 250, mina.ease);
				circle_group[rand_circ].state = false;
			}
		}

		function left_disc_rot(){
			left_disc.stop().animate(
				{ transform: 'r360,75.7,127.9'}, 4000, 
				function(){ 
					left_disc.attr({ transform: 'rotate(0 75.7 127.9)'});
					left_disc_rot(); 
				});
		}

		function right_disc_rot(){
			right_disc.stop().animate(
				{ transform: 'r360,149.1,127.3'}, 8000, 
				function(){ 
					right_disc.attr({ transform: 'rotate(0 149.1 127.3)'}); 
					right_disc_rot(); 
				});
		}

		$("#keyboard, #keys").click(function(){setInterval(function() {key_press();}, 500);});
		$("#screen").click(function(){setInterval(function() {gen_rect();}, 500);});
		$("#server").click(function(){setInterval(function() {change_colour();}, 500);});

		$("#recorder, #right_disc, #left_disc").click(function(){
			left_disc_rot();
			right_disc_rot();	
		});

	});
	
});

