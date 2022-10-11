

function setup() 
{
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(1024, 720);

}

function draw()
{
    background(200, 0 ,0 );
    noStroke();

    fill(204, 200, 192, 127);
    
    triangle(18, 18, 18, 360, 81, 360);

    rect(400, 81, 200, 63);

    quad(189, 18, 216, 50, 216, 360, 144, 360);

    fill(0, 0, 0 );
    ellipse(252, 144, 150, 150);

    fill(204, 200, 192, 127);
    triangle(288, 18, 351, 360, 288, 360); 

    arc(479, 300, 280, 280, PI, TWO_PI);
}
