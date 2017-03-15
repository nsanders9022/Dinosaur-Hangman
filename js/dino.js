var User = function(){
  this.correctList = [];
  this.wrongList = [];
};

User.prototype.getWord = function(displayWord) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response) {
    displayWord(response);
    var final = response[0];
    console.log(final.toString());
    return final.toString();
  });
};

User.prototype.checkLetter = function(letter, word) {
  if (word.includes(letter)) {
    this.correctList.push(letter);
  }
  else {
    this.wrongList.push(letter);
  }
};

exports.userModule = User;
