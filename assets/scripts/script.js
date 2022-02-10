window.onload = function () {
  const up = document.querySelector("span.up"),
    navButton = document.querySelector(".nav-button label"),
    check = document.getElementById("nav-check"),
    checkbox = document.getElementById("nav-check"),
    toggleSettings = document.querySelector(".toggle-settings"),
    settingsBox = document.querySelector("#settings-box");
  checkbox.checked = false;
  if (window.scrollY > 1000) {
    up.style.display = "flex";
  }
  window.onscroll = function () {
    if (window.scrollY > 1000) {
      up.style.display = "flex";
    } else {
      up.style.display = "none";
    }
  };
  up.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  check.onchange = function () {
    navButton.classList.toggle("active");
  };
  toggleSettings.onclick = function () {
    settingsBox.classList.toggle("visible");
  };
};
