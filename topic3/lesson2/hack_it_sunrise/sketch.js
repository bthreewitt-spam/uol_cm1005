let time = {current: 0, waitMS: 500, multiplier: 1, framesPer:20};
let timeMenu = {x:88, y:94, width:10, height:4,
				r:30, g:40, b:40, a:130};
let pauseButton = {imageLoc:'assets/pause.svg', state: false,
	x:88.5, y:95, width:2, height:2};
let minus = {imageLoc:'assets/minus.svg', min: .1,
	x:91, y:95, width:2, height:2};
let plus = {imageLoc:'assets/plus.svg', max: 5,
	x:95, y:95, width:2, height:2};

//NOTE: Color of elements at 6
//NOTE: All coordinate numbers are percentages of window width/height
let sky = {r:0, g:204, b:254};
let sun = {path:92, diameter:8, //as % of width 
			r:255, g:255, b:0};
let moon = {path:sun.path, diameter:sun.diameter,
			r:200, g:200, b:255};
let cloud = {x:50, y:10, width:7.75, height:4.75, fill:254, 
	amount:null, onScreen: 0, yOffset:[], xPos:[]};
let ground = {x:0, y:65,
			r:0, g:200, b:0};


function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(240);
	noStroke();
	noLoop();
	timeMenu.buttons();
}
function draw(){
	setColor();
	
	background(sky.r, sky.g, sky.b);
	sun.draw();
	moon.draw();
	ground.draw();
	cloud.random(1,50,15);
	timeMenu.display();
	time.advance();
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
cloud.random = (min, max, ySpread) => {//FIXME
	if(cloud.onScreen < cloud.amount || cloud.amount === null) {
		cloud.amount = random(min, max);
		if(cloud.onScreen < cloud.amount) {
			for (let i = 0; i <= cloud.amount - cloud.onScreen; i++) {
				cloud.yOffset.push(random(-ySpread / 2, ySpread / 2));
				cloud.xPos.push(random(-104,-54));
				cloud.draw(cloud.xPos[i], cloud.yOffset[i], 
					0, 0);
				cloud.onScreen += 10;
			}
		}
		return;
	}
	
	for(let i = 0; i < cloud.xPos.length; i++){
		if(cloud.xPos[i] > 54){
			cloud.xPos.pop(cloud.xPos[i]);
			cloud.yOffset.pop(cloud.yOffset[i]);
			cloud.onScreen -= 1;
		} else{
			cloud.xPos[i] += 20;
		}
	}
} 
cloud.draw = (xOffset,yOffset,widthOffset, heightOffset) => {
	fill(cloud.fill);
	//main
	ellipse(xPercent(xOffset + cloud.x),
		yPercent(yOffset + cloud.y+3.25),
		xPercent(widthOffset + cloud.width),
		yPercent(heightOffset + cloud.height - .25));
	//bottom left
	ellipse(xPercent(xOffset + cloud.x - 1.25),
		yPercent(yOffset + cloud.y+3.5),
		xPercent(widthOffset + cloud.width - 4.25),
		yPercent(heightOffset + cloud.height));
	//bottom right
	ellipse(xPercent(xOffset + cloud.x + 1.25),
		yPercent(yOffset + cloud.y + 4.6),
		xPercent(widthOffset + cloud.width - 4),
		yPercent(heightOffset + cloud.height -2.5));
	//upper middle corners
	rect(xPercent(xOffset + cloud.x - 3.5),
		yPercent(yOffset + cloud.y + 1),
		xPercent(widthOffset + cloud.width - .75) ,
		yPercent(heightOffset + cloud.height - .75),15);
	//top sides
	rect(xPercent(xOffset + cloud.x - 2.25),
		yPercent(yOffset + cloud.y),
		xPercent(widthOffset + cloud.width - 3.25),
		yPercent(heightOffset + cloud.height - .75), 18);
	//top center
	ellipse(xPercent(xOffset + cloud.x),
		yPercent(yOffset + cloud.y + 1),
		xPercent(widthOffset + cloud.width - 5.25),
		yPercent(heightOffset + cloud.height - 1.25));
}
function setColor(){
	if(!pauseButton.state) {
		if (time.current <= 7) { //sunrise
			sky.g = min(sky.g + .9 * time.multiplier, 204);
			sky.b = min(sky.b + .9 * time.multiplier, 254);

			sun.g = min(sun.g + .75 * time.multiplier, 255);

			ground.g = min(ground.g + .5 * time.multiplier, 255);
			return;
		}
		if (time.current <= 11) { //sunset
			sky.g = max(sky.g - .5 * time.multiplier, 100);
			sky.b = max(sky.b - .5 * time.multiplier, 155);

			sun.g = max(sun.g - .8 * time.multiplier, 150);

			ground.g = max(ground.g -= .3 * time.multiplier, 100);
			return;
		}
		if (time.current <= 19) { //moonrise
			sky.g = max(sky.g - .8 * time.multiplier, 20);
			sky.b = max(sky.b - .87 * time.multiplier, 50);
			ground.g = max(ground.g - .9 * time.multiplier, 35);
		} else { //moon-set
			sky.g += .5 * time.multiplier;
			sky.b += .3 * time.multiplier;

			ground.g += .3 * time.multiplier;
		}
	}
}
timeMenu.display = () =>{
	fill(timeMenu.r, timeMenu.g, timeMenu.b, timeMenu.a);
	rect(xPercent(timeMenu.x), yPercent(timeMenu.y), xPercent(timeMenu.width), yPercent(timeMenu.height), 8);

	//divider
	push();
	stroke(255);
	strokeWeight(1.5);
	line(xPercent(90.75), yPercent(94.75), xPercent(90.75), yPercent(97.25));
	pop();
	
	push();
	fill(255);
	textStyle(BOLD);
	
	let x = 93.25;
	let y = 96.5;
	if(time.multiplier % 1 === 0){x += .4}
	text((int)(Math.round(time.multiplier * 100))/100.0, 
		xPercent(x), yPercent(y));
	pop();

	
}
timeMenu.buttons = () =>{
	pauseButton.button = createImg(pauseButton.imageLoc, 'pauseButton');
	pauseButton.button.position(xPercent(pauseButton.x), yPercent(pauseButton.y));
	pauseButton.button.size(xPercent(pauseButton.width), yPercent(pauseButton.height));
	pauseButton.button.mousePressed(pauseButton.event);
	

	
	minus.button = createImg(minus.imageLoc, 'minus');
	minus.button.position(xPercent(minus.x), yPercent(minus.y));
	minus.button.size(xPercent(minus.width), yPercent(minus.height));
	minus.button.mousePressed(minus.event);

	plus.button = createImg(plus.imageLoc, 'plus');
	plus.button.position(xPercent(plus.x), yPercent(plus.y));
	plus.button.size(xPercent(plus.width), yPercent(plus.height));
	plus.button.mousePressed(plus.event);
}
pauseButton.event= () => {
	if(!pauseButton.state) {
		pauseButton.state = true;
		loop();
		return;
	}
	pauseButton.state = false;
	noLoop();
}
minus.event= async () => {
	while (mouseIsPressed) {
		if (time.multiplier > minus.min * 2) {
			time.multiplier -= .1;
		}
		await sleep(300);
	}
}
plus.event= async () => {
	while (mouseIsPressed) {
		if (time.multiplier < plus.max - .1) {
			time.multiplier += .1;
		}
		await sleep(300);
	}
}
time.advance= async () => { //FIXME: inaccurate to ms
	if(!pauseButton.state) {
		// console.log(time.current);
		await sleep((time.waitMS / time.multiplier / time.framesPer));
		time.current += 1 / time.framesPer;
		if (time.current > 24) {time.current = 0;}
		redraw();
	}
}

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
function xPercent(percent){return percent / 100 * windowWidth;}
function yPercent(percent){return percent / 100 * windowHeight;}