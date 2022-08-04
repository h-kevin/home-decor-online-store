import setSvgForIcon from "./helpers/setSvgForIcon.js";

// Setting icons for the navbar elements

const logoIcon = document.querySelector('.navbar .logo');
const favoriteIcon = document.querySelector('.navbar .favorite');
const cartIcon = document.querySelector('.navbar .cart');

setSvgForIcon(logoIcon, 'navbar-menu-toggle');
setSvgForIcon(favoriteIcon, 'favorite');
setSvgForIcon(cartIcon, 'cart');
