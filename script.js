/* jshint esversion: 7 */
/* jshint -W097 */
// "use strict";
// const funnyName = ["Pokemon", "Poo", "Little Pumpkin", "Makulet"];
// const funnyPart = ["hand", "legs", "head", "eyes", "nose", "belly"];
// const funnyLookLike = ["omelet", "cat's ass", "cow's tongue", "fly", "dog"];
// let randomName = funnyName[Math.floor(Math.random() * funnyName.length)];
// let randomPart = funnyPart[Math.floor(Math.random() * funnyPart.length)];
// let randomLookLike =
//   funnyLookLike[Math.floor(Math.random() * funnyLookLike.length)];

// let randomJoke = `Your name is ${randomName} and your ${randomPart} look like ${randomLookLike}`;
// let randomJoke2 = [
//   "Your",
//   "name",
//   "is",
//   randomName,
//   "and",
//   "your",
//   randomPart,
//   "look",
//   "like",
//   randomLookLike,
// ].join("* - *");

// console.log(randomJoke2);

// const randomNumbers = [3, 2, 1].join(" > ");

// console.log(randomNumbers);

// let scores = {
//   Weng: 5,
//   Sergey: 7,
//   Asrafh: 4,
//   Ahra: 3,
//   Rio: 6,
//   Yen: 3,
// };

// scores.Yen += 5;

// console.log(scores.Yen);

// let myCrazyObject = {
//   name: "Silly object",
//   "some array": [7, 9, { purpose: "silly", number: 123 }, 3.3],
//   "random animal": "banana shark",
// };

// console.log(myCrazyObject["some array"][2].number);

// for (i = 3; i < 10000; i *= 3) {
//   console.log(i);
// }

// let i = 3;
// while (i < 10000) {
//   console.log(i);
//   i *= 3;
// }

// const alphabet = "abcdefghjklmnopqrstuvwxyz";

// let randomString = "";
// let stringLength = 6;

// while (randomString.length < stringLength) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }

// console.log(randomString);

// let input = "javascript is awesome";
// let output = "";

// for (c = 0; c < input.length; c++) {
//   switch (input[c]) {
//     case (input[c] = "a"):
//       output += 4;
//       break;
//     case (input[c] = "e"):
//       output += 3;
//       break;
//     case (input[c] = "i"):
//       output += 1;
//       break;
//     case (input[c] = "o"):
//       output += 0;
//       break;
//     default:
//       output += input[c];
//   }
// }
// console.log(output);

// Guess the Word game

// array of random words

var pickWord = function () {
  var words = ["javascript", "monkey", "amazing", "pancake"];

  return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  return answerArray;
};

var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};

var getGuess = function () {
  return prompt("Guess a letter, or click Cancel to stop playing.");
};

var updateGameState = function (guess, word, answerArray) {
  var appearances = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      appearances++;
    }
  }

  return appearances;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert("Good job! The answer was " + answerArray.join(""));
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
