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