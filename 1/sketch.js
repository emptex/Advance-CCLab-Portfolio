let dialog = [
  "...It's raining, again.",
  "When will it stops?",
  "...",
  "I could remember..."
];
let Text1 = [
  'This town has always been raining.',
'Sometimes it is annoying. Though people here are used to it already. ',
'In those rains, acrossing cold dripples, there is always gonna be a place, where sheilds all rain and wind away. ',
'That is the home.',
'Mom is dedicated to keep home functioning. She deals with various problems, from the chores that seems can be done, to the relationships between people, wether it’s a family matter or not. She was always there.',
'She’s like role model of women depicted in the era, dedicated, loving, restless – ',
'That does means she is gonna have a absolute good return.',
'Mother: Tsz, did you finish your homework yet? You know, if you keep putting it off, it’ll pile up like the laundry. And believe me, you don’t want to be buried under that much work!',
'Yes, Mom. I’m almost done.',
'Mother: Almost done, huh? That’s what your father always says about fixing the door. But look at it! Still squeaks every time the wind blows. You know, back when I was your age, we didn’t have time to ‘almost’ finish anything. We just did it —-',

'Mother: Come sit closer, Tsz. You’ll catch a chill sitting that far. You know how this rain is—it’s like typhoon season all over again. And don’t forget, tomorrow is dim sum day with Auntie Mei. She’ll definitely ask if you’ve been studying well, and I can’t have you embarrass me, ah!',

'Okay, Mom!',

'Mother: Good boy. And after this, you can help me with dinner. You know, one day, you’ll need to cook for yourself. Can’t just live off instant noodles and cha chaan teng buns forever!',
'And the…man. My father. We used to have a good time, when I was younger. He would bring me the little weird things he got on his sea journey. Like a littel weird shell, a foreign land handcraft or even a mini instrument I that never know how to play. He was a good father. ',
'Was.',
  '...',
'Father: Just one more round, boys. I know my luck’s about to turn!',
  'Father:  All-in tonight!',
'Father: Don’t worry, I just got paid today, no problem!',

'Once he puts his hand on dices and cards, I knew there is no turning back.',
'...The same to me.'

];
let Text2 = [
  'I saw him. ',
  'Out there, in a downpour, on a muddy ground. Rain blurred his silhouette, Ridiculously, miserably.',

  'Father: I just... need another chance... Just one more shot!',

  'Casino Gaurd: Get lost you loser! You’ve had enough chances!',


  'He spent more and more time at that casino. It became everything to him. He’s been keep wining and losing with a suspicious balance, it almost seems like someone is controlling this to make him fall.',

  'Fall down to an abyss.',

  'Ridiculously, And I learned too. Learned to cheat, to make a little extra. I proclaimed that I am supporting my family with it…',
  'What if he thought so too?',

  'Passerby 1: Hey, kid, what game are you playing? Looks like you’ve got a few tricks up your sleeve.',

  'Just a simple game, sir. You guess the card, you double your money. Easy as that.',

  'Passerby 2: Sounds too easy. What’s the catch?',

  'No catch. Just a bit of luck and a sharp eye. Want to give it a try?',

  '(the Passerby nods and puts some money on the table. Tsz Tung lays out three cards face down, moving them around quickly.)',

  'Alright, keep your eye on the queen. Where is she now?',

  '(The Passerby points to a card, and Tsz flips it over—it’s the wrong card.)',

  'Passerby 1: Ah, damn it. Alright, one more try.',

  '(I nods, hiding my smile. I shuffles the cards again, expertly.)',

  'It took a prize to learn these little tricks. Learned how to make them think they had a chance. Just like my father always thought he did.',

  '(Passerby 2 watches closely, frowning.)',

  'Passerby 2: Wait a second... that move, you switched something.',
  'Me? Switching? You must be seeing things, sir. Care to try your luck instead?',

  '(Passerby 2 hesitates, then shakes his head.)',

  'Passerby 1: (grumbling) Fine, one more go. I swear I’ll get it this time.',

  '(I continues shuffling, his eyes glancing up at the crowd. I knows exactly what I am doing. I am just smiling. )',

  'It wasn’t about the money. It was about control, about power. About knowing that, for once, I wasn’t the one being played. I was the one dealing the cards.',

  'He is still struggling on the ground. ',

  'There he is again... thrown out, drenched in rain. Just a shadow of who he used to be.',

  'I should help. But I won’t. He brought this on himself.',

  ' ',

  'The rain grew heavier. I stood there, hating him. Hating everything he’d become.',

  'I turned my back on him. Maybe for the first time, maybe for the last. But I knew I couldn’t let his storm become ours.',
  ];
