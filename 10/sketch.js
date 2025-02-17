
let Font1, Font2, Font3, Font4, Font5, Font6, Font7, Font8, Font9;
let fontsArray;  
let currentFont;
let waveLetters = [];       
let radianLetters = [];    
let vortexLetters = [];     
let textBoundsWave;


let WaveBtn;    
let RadianBtn;
let VortexBtn;
let currentScene = "Wave";


let R1 = 255, G1 = 255, B1 = 255;
let R2 = 255, G2 = 255, B2 = 255;
let R3 = 255, G3 = 255, B3 = 255;
let r1 = 300, r2 = 600;

function preload() {
  Font1 = loadFont('Fonts/P22 Graciosa Regular.ttf'); 
  Font2 = loadFont('Fonts/Filmotype Jewel Regular.ttf'); 
  Font3 = loadFont('Fonts/IvyPresto Display Regular.ttf'); 
  Font4 = loadFont('Fonts/Leopard MN Regular.ttf'); 
  Font5 = loadFont('Fonts/Manifold CF Extra Bold.ttf'); 
  Font6 = loadFont('Fonts/Filmotype Jewel Regular.ttf'); 
  Font7 = loadFont('Fonts/IvyPresto Display Regular.ttf'); 
  Font8 = loadFont('Fonts/P22 Constructivist Pro Regular.ttf'); 
  Font9 = loadFont('Fonts/P22 Graciosa Regular.ttf'); 
}

function setup() {
  createCanvas(600, 600);

  fontsArray = [Font1, Font2, Font3, Font4, Font5, Font6, Font7, Font8, Font9];
  let randIndex = floor(random(fontsArray.length));
  currentFont = fontsArray[randIndex];


  WaveBtn = createButton("Wave");
  WaveBtn.position(50, 650);
  WaveBtn.mousePressed(() => {
    currentScene = "Wave";
    console.log("切换到 Wave 场景");
  });

  RadianBtn = createButton("Radian");
  RadianBtn.position(250, 650);
  RadianBtn.mousePressed(() => {
    currentScene = "Radian";
    console.log("切换到 Radian 场景");
  });

  VortexBtn = createButton("Vortex");
  VortexBtn.position(450, 650);
  VortexBtn.mousePressed(() => {
    currentScene = "Vortex";
    console.log("切换到 Vortex 场景");
  });
  updateLetters("WAVE", currentFont, waveLetters,   300, 400, 72);
  updateLetters("Radian", currentFont, radianLetters, 200, 300, 72);
  updateLetters("Vortex", currentFont, vortexLetters, 200, 350, 72);


  textBoundsWave = currentFont.textBounds("WAVE", 300, 400, 72);
}

function draw() {
  // 场景切换
  if (currentScene === "Wave") {
    drawWaveScene();
  } else if (currentScene === "Radian") {
    drawRadianScene(); 
  } else if (currentScene === "Vortex") {
    drawVortexScene();
  }
}

// ==================== 场景函数 ====================

// 1) Wave 场景
function drawWaveScene() {
  background(R1, G1, B1);

  // 背景波浪线
  push(); 
    translate(width / 2, height / 2);
    rotate(PI / 4);
    for (let y = -300; y < 300; y += 40) {
      drawWaveLine(-300, y);
    }
  pop();

  // 绘制背景蓝色圆形
  BG1();

  // 判断鼠标是否悬停在 "WAVE" 的区域内
  let isHover = false;
  if (
    mouseX >= textBoundsWave.x && mouseX <= textBoundsWave.x + textBoundsWave.w &&
    mouseY >= textBoundsWave.y && mouseY <= textBoundsWave.y + textBoundsWave.h
  ) {
    isHover = true;
  }
  
  // 让 waveLetters 做波动
  drawDottedText(waveLetters, isHover);
}

// 2) Radian 场景
function drawRadianScene() {
  background(R1 + 50, G1 + 50, B1 + 50);

  // 先画一个旋转的放射线示例
  push();
    translate(width / 2, height / 2);
    rotate(frameCount * 0.01);

    let numLines = 24;
    let radius = 700;
    let angleStep = TWO_PI / numLines;

    strokeWeight(2);
    stroke(255);

    for (let i = 0; i < numLines; i++) {
      push();
        rotate(i * angleStep);
        line(0, 0, radius, 0);
      pop();
    }
  pop();

  // 将 "Radian" 的点阵也做一个简单波动（或别的动画）
  drawDottedText(radianLetters, true); 
}

