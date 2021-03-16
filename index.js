//traget class "drum"
var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++)
  //find first button and addEventListner to that button
  // i is the button
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });

//play sound
//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
