/* jshint esversion: 7 */
/* jshint -W097 */
// "use strict";

// let newTitle = prompt("Insert your text here");
// $("#hello_world").text(newTitle);

// for (let i = 0; i < 3; i++) {
//   let hobby = prompt("Name one of your hobbies");
//   $("body").append("<p>" + hobby + "</p>");
// }

// $(".btn").click(function () {
//   $("p").hide(900, "swing", function () {
//     $("h1").text("i got clicked");
//   });
// });

// $("#hello_world").text("My Friends");

// const myFriends = ["Artem", "Asrafh", "Taoufik", "Weng"];

// for (let i = 0; i < myFriends.length; i++) {
//   $("body").append("<p>" + myFriends[i] + "</p>");
// }

// $("p").append(" best");
// $("p").hide().fadeIn(3000);

// TODO: NICE WAY TO HANDLE ANIMATION IN jQuery

// let fadeTime;
// for (let i = 0; i < 5; i++) {
//   fadeTime = (i + 1) * 1000;
//   $("h1")
//     .fadeIn(fadeTime / 2)
//     .fadeOut(fadeTime / 2);
// }

// !TODO: jQuery Delay

// $("h1").fadeOut(2000).delay(5000).fadeIn(1000);

// !TODO: Checking fadeTo method

// $("h1").fadeTo(2000, 0.5);

// TODO: Using SetTimeOut method for alert

// let message = function () {
//   alert("Hello there!");
// };

// setTimeout(message, 3000);

// TODO: Using SetInterval method

// let count = 1;

// let message = function () {
//   console.log("You're reading this message " + count + " times");
//   count++;
// };

// setInterval(message, 3000);

// TODO: Animating HTML with setInterval method

// let leftOffset = 0;

// let moveHeading = function () {
//   $("h1").offset({ left: leftOffset });
//   leftOffset++;
//   if (leftOffset > 200) {
//     leftOffset = 0;
//   }
// };
// setInterval(moveHeading, 5);

// TODO: Using click event with jQuery

// let clickHandler = function (event) {
//   console.log("Click!" + event.pageX + " " + event.pageY);
// };

// $("h1").click(clickHandler);

// TODO: Using mousemove with jQuery

// $("html").mousemove(function (event) {
//   $("h1").offset({ left: event.pageX, top: event.pageY });
// });

// TODO: moving heading to the click

// $("html").click(function (event) {
//   $("h1").offset({ left: event.pageX, top: event.pageY });
// });

// TODO: Moving heading as an animation on square using offset method with jQuery

// let offset = 0;
// let direction = "right";

// $("h1").offset({ left: offset, top: offset });

// let movingHeading = function () {
//   if (direction === "right") {
//     $("h1").offset({ left: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 0;
//       direction = "down";
//     }
//   } else if (direction === "down") {
//     $("h1").offset({ top: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 200;
//       direction = "left";
//     }
//   } else if (direction === "left") {
//     $("h1").offset({ left: offset });
//     offset--;
//     if (offset < 0) {
//       offset = 200;
//       direction = "up";
//     }
//   } else if (direction === "up") {
//     $("h1").offset({ top: offset });
//     offset--;
//     if (offset < 0) {
//       offset = 0;
//       direction = "right";
//     }
//   }
// };
// setInterval(movingHeading, 10);

// TODO: Adding click to stop animation

// let offset = 0;
// let direction = "right";

// $("h1").offset({ left: offset, top: offset });

// let movingHeading = function () {
//   if (direction === "right") {
//     $("h1").offset({ left: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 0;
//       direction = "down";
//     }
//   } else if (direction === "down") {
//     $("h1").offset({ top: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 200;
//       direction = "left";
//     }
//   } else if (direction === "left") {
//     $("h1").offset({ left: offset });
//     offset--;
//     if (offset < 0) {
//       offset = 200;
//       direction = "up";
//     }
//   } else if (direction === "up") {
//     $("h1").offset({ top: offset });
//     offset--;
//     if (offset < 0) {
//       offset = 0;
//       direction = "right";
//     }
//   }
// };
// let movingInterval = setInterval(movingHeading, 10);

// $("html").click(function () {
//   clearInterval(movingInterval);
// });

// TODO: Game (increase speed of animation after click on heading, display number of clicks in heading, until 10)

// let offset = 0;
// let direction = "right";

// $("h1").offset({ left: offset, top: offset });

// let movingHeading = function () {
//   if (direction === "right") {
//     $("h1").offset({ left: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 0;
//       direction = "down";
//     }
//   } else if (direction === "down") {
//     $("h1").offset({ top: offset });
//     offset++;
//     if (offset > 200) {
//       offset = 200;
//       direction = "left";
//     }
//   } else if (direction === "left") {
//     $("h1").offset({ left: offset });
//     offset--;
//     if (offset < 0) {
//       offset = 200;
//       direction = "up";
//     }
//   } else if (direction === "up") {
//     $("h1").offset({ top: offset });
//     offset--;
//     if (offset < 0) {
//       offset = 0;
//       direction = "right";
//     }
//   }
// };
// let movingInterval = setInterval(movingHeading, 10);

// let clicks = 1;
// let intervalLength = 10;
// $("h1").click(function () {
//   clearInterval(movingInterval);
//   $("h1").text("Got clicked " + clicks + " times!");
//   clicks++;
//   intervalLength /= 2;
//   if (clicks > 10) {
//     $("h1").text("You win.");
//   } else {
//     movingInterval = setInterval(movingHeading, intervalLength);
//   }
// });

// TODO: Game to find treasure "Treasure Hunt"

let getRandomNumber = function (range) {
  return Math.floor(Math.random() * range);
};
let getDistance = function (event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = (event.offsetY = target.y);
  return Math.sqrt(diffX * diffX + diffY * diffY);
};
let getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Almost there!";
  } else if (distance < 20) {
    return "Super Hot";
  } else if (distance < 40) {
    return "Very hot!";
  } else if (distance < 80) {
    return "It's warm here";
  } else if (distance < 160) {
    return "It's cold";
  } else if (distance < 320) {
    return "very cold!!!";
  } else {
    return "You gonna freeze";
  }
};
let clicks = 0;
let width = 800;
let height = 800;
let clicklimit = 10;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};
console.log(target);
$("#map").click(function (event) {
  clicks++;
  if (clicks > clicklimit) {
    alert("GAME OVER!");
    return;
  }
  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);
  $("#distance").text(distanceHint);
  $("#remaining").text(clicklimit - clicks + " remaining clicks left");
  if (distance < 8) {
    alert("Congratulations, you've found a treasure in " + clicks + " clicks");
  }
});
