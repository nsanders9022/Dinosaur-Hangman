var User = require('./../js/dino.js').userModule;

var displayWord = function(thisWord) {
  $(".word").text(thisWord);
};


$(document).ready(function() {
  var currentUser = new User("k");
  console.log(currentUser.getWord());
  var word = currentUser.getWord(displayWord);
  $(".button").click(function(){
    var letter = $(".user-input").val();
    $(".correctList").append("<li>" + currentUser.checkLetter(letter, word) + "<li>");
  });
});
