let angle = 0;
let flow = 0.03
let greet
let now = new Date();
let hours = now.getHours();
//let hours = 15;


function preload() {
  // Load the font file (make sure the path is correct)
  
  customFont = loadFont('font/De Valencia (beta).otf');
}
function setup() {
  createCanvas(600, 600);
  frameRate()
  
//Time Categorization
 if (hours >= 12 && hours < 18) {
    greet = " Afternoon!";
    skyColorR = 0
    skyColorG = 167
    skyColorB = 255
    starColorR = 249
    starColorG = 146
    starColorB = 97
  } else if (hours >= 6 && hours < 12) {
    greet = " Morning!";
    skyColorR = 223
    skyColorG = 228
    skyColorB = 245
    starColorR = 255
    starColorG = 255
    starColorB = 255
  } else if (hours >= 18 && hours < 24) {
    greet = " Evening!";
    skyColorR = 18
    skyColorG = 29
    skyColorB =70
    starColorR = 180
    starColorG = 180
    starColorB = 255
  } else {
    greet = " Night!";
    skyColorR = 255
    skyColorG = 255
    skyColorB =255
    starColorR = 0
    starColorG = 47
    starColorB = 167
  }

}


function draw() {
  //slow motion of stars
  if (mouseIsPressed == true) {
  flow = 0.006;
  push();
  
  textFont(customFont);
  textAlign(CENTER);
  textSize(60);
  fill(255);
  stroke(0);
  strokeWeight(1);
  text('Good'+ greet, 300, 300);
  pop();
}
  else{
    flow = 0.03
    textSize(30);
    fill(255);
    textAlign(CENTER);
    stroke(0);
    strokeWeight(1);
    textFont(customFont);
    text('press to get greet!',300,580)
  }
  
  background(skyColorR, skyColorG, skyColorB, 20);
  //rotate center
  let pivotX = 300;
  let pivotY = 300;
  translate(pivotX,pivotY)
  rotate(angle);
  
  angle=angle+flow
  
 
  
    //stars
  stroke(starColorR,starColorG,starColorB)
  strokeWeight(5)
  point(20,50)
  point(50,67)
  point(190,32)
  point(120,244)
  point(196,147)
  point(280,200)
  point(-20,-190)
  point(-50,-67)
  point(-170,-39)
  point(-170,-264)
  point(-126,-197)
  point(-130,-230)
  point(46,-190)
  point(89,-67)
  point(246,-39)
  point(74,-264)
  point(147,-197)
  point(199,-230)
  point(-250,190)
  point(-140,67)
  point(-170,39)
  point(-30,264)
  point(-176,197)
  point(-210,230)
  
  
  

 

  
  



}