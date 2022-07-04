function nav1Toggle() {
  var x = document.getElementById("content1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function nav2Toggle() {
  var x = document.getElementById("content2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function nav3Toggle() {
  var x = document.getElementById("content3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Set the date we're counting down to
var countDownDate = new Date("July 7 2022 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = 86400*Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = 3600*Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = 60*Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("mainCountDown").innerHTML = days + hours +
minutes + seconds + " SEC BEFORE I GET SHUTDOWN";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("mainCountDown").innerHTML = "DIED";
  }
}, 1000);
// Set the date we're counting down to
var countDownDate = new Date("July 7 2022 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = 86400*Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = 3600*Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = 60*Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("landingCountDown").innerHTML = days + hours +
minutes + seconds + " SEC BEFORE I GET SHUTDOWN";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("landingCountDown").innerHTML = "DIED";
  }
}, 1000);
