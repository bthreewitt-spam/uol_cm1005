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
let star = {r:255, g:255, b:255, a:[],
			x:[] , y:[], generated:false}
let sun = {path:92, diameter:8, //as % of width 
			r:255, g:255, b:0};
let moon = {path:sun.path, diameter:sun.diameter,
			r:200, g:200, b:255};
let ground = {x:0, y:65,
			r:0, g:200, b:0};
let cloud = {x:50, y:10, width:7.75, height:4.75, fill:254,
	amount:null, onScreen: 0, yOffset:[], xPos:[]};
let mountain = {baseFill: 193, tipFill: 254, shadowFill: 169}; 


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
	star.random(50);
	sun.draw();
	moon.draw();
	ground.draw();
	cloud.random(1,7,30);
	
	mountain.draw();
	
	timeMenu.display();
	time.advance();
}


ground.draw = () => {
	push();
	fill(ground.r, ground.g, ground.b);
	rect(xPercent(ground.x), yPercent(ground.y), windowWidth, yPercent(ground.y));
	pop();
}
star.random = (amount) => {
	if(time.current > 12){
		for(let i = 0; i < amount; i++){
			if (!pauseButton.state){
				star.x[i] = random(0, 100);
				star.y[i] = random(0, 100);
				if(time.current < 14 || time.current > 20){
					star.a[i] = random(0, 155);
				} else {
					star.a[i] = random(0, 255);
				}
			}
			star.draw(star.x[i], star.y[i], star.a[i]);
		}
	}
}
star.draw = (x, y, a) => {
	push();
	fill(star.r, star.g, star.b, a);
	ellipse(xPercent(x), yPercent(y), xPercent(.2));
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
cloud.random = (min, max, ySpread) => {//FIXME: clouds flicker when one removed
	if(!pauseButton.state) {
		if (cloud.onScreen < cloud.amount || cloud.amount === null) {
			cloud.amount = Math.round(random(min, max));
			console.log(`cloud amount ${cloud.amount}`);
			if (cloud.onScreen < cloud.amount) {
				for (let i = 0; i <= cloud.amount - cloud.onScreen + 1; i++) {
					cloud.yOffset.push(random(-ySpread / 2, ySpread / 2));
					cloud.xPos.push(round(random(-204, -54)));
					cloud.draw(cloud.xPos[i], cloud.yOffset[i],
						0, 0);
					cloud.onScreen += 1;
					console.log(`clouds on screen: ${cloud.onScreen} ${i}`);
				}
			}
			return;
		}
		for (let i = 0; i < cloud.xPos.length; i++) {
			if (cloud.xPos[i] > 55 && cloud.xPos[i] !== undefined) {
				cloud.xPos.splice(i, 1);
				cloud.yOffset.splice(i, 1);
				cloud.onScreen -= 1;
			} else {
				cloud.xPos[i] += .75 * time.multiplier;
				cloud.draw(cloud.xPos[i], cloud.yOffset[i],
					0, 0);
			}
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
mountain.draw = () => {
	//shadow 
	fill(mountain.shadowFill);
	triangle(xPercent(65),yPercent(65),
		xPercent(95),yPercent(65),
		xPercent(80),yPercent(35));
	
	//base
	fill(mountain.baseFill);
	//left
	triangle(xPercent(65),yPercent(65),
		xPercent(95),yPercent(65),
		xPercent(77.5),yPercent(40));
	//center
	triangle(xPercent(65),yPercent(65),
		xPercent(95),yPercent(65),
		xPercent(80),yPercent(39.5));
	//right
	triangle(xPercent(65),yPercent(65),
		xPercent(95),yPercent(65),
		xPercent(82.5),yPercent(40));
	
	//tip
	fill(mountain.tipFill);
	//left
	quad(xPercent(78.75),yPercent(41),
		xPercent(77.7),yPercent(39.75),
		xPercent(80),yPercent(35),
		xPercent(81),yPercent(37.5));
	//right
	quad(xPercent(81.25),yPercent(41),
		xPercent(80),yPercent(39),
		xPercent(80),yPercent(35),
		xPercent(82.3),yPercent(39.75));
}
function setColor(){
	if(!pauseButton.state) {
		console.log(time.current);
		if (time.current <= 7) { //sunrise
			sky.g = min(sky.g + .9 * time.multiplier, 204);
			sky.b = min(sky.b + .9 * time.multiplier, 254);

			sun.g = min(sun.g + .75 * time.multiplier, 255);

			ground.g = min(ground.g + .5 * time.multiplier, 255);

			cloud.fill = min(cloud.fill + .9 * time.multiplier, 255);

			mountain.baseFill = min(mountain.baseFill + .9 * time.multiplier, 193);
			mountain.tipFill = min(mountain.tipFill + .9 * time.multiplier, 254);
			mountain.shadowFill = min(mountain.shadowFill + .9 * time.multiplier, 169);

			return;
		}
		if (time.current <= 11) { //sunset
			sky.g = max(sky.g - .5 * time.multiplier, 100);
			sky.b = max(sky.b - .5 * time.multiplier, 155);

			sun.g = max(sun.g - .8 * time.multiplier, 150);

			ground.g = max(ground.g -= .3 * time.multiplier, 100);

			cloud.fill = max(cloud.fill - .5 * time.multiplier, 150);

			mountain.baseFill = max(mountain.baseFill - .5 * time.multiplier, 143);
			mountain.tipFill = max(mountain.tipFill - .5 * time.multiplier, 204);
			mountain.shadowFill = max(mountain.shadowFill - .5 * time.multiplier, 119);
			return;
		}
		if (time.current <= 19) { //moonrise
			sky.g = max(sky.g - .8 * time.multiplier, 30);
			sky.b = max(sky.b - .87 * time.multiplier, 60);
			
			ground.g = max(ground.g - .7 * time.multiplier, 35);
			
			cloud.fill = max(cloud.fill - .9 * time.multiplier, 75);

			mountain.baseFill = max(mountain.baseFill - .9 * time.multiplier, 83);
			mountain.tipFill = max(mountain.tipFill - .9 * time.multiplier, 144);
			mountain.shadowFill = max(mountain.shadowFill - .9 * time.multiplier, 59);
		} else { //moon-set
			sky.g += .5 * time.multiplier;
			sky.b += .3 * time.multiplier;

			ground.g += .3 * time.multiplier;
			
			cloud.fill = min(cloud.fill + .9 * time.multiplier, 200);

			mountain.baseFill = min(mountain.baseFill + .9 * time.multiplier, 103);
			mountain.tipFill = min(mountain.tipFill + .9 * time.multiplier, 164);
			mountain.shadowFill = min(mountain.shadowFill + .9 * time.multiplier, 79);
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