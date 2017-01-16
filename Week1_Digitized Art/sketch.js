function setup() {
  createCanvas(405, 561) //Changed canvas size to make it similar to the picture.
  background(244, 83, 66); //Changed background color.
  
  //Ombre hills in background - I wanted to try this function to see if I could achieve the effect with only a start and end color rather than four different colored shapes.
  colorMode(RGB); // Decided to keep using RGB.
  noStroke(); // I removed the outline around the shapes.
  from = color(244, 228, 220); //This was my starting whiteish color.
  to = color(97, 150, 149); // This was my ending blueish teal color.
  colorMode(RGB);  
  interA = lerpColor(from, to, .33); //I kept these parameters the same because it seemed to work well.
  interB = lerpColor(from, to, .66); 
  fill(from);
  triangle(0, 561, 410, 435, 410, 561); // This makes the whiteish hill on the right.
  fill(interA);
  triangle(35,490, 100, 470, 150, 490); //This makes the whiteish hill on the left.
  fill(interB);
  quad(0,550, 0, 490, 410, 470, 410, 480); // This makes the hill above the bottom hill. It should be lighter blue.
  fill(to);
  quad(0, 561, 0, 520, 410, 480, 410, 561); //This makes the bottom "hill" and will be the darkest color.
  
  //Flowers behind woman 
  stroke(63, 62, 61) // Made line dark gray
  strokeWeight(2) // Made thickness of line match the stem thickness
  line(40, 300, 40, 561); // I am making the flowers starting from the left. This is the left most flower.
  line(32, 300, 40, 331); //This the branch on the left side of the stem.
  line(48, 300, 40, 331); //This the branch on the right side of the stem.
  noStroke()
  fill(255, 243, 219)
  triangle(10, 330, 10, 320, 40, 340);//The makes the left petal of the top flower
  triangle(40, 340,70, 330, 70, 320);//The makes the right petal of the top flower
  triangle(15, 345, 15, 335, 40, 360);//The makes the left petal of the middle flower
  triangle(40, 360,65, 345, 65, 335);//The makes the right petal of the middle flower
  triangle(25, 370, 25, 360, 40, 375);//The makes the left petal of the bottom flower
  triangle(40, 375,55, 360, 55, 370);//The makes the right petal of the bottom flower
  
  stroke(63, 62, 61) // Made line dark gray
  strokeWeight(2) // Made thickness of line match
  line(75, 400, 75, 561); // This is the second flower from the left
  line(67, 400, 75, 430); //This the branch on the left side of the stem
  line(83, 400, 75, 430); //This the branch on the right side of the stem
  noStroke()
  fill(255, 243, 219)
  triangle(45, 430, 45, 420, 75, 440);//The makes the left petal of the top flower
  triangle(75, 440,105, 420, 105, 430);//The makes the right petal of the top flower
  triangle(55, 450, 55, 440, 75, 460);//The makes the left petal of the middle flower
  triangle(75, 460,100, 440, 100, 450);//The makes the right petal of the middle flower
  triangle(60, 470, 60, 460, 75, 475);//The makes the left petal of the bottom flower
  triangle(75, 475,90, 460, 90, 470);//The makes the right petal of the bottom flower
  
  stroke(63, 62, 61) // Made line dark gray
  strokeWeight(2) // Made thickness of line match
  line(110, 210, 110, 561); // This is the third flower from the left
  line(102, 210, 110, 240); //This the branch on the left side of the stem
  line(118, 210, 110, 240); //This the branch on the right side of the stem
  noStroke()
  fill(255, 243, 219)
  triangle(80, 240, 80, 230, 110, 250);//The makes the left petal of the top flower
  triangle(110, 250, 140, 230, 140, 240);//The makes the right petal of the top flower
  triangle(70, 255, 70, 245, 110, 280);//The makes the left petal of the middle flower
  triangle(110, 280, 150, 255, 150, 245);//The makes the right petal of the middle flower
  triangle(90, 275, 90, 285, 110, 295);//The makes the left petal of the bottom flower
  triangle(110, 295, 130, 275, 130, 285);//The makes the right petal of the bottom flower
  
  stroke(63, 62, 61) // Made line dark gray
  strokeWeight(2) // Made thickness of line match
  line(380, 370, 380, 561); // This is the fourth flower from the left
  line(372, 370, 380, 405); //This the branch on the left side of the stem
  line(388, 370, 380, 405); //This the branch on the right side of the stem
  fill(255, 243, 219)
  noStroke()
  triangle(355, 400, 355, 390, 380, 410);//The makes the left petal of the top flower
  triangle(380, 410, 402, 390, 402, 400);//The makes the right petal of the top flower
  triangle(360, 415, 360, 405, 380, 423);//The makes the left petal of the middle flower
  triangle(380, 423, 400, 405, 400, 415);//The makes the right petal of the middle flower
  triangle(365, 425, 365, 420, 380, 433);//The makes the left petal of the bottom flower
  triangle(380, 433, 395, 420, 395, 425);//The makes the right petal of the bottom flower
  
  //Woman's body - I made this using a series of overlapping shapes. 
  noStroke() //Removed outline 
  strokeWeight(3)
  fill(51, 26, 15) //Chose a brown that is darker than her skin
  triangle(120,310,200,210,330,300); //Changed the positions so it forms the shape of her shoulders
 
  noStroke() //Removed outline 
  fill(51, 26, 15) //Chose a brown that is darker than her skin
  quad(120, 309, 330, 299, 330, 561, 100, 561); //Changed the positions so it forms the shape of her body. I identified the first and second coordinates based on the triange, but decreased the y-value to hide the gap that was showing.

  noStroke() //Removed outline 
  fill(51, 26, 15) //Chose a brown that is darker than her skin
  triangle(330,299,350,440,330,561); //Changed the positions so it forms her left elbow sticking out
 
  //Pattern on Woman's shirt - This part is very long, because I wrote code for every flower on her shirt. Everything is fairly redundant, however.
  
  //This is the flower near her right elbow
  stroke(244, 83, 66) // Made line match background color
  strokeWeight(2) // Made thickness of line match
  line(320, 400, 320, 450); // This is the middle line
  line(310, 410, 320, 450); // These are the lines to the left
  line(305, 420, 320, 450); // These are the lines to the left
  line(295, 430, 320, 450); // These are the lines to the left
  line(330, 410, 320, 450); // These are the lines to the right
  line(340, 420, 320, 450); // These are the lines to the right
  line(350, 430, 320, 450); // These are the lines to the right 
  
  stroke(244, 83, 66) // Made line match background color
  strokeWeight(2) // Made thickness of line match
  line(300, 480, 300, 530); // This is the middle line
  line(290, 490, 300, 530); // These are the lines to the left
  line(280, 500, 300, 530); // These are the lines to the left
  line(270, 510, 300, 530); // These are the lines to the left
  line(310, 490, 300, 530); // These are the lines to the right
  line(320, 500, 300, 530); // These are the lines to the right
  line(330, 510, 300, 530); // These are the lines to the right 
  
  //At this point I reordered the lines to make it easier to change the positioning
  stroke(244, 83, 66) // Made line match background color
  strokeWeight(2) // Made thickness of line match

  line(200, 520, 230, 540); // These are the lines to the left
  line(210, 510, 230, 540); // These are the lines to the left
  line(220, 500, 230, 540); // These are the lines to the left
  line(230, 490, 230, 540); // This is the middle line
  line(240, 500, 230, 540); // These are the lines to the right
  line(250, 510, 230, 540); // These are the lines to the right
  line(260, 520, 230, 540); // These are the lines to the right 
  
  //Another flower on her shirt
  line(230, 460, 260, 480); // These are the lines to the left
  line(240, 450, 260, 480); // These are the lines to the left
  line(250, 440, 260, 480); // These are the lines to the left
  line(260, 430, 260, 480); // This is the middle line
  line(270, 440, 260, 480); // These are the lines to the right
  line(280, 450, 260, 480); // These are the lines to the right
  line(290, 460, 260, 480); // These are the lines to the right 
  
  //Another flower on her shirt
  line(230, 380, 260, 400); // These are the lines to the left
  line(240, 370, 260, 400); // These are the lines to the left
  line(250, 360, 260, 400); // These are the lines to the left
  line(260, 350, 260, 400); // This is the middle line
  line(270, 360, 260, 400); // These are the lines to the right
  line(280, 370, 260, 400); // These are the lines to the right
  line(290, 380, 260, 400); // These are the lines to the right
  
  //Another flower on her shirt
  line(290, 350, 320, 370); // These are the lines to the left
  line(300, 340, 320, 370); // These are the lines to the left
  line(310, 330, 320, 370); // These are the lines to the left
  line(320, 320, 320, 370); // This is the middle line
  line(330, 330, 320, 370); // These are the lines to the right
  line(340, 340, 320, 370); // These are the lines to the right
  line(350, 350, 320, 370); // These are the lines to the right
  
  //Another flower on her shirt
  line(260, 290, 290, 310); // These are the lines to the left
  line(270, 280, 290, 310); // These are the lines to the left
  line(280, 270, 290, 310); // These are the lines to the left
  line(290, 260, 290, 310); // This is the middle line
  line(300, 270, 290, 310); // These are the lines to the right
  line(310, 280, 290, 310); // These are the lines to the right
  line(320, 290, 290, 310); // These are the lines to the right
  
  //Another flower on her shirt
  line(230, 270, 250, 280); // These are the lines to the left
  line(230, 250, 250, 280); // These are the lines to the left
  line(240, 240, 250, 280); // These are the lines to the left
  line(250, 230, 250, 280); // This is the middle line
  line(260, 240, 250, 280); // These are the lines to the right
  line(270, 250, 250, 280); // These are the lines to the right
  line(280, 260, 250, 280); // These are the lines to the right
  
  //Another flower on her shirt
  line(205, 320, 235, 340); // These are the lines to the left
  line(215, 310, 235, 340); // These are the lines to the left
  line(225, 300, 235, 340); // These are the lines to the left
  line(235, 290, 235, 340); // This is the middle line
  line(245, 300, 235, 340); // These are the lines to the right
  line(255, 310, 235, 340); // These are the lines to the right
  line(265, 320, 235, 340); // These are the lines to the right
  
  //Another flower on her shirt, this is near the necklace 
  line(200, 420, 220, 440); // These are the lines to the left
  line(200, 410, 220, 440); // These are the lines to the left
  line(210, 400, 220, 440); // These are the lines to the left
  line(220, 390, 220, 440); // This is the middle line
  line(230, 400, 220, 440); // These are the lines to the right
  line(240, 410, 220, 440); // These are the lines to the right
  line(250, 420, 220, 440); // These are the lines to the right
  
  //Another flower on her shirt - This is at the very bottom on the right side
  line(230, 565, 260, 585); // These are the lines to the left
  line(240, 555, 260, 585); // These are the lines to the left
  line(250, 545, 260, 585); // These are the lines to the left
  line(260, 535, 260, 585); // This is the middle line
  line(270, 545, 260, 585); // These are the lines to the right
  line(280, 555, 260, 585); // These are the lines to the right
  line(290, 565, 260, 585); // These are the lines to the right
  
  //Another flower on her shirt - This is at the other flower at the very bottom
  line(160, 565, 190, 585); // These are the lines to the left
  line(170, 555, 190, 585); // These are the lines to the left
  line(180, 545, 190, 585); // These are the lines to the left
  line(190, 535, 190, 585); // This is the middle line
  line(200, 545, 190, 585); // These are the lines to the right
  line(210, 555, 190, 585); // These are the lines to the right
  line(220, 565, 190, 585); // These are the lines to the right
  
  //Another flower on her shirt - This is the flower right below the necklace
  line(160, 470, 190, 490); // These are the lines to the left
  line(170, 460, 190, 490); // These are the lines to the left
  line(180, 450, 190, 490); // These are the lines to the left
  line(190, 440, 190, 490); // This is the middle line
  line(200, 450, 190, 490); // These are the lines to the right
  line(210, 460, 190, 490); // These are the lines to the right
  line(220, 470, 190, 490); // These are the lines to the right
  
  //Another flower on her shirt - This is the flower at the bottom near the left
  line(100, 540, 130, 560); // These are the lines to the left
  line(110, 530, 130, 560); // These are the lines to the left
  line(120, 520, 130, 560); // These are the lines to the left
  line(130, 510, 130, 560); // This is the middle line
  line(140, 520, 130, 560); // These are the lines to the right
  line(150, 530, 130, 560); // These are the lines to the right
  line(160, 540, 130, 560); // These are the lines to the right
  
  //Another flower on her shirt - This is the flower on her left side and three down.
  line(90, 450, 120, 470); // These are the lines to the left
  line(100, 440, 120, 470); // These are the lines to the left
  line(110, 430, 120, 470); // These are the lines to the left
  line(120, 420, 120, 470); // This is the middle line
  line(130, 430, 120, 470); // These are the lines to the right
  line(140, 440, 120, 470); // These are the lines to the right
  line(150, 450, 120, 470); // These are the lines to the right
  
  //I realized that the pattern was covering some of the flower petal so I added the few lines of code below. I could have moved sections around, but found this to be a more efficient solution with less room for error. I added a note in case this becomes an issue later.
  //Code below should we removed to remove right, middle petal of flower second from left. 
  fill(255, 243, 219)
  noStroke()
  triangle(75, 460,100, 440, 100, 450);//The makes the right petal of the middle flower
  
  //Another flower on her shirt - This is the flower next to the neck on the left, but is partially cut off. 
  stroke(244, 83, 66) // Made line match background color
  strokeWeight(2) // Made thickness of line match
  line(151, 380, 181, 400); // These are the lines to the left
  line(161, 370, 181, 400); // These are the lines to the left
  line(171, 360, 181, 400); // These are the lines to the left
  line(181, 350, 181, 400); // This is the middle line
  line(191, 360, 181, 400); // These are the lines to the right
  line(201, 370, 181, 400); // These are the lines to the right
  line(211, 380, 181, 400); // These are the lines to the right
  
  // This the the flower that is cut off on the left side near woman's right shoulder. I deleted the left lines because they are not visible.
  line(115, 330, 115, 370); // This is the middle line
  line(125, 340, 115, 370); // These are the lines to the right
  line(135, 350, 115, 370); // These are the lines to the right
  line(145, 360, 115, 370); // These are the lines to the right
  
  //Another flower on her shirt - The last flower!! Yay! This is the one near her neck on the left. 
  line(120, 300, 140, 310); // These are the lines to the left. I edited the parameters so that they didn't cover the flower petals.
  line(130, 295, 140, 310); // These are the lines to the left. I also edited these paramenters so that they wouldn't cover the flower petals.
  line(130, 270, 140, 310); // These are the lines to the left
  line(140, 265, 140, 310); // This is the middle line
  line(150, 270, 140, 310); // These are the lines to the right
  line(160, 280, 140, 310); // These are the lines to the right
  line(170, 290, 140, 310); // These are the lines to the right
  
  //Woman's Neck
  stroke(97, 150, 149)
  strokeWeight(2)
  fill(71, 43, 40) //Corrected face color
  quad(175,210,225,220,210,400,184,400);//Repositioned and elongated face
  
  //Woman's blue necklace
  noStroke()
  fill(97, 150, 149) //Corrected face color
  quad(211,400,183,400,185,420,208,423);//Made blue pendant at bottom
  
  //Woman's Face - I actually made her face first, but ended up reordering some of the sections for layering reasons.
  stroke(15, 8, 4) //Made outline almost black
  strokeWeight(1) //Made line around woman's face so that it can be separated from the neck
  fill(71, 43, 40) //Corrected face color
  ellipse(200, 180, 80, 120);//Repositioned and elongated face
  
  //Necklaces or eyeglass strings - #1, I originally coded the necklaces after the eyeglasses, but moved it here to hide the end points under the glasses. This seemed like a better solution than trying to perfect the positioning.
  stroke(204, 199, 189) //Made strands look grayish
  strokeWeight(1) // Decreased width to minimum
  noFill();//Deleted the fill 
  x1 = 170, x2 = 200, x3 = 240, x4 = 230;
  y1 = 190, y2 = 410, y3 = 200, y4 = 190;//Changed positioning of the stops so necklace falls like it does in the picture
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(204, 199, 189); //Made fill of "beads" match the necklack
  steps = 1;//Decreased number of stops to make it easier to work with and less busy
  for (i = 0; i <= steps; i++) {
  t = i / steps;
  x = bezierPoint(x1, x2, x3, x4, t);
  y = bezierPoint(y1, y2, y3, y4, t);
  ellipse(x, y, 5, 5);
  }

  //Necklaces or eyeglasses strings - #2 (looks like there are five total)
  stroke(204, 199, 189) //Made strands look grayish
  strokeWeight(1) // Decreased width to minimum
  noFill();//Deleted the fill 
  x1 = 171, x2 = 210, x3 = 240, x4 = 225;
  y1 = 190, y2 = 440, y3 = 220, y4 = 190;//Changed positioning of the stops so necklace falls like it does in the picture
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(204, 199, 189); //Made fill of "beads" match the necklack
  steps = 1;//Decreased number of stops to make it easier to work with and to show no "beads"
  for (i = 0; i <= steps; i++) {
  t = i / steps;
  x = bezierPoint(x1, x2, x3, x4, t);
  y = bezierPoint(y1, y2, y3, y4, t);
  ellipse(x, y, 5, 5);
  }

  //Necklaces or eyeglasses strings - #3, I essentially copied and pasted the code for the rest of the strands and adjusted the positioning
  stroke(204, 199, 189) //Made strands look grayish
  strokeWeight(1) // Decreased width to minimum
  noFill();//Deleted the fill 
  x1 = 171, x2 = 200, x3 = 210, x4 = 214;
  y1 = 200, y2 = 390, y3 = 295, y4 = 306;//Changed positioning of the stops so necklace falls like it does in the picture
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  noStroke()
  noFill(); // At this point, I removed the outline and fill of the "beads" to allow the strands to blend together
  steps = 5;//Decreased number of stops to four to make it easier to work with
  for (i = 0; i <= steps; i++) {
  t = i / steps;
  x = bezierPoint(x1, x2, x3, x4, t);
  y = bezierPoint(y1, y2, y3, y4, t);
  ellipse(x, y, 5, 5);
  }

  //Necklaces or eyeglasses strings - #4, I used previous code and adjusted the positions
  stroke(204, 199, 189) //Made strands look grayish
  strokeWeight(1) // Decreased width to minimum
  noFill();//Deleted the fill 
  x1 = 171, x2 = 190, x3 = 210, x4 = 205;
  y1 = 190, y2 = 410, y3 = 320, y4 = 320;//Changed positioning of the stops so necklace falls like it does in the picture
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  noStroke()
  noFill(); // At this point, I removed the outline and fill of the "beads" to allow the strands to blend together
  steps = 5;//Decreased number of stops to four to make it easier to work with
  for (i = 0; i <= steps; i++) {
  t = i / steps;
  x = bezierPoint(x1, x2, x3, x4, t);
  y = bezierPoint(y1, y2, y3, y4, t);
  ellipse(x, y, 5, 5);
  }

  //Necklaces or eyeglasses strings - #5, I used previous code and adjusted the positions
  stroke(204, 199, 189) //Made strands look grayish
  strokeWeight(1) // Decreased width to minimum
  noFill();//Deleted the fill 
  x1 = 173, x2 = 190, x3 = 210, x4 = 200;
  y1 = 190, y2 = 440, y3 = 320, y4 = 340;//Changed positioning of the stops so necklace falls like it does in the picture
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  noStroke()
  noFill(); // At this point, I removed the outline and fill of the "beads" to allow the strands to blend together
  steps = 5;//Decreased number of stops to four to make it easier to work with
  for (i = 0; i <= steps; i++) {
  t = i / steps;
  x = bezierPoint(x1, x2, x3, x4, t);
  y = bezierPoint(y1, y2, y3, y4, t);
  ellipse(x, y, 5, 5);
  }
  
  //Right side of turban
  noStroke() //Removed outline 
  fill(255, 243, 219) //Made it sort of a peachy color
  arc(190, 165, 100, 100, 30, TWO_PI, PI+QUARTER_PI, CHORD); //This was sort of difficult to figure out. The way that radians are "counted" is diferent from what I was thought. I tried looking at a radian circle and everything seemed to be the opposite for the code. 
  
  //Left side of turban
  noStroke() //Removed outline 
  fill(255, 243, 219) //Made it sort of a peachy color
  arc(183, 150, 80, 80, 2 * PI / 3,7 * PI / 4, CHORD);
  
  //Turban in wind
  noStroke() //Removed outline 
  fill(255, 243, 219) //Made it sort of a peachy color
  triangle(220,140,250,40,305,120); //Changed the coordinates to reposition and reshape the triange
  
  //Added a small triangle for the part that is underneath
  noStroke() //Removed outline 
  fill(255, 243, 219) //Made it sort of a peachy color
  triangle(230,135,250,130,270,155); //Changed the position and shape of triange
  
  //Woman's left eyeglass
  noStroke() //Removed outline around lenses
  fill(97, 150, 149) //Corrected color or lenses
  ellipse(178, 178, 40, 40);//Repositioned lenses and made it circular
  
  //Woman's right eyeglass
  //Woman's left eyeglass
  noStroke() //Removed outline around lenses
  fill(97, 150, 149) //Corrected color or lenses
  ellipse(227, 178, 40, 40);//Repositioned lenses and made it circular
  
  //Bar between woman's glasses
  stroke(224, 181, 96) //Made bar golden color
  strokeWeight(3) // Increased width of bar
  noFill() //Cleared the arc's fill
  arc(203, 180, 15, 3, PI, TWO_PI);//Repositioned the arc to be between the lenses and made it less curved
  
  //I added my intitals to the finsihed picture, because I wanted to try the text function. 
  textSize(12);
  strokeWeight(1)
  text("LX", 386, 555);
  fill(244, 83, 66);
  
  //Done!
  
}