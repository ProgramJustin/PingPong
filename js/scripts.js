var numberArray = [];

console.log(numberArray[0]);

var inputToArray = function(userInput) {

if (numberArray[0] === undefined) {
  numberArray.push(userInput);
}

};



// var numberArray = [userNumber];
// console.log(userNumber);


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($('input').val());

    var pingPong = inputToArray(userInput);
    alert("test");

    console.log(typeof userInput);
    $("#result").text(numberArray[0]);

  });

});
