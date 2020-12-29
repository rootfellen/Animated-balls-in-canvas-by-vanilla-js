/* jshint esversion: 7 */
/* jshint -W097 */
// "use strict";

// TODO: using canvas to draw

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// for (let i = 0; i < 20; i++) {
//   ctx.fillRect(i * 10, i * 10, 10, 10);
// }

// !TODO: Drawing robot with fillRect

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(70, 10, 50, 50);
// ctx.fillRect(90, 60, 10, 30);
// ctx.fillRect(45, 80, 100, 10);
// ctx.fillStyle = "green";
// ctx.fillRect(65, 80, 60, 50);
// ctx.fillStyle = "brown";
// ctx.fillRect(65, 130, 10, 50);
// ctx.fillRect(115, 130, 10, 50);

// !TODO: Drawing with strokeRect

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// ctx.strokeStyle = "Green";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(120, 120);
// ctx.lineTo(60, 60);
// ctx.moveTo(120, 60);
// ctx.lineTo(60, 120);
// ctx.stroke();

// !TODO: Drawing human by using movePath and strokefill

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// ctx.strokeStyle = "Green";
// ctx.lineWidth = 4;
// ctx.strokeRect(90, 50, 24, 24);
// ctx.strokeRect(101, 75, 2, 40);

// ctx.beginPath();
// ctx.moveTo(100, 90);
// ctx.lineTo(80, 80);
// ctx.moveTo(125, 80);
// ctx.lineTo(100, 90);
// ctx.moveTo(100, 115);
// ctx.lineTo(80, 150);
// ctx.moveTo(103, 115);
// ctx.lineTo(125, 150);
// ctx.stroke();

//!TODO: drawing house and filling in with fill()

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// ctx.fillStyle = "blue";
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 60);
// ctx.lineTo(130, 30);
// ctx.lineTo(160, 60);
// ctx.lineTo(160, 100);
// ctx.lineTo(100, 100);
// // ctx.moveTo(100, 100);
// // ctx.lineTo(100, 120);
// // ctx.lineTo(80, 120);
// // ctx.lineTo(80, 100);
// // ctx.lineTo(100, 100);
// ctx.fill();

//!TODO: drawing circle by using arc method

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// ctx.lineWidth = 2;
// ctx.strokeStyle = "green";

// // 1
// ctx.beginPath();
// ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
// ctx.stroke();

// // 2
// ctx.beginPath();
// ctx.arc(100, 50, 20, 0, Math.PI, false);
// ctx.stroke();

// //3
// ctx.beginPath();
// ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
// ctx.stroke();

