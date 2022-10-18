/*
The case of the Python Syndicate
Stage 1

Officer: 4747203
CaseNum: 301-0-85109065-4747203

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecilKarpinskiImage;
var rockyKrayImage;
var pawelKarpinskiImage;
var robbieKrayImage;
var adaLovelaceImage;
var annaKarpinskiImage;



//declare your new variables below
var adaLovelaceLocationX = 408;
var adaLovelaceLocationY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	adaLovelaceImage = loadImage("ada.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(adaLovelaceImage, adaLovelaceLocationX, adaLovelaceLocationY);

	image(cecilKarpinskiImage, 115, 40);
	image(rockyKrayImage, 408, 40);
	image(pawelKarpinskiImage, 701, 40);
	image(robbieKrayImage, 115, 309);
	image(annaKarpinskiImage, 701, 309);

}