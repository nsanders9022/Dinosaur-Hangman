var User = require('./../js/dino.js').userModule;

var displayWord = function(response) {
  $(".word").text(response[0]);
};

var makeLines = function(i) {
  $(".lines").append("<div class='line' data-val='" + i + "'></div>");
};

// var displayLetter = function(letter, i) {
//   $("data-val='" + i + "'").append(letter);
// };

$(document).ready(function() {

  var currentUser = new User();
  var word = currentUser.getWord(displayWord);
  setTimeout(function() {


  console.log("word on front end: " + word);
  currentUser.displayLines(makeLines);
}
  , 1000)

  $(".button").click(function(){
    var letter = $("#user-input").val();
    console.log(letter);
    var letterLocation = currentUser.checkLetter(letter);
    console.log(letterLocation);
    for (var i = 0; i < currentUser.correctList.length; i++) {
      $('div.line[data-val=' + letterLocation + ']').text(currentUser.correctList[letterLocation]);
    }

    // currentUser.correctList.forEach(function(correctLetter){
    //   $(".correctList").text(correctLetter);
    // });
  });

});
