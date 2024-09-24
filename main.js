// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
//随机颜色函数
function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}

//小方块的声明
//小方块的声明
function Ball(x, y, velX, velY, color,sideLength ) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.sideLength = sideLength;
  }
  Ball.prototype.draw = function () {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, this.sideLength, this.sideLength);
      ctx.fill(); // 或者 ctx.fill() 来填充正方形
    };



    let testBall = new Ball(50, 50, 4, 4, "blue",10);
    testBall.x;
    testBall.sideLength;
    testBall.color;
    testBall.draw();
    
    Ball.prototype.update = function () {
        if (this.x + this.sideLength >= width) {
          this.velX = -this.velX;
        }
      if (this.x <= 0) {
        this.velX = -this.velX;
      }
     
      
        if (this.y + this.sideLength >= height) {
          this.velY = -this.velY;
        }
      if (this.y <= 0) {
        this.velY = -this.velY;
      }
    
      
        this.x += this.velX;
        this.y += this.velY;
      };
      
      let balls = [];
      
      while (balls.length < 20) {
        let sideLength = random(0, 50);
        let ball = new Ball(
          // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
          random(0 , width ),
          random(0 , height ),
          random(-7, 7),
          random(-7, 7),
          randomColor(),
          sideLength,
        );
        balls.push(ball);
      }
      
      function loop() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, width, height);
      
        for (let i = 0; i < balls.length; i++) {
          balls[i].draw();
          balls[i].update();
        }
      
        requestAnimationFrame(loop);
      }
      loop();
      






