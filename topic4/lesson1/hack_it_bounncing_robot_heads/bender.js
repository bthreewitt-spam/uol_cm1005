function drawBender(xOffset, yOffset, r, g, b) {
    drawHead(xOffset, yOffset, r, g, b);
    drawLeg(xOffset-5,yOffset,r,g,b); //left
    drawLeg(xOffset+115,yOffset,r,g,b); //right
    drawLeftArm(xOffset, yOffset,r,g,b);
    drawRightArm(xOffset, yOffset, r,g,b);
    drawBody(xOffset, yOffset, r, g, b);
}

function drawFlexo(xOffset, yOffset, r, g, b) {
    drawBender(xOffset, yOffset, r, g, b);

    fill(49);
    strokeWeight(4);
    //shadow
    quad(xOffset+ 200 , yOffset + 425, xOffset + 185 , yOffset + 390,
        xOffset + 216, yOffset + 390, xOffset + 216, yOffset + 400);
    //main
    triangle(xOffset+ 200 , yOffset + 425,
        xOffset + 185 , yOffset + 390,
        xOffset + 215, yOffset + 390);
}

function drawHead(x, y, r, g, b) {
    strokeWeight(6);

    //robots head
    fill(r, g, b);
    rect(x+115, y+100, 175, 300, 100, 100, 0);

    //tip of antenna
    fill(r, g, b);
    ellipse(x+200, y+25, 30, 30); // top
    quad(x+195, y+40, x+205, y+40,
        x+210, y+100, x+190, y+100); // main

    //robots eye cover
    fill(r, g, b);
    strokeWeight(4);
    rect(x+90, y+190, 220, 90, 35); //outer
    fill(0);
    strokeWeight(6);
    rect(x+100, y+200, 200, 70, 30); //inner

    //robots eyes
    fill(249,250,215);
    ellipse(x+240, y+235, 75, 70); // right eye
    rect(x+237, y+235, 5, 5); // right pupil
    ellipse(x+160, y+235, 75, 70); // left eye
    rect(x+157, y+235, 5, 5); // left pupil

    //robots mouth
    strokeWeight(3);
    rect(x+130, y+320, 140, 60, 15);
    strokeWeight(2);

    //horizontal tooth lines
    line(x+130, y+340, x+270, y+340);
    line(x+130, y+360, x+270, y+360);

    //vertical tooth lines
    line(x+158, y+320, x+158, y+380);
    line(x+186, y+320, x+186, y+380);
    line(x+214, y+320, x+214, y+380);
    line(x+242, y+320, x+242, y+380);
}

function drawBody(x, y, r, g, b) {
    //set stroke/fill
    fill(r,g,b);
    strokeWeight(6)

    //main body
    beginShape();
    vertex(x+330, y+450);
    vertex(x+300, y+750);
    vertex(x+105, y+750);
    vertex(x+75, y+450);
    endShape();

    //top of body
    beginShape();
    bezier(x+75, y+450, x+195, y+475,
        x+210, y+475, x+330, y+450);
    vertex(x+115, y+400);
    vertex(x+290, y+400);
    vertex(x+330, y+450);
    endShape();

    //body door
    beginShape();
    bezier(x+260, y+510, x+280, y+510,
        x+280, y+510, x+280, y+525);
    bezier(x+280, y+525, x+266, y+690,
        x+267, y+700, x+255, y+700);
    bezier(x+255, y+ 700, x+140, y+700,
        x+135, y+710,x+133, y+690);
    bezier(x+133, y+690, x+120, y+510,
        x+120, y+510, x+140, y+511);
    bezier(x+140, y+511,x+140, y+511,
        x+140, y+511,x+260, y+510);
    endShape();

    //door handle
    strokeWeight(3);
    fill(r+30,g+30,b+30);
    ellipse(x+255, y+610, 10);
}

function drawLeg(x,y,r,g,b){
    // set stroke
    strokeWeight(6);

    //foot cup
    fill(r,g,b);
    arc(x+147.5, y+1045, 110, 110, PI, 0, CHORD);

    //set fill
    fill(r-40,g-40,b-40);

    //main leg
    beginShape();
    vertex(x+170, y+1000)
    vertex(x+170, y+750);
    vertex(x+125, y+750);
    vertex(x+125, y+1000);
    endShape();

    //foot cup line
    arc(x+147.5, y+997, 45, 15, 0, PI);

    //leg lines
    strokeWeight(4);
    noFill();
    arc(x+147.5, y+794, 45, 15, PI, 0);
    arc(x+147.5, y+841, 45, 15, PI, 0);
    arc(x+147.5, y+882, 45, 15, PI, 0);
    arc(x+147.5, y+927, 45, 15, PI, 0);
    arc(x+147.5, y+972, 45, 15, PI, 0);
}

