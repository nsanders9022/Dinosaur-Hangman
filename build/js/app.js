(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var User = require('./../js/dino.js').userModule;

var displayWord = function(thisWord) {
  $(".word").text(thisWord);
};

var word;
$(document).ready(function() {

  var currentUser = new User();
  // console.log("word " + word);
  $(".button").click(function(){
    var letter = $("#user-input").val();
    console.log(letter);
    currentUser.checkLetter(letter, word);
    currentUser.correctList.forEach(function(correctLetter){
      $(".correctList").append(correctLetter);
    });
  });

  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response) {
    displayWord(response);
    word = response[0].toString();
    console.log(word);
  });

});

},{"./../js/dino.js":1}]},{},[2]);
