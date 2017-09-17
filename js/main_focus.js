import * as Cookies from "js-cookie";

$(document).ready(function() {
  var settingUp = function() {
    var cookie = Cookies.get('focus');
    // showing the focus if it's defined
    if (cookie != undefined) {
      var cookie = Cookies.get('focus');
      $('#set_focus').hide();
      $('.your_focus').html('<div>Today</div>' + "<span id='today_cookie'>" + cookie + "</span>");
    } else {
      // user should define it's focus
      $('#main_focus').keyup(function(e) {
        var value = $(this).val();
        if (value != undefined) {
          if(e.keyCode === 13){
            setCookie();
          };
          document.addEventListener("click", function(e){
            if(e.target.id != 'main_focus') {
              setCookie();
            };
          });
        };
      });
    };

    var setCookie = function() {
      var value = $('#main_focus').val();
      if (value != undefined) {
        Cookies.set('focus', value, { expires: 1 });
        var cookie = Cookies.get('focus');
        $('#set_focus').hide();
        $('.your_focus').html('<div>Today</div>' + "<span id='today_cookie'>" + cookie + "</span>");
        $('.your_focus').show();
      };
    };

    document.addEventListener("click", function(target){
      if(target.target.id == 'today_cookie') {
        Cookies.remove('focus');
        $('#set_focus').show();
        $('#your_focus').hide();
        settingUp();
      };
    });
  };

  settingUp();
});
