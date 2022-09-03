import switchImage from '../helpers/gallerySwitchImage.js';

/**
 * Left arrow click handler.
 * Moves the gallery from left to right by one image, if there is no more images
 * on the left side, scrolls all the way to the back of the gallery.
 * 
 * @param {MouseEvent} e - Click event
 */

export const moveLeft = (e) => {
  if (!e) {
    return;
  }

  const galleryContainer = document.querySelector('.new-products-section .products-list');
  const galleryItems = galleryContainer.children;

  switchImage(Array.from(galleryItems), 'left');
};

/**
 * Right arrow click handler.
 * Moves the gallery from right to left by one image, if there is no more images
 * on the right side, scrolls all the way to the start of the gallery.
 * 
 * @param {MouseEvent} e - Click event
 */

 export const moveRight = (e) => {
  if (!e) {
    return;
  }

  const galleryContainer = document.querySelector('.new-products-section .products-list');
  const galleryItems = galleryContainer.children;

  switchImage(Array.from(galleryItems), 'right');
};
