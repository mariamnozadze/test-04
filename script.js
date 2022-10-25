const Timer = document.querySelector(".circle2");

Timer.addEventListener("click", () => {
  document.getElementById("VR").style = "color:white;";
  document.getElementById("circle2").style = "color:white;";
  document.getElementById("circle2").style = "background-color:grey;";
  var timeleft = 10;
  var start = setInterval(function () {
    timeleft--;
    document.getElementById("VR").textContent = timeleft;
    if (timeleft <= 0) clearInterval(start);
  }, 1000);
});
