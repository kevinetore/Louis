setInterval(current_time ,1000);

function current_time() {
    var d = new Date();
    $('#current_time').html(d.toLocaleTimeString());
}

window.onload = function part_of_day() {
  var time = new Date();
  var part = time.getHours();
  if (part >= 6 && part < 12) {
    $("#part_of_day").html("morning")
  }
  if (part >= 12 && part < 18) {
    $("#part_of_day").html("afternoon")
  }
  if (part >= 18 || part < 6){
    $("#part_of_day").html("evening")
  }
}
