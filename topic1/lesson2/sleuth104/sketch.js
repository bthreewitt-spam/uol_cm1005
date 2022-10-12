/*

Officer: 4747203
CaseNum: 101-3-84095777-4747203

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Blue Violet filled rectangle with a Dark Red outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Sandy Brown filled
rectangle with a Green outline around him.

Identify the man reading the newspaper by drawing a Saddle Brown filled rectangle
with a Peru outline around him.

Identify the woman with the dog by drawing a Purple filled rectangle with a
Dark Turquoise outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(138,43,226,100);
	stroke(139,0,0);
	rect(589,63,130,279);

	fill(244,164,96,100);
	stroke(0,128,0,100);
	rect(1030,200,145,195);
	
	fill(139,69,19, 100);
	stroke(205,133,63);
	rect(19,105,88,178);
	
	fill(128,0,128,100);
	stroke(0,206,209);
	rect(300,51,135,285);

	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
