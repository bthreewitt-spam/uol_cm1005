const BACKGROUND_COLOR = '#191A1A', MENU_COLOR = 0, DEFAULT_BRUSH_COLOR = '#2a84c5';
let menuX, menuY, menuWidth, menuHeight;
let colorPicker;
let sizeUpButton, sizeDownButton, eraseButton, resetButton;
let maxBrushStroke = 50, defaultBrushStroke = 10, minBrushStroke = 1;
let brushStroke = defaultBrushStroke, lastDrawStroke;
let erasing = false;
//FIXME: 1 set text sizing or switch to pictures
//TODO: 1.5 add label to color picker
//TODO: 6 create recent sketch menu
function setup() {
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
	background(BACKGROUND_COLOR);
	menuItems();
}
function draw() {
	menuBar();
	brushSizeView();
	setCursor();
	if(mouseIsPressed){mouseDragged();} //allows drawing if clicked and not dragged
}
function mouseDragged(){
	if(mouseX < menuWidth + menuX && mouseY < menuHeight + menuY){return;}
	push();
	strokeWeight(brushStroke);
	if(erasing){stroke(BACKGROUND_COLOR);}
	else{
		stroke(colorPicker.color()); 
		noCursor();}
	line(pwinMouseX, pwinMouseY, mouseX, mouseY);
	pop();
}
function menuBar(){
	menuX = xPercent(.5);
	menuY = yPercent(.5);
	menuWidth = xPercent(6);
	menuHeight = yPercent(40);
	
	push();
	noStroke();
	fill(MENU_COLOR);
	rect(menuX,menuY,menuWidth,menuHeight, 10);
	pop();
}
function menuItems(){ 
	//TODO: 4 Make menu look pretty 
	//FIXME: 2 set minimum menu size
	
	// color picker
	colorPicker = createColorPicker(DEFAULT_BRUSH_COLOR);
	colorPicker.position(xPercent(1), yPercent(1));
	colorPicker.size(xPercent(5),yPercent(10));

	// size up button
	sizeUpButton = createButton('+');
	sizeUpButton.position(xPercent(2.5), yPercent(15));
	sizeUpButton.size(xPercent(2),yPercent(3));
	sizeUpButton.mousePressed(sizeUpButtonEvent);
	
	// size down button
	sizeDownButton = createButton('-');
	sizeDownButton.position(xPercent(2.5), yPercent(25));
	sizeDownButton.size(xPercent(2),yPercent(3));
	sizeDownButton.mousePressed(sizeDownButtonEvent);

	// erase button
	eraseButton = createButton('Erase');
	eraseButton.position(xPercent(1), yPercent(30));
	eraseButton.size(xPercent(5),yPercent(3));
	eraseButton.mousePressed(eraseButtonEvent);

	// reset button
	resetButton = createButton('Clear');
	resetButton.position(xPercent(1), yPercent(35));
	resetButton.size(xPercent(5),yPercent(3));
	resetButton.mousePressed(resetButtonEvent);
}
async function sizeUpButtonEvent(){
	while(mouseIsPressed) {
		if (brushStroke < maxBrushStroke) {
			brushStroke += 1;
		}
		await sleep(100);
	}
}
function brushSizeView(){
	push();
	noStroke();
	if(erasing){fill(BACKGROUND_COLOR);} else{fill(colorPicker.color());}
	ellipse(xPercent(3.5),yPercent(21.5),brushStroke);
	pop();
}
async function sizeDownButtonEvent() {
	while (mouseIsPressed) {
		if (brushStroke > minBrushStroke) {
			brushStroke -= 1;
		}
		await sleep(100);
	}
}
function eraseButtonEvent(){ 
	if(!erasing){
		erasing = true;
		colorPicker.color(BACKGROUND_COLOR); //FIXME: 5 leaves slight tracing in firefox
		lastDrawStroke = brushStroke;
		if(brushStroke<=maxBrushStroke/2){brushStroke *= 2;}
		else{brushStroke=maxBrushStroke;}
		return;
	}
	erasing = false;
	brushStroke = lastDrawStroke;
}
function resetButtonEvent(){
	if(erasing){eraseButtonEvent();} // stops erasing
	brushStroke = defaultBrushStroke;
	background(BACKGROUND_COLOR);
}
function setCursor(){
	if(mouseX < menuWidth + menuX && mouseY < menuHeight + menuY) {cursor(ARROW);}
	else if(erasing){cursor('eraser.cur');}
	else {cursor(CROSS);}
}
function windowResized() { //FIXME: 3 allow window resizing without reset
	window.location.reload();
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function xPercent(percent){return percent / 100 * windowWidth;}
function yPercent(percent){return percent / 100 * windowHeight;}
