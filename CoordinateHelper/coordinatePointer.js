function coordinatePointer(){
    if(mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) { //checks if mouse is in frame
        
    let textX = mouseX + 13;
    let textY = mouseY - 10;
    let rectX = mouseX + 10;
    let rectY = mouseY - 22;
    let textCoordinates = `${round(mouseX)},${round(mouseY)}`;
    let rectWidth = 7 * textCoordinates.length + 1;

    if(mouseY < 22) {rectY += 31; textY += 31;}
    if(mouseX > width - 70) {rectX -= 80; textX -= 80;}

        cursor('CoordinateHelper/crossHair.cur');
        fill(0);
        rect(rectX, rectY, rectWidth, 15, 5);
        fill(255);
        text(textCoordinates, textX, textY);
    }
}
