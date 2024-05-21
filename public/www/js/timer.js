window.addEventListener("load", function () {
  const timer = document.getElementById("lock-timer");
  const todayDate = new Date();
  let hours = 24 - todayDate.getHours();
  let minutes = 60 - todayDate.getMinutes();
  let seconds = 60 - todayDate.getSeconds();

  const test = hours + ":" + minutes + ":" + seconds;

  const whereTag = document.querySelector(".clock-time");

  whereTag.innerHTML = test;
});
