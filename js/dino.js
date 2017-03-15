var User = function(letter){
  this.letter = letter;
};

var correctList = [];

User.prototype.getWord = function(displayWord) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response) {
    displayWord(response);
    // response;
  });
};

User.prototype.checkLetter = function(letter, word) {
  if (word.includes(letter)) {
    guessList.push(letter);
  }
  return guessList.join(" ")
}

exports.userModule = User;
