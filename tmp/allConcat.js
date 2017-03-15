var User = require('./../js/dino.js').userModule;

var displayWord = function(thisWord) {
  $(".word").text(thisWord);
};

$(document).ready(function() {
  var currentUser = new User("k");
  console.log(currentUser.getWord());
  currentUser.getWord(displayWord);
});
