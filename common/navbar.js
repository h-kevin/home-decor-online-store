const navbar = () => {
  const markup = `
    <nav class="navbar">
      <i class="menu material-icons">menu</i>
      <h1 class="logo">MIRACLE</h1>
      <div class="fav-and-cart-container">
        <i class="favorite material-icons">favorite_border</i>
        <i class="cart material-icons-outlined">shopping_bag</i>
      </div>
    </nav>
  `;

  const placeholder = document.createElement('div');
  placeholder.innerHTML = markup;

  return placeholder.children[0];
};

export default navbar;
