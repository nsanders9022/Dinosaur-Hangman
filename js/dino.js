var User = function(){
  this.correctList = [];
  this.wrongList = [];
};
var wordArray;
var word;

User.prototype.getWord = function(displayWord) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response) {
    displayWord(response);
    word = response[0].toString().toLowerCase();
    console.log("this is the word " + word);
    wordArray = word.split("");
    console.log(wordArray);
    return word;
  });
};

// User.prototype.putLetter = function() {
//
// }
User.prototype.checkLetter = function(letter) {

  console.log("word: " + word);
  for (var i = 0; i < wordArray.length; i++) {
    console.log("line 25: " + i);
    if (letter === wordArray[i]) {
      this.correctList.push(letter);
      var result = i;
      console.log(result);
      return result;
  } else {
    this.wrongList.push(letter);
  }
}
};

User.prototype.displayLines = function (displayFunction) {
  console.log("@display lines: " + word);
  for (var i = 0; i < word.length; i++) {
    displayFunction(i);
  }
};

exports.userModule = User;
