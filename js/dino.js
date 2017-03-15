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

exports.userModule = User;
