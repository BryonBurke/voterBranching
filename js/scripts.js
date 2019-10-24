$(document).ready(function() {

  var agePrompt= parseInt(prompt("How old are you"));

  var ageCheck = (function(agePrompt){
    if (agePrompt < 18) {
      $(".minor").show();
      alert("hey you aren't old enough");
    }
    else {
      $(".voter").show();
      alert("you can vote, go here");
    }
  });

  ageCheck(agePrompt);

});
