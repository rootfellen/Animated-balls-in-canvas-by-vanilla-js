/* jshint esversion: 7 */
/* jshint -W097 */
// "use strict";

// const sound = function () {
//   return `Hello, my name is ${this.name} and I can make a sound like ${this.sign}`;
// };

// let dog = {
//   name: "Joe",
//   age: 12,
//   color: "black",
//   sign: "woof",
//   sound: sound,
// };

// let cat = {
//   name: "Carol",
//   age: 5,
//   sign: "meow",
//   color: "white",
//   sound: sound,
// };

// TODO: Cars game by using constructor function

let Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.speed = 5;
  this.draw();
};

Car.prototype.draw = function () {
  let carHtml = '<img src="/img/car.png">';
  this.carElement = $(carHtml);
  this.carElement.css({
    position: "absolute",
    left: this.x,
    right: this.y,
  });
  $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
  let carspeed = Math.floor(Math.random() * 5);
  this.x += carspeed;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveLeft = function () {
  this.x -= this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveDown = function () {
  this.y += this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
Car.prototype.moveUp = function () {
  this.y -= this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};
let tesla = new Car(200, 300);
let nissan = new Car(200, 300);

let movingRight = function () {
  tesla.moveRight();
  nissan.moveRight();
};

setInterval(movingRight, 30);
