$(document).ready(function() {
  var base_url = '../background_images/bg'
  var image = function() {
    return Math.floor(Math.random() * 16) + 1
  }
  var bg = document.getElementById("bg_image");
  function setBackground() {
    bg.style.backgroundImage = "url(" + base_url + image() + ".jpg)";
  };
  window.onload = setBackground();
});
