var User = require('./../js/dino.js').userModule;

$(document).ready(function() {
  var currentUser = new User();
  console.log(currentUser.getWord());
  $('.word').text(currentUser.getWord());
});
