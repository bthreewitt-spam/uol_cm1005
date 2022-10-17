let time = {current: 0, waitMS: 500, multiplier: 1, framesPer:120};

//NOTE: Color of elements at 6
//NOTE: All coordinate numbers are percentages of window width/height
let sky = {r:0, g:204, b:254};
let sun = {path:92, diameter:8, //as % of width 
			r:255, g:255, b:0};
let moon = {path:sun.path, diameter:sun.diameter, 
			r:255, g:255, b:255}; //TODO: 
let ground = {x:0, y:65, 
			r:0, g:200, b:0};


function setup(){
	createCanvas(windowWidth, windowHeight);
	noStroke();
	noLoop();
}
function draw(){
	setColor();
	
	background(sky.r, sky.g, sky.b);
	sun.draw();
	moon.draw();
	ground.draw();

	advanceTime();
}



ground.draw = () => {
	push();
	fill(ground.r, ground.g, ground.b);
	rect(xPercent(ground.x), yPercent(ground.y), windowWidth, yPercent(ground.y));
	pop();
}

sun.draw = () => {
	push();
	stroke(sun.r, sun.g, sun.b);
	strokeWeight(xPercent(sun.diameter));
	noFill();
	arc(xPercent(50), yPercent(ground.y), 
		xPercent(sun.path), xPercent(sun.path), 
		PI + time.current / 12 * PI,
		PI + time.current / 12 * PI + .0001);
	pop();
}
moon.draw = () => {
	push();
	stroke(moon.r, moon.g, moon.b);
	strokeWeight(xPercent(moon.diameter));
	noFill();
	arc(xPercent(50), yPercent(ground.y),
		xPercent(moon.path), xPercent(moon.path),
		PI + (time.current - 12) / 12 * PI,
		PI + (time.current - 12) / 12 * PI + .0001);
	pop();
}

function setColor(){
	
}

async function advanceTime() {
	// TODO: create time menu
	
	console.log(time.current);
	await sleep((time.waitMS / time.multiplier)/time.framesPer);
	
	time.current += 1/time.framesPer;
	if (time.current > 24) {time.current = 0;}
	
	redraw();
}

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
function xPercent(percent){return percent / 100 * windowWidth;}
function yPercent(percent){return percent / 100 * windowHeight;}