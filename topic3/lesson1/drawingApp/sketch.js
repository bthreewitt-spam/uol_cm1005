const BACKGROUND_COLOR = '#2D2F2F', MENU_COLOR = '#191A1A', DEFAULT_BRUSH_COLOR = '#3584E4';
let menuX, menuY, menuWidth, menuHeight;
let colorPicker, colorPickerLabel;
let sizeUpButton, sizeDownButton, eraseButton, clearButton;
const MAX_BRUSH_STROKE = 50, DEFAULT_BRUSH_STROKE = 10, MIN_BRUSH_STROKE = 1;
let brushStroke = DEFAULT_BRUSH_STROKE, lastDrawStroke;
let currentlyErasing = false;

//TODO: create recent sketch menu
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
	if(mouseIsPressed){mouseDragged();} //allows drawing if clicked and not just dragged
}
function mouseDragged(){
	if(mouseX < menuWidth + menuX && mouseY < menuHeight + menuY){return;}
	push();
	strokeWeight(brushStroke);
	if(currentlyErasing){stroke(BACKGROUND_COLOR);}
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
	menuHeight = yPercent(34);
	
	push();
	noStroke();
	fill(MENU_COLOR);
	rect(menuX,menuY,menuWidth,menuHeight, 10);
	pop();
}
function menuItems(){ 
	//TODO: Make menu look pretty
	
	// color picker label
	colorPickerLabel = createImg('assets/colorPickerLabel.png', 'color picker');
	colorPickerLabel.position(xPercent(1), yPercent(2));
	colorPickerLabel.size(xPercent(5), yPercent(8));
	
	// color picker
	colorPicker = createColorPicker(DEFAULT_BRUSH_COLOR);
	colorPicker.position(xPercent(1.25), yPercent(4.5));
	colorPicker.size(xPercent(4.5),yPercent(5));

	// size up button	
	sizeUpButton = createImg('assets/plus.png', 'size up');
	sizeUpButton.position(xPercent(2.5), yPercent(12));
	sizeUpButton.size(xPercent(2),yPercent(2.75));
	sizeUpButton.mousePressed(sizeUpButtonEvent);
	
	// size down button
	sizeDownButton = createImg('assets/minus.png', 'size down');
	sizeDownButton.position(xPercent(2.5), yPercent(22));
	sizeDownButton.size(xPercent(2),yPercent(2.75));
	sizeDownButton.mousePressed(sizeDownButtonEvent);

	// erase button
	eraseButton = createImg('assets/erase.png', 'Erase');
	eraseButton.position(xPercent(1), yPercent(27));
	eraseButton.size(xPercent(5),yPercent(2.5));
	eraseButton.mousePressed(eraseButtonEvent);

	// clear button
	clearButton = createImg('assets/reset.png','Clear');
	clearButton.position(xPercent(1), yPercent(30.5));
	clearButton.size(xPercent(5),yPercent(2.5));
	clearButton.mousePressed(clearButtonEvent);
}
async function sizeUpButtonEvent(){
	while(mouseIsPressed) {
		if (brushStroke < MAX_BRUSH_STROKE) {
			brushStroke += 1;
		}
		await sleep(100);
	}
}
function brushSizeView(){
	push();
	noStroke();
	if(currentlyErasing){fill(BACKGROUND_COLOR);} else{fill(colorPicker.color());}
	ellipse(xPercent(3.5),yPercent(18.5),brushStroke);
	pop();
}
async function sizeDownButtonEvent() {
	while (mouseIsPressed) {
		if (brushStroke > MIN_BRUSH_STROKE) {
			brushStroke -= 1;
		}
		await sleep(100);
	}
}
function eraseButtonEvent(){ 
	if(!currentlyErasing){
		currentlyErasing = true;
		colorPicker.color(BACKGROUND_COLOR);
		lastDrawStroke = brushStroke;
		if(brushStroke<=MAX_BRUSH_STROKE/2){brushStroke *= 2;}
		else{brushStroke=MAX_BRUSH_STROKE;}
		return;
	}
	currentlyErasing = false;
	brushStroke = lastDrawStroke;
}
function clearButtonEvent(){
	if(currentlyErasing){eraseButtonEvent();} // stops erasing
	brushStroke = DEFAULT_BRUSH_STROKE;
	background(BACKGROUND_COLOR);
}
function setCursor(){
	if(mouseX < menuWidth + menuX && mouseY < menuHeight + menuY) {cursor(ARROW);}
	else if(currentlyErasing){cursor('assets/eraser.cur');}
	else {cursor(CROSS);}
}
function windowResized() { //FIXME: allow window resizing without reset
	window.location.reload();
}
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
function xPercent(percent){return percent / 100 * windowWidth;}
function yPercent(percent){return percent / 100 * windowHeight;}
