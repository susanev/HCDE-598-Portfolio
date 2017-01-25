// Lulu Xiao
// Last edited: January 24, 2017
// This program creates a Lego family of the The Ashleys from the cartoon Recess. 
// All the Ashleys start at the corners and then meet in the middle. 
// Pink Ashley (the ring leader) joins the group in the middle and 
// then returns to her original corner in an endless loop. She is constantly
// leaving to scheme by herself before telling the rest of the Ashleys how to 
// terrorize everyone on the playground. 

var PAx = 0; // This is the x variable for Pink Ashley.
var PAy = 0; // This is the y variable for Pink Ashley.
var YAx = 0; // This is the x variable for Yellow Ashley.
var YAy = 420; // This is the y variable for Yellow Ashley.
var BAx = 1140; // This is the x variable for Blue Ashley.
var BAy = 0; // This is the y variable for Blue Ashley.
var GAx = 1140; // This is the x variable for Green Ashley.
var GAy = 440; // This is the y variable for Green Ashley.

var dirPAx = 2 // This defines how fast Pink Ashley will move in the x-direction. 
var dirPAy = 1 // This defines how fast Pink Ashley will move in the y-direction.
var dirYAx = 4.5 // This defines how fast Yellow Ashley will move in the x-direction. 
var dirYAy = 1 // This defines how fast Yellow Ashley will move in the y-direction.
var dirBAx = 5 // This defines how fast Blue Ashley will move in the x-direction. 
var dirBAy = 1.4 // This defines how fast Blue Ashley will move in the y-direction.
var dirGAx = 3.7 // This defines how fast Green Ashley will move in the x-direction. 
var dirGAy = 1 // This defines how fast Green Ashley will move in the y-direction.

function setup() { // This begins the setup portion.
  createCanvas(1200, 700); // This creates a large canvas.
  background(200); // This turns the background gray.
}

function draw() { // This begins the draw portion.
  background(200); // This sets the background to a light gray color.
  PinkAshley(); // This calls the PinkAshley function.
  YellowAshley(); // This calls the YellowAshley function. 
  BlueAshley(); // This calls the BlueAshley function.
  GreenAshley(); // This calls the GreenAshley function. 
}

// This function creates pink Ashley on the very left and moves Pink Ashley in a contained space. 
// She moves from her corner in the top left to join the group in the middle 
// and then returns to her original corner. This continues forever.
function PinkAshley() {
  noStroke(); // This removes the border.
  fill(221, 154, 28); // This makes Ashley's hair a dark blond color. 
  rect(PAx, PAy, 60, 10); // This makes Ashley's hair. 
  fill(255, 241, 216); // This makes Ashley's face a peach color. 
  rect(PAx, PAy + 10, 60, 80); // This makes Ashley's face. She has a slightly longer face, so I increased the height.
  fill(242, 104, 198); // This makes Ashley's shirt a pink color. 
  rect(PAx, PAy + 90, 60, 70); // This makes Ashley's shirt. 
  fill(81, 77, 80); // This makes Ashley's skirt and stockings a gray color. 
  rect(PAx, PAy + 160, 60, 160); // This makes Ashley's bottom slash legs. 
  PAx = PAx + dirPAx; // This gives Ashley's position on the x-axis the ability to change.
  if (PAx < 0 || PAx > 400) { // This is a conditional statement that makes Ashley move back and forth in a contained space.
    dirPAx = dirPAx * -1 // This makes Ashley change directions once she hits the x-value parameters.
  }
  PAy = PAy + dirPAy; // This gives Ashley's position on the y-axis the ability to change.
  if (PAy < 0 || PAy > 200) { // This is a conditional statement that makes Ashley move back and forth in a contained space.
    dirPAy = dirPAy * -1 // This makes Ashley change directions once she hit the y-value parameters.
  }
}

