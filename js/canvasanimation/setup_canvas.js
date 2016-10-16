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