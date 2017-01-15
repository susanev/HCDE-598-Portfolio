//When we add the background function, the pixels return to its original state, the background color. When we remove the function, the pixels remain the color it became so it looks like the robot is dragging across the screen.

function setup() {
  createCanvas(720, 480);
  smooth();
  strokeWeight(2); //Sets thickness of line to 2
}

function draw(){
  background(205);
  translate(mouseX,mouseY);

  // Neck
  stroke(102);
  line(266, 257, 266, 162); //draws first line of the neck. First number changes how far the bottom of line is from the vertical side. Second number changes where bottom of line starts from horizontal side  
  line(276, 257, 276, 162); //draws second line of neck.
  line(286, 257, 286, 162); //draws third line of neck
  
  //Antennae
  stroke(102);
  line(276, 155, 246, 112); // draws the antennae lines.
  line(276, 155, 306, 56);
  line(276, 155, 342, 170);
  
  //Body
  noStroke()
  fill(244, 215, 66)
  ellipse(264, 377, 66, 66);
  fill(244, 66, 66);
  rect(219, 257, 90, 120);
  fill(244, 215, 66);
  rect(219, 274, 90, 6);
  
  //Head
  fill(244, 215, 66);
  ellipse(276, 155, 90, 90);
  fill(255);
  ellipse(288, 150, 28, 28);
  fill(0);
  ellipse(288, 150, 6, 6);
  fill(244, 66, 182);
  
}