"use strict";

function current_time() {
  var e = new Date();document.getElementById("current_time").innerHTML = e.toLocaleTimeString();
}setInterval(current_time, 1e3);
