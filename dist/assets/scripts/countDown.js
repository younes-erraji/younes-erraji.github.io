window.addEventListener("load", () => {
  var countDownDate = new Date("Jan 24, 2024 15:37:25").getTime(),
    timer = document.querySelector(".remaining-time");
  var x = setInterval(function () {
    var now = new Date().getTime(),
      distance = countDownDate - now,
      days = Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // timer.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

    timer.textContent = `
  ${days < 10 ? `0${days}` : days}D /
  ${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    if (distance < 0) {
      timer.remove();
      clearInterval(x);
    }
  }, 1000);
});
