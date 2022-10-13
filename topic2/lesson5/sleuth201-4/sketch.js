/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 4747203
CaseNum: 201-3-92586699-4747203

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(360,214);
    vertex(375,215);
    vertex(395,232);
    vertex(475,229);
    vertex(495,205);
    vertex(562,183);
    vertex(594,195);
    vertex(628,237);
    vertex(660,288);
    vertex(690,231);
    vertex(718,248);
    vertex(668,328);
    vertex(620,304);
    vertex(603,491);
    vertex(582,495);
    vertex(570,573);
    vertex(455,573);
    vertex(510,264);
    vertex(386,260);
    vertex(351,225);
    endShape(CLOSE);

    //A helpful mouse pointer
	push();
        fill(255,0,0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
