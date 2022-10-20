const BALL_SIZE = 200;
const BOUNCE = {BOOST: 5, FRAMES: 100};
let gradient
let background;
let bender
let flexo;

function preload(){background = loadImage('background1.png');}
function setup() {

	gradient = {
		startX: color(0, 100, 160, 150),
		endX: color(63, 155, 0, 50),
		startY: color(255,0,0),
		endY: color(130,0,130, 150),
		img: loadImage('gradientImg.png')
	};

	bender = {
		x: 200,
		y: 200,
		isFlexo: false,
		speed: 2.5,
		directionX: 1,
		directionY: 1
	};

	flexo = {
		x: 600,
		y: 600,
		isFlexo: true,
		speed: 3,
		directionX: -1,
		directionY: -1
	}
	frameRate(60);

	createCanvas(windowWidth, windowHeight);
}
function draw(){
	image(gradient.img, 0,0,width,height);

	if(dist(bender.x, bender.y, flexo.x, flexo.y) >= BALL_SIZE){
		move(bender);
		move(flexo);
	} else {
		bounce(flexo);
		bounce(bender);
	}

	hitCorner(bender);
	hitCorner(flexo);

	drawRobot(bender.x,bender.y, bender.isFlexo);
	drawRobot(flexo.x,flexo.y, flexo.isFlexo);
}
function drawRobot(x, y, isFlexo){
	push();
	
	ellipse(x, y, BALL_SIZE, BALL_SIZE);
	image(background, x - 100, y - 100, BALL_SIZE, BALL_SIZE);
	scale(.17);

	if(isFlexo){
		drawFlexo(x/.17 - 200, y/.17 - 490,200,200,200);
	}else{
		drawBender(x/.17 - 200, y/.17 - 490,200,200,200);
	}
	
	pop();
}
async function bounce(robot){
	robot.directionY *= -1;
	robot.directionX *= -1;
	
	for(let i = robot.speed + BOUNCE.BOOST; i > robot.speed; i --){

		robot.x += i * robot.directionX;
		robot.y += i * robot.directionY;
		await sleep(2000);
	}
	
}
function move(robot){
	robot.x += robot.speed * robot.directionX;
	robot.y += robot.speed * robot.directionY;
}
function hitCorner(robot){
	if(robot.x > BALL_SIZE/2 && robot.x < width - BALL_SIZE/2 && 
	   robot.y > BALL_SIZE/2 && robot.y < height - BALL_SIZE/2){
	   return;
	}
	if(robot.x < BALL_SIZE/2 || robot.x > width - BALL_SIZE/2){
		robot.directionX *= -1
		move(robot);
	}
	if(robot.y < BALL_SIZE/2 || robot.y > height - BALL_SIZE/2){
		robot.directionY *= -1
		move(robot);
	}
}
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}