var cavs = require('./setup_canvas.js');

var canvas = cavs.canvas, 
	ctx = cavs.context,
	cvsW = cavs.width,
	cvsH = cavs.height;

var methods = Star.prototype;

function Star(){
	this.stars = this.buildStar(25);
}

methods.drawStar = function(density){
	// reset density 
	if(density===0) return;
	ctx.clearRect(100, 0, 400, 400);
	this.stars = this.buildStar(density);
		var tmp = this.stars;
		var img = new Image();
		img.onload = function(){
			for(var i=0; i<tmp.length; i++){
				ctx.drawImage(img, tmp[i].x, tmp[i].y, 20, 20);
			}
		};
		img.src = './icons/svg/star.svg';
};

methods.buildStar = function(density){
	if(density===undefined || density===0) return;
	var stars = [];
	for(var i=0; i<density; i++){
		stars.push({
			x: 100 + Math.random()*500,
			y: Math.random()*200
		});
	}
	return stars;
};

module.exports = Star;