/*
	The class deal with snowflakes 
*/
var cavs = require('./setup_canvas.js');

var canvas = cavs.canvas, 
	ctx = cavs.context,
	cvsW = cavs.width,
	cvsH = cavs.height;

var methods = Snow.prototype;

function Snow(){
	// some default settings 
	this.mp = 25;
	this.particles = this.buildParticles(this.mp);
	this.angle = 0;

}

methods.draw = function(){
	// reset the density if provided 
	ctx.clearRect(0, 0, cvsW, cvsH);
	ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
	ctx.beginPath();
	// this.particles = this.buildParticles(this.mp);
	for(var i=0; i<this.mp; i++){
		var p = this.particles[i];
		ctx.moveTo(p.x, p.y);
		ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
	}
	ctx.fill();
	this.update();
};

methods.buildParticles = function(mp){
	mp = mp || this.mp;
	var particles = [];
	for(var i=0; i<mp; i++){
		particles.push({
			x: Math.random()*cvsW,
			y: Math.random()*cvsH,
			r: Math.random()*4+1,
			d: Math.random()*mp
		});
	}
	return particles;
};

methods.update = function(){
	this.angle += 0.01;
	for(var i=0; i<this.mp; i++){
		var p = this.particles[i];
		p.y +=Math.cos(this.angle+p.d) + 1 + p.r/2;
		p.x +=Math.sin(this.angle)*2;

		if(p.x > cvsW+5 || p.x < -5 || p.y > cvsH){
			if(i%3 > 0) {
				this.particles[i] = {
					x: Math.random()*cvsW, 
					y: -10, 
					r: p.r, 
					d: p.d
				};
			}else{
				this.particles[i] = {
					x: cvsH+5, 
					y: Math.random()*cvsH, 
					r: p.r, 
					d: p.d
				};
			}
		}
	}
};

module.exports = Snow;