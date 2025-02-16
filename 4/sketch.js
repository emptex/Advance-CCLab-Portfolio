/*
#1 - Lost & Found
Name:Brian/ Partner: Silvia
Object Description: "When I was a child, I lost a heart-shaped keychain. It was bronze in color, and the heart part was a peachy-orange shade"

*/






let y=50;
let x=50
let check=false;
let size=100
let bg=0
let spark = 0



function setup() {
  createCanvas(400, 400);
}

function draw() {
  //console.log(mouseX,mouseY);
  background(bg);

  if (mouseIsPressed=== true){
    background(bg)
    spark = 0
    y=50
    x=80
    size=size+10
    
    bg=bg+7
    if(size==400){
      size=0
    }
    noFill()
    strokeWeight(10)
    stroke(random(190,275),random(100,240),random(0,90));
    circle(195,210,size);
    circle(195,210,size-50)
    circle(195,210,size-100)
  }if(bg>=255){
    bg=bg-7
  }
  if(mouseIsPressed==false){
    textSize(18);
    textFont('Courier New')
    fill(0);
    stroke(255);
    strokeWeight(2);
    text('Press mouse to Light up', 80, 380);
      size=0
      bg=bg-7
      spark=0.8
    
  }if(bg<=0){
    bg=bg+7
  }
  ellipseMode (RADIUS);
  fill(51,38,25);
  strokeWeight(0);
  
  push()
  translate(0,y)
  ellipse (140,110,50,50);
  ellipse (200,170,50,50);
  rectMode(CORNER);
  rect (90,110,100,120)
  push()
  noFill()
  strokeWeight(5)
  stroke(5)
  circle(203,112,15);
  strokeWeight(7)
  stroke(195, 165, 136)
  circle(205,115,15);
  strokeWeight(1.5)
  stroke(255)
  circle(204,114,17);
  pop()
  fill(255)
  rect (95,110,100,120)
  ellipse (205,175,50,50);
  ellipse (145,115,50,50);
  
  fill(220,188,139);
  strokeWeight(0);
  ellipse (150,120,50,50);
  ellipse (210,180,50,50);
  rectMode(CORNER);
  rect (100,130,100,100)
  fill(255)
  quad(100,110,250,210,236,223,100,135)
  fill(127,74,26)
  quad(100,135,236,223,228,228,100,145)
  fill(51,38,25);
  quad(100,153,218,230,100,230,100,173)
  fill(251,233,217);
  quad(100,170,195,230,100,230,100,173)
  fill(255)
  ellipse(130,90,7,8)
  
  //chain

 strokeWeight(7)
  stroke(70)
  noFill()
  ellipse(220,79,12,12)
  ellipse(281,25,45,45)
  line(207,110,217,85)
  line(225,74,247,50)
  
  strokeWeight(5)
  stroke(195, 165, 136)
  noFill()
  ellipse(223,79,12,12)
  ellipse(284,25,45,45)
  line(210,110,220,85)
  line(228,74,250,50)
  
  fill(255)
  stroke(255)
  strokeWeight(2)
  ellipse(215,70,1,1)
  ellipse(249,-3,1,1)
  pop()
  
  
  //Spark
  
  push()
  translate(-80,x+40)
  scale(spark)
  translate(105,93)
  fill(255)
  stroke(255, 245, 219)
  strokeWeight(5)
  beginShape()
  vertex(115,60);
  vertex(123,88);
  vertex(147,92);
  vertex(123,99);
  vertex(115,120);
  vertex(110,99);
  vertex(88,92);
  vertex(110,88);
  vertex(115,60);
  endShape()
  pop()
  fill(255)
  
 

  if(y==70){
    check=true

    

  }
  if (y==50){
    check=false
 
    
  }
  if (check==true){
        y=y-0.25
        x=x+1
       

    
  }else{
    y=y+0.25
    x=x-1

  
  
  }
}