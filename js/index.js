import setSvgForIcon from "./helpers/setSvgForIcon.js";

// Prepend navbar on top of the body

const navbarTemplate = document.getElementById('navigator-common-component');
const navbar = navbarTemplate.content.firstElementChild.cloneNode(true);
document.body.prepend(navbar);

// Setting icons for the navbar elements

const logoIcon = document.querySelector('.navbar .logo');
const favoriteIcon = document.querySelector('.navbar .favorite');
const cartIcon = document.querySelector('.navbar .cart');

setSvgForIcon(logoIcon, 'navbar-menu-toggle');
setSvgForIcon(favoriteIcon, 'favorite');
setSvgForIcon(cartIcon, 'cart');