// This functon creates yellow Ashley who is second from left. She starts from her corner in the bottom 
// left and joins the group in the middle. She does not keep moving after she joins the group in the middle.
function YellowAshley() {
  fill(0); // This makes Ashley's hair black. 
  rect(YAx, YAy, 60, 10); // This makes Ashley's hair. 
  fill(168, 113, 65); // This makes Ashley's face a brownish color.
  rect(YAx, YAy + 10, 60, 60); // This makes Ashley's face. She has a slightly boxy face, so I made the height the same as the width.
  fill(229, 192, 29); // This makes Ashley's shirt a golden yellow color.
  rect(YAx, YAy + 70, 60, 100); // This makes Ashley's shirt and skirt. 
  fill(255); // This makes Ashley's white stockings. 
  rect(YAx, YAy + 170, 60, 110); // This makes Ashley's bottom slash legs. 
  YAx = YAx + dirYAx; // This gives Ashley's position on the x-axis the ability to change. 
  YAx = min(YAx + 1, 500); // This ensures that Ashley stops moving when she reaches 500 on the x-axis. 
  YAy = YAy - dirYAy; // This gives Ashley's position on the y-axis the ability to change. I changed the + to the - sign, because she's going to a smaller y. 
  YAy = max(YAy - 1, 240); // This ensures that Ashley stops moving when she reaches 240 on the y-axis.
}

// This functon creates blue Ashley who is second from right. She starts from her corner in the top 
// right and joins the group in the middle. She does not keep moving after she joins the group in the middle.
function BlueAshley() {
  fill(193, 100, 29); // This makes Ashley's hair an Auburn color. 
  rect(BAx, BAy, 60, 10); // This makes Ashley's hair. 
  fill(255, 204, 165); // This makes Ashley's face a more pink peach color.
  rect(BAx, BAy + 10, 60, 80); // This makes Ashley's face. She also has a longer face, so I increased the height.
  fill(63, 161, 226); // This makes Ashley's top half a darker blue color.
  rect(BAx, BAy + 90, 60, 90); // This makes Ashley's shirt and skirt. 
  fill(161, 211, 244); // This makes Ashley's ligher blue stockings. 
  rect(BAx, BAy + 180, 60, 120); // This makes Ashley's bottom slash legs. 
  BAx = BAx - dirBAx; // This gives Ashley's position on the x-axis the ability to change. I changed the + to the - sign, because she's going to a smaller x.
  BAx = max(BAx - 1, 600); // This ensures that Ashley stops moving when she reaches 600 on the x-axis. 
  BAy = BAy + dirBAy; // This gives Ashley's position on the y-axis the ability to change. 
  BAy = min(BAy + 1, 220); // This ensures that Ashley stops moving when she reaches 220 on the y-axis.
}

// This functon creates green Ashley who is on the very right. She starts from her corner in the bottom 
// right and joins the group in the middle. She does not keep moving after she joins the group in the middle.
function GreenAshley() { // This is Green Ashley.
  fill(114, 71, 30); // This makes Ashley's hair an dark brown color
  rect(GAx, GAy, 60, 10); // This makes Ashley's hair. 
  fill(163, 118, 76); // This makes Ashley's face a dusty brown color
  rect(GAx, GAy + 10, 60, 40); // This makes Ashley's face. She also has a shorter face, so I decreased the height.
  fill(53, 165, 88); // This makes Ashley's shirt a ligher green color.
  rect(GAx, GAy + 50, 60, 70); // This makes Ashley's shirt. 
  fill(8, 86, 33); // This makes Ashley's bottom half. Her stockings are ligher green, but I made her skirt and stockings the entire bottom half.
  rect(GAx, GAy + 120, 60, 140); // This makes Ashley's bottom half slash legs. 
  GAx = GAx - dirGAx; // This gives Ashley's position on the x-axis the ability to change. I changed the + to the - sign, because she's going to a smaller x.
  GAx = max(GAx - 1, 700); // This ensures that Ashley stops moving when she reaches 700 on the x-axis. 
  GAy = GAy - dirGAy; // This gives Ashley's position on the y-axis the ability to change. 
  GAy = max(GAy - 1, 260); // This ensures that Ashley stops moving when she reaches 260 on the y-axis.
}