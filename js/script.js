$(document).ready( function() {

  var quiz = [
    ["1. What Breed is Duke?", "dalmatian"],
    ["2. What is Wendell's original name?", "denver"],
    ["3. What color is Dallas?", "brindle"]
  ]

  var score = 0;
  var guess;
  var questionNo = 0;
  var questionDiv = $("#body-text").append("<p></p>");
  $(questionDiv).html(quiz[questionNo][0]);
  var nextBtn = $("#guess").after('<input type="button" name="next" id="next" value="Next Question">');
  var submitBtn = $("#guess").after('<input type="button" name="submit" id="submit" value="Submit Answer">');
  $("#next").hide();


  function answer() {
    guess = $("#guess").val();
    $("#next").toggle();
    $("#submit").toggle();
    if (guess.toLowerCase() == quiz[questionNo][1]) {
      $(questionDiv).html("<p>Correct!</p>");
      score += 1;
    } else {
      $(questionDiv).html("<p>Wrong!</p>");
    }
    if (questionNo == 2) {
      $("#submit").hide()
      $("#next").hide()
      $("#score-text").html("<p>Thanks for playing! You got " + score + " right!</p>");
    }
  }

  function next() {
    $("#guess").val("")
    $("#next").toggle();
    $("#submit").toggle();
    questionNo += 1;
    console.log(questionNo)
    if (questionNo < 3) {
      $(questionDiv).html(quiz[questionNo][0])
    } else {
      console.log("Thanks for playing!");
    }
  }

  $("#submit").click(answer);
  $("#next").click(next)
  

})
