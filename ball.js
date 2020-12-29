/* jshint esversion: 7 */
/* jshint -W097 */
// "use strict";
let Ball = function () {
  this.x = 100;
  this.y = 100;
  this.xSpeed = Math.random() * 10 - 5;
  this.ySpeed = Math.random() * 10 - 5;
  let colors = ["Red", "Orange", "yellow", "Green", "Blue", "Purple"];
  this.color = randomColor(colors);
};

let randomColor = function (colors) {
  return colors[Math.floor(Math.random() * colors.length)];
};
let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, 3, true);
  ctx.fillStyle = this.color;
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed;
  }
};
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let balls = [];

for (let i = 0; i < 10; i++) {
  balls[i] = new Ball();
}
setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
  }
  ctx.strokeStyle = "green";
  ctx.strokeRect(0, 0, width, height);
}, 30);
