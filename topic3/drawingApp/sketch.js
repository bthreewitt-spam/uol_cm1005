let colorPicker;
let sizeUpButton, sizeDownButton, eraseButton, resetButton;
let brushStroke = 10, lastDrawStroke;
let erasing = false;
const backgroundColor = '#191A1A', menuColor = 0;

//FIXME: 1 Set all coords to %
//TODO: 6 create recent sketch menu

function setup() {
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
	background(backgroundColor);
	menuItems();
}
function draw() {
	menuBar();
	brushSizeView();
	setCursor();
	if(mouseIsPressed){mouseDragged();} //allows drawing if clicked and not dragged
	
}
function mouseDragged(){
	if(mouseX < windowWidth*.06 + 5 && mouseY < windowHeight*.4 + 5){return;}
	push();
	strokeWeight(brushStroke);
	if(erasing){stroke(backgroundColor);}
	else{
		stroke(colorPicker.color()); 
		noCursor();}
	line(pwinMouseX, pwinMouseY, mouseX, mouseY);
	pop();
}
function menuBar(){
	push();
	noStroke();
	fill(menuColor);
	rect(5,5,windowWidth*.06,windowHeight*.4, 10);
	pop();
}
function menuItems(){ 
	//TODO: 4 Make menu look pretty 
	//FIXME: 2 set minimum menu size
	
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
async function sizeUpButtonPressed(){
	while(mouseIsPressed) {
		if (brushStroke < 50) {
			brushStroke += 1;
		}
		await sleep(100);
	}
}
function brushSizeView(){
	push();
	noStroke();
	if(erasing){fill(backgroundColor);} else{fill(colorPicker.color());}
	ellipse(windowWidth*.035,windowHeight*.215,brushStroke);
	pop();
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
		colorPicker.color(backgroundColor); //FIXME: 5 leaves slight tracing in firefox
		lastDrawStroke = brushStroke;
		if(brushStroke<26){brushStroke *= 2;}else{brushStroke=60;}
		return;
	}
	erasing = false
	brushStroke = lastDrawStroke;
}
function resetButtonPressed(){
	if(erasing){eraseButtonPressed();} // stops erasing
	background(backgroundColor);
}
function setCursor(){
	if(mouseX < windowWidth*.06 + 5 && mouseY < windowHeight*.4 + 5) {cursor(ARROW);}
	else if(erasing){cursor('eraser.cur');}
	else {cursor(CROSS);}
}
function windowResized() { //FIXME: 3 allow window resizing without reset
	window.location.reload();
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
