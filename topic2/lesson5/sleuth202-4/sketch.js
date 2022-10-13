/*

Officer: 4747203
CaseNum: 202-3-73247746-4747203

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dodger Blue filled text with a Spring Green outline in Melissa font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(677,583);
	textSize(34);
}

function draw()
{
	background(255);

	fill(154,205,50);
	stroke(25,25,112);
	textFont(RonsFont);
	// text("not", 320,102);
	fill(255,99,71);
	stroke(46,139,87);
	// text("hould", 382,221);
	fill(218,112,214);
	stroke(128,0,128);
	textFont(Ballpointprint);
	// text("I'm", 242,102);
	fill(0,0,139);
	stroke(124,252,0);
	// text("x", 97,483);
	push();
	fill(153,50,204);
	stroke(0,128,0);
	textFont(Melissa);
	// text("you", 410,263);
	pop();
	stroke(255,165,0);
	textFont(Diggity);
	// text("and", 107,263);
	fill(238,130,238);
	stroke(0,0,255);
	// text("out.", 292,263);
	fill(178,34,34);
	stroke(0,255,255);
	// text("Forever", 8,415);
	fill(255,69,0);
	stroke(255,165,0);
	textFont(RonsFont);
	// text("can", 264,184);
	push();
	fill(255,165,0);
	stroke(255,140,0);
	textFont(Melissa);
	// text("Are", 14,102);
	pop();
	fill(0,191,255);
	textFont(Diggity);
	// text("short", 448,263);
	fill(173,216,230);
	stroke(0,139,139);
	// text("The", 202,144);
	fill(255,0,0);
	stroke(255,69,0);
	textFont(Ballpointprint);
	// text("safe", 25,347);
	stroke(128,128,0);
	textFont(Diggity);
	// text("of", 520,263);
	push();
	fill(25,25,112);
	stroke(0,139,139);
	textFont(RonsFont);
	// text("?", 178,144);
	pop();
	fill(255,105,180);
	// text("sure", 377,102);
	fill(30,144,255);
	stroke(0,255,127);
	textFont(Melissa);
	text("cash", 288,306);
	text("avoid", 93,102);
	push();
	fill(219,112,147);
	stroke(0,0,205);
	textFont(Ballpointprint);
	// text("silence.", 403,144);
	pop();
	text("guard", 9,184);
	text("go", 470,221);
	text("the", 364,144);
	fill(135,206,235);
	stroke(178,34,34);
	textFont(RonsFont);
	// text("longer", 364,184);
	fill(0,255,255);
	stroke(32,178,170);
	textFont(Ballpointprint);
	// text("secrets,", 255,144);
	fill(139,0,0);
	stroke(148,0,211);
	textFont(Diggity);
	// text("away", 500,221);
	fill(138,43,226);
	stroke(0,0,128);
	textFont(Ballpointprint);
	// text("take", 106,144);
	push();
	fill(0,255,255);
	stroke(220,20,60);
	textFont(Melissa);
	// text("ing", 141,102);
	pop();
	stroke(199,21,133);
	textFont(Diggity);
	// text("a", 609,221);
	fill(0,128,128);
	stroke(0,191,255);
	textFont(RonsFont);
	// text("how", 438,102);
	fill(255,215,0);
	stroke(255,69,0);
	textFont(Ballpointprint);
	// text("Are", 345,263);
	push();
	fill(178,34,34);
	stroke(139,0,139);
	textFont(Melissa);
	// text("are", 560,144);
	pop();
	fill(123,104,238);
	textFont(RonsFont);
	// text("I", 131,306);
	fill(147,112,219);
	stroke(178,34,34);
	textFont(Melissa);
	// text("?", 101,347);
	push();
	fill(30,144,255);
	stroke(0,255,127);
	text("for", 571,221);
	pop();
	stroke(0,128,0);
	textFont(RonsFont);
	// text("?", 218,102);
	fill(255,140,0);
	stroke(255,69,0);
	textFont(Diggity);
	// text("Bob,", 141,34);
	push();
	fill(0,255,255);
	stroke(154,205,50);
	textFont(Melissa);
	// text("money", 557,263);
	pop();
	fill(0,139,139);
	// text("can", 161,306);
	fill(244,164,96);
	stroke(0,0,255);
	textFont(Ballpointprint);
	// text("Is", 341,306);
	fill(199,21,133);
	stroke(210,105,30);
	textFont(RonsFont);
	// text("relationship", 441,306);
	stroke(220,20,60);
	// text("can", 48,144);
	fill(135,206,250);
	stroke(75,0,130);
	// text("much", 500,102);
	fill(255,255,0);
	stroke(128,0,128);
	textFont(Melissa);
	// text("delays.", 153,221);
	fill(0,100,0);
	stroke(128,0,0);
	textFont(Ballpointprint);
	// text("so,", 87,306);
	fill(139,69,19);
	stroke(25,25,112);
	textFont(RonsFont);
	// text("sometimes.", 88,184);
	fill(173,255,47);
	stroke(107,142,35);
	textFont(Diggity);
	// text("this", 209,263);
	push();
	fill(0,139,139);
	stroke(46,139,87);
	textFont(RonsFont);
	// text("Daisy", 19,483);
	pop();
	fill(50,205,50);
	stroke(128,0,0);
	textFont(Ballpointprint);
	// text("My", 19,34);
	fill(176,224,230);
	stroke(0,128,0);
	textFont(RonsFont);
	// text("no", 322,184);
	fill(34,139,34);
	stroke(128,0,0);
	textFont(Melissa);
	// text("ed", 59,184);
	fill(30,144,255);
	stroke(0,255,127);
	text("you", 55,102);
	fill(25,25,112);
	stroke(184,134,11);
	textFont(Ballpointprint);
	// text("these", 531,184);
	fill(165,42,42);
	stroke(0,250,154);
	textFont(Diggity);
	// text("ignore", 458,184);
	fill(34,139,34);
	stroke(139,69,19);
	textFont(Ballpointprint);
	// text("?", 21,306);
	fill(0,139,139);
	stroke(160,82,45);
	textFont(Diggity);
	// text("You", 509,144);
	fill(0,206,209);
	stroke(218,165,32);
	textFont(Melissa);
	// text("we", 332,221);
	fill(255,99,71);
	stroke(0,100,0);
	textFont(Diggity);
	// text("I", 247,184);
	fill(199,21,133);
	stroke(139,69,19);
	textFont(Melissa);
	// text("sort", 159,263);
	fill(100,149,237);
	stroke(0,128,128);
	textFont(Ballpointprint);
	// text("our", 393,306);
	push();
	fill(255,255,0);
	stroke(160,82,45);
	textFont(Diggity);
	// text("me", 174,102);
	pop();
	fill(154,205,50);
	textFont(Melissa);
	// text("darling", 73,34);
	fill(220,20,60);
	stroke(139,0,0);
	textFont(RonsFont);
	// text("s", 368,221);
	fill(255,127,80);
	stroke(255,215,0);
	textFont(Diggity);
	// text("all", 261,263);
	fill(128,0,0);
	stroke(178,34,34);
	textFont(RonsFont);
	// text("so", 598,144);
	fill(255,99,71);
	stroke(0,250,154);
	textFont(Melissa);
	// text("If", 59,306);
	fill(176,224,230);
	stroke(0,0,205);
	textFont(Ballpointprint);
	// text("more", 580,102);
	fill(184,134,11);
	stroke(128,0,0);
	textFont(RonsFont);
	// text("Perhaps", 224,221);
	fill(240,230,140);
	stroke(139,69,19);
	textFont(Ballpointprint);
	// text("yours,", 106,415);
	fill(222,184,135);
	stroke(139,0,0);
	textFont(RonsFont);
	// text("I", 18,144);
	fill(127,255,0);
	stroke(255,0,255);
	// text("break", 18,263);
	push();
	fill(184,134,11);
	stroke(0,128,0);
	// text("continual", 18,221);
	pop();
	fill(106,90,205);
	stroke(210,105,30);
	// text("send", 211,306);



}
