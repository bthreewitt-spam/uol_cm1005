/*
The case of the Python Syndicate
Stage 2


Officer: 4747203
CaseNum: 301-1-31505918-4747203

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Cecil Karpinski

- The variables for Cecil Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Cecil Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Cecil Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Cecil Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var rockyKrayImage;
var robbieKrayImage;
var pawelKarpinskiImage;
var countessHamiltonImage;
var cecilKarpinskiImage;
var bonesKarpinskiImage;


var cecilKarpinskiCoordX = 408;
var cecilKarpinskiCoordY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImage, cecilKarpinskiCoordX, cecilKarpinskiCoordY);

	image(rockyKrayImage, 115, 40);
	image(robbieKrayImage, 408, 40);
	image(pawelKarpinskiImage, 701, 40);
	image(countessHamiltonImage, 115, 309);
	image(bonesKarpinskiImage, 701, 309);

}