let Text3 =[  'A storm rushed through every corner of the town.',

  'I knew this day would come, ever since those dice and cards dragged him in. But I wasn’t sure if I really expected him to end like this.',

  '(Heavy knocking sound on the door)',

  'Debt Collector: "Open up! We know you’re in there! Pay up or else!"',

  'Father: (desperate) "I will pay! Just give me more time. I promise!"',

  'Debt Collector: (angry) "You bastard, we‘ve given you enough time!"',

  '...',

  'There were too many things that could explode at that moment. But everything broke down, swallowed back into an empty space.',

  'Mother: (whispering to Tsz, worried) "It will be okay, Tsz... Your father... he just needs time..."',

  'He needs time...? Really? I don’t think so. What he needs is much more than time, and we can’t afford to wait until he gets it.',

  'Why? Why doesn’t he understand that he‘d face this one day, yet he still put his hands on those dice and cards?',

  'Why... am I..."',

  'After they leave, the house falls into dead silence. His last words are blurred by the storm outside. I guess he would said things like:',

  '"I will be back, Tsz. One last trip. One last haul. Then everything will be fine!"',

  'But he never came back. And the storm just kept raging.',

  'After almost a month, we hadn’t heard a word from him. Then his debt came back to us.',

  '(Heavy knocking sound on the door)',

  'Debt Collector 1: "Open up, kid! Your father‘s debt doesn‘t just vanish!"',

  'Debt Collector 2: "Your father’s debt is now yours, boy. Come with us. You work until it’s paid."',
  '...',

  'Now I am here. Making my way through everything a miserable man brought upon us.',

  'Since then, the storm never stopped."']

let currentLine = 0;
let plot1line = 0;
let plot2line =0
let plot3line =0
let raindrops = [];
let currentScene = 1;
let rainFly = 0;
let s2p1, s1s1, s2s1, s3s1, s3p1, s3p2, s3p3;
let sceneChanged = false;
let rainVolume = 0;
let ThemeM = 0.2;
let fadeAlpha = 255;
let fadeAlpha2 = 255;
let fadeAlpha3 = 255;
let fadeAlphaRecall = 255;
let floatX = 0;
let BG = -1500
let floatY = 0;
let downFloat = true;
let upFloat = false;
let dropletInterval = 30;      // Initial interval between droplet generations (in frames)
let minDropletInterval = 1;    // Minimum interval to prevent it from becoming too fast
let intervalDecreaseRate = 0.025; // Amount by which the interval decreases each frame
let maskAlpha1 = 255
let maskAlpha2 = 255
let maskAlpha3 = 255
let unlock = false
let lightup = 0
let textColor = 255
let sceneStartTime = 0;
let elapsedTime = 0;


let waterX;
let waterY;
let waterSize = 30;
let droplets = [];
let waterLevel = 100;
let score = 0;
let hits = 0;
let gameOver = false;
let sRp2Alpha = 0; 



function preload() {
  s2p1 = loadImage('01.png');
  s1s1 = loadSound('rain.mp3');
  s2s1 = loadSound('bling.mp3');
  s3s1 = loadSound('ThemeMusic.mp3');
  s3p1 = loadImage('S3Main.jpg');
  s3p2 = loadImage('Memory.png');
  win = loadImage('win.jpg');
  s3p3 = loadImage('Recall.png');
  sRp1 = loadImage('miniTung.png');
  sRp2 = loadImage('GameOverText.png');
  sRp3 = loadImage('GameOverBG.jpg');
  sRp4 = loadImage('RecallBG.jpg');
  sRs1 = loadSound('Recall Music.mp3');
  sRs2 = loadSound('fail.mp3');
  font = loadFont('Font.otf')
  sMp1 = loadImage('MemoryMain.jpg');
  mask1 = loadImage('mask1.png');
  mask2 = loadImage('mask2.png');
  mask3 = loadImage('mask3.png');
  back = loadImage('back.png');
  mom = loadImage('mom.png');
  dad = loadImage('dad.png');
  tung = loadImage('tung.png');
  textbox = loadImage('textbox.png');
}


