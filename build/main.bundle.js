"use strict";

function current_time() {
  var t = new Date();$("#current_time").html(t.toLocaleTimeString());
}setInterval(current_time, 1e3), window.onload = function () {
  var t = new Date().getHours();t >= 6 && t < 12 && $("#part_of_day").html("morning"), t >= 12 && t < 18 && $("#part_of_day").html("afternoon"), (t >= 18 || t < 6) && $("#part_of_day").html("evening");
};
