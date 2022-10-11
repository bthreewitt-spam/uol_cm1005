// TODO: Finish me at some point
function setup()
{
	createCanvas(664, 682);
}
function draw()
{
    noStroke();
    
    fill(224, 209, 192);
    rect(10, 10, 645, 670);

    fill(209,179,125,175)
    beginShape();
    vertex(605, 10);
    vertex(655, 10);
    vertex(60, 680);
    vertex(10, 680);
    vertex(10,495);
    endShape();
    
    fill(80,136,133, 175);
	quad(129,10,232,10,655, 397, 655, 647);
    
    strokeWeight(1);
    stroke(27);
    fill(225,163,165,175);
    ellipse(260,202,130);
    
    strokeWeight(2);
    fill(193,29,47);
    ellipse(310,95,15);
    
    noStroke();
    fill(124,76,94,200);
    ellipse(450, 190, 80);
    
    fill(25);
    ellipse(400,220, 40);

    
}