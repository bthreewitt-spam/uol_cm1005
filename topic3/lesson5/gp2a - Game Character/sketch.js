let gameChar_x = 0;
let gameChar_y = 0;

function setup(){
    createCanvas(400, 600);
}

function draw(){
    background(255);


    stroke(100);
    noFill();
    rect(20,60,50,80);
    noStroke();
    fill(0);
    text("1. standing front facing", 20, 160);

    gameChar_x = 45;
    gameChar_y = 137;

    //Front facing - code goes here
    // body
    fill(30)
    arc(gameChar_x, gameChar_y-25, 20, 40, PI-1, 1, CHORD);
    //legs
    stroke(30);
    strokeWeight(5)
    line(gameChar_x-5, gameChar_y-2, gameChar_x-5, gameChar_y-12);//left
    line(gameChar_x+5, gameChar_y-2, gameChar_x+5, gameChar_y-12);//right
    //arms
    line(gameChar_x-11, gameChar_y-20, gameChar_x-8, gameChar_y-35); //left
    line(gameChar_x+11, gameChar_y-20, gameChar_x+8, gameChar_y-35); //right
    noStroke();
    // head
    push();
    fill(253, 209, 167);
    ellipse(gameChar_x, gameChar_y-50, 30);
    pop();
    arc(gameChar_x, gameChar_y-50, 29, 30, PI+.25, -.25, CHORD);
    arc(gameChar_x, gameChar_y-50, 30, 31, .25, PI, CHORD);
    fill(0);
    ellipse(gameChar_x - 5 , gameChar_y-51, 4); // left eye
    ellipse(gameChar_x + 5 , gameChar_y-51, 4); // right eye



    stroke(100);
    noFill();
    rect(200,60,50,80);
    noStroke();
    fill(0);
    text("2. jumping facing forwards", 200, 160);

    gameChar_x = 225;
    gameChar_y = 137;

    //Jumping forward - code goes here

    
    
    
    stroke(100);
    noFill();
    rect(20,260,50,80);
    noStroke();
    fill(0);
    text("3. Walking left", 20, 360);

    gameChar_x = 45;
    gameChar_y = 337;

    //Walking left - code goes here


    
    
    stroke(100);
    noFill();
    rect(200,260,50,80);
    noStroke();
    fill(0);
    text("4. Walking right", 200, 360);

    gameChar_x = 225;
    gameChar_y = 337;

    //Walking right - code goes here


    
    
    stroke(100);
    noFill();
    rect(20,460,50,80);
    noStroke();
    fill(0);
    text("5. Jumping to the right", 20, 560);

    gameChar_x = 45;
    gameChar_y = 537;

    //Jumping right - code goes here




    stroke(100);
    noFill();
    rect(200,460,50,80);
    noStroke();
    fill(0);
    text("6. Jumping to the left", 200, 560);

    gameChar_x = 225;
    gameChar_y = 537;

    //Jumping left - code goes here
    
    
    
    
}