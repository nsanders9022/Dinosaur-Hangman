var User = require('./../js/dino.js').userModule;

var displayWord = function(thisWord) {
  $(".word").text(thisWord);
};

var makeLines = function() {
  $(".lines").append("<div class='line'></div>");
}

var word;
$(document).ready(function() {

  var currentUser = new User();
  $(".button").click(function(){
    var letter = $("#user-input").val();
    console.log(letter);
    currentUser.checkLetter(letter, word);
    currentUser.correctList.forEach(function(correctLetter){
      $(".correctList").append(correctLetter);
    });
  });

  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response) {
    displayWord(response);
    word = response[0].toString();
    console.log(word);
    currentUser.displayLines(word, makeLines);
  });

});
