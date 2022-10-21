let gameChar_x = 0;
let gameChar_y = 0;

 // fixme: height to 31 w to 30 on top mask
function setup(){
    createCanvas(400, 600);
}

function draw(){
    background(255);

    //////////////////////////1////////////////////////////
    stroke(100);
    noFill();
    rect(20,60,50,80);
    noStroke();
    fill(0);
    text("1. standing front facing", 20, 160);

    gameChar_x = 45;
    gameChar_y = 137;
    //////////////////code goes here///////////////////////
    
    fill(30);
    arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body
    
    stroke(30);
    strokeWeight(5)
    line(gameChar_x-5, gameChar_y-2, gameChar_x-5, gameChar_y-12);//left leg
    line(gameChar_x+5, gameChar_y-2, gameChar_x+5, gameChar_y-12);//right leg
    line(gameChar_x-11, gameChar_y-20, gameChar_x-8, gameChar_y-35); //left arm
    line(gameChar_x+11, gameChar_y-20, gameChar_x+8, gameChar_y-35); //right arm
    noStroke();
    
    push();
    fill(253, 209, 167);
    ellipse(gameChar_x, gameChar_y-50, 30); // head
    pop();
    
    arc(gameChar_x, gameChar_y-50, 29, 30, PI+.25, -.25, CHORD); //top of mask
    arc(gameChar_x, gameChar_y-50, 30, 31, .25, PI, CHORD); //bottom of mask
    
    fill(0);
    ellipse(gameChar_x - 5 , gameChar_y-51, 4); // left eye
    ellipse(gameChar_x + 5 , gameChar_y-51, 4); // right eye
    
    //////////////////////////2////////////////////////////
    stroke(100);
    noFill();
    rect(200,60,50,80);
    noStroke();
    fill(0);
    text("2. jumping facing forwards", 200, 160);

    gameChar_x = 225;
    gameChar_y = 137;
    //////////////////code goes here///////////////////////

    fill(30);
    arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

    stroke(30);
    strokeWeight(5)
    line(gameChar_x-8, gameChar_y-2, gameChar_x-5, gameChar_y-12);//left leg
    line(gameChar_x+8, gameChar_y-2, gameChar_x+5, gameChar_y-12);//right leg
    line(gameChar_x-17, gameChar_y-45, gameChar_x-8, gameChar_y-35); //left arm
    line(gameChar_x+17, gameChar_y-45, gameChar_x+8, gameChar_y-35); //right arm
    noStroke();

    push();
    fill(253, 209, 167);
    ellipse(gameChar_x, gameChar_y-50, 30); // head
    pop();

    arc(gameChar_x, gameChar_y-50, 29, 30, PI+.25, -.25, CHORD); //top of mask
    arc(gameChar_x, gameChar_y-50, 30, 31, .25, PI, CHORD); //bottom of mask

    fill(0);
    ellipse(gameChar_x - 5 , gameChar_y-51, 4); // left eye
    ellipse(gameChar_x + 5 , gameChar_y-51, 4); // right eye
    
    //////////////////////////3////////////////////////////
    stroke(100);
    noFill();
    rect(20,260,50,80);
    noStroke();
    fill(0);
    text("3. Walking left", 20, 360);

    gameChar_x = 45;
    gameChar_y = 337;
    //////////////////code goes here///////////////////////

    fill(30);
    arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

    stroke(30);
    strokeWeight(5)
    line(gameChar_x-4, gameChar_y-2, gameChar_x-4, gameChar_y-12);//left leg
    line(gameChar_x+3, gameChar_y-2, gameChar_x+3, gameChar_y-12);//right leg
    line(gameChar_x+11, gameChar_y-20, gameChar_x+7, gameChar_y-35); //right arm
    noStroke();

    push();
    fill(253, 209, 167);
    ellipse(gameChar_x, gameChar_y-50, 30); // head
    pop();

    arc(gameChar_x, gameChar_y-50, 29, 30, PI+.25, -.25, CHORD); //top of mask
    arc(gameChar_x, gameChar_y-50, 29, 31, -.5, PI-.15, CHORD); //bottom of mask

    fill(0);
    ellipse(gameChar_x - 11 , gameChar_y-51, 4); // left eye
    
    //////////////////////////4////////////////////////////
    stroke(100);
    noFill();
    rect(200,260,50,80);
    noStroke();
    fill(0);
    text("4. Walking right", 200, 360);

    gameChar_x = 225;
    gameChar_y = 337;
    //////////////////code goes here///////////////////////
    fill(30);
    arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

    stroke(30);
    strokeWeight(5)
    line(gameChar_x-3, gameChar_y-2, gameChar_x-3, gameChar_y-12);//left leg
    line(gameChar_x+4, gameChar_y-2, gameChar_x+4, gameChar_y-12);//right leg
    line(gameChar_x-11, gameChar_y-20, gameChar_x-8, gameChar_y-35); //left arm
    noStroke();

    push();
    fill(253, 209, 167);
    ellipse(gameChar_x, gameChar_y-50, 30); // head
    pop();

    arc(gameChar_x, gameChar_y-50, 29, 30, PI+.25, -.25, CHORD); //top of mask
    arc(gameChar_x, gameChar_y-50, 30, 31, +.15, PI+.5, CHORD); //bottom of mask

    fill(0);
    ellipse(gameChar_x + 11 , gameChar_y-51, 4); // right eye

    //////////////////////////5////////////////////////////
    stroke(100);
    noFill();
    rect(20,460,50,80);
    noStroke();
    fill(0);
    text("5. Jumping to the right", 20, 560);

    gameChar_x = 45;
    gameChar_y = 537;
    //////////////////code goes here///////////////////////

    fill(30);
    arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

    stroke(30);
    strokeWeight(5)
    line(gameChar_x-8, gameChar_y-2, gameChar_x-3, gameChar_y-12);//right leg
    line(gameChar_x+11, gameChar_y-4, gameChar_x+4, gameChar_y-12);//left leg
    line(gameChar_x-14, gameChar_y-20, gameChar_x-8, gameChar_y-35); //right arm
    noStroke();

    push();
    fill(253, 209, 167);
    ellipse(gameChar_x, gameChar_y-50, 30); // head
    pop();

    arc(gameChar_x, gameChar_y-50, 29, 30, PI+.25, -.25, CHORD); //top of mask
    arc(gameChar_x, gameChar_y-50, 30, 31, +.15, PI+.5, CHORD); //bottom of mask

    fill(0);
    ellipse(gameChar_x + 11 , gameChar_y-51, 4); // right eye

    //////////////////////////6////////////////////////////
    stroke(100);
    noFill();
    rect(200,460,50,80);
    noStroke();
    fill(0);
    text("6. Jumping to the left", 200, 560);

    gameChar_x = 225;
    gameChar_y = 537;
    //////////////////code goes here///////////////////////    

    fill(30);
    arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD); // body

    stroke(30);
    strokeWeight(5)
    line(gameChar_x+8, gameChar_y-2, gameChar_x+3, gameChar_y-12);//left leg
    line(gameChar_x-11, gameChar_y-4, gameChar_x-4, gameChar_y-12);//right leg
    line(gameChar_x+14, gameChar_y-20, gameChar_x+8, gameChar_y-35); //left arm
    noStroke();

    push();
    fill(253, 209, 167);
    ellipse(gameChar_x, gameChar_y-50, 30); // head
    pop();

    arc(gameChar_x, gameChar_y-50, 29, 30, PI+.25, -.25, CHORD); //top of mask
    arc(gameChar_x, gameChar_y-50, 29, 31, -.5, PI-.15, CHORD); //bottom of mask

    fill(0);
    ellipse(gameChar_x - 11 , gameChar_y-51, 4); // left eye
}