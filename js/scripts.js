var numberArray = [];





var inputToArray = function(userInput) {

if (numberArray[0] === undefined) {
  numberArray.push(userInput);
}

if (numberArray[0] === userInput) {

  for (var i = 0; i < numberArray.length; i--) {


      numberArray.unshift(userInput -= 1);

      if (i >= userInput && userInput === 1) {
          alert(userInput);
          i--;
          numberArray.join(" ");
      } else if (userInput === 1) {
        return false;
      }


    }
  }
}




$(document).ready(function() {

  $("form").submit(function(event) {

    event.preventDefault();

    var userInput = parseInt($('input').val());

    var pingPong = inputToArray(userInput);

    console.log(typeof userInput);


    $("#result").text(numberArray);


  });

});