function drawRightArm(x,y,r,g,b){
    //arm fill temporary fix FIXME: remove this once fill fixed
    noStroke();
    fill(r-40,g-40,b-40);
    quad(x+357, y+520, x+380,y+775, x+420, y+775, x+400, y+560);
    quad( x+345,y+475, x+356, y+475, x+400, y+600,x+360, y+605);
    quad( x+345,y+475, x+306, y+495, x+370, y+550,x+402, y+555);
    triangle(x+380,y+500, x+386, y+540, x+350, y+495);
    stroke(0);

    // arm cup
    fill(r,g,b);
    strokeWeight(5);

    let armCupRotation = 29.97;
    arc(x+330, y+495, 25, 60, armCupRotation, PI+armCupRotation);

    // fingers
    fill(r,g,b);
    strokeWeight(3);
    rect(x+370,y+809, 17,50, 5);
    rect(x+410,y+810, 17,50, 5);
    rect(x+395,y+820, 17,50, 5);

    // hand fill temp fix FIXME: remove this once fill fixed
    noStroke();
    fill(r,g,b);
    quad(x+371, y+780, x+430,y+780, x+440, y+820, x+360, y+820);
    stroke(0);

    // arm
    strokeWeight(6);

    beginShape(); // FIXME: Fix fill issue
    noFill();
    curve(x-150, y+490,x+340, y+470,x+420, y+775,x+420, y+680);
    bezier(x+337, y+520,x+370, y+550,x+370, y+680,x+380, y+775);
    bezier(x+380, y+775,x+370, y+680,x+370, y+550,x+337, y+520);

    bezier(x+380, y+775,x+390, y+780,x+410, y+780,x+420, y+775);

    endShape(CLOSE);

    // hand cup
    fill(r,g,b);
    strokeWeight(6);
    beginShape(); // FIXME: Fix fill issue
    bezier(x+420, y+775,x+430, y+790,x+430, y+780,x+440, y+820);
    bezier(x+380, y+775,x+370, y+790,x+370, y+780,x+360, y+820);
    bezier(x+440, y+820,x+410, y+830,x+390, y+830,x+360, y+820);
    endShape(CLOSE);

    // arm lines
    noFill();
    strokeWeight(4);
    arc(x+369, y+535, 40 , 12, 0 , PI);
    arc(x+397, y+740, 40 , 12, 0 , PI);
    arc(x+385, y+586, 40 , 12, 0 , PI);
    arc(x+391, y+637, 40 , 12, 0 , PI);
    arc(x+392, y+688, 40 , 12, 0 , PI);
}
function drawLeftArm(x,y,r,g,b){

    //arm fill temporary fix FIXME: remove this once fill fixed
    noStroke();
    fill(r-40,g-40,b-40);
    quad(x+17, y+520, x-20,y+775, x+20, y+775, x+50, y+560);
    quad( x+50,y+475, x+110, y+475, x+10, y+600,x-8, y+605);
    quad( x+65,y+475, x+31, y+495, x+3, y+555,x+20, y+555);
    triangle(x+30,y+500, x-7, y+700, x-7.5, y+595);
    stroke(0);

    // arm cup
    fill(r,g,b);
    strokeWeight(5);

    let armCupRotation = -29.97;
    arc(x+76, y+495, 25, 60, armCupRotation, PI+armCupRotation);

    // fingers
    fill(r,g,b);
    strokeWeight(3);
    rect(x-30,y+810, 17,50, 5);
    rect(x+15,y+809, 17,50, 5);
    rect(x-7,y+820, 17,50, 5);

    // hand fill temp fix FIXME: remove this once fill fixed
    noStroke();
    fill(r,g,b);
    quad(x-30, y+780, x+30,y+780, x+40, y+820, x-43, y+820);
    stroke(0);

    // arm
    strokeWeight(6);
    fill(r-40,g-40,b-40);

    beginShape(); // FIXME: Fix fill issue
    noFill();
    curve(x+550, y+490,x+66, y+470,x-20, y+775,x-20, y+680);
    bezier(x+69, y+520,x+37, y+550,x+37, y+680,x+20, y+775);
    // bezier(x+20, y+775,x+10, y+680,x+10, y+550,x-23, y+520);
    bezier(x+20, y+775,x+10, y+780,x-10, y+780,x-20, y+775);
    endShape(CLOSE);


    // hand cup
    fill(r,g,b);
    strokeWeight(6);
    beginShape(); // FIXME: Fix fill issue
    bezier(x+20, y+775,x+30, y+790,x+30, y+780,x+40, y+820);
    bezier(x-20, y+775,x-30, y+790,x-30, y+780,x-40, y+820);
    bezier(x+40, y+820,x-10, y+830,x+10, y+830,x-40, y+820);
    endShape(CLOSE);

// arm lines
    noFill();
    strokeWeight(4);
    arc(x+38, y+535, 40 , 12, 0 , PI);
    arc(x+7, y+740, 40 , 12, 0 , PI);
    arc(x+22, y+586, 40 , 12, 0 , PI);
    arc(x+14, y+637, 40 , 12, 0 , PI);
    arc(x+10, y+688, 40 , 12, 0 , PI);
}
