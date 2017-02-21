// Created by Lulu Xiao 
// Last edited 02/3/2017
// This program creates a green monster with eyes that follow your mouse and 
// has the ability to jump. You click on the button in the top left hand corner
// to switch between the two actions. 

var page = 0
var eyeDirection = 0
var jumpValue = 10
var jumpDir = 1
var x = 600
var y = 200

function setup() {
  createCanvas(1200, 700); // This determines the size of the canvas. 
  // The code below creates a button on the page that the user will click to change what the monster does.
  button = createButton("SWITCH MONSTER'S ACTIONS"); // This is what the button will display. 
  button.position(x - 400, y - 50); // This is where the button will be located.
  button.size(180, 50) // This is the size of the button.
  button.mousePressed(reset); // This determines what the button will initiate once pressed. 
}

function draw() {
  background(66, 226, 244); // This makes the background a green color.
  monster(x, y); // This draws the monster at 600, 200.
  if (page == 0) { // This tells the program what to do when the page is 0 or reset.
    if (mouseX > x && mouseX < (x + 50)) { // This makes sure the eye doesn't leave the white eyeball.  
      eyeDirection = ((mouseX - x) * 0.5); // This makes the eye move with the mouse. 
    } else if (mouseX < x && mouseX > (x - 50)) { // This also makes sure the eye doesn't leave the white eyeball.
      eyeDirection = ((mouseX - x) * 0.5); // This makes the eye move with the mouse.
    }
  } else { // The code below identifies what the monster should be doing on page 1/at the next stage. 
    y = y - (jumpValue * jumpDir); // This identifies at what increment and speed the monster should jump.
    if (y < 100 || y > 300) // This makes sure the monster stays within the top and bottom of the canvas.
      jumpDir = jumpDir * -1 // This makes the monster go the other direction when it hits the top or bottom of the canvas.
  }
}

// This function switches bewteen the two pages/actions. If the button is clicked 
// once, the monster's eyes will move with the mouse. If the button is clicked again,
// the monster will start jumping up and down. 
function reset() {
  page = 1 - page
}

// This draws the monster at the x, y location that is defined.
// The monster consists of a head, eyes, arms, and body.
// I made the eyes a separate function, because it made the code easier to work with. 
function monster(x, y) {
  head(x, y);
  eyes(x, y - 30);
  arms(x, y + 150);
  body(x, y + 210);
}

// This draws the monster's head, which includes his face, mouth, and horns at the x,y location.
function head(x, y) {
  noStroke();
  fill(119, 82, 43); // This is a brown color.
  triangle(x - 20, y - 50, x - 100, y - 100, x - 50, y); // This makes the left horn. 
  triangle(x + 20, y - 50, x + 100, y - 100, x + 50, y); // This makes the right horn. 
  fill(122, 244, 88); // This is a bright green color.
  ellipse(x, y, 200, 200); // This makes the head.
  fill(0);
  arc(x, y + 80, 80, 80, PI, 0); // This makes the black inside of the mouth. 
  fill(255);
  rect(x - 25, y + 70, 20, 10); // This makes the left tooth.
  rect(x + 5, y + 70, 20, 10); // This makes the right tooth.
}

// This draws the monster's eyes at the x, y position. 
function eyes(x, y) {
  ellipse(x, y, 100, 100); // This makes the white part of the eye.
  fill(64, 135, 44);
  ellipse(x + eyeDirection, y, 50, 50); // This makes the green part of the eye.
  fill(0);
  ellipse(x + eyeDirection, y, 20, 20); // This makes the black part of the eye.
}

// This draws the monster's two arms at the x, y location.
function arms(x, y) {
  stroke(122, 244, 88);
  strokeWeight(10);
  line(x - 150, y, x - 100, y - 150); // This makes the top of his left arm.
  line(x - 150, y, x - 125, y + 150); // This makes the bottom of his left arm.
  line(x + 150, y, x + 100, y - 150); // This makes the top of his right arm.
  line(x + 150, y, x + 125, y + 150); // This makes the bottom of his right arm.
}

//This draws the monster's body and legs at the x, y location.
function body(x, y) {
  fill(122, 244, 88);
  ellipse(x, y, 230, 230);
  rect(x - 80, y + 90, 50, 100);
  rect(x + 20, y + 90, 50, 100);
}