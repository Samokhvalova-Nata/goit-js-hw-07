import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    }).join('');
};

let gallery = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
        scrollZoom: false,
    }
);
