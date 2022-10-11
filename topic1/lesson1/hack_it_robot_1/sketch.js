function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(200);
	rect(115, 100, 175, 300, 100, 100, 0);
	
	//tip of antenna
	fill(200);
	ellipse(200, 25, 30, 30); // top
	quad(195, 40, 205, 40, 210, 100, 190, 100); // main
	
	//robots eye cover
	fill(200);
	strokeWeight(4);
	rect(90, 190, 220, 90, 35); //outer
	fill(0)
	strokeWeight(6);
	rect(100, 200, 200, 70, 30); //inner

	//robots eyes
	fill(249,250,215);
	ellipse(240, 235, 75, 70); // right eye
	rect(237, 235, 5, 5); // right pupil
	ellipse(160, 235, 75, 70); // left eye
	rect(157, 235, 5, 5); // left pupil
	
	//robots mouth
	strokeWeight(3)
	rect(130, 320, 140, 60, 15);
	strokeWeight(2);
	
	//horizontal tooth lines
	line(130, 340, 270, 340);
	line(130, 360, 270, 360);
	
	//vertical tooth lines
	line(158, 320, 158, 380);
	line(186, 320, 186, 380);
	line(214, 320, 214, 380);
	line(242, 320, 242, 380);
}