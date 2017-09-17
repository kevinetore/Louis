import * as _ from "underscore";

$(document).ready(function() {
  var base_url = '../background_images/'
  var images = [
    base_url + '/wil-stewart-18242.jpg',
    base_url + '/alecu-gabriel-331261.jpg',
    base_url + '/faye-cornish-76100.jpg',
    base_url + '/fre-sonneveld-17584.jpg',
    base_url + '/iqx-azmi-263873.jpg',
    base_url + '/nasa-45075.jpg',
    base_url + '/nathan-anderson-158540.jpg',
    base_url + '/rawpixel-com-274858.jpg',
    base_url + '/somin-khanna-14449.jpg'
  ]
  var bg = document.getElementById("bg_image");
  function setBackground() {
    bg.style.backgroundImage = "url(" + _.sample(images) + ")";
  };
  window.onload = setBackground();
});
