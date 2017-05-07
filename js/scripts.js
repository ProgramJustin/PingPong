//BACK END LOGIC
var numberArray = [];
var inputToArray = function(userInput) {

if (numberArray[0] === undefined) {
  numberArray.push(userInput);
}
  for (var i = 0; i < numberArray.length; i--) {

      numberArray.unshift(userInput -= 1);

      if ((numberArray[0] % 15) === 0) {

        numberArray.shift();
        numberArray.unshift("Ping-Pong");
        numberArray.unshift((userInput - 1));
        numberArray.shift();

      }  else if ((numberArray[0] % 5) === 0) {

        numberArray.shift();
        numberArray.unshift("Pong");
        numberArray.unshift((userInput - 1));
        numberArray.shift();

      }  else if ((numberArray[0] % 3) === 0) {

        numberArray.shift();
        numberArray.unshift("Ping");
        numberArray.unshift((userInput - 1));
        numberArray.shift();

      } else if (userInput === 1) {
        return false;
    }
  }
}
//UI LOGIC
$(document).ready(function() {

  $("form").submit(function(event) {

    event.preventDefault();

    var userInput = parseInt($('input').val());
    var pingPongArray = inputToArray(userInput);

    numberArray.toString();

    $("#result").append("<h1>" + numberArray + "</h1>");
    $("#result").append("<h1>" + reverseArray + "</h1>");

    numberArray = [];
  });
  $("form").submit(function(event) {
    $(this).closest('form').find("input[type=text], textarea").val("");
    event.preventDefault();
  });
});
