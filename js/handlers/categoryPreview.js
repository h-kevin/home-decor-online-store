import getImagesForCategory from "../helpers/getImagesForCategory.js";

let categoryImagesTimeout = null;

/**
 * Category preview handler function.
 * Switches between categories and sets the new preview images.
 * 
 * @param {MouseEvent} e - Click event
 */

export default (e) => {
  if (!e) {
    return;
  }

  clearTimeout(categoryImagesTimeout);

  const categoryName = e.target.innerHTML;
  const leftPreviewPlaceholder = document.querySelector('.product-preview-placeholder.left-placeholder');
  const rightPreviewPlaceholder = document.querySelector('.product-preview-placeholder.right-placeholder');
  const leftPreviewPlaceholderImage = leftPreviewPlaceholder.children[0];
  const rightPreviewPlaceholderImage = rightPreviewPlaceholder.children[0];
  const newLeftImage = `url("${getImagesForCategory(categoryName, '../../img')[0]}")`;
  const newRightImage = `url("${getImagesForCategory(categoryName, '../../img')[1]}")`;

  const currentActiveCategory = document.querySelector('.categories > .cat.active');
  currentActiveCategory.classList.remove('active');
  e.target.classList.add('active');

  leftPreviewPlaceholderImage.style.opacity = '0';
  rightPreviewPlaceholderImage.style.opacity = '0';

  categoryImagesTimeout = setTimeout(() => {
    leftPreviewPlaceholderImage.style.backgroundImage = newLeftImage;
    rightPreviewPlaceholderImage.style.backgroundImage = newRightImage;
    leftPreviewPlaceholderImage.style.opacity = '1';
    rightPreviewPlaceholderImage.style.opacity = '1';
  }, 500);
};
