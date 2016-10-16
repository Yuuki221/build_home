var cavs = require('./setup_canvas.js');

var canvas = cavs.canvas, 
	ctx = cavs.context,
	cvsW = cavs.width,
	cvsH = cavs.height;

var methods = House.prototype;

function House(){}

methods.drawHouse = function(type){
	if(type===0 || type>500) return;
	// clear cavas  
	ctx.clearRect(300, 200, 500, 500);
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img, 300, 200, type, type);
	};
	img.src = './icons/svg/home.svg';
};

module.exports = House;