function setup() {
  createCanvas(600, 400);
  textFont(font);
  textSize(16);
  textAlign(CENTER, CENTER);
  startScene1();
  s3s1.loop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
   //console.log(mouseX, mouseY);

  switch (currentScene) {
    case 1:
      drawScene1();
      break;
    case 2:
      if (!sceneChanged) {
        startScene2();
        sceneChanged = true;
      }
      drawScene2();
      break;
    case 3:
      drawScene3();
      break;
    case "Recall":
      Recall();
      break;
      case "GameOver":
      GameOver();
      break
      case "Memory":
      Memory();
      break
      case "Win":
      WinGame();
      break
      case "plot1":
      plot1();
      break
      case "plot2":
      plot2();
      break
      case "plot3":
      plot3();
      break
    default:
      // Handle any other cases or provide a default behavior
      break;
  }
}

////////////////////// Setups //////////////////////////////////////
function startScene1() {
  raindrops = [];
  s1s1.loop();

  for (let i = 0; i < 100; i++) {
    raindrops.push(new Raindrop());
  }
}

function startScene2() {
  s2s1.setVolume(5.0);
  s2s1.play();
}

function startScene3() {
  sceneStartTime = 0
  sceneStartTime = millis() 
  fadeAlpha = 255;
  fadeAlpha2 = 255
  fadeAlpha3 = 255
  sRs1.stop()
  if (!s3s1.isPlaying()){
      s3s1.loop();
      }
  
}



function recallSetup() {
  fadeAlphaRecall = 255
  fadeAlpha3 = 255
  BG=-1500
  rainVolume = 0
  dropletInterval = 30;    
  sRs1.setVolume(2.0)
  s1s1.loop()
  sRs1.loop()
  waterX = width / 2;
  waterY = height - 50;
  waterSize = 30;
  droplets = [];
  waterLevel = 30;
  score = 0;
  hits = 0;
  gameOver = false;
}


function GameOverSetup() {
 sRs2.play() 
}

function WinSetUp(){
  s2s1.setVolume(5.0)
  s2s1.play() 
}

function MemorySetUp(){
  s1s1.stop();
  sceneStartTime = millis() 
}

function plot1Setup(){
  
  s2s1.setVolume(5.0)
  s2s1.play() 
  sceneStartTime = 0
  plot1line = 0
  lightup =0
  dadUp = 0
  s3s1.stop()
  s1s1.stop()
}
function plot2Setup(){
  s2s1.setVolume(5.0)
  s2s1.play() 
  sceneStartTime = 0
  plot2line = 0
  lightup =0
  dadUp = 0
  s3s1.stop()
  s1s1.stop()
}
function plot3Setup(){
  s2s1.setVolume(5.0)
  s2s1.play() 
  sceneStartTime = 0
  plot3line = 0
  lightup =0
  dadUp = 0
  s3s1.stop()
  s1s1.stop()
}

///////////////////////////// Draws ////////////////////////////////
function drawScene1() {
  s3s1.setVolume(ThemeM);
  background(230);
  if (rainVolume < 1) {
    rainVolume += 0.005;
    s1s1.setVolume(rainVolume);
  }
  fill(0);
  noStroke();
  text(dialog[currentLine], width / 2, (height / 4) * 3.5);

  for (let drop of raindrops) {
    drop.update();
    drop.show();
  }
  fill(0, fadeAlpha);
  noStroke();
  rect(0, 0, width, height);
  if (currentLine == dialog.length && mouseIsPressed) {
      currentScene = 2
    }

  if (fadeAlpha > 0) {
    fadeAlpha -= 255 / frameRate();
  }
}

