$(document).ready(function() {
  var quotes = [
    "Any product that needs a manual is broken."
  ]
  $("#quote").html('<p>' + quotes[0] + '</p>');
  $("#quote")
  .mouseenter(
    function () {
      $(this).stop().animate({marginBottom: '+=20px'}, 500);
    })
  .mouseleave(
    function () {
      $(this).stop().animate({marginBottom: '0px'});
    });

});
