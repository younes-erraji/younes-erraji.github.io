const landingPage = document.querySelector(".landing"),
  backgrounds = ["0.jpg", "1.jpg", "2.jpg", "3.jfif", "4.jpg", "5.jpg"];

let i = 1;
landingPage.style.backgroundImage = `url("./assets/images/backgrounds/${backgrounds[0]}")`;

setInterval(function () {
  if (i < backgrounds.length - 1) {
    landingPage.style.backgroundImage = `url("./assets/images/backgrounds/${backgrounds[i]}")`;

    i++;
  } else {
    i = 0;
  }
}, 18000);
