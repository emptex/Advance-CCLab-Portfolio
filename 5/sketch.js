let waterIntake = [3, 5, 4, 6, 8, 7, 5]; // Cups of water per day for a week

function setup() {
  createCanvas(600, 600);
  frameRate(60); // Control the speed of the animation
}

let currentHeights = [0, 0, 0, 0, 0, 0, 0]; // Heights start at 0 for animation
let waveRise = 0;

function draw() {
  background(255);
  
  // Draw simple wave background effect
  drawWaterBackground();
  
  let barWidth = 65;
  let xOffset = 40;

  for (let i = 0; i < waterIntake.length; i++) {
    let targetHeight = waterIntake[i] * 60; // Each cup equals 30 pixels in height
    if (currentHeights[i] < targetHeight) {
      currentHeights[i] += 2; // Animate the height growth
    }
    
    // Draw the bar
    fill(255);
    rect(xOffset + i * (barWidth + 10), height - currentHeights[i], barWidth, currentHeights[i]);
    
    // Text label
    fill(255);
    textAlign(CENTER);
    text(waterIntake[i] + " cups", xOffset + i * (barWidth + 10) + barWidth / 2, height - currentHeights[i] - 10);
  }
}

function drawWaterBackground() {
  noStroke();
  fill("#002fa7");
  let y = height - waveRise;
  beginShape();
  vertex(0, y);
  for (let x = 0; x <= width; x += 20) {
    let waveHeight = sin((x + waveRise) * 0.02) * 10;
    vertex(x, y + waveHeight);
  }
  vertex(width, y);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  waveRise += 1;
}