//!TODO: drawing circle by using arc method inside the function (drawing snowman)

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let circle = function (x, y, radius, color, fillCircle) {
//   if (fillCircle === true) {
//     ctx.fillStyle = color;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.fill();
//   } else {
//     ctx.lineWidth = 4;
//     ctx.strokeStyle = color;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.stroke();
//   }
// };
// circle(180, 150, 40, "black", false);
// circle(180, 270, 80, "black", false);
// circle(170, 140, 5, "black", true);
// circle(190, 140, 5, "black", true);
// circle(180, 155, 5, "orange", true);
// circle(180, 240, 7, "black", true);
// circle(180, 270, 7, "black", true);
// circle(180, 300, 7, "black", true);

//TODO: drawing snowman by using snowman function and x & y arguments to place our snowman

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let circle = function (x, y, radius, color, fillCircle) {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//   if (fillCircle) {
//     ctx.fillStyle = color;
//     ctx.fill();
//   } else {
//     ctx.lineWidth = 4;
//     ctx.strokeStyle = color;
//     ctx.stroke();
//   }
// };

// let snowman = function (x, y) {
//   circle(x, y, 40, "black", false);
//   circle(x, y + 120, 80, "black", false);
//   circle(x - 10, y - 10, 5, "black", true);
//   circle(x + 10, y - 10, 5, "black", true);
//   circle(x, y + 5, 5, "orange", true);
//   circle(x, y + 90, 7, "black", true);
//   circle(x, y + 120, 7, "black", true);
//   circle(x, y + 150, 7, "black", true);
// };

// //TODO: Function to draw from point to point (by using for loop)

// let points = [
//   [50, 50],
//   [50, 100],
//   [100, 100],
//   [100, 50],
//   [50, 50],
// ];
// let mysteryPoints = [
//   [50, 50],
//   [50, 100],
//   [25, 120],
//   [100, 50],
//   [70, 90],
//   [100, 90],
//   [70, 120],
// ];
// let drawPoints = function (points) {
//   let canvas = document.getElementById("canvas");
//   let ctx = canvas.getContext("2d");
//   ctx.strokeStyle = "black";
//   ctx.beginPath();
//   ctx.moveTo(points[0][0], points[0][1]);
//   for (let i = 1; i < points.length; i++) {
//     ctx.lineTo(points[i][0], points[i][1]);
//   }

//   ctx.stroke();
// };

//TODO: Using jQuery mouseover to draw
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// $("canvas").mousemove(function (event) {
//   ctx.beginPath();
//   ctx.strokeStyle = "green";
//   if (event.pageX < 200 && event.pageY > 200) {
//     ctx.strokeStyle = "red";
//   } else if (event.pageX < 300 && event.pageY > 300) {
//     ctx.strokeStyle = "purple";
//   } else if (event.pageX < 150 && event.pageY > 150) {
//     ctx.strokeStyle = "pink";
//   } else if (event.pageX < 120 && event.pageY > 70) {
//     ctx.strokeStyle = "yellow";
//   }
//   ctx.arc(event.pageX, event.pageY, 20, 0, Math.PI * 2, false);
//   ctx.stroke();
// });

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// $("canvas").mousemove(function (event) {
//   ctx.beginPath();
//   ctx.fillStyle = "green";
//   ctx.arc(event.pageX, event.pageY, 3, 0, Math.PI * 2, false);
//   ctx.fill();
// });

// !TODO: Upgrading our guess the word game with drawing segments of incorrect words
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// var pickWord = function () {
//   var words = ["javascript", "monkey", "amazing", "pancake"];

//   return words[Math.floor(Math.random() * words.length)];
// };

// var setupAnswerArray = function (word) {
//   var answerArray = [];
//   for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//   }

//   return answerArray;
// };

// var showPlayerProgress = function (answerArray) {
//   alert(answerArray.join(" "));
// };

// var getGuess = function () {
//   return prompt("Guess a letter, or click Cancel to stop playing.");
// };

// var updateGameState = function (guess, word, answerArray) {
//   var appearances = 0;
//   for (var j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//       answerArray[j] = guess;
//       appearances++;
//     }
//   }

//   return appearances;
// };

// var showAnswerAndCongratulatePlayer = function (answerArray) {
//   showPlayerProgress(answerArray);
//   alert("Good job! The answer was " + answerArray.join(""));
// };

// var drawSegment = function (incorrectGuesses) {
//   ctx.lineWidth = 4;
//   ctx.strokeStyle = "black";

//   if (incorrectGuesses === 0) {
//     ctx.strokeRect(20, 20, 20, 20);
//   } else if (incorrectGuesses === 1) {
//     ctx.beginPath();
//     ctx.moveTo(30, 40);
//     ctx.lineTo(30, 80);
//     ctx.stroke();
//   } else if (incorrectGuesses === 2) {
//     ctx.beginPath();
//     ctx.moveTo(30, 80);
//     ctx.lineTo(10, 110);
//     ctx.stroke();
//   } else if (incorrectGuesses === 3) {
//     ctx.beginPath();
//     ctx.moveTo(30, 80);
//     ctx.lineTo(50, 110);
//     ctx.stroke();
//   } else if (incorrectGuesses === 4) {
//     ctx.beginPath();
//     ctx.moveTo(30, 60);
//     ctx.lineTo(10, 50);
//     ctx.stroke();
//   } else if (incorrectGuesses === 5) {
//     ctx.beginPath();
//     ctx.moveTo(30, 60);
//     ctx.lineTo(50, 50);
//     ctx.stroke();
//   }
// };

// var word = pickWord();
// var answerArray = setupAnswerArray(word);
// var remainingLetters = word.length;
// var incorrectGuesses = 0;

// while (remainingLetters > 0) {
//   showPlayerProgress(answerArray);
//   var guess = getGuess();
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
//     var correctGuesses = updateGameState(guess, word, answerArray);

//     remainingLetters -= correctGuesses;

//     if (correctGuesses === 0) {
//       drawSegment(incorrectGuesses);
//       incorrectGuesses++;
//     }
//   }
// }

// showAnswerAndCongratulatePlayer(answerArray);
