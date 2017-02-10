// Created by Lulu Xiao
// Last edited 2/9/17
// This program shows turtle after turtle "hatching" from eggs and making their 
// way across the beach before disappearing into the ocean. 

var x = 460;
var y = 500;
var turtle;
var turtleWidth = 625;
var aspectRatio = 720 / 625

// This function loads the saved turtle image. 
function preload() {
  turtle = loadImage("turtle.png");
}

function setup() {
  createCanvas(1000, 700); // This sets the canvas size.
}

function draw() {
  fill(86, 145, 239); // This is the fill for the ocean. 
  noStroke(); // This removes the border around the rectangle. 
  rect(0, 0, 1000, 150); // This identifies where and how large the rectangle for the ocean will be. 
  fill(229, 190, 142, 0.2 * 255); // This is the fill for the beach. I added the last
  // condition to create a sort of "trail-in-sand" effect. 
  rect(0, 150, 1000, 550); // This is where and how large the rectangle for the beach will be.
  image(turtle, x, y, 80, 80 * aspectRatio); // This identifies where the image will be placed 
  // and how large it will be. 
  x = x + random(-1, 1); // This moves the turtle move side to side with a little wiggle, 
  // as if it's crawling through sand. 
  y = y - 1; // This moves the turtle up the screen/beach. 
  if (y < 50) { // This if statement says that once the y-position of the turtle is less than 50
    // then it will go back to the original position at y=500. 
    y = 500; // See above. This makes turtles come out from the eggs and go into the ocean over and over again.
  }
  eggs(500, 650); // This calls the egg function at the defined x and y position. 
}

// This function draws a pile of eggs.
function eggs(x, y) {
  fill(255);
  stroke(0);
  ellipse(x, y, 50, 70);
  ellipse(x + 30, y, 50, 70);
  ellipse(x + 60, y, 50, 70);
  ellipse(x - 30, y, 50, 70);
  ellipse(x - 60, y, 50, 70);
  ellipse(x - 90, y, 50, 70);
  ellipse(x + 90, y, 50, 70);
  // This makes the second layer of eggs.
  ellipse(x, y - 30, 50, 70);
  ellipse(x + 30, y - 30, 50, 70);
  ellipse(x + 60, y - 30, 50, 70);
  ellipse(x - 30, y - 30, 50, 70);
  ellipse(x - 60, y - 30, 50, 70);
  // This makes the first layer of eggs. 
  ellipse(x, y - 50, 50, 70);
  ellipse(x + 30, y - 50, 50, 70);
  ellipse(x - 30, y - 50, 50, 70);
}