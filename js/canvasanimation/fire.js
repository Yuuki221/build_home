var cavs = require('./setup_canvas.js');

var canvas = cavs.canvas, 
	ctx = cavs.context,
	cvsW = cavs.width,
	cvsH = cavs.height;

var methods = Fire.prototype;

function Fire(){
	this.fireSize = {
		dim0: 0,
		dim1: 50,
		dim2: 100,
		dim3: 150
	};
}

methods.drawFire = function(level){
	if(level===0 || level>150) return;
	var img = new Image();
	ctx.clearRect(600, 300, 150, 150);
	img.onload = function(){
		ctx.drawImage(img, 600, 300, level, level);
	};
	img.src = './icons/svg/flame.svg';
};
module.exports = Fire;