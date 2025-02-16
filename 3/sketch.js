  let cols = 20; // number of columns
  let rows = 20; // number of rows
  let squareSize = 50; // size of each square
  let circleSize = 15
  let gap = 10; // space between squares
  let degree =0
  let bgC =150
  let squareC = 0
  let CC =255
  let scaleX =1

function setup() {
  createCanvas(600, 600);
  let label = createElement("p", "Press to Zoom in");
  label.position(1050, 750);
}

function draw() {
  
  background(bgC);
  push()
  fill("#1B21A1")
  rectMode(CENTER)
  rect(300,300,random(50,120))
  pop()
  

  translate(width / 2, height / 2);
  rotate(radians(degree));  

  let startX = -(cols * squareSize + (cols - 1) * gap) / 2;
  let startY = -(rows * squareSize + (rows - 1) * gap) / 2;
  
  if (mouseIsPressed){
    scaleX = scaleX+0.001
    scale(scaleX)
    squareC = squareC+2
    CC = CC-2
  } 
  else{
    scaleX=1
    bgC =150
    squareC = 0
    CC =255
    
  }

  
  
  ellipseMode(CENTER)
  noStroke()
  fill(squareC)
  // Calculate grid starting point for centering
   startX = (width - (cols * squareSize + (cols - 1) * gap)) / 2 -width/2;
   startY = (height - (rows * squareSize + (rows - 1) * gap)) / 2-width/2;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = startX + i * (squareSize + gap);
      let y = startY + j * (squareSize + gap);
      rect(x, y, squareSize, squareSize)
    }
  }
  fill(CC)
  startX = squareSize+gap+ (width - (cols * squareSize + (cols ) * gap)) / 2-width/2;
  startY = squareSize+gap+(height - (rows * squareSize + (rows ) * gap)) / 2-width/2;
    for (let i = 0; i < cols-1; i++) {
    for (let j = 0; j < rows-1; j++) {
      let x = startX + i * (squareSize + gap);
      let y = startY + j * (squareSize + gap);
      
      ellipse(x,y,circleSize, circleSize)
    }
  }
  
  
  
}

