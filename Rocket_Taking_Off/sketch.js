// Created by Lulu Xiao
// Last edited 2/7/2017
// This program draws a rocket is taking off. At the bottom of the rocket, you will see fire coming out. 

var x = 400;
var y = 150;

function setup() {
  createCanvas(1000, 700); // This sets the size of the canvas. 
}

function draw() {
  background(186, 231, 252); // This makes the background blue.
  from = color(249, 237, 64, 0.2 * 255); // This identifies the start color. It's currently set at a transparent yellow. 
  to = color(255, 0, 0, 0.2 * 255); // This identifies the end color. It's a transparent red. 
  c1 = lerpColor(from, to, .33); // This identifies the first color change. 
  c2 = lerpColor(from, to, .66); // This identifies the second color change. 
  for (var i = 0; i < 20; i++) { // This identifies how many shapes are generated. 
    fill(from); // This starts the fill for the first "set" of quadrilaterials.
    quad(random(x, x+200), random(y+200, y+350), // This draws draws the first "set" of quadriilaterals. They 
    // will have random heights and widths within the defined x and y ranges. 
      random(x, x+200), random(y+200, y+350), // See above. This is the second coordinate.
      random(x, x+200), random(y+200, y+350), // See above. This is the third coordinate.
      random(x, x+200), random(y+200, y+350)); // See above. This is the fourth coordinate.
    fill(c1); // This is the first point at which the fill color changes, as identified in line 12.
    quad(random(x-50, x+250), random(y+300, y+400), // This draws draws the second "set" of quadriilaterals. They 
    // will have random heights and widths within the defined x and y ranges. There will be some overlap with the 
    // previous set of quadrilaterals.
      random(x-50, x+250), random(y+300, y+400),// See above. This is the second coordinate.
      random(x-50, x+250), random(y+300, y+400),// See above. This is the third coordinate.
      random(x-50, x+250), random(y+300, y+400)); // See above. This is the fourth coordinate.
    fill(c2); // This is the second point at which the fill color changes, as identified in line 13. 
    quad(random(x-100, x+300), random(y+350, y+500), // This draws draws the third "set" of quadriilaterals. They 
    // will have random heights and widths within the defined x and y ranges. There will be some overlap with the 
    // previous set of quadrilaterals.
      random(x-100, x+300), random(y+350, y+500), // See above. This is the second coordinate.
      random(x-100, x+300), random(y+350, y+500),// See above. This is the third coordinate.
      random(x-100, x+300), random(y+350, y+500)); // See above. This is the fourth coordinate.
    fill(to); // This is the last change, which is the transparent red identified in line 11. 
    quad(random(x-150, x+350), random(y+450, y+600), // This draws draws the last "set" of quadriilaterals. They 
    // will have random heights and widths within the defined x and y ranges. There will be some overlap with the 
    // previous set of quadrilaterals.
      random(x-150, x+350), random(y+450, y+600),// See above. This is the second coordinate.
      random(x-150, x+350), random(y+450, y+600),// See above. This is the third coordinate.
      random(x-150, x+350), random(y+450, y+600)); // See above. This is the fourth coordinate.
  }
  frameRate(5); // This changes the frame rate to refresh 5 times a second. 
  rocket(x, y); // This draws the rocket at the given x, y position. 
}

// This creates a green rocket with blue fins and a small window. 
function rocket(x, y) {
  fill(66, 244, 69);
  noStroke();
  triangle(x, y, x + 100, y - 100, x + 200, y);
  rect(x, y, 200, 250);
  fill(18, 33, 150);
  rect(x + 85, y + 100, 30, 200);
  quad(x - 50, y + 100, x, y + 50, x, y + 250, x - 50, y + 300);
  quad(x + 200, y + 50, x + 250, y + 100, x + 250, y + 300, x + 200, y + 250);
  fill(0);
  ellipse(x + 100, y, 80, 80);
  fill(255);
  ellipse(x + 100, y, 50, 50);
}