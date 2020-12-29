/* jshint esversion: 7 */
/* jshint -W097 */
// "use strict";

//!TODO: Drawing and animating square (icnreasing size)
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let size = 200;

// setInterval(function () {
//   ctx.clearRect(0, 0, 200, 200);
//   ctx.fillRect(size, 0, size, size);
//   size--;
//   if (size < 0) {
//     size = 200;
//   }
// }, 30);

//!TODO: Drawing a bee and animating her moves

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.fillStyle = "gold";
ctx.lineWidth = 2;

let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

let drawBee = function (x, y) {
  circle(x, y, 8, false);
  circle(x + 15, y, 8, false);
  circle(x + 7, y + 23, 16, true);
  circle(x + 7, y + 23, 18, false);
  circle(x + 4, y + 20, 4, false);
  circle(x + 12, y + 20, 4, false);
};

let update = function (coordinate) {
  let offset = Math.random() * 4 - 2;
  coordinate += offset;

  if (coordinate > 200) {
    coordinate = 200;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }
  return coordinate;
};
let x = 100;
let y = 100;

setInterval(function () {
  ctx.clearRect(0, 0, 200, 200);
  drawBee(x, y);
  x = update(x);
  y = update(y);
  ctx.strokeRect(0, 0, 200, 200);
}, 30);
