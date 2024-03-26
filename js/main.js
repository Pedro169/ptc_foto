/* Galeria Imagen Horizontal */
const gallery = document.querySelectorAll(".image");
const modal = document.querySelector(".modal");
const modalContent = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");

gallery.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalContent.src = image.querySelector("img").src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
/*Galeria Imagen vertical*/
const galleryh = document.querySelectorAll(".imageh");
const modalh = document.querySelector(".modalh");
const modalContenth = document.getElementById("modal-imageh");
const closeModalh = document.querySelector(".close-modalh");

galleryh.forEach((imageh) => {
  imageh.addEventListener("click", () => {
    modalh.style.display = "block";
    modalContenth.src = imageh.querySelector("img").src;
  });
});

closeModalh.addEventListener("click", () => {
  modalh.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalh) {
    modalh.style.display = "none";
  }
});
