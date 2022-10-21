/*

Officer: 4747203
CaseNum: 401-1-30050767-4747203

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If strychnine goes above 0.73 or chlorine dips below 0.31, decrease aspirin by 0.05
	- If snakeVenom dips below 0.46, try increasing aspirin by 0.05
	- If snakeVenom goes above 0.67, decrease sodiumBicarbonate by 0.02
	- If strychnine goes above 0.63, try increasing sodiumBicarbonate by 0.03
	- When strychnine dips below 0.69 or snakeVenom dips below 0.34, decrement paracetamol by 0.02
	- When chlorine dips below 0.25, increase paracetamol by 0.02
	- If formaldehyde goes above 0.25, decrease calcium_gluconate by 0.05
	- When chlorine dips below 0.62 or strychnine goes above 0.7, increase calcium_gluconate by 0.05


Your conditional statements should consider the following poisons:

	- snakeVenom
	- chlorine
	- strychnine
	- formaldehyde


Your conditional statements should modify the following antidotes:

	- aspirin
	- sodiumBicarbonate
	- paracetamol
	- calcium_gluconate


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var snakeVenom;
var chlorine;
var strychnine;
var formaldehyde;


//Declare the antidote variables
var aspirin;
var sodiumBicarbonate;
var paracetamol;
var calcium_gluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	snakeVenom = 0.5;
	chlorine = 0.5;
	strychnine = 0.5;
	formaldehyde = 0.5;
	aspirin = 0.5;
	sodiumBicarbonate = 0.5;
	paracetamol = 0.5;
	calcium_gluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	snakeVenom = nextValue(graphs[0],snakeVenom);
	chlorine = nextValue(graphs[1],chlorine);
	strychnine = nextValue(graphs[2],strychnine);
	formaldehyde = nextValue(graphs[3],formaldehyde);


	aspirin = constrain(aspirin, 0, 1);
	sodiumBicarbonate = constrain(sodiumBicarbonate, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,20);
	fill(colors[1]);
	text('chlorine: ' + nf(chlorine,1,2), 20,40);
	fill(colors[2]);
	text('strychnine: ' + nf(strychnine,1,2), 20,60);
	fill(colors[3]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(sodiumBicarbonate,200,'sodiumBicarbonate');
	drawBar(paracetamol,350,'paracetamol');
	drawBar(calcium_gluconate,500,'calcium_gluconate');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
