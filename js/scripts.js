$(function(){
  // $("#deck").submit(function() {
  var nums = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];

  var suits = ["spades", "clubs", "hearts", "diamonds"];

  nums.forEach(function(num) {
    suits.forEach(function(suit) {
      var deck = $("<li>" + num + " of " + suit + "</li>");
      $("#deck").prepend(deck);
      });
    });
});
