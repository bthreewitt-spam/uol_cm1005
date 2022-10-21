let canyon, collectable, mountain, cloud;

let gameChar_x;
let gameChar_y;

let treePos_x;
let treePos_y;

let floorPos_y;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = 432;
	
	cloud = {x_pos: 450, 
			 y_pos: 150, 
			 width: 100, 
			 height:45};

	mountain = {x_pos: 150, 
				y_pos: floorPos_y, 
				width: 250, 
				height:200};

	treePos_x = width/1.85;
	treePos_y = floorPos_y;
	
	canyon = {x_pos: 575,
		width: 500};

	collectable = {x_pos: 300, 
				   y_pos: 490, 
				   size: 49};

	gameChar_x = width/2;
	gameChar_y = floorPos_y;
}
function draw() {
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	drawCloud();
	drawMountain();
	drawTree();
	drawCanyon();
	drawCollectable();
	drawGameChar();
}
function mousePressed() {
	gameChar_x = mouseX;
	gameChar_y = mouseY;
}
function drawCloud(){
	push();
	rectMode(CENTER);
	///////////////////////CLOUD//////////////////////////
	fill(254);
					///////MAIN///////
	ellipse(cloud.x_pos, cloud.y_pos,							//POSITION
			cloud.width,cloud.height * .9);					//SIZE
					///BOTTOM_LEFT////
	ellipse(cloud.x_pos - cloud.width / 2 * .3,				// X
			cloud.y_pos + cloud.height / 2 * .1,				// Y
			cloud.width * .4, cloud.height);					//SIZE
					///BOTTOM_RIGHT///
	ellipse(cloud.x_pos + cloud.width / 2 * .3,				// X
			cloud.y_pos + cloud.height / 2 * .5,				// Y
			cloud.width * .4,cloud.height * .5);			//SIZE
					//MIDDLE_CORNERS//
	rect(cloud.x_pos,											// X
	  cloud.y_pos - cloud.height / 2 * .1, 					// Y
	  cloud.width * .9,cloud.height * .8,15);			//SIZE
					///TOP_CORNERS////
	rect(cloud.x_pos,											// X
	  cloud.y_pos - cloud.height / 2 * .8,	 				// Y
	  cloud.width * .58,cloud.height*.9, 18);			//SIZE
					////TOP_CENTER////
	ellipse(cloud.x_pos,										// X
		cloud.y_pos - cloud.height / 2 * 1.22, 				// Y
		cloud.width * .32,cloud.height * .75);			//SIZE
	///////////////////////EYES///////////////////////////
	fill(1);
					///////LEFT///////
	rect(cloud.x_pos - cloud.width / 2 * .12,				// X
		cloud.y_pos - cloud.height / 2 * 1.2, 				// Y
		cloud.width * .025,cloud.height * .23, 2);		// SIZE
					//////RIGHT///////
	rect(cloud.x_pos + cloud.width / 2 * .12,				// X
		cloud.y_pos - cloud.height / 2 * 1.2, 				// Y
		cloud.width * .025,cloud.height * .23, 2);		// SIZE
	
	pop();
}
function drawMountain(){
	//////////////////////Dark_Grey_Detail////////////////////////// 
	fill(166, 169, 171);
	triangle(mountain.x_pos - mountain.width / 2, mountain.y_pos,	//LEFT___BOTTOM
		 	 mountain.x_pos + mountain.width / 2, mountain.y_pos,	//RIGHT__BOTTOM
				 mountain.x_pos,mountain.y_pos - mountain.height);	//CENTER__TOP__
	////////////////////////Main_Mountain///////////////////////////
	fill(190, 193, 195);
							/////LEFT/////
	triangle(mountain.x_pos - mountain.width / 2, mountain.y_pos, 	//LEFT___BOTTOM_
			 mountain.x_pos + mountain.width / 2, mountain.y_pos, 	//RIGHT__BOTTOM_
			 mountain.x_pos - mountain.width / 2 * .24,			 	//CENTER__TOP__X
			 mountain.y_pos - mountain.height * .75);			  	//CENTER__TOP__Y
							////CENTER////
	triangle(mountain.x_pos - mountain.width / 2, mountain.y_pos, 	//LEFT___BOTTOM_
			 mountain.x_pos + mountain.width / 2, mountain.y_pos, 	//RIGHT__BOTTOM_
			 mountain.x_pos - mountain.width * .01,				  	//CENTER__TOP__X
			 mountain.y_pos - mountain.height * .76);			  	//CENTER__TOP__Y
							////RIGHT////
	triangle(mountain.x_pos - mountain.width / 2, mountain.y_pos, 	//LEFT___BOTTOM_
			 mountain.x_pos + mountain.width / 2, mountain.y_pos, 	//RIGHT__BOTTOM_
			 mountain.x_pos + mountain.width / 2 * .24,			  	//CENTER__TOP__X
			 mountain.y_pos - mountain.height * .75);			  	//CENTER__TOP__Y
	//////////////////////////////Tip////////////////////////////////
	fill(254);
							/////LEFT/////
	quad(mountain.x_pos + mountain.width / 2 * .05,			      	//RIGHT____TOP__X
		 mountain.y_pos - mountain.height * .85,				  	//RIGHT____TOP__Y
			 mountain.x_pos,mountain.y_pos - mountain.height, 	  	//LEFT_____TOP___
		 mountain.x_pos - mountain.width / 2 * .23,				  	//LEFT___BOTTOM_X
		 mountain.y_pos - mountain.height * .77, 				  	//LEFT___BOTTOM_Y
		 mountain.x_pos - mountain.width / 2 * .13,				  	//RIGHT__BOTTOM_X
		 mountain.y_pos - mountain.height * .7);				  	//RIGHT__BOTTOM_Y
							////RIGHT////
	quad(mountain.x_pos - mountain.width / 2 * .05,			      	//LEFT___TOP____X
		 mountain.y_pos - mountain.height * .815,				  	//LEFT___TOP____Y
			 mountain.x_pos,mountain.y_pos - mountain.height, 	  	//RIGHT__TOP_____
		 mountain.x_pos + mountain.width *.116,					  	//RIGHT__BOTTOM_X
		 mountain.y_pos - mountain.height * .76,				  	//RIGHT__BOTTOM_Y 
		 mountain.x_pos + mountain.width *.053,						//LEFT___BOTTOM_X
		 mountain.y_pos - mountain.height * .69);					//LEFT___BOTTOM_Y
}
function drawTree(){
	//////////////////////////TRUNK////////////////////////////
	fill(146, 86, 63);
	rect(treePos_x-13.5,treePos_y-100, 27,100);
	/////////////////////////DETAIL////////////////////////////
						/////TRUNK/////
	fill(103, 58, 49);
	triangle(treePos_x-13.5,treePos_y,				//LEFT
			 treePos_x+13.5,treePos_y,				//RIGHT
			 treePos_x+13.5,treePos_y-50);		//TOP
						/////LEAFS/////
	fill(58, 87, 34);
	rect(treePos_x-27.5,treePos_y-94,58,20, 30); 	//SIDE
	ellipse(treePos_x+.5,treePos_y-79,26,17);			//BOTTOM
	/////////////////////////LEAFS/////////////////////////////
	fill(89, 150, 30);
	rect(treePos_x-43.5,treePos_y-140,90,60, 17);	//MAIN
	rect(treePos_x-28.5,treePos_y-95,60,20, 17); 	//BOTTOM_SIDE
	ellipse(treePos_x+.5,treePos_y-80,28,17);			//BOTTOM_CENTER
	rect(treePos_x-48.5,treePos_y-135,100,40, 17);	//MIDDLE_SIDE
	rect(treePos_x-36.5,treePos_y-144,75,40, 15); 	//MIDDLE_CENTER
	ellipse(treePos_x+.5,treePos_y-132,50,40);			//__TOP__CENTER
}
function drawCanyon(){
	/////////////////////////////LIGHT///////////////////////////////
	fill(33, 29, 35);
	quad(canyon.x_pos+1,432,					//LEFT__TOP
		 canyon.width+canyon.x_pos, 432,	//RIGHT_TOP
		 canyon.width+canyon.x_pos-33,576,	//RIGHT_BOTTOM
		 canyon.x_pos-67,576);				//LEFT__BOTTOM
	/////////////////////////////DARK////////////////////////////////
	fill(0)
	quad(canyon.x_pos,441, 						//LEFT__TOP
	 canyon.width+canyon.x_pos-3,441,		//RIGHT_TOP
	 canyon.width+canyon.x_pos-35,576, 		//RIGHT_BOTTOM
	 canyon.x_pos-65,576);					//LEFT__BOTTOM
	/////////////////////////////DIRT////////////////////////////////
	fill(113, 54, 51);
	triangle(canyon.x_pos+1,439,				//TOP____CENTER
			 canyon.x_pos-67,576,			//BOTTOM_RIGHT
			 canyon.x_pos-69.5,576);		//BOTTOM_LEFT
}
function drawCollectable(){
	push();
	
	rectMode(CENTER);
	let s = collectable.size/49
	scale(s);
	
	//////////////////////////////////OUTER//////////////////////////////////////
								//////BLACK//////
	fill(1);
	ellipse(collectable.x_pos/s,collectable.y_pos/s,48,49);
								//////WHITE//////
	fill(255);
	ellipse((collectable.x_pos-5)/s,collectable.y_pos/s,31,37);
								//////GOLD///////
	fill(252, 192, 5);
	ellipse((collectable.x_pos-1)/s,(collectable.y_pos+1)/s,37,40);
	//////////////////////////////////INNER//////////////////////////////////////
								//////BLACK//////
	fill(1);
	rect((collectable.x_pos-1.5)/s,(collectable.y_pos+3)/s,9,20,2);
								//////WHITE//////
	fill(255);
	rect((collectable.x_pos-3)/s,(collectable.y_pos+1.5)/s,10,21,2);
								//////GOLD///////
	fill(257, 198, 15);
	rect((collectable.x_pos-2.5)/s,(collectable.y_pos+2)/s,9,20,2);
	
	pop()
}
function drawGameChar(){
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

	arc(gameChar_x, gameChar_y-50, 29, 30, PI+.25, -.25, CHORD); //top of mask
	arc(gameChar_x, gameChar_y-50, 30, 31, .25, PI, CHORD); //bottom of mask

	fill(0);
	ellipse(gameChar_x - 5 , gameChar_y-51, 4); // left eye
	ellipse(gameChar_x + 5 , gameChar_y-51, 4); // right eye
}