'use strict'

/* 
Note to self: svgs exported from illustrator have conflicting colour attributes - 
found inside the <style> tag of the svg file, belonging to the type 'st0' .etc. Any 
colour corruption upon rendering in the browser is likely down to this issue. Either manually
change the svg file or select 'style attributes' from CSS properties upon saving in illustrator
*/

$(document).ready(function() {

	var s = Snap("#main");

	var main = Snap.load("app.svg", function (loadedFragment) {
		s.append(loadedFragment);

		var back = s.rect(0,0,620,300).attr({fill: "#F9F9ED"});
		var shadow = s.rect(130,45,50,50).attr({fill: "#EFEFEF"});
		var lightGrayBox = s.rect(85,120,95,90).attr({fill: "#F7F5F5"});
		var textBox_1 = s.path("M304.7,124.5v32.7h-96.9v-32.7H304.7 M310.7,118.5H201.8v44.7h108.9V118.5L310.7,118.5z").attr({fill:"#EFEFEF"});
		var textBox_2 = s.path("M304.7,35.4v53h-96.9v-53H304.7 M310.7,29.4H201.8v65h108.9V29.4L310.7,29.4z").attr({fill:"#EFEFEF"});
		var textBoxes = s.group(textBox_1,textBox_2);
		var blueBox = s.rect(395,30,180,180).attr({fill: "#C7F2EB"});
		var toolbar = s.rect(180,230,350,35).attr({fill: "#009688"});
		var fab = s.circle(130,248,15,15).attr({fill: "#FF4081"});

		var shapesMoveIn = function () {

			fab.stop().animate({ transform: 't350,0'}, 850, mina.backin, function() {
				fab.stop().animate({ transform: 't350, -50'}, 400, mina.backin);
			});

			toolbar.stop().animate({ transform: 't0,-200'}, 850, mina.backin);

			textBoxes.stop().animate({ transform: 't0,50'}, 850, mina.backout);

			blueBox.stop().animate({ transform: 't-60,50'}, 600, mina.elastic, function () {
				blueBox.animate({ width: 180, height: 150}, 200);
			});

			lightGrayBox.stop().animate({ transform: 't95,0' }, 850, mina.backin, function () {
				lightGrayBox.stop().animate({ transform: 't95,-90', width: 350, height: 220 }, 250, mina.elastic);
			});

			shadow.stop().animate({ transform: 't40,0' }, 850, mina.backin, function () {
				shadow.stop().animate({ transform:'t40,0', width: 340, height: 215 }, 250, mina.elastic);
			});

		}

		var shapesMoveOut = function () {

			fab.stop().animate({ transform: 't0,-50'}, 850, mina.backin, function() {
				fab.stop().animate({ transform: 't0,0'}, 450, mina.backin);
			});

			toolbar.stop().animate({ transform: 't0,0'}, 850, mina.backout);

			blueBox.stop().animate({ transform: 't0,0'}, 850, mina.elastic, function () {
				textBoxes.stop().animate({ transform: 't0,0'}, 850, mina.backout);
			});

			shadow.stop().animate({ transform:'t40,0', width: 50, height: 50 }, 150, mina.backin, function () {
				shadow.stop().animate({ transform: 't-40,0'}, 850, mina.backin);
			});

			lightGrayBox.stop().animate({ transform: 't95,-90', width: 95, height: 90 }, 450, mina.backin, function () {
				lightGrayBox.stop().animate({ transform: 't0,-90' }, 450, mina.backin, function () {
					lightGrayBox.stop().animate({ transform: 't0,0'}, 450, mina.backin);
				});
			});

		}

		s.hover(shapesMoveIn, shapesMoveOut);

	});
});