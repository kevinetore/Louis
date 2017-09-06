import * as Cookies from "js-cookie";

$(document).ready(function() {
  //Cookies.remove('name');
  var data = Cookies.get('name');
  if (data == undefined) {
    $("#first_name").keyup(function() {
      var value = $(this).val();
      if (value != undefined) {
        clicked()
        pressed()
      };
    });
  } else {
    $("#name").html(data);
    $("#first_name").hide();
  };
});

var clicked = function() {
  document.onclick = function(e) {
    if(e.target.id != 'first_name') {
      var value = $('#first_name').val();
      Cookies.set('name', value, { expires: 7 });
      $("#name").html(value);
      $("#first_name").hide();
    };
  };
};

var pressed = function() {
  $('#first_name').keyup(function(e){
    if(e.keyCode === 13){
      var value = $('#first_name').val();
      Cookies.set('name', value, { expires: 7 });
      $("#name").html(value);
      $("#first_name").hide();
    };
  });
};
