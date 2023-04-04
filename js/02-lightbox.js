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
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join("");
}

listEl.addEventListener("click", (event) => {
  event.preventDefault();
});

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
}); 