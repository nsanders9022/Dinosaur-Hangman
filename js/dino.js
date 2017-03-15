var User = function(letter){
  this.letter = letter;
};

User.prototype.getWord = function() {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1');
}).fail(function(error) {
    $('.word').text(error.responseJSON.message);
  });
};

exports.userModule = User;
