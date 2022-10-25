const Timer = document.querySelector(".circle2");

//Created a countdown timer
Timer.addEventListener("click", () => {
  //change element colors while function is working
  document.getElementById("VR").style = "color:white;";
  document.getElementById("circle2").style = "color:white;";
  document.getElementById("circle2").style = "background-color:grey;";

  var timeleft = 10;
  var start = setInterval(function () {
    timeleft--;
    document.getElementById("VR").textContent = timeleft;
    //End counting at 0, without carrying into negative numbers
    if (timeleft <= 0) clearInterval(start);
  }, 1000);
});
