let rainSketch = function(p) {
    let raindrops = [];
  
    p.setup = function() {
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      // 将该 canvas 设置为背景
      canvas.style('position', 'fixed');
      canvas.style('top', '0');
      canvas.style('left', '0');
      canvas.style('z-index', '-1'); // 将此canvas放在所有元素后面
  
      for (let i = 0; i < 100; i++) {
        raindrops.push(new Raindrop(p));
      }
    };
  
    p.draw = function() {
      p.background(255);
      for (let drop of raindrops) {
        drop.fall();
        drop.show();
      }
    };
  
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  
    class Raindrop {
      constructor(p) {
        this.p = p;
        this.x = p.random(p.width);
        this.y = p.random(-500, 0);
        this.z = p.random(0, 20);
        this.len = p.map(this.z, 0, 20, 10, 20);
        this.yspeed = p.map(this.z, 0, 20, 4, 10);
      }
  
      fall() {
        this.y += this.yspeed;
        let grav = this.p.map(this.z, 0, 20, 0, 0.2); // 模拟重力加速度
        this.yspeed += grav;
  
        // 如果雨滴落出屏幕，重新生成
        if (this.y > this.p.height) {
          this.y = this.p.random(-200, 0);
          this.yspeed = this.p.map(this.z, 0, 20, 4, 10);
        }
      }
  
      show() {
        let thick = this.p.map(this.z, 0, 20, 1, 3); // 雨滴厚度
        this.p.strokeWeight(thick);
        this.p.stroke(0,47,167); // 蓝色雨滴
        this.p.line(this.x, this.y, this.x, this.y + this.len);
      }
    }
  };
  
  let myRain = new p5(rainSketch);
  