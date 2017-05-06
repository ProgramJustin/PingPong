var numberArray = [];


// alert(pingPong);


var inputToArray = function(userInput) {

if (numberArray[0] === undefined) {
  numberArray.push(userInput);
}

  for (var i = 0; i < numberArray.length; i--) {


      numberArray.unshift(userInput -= 1);

        if ((numberArray[0] % 15) === 0) {
          alert('test2');
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
// var pingArray = function(numberArray) {
// alert(numberArray);
//   for (j = 0 j >= numberArray.length / 2; i++) {
//
//
//     if (pingPong === 0) {
//
//     alert(pingPong);
//     }
//   }
// }





$(document).ready(function() {

  $("form").submit(function(event) {

    event.preventDefault();

    var userInput = parseInt($('input').val());

    var pingPongArray = inputToArray(userInput);
    // console.log(numberArray);
    console.log(userInput);

    // var PingPongResults = pingArray(numberArray);

    $("#result").text(numberArray);


  });

});
