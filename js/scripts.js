var userNumber = "";


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($('input').val());

    console.log(typeof userInput);

  });

});
