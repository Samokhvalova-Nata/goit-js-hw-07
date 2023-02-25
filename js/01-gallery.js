import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', handleGalleryContainerClick);

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>
    `;
    }).join('');
};

function handleGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const originUrl = evt.target.dataset.source;

    createModalOnGalleryItemClick(originUrl);
};

function createModalOnGalleryItemClick(url) {
    const modal = basicLightbox.create(`
		<img width="1400" height="900" src="${url}">
	`);

    modal.show();
    document.addEventListener('keydown', handleEscKeydown);

    function handleEscKeydown(evt) {
        if (evt.code === 'Escape') {
            modal.close();
        document.removeEventListener('keydown', handleEscKeydown);
        }
    }
};
