import categoryPreviewHandler from './handlers/categoryPreview.js';

// Prepend navbar on top of the body

const navbarTemplate = document.getElementById('navigator-common-component');
const navbar = navbarTemplate.content.firstElementChild.cloneNode(true);
document.body.prepend(navbar);

// Append footer after other elements of the body

const footerTemplate = document.getElementById('footer-common-component');
const footer = footerTemplate.content.firstElementChild.cloneNode(true);
document.body.append(footer);

// Setting click event handler for categories

const categories = document.querySelectorAll('.categories > .cat');

if (categories?.length) {
  categories.forEach((cat) => {
    cat.addEventListener('click', categoryPreviewHandler);
  });
}