// 3) Vortex 场景
function drawVortexScene() {
  background(0);

  // === (A) 绘制背景“旋涡线”示例 ===
  push();
    translate(width / 2, height / 2);
    let swirlLinesCount = 36;
    let swirlRadius = 400;
    // 让这堆线随帧数缓慢旋转
    rotate(frameCount * 0.02);

    stroke(255, 80); // 半透明白
    strokeWeight(1);
    for (let i = 0; i < swirlLinesCount; i++) {
      let angle = map(i, 0, swirlLinesCount, 0, TWO_PI);
      push();
        rotate(angle);
        line(0, 0, swirlRadius, 0);
      pop();
    }
  pop();

  // === (B) 绘制 Vortex 点阵文字的“旋涡动画” ===
  // 这里不采用波浪，而是让文字的坐标围绕其中心小范围旋转，
  // 你也可以改成别的算法，比如再做一个螺旋扭曲
  vortexText(vortexLetters);
}

// ==================== 点阵更新/绘制函数 ====================

/**
 * updateLetters():
 * 根据给定 font、字符串、位置和大小，将结果点阵存进 targetArray。
 */
function updateLetters(str, font, targetArray, startX, baseY, fontSize) {
  // 先清空
  targetArray.length = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    // 利用 textToPoints() 转成点阵
    let pts = font.textToPoints(letter, startX, baseY, fontSize, {
      sampleFactor: 0.2,
      simplifyThreshold: 0
    });
    targetArray.push(pts);

    // 计算这个字母的边界，用来确定下一个字母的起始 x
    let b = font.textBounds(letter, startX, baseY, fontSize);
    startX += b.w + 10;
  }
}

/**
 * drawDottedText():
 * 与你之前 waveText() 类似，用正弦函数让文字抖动。
 * enableWave 表示是否启动波动。
 */
function drawDottedText(letterArray, enableWave) {
  noFill();
  stroke(0);
  strokeWeight(2);

  let amplitude = enableWave ? 10 : 0;

  for (let pts of letterArray) {
    beginShape();
    for (let p of pts) {
      let offset = sin((p.x + frameCount * 2) * 0.05) * amplitude;
      vertex(p.x, p.y + offset);
    }
    endShape(CLOSE);
  }
}

/**
 * vortexText():
 * 为 "Vortex" 文字做一个旋涡式动画示例。
 * 这里演示一种“每个点围绕其自身坐标做小幅旋转”的效果。
 * 你也可以改成更复杂的螺旋变形。
 */
function vortexText(letterArray) {
  noFill();
  stroke(255);
  strokeWeight(2);

  // 让每个点做轻微旋转/扭曲，旋涡半径可调
  let swirlRadius = 10;

  for (let pts of letterArray) {
    beginShape();
    for (let p of pts) {
      // 计算一个与点位置 + 时间相关的角度
      let angle = (p.x + p.y + frameCount * 2) * 0.01;
      let offsetX = swirlRadius * cos(angle);
      let offsetY = swirlRadius * sin(angle);
      vertex(p.x + offsetX, p.y + offsetY);
    }
    endShape(CLOSE);
  }
}

// ==================== 背景 + 波浪线 ====================
function BG1() {
  fill(R2, G2, B2);
  noStroke();
  circle(600, 600, r1);
  circle(0, 0, r2);
}

function drawWaveLine(startX, startY) {
  noFill();
  stroke(R3, G3, B3);
  strokeWeight(2);
  beginShape();
  for (let x = startX; x < width; x += 10) {
    let offset = sin((x + frameCount) * 0.05) * 10;
    vertex(x, startY + offset);
  }
  endShape();
}

// ==================== 鼠标点击触发随机色 + 随机字体 ====================
function mousePressed() {
  RandomColor();
}

function RandomColor() {
  // 随机颜色
  R1 = random(20,255);
  G1 = random(20,255);
  B1 = random(20,255);
  R2 = random(20,255);
  G2 = random(20,255);
  B2 = random(20,255);
  R3 = random(20,255);
  G3 = random(20,255);
  B3 = random(20,255);
  r1 = random(100,600);
  r2 = random(100,600);

  // 随机字体
  let randIndex = floor(random(fontsArray.length));
  currentFont = fontsArray[randIndex];

  // 重新生成 "WAVE" / "Radian" / "Vortex" 点阵，以便在新字体下显示
  updateLetters("WAVE", currentFont, waveLetters,   300, 400, 72);
  updateLetters("Radian", currentFont, radianLetters, 200, 300, 72);
  updateLetters("Vortex", currentFont, vortexLetters, 200, 350, 72);
}
