(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    if (wordArray.indexOf(letter) != -1) {
      this.correctList.push(letter);
      var result = wordArray.indexOf(letter);
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

},{}],2:[function(require,module,exports){
var User = require('./../js/dino.js').userModule;

var displayWord = function(response) {
  $(".word").text(response[0]);
};

var makeLines = function(i) {
  $(".lines").append("<div class='line' data-val='" + i + "'></div>");
};

// var displayLetter = function(letter, i) {
//   $("data-val='" + i + "'").append(letter);
// };

$(document).ready(function() {

  var currentUser = new User();
  var word = currentUser.getWord(displayWord);
  setTimeout(function() {


  console.log("word on front end: " + word);
  currentUser.displayLines(makeLines);
}
  , 1000)

  $(".button").click(function(){
    var letter = $("#user-input").val();
    console.log(letter);
    var letterLocation = currentUser.checkLetter(letter);
    console.log(letterLocation);
    for (var i = 0; i < currentUser.correctList.length; i++) {
      $('div.line[data-val=' + letterLocation + ']').text(currentUser.correctList[letterLocation]);
    }

    // currentUser.correctList.forEach(function(correctLetter){
    //   $(".correctList").text(correctLetter);
    // });
  });

});

},{"./../js/dino.js":1}]},{},[2]);
