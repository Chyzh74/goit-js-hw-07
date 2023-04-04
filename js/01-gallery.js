import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector("ul");
const cardsMarkup = itemsOfGallery(galleryItems);

listEl.insertAdjacentHTML("beforeend", cardsMarkup);

function itemsOfGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
    })
    .join("");
}

listEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  onCreateModal(event.target.dataset.source);
});

function onCreateModal(original) {
  const instance = basicLightbox.create(
    `<div class="modal"><img src="${original}"/></div>`
  );
  instance.show();

  window.addEventListener("keydown", onEscCloseModal);
  function onEscCloseModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
