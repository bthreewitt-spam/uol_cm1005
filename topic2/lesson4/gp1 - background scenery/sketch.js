/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted, but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If your shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(94, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	
	//1. a cloud in the sky
	fill(254);
	ellipse(300,150,100,40);//main
	ellipse(284,153,40,45);//bottom left
	ellipse(315,163,40,20);//bottom right
	rect(255,131,90,30,15);//upper middle corners
	rect(271,114,58,40, 18);//top sides
	ellipse(300,125,32,34);//top center
	//clouds eyes
	fill(1);
	rect(294,120,2.5,10, 2);
	rect(305,120,2.5,10,2);
	
	noStroke();
	fill(255);
	text("cloud", 200, 100);
	
	
	//2. a mountain in the distance
	//dark grey detail 
	fill(166, 169, 171);
	triangle(520,432,780,432,650,250);
	//main mountain
	fill(190, 193, 195);
	triangle(520,432,780,432,629,280);//left
	triangle(520,432,780,432,649,278);//center
	triangle(520,432,780,432,671,280);//right
	//tip
	fill(254);
	quad(660,265,650,250,631,277, 638,285); //left
	quad(669,278,650,250,650,275, 660,285); //right
	
	noStroke();
	fill(255);
	text("mountain", 500, 256);
	
	
	//3. a tree
	fill(146, 86, 63);
	rect(875,350, 27,100); //trunk main
	fill(103, 58, 49);
	triangle(875,450,902,450,902,400);//trunk detail
	fill(58, 87, 34);
	rect(861,356,58,20, 30); //leaf side detail
	ellipse(889,371,26,17); //bottom center leaves
	fill(89, 150, 30);
	rect(845,310,90,60, 17); //main leaves
	rect(860,355,60,20, 17); //bottom side leaves
	ellipse(889,370,28,17); //bottom center leaves
	rect(840,315,100,40, 17); //middle side leaves
	rect(852,301,75,40, 15); //top side leaves
	ellipse(888,312,50,40); //top center leaves
	
	noStroke();
	fill(255);
	text("tree", 800, 346);

	
	//4. a canyon
	fill(33, 29, 35);
	quad(206,432,270,432,249,576,183,576);//abyss light
	fill(0)
	quad(205,441,268,441,248,576,185,576);//abyss dark
	fill(113, 54, 51);
	triangle(205,439,183,576,180.5,576);//dirt
	
	noStroke();
	fill(255);
	text("canyon", 100, 480);

	
	//5. a collectable token - eg. a jewel, fruit, coins
	fill(1);
	ellipse(400,470,48,49); //outer black outline
	fill(255);
	ellipse(395,470,31,37); //outer white outline
	fill(252, 192, 5);
	ellipse(399,471,37,40); //main gold
	fill(1);
	rect(394,463,9,20,2); // inner black outline
	fill(255);
	rect(392,461,10,21,2); // inner white outline
	fill(257, 198, 15);
	rect(393,462,9,20,2); // inner gold
	
	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
