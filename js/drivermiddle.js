(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./setup_canvas.js":6}],2:[function(require,module,exports){
// var canvas = require('./setup_canvas.js');
var Snow = require('./snow.js'),
	Moon = require('./moon.js'),
	Fire = require('./fire.js'),
	Cloud = require('./cloud.js'),
	Star = require('./star.js'),
	House = require('./house.js');

var methods = Driver.prototype,
    snow = new Snow(),
    moon = new Moon(),
	fire = new Fire(),
	cloud = new Cloud(),
	star = new Star(),
	house = new House();

function Driver(){}

methods.watch = function(values){
	moon.drawMoon(values.moonLevel);
	fire.drawFire(values.fireLevel);
	cloud.drawCloud(values.cloudLevel);
	star.drawStar(values.starsLevel);
	house.drawHouse(values.houseLevel);
};

if(typeof window === 'undefined'){
	module.exports = Driver;
}else{
	console.log('load to window');
	window.Driver = Driver;
}
},{"./cloud.js":1,"./fire.js":3,"./house.js":4,"./moon.js":5,"./snow.js":7,"./star.js":8}],3:[function(require,module,exports){
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
},{"./setup_canvas.js":6}],4:[function(require,module,exports){
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
},{"./setup_canvas.js":6}],5:[function(require,module,exports){
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


},{"./setup_canvas.js":6}],6:[function(require,module,exports){
var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	//canvas dimensions
	var W = 930;
	var H = 500;
	canvas.width = W;
	canvas.height = H;

module.exports = {
	context: ctx,
	width: W,
	height: H,
	canvas: canvas
};
},{}],7:[function(require,module,exports){
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
},{"./setup_canvas.js":6}],8:[function(require,module,exports){
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
},{"./setup_canvas.js":6}]},{},[2])