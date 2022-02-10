const toggleLangs = document.querySelector(".languages .change"),
  selectedLangText = document.querySelector(".languages .change span"),
  selectedLangImage = document.querySelector(".languages .change img"),
  selectLangButtons = document.querySelectorAll(".languages .select a"),
  changeLangButtonsContainer = document.querySelector(".languages .select");

selectLangButtons.forEach((lang) => {
  lang.addEventListener("click", function () {
    selectLangButtons.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

toggleLangs.addEventListener("click", function (e) {
  this.parentElement.classList.toggle("change-language");
});

document.addEventListener("click", function (e) {
  if (e.target !== changeLangButtonsContainer && e.target !== toggleLangs) {
    toggleLangs.parentElement.classList.remove("change-language");
  }
});

changeLangButtonsContainer.onclick = (e) => {
  e.stopPropagation();
};

toggleLangs.onclick = (e) => {
  e.stopPropagation();
};
