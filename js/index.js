import createNavbar from '../common/navbar.js';
import createFooter from '../common/footer.js';
import categoryPreviewHandler from './handlers/categoryPreview.js';
import { moveLeft, moveRight } from './handlers/newProductsNavArrows.js';

// Prepend navbar on top of the body

const navbar = createNavbar();
document.body.prepend(navbar);

// Append footer after other elements of the body

const footer = createFooter();
document.body.append(footer);

// Setting click event handler for new product arrows in mobile view

const arrowsContainer = document.querySelector('.new-products-section .nav-arrows');
const leftArrow = arrowsContainer.children[0];
const rightArrow = arrowsContainer.children[1];

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

// Setting click event handler for categories

const categories = document.querySelectorAll('.categories > .cat');

if (categories?.length) {
  categories.forEach((cat) => {
    cat.addEventListener('click', categoryPreviewHandler);
  });
}
