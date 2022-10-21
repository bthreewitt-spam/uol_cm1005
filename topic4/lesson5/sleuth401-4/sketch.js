/*

Officer: 4747203
CaseNum: 401-3-14252959-4747203

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If arsenic goes above 0.25 or Nerve_Gas dips below 0.75, whilst at the same time, formaldehyde goes above 0.71 and sarin dips below 0.44, reduce opioids by 0.02
	- If alcohol goes above 0.54, polonium dips below 0.73, and also methanol goes above 0.44, increment opioids by 0.02
	- When sarin goes above 0.35, Nerve_Gas goes above 0.7, and also methanol dips below 0.68, decrease chalk by 0.02
	- When either alcohol goes above 0.3, chlorine goes above 0.49, or perhaps formaldehyde goes above 0.42, increase chalk by 0.02
	- When formaldehyde goes above 0.35 and Nerve_Gas goes above 0.29, or on the other hand, chlorine dips below 0.57 or sarin dips below 0.31, try decreasing charcoal by 0.01
	- If methanol goes above 0.48 and polonium dips below 0.48, whilst at the same time, alcohol dips below 0.26 or arsenic dips below 0.69, increment charcoal by 0.04
	- If methanol dips below 0.44 and formaldehyde dips below 0.34, or on the other hand, arsenic dips below 0.31, decrement aspirin by 0.05
	- If sarin dips below 0.62, polonium goes above 0.57, alcohol dips below 0.69, and also Nerve_Gas goes above 0.42, raise aspirin by 0.01
	- If either Nerve_Gas dips below 0.36, methanol dips below 0.58, or perhaps chlorine goes above 0.37, decrement antibodies by 0.01
	- When alcohol dips below 0.38 or polonium dips below 0.38, whilst at the same time, sarin dips below 0.38 or formaldehyde goes above 0.38, raise antibodies by 0.04


Your conditional statements should consider the following poisons:

	- Nerve_Gas
	- formaldehyde
	- sarin
	- alcohol
	- chlorine
	- arsenic
	- polonium
	- methanol


Your conditional statements should modify the following antidotes:

	- opioids
	- chalk
	- charcoal
	- aspirin
	- antibodies


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
var Nerve_Gas;
var formaldehyde;
var sarin;
var alcohol;
var chlorine;
var arsenic;
var polonium;
var methanol;


//Declare the antidote variables
var opioids;
var chalk;
var charcoal;
var aspirin;
var antibodies;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Nerve_Gas = 0.5;
	formaldehyde = 0.5;
	sarin = 0.5;
	alcohol = 0.5;
	chlorine = 0.5;
	arsenic = 0.5;
	polonium = 0.5;
	methanol = 0.5;
	opioids = 0.5;
	chalk = 0.5;
	charcoal = 0.5;
	aspirin = 0.5;
	antibodies = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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


	if((arsenic > .25 || Nerve_Gas < .75) && formaldehyde > .71 && sarin < .44){opioids -= .02;}
	if(alcohol > .54 && polonium < .73 && methanol > .44){opioids += .02;}
	if(sarin> .35 && Nerve_Gas > .7 && methanol < .68){chalk -= .02;}
	if(alcohol > .3 || chlorine > .49 || formaldehyde > .42){chalk += .02;}
	if(formaldehyde > .35 && Nerve_Gas > .29 || chlorine < .57 || sarin < .31){charcoal-= .01;}
	if(methanol > .48 && polonium < .48 && (alcohol < .26||arsenic < .69)){charcoal += .04;}
	if(methanol < .44 && formaldehyde < .34 || arsenic < .31){aspirin -= .05;}
	if(sarin < .62 && polonium > .57 && alcohol < .69 && Nerve_Gas > .42){aspirin += .01;}
	if(Nerve_Gas < .36 || methanol < .58 || chlorine > .37){antibodies -= .01;}
	if((alcohol < .38 || polonium < .38) && (sarin < .38 || formaldehyde > .38)){antibodies += .04;}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Nerve_Gas = nextValue(graphs[0],Nerve_Gas);
	formaldehyde = nextValue(graphs[1],formaldehyde);
	sarin = nextValue(graphs[2],sarin);
	alcohol = nextValue(graphs[3],alcohol);
	chlorine = nextValue(graphs[4],chlorine);
	arsenic = nextValue(graphs[5],arsenic);
	polonium = nextValue(graphs[6],polonium);
	methanol = nextValue(graphs[7],methanol);


	opioids = constrain(opioids, 0, 1);
	chalk = constrain(chalk, 0, 1);
	charcoal = constrain(charcoal, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	antibodies = constrain(antibodies, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('Nerve_Gas: ' + nf(Nerve_Gas,1,2), 20,20);
	fill(colors[1]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);
	fill(colors[3]);
	text('alcohol: ' + nf(alcohol,1,2), 20,80);
	fill(colors[4]);
	text('chlorine: ' + nf(chlorine,1,2), 20,100);
	fill(colors[5]);
	text('arsenic: ' + nf(arsenic,1,2), 20,120);
	fill(colors[6]);
	text('polonium: ' + nf(polonium,1,2), 20,140);
	fill(colors[7]);
	text('methanol: ' + nf(methanol,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(opioids,50,'opioids');
	drawBar(chalk,200,'chalk');
	drawBar(charcoal,350,'charcoal');
	drawBar(aspirin,500,'aspirin');
	drawBar(antibodies,650,'antibodies');


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
