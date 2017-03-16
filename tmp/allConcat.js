var User = require('./../js/dino.js').userModule;

var displayWord = function(thisWord) {
  $(".word").text(thisWord);
};

var makeLines = function(i) {
  $(".lines").append("<div class='line' data-val='" + i + "'></div>");
}

// var displayLetter = function(letter, i) {
//   $("data-val='" + i + "'").append(letter);
// };

var word;
$(document).ready(function() {

  var currentUser = new User();
  $(".button").click(function(){
    var letter = $("#user-input").val();
    console.log(letter);
    currentUser.checkLetter(letter, word);
    for (var i = 0; i < currentUser.correctList.length; i++) {
      $('div.line[data-val=' + i + ']').text(currentUser.correctList[i]);
    }

    // currentUser.correctList.forEach(function(correctLetter){
    //   $(".correctList").text(correctLetter);
    // });
  });

  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response) {
    displayWord(response);
    word = response[0].toString();
    console.log(word);
    currentUser.displayLines(word, makeLines);
  });

});
