var numberArray = [];

console.log(numberArray[0]);

var inputToArray = function(userInput) {

if (numberArray[0] === undefined) {
  numberArray.push(userInput);
}

if (numberArray[0] === userInput) {
  for (var i = 0; i < numberArray.length; i--) {


      numberArray.unshift(userInput -= 1);



      if (i >= userInput) {
        alert(userInput);
        i--;
        numberArray.join(" ");

        return false;
      }
      if (userInput === 1) {
        return false;
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
