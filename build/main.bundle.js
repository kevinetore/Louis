"use strict";

setInterval(current_time, 1000);

function current_time() {
  var d = new Date();
  $('#current_time').html(d.toLocaleTimeString());
}

window.onload = function part_of_day() {
  var time = new Date();
  var part = time.getHours();
  if (part >= 6 && part < 12) {
    $("#part_of_day").html("morning");
  }
  if (part >= 12 && part < 18) {
    $("#part_of_day").html("afternoon");
  }
  if (part >= 18 || part < 6) {
    $("#part_of_day").html("evening");
  }
};
'use strict';

var _jsCookie = require('js-cookie');

var Cookies = _interopRequireWildcard(_jsCookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(document).ready(function () {
  // Cookies.remove('name');
  var cookie = Cookies.get('name');
  console.log(cookie);
  if (cookie == undefined) {
    $('#current_time').hide();
    $('.cookie_content').hide();
    $('.content').html("What's your name?");
    $('#first_name').keyup(function () {
      var value = $(this).val();
      console.log(value);
      if (value != undefined) {
        clicked();
        pressed();
      };
    });
  } else {
    $('#name').html(cookie);
    $('.content').hide();
    $('#first_name').hide();
  };
});

var clicked = function clicked() {
  document.onclick = function (e) {
    if (e.target.id != 'first_name') {
      hideAndSeek();
    };
  };
};

var pressed = function pressed() {
  $('#first_name').keyup(function (e) {
    if (e.keyCode === 13) {
      hideAndSeek();
    };
  });
};

var hideAndSeek = function hideAndSeek() {
  var value = $('#first_name').val();
  Cookies.set('name', value, { expires: 7 });
  $('#name').html(value);
  $('.content').hide();
  $('#first_name').hide();
  $('.cookie_content').show();
  $('#current_time').show();
};
'use strict';

var _jsCookie = require('js-cookie');

var Cookies = _interopRequireWildcard(_jsCookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(document).ready(function () {
  var settingUp = function settingUp() {
    var cookie = Cookies.get('focus');
    // showing the focus if it's defined
    if (cookie != undefined) {
      var cookie = Cookies.get('focus');
      $('#set_focus').hide();
      $('.your_focus').html(cookie);
    } else {
      // user should define it's focus
      $('#main_focus').keyup(function (e) {
        var value = $(this).val();
        if (value != undefined) {
          if (e.keyCode === 13) {
            setCookie();
          };
          document.addEventListener("click", function (e) {
            if (e.target.id != 'main_focus') {
              setCookie();
            };
          });
        };
      });
    };

    var setCookie = function setCookie() {
      var value = $('#main_focus').val();
      if (value != undefined) {
        Cookies.set('focus', value, { expires: 1 });
        var cookie = Cookies.get('focus');
        $('#set_focus').hide();
        $('.your_focus').html(cookie);
        $('.your_focus').show();
      };
    };

    document.addEventListener("click", function (target) {
      if (target.target.id == 'your_focus') {
        Cookies.remove('focus');
        $('#set_focus').show();
        $('#your_focus').hide();
        settingUp();
      };
    });
  };

  settingUp();
});
'use strict';

var _underscore = require('underscore');

var _ = _interopRequireWildcard(_underscore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(document).ready(function () {
  var base_url = '../background_images/';
  var images = [base_url + '/wil-stewart-18242.jpg', base_url + '/alecu-gabriel-331261.jpg', base_url + '/faye-cornish-76100.jpg', base_url + '/fre-sonneveld-17584.jpg', base_url + '/iqx-azmi-263873.jpg', base_url + '/nasa-45075.jpg', base_url + '/nathan-anderson-158540.jpg', base_url + '/rawpixel-com-274858.jpg', base_url + '/somin-khanna-14449.jpg'];
  var bg = document.getElementById("bg_image");
  function setBackground() {
    bg.style.backgroundImage = "url(" + _.sample(images) + ")";
  };
  window.onload = setBackground();
});
