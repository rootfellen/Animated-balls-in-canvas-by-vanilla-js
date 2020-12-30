/* jshint esversion: 7 */
/* jshint -W097 */
// "use strict";

// let keyNames = {
//   32: "space",
//   37: "left",
//   38: "up",
//   39: "right",
//   40: "down",
//   13: "enter",
//   18: "option",
//   16: "shift",
// };

// $("body").keydown(function (event) {
//   console.log(event.keyCode);
// });

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

let Ball = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.speed = 5;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.size = 10;
};

Ball.prototype.move = function () {
  this.x += this.xSpeed * this.speed;
  this.y += this.ySpeed * this.speed;
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  } else if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, this.size, true);
};

Ball.prototype.setDirection = function (direction) {
  if (direction === "up") {
    this.xSpeed = 0;
    this.ySpeed = -5;
  } else if (direction === "down") {
    this.xSpeed = 0;
    this.ySpeed = 5;
  } else if (direction === "left") {
    this.xSpeed = -5;
    this.ySpeed = 0;
  } else if (direction === "right") {
    this.xSpeed = 5;
    this.ySpeed = 0;
  } else if (direction === "stop") {
    this.xSpeed = 0;
    this.ySpeed = 0;
  } else if (direction === "faster") {
    this.speed++;
  } else if (direction === "slower") {
    if (this.speed > 0) {
      this.speed--;
    }
  } else if (direction === "smaller") {
    if (this.size > 0) {
      this.size--;
    }
  } else if (direction === "bigger") {
    this.size++;
  }
};

Ball.prototype.setSpeed = function (newSpeed) {
  if (newSpeed !== undefined) {
    this.speed = newSpeed;
  }
};

let ball = new Ball();
let keyActions = {
  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  90: "faster",
  88: "slower",
  67: "smaller",
  86: "bigger",
};

let speeds = {
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
};

$("body").keydown(function (event) {
  let direction = keyActions[event.keyCode];
  ball.setDirection(direction);
  let speed = speeds[event.keyCode];
  ball.setSpeed(speed);
});

setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  ball.draw();
  ball.move();
  ctx.strokeRect(0, 0, width, height);
}, 30);
