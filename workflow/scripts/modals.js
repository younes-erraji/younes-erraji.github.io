window.addEventListener("load", function () {
  const modalContainer = this.document.querySelector(".modal"),
    modalHeader = document.querySelector(".modal .modal-header .modal-title"),
    modalText = document.querySelector(".modal .modal-text"),
    modalImage = document.querySelector(".modal .modal-image img"),
    modalCloseButton = document.querySelector(
      ".modal .modal-body .modal-content .modal-header .modal-button-close"
    );

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("display-project")) {
      let imageSource = e.target.parentElement.parentElement.children[0].children[1].getAttribute(
          "src"
        ),
        imageAlt = e.target.parentElement.parentElement.children[0].children[1].getAttribute(
          "alt"
        );
      modalImage.src = imageSource;
      modalImage.alt = imageAlt;

      modalHeader.textContent = e.target.parentElement.children[0].textContent;
      modalText.textContent = e.target.parentElement.children[1].textContent;

      modalContainer.style.display = "flex";

      document.body.classList.add("unscrolled");
    }
  });

  modalCloseButton.onclick = closeModal;

  modalContainer.onclick = function (e) {
    // e.stopPropagation();

    if (e.target == this) {
      closeModal();
    }
  };

  function closeModal() {
    modalImage.src = "";
    modalImage.alt = "";
    modalHeader.textContent = "";
    modalText.textContent = "";
    modalContainer.style.display = "none";
    document.body.classList.remove("unscrolled");
  }
});
