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
"use strict";

$(document).ready(function () {
  var quotes = ["Any product that needs a manual is broken."];
  $("#quote").html('<p>' + quotes[0] + '</p>');
  $("#quote").mouseenter(function () {
    $(this).stop().animate({ marginBottom: '+=20px' }, 500);
  }).mouseleave(function () {
    $(this).stop().animate({ marginBottom: '0px' });
  });
});
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
  // Cookies.remove('focus');
  var cookie = Cookies.get('focus');
  if (cookie != undefined) {
    setData();
  } else {
    $('#main_focus').keyup(function () {
      var value = $(this).val();
      if (value != undefined) {
        document.onclick = function (e) {
          if (e.target.id != 'main_focus') {
            Cookies.set('focus', value, { expires: 1 });
            setData();
          };
        };
      };
    });
  };
});

var setData = function setData() {
  var cookie = Cookies.get('focus');
  $('#set_focus').hide();
  $('.your_focus').html(cookie);
};
