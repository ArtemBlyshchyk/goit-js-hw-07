import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(galaryCardMarkup(galleryItems));

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

const cardMarkup = galaryCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);

// 2. Реалізація делегування на div.gallery і отримання url великого зображення
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick (event) {
    event.preventDefault();
    const notGalleryImage = event.target.classList.contains('gallery__image');
    if(!notGalleryImage) {
        return;
    }
    // console.log(event.target);
    console.log(event.target.dataset.source);

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src = "${event.target.dataset.source}" width="800" height="600">   
        </div>
    `)

    instance.show();

    document.addEventListener('keydown', (event) => {
        if(event.key === 'Escape') instance.close();
    });

}

function galaryCardMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
         </div>
        `;
    })
    .join('');    
}






