//traget class "drum"
var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++)
  //find first button and addEventListner to that button
  // i is the button
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("i got clicked");
  });

//when button detected