function drawScene2() {
  background(230);
  fill(255);

  if (rainFly > -500) {
    rainFly -= 2;
  }
  push()
  translate(0, rainFly*1.2);
  image(s2p1, -400, 500);
  pop()
  text("Those days.", width / 2, height / 2);

  if (rainVolume > 0) {
    rainVolume -= 0.005;
    s1s1.setVolume(rainVolume);
  }

  for (let drop of raindrops) {
    drop.update();
    drop.show();
  }

  if (rainFly <= -500 && mouseIsPressed) {
    currentScene = 3;
  }
}

function drawScene3() {
  if (ThemeM < 1) {
    ThemeM += 0.01;
  }
  s3s1.setVolume(ThemeM);

  background(1);

  fill(255);
  text("Scene 3", width / 2, height / 2);
  push();
  scale(0.48);
  image(s3p1, 0, 0);
  pop();

  for (let drop of raindrops) {
    drop.update();
    drop.show();
  }

  if (floatY <= 1) {
    downFloat = true;
    upFloat = false;
  }
  if (floatY >= 5) {
    downFloat = false;
    upFloat = true;
  }

  if (downFloat && !upFloat) {
    floatY += 0.1;
  } else if (upFloat && !downFloat) {
    floatY -= 0.1;
  }
  translate(floatX, floatY);
  image(s3p2, 170, 20);
  image(s3p3, -170, 20);

  // Recall Scene
  elapsedTime = millis() - sceneStartTime;

  if (currentScene == 3 && elapsedTime > 1000) {
  if (
    mouseX > 60 && mouseX < 210 &&
    mouseY > 200 && mouseY < 235 && mouseIsPressed
  ) {
    currentScene = "Recall";
    if (ThemeM > 0) {
    ThemeM -= 0.01;
    s3s1.setVolume(ThemeM)
  }
    recallSetup();
    s2s1.play()
    
  }

  // Memory scene (Placeholder for future implementation)
  if (
    mouseX > 368 && mouseX < 560 &&
    mouseY > 200 && mouseY < 235 && mouseIsPressed
  ) {
    currentScene = "Memory"
    MemorySetUp()
    console.log("Memory!!");
    // Implement memory scene logic here
  }
  }

  // Blackout effect
  fill(0, fadeAlpha2);
  noStroke();
  rect(0, 0, width, height);

  if (fadeAlpha2 > 0) {
    fadeAlpha2 -= 255 / frameRate();
  }
}

