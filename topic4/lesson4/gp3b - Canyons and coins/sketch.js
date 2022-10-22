/*

The Game Project

Week 3

Game interaction

*/

let isLeft, isRight, isFalling, isPlummeting;

let collectable, canyon;

const MOVEMENT_SPEED = 1.5, FALL_SPEED = 3, PLUMMET_SPEED = 4, JUMP_HEIGHT = 100;

let gameChar_x;
let gameChar_y;
let floorPos_y;


function setup() {
	createCanvas(1024, 576);
	
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	
		collectable = {
			x_pos: 300,
			y_pos: floorPos_y - 24,
			size: 49,
			isFound: false
		};

	canyon = {
		x_pos: 350,
		width: 40
	};
}
function draw() {

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
	
	drawCanyon(canyon.x_pos,canyon.width);

	//the game character
	if(isLeft && (isFalling || isPlummeting))
	{
		// add your jumping-left code
		drawCharacter(6);

	}
	else if(isRight && (isFalling || isPlummeting))
	{
		// add your jumping-right code
		drawCharacter(5);
	}
	else if(isLeft)
	{
		// add your walking left code
		drawCharacter(3);

	}
	else if(isRight)
	{
		// add your walking right code
		drawCharacter(4);
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		drawCharacter(2);
	}
	else
	{
		// add your standing front facing code
		drawCharacter(1);
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	console.log(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width && floorPos_y )
	//canyon fall
	if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width && gameChar_y >= floorPos_y){isPlummeting = true;}
	if(isPlummeting){
		gameChar_y += FALL_SPEED;
		
		if(isLeft){gameChar_x += .5;}
		else if(isRight){gameChar_x -= 2;} 
		else {gameChar_x -= 1;}
	}
	
	//collectable
	if(!collectable.isFound){drawCollectable(collectable.x_pos, collectable.y_pos, collectable.size);}
	if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < collectable.size){collectable.isFound = true;}
	
	//movement
	if(isLeft){gameChar_x -= MOVEMENT_SPEED;}
	if(isRight){gameChar_x += MOVEMENT_SPEED;}
	
	//jump gravity
	if(gameChar_y < floorPos_y){
		gameChar_y += FALL_SPEED;
		isFalling = true;
	} else {
		isFalling=false;
	}
	
	if(keyIsPressed){showKeycode(key.toUpperCase());}
	if(gameChar_y > height+ 100){window.location.reload();}
}
function keyPressed() {
	// if statements to control the animation of the character when
	// keys are pressed.
	
	if(!isPlummeting){
		if(keyCode === 65){isLeft = true;} //a
		if(keyCode === 68){isRight = true;} //d
		if(keyCode === 87 && !isFalling){gameChar_y -= JUMP_HEIGHT;}//w
	}
	
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}
function keyReleased() {
	// if statements to control the animation of the character when
	// keys are released.
	if(keyCode === 65){isLeft = false;}
	if(keyCode === 68){isRight = false;}

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
function drawCharacter(state){
	/* 
	* 1. standing front facing
	* 2. jumping - facing forwards
	* 3. Walking left
	* 4. Walking right
	* 5. Jumping to the right
	* 6. Jumping to the left
	* */
	
	switch(state) {
		case 1: //1. standing front facing
			fill(30);
			arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

			stroke(30);
			strokeWeight(5)
			line(gameChar_x-5, gameChar_y-2, gameChar_x-5, gameChar_y-12);//left leg
			line(gameChar_x+5, gameChar_y-2, gameChar_x+5, gameChar_y-12);//right leg
			line(gameChar_x-11, gameChar_y-20, gameChar_x-8, gameChar_y-35); //left arm
			line(gameChar_x+11, gameChar_y-20, gameChar_x+8, gameChar_y-35); //right arm
			noStroke();

			push();
			fill(253, 209, 167);
			ellipse(gameChar_x, gameChar_y-50, 30); // head
			pop();

			arc(gameChar_x, gameChar_y-50, 30, 31, PI+.25, -.25, CHORD); //top of mask
			arc(gameChar_x, gameChar_y-50, 30, 31, .25, PI, CHORD); //bottom of mask

			fill(0);
			ellipse(gameChar_x - 5 , gameChar_y-51, 4); // left eye
			ellipse(gameChar_x + 5 , gameChar_y-51, 4); // right eye
			break;
		case 2: //2. jumping - facing forwards
			fill(30);
			arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

			stroke(30);
			strokeWeight(5)
			line(gameChar_x-8, gameChar_y-2, gameChar_x-5, gameChar_y-12);//left leg
			line(gameChar_x+8, gameChar_y-2, gameChar_x+5, gameChar_y-12);//right leg
			line(gameChar_x-17, gameChar_y-45, gameChar_x-8, gameChar_y-35); //left arm
			line(gameChar_x+17, gameChar_y-45, gameChar_x+8, gameChar_y-35); //right arm
			noStroke();

			push();
			fill(253, 209, 167);
			ellipse(gameChar_x, gameChar_y-50, 30); // head
			pop();

			arc(gameChar_x, gameChar_y-50, 30, 31, PI+.25, -.25, CHORD); //top of mask
			arc(gameChar_x, gameChar_y-50, 30, 31, .25, PI, CHORD); //bottom of mask

			fill(0);
			ellipse(gameChar_x - 5 , gameChar_y-51, 4); // left eye
			ellipse(gameChar_x + 5 , gameChar_y-51, 4); // right eye
			break;
		case 3: //3. Walking left
			fill(30);
			arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body
			
			stroke(30);
			strokeWeight(5)
			line(gameChar_x-4, gameChar_y-2, gameChar_x-4, gameChar_y-12);//left leg
			line(gameChar_x+3, gameChar_y-2, gameChar_x+3, gameChar_y-12);//right leg
			line(gameChar_x+11, gameChar_y-20, gameChar_x+7, gameChar_y-35); //right arm
			noStroke();

			push();
			fill(253, 209, 167);
			ellipse(gameChar_x, gameChar_y-50, 30); // head
			pop();

			arc(gameChar_x, gameChar_y-50, 30, 31, PI+.25, -.25, CHORD); //top of mask
			arc(gameChar_x, gameChar_y-50, 30, 31, -.5, PI-.15, CHORD); //bottom of mask

			fill(0);
			ellipse(gameChar_x - 11 , gameChar_y-51, 4); // left eye
			break;
		case 4: //4. Walking right
			fill(30);
			arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

			stroke(30);
			strokeWeight(5)
			line(gameChar_x-3, gameChar_y-2, gameChar_x-3, gameChar_y-12);//left leg
			line(gameChar_x+4, gameChar_y-2, gameChar_x+4, gameChar_y-12);//right leg
			line(gameChar_x-11, gameChar_y-20, gameChar_x-8, gameChar_y-35); //left arm
			noStroke();

			push();
			fill(253, 209, 167);
			ellipse(gameChar_x, gameChar_y-50, 30); // head
			pop();

			arc(gameChar_x, gameChar_y-50, 30, 31, PI+.25, -.25, CHORD); //top of mask
			arc(gameChar_x, gameChar_y-50, 30, 31, +.15, PI+.5, CHORD); //bottom of mask

			fill(0);
			ellipse(gameChar_x + 11 , gameChar_y-51, 4); // right eye
			break;
		case 5: //5. Jumping to the right
			fill(30);
			arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

			stroke(30);
			strokeWeight(5)
			line(gameChar_x-8, gameChar_y-2, gameChar_x-3, gameChar_y-12);//right leg
			line(gameChar_x+11, gameChar_y-4, gameChar_x+4, gameChar_y-12);//left leg
			line(gameChar_x-14, gameChar_y-20, gameChar_x-8, gameChar_y-35); //right arm
			noStroke();

			push();
			fill(253, 209, 167);
			ellipse(gameChar_x, gameChar_y-50, 30); // head
			pop();

			arc(gameChar_x, gameChar_y-50, 30, 31, PI+.25, -.25, CHORD); //top of mask
			arc(gameChar_x, gameChar_y-50, 30, 31, +.15, PI+.5, CHORD); //bottom of mask

			fill(0);
			ellipse(gameChar_x + 11 , gameChar_y-51, 4); // right eye
			break;
		case 6: //6. Jumping to the left
			fill(30);
			arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

			stroke(30);
			strokeWeight(5)
			line(gameChar_x+8, gameChar_y-2, gameChar_x+3, gameChar_y-12);//left leg
			line(gameChar_x-11, gameChar_y-4, gameChar_x-4, gameChar_y-12);//right leg
			line(gameChar_x+14, gameChar_y-20, gameChar_x+8, gameChar_y-35); //left arm
			noStroke();

			push();
			fill(253, 209, 167);
			ellipse(gameChar_x, gameChar_y-50, 30); // head
			pop();

			arc(gameChar_x, gameChar_y-50, 30, 31, PI+.25, -.25, CHORD); //top of mask
			arc(gameChar_x, gameChar_y-50, 30, 31, -.5, PI-.15, CHORD); //bottom of mask

			fill(0);
			ellipse(gameChar_x - 11 , gameChar_y-51, 4); // left eye
			break;
		default:
			console.error("No state declared");
	}
	
}
function drawCollectable(x,y,size){
	push();

	rectMode(CENTER);
	let s = size/49
	scale(s);

	//////////////////////////////////OUTER//////////////////////////////////////
								//////BLACK//////
	fill(1);
	ellipse(x/s,y/s,48,49);
								//////WHITE//////
	fill(255);
	ellipse((x-5)/s,y/s,31,37);
								//////GOLD///////
	fill(252, 192, 5);
	ellipse((x-1)/s,(y+1)/s,37,40);
	//////////////////////////////////INNER//////////////////////////////////////
								//////BLACK//////
	fill(1);
	rect((x-1.5)/s,(y+3)/s,9,20,2);
								//////WHITE//////
	fill(255);
	rect((x-3)/s,(y+1.5)/s,10,21,2);
								//////GOLD///////
	fill(257, 198, 15);
	rect((x-2.5)/s,(y+2)/s,9,20,2);

	pop()
}
function drawCanyon(x, width){
	/////////////////////////////LIGHT///////////////////////////////
	fill(33, 29, 35);
	quad(x+1,432,								//LEFT__TOP
		width+x, 432,							//RIGHT_TOP
		width+x-33,576,						//RIGHT_BOTTOM
		x-67,576);								//LEFT__BOTTOM
	/////////////////////////////DARK////////////////////////////////
	fill(0)
	quad(x,441, 									//LEFT__TOP
		width+x-3,441,							//RIGHT_TOP
		width+x-35,576, 						//RIGHT_BOTTOM
		x-65,576);								//LEFT__BOTTOM
	/////////////////////////////DIRT////////////////////////////////
	fill(113, 54, 51);
	triangle(x+1,439,							//TOP____CENTER
		x-67,576,								//BOTTOM_RIGHT
		x-69.5,576);							//BOTTOM_LEFT
}

function showKeycode(key){
	fill(40)
	rect(25,25,100,100, 10);
	fill(255);
	textAlign(CENTER);
	textSize(90);
	text(key, 25,37, 100, 100);
}