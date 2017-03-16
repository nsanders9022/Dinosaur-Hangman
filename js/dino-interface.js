var User = require('./../js/dino.js').userModule;

var displayWord = function(response) {
  $(".word").text(response[0]);
};

var makeLines = function(i) {
  $(".lines").append("<div class='line' data-val='" + i + "'></div>");
};

var showLetters = function(letterLocation, letter) {
  $('div.line[data-val=' + letterLocation + ']').text(letter);
}

$(document).ready(function() {
  $(".button").click(function(){
    var letter = $("#user-input").val();
    console.log(letter);
    currentUser.checkLetter(letter, showLetters);
  });
  var currentUser = new User();
  var word = currentUser.getWord(displayWord);
  setTimeout(function() {
    console.log("word on front end: " + word);
    currentUser.displayLines(makeLines);
  } , 1000)

});