function Recall() {
  rainVolume = lerp(rainVolume, 3, 0.0004); 
  s1s1.setVolume(rainVolume)
  background(255);
  
  if (BG < 0) {
    BG += 0.7
  }
  image(sRp4,0,BG)
  if (ThemeM > 0) {
    ThemeM -= 0.01;
    s3s1.setVolume(ThemeM)
  }

  if (!gameOver) {
    // Display water level and score
    textSize(12);
    textAlign(LEFT, TOP);
    text('Avoid hitting by the Raindrops!',20,380)
    text(`Sanity Remained: ${waterLevel}`, width -150, 40);
    text(`Memory Collected: ${score/4}%`, width - 150, 20);

    // Draw water (player)
    push();
    noFill();
    rect(waterX, waterY, waterSize, waterSize + 40);
    noStroke();
    // Draw the player image
    image(sRp1, waterX, waterY);
    pop();

        if (dropletInterval > minDropletInterval) {
      dropletInterval -= intervalDecreaseRate;
    }

    // Generate droplets based on the current interval
    if (frameCount % Math.round(dropletInterval) === 0) {
      droplets.push(new Droplet());
    }

    // Update and display droplets
    for (let i = droplets.length - 1; i >= 0; i--) {
      droplets[i].update();
      droplets[i].display();

      // Check collision with water
      if (droplets[i].hits(waterX, waterY, waterSize, waterSize + 40)) {
        waterLevel -= droplets[i].damage;
        hits++;
        droplets.splice(i, 1);
      }

      // Remove droplets that go off-screen
      if (droplets[i].offscreen()) {
        droplets.splice(i, 1);
        score++;
      }
    }
      if (score/4 >=30 ){
        unlocked1() 
      }
    if (score/4 >=50 ){
        unlocked2() 
      }
    if (score/4 >=100 ){
        unlocked3() 
      }
    // Move water based on arrow keys or WASD keys
    // Adjusted boundary checks
    if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && waterX - waterSize / 2 > 0) {
      waterX -= 5;
    }
    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && waterX + waterSize / 2 < width) {
      waterX += 5;
    }
    // if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && waterY - (waterSize + 40) / 2 > 0) {
    //   waterY -= 5;
    // }
    // if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && waterY + (waterSize + 40) / 2 < height) {
    //   waterY += 5;
    // }

    // Check if game over
    
    if (hits >= 30 || waterLevel <= 0) {
      gameOver = true;
    
   if (score/4 >= 100){
    currentScene = "Win"
    WinSetUp()
  }
    else{
    // Game over screen
    currentScene = "GameOver"
    GameOverSetup()
    //GameOver()
  }
    }
  }
 push()
   fill(0, fadeAlpha3);
  noStroke();
  rect(0, 0, width, height);

  if (fadeAlpha3 > 0) {
    fadeAlpha3 -= 255 / frameRate();
  }
  pop()
  
  image(back,0,0)
  if (
    mouseX > 15 && mouseX < 80 &&
    mouseY > 15 && mouseY < 35 && mouseIsPressed
  ) {
    startScene3()
    currentScene = 3;
  }
}
function GameOver(){
    image(sRp3,0,0);
    s1s1.stop()
    push(); // Save current drawing settings
    sRp2Alpha = lerp(sRp2Alpha, 255, 0.05); 
    tint(255, sRp2Alpha); // Apply alpha transparency to the image
    image(sRp2, 0, 0); // Draw the image at position (x, y)
    pop();
    sRs1.stop()
    
    push()
    textSize(12);
    fill("red")
    textAlign(CENTER, CENTER);
    text(`Memory Collected: ${score/4}%`, width / 2, 130);
    pop()
  if (
    mouseX > 60 && mouseX < 187 &&
    mouseY > 277 && mouseY < 308 && mouseIsPressed
  ) {
    recallSetup();
    currentScene = "Recall";
    
  }
  if (
    mouseX > 427 && mouseX < 545 &&
    mouseY > 277 && mouseY < 308 && mouseIsPressed
  ) {
    currentScene = 3;
  }
  
  fill(0, fadeAlphaRecall);
  noStroke();
  rect(0, 0, width, height);

  if (fadeAlphaRecall > 0) {
    fadeAlphaRecall -= 255 / frameRate();
  }

  
  
    }
function WinGame(){
  unlock = true
  if (mouseIsPressed){
    currentScene=3
    startScene3()
  }
    image(win,0,0)
}
function Memory(){

  //console.log("Elapsed Time:" + elapsedTime);
  push()
  scale(0.5)
  image(sMp1,0,0)
  pop()
  push()
  blendMode(MULTIPLY)
  scale(0.5)
  tint(255, 255, 255, maskAlpha1); 
  image(mask1,0,0)
  tint(255, 255, 255, maskAlpha2); 
  image(mask2,0,0)
  tint(255, 255, 255, maskAlpha3); 
  image(mask3,0,0)
  pop()
  
  
  textAlign(CENTER,TOP)
  textSize(8)
  fill(255,255,255,maskAlpha1)
  text("Collect 30% Memory to unlock",113, height/2)
  fill(255,255,255,maskAlpha2)
  text("Collect 50% Memory to unlock",width/2, height/2)
  fill(255,255,255,maskAlpha3)
  text("Collect 100% Memory to unlock",487, height/2)
  
  //backkkkk
  image(back,0,0)
  if (
    mouseX > 15 && mouseX < 80 &&
    mouseY > 15 && mouseY < 35 && mouseIsPressed
  ) {
    startScene3()
    currentScene = 3;
  }
  
  ///unlockkkkk
  if (maskAlpha1 == 0 || unlock==true){
    unlocked1()
  }
  if (maskAlpha2 == 0 || unlock==true){
    unlocked2()
  }
  if (maskAlpha3 == 0 || unlock==true){
    unlocked3()
  }
}

