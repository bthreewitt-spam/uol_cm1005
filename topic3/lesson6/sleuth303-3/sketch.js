/*

Officer: 4747203
CaseNum: 303-2-66560825-4747203

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make Restricted_Box_KeyA equal to the value of mouseY
	- Use the 'max' function to prevent Restricted_Box_KeyA from falling below 2

	When the mouse button is pressed:
	- Decrement Restricted_Box_KeyB by 3
	- Use the 'constrain' function to prevent Restricted_Box_KeyB from falling below 2 and going above 17

	Whilst the mouse is moving:
	- Make Restricted_Box_KeyC equal to the value of mouseY
	- Use the 'min' function to prevent Restricted_Box_KeyC from going above 15

	Whilst the mouse is being dragged:
	- Decrement Restricted_Box_KeyD by 2
	- Use the 'max' function to prevent Restricted_Box_KeyD from falling below 3

	Whilst the mouse is being dragged:
	- Make Restricted_Box_KeyE equal to the value of mouseX
	- Use the 'min' function to prevent Restricted_Box_KeyE from going above 67



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Restricted_Box_KeyA;
var Restricted_Box_KeyB;
var Restricted_Box_KeyC;
var Restricted_Box_KeyD;
var Restricted_Box_KeyE;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Restricted_Box_KeyA = 0;
	Restricted_Box_KeyB = 0;
	Restricted_Box_KeyC = 0;
	Restricted_Box_KeyD = 0;
	Restricted_Box_KeyE = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Restricted_Box_KeyA, 18);
	pop();

	push();
	translate(120,380);
	drawDial(140,Restricted_Box_KeyB, 23);
	pop();

	push();
	translate(280,170);
	drawDial(140,Restricted_Box_KeyC, 21);
	pop();

	push();
	translate(280,380);
	drawDial(140,Restricted_Box_KeyD, 24);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Restricted_Box_KeyE);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
