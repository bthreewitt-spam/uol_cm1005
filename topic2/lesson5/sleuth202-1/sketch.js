/*

Officer: 4747203
CaseNum: 202-0-60466361-4747203

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Deep Sky Blue text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(580,456);
	textFont(letterFont);
	textSize(25);
}

function draw()
{
	background(255);

	fill(186,85,211);
	text("lovely", 53,25);
	fill(184,134,11);
	text("music", 14,132);
	fill(160,82,45);
	text("unny", 332,132);
	text("green", 172,246);
	fill(176,224,230);
	text("Daisy,", 115,25);
	fill(127,255,212);
	text("From", 511,132);
	fill(72,209,204);
	text("of", 15,246);
	text("can", 398,218);
	fill(147,112,219);
	text("saw", 267,164);
	fill(135,206,235);
	text("e,", 449,164);
	fill(0,100,0);
	text("I", 367,218);
	text("n.", 342,271);
	fill(144,238,144);
	text("of", 70,132);
	fill(210,105,30);
	text("blessed", 448,105);
	fill(220,20,60);
	text("nfession", 176,75);
	text("harp.", 148,132);
	fill(178,34,34);
	text("in", 429,132);
	fill(219,112,147);
	text("and", 68,321);
	fill(255,99,71);
	text("are", 244,132);
	fill(255,140,0);
	text("the", 104,132);
	fill(138,43,226);
	text("ove.", 69,218);
	fill(0,206,209);
	text("fac", 419,164);
	fill(107,142,35);
	text("?", 263,75);
	text("knew", 16,192);
	fill(0,250,154);
	text("true", 17,218);
	fill(240,128,128);
	text("is", 328,75);
	fill(123,104,238);
	text("arling,", 108,246);
	text("alive", 81,271);
	text("a", 138,75);
	fill(186,85,211);
	text("I", 182,271);
	fill(128,0,128);
	text("chose", 295,271);
	fill(255,255,0);
	text("hear", 199,105);
	fill(244,164,96);
	text("your", 310,164);
	text("one", 499,192);
	text("few", 186,192);
	fill(154,205,50);
	text("I", 168,105);
	fill(238,130,238);
	text("d", 96,246);
	fill(75,0,130);
	text("eyes.", 239,246);
	text("You", 201,132);
	text("Oh", 14,25);
	fill(205,133,63);
	text("I", 236,164);
	text("you", 363,192);
	fill(0,0,205);
	text("your", 49,246);
	fill(255,0,255);
	text("those", 127,192);
	fill(218,112,214);
	text("Love", 14,321);
	fill(139,69,19);
	text("ate,", 321,218);
	fill(128,0,128);
	text("kisses,", 112,321);
	fill(173,216,230);
	text("that", 190,164);
	text("the", 19,105);
	text("seconds", 238,192);
	fill(238,130,238);
	text("person", 15,271);
	fill(25,25,112);
	text("our", 232,218);
	fill(240,230,140);
	text("s", 324,132);
	fill(107,142,35);
	text("I", 415,75);
	fill(219,112,147);
	text("that", 136,271);
	fill(64,224,208);
	text("d", 309,218);
	fill(255,69,0);
	text("the", 420,246);
	fill(255,215,0);
	text("your", 248,271);
	fill(255,165,0);
	text("one", 494,75);
	fill(0,128,0);
	text("x", 62,371);
	text("l", 357,164);
	fill(255,215,0);
	text("be", 381,246);
	fill(219,112,147);
	text("only", 438,218);
	fill(218,112,214);
	text("Bob", 14,371);
	fill(0,255,255);
	text("think", 483,218);
	fill(0,128,0);
	text("that", 317,192);
	fill(152,251,152);
	text("voice", 300,105);
	text("Ever", 116,218);
	fill(250,128,114);
	text("I", 63,75);
	text("in", 537,75);
	fill(123,104,238);
	text("day", 383,132);
	fill(30,144,255);
	text("moment", 117,164);
	fill(0,255,255);
	text("the", 404,105);
	fill(0,128,0);
	text("since", 174,218);
	fill(0,191,255);
	text("April", 458,132);
	text("first", 63,164);
	text("It", 291,75);
	text("make", 94,75);
	fill(0,255,127);
	text("when", 356,75);
	fill(152,251,152);
	text("my", 462,192);
	fill(65,105,225);
	text("were", 403,192);
	text("am", 446,75);
	text("the", 19,164);
	fill(210,105,30);
	text("my", 287,132);
	fill(238,130,238);
	text("must", 333,246);
	text("last", 268,218);
	fill(139,69,19);
	text("quiet", 63,105);
	fill(65,105,225);
	text("I", 302,246);
	fill(255,127,80);
	text("al", 481,75);
	fill(238,130,238);
	text("that", 122,105);
	text("co", 161,75);
	text("am", 213,271);
	fill(0,0,128);
	text("May", 14,75);
	fill(250,128,114);
	text("like", 357,105);
	fill(135,206,250);
	text("luckiest", 464,246);
	fill(0,0,128);
	text("ovely", 361,164);
	fill(106,90,205);
	text("from", 74,192);
	fill(0,0,128);
	text("l", 65,218);
	fill(173,255,47);
	text("your", 253,105);
	text("I", 480,164);



}
