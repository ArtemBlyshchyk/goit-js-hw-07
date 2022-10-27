import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
// console.log(galleryContainer);
const cardMarkup = galaryCardMarkup (galleryItems);
console.log(cardMarkup);

galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);

function galaryCardMarkup (galleryItems) {
    return galleryItems
    .map(({preview, original, description}) =>{
        return `
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
        `;
    })
    .join('');
};

// Використовуємо функціонал  SimpleLightbox БІБЛІОТЕКИ
let lightboxGallary = new SimpleLightbox ('.gallery a', { 
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: "250",
});

