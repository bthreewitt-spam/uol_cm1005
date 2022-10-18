/*
The case of the Python Syndicate
Stage 4

Officer: 4747203
CaseNum: 301-3-88370799-4747203

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var anna_karpinski_image;
var countess_hamilton_image;
var robbie_kray_image;
var ada_lovelace_image;
var pawel_karpinski_image;
var bones_karpinski_image;

var pawel_karpinski_obj;


//declare your new objects below
var anna_karpinski_obj;
var countess_hamilton_obj;
var robbie_kray_obj;
var ada_lovelace_obj;
var bones_karpinski_obj;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	ada_lovelace_image = loadImage("ada.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawel_karpinski_obj = {
		x: 408,
		y: 309,
		image: pawel_karpinski_image
	};

	//define your new objects below
	anna_karpinski_obj = {
		x: 115,
		y: 40,
		image: anna_karpinski_image
	};
	countess_hamilton_obj = {
		x: 408,
		y: 40,
		image: countess_hamilton_image
	};
	robbie_kray_obj = {
		x: 701,
		y: 40,
		image: robbie_kray_image
	};
	ada_lovelace_obj = {
		x: 115,
		y: 309,
		image: ada_lovelace_image
	};
	bones_karpinski_obj = {
		x: 701,
		y: 309,
		image: bones_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_image, anna_karpinski_obj.x, anna_karpinski_obj.y);
	image(countess_hamilton_image, countess_hamilton_obj.x, countess_hamilton_obj.y);
	image(robbie_kray_image, robbie_kray_obj.x, robbie_kray_obj.y);
	image(ada_lovelace_image, ada_lovelace_obj.x, ada_lovelace_obj.y);
	image(pawel_karpinski_obj.image, pawel_karpinski_obj.x, pawel_karpinski_obj.y);
	image(bones_karpinski_image, bones_karpinski_obj.x, bones_karpinski_obj.y);


}