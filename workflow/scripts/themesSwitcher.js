window.addEventListener("load", () => {
  const themeTogglerInput = document.querySelector("input#theme-toggler");

  themeTogglerInput.onchange = (e) => {
    console.log(e.target.checked);
  };
});
