import createNavbar from '../common/navbar.js';
import createFooter from '../common/footer.js';
import createSectionHeader from '../common/sectionHeader.js';
import createButton from '../common/button.js';
import categoryPreviewHandler from './handlers/categoryPreview.js';
import { moveLeft, moveRight } from './handlers/newProductsNavArrows.js';

// Select elements

const topSectionMiddleColumn = document.querySelector('.top-section .middle-col');
const topSectionRightColumn = document.querySelector('.top-section .right-col');
const newProductsSection = document.querySelector('.new-products-section');
const productsByCategorySection = document.querySelector('.products-by-category-section');
const orderPlacementSection = document.querySelector('.how-to-place-order-section');
const socialMediaSubSection = document.querySelector('.social-media-subscription-section');

// Prepend navbar on top of the body

const navbar = createNavbar();
document.body.prepend(navbar);

// Append footer after other elements of the body

const footer = createFooter();
document.body.append(footer);

// Add section header

topSectionMiddleColumn.prepend(createSectionHeader(
  'CREATE A COZY ATMOSPHERE FOR YOUR HOME WITH US',
  'main-message',
));

newProductsSection.prepend(createSectionHeader(
  'NEW PRODUCTS',
));

productsByCategorySection.prepend(createSectionHeader(
  'HARMONY IN THE DETAILS',
));

orderPlacementSection.prepend(createSectionHeader(
  'HOW TO PLACE AN ORDER',
));

socialMediaSubSection.prepend(createSectionHeader(
  'SUBSCRIBE TO OUR INSTAGRAM',
));

// Add common button

topSectionRightColumn.append(createButton(
  'To the catalogue',
  'catalogue-shortcut',
));

newProductsSection.append(createButton(
  'All products',
));

productsByCategorySection.append(createButton(
  'All products',
));

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
