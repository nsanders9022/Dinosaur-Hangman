var User = function(){
  this.correctList = [];
  this.wrongList = [];
};


User.prototype.checkLetter = function(letter, word) {
  if (word.includes(letter)) {
    this.correctList.push(letter);
  }
  else {
    this.wrongList.push(letter);
  }
};


User.prototype.displayLines = function (word, displayFunction) {
  for (var i = 0; i < word.length; i++) {
    displayFunction(i);
  }
};


exports.userModule = User;
