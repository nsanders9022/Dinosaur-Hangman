var User = require('./../js/dino.js').userModule;

var displayWord = function(thisWord) {
  $(".word").text(thisWord);
  return thisWord;
};


$(document).ready(function() {
  var currentUser = new User();
  var word = currentUser.getWord(displayWord);
  console.log("word " + word);
  $(".button").click(function(){
    var letter = $("#user-input").val();
    console.log(letter);
    currentUser.checkLetter(letter, word);
    currentUser.correctList.forEach(function(){
      $(".correctList").text("<li>" + correctLetter + "<li>");
    });
  });
});
