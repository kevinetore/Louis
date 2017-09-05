'use strict';

var _jsCookie = require('js-cookie');

var Cookies = _interopRequireWildcard(_jsCookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

Cookies.set('name', 'etore', { expires: 7 });
var data = Cookies.get('name');
console.log(data);
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
