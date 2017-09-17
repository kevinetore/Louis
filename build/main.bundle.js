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

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=enschede,nl&appid=584a8da601379289fbd35050a785e7ea&mode=json&units=metric',
  type: 'GET',
  success: function success(res) {
    var data = res['main']['temp'];
    var temp = ("" + data).split('.');
    $('.weather').html("<img src='../images/cloud.png'>" + temp[0] + '˚');
  }
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
  var settingUp = function settingUp() {
    var cookie = Cookies.get('focus');
    // showing the focus if it's defined
    if (cookie != undefined) {
      var cookie = Cookies.get('focus');
      $('#set_focus').hide();
      $('.your_focus').html('<div id="today">Today</div>' + "<span id='today_cookie'>" + cookie + "</span>");
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
        $('.your_focus').html('<div id="today">Today</div>' + "<span id='today_cookie'>" + cookie + "</span>");
        $('.your_focus').show();
      };
    };

    document.addEventListener("click", function (target) {
      if (target.target.id == 'today_cookie') {
        Cookies.remove('focus');
        $('#set_focus').show();
        $('#your_focus').hide();
        settingUp();
      };
    });
  };

  settingUp();
});
"use strict";

$(document).ready(function () {
  var base_url = '../background_images/bg';
  var image = function image() {
    return Math.floor(Math.random() * 16) + 1;
  };
  var bg = document.getElementById("bg_image");
  function setBackground() {
    bg.style.backgroundImage = "url(" + base_url + image() + ".jpg)";
  };
  window.onload = setBackground();
});
"use strict";

var _underscore = require("underscore");

var _ = _interopRequireWildcard(_underscore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var quotes = ["'The Way Get Started Is To Quit Talking And Begin Doing.' -Walt Disney", "'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.' -Winston Churchill", "'Don’t Let Yesterday Take Up Too Much Of Today.' -Will Rogers", "'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.' - Unknown", "'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.' – Inspirational Quote By Vince Lombardi", "'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.' - Steve Jobs", "'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' - Rob Siltanen", "'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.' - Og Mandino", "'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. Thats The Classic Entrepreneur.' - Mohnish Pabrai", "'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?' - Brian Tracy", "'We Generate Fears While We Sit. We Overcome Them By Action.' - Dr. Henry Link", "'Whether You Think You Can Or Think You Can’t, You’re Right.' - Henry Ford", "'Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.' - Helen Keller", "'The Man Who Has Confidence In Himself Gains The Confidence Of Others.' - Hasidic Proverb", "'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.' - Franklin D. Roosevelt", "'Creativity Is Intelligence Having Fun.' - Albert Einstein", "'What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.' - Don Zimmer", "'Do What You Can With All You Have, Wherever You Are.' - Theodore Roosevelt", "'Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.' - Brian Tracy", "'You Are Never Too Old To Set Another Goal Or To Dream A New Dream.' - C.S. Lewis", "'To See What Is Right And Not Do It Is A Lack Of Courage.' - Confucious", "'Reading Is To The Mind, As Exercise Is To The Body.' - Brian Tracy", "'Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.' - Brian Tracy", "'The Future Belongs To The Competent. Get Good, Get Better, Be The Best!' - Brian Tracy"];

$(document).ready(function () {
  $('#quote').html(_.sample(quotes));
});
