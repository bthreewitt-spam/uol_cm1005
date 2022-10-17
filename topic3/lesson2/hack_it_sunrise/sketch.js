let time = {current: 0, speedMS: 500, multiplier: 1};

//NOTE: Color of elements at 12
//NOTE: All coordinate numbers are percentages of window width/height
let sky = {r:0, g:204, b:254};
let sun = {x:4, y:5, diameter:8, //diameter as % of width 
	r:255, g:255, b:0};
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
	fill(sun.r, sun.g, sun.b);
	
	ellipse(xPercent(sun.x) , yPercent(sun.y), xPercent(sun.diameter));
	
	pop();
}

function setColor(){
	
}

async function advanceTime() {
	// TODO: create time menu
	
	console.log(time.current);
	await sleep((time.speedMS * time.multiplier));
	
	time.current += 1;
	if (time.current === 24) {time.current = 0;}
	
	redraw();
}

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
function xPercent(percent){return percent / 100 * windowWidth;}
function yPercent(percent){return percent / 100 * windowHeight;}