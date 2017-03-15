var User = function(letter){
  this.letter = letter;
};

User.prototype.getWord = function(displayWord) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response) {
    displayWord(response);
    // response;
  });
};

exports.userModule = User;
