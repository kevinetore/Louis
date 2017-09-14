import * as Cookies from "js-cookie";

$(document).ready(function() {
  // Cookies.remove('focus');
  var cookie = Cookies.get('focus');
  if (cookie != undefined) {
    setData();
  } else {
    $('#main_focus').keyup(function() {
      var value = $(this).val();
      if (value != undefined) {
        document.onclick = function(e) {
          if(e.target.id != 'main_focus') {
            Cookies.set('focus', value, { expires: 1 });
            setData();
          };
        };
      };
    });
  };
});

var setData = function() {
  var cookie = Cookies.get('focus');
  $('#set_focus').hide();
  $('.your_focus').html(cookie);
};
