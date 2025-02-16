let img;

function preload() {
  // Load the image file
  img = loadImage('img2.jpg');
}

function setup() {
  createCanvas(400, 600); // Create a canvas
  background(220); // Set a background color
}

function draw() {
  console.log(mouseX ,mouseY);
  image(img, 0, 0);
  ellipse(125,100,70,70)
  ellipse(275,100,70,70) 
  ellipse(200,170,200)
  ellipse(136,110,50,50)
  ellipse(176,110,50,50)
  ellipse(226,110,50,50)
  ellipse(266,110,50,50)
  ellipse(202,110,50,50)
  ellipse(150,170,50,20)
  ellipse(150,170,20,20)
  ellipse(250,170,50,20)
  ellipse(250,170,20,20)
  ellipse(200,200,20,10)
  rectMode(CENTER)
  rect(200,325,150,120,20)
  rect(286,300,50,30,100)
  rect(116,300,50,30,100)
  rect(150,500,30,60,100)
  rect(250,500,30,60,100)
  rect(200,430,160,130,10)
}
