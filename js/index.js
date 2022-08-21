import categoryPreviewHandler from './handlers/categoryPreview.js';

// Prepend navbar on top of the body

const navbarTemplate = document.getElementById('navigator-common-component');
const navbar = navbarTemplate.content.firstElementChild.cloneNode(true);
document.body.prepend(navbar);

// Setting click event handler for categories

const categories = document.querySelectorAll('.categories > .cat');

if (categories?.length) {
  categories.forEach((cat) => {
    cat.addEventListener('click', categoryPreviewHandler);
  });
}
