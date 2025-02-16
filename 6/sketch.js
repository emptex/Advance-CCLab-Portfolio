let hairColor;
let eyeColor;
let clothColor;
let skinColor;


function setup() {
  createCanvas(400, 400);
  frameRate(1)
}



function draw() {
  console.log(mouseX, mouseY);
  background(255);
  strokeWeight(2);
  fill(mouseX, mouseY,mouseX+50);
  rectMode(CENTER);
  noStroke();
  rect(200, 200, 300);
  
  //bg

  push();
  hairColorR=(random(100,200));
  hairColorG=(random(100,200));
  hairColorB=(random(100,200));
  fill(hairColorR,hairColorG,hairColorB);
  stroke(0);
  quad(144, 151, 152, 195, 160, 174);
  quad(154, 173, 163, 200, 162, 167);
  quad(256, 160, random(252,300), random(120,400), 244, 174);
  quad(247, 181, 238, 205, 233, 183);
  pop();
  //back hair

  push();
  fill("#ffb3b3");
  rectMode(CENTER);
  stroke(0);
  rect(200, 200, 60, 80);
  pop();

  push();
  skinColorR=(random(200,255))
  skinColorG=(random(100,170))
  skinColorB=(random(80,180))
  fill(skinColorR,skinColorG,skinColorB);
  stroke(0);
  ellipseMode(CENTER);
  ellipse(137, 138, 30, 50);
  ellipse(262, 138, 30, 50);
  ellipse(200, 105, 150, 150);
  quad(200, 105, 200, 210, 153, 180, 130, 130);
  quad(200, 105, 200, 210, 253, 180, 270, 130);
  pop();
  //face

  push();
  stroke(skinColorR,skinColorG,skinColorB);
  strokeWeight(5);
  line(132, 128, 200, 105);
  line(200, 105, 266, 127);
  line(200, 100, 200, 206);
  pop();

  //skin neck

  push();
  translate(0,random(0,10))
  stroke("#ffb3b3");
  fill("#ffd9b3");
  triangle(200, 160, 194, 155, 206, 155);
  line(random(185,195), 182, random(208,218), 182);
  pop();

  //nose and mouth

  push();
  fill(254);
  ellipseMode(CENTER);
  ellipse(168, 130, 30, 17);
  ellipse(233, 130, 30, 17);
  pop();
  //eyeball

  push();
  fill(random(10,200),random(10,200),random(10,200));
  stroke("#ff9900");
  strokeWeight(1);
  ellipseMode(CENTER);
  ellipse(168, 130, 12, 16);
  ellipse(233, 130, 12, 16);
  ellipse(168, 130, 2, 2);
  ellipse(233, 130, 2, 2);
  pop();
  //eye

  push();
  stroke(0);
  fill(0);
  quad(154, 128, 163, 124, 178, 124, 162, 121);
  quad(178, 124, 186, 127);
  quad(221, 124, 214, 127);
  quad(220, 124, 235, 124, 245, 127, 235, 121);
  //eyelesh
  quad(184, 116, 161, 112, 150, 114);
  quad(215, 116, 234, 112, 255, 114);
  //eye brow
  pop();

  if (keyIsPressed && keyCode == "1") {
    fill("#ffe6e6");
    circle(200, 130, 120);
    //cover

    push();
    stroke(0);
    fill(0);
    quad(154, 131, 163, 133, 178, 130, 162, 132);
    quad(178, 130, 186, 128);
    //left

    quad(221, 131, 214, 128);
    quad(220, 131, 235, 133, 245, 130, 235, 132);
    //eyelesh
    quad(184, 116, 161, 112, 150, 114);
    quad(215, 116, 234, 112, 255, 114);
    //eye brow

    push();
    stroke("#ffb3b3");
    fill("#ffd9b3");
    triangle(200, 160, 194, 155, 206, 155);
    line(190, 182, 199, 180);
    line(213, 182, 204, 180);
    pop();

    //nose and mouth
    pop();
  }

  push();
  fill(random(10,200),random(10,200),random(10,200));
  rectMode(CENTER);
  stroke(0);
  rect(200, 300, random(130,70), random(150,180));
  pop();
  //collarshirt

  push();
  clothWidth=random(30,60)
  fill(random(10,200),random(10,200),random(10,200));
  stroke(0);
  quad(150, 220, 250, 400, clothWidth, 400, clothWidth, 260, 20);
  quad(250, 220, 345, 250, 345, 400, 150, 400);
  pop();
  push();
  fill(random(10,200),random(10,200),random(10,200));
  quad(clothWidth, 260, clothWidth, 400, 13, 400, clothWidth, 260);
  quad(345, 250, 390, 400, 345, 400, 345, 250);
  pop();
  //coat

  push();
  fill(45);
  stroke(0);
  triangle(150, 220, 200, 310, 100, 220);
  triangle(250, 220, 200, 310, 300, 220);
  pop();
  //collar

  push();
  fill("#e60000");
  strokeWeight(1);
  stroke(0);
  quad(200, 310, 239, 277, 179, 400, 150, 400);
  pop();
  //tie

  push();
  if (mouseIsPressed=== true){
  hairColor=100
    }
  stroke(0);
  fill(random(10,200),random(10,200),random(10,200));
  quad(200, 30, random(130,140), random(20,50), random(90,130), random(61,71), random(103,113), 90);
  quad(200, 30, 179, 22, 150, 33, 124, 50);
  quad(267, 100, 273, 117, 268, 150, 257, 94);
  quad(200, 30, random(250,270), random(30,40), random(280,290), random(70,80));
  quad(155, 64, random(130,150), 130, 130, random(152,400), random(120,130), 120);
  quad(200, 30, 215, 20, 250, 30, 267, 50);
  quad(200, 30, 190, 16, 200, 3, 197, 9);
  quad(200, 30, 215, 80, random(165,190), random(109,120), 187, 87);
  quad(200, 30, random(278,300), random(130,250), random(280,300), 80, 249, 39);
  quad(200, 30, random(110,120), random(130,400), 120, 80, 158, 35);
  quad(200, 30, 240, 80, random(240,280), random(127,200), 255, 75);
  quad(200, 30, 225, 75, random(175,190), random(90,200), 205, 80);
  quad(200, 30, 240, 70, random(225,235), random(115,200), 220, 75);
  quad(200, 30, 195, 75, 207, 134, 160, 60);
  quad(200, 30, 160, 95, 155, 130, 140, 70);

  pop();
  //hair
}

