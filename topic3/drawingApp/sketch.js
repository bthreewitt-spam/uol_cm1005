let colorPicker;
let sizeUpButton, sizeDownButton, eraseButton, resetButton;
let brushStroke = 10, lastDrawStroke;
let erasing = false;
let backgroundColor = '#191A1A', menuColor = 0;

//FIXME: Set all coords to %
//TODO: add recent sketches

function setup()
{
	createCanvas(windowWidth, windowHeight);
	cursor(CROSS)
	background(backgroundColor);
	menu();
}
function draw()
{
	//allows drawing if clicked and not dragged
	if(mouseIsPressed){mouseDragged();}
	
	//allows brush size view on menu to size down
	push();
	noStroke();
	// resets background of ellipse
	fill(menuColor);
	ellipse(windowWidth * .035, windowHeight * .215, brushStroke * 1.2 + 1);
	// draws brush size view
	if(erasing){fill(backgroundColor);} else{fill(colorPicker.color());}
	ellipse(windowWidth*.035,windowHeight*.215,brushStroke);
	pop();
}
function menu(){ 
	//TODO: Make menu look pretty 
	//FIXME: set minimum menu size
	
	// menu bar
	push();
	strokeWeight(3);
	fill(menuColor);
	rect(5,5,windowWidth*.06,windowHeight*.4, 10);
	pop();

	// color picker
	colorPicker = createColorPicker('#2a84c5');
	colorPicker.position(10, 15);
	colorPicker.size(windowWidth*.05,windowHeight*.1);

	// size up button
	sizeUpButton = createButton('+');
	sizeUpButton.position(windowWidth*.024, windowHeight*.15);
	sizeUpButton.size(windowWidth*.02,windowHeight*.03);
	sizeUpButton.mousePressed(sizeUpButtonPressed);

	// size down button
	sizeDownButton = createButton('-');
	sizeDownButton.position(windowWidth*.024, windowHeight*.25);
	sizeDownButton.size(windowWidth*.02,windowHeight*.03);
	sizeDownButton.mousePressed(sizeDownButtonPressed);

	// erase button
	eraseButton = createButton('Erase');
	eraseButton.position(10, windowHeight*.315);
	eraseButton.size(windowWidth*.05,windowHeight*.03);
	eraseButton.mousePressed(eraseButtonPressed);

	// reset button
	resetButton = createButton('Clear');
	resetButton.position(10, windowHeight*.35);
	resetButton.size(windowWidth*.05,windowHeight*.03);
	resetButton.mousePressed(resetButtonPressed);
}
function mouseDragged(){
	//makes sure it's not drawing over the menu FIXME: can still draw over menu in some cases
	if(mouseX < windowWidth*.06 + 5 && mouseY < windowHeight*.4 + 5 
		&& pmouseX < windowWidth*.06 + 5 && pmouseY < windowHeight*.4 + 5) {return;} 
	
	strokeWeight(brushStroke);
	if(erasing){stroke(backgroundColor);}
	else{stroke(colorPicker.color());}
	
	line(pwinMouseX, pwinMouseY, mouseX, mouseY);
}
async function sizeUpButtonPressed(){
	while(mouseIsPressed) {
		if (brushStroke < 50) {
			brushStroke += 1;
		}
		await sleep(100);
	}
}
async function sizeDownButtonPressed() {
	while (mouseIsPressed) {
		if (brushStroke > 1) {
			brushStroke -= 1;
		}
		await sleep(100);
	}
}
function eraseButtonPressed(){ 
	if(!erasing){
		erasing = true;
		cursor('eraser.cur');
		colorPicker.color(backgroundColor); //FIXME: leaves slight tracing in firefox
		lastDrawStroke = brushStroke;
		if(brushStroke<26){brushStroke *= 2;}else{brushStroke=60;}
		return;
	}
	erasing = false
	cursor(CROSS);
	
	push();//fixes background issue after stop erasing
	noStroke();
	fill(menuColor);
	ellipse(windowWidth * .035, windowHeight * .215, brushStroke * 1.2 + 1);
	pop();
	
	brushStroke = lastDrawStroke;
}
function resetButtonPressed(){
	window.location.reload();
}
function windowResized() { //FIXME: allow window resizing without reset
	window.location.reload();
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}