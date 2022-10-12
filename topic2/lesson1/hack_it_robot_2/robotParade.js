function setup()
{
	//create a canvas for the robot
	createCanvas(2048, 1024);
}

function draw()
{
	drawRobot(250, 0,200,200,200);
}
function drawRobot(xOffset, yOffset, r, g, b)
{
	// TODO: set x and y to corners
	drawHead(xOffset, yOffset, r, g, b);
	drawBody(xOffset, yOffset, r, g, b);
}

function drawHead(x, y, r, g, b)
{
	strokeWeight(6);

	//robots head
	fill(r, g, b);
	rect(x+115, y+100, 175, 300, 100, 100, 0);

	//tip of antenna
	fill(r, g, b);
	ellipse(x+200, y+25, 30, 30); // top
	quad(x+195, y+40, x+205, y+40, 
		x+210, y+100, x+190, y+100); // main

	//robots eye cover
	fill(r, g, b);
	strokeWeight(4);
	rect(x+90, y+190, 220, 90, 35); //outer
	fill(0);
	strokeWeight(6);
	rect(x+100, y+200, 200, 70, 30); //inner

	//robots eyes
	fill(249,250,215);
	ellipse(x+240, y+235, 75, 70); // right eye
	rect(x+237, y+235, 5, 5); // right pupil
	ellipse(x+160, y+235, 75, 70); // left eye
	rect(x+157, y+235, 5, 5); // left pupil

	//robots mouth
	strokeWeight(3);
	rect(x+130, y+320, 140, 60, 15);
	strokeWeight(2);

	//horizontal tooth lines
	line(x+130, y+340, x+270, y+340);
	line(x+130, y+360, x+270, y+360);

	//vertical tooth lines
	line(x+158, y+320, x+158, y+380);
	line(x+186, y+320, x+186, y+380);
	line(x+214, y+320, x+214, y+380);
	line(x+242, y+320, x+242, y+380);
}

function drawBody(x, y, r, g, b)
{
	fill(r,g,b);
	strokeWeight(6)

	//main robot body
	beginShape();
	vertex(x+330, y+450);
	vertex(x+300, y+750);
	vertex(x+105, y+750);
	vertex(x+75, y+450);
	endShape();
	
	//top of robot body
	beginShape();
	bezier(x+75, y+450, x+195, y+475,
	x+210, y+475, x+330, y+450);
	vertex(x+115, y+400);
	vertex(x+290, y+400);
	vertex(x+330, y+450);
	endShape();
	
	//body door
	beginShape();
	bezier(x+260, y+510, x+280, y+510,
	x+280, y+510, x+280, y+525);
	bezier(x+280, y+525, x+266, y+690,
	x+267, y+700, x+255, y+700);
	bezier(x+255, y+ 700, x+140, y+700,
		x+135, y+710,x+133, y+690);
	bezier(x+133, y+690, x+120, y+510, 
		x+120, y+510, x+140, y+511);
	bezier(x+140, y+511,x+140, y+511,
		x+140, y+511,x+260, y+510);

	beginContour(); // door handle
	strokeWeight(3);
	fill(r+20,g+20,b+20);
	ellipse(x+255, y+610, 10);
	endContour();
	endShape();
	
	//right arm
}