function unlocked1(){
  maskAlpha1 = 0
  //console.log("unlocked!!!")
  elapsedTime = millis() - sceneStartTime;

  if (currentScene == "Memory" && elapsedTime > 1000) {

  //Plot1
  if (
    mouseX > 50 && mouseX < 175&&
    mouseY > 35 && mouseY < 360 &&  mouseIsPressed==true
  ) {
    plot1Setup()
    currentScene = "plot1";
    console.log("plot1!")
  }
}
}
function unlocked2(){
  maskAlpha2 = 0
  //console.log("unlocked2!!!")
  elapsedTime = millis() - sceneStartTime;

  if (currentScene == "Memory" && elapsedTime > 1000) {

  //plot2
  if (
    mouseX > 236 && mouseX < 365&&
    mouseY > 35 && mouseY < 360 &&  mouseIsPressed==true
  ) {
    plot2Setup()
    currentScene = "plot2";
    console.log("plot2!")
  }
}
}

function unlocked3(){
  maskAlpha3 = 0
  //console.log("unlocked3!!!")
  elapsedTime = millis() - sceneStartTime;

  if (currentScene == "Memory" && elapsedTime > 1000) {
  if (
    mouseX > 425 && mouseX < 550&&
    mouseY > 35 && mouseY < 360 &&  mouseIsPressed==true
  ) {
    plot3Setup()
    currentScene = "plot3";
    console.log("plot3!")
  }
  }
}
let dadUp = 0
function plot1(){
  s1s1.setVolume(1.0)
  background(0)
  fill(230, lightup);
  noStroke();
  rect(0, 0, width, height);
  push()
  tint(255, lightup);
  scale(0.5)
  image(mom,width/4*3,height/4)
  image(tung,-150,height/4)
  pop()
  
  push()
  tint(255, dadUp);
  scale(0.5)
  image(dad,0,0,)
  pop()
  
  push()
  blendMode(MULTIPLY)
  image(textbox,0,0)
  pop()
  fill(textColor)
  textSize(12)
  textAlign(LEFT,TOP)
  text(Text1[plot1line], 60, (height / 4) * 3.2,500);
  //backkkkk
  image(back,0,0)
  if (
    mouseX > 15 && mouseX < 80 &&
    mouseY > 15 && mouseY < 35 && mouseIsPressed
  ) {
    startScene3()
    currentScene = 3;
  }

  

  if (lightup < 230 && plot1line >= 6 && plot1line < 13) {
    lightup += 230 / frameRate();
  } 
  if (lightup != 0 && plot1line >= 13){
    lightup -= 230 / frameRate();
  }
  if (plot1line >= 15 && plot1line <= 17){
    dadUp += 255/frameRate()
  }
  if (plot1line > 15 && dadUp>=0) {
    dadUp -= 255/frameRate()
  }

  
  
  if(plot1line == Text1.length){
    currentScene = "Memory"
    MemorySetUp()
  }
}



let move = 50
let dark = 255
function plot2(){
  background(0)
  fill(230, dark);
  noStroke();
  rect(0, 0, width, height);
  push()
  tint(255, lightup);
  scale(1)
  //image(mom,width/4*3,height/4)
  
  image(tung,move,-200)
  pop()
  
  push()
  tint(255, dadUp);
  scale(0.3)
  image(dad,0,350,)
  pop()
  
  push()
  blendMode(MULTIPLY)
  image(textbox,0,0)
  pop()
  textSize(12)
  fill(textColor)
  textAlign(LEFT,TOP)
  text(Text2[plot2line], 60, (height / 4) * 3.2,500);
  //backkkkk
  image(back,0,0)
  if (
    mouseX > 15 && mouseX < 80 &&
    mouseY > 15 && mouseY < 35 && mouseIsPressed
  ) {
    startScene3()
    currentScene = 3;
  }

  
  if (plot2line >= 0 && plot2line <2){
    lightup +=30
  }
  if (plot2line >= 2 && plot2line <=4 && dadUp <= 255){
    dadUp += 255 / frameRate(); 
  }
  if (plot2line > 4 && plot2line <=15 && move >= -250){
    dadUp -= 50 ; 
    move -= 5
  }
  if (plot2line >= 6 && plot2line <=15 && dark >= 0){
  dark -= 30
  }
  
  if (plot2line >= 25 && plot2line <=28){
    if( dark <= 255 ){
  dark += 255/frameRate()
      dadUp =255;
    }
    if(  move <= 50){
  move += 5
    }
  }
  
  if (plot2line >= 29){
    if (move >= -250){
      move -= 10
    } 
    if (dadUp > 0){
      dadUp -= 255/frameRate(); 
    }
    
    
  }
  
  if(plot2line == Text2.length){
    currentScene = "Memory"
    MemorySetUp()
  }
}


  

