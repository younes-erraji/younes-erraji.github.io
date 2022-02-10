const projects = document.querySelectorAll(".projects#projects .button.info"),
  modalContainer = this.document.querySelector(".modal"),
  modalImage = document.querySelector(".modal .modal-image img"),
  modalCloseButton = document.querySelector(".modal .modal-close-button");

projects.forEach((project) => {
  project.addEventListener("click", function () {
    let imageSource = this.parentElement.parentElement.children[0].getAttribute(
        "src"
      ),
      imageAlt = this.parentElement.parentElement.children[0].getAttribute(
        "alt"
      );
    modalImage.src = imageSource;
    modalImage.alt = imageAlt;

    modalContainer.style.display = "flex";
  });
});

modalCloseButton.onclick = () => {
  modalImage.src = "";
  modalImage.alt = "";
  modalContainer.style.display = "none";
};
