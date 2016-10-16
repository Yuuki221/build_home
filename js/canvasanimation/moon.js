/*
	Moon class 
*/

var cavs = require('./setup_canvas.js');

var canvas = cavs.canvas, 
	ctx = cavs.context,
	cvsW = cavs.width,
	cvsH = cavs.height;

var methods = Moon.prototype;

function Moon(){
	this.moons = {
		'full' : './icons/svg/full-moon.svg',
		'phs1' : './icons/svg/moon-phases-1.svg',
		'phs2' : './icons/svg/moon-phases-2.svg',
		'phs3' : './icons/svg/moon-phases.svg'
	};
}

methods.drawMoon = function(name){
	var level = 0;
	// decide the moon level 
	if(name===1){
		level = 'full';
	}else if(name===2){
		level = 'phs1';
	}else if(name===3){
		level = 'phs2';
	}else if(name===4){
		level = 'phs3';
	}else{
		return;
	}
	// dealing with image loading
	ctx.clearRect(0, 0, 200, 200); 
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img, 0, 0, 100, 100);
	};
	img.src = this.moons[level];
};

module.exports = Moon;