function mousePressed() {
 push();
  fill(40);
  stroke(0);
  quad(144, 151, 152, 195, 160, 174);
  quad(154, 173, 163, 200, 162, 167);
  quad(256, 160, 252, 200, 244, 174);
  quad(247, 181, 238, 205, 233, 183);
  pop();
  //back hair

  push();
  fill("#ffb3b3");
  rectMode(CENTER);
  stroke(0);
  rect(200, 200, 60, 80);
  pop();

  push();
  fill("#ffe6e6");
  stroke(0);
  ellipseMode(CENTER);
  ellipse(137, 138, 30, 50);
  ellipse(262, 138, 30, 50);
  ellipse(200, 105, 150, 150);
  quad(200, 105, 200, 210, 153, 180, 130, 130);
  quad(200, 105, 200, 210, 253, 180, 270, 130);
  pop();
  //face

  push();
  stroke("#ffe6e6");
  strokeWeight(5);
  line(132, 128, 200, 105);
  line(200, 105, 266, 127);
  line(200, 100, 200, 206);
  pop();

  //skin neck

  push();
  stroke("#ffb3b3");
  fill("#ffd9b3");
  triangle(200, 160, 194, 155, 206, 155);
  line(190, 182, 213, 182);
  pop();

  //nose and mouth

  push();
  fill(254);
  ellipseMode(CENTER);
  ellipse(168, 130, 30, 17);
  ellipse(233, 130, 30, 17);
  pop();
  //eyeball

  push();
  fill("gold");
  stroke("#ff9900");
  strokeWeight(1);
  ellipseMode(CENTER);
  ellipse(168, 130, 12, 16);
  ellipse(233, 130, 12, 16);
  ellipse(168, 130, 2, 2);
  ellipse(233, 130, 2, 2);
  pop();
  //eye

  push();
  stroke(0);
  fill(0);
  quad(154, 128, 163, 124, 178, 124, 162, 121);
  quad(178, 124, 186, 127);
  quad(221, 124, 214, 127);
  quad(220, 124, 235, 124, 245, 127, 235, 121);
  //eyelesh
  quad(184, 116, 161, 112, 150, 114);
  quad(215, 116, 234, 112, 255, 114);
  //eye brow
  pop();

  if (keyIsPressed && keyCode == 32) {
    fill("#ffe6e6");
    circle(200, 130, 120);
    //cover

    push();
    stroke(0);
    fill(0);
    quad(154, 131, 163, 133, 178, 130, 162, 132);
    quad(178, 130, 186, 128);
    //left

    quad(221, 131, 214, 128);
    quad(220, 131, 235, 133, 245, 130, 235, 132);
    //eyelesh
    quad(184, 116, 161, 112, 150, 114);
    quad(215, 116, 234, 112, 255, 114);
    //eye brow

    push();
    stroke("#ffb3b3");
    fill("#ffd9b3");
    triangle(200, 160, 194, 155, 206, 155);
    line(190, 182, 199, 180);
    line(213, 182, 204, 180);
    pop();

    //nose and mouth
    pop();
  }

  push();
  fill("#ff9900");
  rectMode(CENTER);
  stroke(0);
  rect(200, 300, 100, 180);
  pop();
  //collarshirt

  push();
  fill(30);
  stroke(0);
  quad(150, 220, 250, 400, 55, 400, 55, 260, 20);
  quad(250, 220, 345, 250, 345, 400, 150, 400);
  pop();
  push();
  fill(40);
  quad(55, 260, 55, 400, 13, 400, 55, 260);
  quad(345, 250, 390, 400, 345, 400, 345, 250);
  pop();
  //coat

  push();
  fill(45);
  stroke(0);
  triangle(150, 220, 200, 310, 100, 220);
  triangle(250, 220, 200, 310, 300, 220);
  pop();
  //collar

  push();
  fill("#e60000");
  strokeWeight(1);
  stroke(0);
  quad(200, 310, 239, 277, 179, 400, 150, 400);
  pop();
  //tie

  push();
  stroke(0);
  fill(50);
  quad(200, 30, 135, 45, 125, 66, 108, 90);
  quad(200, 30, 179, 22, 150, 33, 124, 50);
  quad(267, 100, 273, 117, 268, 150, 257, 94);
  quad(200, 30, 250, 35, 280, 70);
  quad(155, 64, 138, 130, 130, 152, 124, 120);
  quad(200, 30, 215, 20, 250, 30, 267, 50);
  quad(200, 30, 190, 16, 200, 3, 197, 9);
  quad(200, 30, 215, 80, 175, 109, 187, 87);
  quad(200, 30, 278, 130, 280, 80, 249, 39);
  quad(200, 30, 115, 130, 120, 80, 158, 35);
  quad(200, 30, 240, 80, 245, 127, 255, 75);
  quad(200, 30, 225, 75, 175, 130, 205, 80);
  quad(200, 30, 240, 70, 225, 115, 220, 75);
  quad(200, 30, 195, 75, 207, 134, 160, 60);
  quad(200, 30, 160, 95, 155, 130, 140, 70);

  pop();
}
