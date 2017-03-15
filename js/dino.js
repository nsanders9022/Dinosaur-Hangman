var User = function(letter){
  this.letter = letter;
};

User.prototype.getWord = function() {
  var word = "default";
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response) {
    word = "success";
    // response;
  });
  return word;
};

exports.userModule = User;
