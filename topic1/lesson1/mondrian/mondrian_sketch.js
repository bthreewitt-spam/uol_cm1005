function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
	noStroke(); // remove borders

}
function draw()
{
	
	// White squares
	fill(239, 239, 239);
	rect(100,50,600,600);
	
	//red square
	fill(223, 42, 33);
	rect(250, 50, 450, 420);

	//blue square
	fill(3, 88, 156);
	rect(100,490,130,160);

	//yellow square
	fill(240, 221, 111);
	rect(642,577,57,72);

	//lines
	fill(41, 34, 23);
	rect(230,50,20,600); // left vertical line
	rect(620,470,22,180); // right vertical line
	rect(100, 225, 130, 35); // top horizontal line
	rect(100, 470, 600, 20); //center horizontal line
	rect(630,550,70,27); // bottom horizontal line
}