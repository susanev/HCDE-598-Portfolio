// Created by Lulu Xiao
// Last edited February 20, 2017
// This program shows a column chart of immigrants to the U.S. by region. The user can adjust
// the slider in the top right to view data for three different years (2013, 2014, and 2015). 
// All the data is factual and obtained from the Migration Policy Institute here: 
// http://www.migrationpolicy.org/programs/data-hub/charts/regions-immigrant-birth-1960-present. 
// Click on "Get Data" button at the bottom of the page for the excel file.  
// I created the CSV file so that I didn't have to clean and transform the original data set, 
// but all the values match the original dataset. The one exception of data integrity is the 
// "Born at Sea" datapoint in 2013. The dataset only reports a value for 2000, but I thought it was a 
// funny category, so I included it and made up a number for the 2013 data. 

var axX = 150; // X-position for axes set at 150
var axY = 600; // Y-position for axes set at 600
rectWidth = 50; // Width of columns
var ySlider; // This is for the year
var sliderYear; // This is used later to determine what year it is. 
var sX = 1070; // X-position for slider text
var sY = 40; // Y-posiiton for slider text
var stats; // This is used to load the table. 
var immigrantData = []; // Rows are unique years (starting from 2013 in the first row) and Columns are unique regions
// which go from: Europe, Asia, Africa, Oceania, Americas, Born at Sea. 
var yearThirteen = []; // This is used to make up the larger immigrantData array. 
var yearFourteen = []; // This is used to make up the larger immigrantData array. 
var yearFifteen = []; // This is used to make up the larger immigrantData array. 

function preload() { // This loads the table. 
  stats = loadTable("Immigrant_Data.csv"); // This calls the CSV file. 
}

function setup() {
  createCanvas(1200, 700); // Creates a canvas of designated size. 
  ySlider = createSlider(2013, 2015, 2013); // Draws a slider with starting value of 2014 
  // ending value of 2015.
  ySlider.position(1000, 165); // Identifies where the slider should be drawn.
  var colCount = 6; // Column count set at 6 since there are 6 regions
  immigrantData = []; // This makes the immigrantData array
  for (var i = 0; i < colCount; i++) { // This loop forms the array.  
    yearThirteen[i] = stats.getNum(0, i); // This is for the first row, year 2013. 
    yearFourteen[i] = stats.getNum(1, i); // This is for the second row, year 2014. 
    yearFifteen[i] = stats.getNum(2, i); // This is the third row, year 2015. 
  }
}

function draw() {
  background(250); // This makes the background gray. 
  graphAxes(axX, axY); // This makes the axes at the defined x and y position. 
  labels(axX, axY); // This makes the axes labels at the defined x and y position. 
  values(); // This graphs the actual values. 
  valuesLabels(); // This creates the values of the columns. 
  sliderLabels(sX, sY); // This makes the labels for the slider. 

// This function creates text on the axes, label, and title. 
function labels() {
  fill(0);
  textSize(15);
  textStyle(NORMAL);
  textAlign(CENTER);
  for (i = 25; i > 0; i -= 5) {
  text(i, axX - 35, axY + 5 - i * 20);
  }
  text("Europe", axX + 100, axY + 30);
  text("Asia", axX + 250, axY + 30);
  text("Africa", axX + 400, axY + 30);
  text("Oceania", axX + 550, axY + 30);
  text("Americas", axX + 700, axY + 30);
  text("Born at sea", axX + 850, axY + 30);
  textStyle(BOLD);
  textSize(20);
  text("Region", axX + 470, axY + 70);
  text("Immigrants to U.S. by Region (in millions)", axX + 450, axY - 550);
}

// This function makes the x and y-axes as well as the ticks. 
function graphAxes(axX, axY) {
  line(axX, axY, axX + 950, axY); // Makes x-axis 
  line(axX + 100, axY, axX + 100, axY + 10); // Makes line position for first region
  line(axX + 250, axY, axX + 250, axY + 10); // Makes line position for second region 
  line(axX + 400, axY, axX + 400, axY + 10); // Makes line position for third region 
  line(axX + 550, axY, axX + 550, axY + 10); // Makes line position for fourth region 
  line(axX + 700, axY, axX + 700, axY + 10); // Makes line position for fifth region 
  line(axX + 850, axY, axX + 850, axY + 10); // Makes line position for fifth region 
  line(axX, axY - 510, axX, axY); // Makes the y-axis 
  line(axX - 10, axY - 100, axX + 10, axY - 100); // Unit is in Millions. First tick. 
  line(axX - 10, axY - 200, axX + 10, axY - 200); // Unit is in Millions. Second tick.
  line(axX - 10, axY - 300, axX + 10, axY - 300); // Unit is in Millions. Third tick. 
  line(axX - 10, axY - 400, axX + 10, axY - 400); // Unit is in Millions. Fourth tick. 
  line(axX - 10, axY - 500, axX + 10, axY - 500); // Unit is in Millions. Fifth tick. 
}

// This function graphs the values into columns. 
function values() {
  fill(66, 200, 244);
  sliderYear = ySlider.value();
  for (i = 0; i <= 6; i++) {
    if (sliderYear == 2015) {
      rect(225 + i * 150, 600 - yearFifteen[i] / 5 * 100, rectWidth, yearFifteen[i] / 5 * 100); // Since the height of the column will be variable
      // depending on the number, I made the starting y-position a formula. The formula starts at 600, 
      // because that is the position of the bottom of the y-axis and then identifies where the column 
      // should start, based on the y-axis increments and positions. 
    } else if (sliderYear == 2014) {
      rect(225 + i * 150, 600 - yearFourteen[i] / 5 * 100, rectWidth, yearFourteen[i] / 5 * 100);
    } else if (sliderYear == 2013) {
      rect(225 + i * 150, 600 - yearThirteen[i] / 5 * 100, rectWidth, yearThirteen[i] / 5 * 100);
    }
  }
}

// This function prints the values on the top of the columns.  
function valuesLabels() {
  fill(0);
  textSize(12);
  sliderYear = ySlider.value();
  for (i = 0; i <= 5; i++) {
    if (sliderYear == 2015) {
      text(yearFifteen[i] + "  Million", 250 + i * 150, 590 - yearFifteen[i] / 5 * 100);
    } else if (sliderYear == 2014) {
      text(yearFourteen[i] + "  Million", 250 + i * 150, 590 - yearFourteen[i] / 5 * 100);
    } else if (sliderYear == 2013) {
      text(yearThirteen[i] + "  Million", 250 + i * 150, 590 - yearThirteen[i] / 5 * 100);
    }
  }
}

// This function creates the labels for the slider.
function sliderLabels() {
  fill(0);
  textSize(14);
  text("Slide to change year of view", sX, sY);
  text(sliderYear, sX, sY + 45);
}
}