function plot3(){
  background(0)
  fill(255, dark);
  noStroke();
  rect(0, 0, width, height);
  push()
  tint(255, 255);
  scale(1)
  //image(mom,width/4*3,height/4)
  
  image(tung,-150,-200)
  pop()
  
  push()
  tint(255, dadUp);
  scale(0.3)
  image(dad,0,350,)
  pop()
  
  push()
  blendMode(MULTIPLY)
  image(textbox,0,0)
  pop()
  textSize(12)
  fill(textColor)
  textAlign(LEFT,TOP)
  text(Text3[plot3line], 60, (height / 4) * 3.2,500);
  //backkkkk
  image(back,0,0)
  if (
    mouseX > 15 && mouseX < 80 &&
    mouseY > 15 && mouseY < 35 && mouseIsPressed
  ) {
    startScene3()
    currentScene = 3;
  }

  if (plot3line==0){
    dark=0
  }
  if (plot3line >= 2 && plot3line <=6 && dark<255){
    dark +=30
  }
  if (plot3line >= 7 && plot3line <=8&& dark>0){
    dark -=30
  }
  if (plot3line >= 13 && plot3line <=14 && dark<255){
    dark +=30
  }
  if (plot3line >= 15 && plot3line <=16 && dark>0){
    dark -=30
  }
  if (plot3line >= 16 && plot3line <=18 && dark<255){
    dark +=30
  }
  if (plot3line >= 19 && plot3line <=20 && dark>0){
    dark -=30
  }
  
}







/////////////////////////////// More ////////////////////////////////////////
function mousePressed() {
  if (currentScene === "Memory") {
    // Back button
    if (mouseX > 15 && mouseX < 80 && mouseY > 15 && mouseY < 35) {
      startScene3();
      currentScene = 3;
    } else if ((maskAlpha1 == 0 || unlock == true) && elapsedTime > 3000) {
      unlocked1(); // Call unlocked1() to handle plot area clicks
    }
  }
  if (currentScene === 1) {
    if (currentLine <= dialog.length - 1) {
      currentLine++;}
    }  
     
  if (currentScene === "plot1") {
    if (plot1line <= Text1.length - 1) {
      plot1line++;}   
    }
  if (currentScene === "plot2") {
    if (plot2line <= Text2.length - 1) {
      plot2line++;}   
    }
  if (currentScene === "plot3") {
    if (plot3line <= Text3.length - 1) {
      plot3line++;}   
    }
}

class Raindrop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 5);
  }

  update() {
    this.y += this.yspeed;
    let gravity = map(this.z, 0, 20, 0, 0.2);
    this.yspeed += gravity;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 1, 5);
    }
  }

  show() {
    let thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke("#002fa7");
    if (currentScene === 3) {
      stroke(255);
    }
    line(this.x, this.y, this.x, this.y + this.len);
  }
}

function showGameOverScreen() {
  // Display game over screen elements
  fill(0, 150);
  rect(0, 0, width, height);
}

function restartGame() {
  // Reset all game variables
  recallSetup();


}

function goToMainMenu() {
  // Return to main menu
  currentScene = 3;
}

class Droplet {
  constructor() {
    this.x = random(width);
    this.y = -20;
    this.speed = random(3, 15);
    this.damage = 1;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, 4, 25);
  }

  hits(waterX, waterY, waterSize) {
    let d = dist(this.x, this.y, waterX + waterSize / 2, waterY + waterSize / 2);
    return d < 10 + waterSize / 2;
  }

  offscreen() {
    return this.y > height;
  }
}
