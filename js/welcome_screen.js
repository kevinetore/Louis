import * as Cookies from "js-cookie";

$(document).ready(function() {
  // Cookies.remove('name');
  var cookie = Cookies.get('name');
  console.log(cookie);
  if (cookie == undefined) {
    $('#current_time').hide();
    $('.cookie_content').hide();
    $('.content').html("What's your name?")
    $("#first_name").keyup(function() {
      var value = $(this).val();
      if (value != undefined) {
        clicked()
        pressed()
      };
    });
  } else {
    $("#name").html(cookie);
    $("#first_name").hide();
  };
});

var clicked = function() {
  document.onclick = function(e) {
    if(e.target.id != 'first_name') {
      hideAndSeek();
    };
  };
};

var pressed = function() {
  $('#first_name').keyup(function(e){
    if(e.keyCode === 13){
      hideAndSeek();
    };
  });
};

var hideAndSeek = function() {
  var value = $('#first_name').val();
  Cookies.set('name', value, { expires: 7 });
  $("#name").html(value);
  $(".content").hide();
  $("#first_name").hide();
  $('.cookie_content').show();
  $('#current_time').show();
}
