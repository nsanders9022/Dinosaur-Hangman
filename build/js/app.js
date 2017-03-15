(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var User = require('./../js/dino.js').userModule;

var displayWord = function(thisWord) {
  $(".word").text(thisWord);
  return thisWord;
};


$(document).ready(function() {
  var currentUser = new User();
  var word = currentUser.getWord(displayWord);
  console.log("word " + word);
  $(".button").click(function(){
    var letter = $("#user-input").val();
    console.log(letter);
    currentUser.checkLetter(letter, word);
    currentUser.correctList.forEach(function(){
      $(".correctList").text("<li>" + correctLetter + "<li>");
    });
  });
});

},{"./../js/dino.js":1}]},{},[2]);
