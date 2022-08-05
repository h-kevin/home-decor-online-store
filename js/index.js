// Prepend navbar on top of the body

const navbarTemplate = document.getElementById('navigator-common-component');
const navbar = navbarTemplate.content.firstElementChild.cloneNode(true);
document.body.prepend(navbar);
