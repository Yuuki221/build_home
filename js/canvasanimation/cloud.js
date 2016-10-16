var cavs = require('./setup_canvas.js');

var canvas = cavs.canvas, 
	ctx = cavs.context,
	cvsW = cavs.width,
	cvsH = cavs.height;

var methods = Cloud.prototype;

function Cloud(){}

methods.drawCloud = function(level){
	if(level===0 || level>300) return;
	ctx.clearRect(400, 0, 300, 300);
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img, 300, 0, level, level);
	};
	img.src = './icons/svg/cloud.svg';
};

module.exports = Cloud;
