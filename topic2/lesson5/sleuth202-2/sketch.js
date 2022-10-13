/*

Officer: 4747203
CaseNum: 202-1-91741311-4747203

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Crimson filled text with a Lime Green outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(603,392);
	textFont(letterFont);
	textSize(28);
}

function draw()
{
	background(255);

	fill(0,0,128);
	stroke(0,139,139);
	// text("miss", 60,84);
	fill(0,0,255);
	stroke(154,205,50);
	// text("longing", 250,202);
	fill(255,127,80);
	stroke(0,139,139);
	// text("I", 118,115);
	fill(128,0,0);
	stroke(255,140,0);
	// text("only", 133,143);
	fill(124,252,0);
	stroke(218,165,32);
	// text("again", 505,202);
	fill(218,112,214);
	stroke(0,250,154);
	// text("think", 89,143);
	fill(148,0,211);
	stroke(0,0,139);
	// text("you.", 193,143);
	fill(147,112,219);
	stroke(255,69,0);
	// text("sky,", 546,115);
	fill(139,0,139);
	stroke(34,139,34);
	// text("last", 9,115);
	fill(75,0,130);
	stroke(220,20,60);
	// text("you", 157,84);
	fill(238,130,238);
	stroke(34,139,34);
	// text("of", 169,143);
	fill(255,215,0);
	stroke(0,255,127);
	// text("I", 45,84);
	fill(210,105,30);
	stroke(50,205,50);
	// text("this", 256,173);
	fill(250,128,114);
	stroke(34,139,34);
	// text("How", 7,84);
	fill(0,255,127);
	stroke(148,0,211);
	// text("my", 190,173);
	fill(160,82,45);
	stroke(46,139,87);
	// text("When", 322,202);
	fill(165,42,42);
	stroke(160,82,45);
	// text("desolate.", 426,173);
	fill(30,144,255);
	stroke(0,100,0);
	// text("spring,", 9,173);
	fill(50,205,50);
	stroke(107,142,35);
	// text("long", 133,115);
	fill(0,128,128);
	stroke(139,0,139);
	// text("up", 422,115);
	fill(219,112,147);
	stroke(184,134,11);
	// text("months", 407,84);
	fill(153,50,204);
	stroke(34,139,34);
	// text("?", 306,202);
	fill(128,0,0);
	stroke(25,25,112);
	// text("at", 446,115);
	fill(255,99,71);
	stroke(255,255,0);
	// text("your", 344,143);
	fill(222,184,135);
	stroke(0,128,128);
	// text("we", 554,84);
	fill(184,134,11);
	stroke(0,0,139);
	// text("uni", 455,202);
	fill(160,82,45);
	stroke(153,50,204);
	// text("my", 280,115);
	fill(218,165,32);
	stroke(0,250,154);
	// text("with", 68,173);
	fill(0,250,154);
	stroke(139,0,0);
	// text("onger", 10,202);
	stroke(50,205,50);
	// text("I", 83,202);
	fill(127,255,212);
	stroke(0,250,154);
	// text("the", 549,143);
	fill(255,105,180);
	stroke(0,100,0);
	// text("we", 402,202);
	fill(0,206,209);
	stroke(0,128,128);
	// text("in", 262,115);
	fill(210,105,30);
	stroke(255,69,0);
	// text("I'm", 228,143);
	fill(123,104,238);
	stroke(210,105,30);
	// text("l", 7,202);
	fill(218,165,32);
	stroke(199,21,133);
	// text("Even", 489,143);
	fill(50,205,50);
	stroke(255,215,0);
	// text("sma", 293,173);
	fill(233,150,122);
	stroke(128,0,0);
	// text("return.", 434,143);
	fill(0,139,139);
	stroke(148,0,211);
	// text("yours,", 71,258);
	fill(139,0,139);
	stroke(255,0,255);
	// text("banking", 259,143);
	fill(72,209,204);
	stroke(255,140,0);
	// text("darling", 38,28);
	fill(25,25,112);
	stroke(128,128,0);
	// text("be", 432,202);
	fill(139,69,19);
	stroke(0,255,255);
	// text("kissed", 46,115);
	fill(218,112,214);
	stroke(165,42,42);
	// text("you", 230,115);
	fill(50,205,50);
	stroke(128,0,128);
	// text("in", 531,143);
	stroke(0,0,128);
	// text("you", 134,173);
	fill(250,128,114);
	stroke(154,205,50);
	// text("to", 140,202);
	fill(178,34,34);
	stroke(0,255,127);
	// text("on", 320,143);
	fill(0,0,128);
	stroke(128,128,0);
	// text("the", 470,115);
	fill(154,205,50);
	stroke(0,128,0);
	// text("hold", 193,115);
	fill(178,34,34);
	stroke(0,0,205);
	// text("ted", 473,202);
	fill(0,128,0);
	stroke(75,0,130);
	// text("Bob,", 93,28);
	fill(0,0,139);
	stroke(0,139,139);
	// text("feels", 382,173);
	fill(220,20,60);
	stroke(50,205,50);
	text("store", 164,202);
	text("side", 219,173);
	text("the", 245,84);
	fill(100,149,237);
	stroke(154,205,50);
	// text("have", 98,202);
	fill(0,255,127);
	stroke(0,0,128);
	// text("and", 8,143);
	fill(160,82,45);
	stroke(160,82,45);
	// text("Forever", 7,258);
	fill(139,0,139);
	stroke(75,0,130);
	// text("to", 169,115);
	fill(255,99,71);
	stroke(128,0,128);
	// text("night", 502,115);
	fill(50,205,50);
	stroke(128,0,0);
	// text("having", 103,84);
	fill(220,20,60);
	stroke(50,205,50);
	text("swift", 383,143);
	fill(152,251,152);
	stroke(25,25,112);
	// text("since", 509,84);
	fill(205,133,63);
	stroke(0,128,0);
	// text("many", 361,84);
	fill(173,255,47);
	stroke(0,100,0);
	// text("this", 213,202);
	fill(72,209,204);
	stroke(32,178,170);
	// text("it", 491,84);
	stroke(128,0,128);
	// text("How", 323,84);
	fill(0,128,0);
	stroke(0,128,128);
	// text("ll", 325,173);
	fill(220,20,60);
	stroke(50,205,50);
	text("place", 277,84);
	fill(255,105,180);
	stroke(255,69,0);
	// text("town", 338,173);
	fill(139,0,0);
	stroke(255,0,255);
	// text("do", 58,202);
	fill(0,100,0);
	stroke(255,140,0);
	// text("?", 102,115);
	fill(160,82,45);
	stroke(0,128,0);
	// text("around", 189,84);
	fill(205,133,63);
	stroke(0,191,255);
	// text("Daisy", 7,314);
	fill(0,255,255);
	stroke(153,50,204);
	// text("will", 371,202);
	fill(127,255,0);
	stroke(32,178,170);
	// text("stare", 373,115);
	fill(0,128,0);
	stroke(255,165,0);
	// text("How", 500,173);
	fill(220,20,60);
	stroke(50,205,50);
	text("is", 471,84);
	fill(65,105,225);
	stroke(32,178,170);
	// text("much", 538,173);
	fill(138,43,226);
	stroke(199,21,133);
	// text("can", 56,143);
	fill(128,0,128);
	stroke(255,255,0);
	// text("?", 550,202);
	fill(240,128,128);
	stroke(153,50,204);
	// text("I", 358,115);
	fill(72,209,204);
	stroke(34,139,34);
	// text("My", 7,28);
	fill(176,224,230);
	stroke(0,128,0);
	// text("I", 41,143);
	fill(0,128,0);
	stroke(34,139,34);
	// text("at", 166,173);
	fill(123,104,238);
	stroke(139,69,19);
	// text("arms.", 309,115);
	stroke(139,0,139);
	// text("out", 103,173);
	fill(238,232,170);
	stroke(0,255,127);
	// text("x", 56,314);



}
