var numberArray = [];

console.log(numberArray[0]);

var inputToArray = function(userInput) {

if (numberArray[0] === undefined) {
  numberArray.push(userInput);
}

if (numberArray[0] === userInput) {

  for (var i = 0; i < numberArray.length; i--) {


      numberArray.unshift(userInput -= 1);

      if (i >= userInput && userInput === 0) {
          alert(userInput);
          i--;
          numberArray.join(" ");
      }
      if (userInput === 0) {
        return false;
      }


      if ((numberArray.length % 15) === 0) {

        numberArray.splice(0, 1, "Ping Pong");


      } else if ((numberArray.length % 5) === 0) {
          numberArray.splice(0, 1, "Pong");
      }

    }
  }
}



// var numberArray = [userNumber];
// console.log(userNumber);


$(document).ready(function() {

  $("form").submit(function(event) {

    event.preventDefault();

    var userInput = parseInt($('input').val());

    var pingPong = inputToArray(userInput);
    alert("test");

    console.log(typeof userInput);


    $("#result").text(numberArray);


  });

});
