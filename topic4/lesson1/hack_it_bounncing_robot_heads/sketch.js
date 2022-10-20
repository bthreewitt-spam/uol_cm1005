let gradient;

function setup() {
	gradient = {
		startX: color(0, 100, 160, 150),
		endX: color(63, 155, 0, 50),
		startY: color(255,0,0),
		endY: color(130,0,130, 150)
	};

	createCanvas(windowWidth, windowHeight);

}
function draw(){
	createGradient(gradient.startX, gradient.endX, gradient.startY, gradient.endY);

	
}

function createGradient(startX, endX, startY, endY){
	let newColor;
	push();
	strokeWeight(1);
	for (let y = 0; y < height*3; y++) {
		let amount = map(y, 0, height, 0, 1);
		newColor = lerpColor(startY, endY, amount);
		stroke(newColor);
		line(0, y/3, width, y*2);
	}

	for (let x = 0; x < width*2; x++) {
		let amount = map(x, 0, width*2, 0, 1);
		newColor = lerpColor(startX, endX, amount);
		stroke(newColor);
		line(x*3, 0, x/2, height);
	}
	pop();
}