/*

Officer: 4747203
CaseNum: 401-2-67875598-4747203

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If either sarin goes above 0.39, novichok dips below 0.37, or perhaps polonium dips below 0.66, reduce chalk by 0.02
	- When SpiderVenom goes above 0.64 and chlorine dips below 0.25, or on the other hand, formaldehyde goes above 0.73, raise chalk by 0.01
	- When either SpiderVenom dips below 0.61, chlorine dips below 0.25, or perhaps polonium goes above 0.45, try decreasing Hydrochloric_Acid by 0.03
	- When sarin dips below 0.34 and formaldehyde goes above 0.71, increment Hydrochloric_Acid by 0.01
	- If chlorine goes above 0.57, SpiderVenom goes above 0.37, and also formaldehyde goes above 0.73, try decreasing Calcium_Gluconate by 0.03
	- When polonium dips below 0.67, or on the other hand, novichok goes above 0.32 and sarin dips below 0.41, increment Calcium_Gluconate by 0.02
	- When SpiderVenom dips below 0.75 and formaldehyde goes above 0.49, try decreasing Calcium_Chloride by 0.04
	- When chlorine dips below 0.27 and sarin goes above 0.35, try increasing Calcium_Chloride by 0.04


Your conditional statements should consider the following poisons:

	- polonium
	- chlorine
	- formaldehyde
	- sarin
	- novichok
	- SpiderVenom


Your conditional statements should modify the following antidotes:

	- chalk
	- Hydrochloric_Acid
	- Calcium_Gluconate
	- Calcium_Chloride


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var polonium;
var chlorine;
var formaldehyde;
var sarin;
var novichok;
var SpiderVenom;


//Declare the antidote variables
var chalk;
var Hydrochloric_Acid;
var Calcium_Gluconate;
var Calcium_Chloride;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	polonium = 0.5;
	chlorine = 0.5;
	formaldehyde = 0.5;
	sarin = 0.5;
	novichok = 0.5;
	SpiderVenom = 0.5;
	chalk = 0.5;
	Hydrochloric_Acid = 0.5;
	Calcium_Gluconate = 0.5;
	Calcium_Chloride = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

	polonium = nextValue(graphs[0],polonium);
	chlorine = nextValue(graphs[1],chlorine);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	sarin = nextValue(graphs[3],sarin);
	novichok = nextValue(graphs[4],novichok);
	SpiderVenom = nextValue(graphs[5],SpiderVenom);


	chalk = constrain(chalk, 0, 1);
	Hydrochloric_Acid = constrain(Hydrochloric_Acid, 0, 1);
	Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);
	Calcium_Chloride = constrain(Calcium_Chloride, 0, 1);


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
	text('polonium: ' + nf(polonium,1,2), 20,20);
	fill(colors[1]);
	text('chlorine: ' + nf(chlorine,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('sarin: ' + nf(sarin,1,2), 20,80);
	fill(colors[4]);
	text('novichok: ' + nf(novichok,1,2), 20,100);
	fill(colors[5]);
	text('SpiderVenom: ' + nf(SpiderVenom,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(chalk,50,'chalk');
	drawBar(Hydrochloric_Acid,200,'Hydrochloric_Acid');
	drawBar(Calcium_Gluconate,350,'Calcium_Gluconate');
	drawBar(Calcium_Chloride,500,'Calcium_Chloride');


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
