/*
The case of the Python Syndicate
Stage 3


Officer: 4747203
CaseNum: 301-2-90289104-4747203

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil Karpinski has been declared and initialised
- Position each mugshot relative to Cecil Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Cecil Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Cecil Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var countessHamiltonImg;
var bonesKarpinskiImg;
var cecilKarpinskiImg;
var robbieKrayImg;
var adaLovelaceImg;
var pawelKarpinskiImg;

var cecilKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImg = loadImage("countessHamilton.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	adaLovelaceImg = loadImage("ada.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObj = {
		x: 701,
		y: 40,
		image: cecilKarpinskiImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);

	image(countessHamiltonImg, cecilKarpinskiObj.x - 586, cecilKarpinskiObj.y);
	image(bonesKarpinskiImg, cecilKarpinskiObj.x - 293, cecilKarpinskiObj.y);
	image(robbieKrayImg, cecilKarpinskiObj.x - 586, cecilKarpinskiObj.y + 269);
	image(adaLovelaceImg, cecilKarpinskiObj.x - 293, cecilKarpinskiObj.y + 269);
	image(pawelKarpinskiImg, cecilKarpinskiObj.x, cecilKarpinskiObj.y + 269);

}